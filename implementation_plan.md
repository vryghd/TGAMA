# TGAMA-Project Overhaul Implementation Plan

This plan documents the specific changes needed to execute a comprehensive UI/UX and compliance overhaul of the TGAMA-Project codebase while strict adherence to existing brand guidelines.

## User Review Required
No breaking changes. This plan aims strictly at refining the current aesthetic and improving performance/accessibility without modifying brand colors or overall architecture. Please review the proposed changes below. If you approve, I will proceed with execution.

## Proposed Changes

### HTML Files Structure & Accessibility
#### [MODIFY] [index.html](file:///Users/rosebook/Desktop/TGAMA-Project/index.html)
#### [MODIFY] [services.html](file:///Users/rosebook/Desktop/TGAMA-Project/services.html)
#### [MODIFY] [faq.html](file:///Users/rosebook/Desktop/TGAMA-Project/faq.html)
- **Performance:** Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` to `<head>`.
- **Performance:** Add `defer` attribute to `<script src="script.js"></script>`.
- **Accessibility:** Update `.menu-toggle` to be a `<button>` with `aria-label="Toggle Navigation"`, `aria-expanded="false"`, and `aria-controls="navLinks"`.
- **Accessibility:** Add `aria-label` to social links in the footer (e.g., `aria-label="Visit our Facebook page"`).
- **Accessibility/Semantic:** Enclose the main content sections in `<main>`.
- **Accessibility:** Ensure all inputs have `autocomplete` attributes (e.g., `autocomplete="name"`, `autocomplete="email"`).
- **Media:** Add `loading="lazy" decoding="async"` to all images below the fold (e.g., footer logos).

---

### CSS Styling & Visual Polish
#### [MODIFY] [style.css](file:///Users/rosebook/Desktop/TGAMA-Project/style.css)
- **Performance/UX:** Add `html { scroll-behavior: smooth; }` to handle smooth scrolling natively.
- **Micro-Interactions:** Enhance button hover states with a smooth `box-shadow` or scale without abruptly changing bounds. Example: `.btn-gold:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4); }`. 
- **Accessibility:** Add `:focus-visible` styles to buttons and links for clear keyboard navigation indicators (e.g., a solid gold outline).
- **Mobile Experience:** Increase tap targets for nav links and mobile menu toggle (`min-height: 44px; min-width: 44px; display: flex; align-items: center; justify-content: center;`).
- **Mobile Spacing:** Tweak mobile media queries to reduce excessive padding on `.hero` padding (from `140px 5% 80px` to `120px 5% 60px`) and adjust `.section` padding gaps, strictly preserving the grid collapsing behavior detailed in [GEMINI.md](file:///Users/rosebook/Desktop/TGAMA-Project/GEMINI.md).

---

### JavaScript Polish
#### [MODIFY] [script.js](file:///Users/rosebook/Desktop/TGAMA-Project/script.js)
- **Accessibility:** Update the mobile menu click handler to toggle the `aria-expanded` attribute on the hamburger button.
- **UX:** Combine the native `scroll-behavior: smooth` in CSS with the JS, removing redundant smooth scrolling polyfill-like JS, OR refine the JS offset calculation to be perfect. Since CSS `scroll-behavior` combined with `scroll-padding-top` on the HTML element is modern and highly performant, we will migrate to this and simplify [script.js](file:///Users/rosebook/Desktop/TGAMA-Project/script.js).

## Verification Plan
### Automated Tests
- Run `git status` and `git diff` to ensure no unintended files are modified.

### Manual Verification
- Check the files visually to ensure no visual regressions exist. Review the spacing on mobile breakpoints.
- Simulate keyboard navigation (Tab through) to verify focus states and ARIA label correctness.
- Validate that the mobile menu toggle correctly updates `aria-expanded` visually and behaviorally.
