# Project: TGAMA-Project

## Overview
A high-end marketing website for **The Great Awaken Marketing Firm**, specializing in growth systems for high-ticket contractors (land clearing, pool builders, etc.).

## Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, and JavaScript.
- **Styling:** Custom CSS with CSS Variables for branding.
- **Animations:** Intersection Observer for scroll-based "appear" effects and CSS transitions for interactive elements.
- **Source Control:** GitHub (origin/master).

## Design System
- **Primary Colors:** 
  - Gold: `#d4af37` (used for accents, buttons, and badges).
  - Dark Navy/Background: `#0a192f` / `#0d1d36`.
  - Text: White and Gray variants for readability.
- **Breakpoints:**
  - Mobile: `768px` (Transitions to vertical layout and hamburger menu).
  - Tablet/Small Laptop: `992px` (Grid adjustments).

## Implementation Details
- **Mobile Menu:** 
  - Uses a hamburger toggle (`#mobile-menu`) with custom bar animations (transform/rotate).
  - Navigation links (`.nav-links`) transition to a full-width absolute overlay on mobile.
- **Hero Section:** 
  - Centered layout with stacked buttons (`.hero-btns`) on mobile.
  - Buttons have a maximum width of `280px` on mobile for better thumb-reach and aesthetics.
- **Services/Testimonials:** 
  - Grids auto-collapse to single columns on mobile.
  - Padding is reduced from `3rem` to `1.5rem`-`2rem` on mobile to maximize screen real estate.

## Guidelines
- Maintain a clean and modular structure for HTML, CSS, and JS.
- Ensure the UI is responsive and visually appealing.
- Follow standard web development best practices.
- **Always** verify mobile layout after styling changes, especially button spacing and grid overflows.

## Recent Updates
- **Mobile Responsiveness (March 2026):** 
  - Fixed hero button spacing (stacked with 12px gap).
  - Implemented full mobile navigation logic and animations.
  - Refined padding for service cards, testimonial cards, and the contact form.
  - Centered footer content for mobile layouts.
