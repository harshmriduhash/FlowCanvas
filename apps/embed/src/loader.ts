(function () {
    const script = document.currentScript as HTMLScriptElement;
    const projectKey = script?.getAttribute('data-project');

    if (!projectKey) {
        console.warn('[FlowCanvas] Missing data-project attribute on script tag.');
        return;
    }

    const API_BASE = 'https://flowcanvas.dev/api/embed';

    async function init() {
        try {
            const res = await fetch(`${API_BASE}/config/${projectKey}`);
            if (!res.ok) return;

            const config = await res.json();
            if (!config.flows || config.flows.length === 0) return;

            renderFlows(config.flows);
        } catch (err) {
            console.error('[FlowCanvas] Failed to load flows:', err);
        }
    }

    function renderFlows(flows: any[]) {
        flows.forEach(flow => {
            if (shouldShowFlow(flow)) {
                startFlow(flow);
            }
        });
    }

    function shouldShowFlow(flow: any) {
        // Basic triggers (URL matching, etc.)
        const currentUrl = window.location.href;
        return flow.steps.length > 0 && (!flow.triggerCondition || currentUrl.includes(flow.triggerCondition));
    }

    function startFlow(flow: any) {
        console.log('[FlowCanvas] Starting flow:', flow.name);
        // Real implementation would render tooltips/modals logic here
    }

    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();
