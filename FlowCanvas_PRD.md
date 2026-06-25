FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **FLOWCANVAS** 

_Build product tours like you design, not like you code._ 

## **PRODUCT REQUIREMENTS DOCUMENT** 

Full-stack build specification for design, engineering, and deployment 

Version 1.0  |  June 2026 Prepared by Harsh  |  Suzerain Labs 

**Track: Senior Frontend Engineer Portfolio — Product 2 of 2** 

Page 1 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **Table of Contents** 

Page 2 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **1. Executive Summary** 

## **1.1 What is FlowCanvas** 

FlowCanvas is a codeless, visually-driven product tour and onboarding flow builder. Product and growth teams build guided walkthroughs on a Figma-like canvas — placing tooltips, modals, and hotspots directly onto a live preview of their own app — then embed a single line of JavaScript to ship it. Every published flow comes with real funnel analytics showing exactly where users drop off at each step, and flows support conditional branching so the same tour can adapt based on what a user has already done. 

This is the affordable, visually excellent alternative to Appcues and Pendo for teams who find $2,000+/month enterprise pricing absurd for what is fundamentally a tooltip-and-analytics product, without sacrificing the design quality those tools' marketing pages promise but their actual builder UIs rarely deliver. 

## **1.2 Core Problem** 

Product onboarding is consistently the highest-leverage lever for activation and retention, yet the tooling to build good onboarding flows is either prohibitively expensive (Appcues, Pendo, both routinely $2,000-$10,000+/month for mid-market usage) or genuinely unpleasant to use (most builder UIs in this category look like they were designed in 2015 and never revisited, despite charging enterprise prices). Seed-to-Series-B companies — exactly the teams who need activation tooling most — are priced out or underserved by both ends of the market. 

## **1.3 Why Now** 

- Product-led growth has become the default go-to-market motion for B2B SaaS, making onboarding tooling a near-universal need rather than a nice-to-have. 

- Canvas-based visual editors (Fabric.js, Konva, and similar libraries) matured enough by 20242025 to make a genuinely Figma-quality drag-and-drop builder buildable by a small team, not just well-funded incumbents. 

- Existing players (Appcues, Pendo) are enterprise-priced and serve enterprise buyers almost exclusively at this point, leaving the sub-$200/month segment — the exact segment of funded startups Suzerain Labs already serves as an agency — meaningfully underserved. 

- Userflow has validated demand in the affordable tier but hasn't made visual design quality and animation craft a genuine differentiator, leaving room for a more design-forward entrant. 

## **1.4 Product Vision (12-Month Horizon)** 

FlowCanvas becomes the default onboarding tool for product-led startups who care about both conversion and craft — not the cheapest option, but the one where the tours themselves feel genuinely 

Page 3 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

well-designed rather than like a generic tooltip library, with funnel analytics good enough that product teams check it as part of their regular activation-metrics review, not just at launch. 

## **1.5 Success Metrics (North Star + Supporting)** 

|**Metric**|**Defniton**|**Month 3 Target**|**Month 6 Target**|
|---|---|---|---|
|North Star|Weekly tour sessions served (a real end-<br>user viewing a published fow)|8,000|60,000|
|Actvaton|% of new accounts that publish 1 live fow<br>within 7 days|38%|55%|
|Retenton|Week-4 retained accounts|30%|48%|
|Builder satsfacton (self-<br>reported)|% ratng the canvas editor 'as good or<br>beter' than Figma for this use case|—|40%|
|Revenue|MRR|₹2.2L|₹7L|
|Funnel completon<br>(aggregate)|% of started tours completed across all<br>customer fows|—|55%|



Page 4 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **2. Branding & Visual Identity** 

## **2.1 Brand Positioning** 

FlowCanvas should feel energetic and growth-oriented without tipping into generic "growth hacking" cliché — emerald-teal communicates forward momentum and clarity, while a warm amber accent (reserved for the actual in-tour highlight states: tooltips, hotspots, step indicators) gives the product a genuine sense of guidance and warmth, since the entire point of the product is helping someone feel confidently led through something new rather than lost. 

## **2.2 Logo** 

Primary mark: a rounded directional arrow formed from three connected dots of increasing size, read simultaneously as a path/flow and as a sequence of steps (dot, dot, dot → arrival). Single-weight, 2.5px stroke at 32px reference size, scales cleanly to a 16px favicon. 

- Logo lockup: icon + wordmark "FlowCanvas" in Söhne/Inter Semibold, icon to the left, vertically centered against the wordmark's cap height. 

- Icon-only mark used for: favicon, browser tab, the embed script's loading-state indicator (shown briefly while a flow's config loads on a customer's site). 

- Minimum clear space: 0.5x icon height on all sides. 

- Never recolor the icon to amber — that color is reserved exclusively for in-tour highlight states inside both the builder and the live embedded widget, never for branding. 

## **2.3 Color System** 

Emerald-teal communicates energetic clarity; amber is used exclusively for active step/hotspot states inside both the canvas builder and the live published tour, so its appearance always means "this is the thing to look at right now." 

|**Token**|**Hex**|**Usage**|
|---|---|---|
|Primary / Emerald 600|#0E7C66|Primary butons, actve nav, links, focus rings|
|Primary Dark / Emerald 800|#0A5C4C|Headings on light bg, hover states|
|Primary Tint / Emerald 50|#E5F5F0|Card backgrounds, badges, subtle highlights|
|Accent / Amber 500|#F2994A|Actve tour step highlight, hotspot pulse, canvas selecton<br>handles|
|Ink (text primary)|#16201C|Body copy, headings|
|Gray (text secondary)|#5A6460|Captons, metadata, placeholder text|



Page 5 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

|**Token**|**Hex**|**Usage**|**Usage**|**Usage**|
|---|---|---|---|---|
|Surface|#FFFFFF|Cards, modals, primary surface|||
|Surface Muted|#F2F5F2|Page background, code blocks, canvas workspace background|||
|Border|#D6E0DA|Hairline dividers, card outlines, canvas grid lines|||
|Success|#1E9E6B|Flow published confrmaton, healthy funnel-completon<br>indicator|||
|**2.4 Typography**|||||
|**Role**|**Typeface**||**Weights used**|**Notes**|
|Display / Headings|Söhne (fallback: Inter)||500, 600|Tight leter-spacing (-1%) at<br>large sizes|
|Body|Inter||400, 500|16px base, 1.6 line-height|
|Mono / Embed code &<br>selectors<br>|JetBrains Mono<br>||400, 500<br>|Used for the embed snippet,<br>CSS selector inputs, analytcs<br>event names<br>|



Type scale: Display 48/56px, H1 36/44px, H2 28/36px, H3 22/30px, Body 16/26px, Caption 13/18px, Mono 14/20px. 

## **2.5 Taglines & Voice** 

- Primary tagline: "Build product tours like you design, not like you code." 

- Secondary / landing page subhead: "A Figma-quality canvas for the onboarding flow your activation metrics are begging for." 

- Voice principles: energetic but specific — copy should reference real product/growth concepts (activation, drop-off, funnels) rather than vague hype, since the audience (PMs and growth engineers) is metrics-literate and skeptical of fluff. 

- Empty states are encouraging and concrete — e.g. "No flows yet. Your first tour takes about 10 minutes to build." 

## **2.6 Iconography & Imagery** 

Tabler Icons (outline) throughout the functional UI. No stock photography. Marketing visuals are real product UI (the canvas builder, the funnel analytics chart, a live tour overlay on a sample app) in browser-chrome frames. 

Page 6 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **2.7 Logo & Brand Usage Don'ts** 

- Don't use amber anywhere except active step/hotspot states — it must never become a generic accent or CTA color. 

- Don't place the emerald logo on an emerald background below 4.5:1 contrast. 

- Don't combine more than 2 typefaces on any single screen. 

Page 7 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **3. Landing Page & Marketing Site** 

## **3.1 Page Structure Overview** 

Single-page marketing site engineered for a PM or growth engineer comparing FlowCanvas against Appcues/Pendo's enterprise sales process — the page needs to demonstrate the builder's visual quality immediately, since craft is the core differentiator against a sub-$200/month competitor like Userflow, not just price. 

- Sticky navbar 

- Hero with a live, interactive canvas-builder demo 

- Social proof strip 

- Problem framing section 

- How it works (3-step visual) 

- Feature bento grid 

- Funnel analytics explainer (core differentiator) 

- Embed simplicity showcase 

- Pricing table 

- FAQ accordion 

- Final CTA banner 

- Footer 

## **3.2 Navbar — Detailed Spec** 

Fixed/sticky, height 72px, transparent over hero, transitions to white/95% with backdrop-filter: blur(12px) and a 0.5px bottom border past 40px scroll. 

|**Element**|**Content**|**Behavior**|
|---|---|---|
|Logo (lef)|FlowCanvas icon + wordmark|Click → scrolls to top|
|Nav links (center)|Product · Examples · Pricing · Docs|Scroll-to-anchor; Docs opens /docs|
|Secondary CTA (right)|"Log in"|Ghost buton → /login|
|Primary CTA (right)|"Start free"|Filled emerald buton → /signup; subtle<br>pulse once on load|
|Mobile|Hamburger replaces center links below<br>768px|Slide-down panel, stacked links, full-width<br>CTAs|



Page 8 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **3.3 Hero Section** 

Two-column desktop layout (50/50). Left: copy + CTAs. Right: a live, interactive demo — a miniature version of the actual canvas builder (a simplified, read-only-but-hoverable preview) showing a tooltip step being placed onto a sample app screenshot. 

