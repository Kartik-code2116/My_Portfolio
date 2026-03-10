# Kartik Thorat Portfolio Website

This repo holds the static landing experience for **Kartik.Dev**, a digital portfolio built with plain HTML, CSS, and a bit of vanilla JavaScript. It showcases Kartik's story, capabilities, work samples, and contact pathways in a single-page-like flow split across dedicated HTML files.

## What the site contains
- **Homepage (`html/home.html`)** - Hero statement, featured deliverables, service summary, social proof (testimonials + timeline), and a call-to-action panel. Hero stats, cards, and panels are animated with the scroll-triggered `.reveal` classes controlled by `js/script.js`.
- **About page (`html/about.html`)** - Expanded biography, core expertise, key tools & certifications, and a route into the contact page. Uses the shared layout/nav and relies on the same global styles and script.
- **Projects page (`html/projects.html`)** - Two project grids (academic/research and personal), semester highlights timeline, and outbound CTA links to GitHub or demos.
- **Contact page (`html/contact.html`)** - Contact details, availability, and a client-ready inquiry form that runs frontend validation (name/email/message) before showing a confirmation message.

## Assets and behavior
- **Styles (`css/style.css`)** - A single stylesheet defining the layout grid, glass panels, buttons, responsive breakpoint rules, typography, and the `reveal` animation states used across every page.
- **Script (`js/script.js`)** - Manages the reveal animations via `IntersectionObserver`, mobile nav toggle, and form validation/feedback for the contact form.
- **Downloads & media** - The root PDF (`Kartik Resume (1st Year).pdf`) and profile image (`Kartik_img (2) (1).jpg`) are referenced directly from the hero sections, so no build pipeline is required.

## Viewing or extending
1. Open any of the `html/*.html` files in a browser (e.g., double-click or drag into a tab) to preview the site; the files already link to the shared stylesheet and script using relative paths.
2. Edit any page or add new ones by copying the existing structure (shared header/footer) and reusing the `.container`, `.section`, and `.glass-panel` classes from `css/style.css`.
3. Update `js/script.js` if you need extra interactions (modal, carousel, analytics hook, etc.) - it already waits for `DOMContentLoaded` before wiring up observers and handlers.

## Project categories
- **Academic & Research** - Mediconnect (Appointment OS), Club Experience Portal (MLSE), Product Dashboard (accessible analytics).
- **Personal Experiments** - Mess App (Flutter + Firebase), AI Image Assistant (TensorFlow + Flask), Portfolio CMS (TypeScript + Prisma + PostgreSQL).
- **Semester Highlights** - Sem 1: Mediconnect, Sem 3: WildTrack, Sem 5: E-Commerce Dashboard, Sem 7: Future Ideas.

## Next steps
- Add deployment notes (e.g., GitHub Pages) after deciding how the site will be hosted.
- Keep the resume and profile image in sync with updates to avoid broken download links.
