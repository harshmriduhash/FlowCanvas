(function () {
    const script = document.currentScript as HTMLScriptElement;
    const projectKey = script?.getAttribute('data-project');

    if (!projectKey) {
        console.warn('[FlowCanvas] Missing data-project attribute on script tag.');
        return;
    }

    const API_BASE = 'https://flowcanvas.dev/api/embed';
    let activeFlow: any = null;
    let activeStepIndex = 0;

    const THEMES: Record<string, string> = {
        minimal: 'background: white; border: 1px solid #D6E0DA; color: #16201C; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);',
        bold: 'background: #0E7C66; color: white; border-radius: 12px; border: none; box-shadow: 0 8px 16px rgba(14,124,102,0.2);',
        dark: 'background: #16201C; color: white; border-radius: 12px; border: none; box-shadow: 0 8px 16px rgba(0,0,0,0.3);',
        glass: 'background: rgba(255,255,255,0.7); backdrop-filter: blur(8px); border: 1px solid rgba(14,124,102,0.1); color: #16201C; border-radius: 16px;'
    };

    async function init() {
        try {
            const res = await fetch(`${API_BASE}/config/${projectKey}`);
            if (!res.ok) return;

            const config = await res.json();
            if (!config.flows || config.flows.length === 0) return;

            flowsLoop(config.flows);
        } catch (err) {
            console.error('[FlowCanvas] Failed to load flows:', err);
        }
    }

    function flowsLoop(flows: any[]) {
        flows.forEach(flow => {
            if (shouldShowFlow(flow)) {
                startFlow(flow);
            }
        });
    }

    function shouldShowFlow(flow: any) {
        const currentUrl = window.location.href;
        const sessionKey = `fc_seen_${flow.id}`;
        const alreadySeen = localStorage.getItem(sessionKey);
        return !alreadySeen && flow.steps.length > 0 && (!flow.triggerCondition || currentUrl.includes(flow.triggerCondition));
    }

    function startFlow(flow: any) {
        activeFlow = flow;
        activeStepIndex = 0;
        renderStep();
    }

    function renderStep() {
        const step = activeFlow.steps[activeStepIndex];
        if (!step) {
            finishFlow();
            return;
        }

        const existing = document.getElementById('fc-tour-step');
        if (existing) existing.remove();

        const el = document.createElement('div');
        el.id = 'fc-tour-step';
        el.style.cssText = `
      position: fixed;
      z-index: 10000;
      padding: 20px;
      width: 280px;
      font-family: Inter, system-ui, sans-serif;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      ${THEMES[step.theme || 'minimal']}
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    `;

        const content = document.createElement('div');
        content.innerHTML = `<p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.5; font-weight: 500;">${step.content}</p>`;

        if (step.type === 'nps') {
            const scale = document.createElement('div');
            scale.style.cssText = 'display: grid; grid-template-columns: repeat(10, 1fr); gap: 4px; margin-bottom: 20px;';
            for (let i = 1; i <= 10; i++) {
                const btn = document.createElement('button');
                btn.innerText = i.toString();
                btn.style.cssText = `
                    height: 24px;
                    border-radius: 4px;
                    border: 1px solid rgba(0,0,0,0.1);
                    background: white;
                    font-size: 10px;
                    font-weight: bold;
                    cursor: pointer;
                    color: #16201C;
                `;
                btn.onclick = () => {
                    trackEvent('nps_score', i.toString());
                    advance();
                };
                scale.appendChild(btn);
            }
            content.appendChild(scale);
        }
        el.appendChild(content);

        const footer = document.createElement('div');
        footer.style.cssText = 'display: flex; align-items: center; justify-content: space-between;';

        const count = document.createElement('span');
        count.style.cssText = 'font-size: 10px; font-weight: bold; opacity: 0.5; text-transform: uppercase;';
        count.innerText = `Step ${activeStepIndex + 1} of ${activeFlow.steps.length}`;
        footer.appendChild(count);

        const nextBtn = document.createElement('button');
        nextBtn.innerText = activeStepIndex === activeFlow.steps.length - 1 ? 'Finish' : 'Next';
        nextBtn.style.cssText = `
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      ${step.theme === 'bold' || step.theme === 'dark' ? 'background: white; color: black;' : 'background: #0E7C66; color: white;'}
    `;
        nextBtn.onclick = advance;
        footer.appendChild(nextBtn);

        el.appendChild(footer);
        document.body.appendChild(el);

        // Positioning logic (Simplified for MVP, would use Popper/Floating-UI in v2)
        positionElement(el, step.anchor);

        // Entry animation
        requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1) translateY(0)';
        });

        trackEvent('view', step.id);

        // Auto-advance trigger
        if (step.advance_trigger === 'auto') {
            setTimeout(advance, 3000);
        }
    }

    function positionElement(el: HTMLElement, selector: string) {
        const anchor = selector ? document.querySelector(selector) : null;
        if (anchor) {
            const rect = anchor.getBoundingClientRect();
            el.style.top = `${rect.bottom + 10}px`;
            el.style.left = `${rect.left}px`;
        } else {
            el.style.top = '50%';
            el.style.left = '50%';
            el.style.transform = 'translate(-50%, -50%)';
        }
    }

    function advance() {
        activeStepIndex++;
        renderStep();
    }

    function finishFlow() {
        const existing = document.getElementById('fc-tour-step');
        if (existing) existing.remove();
        localStorage.setItem(`fc_seen_${activeFlow.id}`, 'true');
        trackEvent('complete', activeFlow.id);
    }

    function trackEvent(type: string, id: string) {
        fetch(`${API_BASE}/events`, {
            method: 'POST',
            body: JSON.stringify({
                projectKey,
                flowId: activeFlow.id,
                stepId: type === 'view' ? id : undefined,
                eventType: type,
                anonymousVisitorId: getVisitorId()
            })
        });
    }

    function identify(properties: Record<string, any>) {
        fetch(`${API_BASE}/events`, {
            method: 'PUT',
            body: JSON.stringify({
                projectKey,
                anonymousVisitorId: getVisitorId(),
                properties
            })
        });
    }

    function getVisitorId() {
        let id = localStorage.getItem('fc_visitor_id');
        if (!id) {
            id = 'fc_v_' + Math.random().toString(36).substring(2, 11);
            localStorage.setItem('fc_visitor_id', id);
        }
        return id;
    }

    // Expose identify to the window object
    (window as any).FlowCanvas = {
        identify
    };

    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();