## **Hero Copy (exact text)** 

**Eyebrow:** "For teams who got quoted $30,000/year for tooltips" 

**H1:** "Build product tours like you design, not like you code." 

**Subhead:** "Drag tooltips, modals, and hotspots directly onto your live app on a Figma-quality canvas. Ship with one line of code. See exactly where users drop off." 

**Primary CTA:** "Build your first flow — free" (button) 

**Secondary CTA:** "See a live tour in action" (text link with play icon) 

**Microcopy under CTA:** "No credit card. Free up to 1,000 monthly sessions." 

## **Hero visual interaction spec** 

- A sample app screenshot renders inside a browser-chrome frame. A small floating "+ Add step" cursor-following ghost element animates from the canvas toolbar toward a button in the screenshot (1.2s ease-in-out path animation). 

- On arrival, a tooltip step materializes (scale 0.9 → 1, fade in, 250ms spring) anchored to that button, with placeholder text typing in at 35ms/char: "Click here to create your first project". 

- An amber pulse ring animates once around the anchor point (the same visual language used in the real product's live tour widget, so this demo is honestly representative, not a separate flashier mockup). 

- A small step-counter chip ("Step 1 of 4") fades in below, then the whole sequence holds for 3 seconds before resetting and looping, alternating between 2-3 different example flows across loops for variety. 

## **3.4 Social Proof Strip** 

"Onboarding flows for teams who'd rather spend the enterprise budget on engineers" + grayscale placeholder company logomarks at 40% opacity, full color on hover. 

## **3.5 Problem Framing Section** 

**H2:** "Onboarding tooling shouldn't cost more than your onboarding engineer." 

Three-column stat layout: 

Page 9 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

- "$24,000+/year" — "typical enterprise pricing for tools built around the same core idea: a tooltip and a funnel chart" 

- "80%" — "of a new user's lifetime retention odds are typically set within their first session — the exact moment most teams have zero structured guidance for" 

- "2015-era UX" — "is how most affordable alternatives' actual builder interfaces still look and feel, despite the visual-design tooling world having moved on" 

## **3.6 How It Works — 3 Step Visual** 

1. Design — "Drag tooltips, modals, and hotspots directly onto your live app on a Figma-style canvas." 

2. Embed — "Paste one line of JavaScript. Your flow goes live instantly, no deploy required." 

3. Measure — "Watch real funnel analytics show you exactly where users complete or abandon each step." 

Visual treatment: animated connecting line draws between the three steps on scroll-into-view, IntersectionObserver-triggered once. 

## **3.7 Feature Bento Grid** 

Asymmetric 12-column bento grid, the signature visual section. Cards: 1px border, 16px radius, hover lift (translateY(-4px), soft shadow growing in over 200ms). 

|**Cell**|**Span**|**Content**|
|---|---|---|
|Large (top-lef)|7 cols × 2 rows|Live canvas editor preview — a scaled-down but functonal-<br>looking view of the actual builder UI, showing draggable step<br>elements on a sample screenshot with selecton handles visible|
|Medium (top-right)|5 cols × 1 row|Funnel drop-of chart — a small animated bar chart showing<br>step-by-step completon percentages descending|
|Small (mid-right)|5 cols × 1 row|Conditonal branching — a mini fowchart-style visual showing<br>a decision node splitng into two paths based on a conditon<br>label|
|Wide (botom)|12 cols × 1 row|Theme gallery strip — 4-5 small preview thumbnails showing<br>the same tooltp step rendered in diferent visual themes<br>(glassmorphism, minimal, bold, dark mode)|



## **3.8 Funnel Analytics Explainer** 

This section exists specifically to differentiate from cheaper alternatives that treat analytics as an afterthought — funnel data quality is where FlowCanvas competes with the enterprise tier, not just price. 

Page 10 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

**H2:** "See exactly where your tour loses people." 

Visual: a realistic funnel chart showing 5 steps with descending completion percentages (100% → 87% → 64% → 58% → 41%), with the steepest drop-off (64% → 58%) highlighted in amber and a caption: "Most teams find their biggest drop-off in step 3 — usually a sign the tooltip there needs to say less, not more." 

## **3.9 Embed Simplicity Showcase** 

**H2:** "One line. No deploy. Live in seconds." 

A code block showing the actual embed snippet (Section 8.10's real format) next to a "copy" button, with a small caption: "Paste this once. Every flow you publish afterward goes live instantly — no code changes, no redeploy." 

## **3.10 Pricing Table** 

4-tier pricing, Growth tier emphasized with a 2px emerald border + "Most popular" badge. Monthly/Annual toggle (annual shows "2 months free"). 

|**Plan**|**Price**|**Includes**|
|---|---|---|
|Free|₹0/mo|1 fow · 1,000 monthly sessions · basic analytcs|
|Starter|₹4,100/mo (~$49)|5 fows · 10,000 monthly sessions · funnel analytcs · A/B<br>testng|
|Growth|₹16,600/mo (~$199)|Unlimited fows · 100,000 monthly sessions · conditonal<br>branching · NPS prompts · priority support|
|Enterprise|Custom|Unlimited sessions · SSO/SAML · dedicated success manager ·<br>custom theming|



## **3.11 FAQ Accordion** 

6 questions, single-open accordion, 250ms height transition via CSS grid-template-rows (0fr → 1fr). 

- "Will the embed script slow down my site?" → "No — the script is under 15KB gzipped, loads asynchronously, and never blocks your page's own rendering." 

- "Do I need to redeploy my app to change a tour?" → "Never. Every flow you publish or edit in the builder goes live immediately on your site through the existing embed script." 

- "How does element targeting work if my app's DOM structure changes?" → "We support both CSS selectors and a more resilient text-content/attribute-based fallback, plus a visual re-anchor tool if a step's target element moves." 

- "Can I theme tours to match my brand?" → "Yes — every flow can use a built-in theme (glassmorphism, minimal, bold, dark) or fully custom colors, fonts, and corner radius." 

Page 11 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

- "What counts as a 'session' for billing?" → "One session is one user viewing at least one step of any flow, counted once per user per day regardless of how many steps or flows they see." 

- "Can I export everything if I leave?" → "Yes, full flow configurations and analytics history export as JSON/CSV, anytime, on every plan including Free." 

## **3.12 Final CTA Banner** 

Full-width emerald-800 background section. White H2: "Your activation metrics are waiting on a tour you haven't built yet." White-outline button: "Build your first flow — free." 

## **3.13 Footer** 

|**Column**|**Links**|
|---|---|
|Product|Features · Examples · Pricing · Changelog · Status|
|Resources|Docs · API Reference · Blog · Security|
|Company|About · Careers · Contact|
|Legal<br>|Privacy Policy · Terms of Service · DPA<br>|



Bottom bar: "© 2026 FlowCanvas, a Suzerain Labs product." + social icons (X/Twitter, LinkedIn, GitHub) right-aligned. 

Page 12 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **4. Design System & Component Library** 

## **4.1 Foundational Tokens** 

Tailwind CSS theme extension, shadcn/ui (Radix primitives) as the component base, Framer Motion for animation, Aceternity UI patterns for the hero canvas demo and bento hover states. 

|**Token**|**Value**|
|---|---|
|Border radius (cards)|16px (rounded-2xl)|
|Border radius (butons/inputs)|10px (rounded-xl)|
|Shadow (restng)|none — fat design, borders only|
|Shadow (hover/elevated)|0 8px 24px rgba(14,124,102,0.08)|
|Spacing scale|4px base unit: 4/8/12/16/24/32/48/64/96|
|Max content width|1200px (1440px for dashboard/canvas editor)|
|Grid|12-column, 24px guter, breakpoints at 480/768/1024/1280|



## **4.2 Signature Components** 

## **Canvas editor (Fabric.js-based, the core of the product)** 

A Fabric.js canvas rendering a screenshot or live iframe of the customer's app as the background layer, with draggable, resizable step elements (tooltip, modal, hotspot) as Fabric objects on top. Selection handles use the amber accent color consistently with the live-widget highlight color, reinforcing visual continuity between 'what you're building' and 'what users will see.' Snapping guides (thin emerald lines) appear when dragging a step near alignment with another element or the canvas center, implemented via Fabric's object-moving event combined with proximity-threshold checks against other objects' bounding boxes. 

## **Step property panel** 

A right-side panel (320px) that updates contextually based on the selected canvas object: text content (rich text, basic formatting), anchor element (CSS selector picker, with a 'click to select on the live preview' mode), styling (theme selector, custom color override), and step-advance trigger (button click, auto-advance after N seconds, or manual 'next' click). 

## **Conditional branching visual editor** 

A simplified flowchart canvas (also Fabric-based, reusing the same drag/connect interaction patterns as the step editor) where steps are nodes and conditions are labeled connecting lines, letting a non- 

Page 13 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

technical PM build branching logic ("if user clicked X, show step 4b instead of step 4a") without writing any code. 

## **Glassmorphic command palette (⌘K)** 

Same pattern as other Suzerain Labs products for consistency: backdrop blur(4px) dark overlay, palette background rgba(255,255,255,0.85) with backdrop-filter: blur(20px) saturate(180%), 1px translucent border, 20px radius. Used for jumping between flows and viewing analytics quickly. 

## **Bento dashboard cards** 

Dashboard home: a large "Your flows" card spanning 8 columns (grid of flow cards with live session counts), a "This week's completions" stat card at 4 columns, and a funnel-summary strip below. 

## **Live tour widget themes (the actual embedded product, not just the builder)** 

Four built-in visual themes for the rendered tour steps themselves: Glassmorphism (translucent blurred background, soft border), Minimal (solid white, thin border, no shadow), Bold (solid emerald background, white text, larger type), and Dark (near-black background, high-contrast text) — each fully spec'd with exact color/blur/shadow values so the embedded widget's rendering is pixel-precise to what's previewed in the builder, not an approximation. 

## **Skeleton loaders** 

Every async surface (canvas loading the target app preview, analytics chart data fetching, flow list loading) uses shaped skeleton loaders matching final layout dimensions — e.g. the funnel chart skeleton shows shimmering bar shapes at the eventual chart's exact step count and proportions once known, so the layout never jumps. 

## **Background lines (hero only)** 

Faint animated SVG dotted-path lines (emerald at 6% opacity) suggesting a flow/journey, drifting slowly behind the hero content, 70s loop, disabled under prefers-reduced-motion. 

## **4.3 Motion Principles** 

- Page transitions: 150ms fade + 8px translateY, ease-out. 

- Button press: scale(0.97), 80ms. 

- Canvas object drag: no easing (1:1 with pointer for responsiveness), but snapping engagement has a small 60ms ease-out settle. 

- Live tour step entry (in the actual embedded widget on a customer's site): scale 0.9 → 1 + fade, 250ms spring (stiffness 320, damping 26) — slightly snappier than the portfolio's general toast pattern, since a tour step appearing should feel immediate and confident, not languid. 

Page 14 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

- Hotspot pulse (live widget): 1.6s loop, scale 1 → 1.15 + opacity fade on the outer ring, reserved exclusively for unactioned hotspots, consistent with the portfolio-wide convention of reserving persistent pulse animation for elements awaiting user attention. 

- All durations respect prefers-reduced-motion: reduce, collapsing to instant or opacity-only transitions in both the builder and the live embedded widget — this matters especially for the live widget, since it runs on customer sites where the end user's own motion preferences must be respected, not just FlowCanvas's own marketing/app surfaces. 

Page 15 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **5. User Journeys** 

## **5.1 First-Time User Journey (New Account)** 

4. Lands on marketing site from a search, an Appcues/Pendo-alternative comparison post, or referral. 

5. Clicks "Build your first flow — free" → routed to /signup. 

6. Signs up via Google OAuth or email + OTP (no password). 

7. Lands on /onboarding/project — names their project (e.g. "Acme App") and pastes their app's URL. 

8. Lands on /onboarding/install-snippet — shown the embed snippet with framework-specific install instructions (plain HTML, React, Next.js, Vue) and a clear "I'll do this later" skip option, since requiring the snippet before any builder access would block the more important first experience: seeing the canvas itself. 

9. Lands directly in the canvas editor with a new untitled flow, the target app URL loaded as a live iframe preview (or a captured screenshot if the site blocks iframe embedding via X-FrameOptions, detected automatically with a graceful fallback explanation). 

10. Guided first-step prompt: "Click anywhere on the preview to place your first tooltip." The moment the user clicks, a tooltip step appears with an editable text field immediately focused — minimizing the gap between intent and the first tangible result. 

11. User adds 2-3 steps, previews the flow in a live-preview mode (simulates exactly what an end user would see, full animation fidelity), then clicks "Publish." 

12. If the embed snippet wasn't installed during onboarding, a clear modal reappears at publish time: "Almost there — install this one line to make your flow live" with the same snippet and copy button, now appropriately positioned at the moment it's actually needed rather than upfront. 

13. Redirected to the flow's analytics page, which (being brand new) shows a clear "Waiting for your first session" state with a live-updating indicator, rather than an empty chart that looks broken. 

## **5.2 Returning User Journey** 

Returning users land directly on the dashboard (valid session), showing all flows with live session counts and completion rates at a glance — designed so opening the app immediately answers "how are my tours performing" without clicking into each one. 

- Session persists via secure httpOnly refresh token cookie (30-day rolling expiry); access token refreshes silently every 15 minutes. 

Page 16 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

- If the embed snippet stops reporting sessions unexpectedly (detected via an absence-ofheartbeat check), a banner appears: "No sessions reported from [project] in 48 hours — check the embed snippet is still installed." 

## **5.3 Power User Journey (Growth PM)** 

Growth PMs have an additional Settings section: A/B Testing (configure two variants of a flow and split traffic, viewing comparative completion rates), Themes (define a custom brand theme once, applied across all flows), and Segments (target flows to specific user properties passed via the embed snippet's identify call, e.g. showing an advanced-features tour only to users on a paid plan). 

Page 17 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **6. Onboarding & Offboarding** 

## **6.1 Onboarding — Detailed Steps** 

## **Step 1: Account creation** 

Auth via Google OAuth or email OTP (see Section 7 for full spec). No password ever required. 

## **Step 2: Project creation** 

Single form: Project name (required, 3-50 chars), App URL (used to load the live preview in the canvas editor). 

## **Step 3: Embed snippet (soft-guided, explicitly skippable)** 

As described in Section 5.1 — deliberately not a hard gate, since forcing a code change before any builder value is shown is exactly the kind of friction that kills activation for a product whose entire pitch is ease of use. 

## **Step 4: First flow creation (the core activation moment)** 

The guided canvas experience described in Section 5.1, engineered so a usable first flow exists within the same session as signup. 

## **Step 5: Publish & verify** 

After publishing, a "Test your flow" button opens the project's URL in a new tab with a query parameter that forces the flow to display regardless of normal targeting rules, so the user can immediately verify the live result without waiting for a real end-user session. 

## **Step 6: Invite teammates (soft prompt, skippable)** 

Non-blocking toast after the first publish: "Invite your team to build flows together" with an inline email input. 

## **6.2 Offboarding — Detailed Flows** 

## **6.2.1 User unpublishes a flow** 

14. Flow detail page → "Unpublish." 

15. Confirmation modal: "This flow will stop showing to users immediately. Its analytics history is kept." 

16. On confirm: flow status set to draft, the embed script stops serving it on the next config poll (typically within 60 seconds, per the caching strategy in Section 9.4). 

Page 18 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **6.2.2 Admin removes a member** 

17. Settings → Members → kebab menu → "Remove." 

18. Confirmation modal with the member's name. On confirm: membership removed, sessions invalidated, removed user emailed a non-alarming notice. 

## **6.2.3 Full account deletion** 

19. Settings → Account → "Delete my account" (danger-zone styled, requires typing DELETE to confirm). 

20. Soft-delete immediately: deleted_at = now(), sessions invalidated, user logged out. 

21. Hard-delete (PII scrub, row removal) runs 30 days later via scheduled job. Immediate email confirms deletion with a 30-day "Restore your account" link. 

22. Blocked if the user is the sole admin of a project with other members, until ownership transfers. 

## **6.2.4 Project deletion (admin-initiated, full data wipe)** 

23. Settings → Danger Zone → "Delete project." Requires typing the project name to confirm. 

24. On confirm: all members notified by email, the embed snippet immediately stops serving any flows for that project (config endpoint returns an empty/inactive response), all flow/analytics data soft-deleted then hard-purged after 30 days. 

## **6.3 Empty States (Voice & Content)** 

- No flows yet: "No flows yet. Your first tour takes about 10 minutes to build." + Create button. 

- Flow published but no sessions yet: "Waiting for your first session..." with a live-updating pulse indicator (not a static message, since this state often resolves within minutes of a real visit and should feel alive). 

- No team members beyond the creator: "Just you for now. Invite teammates to build flows together." 

- Search/filter with no results: "No flows match '[query]'. Try a different status filter." 

Page 19 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **7. Authentication & Authorization — Full Specification** 

## **7.1 Auth Philosophy** 

Passwordless by design, identical philosophy to other Suzerain Labs products: Google OAuth or email OTP as the only two entry methods, removing password-related friction for what's frequently a fast, low-commitment first signup during a PM's tool evaluation. 

## **7.2 Sign-Up / Sign-In Flow** 

## **Path A: Google OAuth** 

25. User clicks "Continue with Google" on /signup or /login. 

26. Redirected to Google's OAuth consent screen requesting scopes: openid, email, profile. 

27. Google redirects to /api/auth/callback/google with an authorization code. 

28. Backend exchanges code for tokens, verifies the ID token signature, extracts email + name + avatar. 

29. If email doesn't exist in users: create user row, email_verified = true. If it exists: standard sign-in. 

## **Path B: Email OTP** 

30. User enters email, clicks "Continue." 

31. Backend generates a 6-digit OTP, stores a hashed version (bcrypt) with a 10-minute expiry, sends via Resend. 

32. User redirected to /verify, enters the 6-digit code in an auto-advancing 6-box input (autosubmits on 6th digit). 

33. Backend verifies: code matches hash, not expired, attempt count < 5 (rate-limited against brute force). 

34. On success: user row created if new, session issued, redirected to /onboarding/project. 

35. Resend cooldown: 45 seconds between requests for the same email, enforced via a Redis key with TTL. 

## **7.3 Session Management** 

|**Token**|**Storage**|**Lifetme**|**Contents**|
|---|---|---|---|
|Access token|Memory (JS variable) + sent<br>as Bearer header|15 minutes|user_id, project_id, role, exp|
|Refresh token|htpOnly, Secure,<br>SameSite=Strict cookie|30 days, rolling|session_id (opaque, looked<br>up server-side)|



Page 20 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

Identical refresh mechanics to other Suzerain Labs products: silent /api/auth/refresh call on accesstoken expiry, sliding 30-day window capped to extend only when the session is actively used within the last 7 days. 

## **7.4 Logout Flow** 

36. User clicks "Log out" in the account menu. 

37. Frontend calls /api/auth/logout, server marks the session row revoked_at = now(). 

38. Refresh cookie cleared (Set-Cookie with Max-Age=0). 

39. Access token discarded client-side, in-memory state cleared. 

40. Redirect to marketing homepage. 

## **7.5 Multi-Project & Switching** 

A single user identity can belong to multiple projects via the memberships join table. The project switcher (top-left dropdown) lists all projects the user belongs to; switching changes the project_id claim embedded in the next-issued access token, no separate login required. 

## **7.6 Embed Script Security Model (Critical, Product-Specific)** 

The embed script runs on the customer's own production site and is loaded by every visitor to that site — this is a meaningfully different trust boundary than FlowCanvas's own authenticated app, since the embed script itself is fully public/client-side code with no expectation of secrecy, and must be designed defensively: 

- Each project has a public, non-secret project_key embedded directly in the snippet — this key only ever grants read access to that project's published flow configurations, never write access to anything, so its public exposure is by design, not a leak. 

- The embed script never has the ability to call any authenticated FlowCanvas API endpoint — it only fetches public flow configs and posts anonymous analytics events, both rate-limited per project_key to prevent abuse (e.g. someone spamming fake analytics events to corrupt a competitor's funnel data). 

- Flow configuration responses are cached aggressively at the CDN edge (60-second TTL) both for performance and to reduce the value of any single request as an attack vector. 

- The embed script is served from a dedicated subdomain with its own minimal CSP, isolated from the main application's cookies and session context entirely — a compromised or malicious customer site embedding the script can never gain any access to FlowCanvas's own authenticated session data, since the script simply has none available to it. 

Page 21 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **7.7 Authorization Model (RBAC)** 

|**Role**|**Can build/edit**<br>**fows**|**Can**<br>**publish/unpubl**<br>**ish**|**Can view**<br>**analytcs**|**Can**<br>**invite/remove**<br>**members**|**Can**<br>**manage**<br>**billing**|
|---|---|---|---|---|---|
|Member|Yes|No|Yes|No|No|
|Editor|Yes|Yes|Yes|No|No|
|Admin|Yes|Yes|Yes|Yes|Yes|
|Owner (auto-assigned to<br>project creator)<br>|Yes<br>|Yes<br>|Yes<br>|Yes<br>|Yes (+<br>ownership<br>transfer)<br>|



Authorization enforced server-side via middleware resolving role from the memberships table — never trusted from client-supplied data. 

## **7.8 Security Hardening Checklist** 

- **☑** All cookies: httpOnly, Secure, SameSite=Strict. 

**☑** CSRF protection via double-submit cookie pattern on all state-changing requests in the authenticated application (not applicable to the public embed script's endpoints, which use the project_key + ratelimiting model from Section 7.6 instead). 

- **☑** Rate limiting: 10 OTP requests/hour/IP, 5 OTP verify attempts per code, 100 API 

requests/minute/user on the authenticated app; the public embed endpoints are separately rate-limited per project_key (Section 7.6) at a much higher threshold appropriate for real traffic volume. 

- **☑** OAuth state parameters cryptographically random and verified on callback to prevent CSRF on the OAuth flow. 

**☑** All API inputs validated server-side with Zod schemas before touching the database, including strict sanitization of any rich-text step content to prevent stored XSS from being served back out through the public embed script onto customer sites. 

- **☑** SQL access exclusively through parameterized queries / Prisma ORM — zero string-concatenated SQL anywhere. 

**☑** Content Security Policy header disallows inline scripts except nonce'd ones, on the main application; the embed script itself is built to be CSP-friendly for customer sites with strict policies, documented clearly so customers can add the correct allowlist entry. 

- **☑** Project-level data isolation enforced at the database query layer — defense against cross-tenant data leaks. 

- **☑** Audit log (immutable, append-only) records: login, flow publish/unpublish, project_key regeneration, member add/remove. 

- **☑** project_key regeneration available on demand (Settings → Embed) for any customer who suspects their key has been scraped/abused, immediately invalidating the old key. 

Page 22 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

**☑** Dependency vulnerability scanning via GitHub Dependabot on every PR; high/critical CVEs block merge. 

Page 23 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **8. Application Pages — Full Frontend Specification** 

## **8.1 Route Map** 

|**Route**|**Purpose**|**Auth required**|
|---|---|---|
|/|Marketng landing page|No|
|/signup, /login|Auth entry (same component, diferent copy)|No|
|/verify|OTP entry screen|No (session-pending<br>only)|
|/onboarding/project|Create project|Yes (new user)|
|/onboarding/install-snippet|Embed snippet install (skippable)|Yes (new user)|
|/dashboard|Flow grid with live session counts home|Yes|
|/fows/:id/edit|The canvas editor — core product surface|Yes (Member+)|
|/fows/:id/analytcs|Funnel analytcs for a specifc fow|Yes|
|/fows/:id/branching|Conditonal branching editor|Yes (Editor+, Growth<br>plan)|
|/ab-tests|A/B test confguraton and results|Yes (Editor+, Growth<br>plan)|
|/themes|Custom theme management|Yes (Editor+)|
|/setngs/account|Personal account setngs|Yes|
|/setngs/project|Project details, embed snippet, project_key|Yes (Admin/Owner<br>for write)|
|/setngs/members|Member list, invite, role management|Yes|
|/setngs/billing|Plan, usage, invoices, upgrade/downgrade|Yes (Admin/Owner)|



## **8.2 /dashboard — Main Application Home** 

## **Layout** 

Left sidebar (240px, collapsible to 64px icon-rail) + main content area (bento grid, max-width 1280px, centered, 32px outer padding). 

## **Sidebar contents** 

- Project switcher (top, dropdown with avatar + name) 

Page 24 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

- Nav items: Dashboard, Flows (expands to list), A/B Tests, Themes, Settings — each with Tabler icon + label, active item gets emerald-50 background pill 

- Bottom: user avatar + name, click opens account menu (Profile, Log out) 

## **Main content — bento layout** 

- Top, full-width: "Your flows" grid — every flow as a card showing a thumbnail (auto-generated from the canvas), name, status badge (Draft/Published), live session count this week, completion rate, and last-edited timestamp. "Create flow" card always present as the first tile. 

- Left column (8/12 width, below the flow grid): "This week's completions" line chart aggregating across all published flows. 

- Right column (4/12 width): "Top performing flow" card — whichever published flow has the highest completion rate this week, with a quick link to its analytics. 

## **8.3 /flows/:id/edit — The Canvas Editor (Component Deep-Spec)** 

This is the single most important screen in the product. 

## **Layout** 

- Top toolbar (56px): flow name (editable inline), save status indicator ("Saved" / "Saving..." — autosave on every change, debounced 800ms), Preview button, Publish/Unpublish toggle. 

- Left tool rail (64px): step type icons (Tooltip, Modal, Hotspot, NPS prompt) — click or drag onto canvas to add. 

- Center: the Fabric.js canvas itself, showing the target app as a live iframe or screenshot background with step elements as draggable/resizable objects on top. 

- Right panel (320px): the contextual step property panel described in Section 4.2, populated based on the currently selected canvas object, empty/collapsed when nothing is selected. 

- Bottom: a horizontal step sequencer strip showing all steps in order as small thumbnails, dragto-reorder, click to jump the canvas focus to that step. 

## **Step creation flow** 

41. User drags a step type from the left rail onto the canvas, or clicks an element in the live preview directly (auto-suggesting a tooltip anchored to that element). 

42. A new step object appears on the canvas with selection handles (amber), and the right panel populates with its editable properties. 

43. User edits text content (rich text editor, inline), sets the anchor (CSS selector auto-detected from the click, or manually adjustable), chooses a theme, and sets the advance trigger. 

44. The step is automatically added to the bottom sequencer strip in creation order, draggable to reorder if needed. 

Page 25 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **Preview mode** 

- Toggling "Preview" replaces the editable canvas with a faithful, full-animation-fidelity simulation of exactly what an end user would see — using the same rendering code path as the actual published embed widget (not a separate approximation), so what's previewed is guaranteed to match what ships. 

## **8.4 /flows/:id/analytics — Funnel Analytics** 

Top: summary stats (total sessions, completion rate, average time-to-complete). Main content: a funnel chart (the same visual pattern previewed on the marketing landing page in Section 3.8) showing each step's view count and the percentage who advanced to the next step, with the steepest drop-off automatically highlighted in amber. 

- Clicking any step in the funnel opens a breakdown panel: completion rate for that step specifically, average time spent, and (if configured) a breakdown by any user segment properties passed via the embed's identify call. 

- Date range selector (last 7/30/90 days, custom range) at the top, affecting all charts on the page. 

## **8.5 /flows/:id/branching (Growth Plan)** 

The flowchart-style conditional branching editor described in Section 4.2 — steps as nodes, conditions as labeled connecting lines, with a simple condition builder ("if [event/property] [operator] [value], go to [step]") accessible by clicking any connecting line. 

## **8.6 /ab-tests (Growth Plan)** 

List of configured tests, each showing two flow variants, traffic split percentage, and live comparative completion rates with a statistical-significance indicator (a simple, clearly-explained confidence badge rather than a raw p-value, since the audience is PMs, not statisticians). "Create test" lets the user pick two existing flows or duplicate one to create a variant. 

## **8.7 /themes** 

Grid of theme cards (the 4 built-ins from Section 4.2 plus any custom themes), each showing a live preview render of a sample tooltip in that theme. "Create custom theme" opens a color/font/radius editor with a real-time preview pane. 

## **8.8 /settings/project — Embed Tab** 

The embed snippet with copy button and framework-specific tabs (HTML/React/Next.js/Vue), the project's project_key with a "Regenerate" danger action (Section 7.8), and a live status indicator showing whether sessions have been received recently. 

Page 26 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **8.9 /settings/members** 

Table: avatar, name, email, role (editable dropdown for Admins), joined date, last active, kebab menu (Remove, Admin only, disabled for the Owner row). 

Invite flow: "Invite members" button opens a modal with a textarea for comma/newline-separated emails + role selector, "Send invites" shows per-email success/failure after submission. 

## **8.10 /settings/billing** 

Current plan card, usage bar (monthly sessions vs. plan limit, flows vs. limit), "Upgrade"/"Downgrade" buttons opening a plan-comparison modal, invoice history table, and a dummy payment method section (see Section 8.11). 

## **8.11 Dummy Payment Integration — MVP Spec** 

Payment is simulated for MVP while preserving the exact UX of a real Stripe Checkout flow, so the integration point is a drop-in swap later. 

45. "Upgrade to Growth" opens a modal styled identically to Stripe Checkout: card number / expiry / CVC inputs with Stripe-style input masking and live card-brand icon detection. 

46. On submit, a 1.2s fake-processing spinner plays, then a success state ("Welcome to Growth" with a checkmark animation). 

47. Backend records the upgrade in the subscriptions table with provider = 'mock' and a fake provider_subscription_id, identical in shape to what a real Stripe webhook would write. 

48. Card numbers are never stored — only the last 4 digits and brand are persisted, matching real PCI-conscious behavior from day one. 

Page 27 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **9. Database Architecture & Schema** 

## **9.1 Database Strategy** 

PostgreSQL (managed via Railway or Render Postgres) as the system of record for projects, users, flows, and aggregated analytics. A separate, write-optimized analytics ingestion path is required here that doesn't exist in most of the portfolio's other products: every end-user session against a published flow generates events at real consumer-app scale, so raw event writes go to a high-throughput table design rather than the same general-purpose tables used for the builder's own CRUD operations, with a documented future migration path to a dedicated analytics store like ClickHouse once volume materially exceeds Postgres's comfortable range. Redis (Railway add-on) handles rate limiting and the embed config cache. 

## **9.2 Entity Relationship Overview** 

A user belongs to many projects through memberships. A project has many flows and one project_key. A flow has many steps (ordered) and many flow_sessions (one per end-user view). A flow_session has many step_events (one per step the end user actually saw/completed). An ab_test references two flow variants. Subscriptions belong to a project one-to-one. 

## **9.3 Full SQL DDL** 

PostgreSQL 15+. UUIDs as primary keys throughout (gen_random_uuid(), requires pgcrypto), except the high-volume step_events table which uses BIGSERIAL for write throughput. 

-- Extensions CREATE EXTENSION IF NOT EXISTS pgcrypto; CREATE EXTENSION IF NOT EXISTS pg_trgm;  -- fuzzy/full-text search -- ============================================================ -- USERS & AUTH -- ============================================================ CREATE TABLE users ( id              UUID PRIMARY KEY DEFAULT gen_random_uuid(), email           TEXT NOT NULL UNIQUE, name            TEXT, avatar_url      TEXT, email_verified  BOOLEAN NOT NULL DEFAULT FALSE, auth_provider   TEXT NOT NULL CHECK (auth_provider IN ('google','email_otp')), created_at      TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(), deleted_at      TIMESTAMPTZ 

Page 28 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

); 

CREATE INDEX idx_users_email ON users(email); CREATE INDEX idx_users_deleted_at ON users(deleted_at) WHERE deleted_at IS NOT NULL; 

CREATE TABLE otp_codes ( id           UUID PRIMARY KEY DEFAULT gen_random_uuid(), email        TEXT NOT NULL, code_hash    TEXT NOT NULL, attempts     SMALLINT NOT NULL DEFAULT 0, expires_at   TIMESTAMPTZ NOT NULL, consumed_at  TIMESTAMPTZ, created_at   TIMESTAMPTZ NOT NULL DEFAULT now() ); 

CREATE INDEX idx_otp_email ON otp_codes(email, created_at DESC); 

CREATE TABLE sessions ( id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, refresh_token_hash  TEXT NOT NULL UNIQUE, user_agent          TEXT, ip_address          INET, created_at          TIMESTAMPTZ NOT NULL DEFAULT now(), last_used_at        TIMESTAMPTZ NOT NULL DEFAULT now(), expires_at          TIMESTAMPTZ NOT NULL, revoked_at          TIMESTAMPTZ ); 

CREATE INDEX idx_sessions_user ON sessions(user_id); CREATE INDEX idx_sessions_active ON sessions(user_id, revoked_at) WHERE revoked_at IS NULL; 

-- ============================================================ -- PROJECTS & MEMBERSHIP -- ============================================================ 

CREATE TABLE projects ( id            UUID PRIMARY KEY DEFAULT gen_random_uuid(), name          TEXT NOT NULL, slug          TEXT NOT NULL UNIQUE, app_url       TEXT NOT NULL, project_key   TEXT NOT NULL UNIQUE,  -- public, non-secret, embedded in the snippet created_by    UUID NOT NULL REFERENCES users(id), created_at    TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(), deleted_at    TIMESTAMPTZ 

Page 29 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

); 

CREATE INDEX idx_projects_slug ON projects(slug); CREATE UNIQUE INDEX idx_projects_key ON projects(project_key); 

CREATE TABLE memberships ( id            UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, project_id    UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE, role          TEXT NOT NULL CHECK (role IN ('owner','admin','editor','member')), invited_by    UUID REFERENCES users(id), joined_at     TIMESTAMPTZ NOT NULL DEFAULT now(), UNIQUE(user_id, project_id) ); 

CREATE INDEX idx_memberships_project ON memberships(project_id); CREATE INDEX idx_memberships_user ON memberships(user_id); 

CREATE TABLE invitations ( id            UUID PRIMARY KEY DEFAULT gen_random_uuid(), project_id    UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE, email         TEXT NOT NULL, role          TEXT NOT NULL CHECK (role IN ('admin','editor','member')), invited_by    UUID NOT NULL REFERENCES users(id), token_hash    TEXT NOT NULL UNIQUE, expires_at    TIMESTAMPTZ NOT NULL, accepted_at   TIMESTAMPTZ, created_at    TIMESTAMPTZ NOT NULL DEFAULT now() ); 

CREATE INDEX idx_invitations_project ON invitations(project_id); 

-- ============================================================ -- THEMES 

-- ============================================================ 

CREATE TABLE themes ( id            UUID PRIMARY KEY DEFAULT gen_random_uuid(), project_id    UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE, name          TEXT NOT NULL, is_builtin    BOOLEAN NOT NULL DEFAULT FALSE,  -- glassmorphism/minimal/bold/dark presets config        JSONB NOT NULL DEFAULT '{}',     -- colors, fonts, radius, blur created_by    UUID REFERENCES users(id), created_at    TIMESTAMPTZ NOT NULL DEFAULT now() ); 

Page 30 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

CREATE INDEX idx_themes_project ON themes(project_id); 

-- ============================================================ -- FLOWS & STEPS -- ============================================================ 

CREATE TABLE flows ( id              UUID PRIMARY KEY DEFAULT gen_random_uuid(), project_id      UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE, name            TEXT NOT NULL, status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published','archived')), targeting_rules JSONB NOT NULL DEFAULT '{}',  -- URL match, user segment conditions thumbnail_storage_key TEXT, created_by      UUID NOT NULL REFERENCES users(id), created_at      TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(), published_at    TIMESTAMPTZ ); 

CREATE INDEX idx_flows_project ON flows(project_id, status); CREATE INDEX idx_flows_fts ON flows USING gin (to_tsvector('english', name)); CREATE TABLE flow_steps ( id              UUID PRIMARY KEY DEFAULT gen_random_uuid(), flow_id         UUID NOT NULL REFERENCES flows(id) ON DELETE CASCADE, step_order      SMALLINT NOT NULL, step_type       TEXT NOT NULL CHECK (step_type IN ('tooltip','modal','hotspot','nps')), content         JSONB NOT NULL DEFAULT '{}',  -- rich text, anchor selector, theme_id, advance trigger branch_conditions JSONB NOT NULL DEFAULT '[]',  -- conditional next-step logic UNIQUE(flow_id, step_order) ); 

CREATE INDEX idx_steps_flow ON flow_steps(flow_id, step_order); 

-- ============================================================ -- A/B TESTS -- ============================================================ 

CREATE TABLE ab_tests ( id              UUID PRIMARY KEY DEFAULT gen_random_uuid(), project_id      UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE, name            TEXT NOT NULL, variant_a_flow_id UUID NOT NULL REFERENCES flows(id), variant_b_flow_id UUID NOT NULL REFERENCES flows(id), traffic_split_pct SMALLINT NOT NULL DEFAULT 50, status          TEXT NOT NULL DEFAULT 'running' CHECK (status IN ('running','paused','concluded')), 

Page 31 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

created_at      TIMESTAMPTZ NOT NULL DEFAULT now() ); 

CREATE INDEX idx_ab_tests_project ON ab_tests(project_id); 

-- ============================================================ -- ANALYTICS — HIGH-THROUGHPUT EVENT TABLES -- (Designed for heavy write volume from real end-user traffic; --  consider partitioning by month or migrating to ClickHouse --  once volume materially exceeds Postgres's comfortable range) 

-- ============================================================ 

CREATE TABLE flow_sessions ( id              UUID PRIMARY KEY DEFAULT gen_random_uuid(), flow_id         UUID NOT NULL REFERENCES flows(id) ON DELETE CASCADE, ab_test_variant TEXT CHECK (ab_test_variant IN ('a','b',NULL)), anonymous_visitor_id TEXT NOT NULL,  -- client-generated, not PII identified_user_properties JSONB,    -- optional, from the embed's identify() call user_agent      TEXT, started_at      TIMESTAMPTZ NOT NULL DEFAULT now(), completed_at    TIMESTAMPTZ ); 

CREATE INDEX idx_flow_sessions_flow_time ON flow_sessions(flow_id, started_at DESC); 

CREATE TABLE step_events ( id              BIGSERIAL PRIMARY KEY,  -- bigserial, not UUID, for write-throughput on this high-volume table flow_session_id UUID NOT NULL REFERENCES flow_sessions(id) ON DELETE CASCADE, flow_step_id    UUID NOT NULL REFERENCES flow_steps(id), 

event_type      TEXT NOT NULL CHECK (event_type IN ('viewed','completed','skipped','dismissed')), occurred_at     TIMESTAMPTZ NOT NULL DEFAULT now() ); 

CREATE INDEX idx_step_events_session ON step_events(flow_session_id); CREATE INDEX idx_step_events_step_time ON step_events(flow_step_id, occurred_at DESC); 

-- ============================================================ -- BILLING (MOCK-COMPATIBLE SCHEMA) 

-- ============================================================ 

CREATE TABLE subscriptions ( id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(), project_id              UUID NOT NULL UNIQUE REFERENCES projects(id) ON DELETE CASCADE, plan                    TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free','starter','growth','enterprise')), status                  TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','past_due','canceled')), 

Page 32 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

provider                TEXT NOT NULL DEFAULT 'mock' CHECK (provider IN ('mock','stripe','razorpay')), provider_subscription_id TEXT, card_brand              TEXT, card_last4              TEXT, current_period_end      TIMESTAMPTZ, monthly_sessions_used   INTEGER NOT NULL DEFAULT 0,  -- reset each billing period for plan-limit enforcement created_at              TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at              TIMESTAMPTZ NOT NULL DEFAULT now() ); CREATE TABLE invoices ( id              UUID PRIMARY KEY DEFAULT gen_random_uuid(), subscription_id UUID NOT NULL REFERENCES subscriptions(id) ON DELETE CASCADE, amount_cents    INTEGER NOT NULL, currency        TEXT NOT NULL DEFAULT 'inr', status          TEXT NOT NULL CHECK (status IN ('paid','open','void')), pdf_url         TEXT, issued_at       TIMESTAMPTZ NOT NULL DEFAULT now() ); -- ============================================================ -- AUDIT LOG (APPEND-ONLY) -- ============================================================ 

CREATE TABLE audit_logs ( id            UUID PRIMARY KEY DEFAULT gen_random_uuid(), project_id    UUID REFERENCES projects(id) ON DELETE CASCADE, actor_id      UUID REFERENCES users(id), action        TEXT NOT NULL,   -- e.g. 'flow.published', 'project_key.regenerated' metadata      JSONB NOT NULL DEFAULT '{}', ip_address    INET, created_at    TIMESTAMPTZ NOT NULL DEFAULT now() ); 

CREATE INDEX idx_audit_project ON audit_logs(project_id, created_at DESC); 

## **9.4 Embed Config Caching Strategy** 

|**Aspect**|**Confguraton**|
|---|---|
|Edge cache|Published fow confgs (steps, targetng rules, theme) served via a CDN-cached<br>endpoint, 60-second TTL — balances near-real-tme publish latency against minimizing<br>database load from high-trafc customer sites|
|Analytcs ingeston|step_events writes go through a lightweight queue (Redis list or BullMQ) rather than<br>direct synchronous inserts from the public endpoint, so a trafc spike on a customer's|



Page 33 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

|**Aspect**|**Confguraton**|
|---|---|
||site never directly hammers the primary database connecton pool|
|Session deduplicaton|anonymous_visitor_id is a client-generated UUID persisted in localStorage by the<br>embed script, used to avoid double-countng the same visitor across page navigatons<br>within one fow session|



## **9.5 Data Retention & Deletion Policy** 

- Soft-deleted users/projects retained 30 days for recovery, then hard-purged via a scheduled cron job. 

- Audit logs retained 12 months minimum, then archived to cold storage. 

- Raw step_events are retained 12 months for detailed funnel analysis, then aggregated into monthly rollup summaries and the raw rows pruned, keeping the high-volume table's long-term size bounded without losing historical trend data. 

Page 34 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **10. AI Integration Architecture** 

## **10.1 Where AI Fits in FlowCanvas** 

FlowCanvas's core mechanics — rendering tour steps, tracking funnel events, computing completion rates — are entirely deterministic, exactly as they should be for analytics a PM is making real decisions from. AI is used in two specific, additive places: generating a plain-language interpretation of funnel drop-off patterns (since a chart shows what happened but not necessarily an actionable read on it), and an optional copy-assistance feature for drafting tour step text, since writing concise, friendly onboarding copy is a genuinely hard skill many PMs and growth engineers don't have time to develop. 

## **10.2 Funnel Drop-Off Insight Generation** 

49. On the analytics page (Section 8.4), once a flow has accumulated a meaningful sample size (a minimum session threshold to avoid drawing conclusions from statistically meaningless noise), the structured funnel data (per-step view/completion counts, average time-on-step) is passed to Claude Sonnet. 

50. The model generates a short, specific insight — e.g. "Step 3 has your steepest drop-off (64% → 58%) and the longest average time-on-step (18s, vs. 4-6s for other steps). That combination usually means the copy is asking the user to read too much before acting — consider shortening it or splitting it into two steps." 

51. This insight is explicitly framed as a suggestion grounded in the specific numbers shown, never a generic onboarding-best-practices statement disconnected from this flow's actual data — the prompt enforces citing the specific step and specific numbers driving the observation. 

52. Insights regenerate on a schedule (daily) rather than on every page view, both for cost efficiency and because day-to-day funnel fluctuation on small sample sizes would otherwise produce noisy, inconsistent insights that undermine trust in the feature. 

## **10.3 Step Copy Assistant (Optional, In-Editor)** 

53. Inside the canvas editor's step property panel (Section 8.3), an optional "Suggest copy" button is available next to the text content field. 

54. When clicked, the current step's context (its position in the flow, the anchor element's accessible name/label where available, and any existing draft text) is passed to Claude Sonnet with a system prompt instructing it to draft concise, friendly, action-oriented tour copy (target: under 20 words for tooltips, under 40 for modals) in a neutral, brand-agnostic voice the user can then edit to match their own product's tone. 

55. Suggestions populate the text field as an editable draft, never auto-submitted — the user must explicitly accept, edit, or discard, consistent with the portfolio-wide principle that AI assists content creation but never publishes on a human's behalf. 

Page 35 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **10.4 Prompt Architecture** 

System prompts versioned in a prompts/ directory in the codebase (not hardcoded inline), allowing iteration without a full redeploy. The drop-off insight prompt enforces: ground every claim in the specific numbers provided, never generate insights below the minimum sample size threshold (enforced both in the prompt and as a hard application-layer gate, so the feature is simply unavailable rather than producing a low-confidence guess when data is thin), and avoid generic SaaS-onboarding-advice phrasing that isn't specifically derived from this flow's data. 

## **10.5 Example Request/Response Shape (Internal LLM Call)** 

// Simplified internal LLM call shape (not a public API endpoint) { "flow_name": "New Project Onboarding", "steps": [ { "order": 1, "view_count": 1200, "completion_count": 1044, "avg_time_seconds": 5 }, { "order": 2, "view_count": 1044, "completion_count": 668, "avg_time_seconds": 7 }, { "order": 3, "view_count": 668, "completion_count": 388, "avg_time_seconds": 18 }, { "order": 4, "view_count": 388, "completion_count": 159, "avg_time_seconds": 6 } ] } 

// Model response (plain text, displayed on the analytics page) "Step 3 has your steepest drop-off (668 \u2192 388, a 42% loss) and by far the longest average time-on-step at 18 seconds versus 5-7 seconds elsewhere. That combination usually means the copy is asking users to read or decide too much before they can act \u2014 consider shortening it or splitting it into two simpler steps." 

## **10.6 Cost & Latency Controls** 

- Drop-off insights are generated once per day per flow (not per page view), cached and served instantly on subsequent visits within that window. 

- Step copy suggestions are generated only on explicit user request (the "Suggest copy" button), never proactively or automatically, keeping AI cost directly tied to actual feature usage rather than running speculatively in the background. 

- Target latency: copy suggestions return within 2 seconds of the button click; drop-off insights, being pre-generated on a schedule rather than on-demand, have no user-facing latency at all on the analytics page itself. 

Page 36 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **11. API Specification** 

## **11.1 Conventions & API Surfaces** 

FlowCanvas exposes two distinct API surfaces: an authenticated application API (everything in this section under /v1/ requiring a Bearer token) and a public embed API (under /embed/v1/, used only by the public embed script on customer sites, authenticated by project_key plus rate limiting rather than user sessions, per the security model in Section 7.6). 

- Authenticated base URL: https://api.flowcanvas.dev/v1 

- Public embed base URL: https://embed.flowcanvas.dev/v1 

- All responses: application/json, snake_case keys, ISO-8601 timestamps. 

- Errors follow a consistent shape: { "error": { "code": "string", "message": "human readable" } } with standard HTTP status codes. 

- All list endpoints support cursor-based pagination via ?cursor=&limit= (default limit 20, max 100). 

## **11.2 Auth Endpoints (Authenticated App)** 

## **POST /v1/auth/otp/request — Public** 

Request body: { "email": "harsh@suzerain.dev" } Response 200: { "message": "Code sent", "expires_in_seconds": 600, "resend_after_seconds": 45 } 

## **POST /v1/auth/otp/verify — Public** 

Request body: { "email": "harsh@suzerain.dev", "code": "384720" } Response 200: { "access_token": "eyJhbGciOi...", "user": { "id": "usr_6e1d...", "email": "harsh@suzerain.dev", "is_new_user": true }, "projects": [] } // Sets httpOnly refresh_token cookie 

Page 37 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **GET /v1/auth/google/start, GET /v1/auth/google/callback — Public** 

Identical OAuth redirect mechanics to other Suzerain Labs products. 

## **POST /v1/auth/refresh — Requires refresh cookie** 

Response 200: { "access_token": "eyJhbGciOi..." } Response 401: { "error": { "code": "session_expired", "message": "Please log in again." } } 

## **POST /v1/auth/logout — Auth required** 

Revokes the current session. Response 204. 

## **11.3 Project Endpoints** 

## **POST /v1/projects — Auth required** 

Request body: { "name": "Acme App", "app_url": "https://app.acme.com" } Response 201: { "id": "prj_44cd...", "name": "Acme App", "project_key": "pk_live_8f2a91...", "embed_snippet": "<script src=\"https://embed.flowcanvas.dev/v1/loader.js\" dataproject=\"pk_live_8f2a91...\" async></script>", "role": "owner" } 

## **POST /v1/projects/:id/regenerate-key — Auth required, admin** 

Invalidates the old project_key and issues a new one. Response 200 with the new key and snippet; the old key stops being accepted by the public embed API immediately. 

## **11.4 Flow Endpoints** 

## **POST /v1/projects/:id/flows — Auth required, member** 

Request body: { "name": "New Project Onboarding" } Response 201: { "id": "flw_77ef...", "name": "New Project Onboarding", "status": "draft", "steps": [] 

Page 38 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

} 

## **PUT /v1/flows/:id/steps — Auth required, member (autosave endpoint)** 

Replaces the full ordered step list in one call — the canvas editor autosaves by sending the complete current state rather than incremental diffs, simplifying client logic at the cost of slightly larger payloads, an acceptable trade-off given typical flows have well under 20 steps. 

Request body: { "steps": [ { "step_order": 1, "step_type": "tooltip", "content": { "text": "Click here to create your first project", "anchor_selector": "[data-testid=create-project-btn]", "theme_id": "thm_glassmorphism", "advance_trigger": "click" } } ] } Response 200: (updated flow object with full step list) 

## **POST /v1/flows/:id/publish — Auth required, editor+** 

Response 200: { "status": "published", "published_at": "2026-06-17T11:00:00Z" } 

## **POST /v1/flows/:id/unpublish — Auth required, editor+** 

Response 200, status reverts to draft. 

## **GET /v1/flows/:id/analytics — Auth required, member** 

Query params: ?from=&to= Response 200: { "total_sessions": 1200, 

Page 39 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

"completion_rate": 0.1325, "funnel": [ 

{ "step_order": 1, "view_count": 1200, "completion_count": 1044, "avg_time_seconds": 5 }, 

{ "step_order": 2, "view_count": 1044, "completion_count": 668, "avg_time_seconds": 7 }, 

{ "step_order": 3, "view_count": 668, "completion_count": 388, "avg_time_seconds": 18 }, { "step_order": 4, "view_count": 388, "completion_count": 159, "avg_time_seconds": 6 } ], "ai_insight": "Step 3 has your steepest drop-off..." } 

## **POST /v1/flows/:id/suggest-copy — Auth required, member** 

Request body: { "step_order": 3, "anchor_label": "Invite teammates", "existing_draft": "" } Response 200: { "suggestion": "Add your team now to start collaborating from day one." } 

## **11.5 A/B Test Endpoints** 

## **POST /v1/projects/:id/ab-tests — Auth required, editor+, Growth plan** 

Request body: { "name": "Onboarding copy test", "variant_a_flow_id": "flw_77ef...", "variant_b_flow_id": "flw_88gh...", "traffic_split_pct": 50 } Response 201: (created test object) 

## **GET /v1/ab-tests/:id/results — Auth required, member** 

Response 200: { "variant_a": { "sessions": 612, "completion_rate": 0.61 }, "variant_b": { "sessions": 588, "completion_rate": 0.68 }, 

Page 40 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

"confidence_level": "high", "leading_variant": "b" } 

## **11.6 Theme Endpoints** 

## **POST /v1/projects/:id/themes — Auth required, editor+** 

Request body: { "name": "Acme Brand", "config": { "primary_color": "#0E7C66", "font_family": "Inter", "border_radius": 12 } } Response 201: (created theme object) 

## **11.7 Member & Billing Endpoints** 

Identical patterns to other Suzerain Labs products: POST /v1/projects/:id/invitations, POST /v1/invitations/:token/accept, DELETE /v1/projects/:id/members/:user_id, POST /v1/projects/:id/subscription/upgrade (mock provider, same shape as prior PRDs in this portfolio), GET /v1/projects/:id/invoices. 

## **11.8 Public Embed API (Used by the Embed Script Only)** 

## **GET /embed/v1/config?project_key=pk_live_... — Public, CDN-cached** 

Returns active published flows matching the requesting page's URL against each flow's targeting_rules. This is the endpoint the embed script calls on every page load. 

Response 200 (cached at the edge, 60s TTL): { "flows": [ { "id": "flw_77ef...", "steps": [ ...full step content + theme config, everything the script needs to render without further API calls... ], "ab_test_variant": "a" } ] } 

Page 41 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **POST /embed/v1/events — Public, rate-limited per project_key** 

Request body: { "project_key": "pk_live_8f2a91...", "flow_id": "flw_77ef...", "anonymous_visitor_id": "av_3f8c9d2e...", "event_type": "completed", "step_order": 1 } Response 202: { "accepted": true }  // queued for async processing, never blocks the customer's page 

## **POST /embed/v1/identify — Public, rate-limited per project_key** 

Request body: { "project_key": "pk_live_8f2a91...", "anonymous_visitor_id": "av_3f8c9d2e...", "properties": { "plan": "paid", "role": "admin" } } Response 202: { "accepted": true } 

Page 42 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **12. Technical Architecture & Deployment** 

## **12.1 System Architecture Overview** 

Four deployable units: (1) the Next.js frontend + API routes for the authenticated builder application, deployed to Vercel; (2) the public embed loader script, a small standalone bundle served from a CDNfronted static host, deliberately decoupled from the main app's deployment cycle so embed-script updates never require redeploying the whole application; (3) a public embed API service (config + events + identify endpoints) deployed to Railway, kept architecturally separate from the authenticated app's API for the security isolation described in Section 7.6; (4) managed data stores — Postgres (Railway) and Redis (Railway). 

The embed API service is explicitly designed to survive traffic spikes independent of the main application's health — if a customer's published flow drives a surge in sessions, that load hits only the lightweight, heavily-cached embed API, never the authenticated builder app that the FlowCanvas team and customers use to manage flows. 

## **12.2 Tech Stack Summary** 

|**Layer**|**Technology**|
|---|---|
|Frontend framework|Next.js 14 (App Router), TypeScript, React Server Components for statc marketng<br>pages|
|Styling/UI|Tailwind CSS, shadcn/ui (Radix primitves), Framer Moton, Aceternity UI paterns for<br>the hero canvas demo and bento hover states|
|Canvas editor|Fabric.js for the drag/resize/select step-placement canvas and the conditonal<br>branching fowchart editor|
|State management|React Query (TanStack Query) for server state, Zustand for canvas/editor-local state|
|Backend API<br>(authentcated app)|Next.js API routes|
|Backend API (public<br>embed)|Lightweight Node.js/Fastfy service, deliberately minimal dependencies for fast cold<br>starts and a small atack surface|
|Embed loader script|Vanilla TypeScript, bundled and minifed to under 15KB gzipped, zero framework<br>dependencies to keep footprint minimal on customer sites|
|ORM|Prisma, typed end-to-end against the Postgres schema in Secton 9|
|Database|PostgreSQL 15 (Railway/Render managed)|
|Cache/queue|Redis (Railway), BullMQ for the analytcs-event ingeston queue|
|CDN|Cloudfare (frontng both the embed loader script and the embed confg API's cached<br>responses)|



Page 43 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

|**Layer**|**Technology**|
|---|---|
|AI models|Claude Sonnet (drop-of insights, step copy suggestons)|
|Auth|Custom OTP + Google OAuth, NextAuth.js as the OAuth handling layer (authentcated<br>app only)|
|Hostng — frontend|Vercel|
|Hostng — embed API + DB<br>+ Redis|Railway (Render as documented fallback)|
|Monitoring|Sentry (errors), Axiom or Beter Stack (structured logs), Vercel Analytcs|



## **12.3 Environment Configuration** 

# .env.example — never commit actual secrets DATABASE_URL=postgresql://... REDIS_URL=redis://... ANTHROPIC_API_KEY=... RESEND_API_KEY=... GOOGLE_OAUTH_CLIENT_ID=... GOOGLE_OAUTH_CLIENT_SECRET=... JWT_ACCESS_SECRET=... JWT_REFRESH_SECRET=... PROJECT_KEY_SECRET=...        # used to generate cryptographically random project_keys EMBED_API_URL=https://embed.flowcanvas.dev NEXT_PUBLIC_APP_URL=https://app.flowcanvas.dev 

## **12.4 Deployment Pipeline** 

56. GitHub repository with branch protection on main — requires passing CI (lint, typecheck, test) and 1 approving review before merge. 

57. Vercel auto-deploys main to production and every PR to a preview URL for visual QA, with particular attention paid to the canvas editor's preview rendering given its visual complexity. 

58. The embed loader script has its own separate, independent deployment pipeline (its own repository or a clearly isolated package within a monorepo) — this isolation is deliberate, since the embed script's release cadence and risk tolerance are very different from the main app's (a bug in the embed script breaks live tours on every customer's production site immediately, demanding more conservative rollout practices). 

59. Embed loader script releases use a versioned CDN path with the ability to roll back to a previous version instantly by repointing the CDN alias, rather than relying on a fresh deploy to fix a bad release. 

Page 44 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

60. Railway embed API service deploys via a GitHub Actions workflow triggered on main push, running Prisma migrations before restarting, with rolling restarts to avoid dropping in-flight analytics event writes. 

61. Health check endpoints (/health) on the embed API service specifically, monitored with tighter alerting thresholds than the main app given the embed API's direct exposure to customer production traffic. 

## **12.5 Scalability Considerations** 

- The embed config endpoint's aggressive CDN caching (Section 9.4) is the primary scalability mechanism for read traffic — a viral flow generating millions of page views still only generates a small, predictable number of origin requests per minute (one per cache TTL expiry per edge location), not one per page view. 

- Analytics event ingestion is queued (BullMQ/Redis) rather than written synchronously, so a burst of events from a traffic spike is absorbed by the queue and drained at a sustainable rate rather than overwhelming the database directly. 

- The step_events table's BIGSERIAL primary key and minimal-index design (Section 9.3) are deliberately optimized for write throughput over query flexibility, since this table's primary access pattern is high-volume inserts with periodic aggregate reads (funnel computation), not arbitrary ad-hoc querying. 

- Database connection pooling via PgBouncer (Railway managed Postgres) to handle connection spikes from both the authenticated app's serverless functions and the embed API's eventingestion workers. 

Page 45 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **13. Non-Functional Requirements** 

## **13.1 Performance Targets** 

|**Metric**|**Target**|
|---|---|
|Landing page LCP (Largest Contentul Paint)|< 1.8s on 4G|
|Embed loader script size|< 15KB gzipped|
|Embed loader script executon impact on host page|< 50ms main-thread blocking tme, measured via<br>Lighthouse on a representatve test page|
|Embed confg fetch (cached)|< 100ms p95 globally, via CDN edge caching|
|Canvas editor: drag/resize interacton latency|< 16ms (60fps) for object manipulaton|
|Funnel analytcs computaton (typical fow, < 100k<br>sessions)|< 2s p95|
|API p99 latency (authentcated app, non-canvas<br>endpoints)|< 300ms|
|Uptme SLA (Growth+ plans, embed API specifcally)|99.95% — higher than the authentcated app's own<br>SLA, since the embed API directly afects customer<br>producton sites|



## **13.2 Reliability** 

- The embed loader script is built defensively: if the embed config API is unreachable, the script fails silently (no console errors visible to the customer's own end users, no broken UI) rather than displaying a partial or broken tour — a missing tour is a minor product gap, a broken tour overlay on a customer's production site is a real incident. 

- Analytics event queue failures (e.g. Redis briefly unavailable) degrade gracefully: events are buffered client-side in the embed script's memory for the duration of the page session and retried, rather than silently dropped, within a bounded retry window. 

- Database backups: automated daily snapshots with 7-day retention (Railway managed Postgres default), plus a documented manual pg_dump runbook before any schema migration. 

## **13.3 Observability** 

- Structured JSON logging on every request and analytics event (request_id, project_id, flow_id, latency_ms, status) shipped to a log aggregator, with the embed API's logs specifically monitored for anomalous traffic patterns that might indicate abuse of the public event-ingestion endpoint. 

Page 46 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

- Sentry captures unhandled exceptions on both the authenticated app and the embed API with source maps; the embed loader script itself reports errors through a separate, minimal errorbeacon mechanism rather than a full Sentry SDK, to keep its bundle size small. 

- Custom dashboard tracking: embed config cache hit rate, analytics event ingestion lag (queue depth over time), and canvas editor save-latency distribution — this last metric matters specifically because autosave reliability is foundational to user trust in the builder. 

## **13.4 Accessibility** 

- WCAG 2.1 AA target for the authenticated application: all interactive elements keyboardnavigable, visible focus rings, color contrast verified across the brand palette. 

- The canvas editor itself has an inherent accessibility challenge (drag-and-drop visual placement is difficult to make fully keyboard-accessible); FlowCanvas addresses this with a keyboardaccessible alternative step-creation flow (a structured form for adding/editing steps without requiring canvas drag interaction) available from the same property panel, so the core authoring capability isn't exclusively mouse-dependent. 

- Published tour steps rendered by the embed script on customer sites are built with proper ARIA roles (role="dialog" for modals, appropriate aria-describedby linking for tooltips) and full keyboard dismissal/navigation support, since these render on the customer's end-user-facing site and must meet accessibility standards there regardless of FlowCanvas's own app-level compliance. 

- All animations (in both the builder and the live embedded widget) respect prefers-reducedmotion, per Section 4.3. 

Page 47 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

## **14. MVP Scope & Build Roadmap** 

## **14.1 MVP Cut Line — What Ships in V1** 

- **☑** Auth: Google OAuth + email OTP, full session/refresh flow. 

- **☑** Project creation and embed snippet generation/install flow. 

- **☑** Fabric.js canvas editor: tooltip, modal, and hotspot step types with drag/resize/anchor-selection. 

- **☑** Step property panel with rich text, theme selection, and advance triggers. 

- **☑** Live preview mode using the same rendering path as the published embed widget. 

- **☑** Publish/unpublish flow with the embed config endpoint and CDN caching. 

- **☑** The public embed loader script (vanilla TS, < 15KB) with defensive failure handling. 

- **☑** Analytics event ingestion pipeline (queued, async) and the funnel analytics page. 

- **☑** AI drop-off insights and step copy suggestions. 

- **☑** 4 built-in themes (Glassmorphism, Minimal, Bold, Dark). 

- **☑** Dashboard with flow grid, live session counts, completion rates. 

- **☑** Member invites and role-based access control. 

- **☑** Mock billing flow with the exact data model real Stripe integration will use. 

- **☑** Full marketing landing page as specified in Section 3. 

## **14.2 Explicitly Deferred (Post-MVP)** 

- Conditional branching editor — a genuinely valuable Growth-plan feature, but one with real UX complexity (the flowchart editor); ship linear flows first, validate demand, then build branching. 

- A/B testing — depends on having enough published-flow volume per customer to make variant testing meaningful; deferred until core flow-building and analytics are proven. 

- NPS prompt step type — a smaller, additive step type; the three core types (tooltip/modal/hotspot) cover the primary onboarding-tour use case for MVP. 

- Real Stripe/Razorpay integration — swap in once the first paying customer is ready to convert. 

- SSO/SAML for Enterprise — built only once an actual enterprise prospect requires it. 

- Custom theme builder UI — V1 ships with the 4 built-in themes plus a basic color-override option; the full visual theme editor (Section 8.7) is a V1.1 refinement. 

## **14.3 Suggested Build Sequence (Solo Builder, ~6 Weeks)** 

62. Week 1: Auth, database schema, project creation, base Next.js app shell with design system tokens, and early scaffolding of the Fabric.js canvas (since this is the highest-risk, most timeconsuming component and benefits from starting early). 

Page 48 of 49 

FlowCanvas — Product Requirements Document 

Suzerain Labs 

63. Week 2: Canvas editor core — step placement, drag/resize, anchor selection on a live iframe preview, the step property panel. 

64. Week 3: Embed loader script, embed config API with CDN caching, the publish/unpublish flow connecting the builder to a live, working embed. 

65. Week 4: Analytics event ingestion pipeline, the funnel analytics page, AI drop-off insights. 

66. Week 5: Themes (4 built-ins), live preview mode, step copy suggestions, dashboard. 

67. Week 6: Marketing landing page (full spec from Section 3), mock billing, member invites, polish pass (animations, skeleton loaders, accessibility audit including the keyboard-accessible stepcreation alternative), deploy + a deliberate end-to-end test: build a real flow, embed it on a genuine test page, and verify a full real-user session generates correct analytics data. 

## **14.4 Definition of Done for MVP Launch** 

**☑** A new user can sign up, install the embed snippet, build a 3-step flow on the canvas, publish it, and see a real test session appear in analytics within 5 minutes of triggering it, in under 15 minutes total elapsed time including initial onboarding. 

- **☑** All Section 7 security hardening items are implemented and verified, with particular scrutiny on the embed script's isolation from authenticated session data (Section 7.6). 

- **☑** A deliberate load test against the embed config and events endpoints confirms the CDN caching and queued-ingestion design hold up under a simulated traffic spike without origin overload. 

- **☑** Lighthouse score ≥ 90 on the marketing landing page (Performance, Accessibility, Best Practices). 

- **☑** Zero high/critical severity Dependabot alerts open at deploy time. 

- **☑** Manual QA pass on the full first-time user journey (Section 5.1) on both desktop and mobile 

- viewports, plus a separate pass verifying the embed widget itself renders and is dismissible correctly on a real mobile browser. 

Page 49 of 49 

