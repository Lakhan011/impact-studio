# MASTER PROMPT: RECREATE THE COMPLETE IMPACT STUDIO WEBSITE

## ROLE AND OBJECTIVE
Act as a principal full-stack developer, expert UI/UX designer, website reconstruction specialist, and frontend animation engineer.
Build a complete, responsive, multi-page website that recreates the visual design, layout, typography, colors, spacing, image placement, animations, and navigation of the reference website:
**Reference website:** https://impact-studio-template.webflow.io/

The goal is to reproduce the original website as closely as possible, not to create a generic agency website inspired by it.

Treat the original website and supplied screenshots as primary visual references. Do not invent details not supported by the reference.

---

## 1. GLOBAL DESIGN SYSTEM & BRANDING
- **Color Palette:**
  - Primary Accent: Bright Vibrant Red (`#FF2E2E`)
  - Background Base: Cream / Off-White (`#FBF8EF`)
  - Accent / Surface White: Pure White (`#FFFFFF`)
  - Dark Accent: Pitch Black (`#000000` / Figma icon container background)
- **Typography System:**
  - Brand Logo: Italic Serif typeface for "Impact".
  - Main Display & Headlines: Oversized bold sans-serif display typography in uppercase (e.g., Neue Haas Grotesk / Inter / Helvetica Neue).
  - Accents: Italic serif text for inline highlighted phrases.
  - Glyphs: Custom red starburst/asterisk symbol (`✳`) embedded within key headings.
- **Global UI Elements & Components:**
  - Sticky Navigation Bar: Top bar with logo ("Impact"), menu links, dropdown menus, red outline pill button ("Buy Template"), and solid cream badge ("Cart").
  - Floating Badge: Fixed bottom-left pill badge with info icon reading "About the template".
  - Interactive Project Cards: Full-bleed image containers with a hoverable, scaling circular cream badge ("VIEW").
  - Feature Callout Cards: Minimal red-bordered grid boxes with cream background.

---

## 2. NAVIGATION BAR & DROPDOWN STRUCTURE

Build a responsive sticky header with the following exact links and dropdown routes:

- **Main Menu Links:**
  - Home -> `/homepage`
  - About -> `/about`
  - Services -> `/services`
  - Projects -> `/projects`

- **Dropdown: "Other ∨"**
  - Contact -> `/contact`
  - Blog -> `/blog`
  - Pricing -> `/pricing`
  - Legal -> `/legal`
  - Pages -> `/#pages`

- **Dropdown: "Template ∨"**
  - Home (sales) -> `/`
  - Style guide -> `/template/style-guide`
  - Licenses -> `/template/licenses`
  - Start here -> `/template/start-here`
  - Changelog -> `/template/changelog`
  - All pages -> `/#pages`
  - All templates -> External link
  - Our website -> External link

- **Header Actions:**
  - "Buy Template" outline pill button
  - "Cart" solid pill badge

---

## 3. COMPLETE PAGE ARCHITECTURE & ROUTES

### 1. TEMPLATE LANDING / SALES PAGE (`/`)
- Hero Section: Large oversized red headline "TOP TEMPLATE FOR ✳ AGENCIES". Subtitle: "Impact Studio is a Premium Webflow Template for agencies and creative studios looking for a trustworthy animated experience."
- Action Buttons: Rounded red solid button "Explore pages" and outline button "Buy template".
- Overview Cards Section ("INCLUDED IN IMPACT STUDIO"):
  - Card 1: "13+ PAGES" (stacked red page illustrations).
  - Card 2: "20+ SECTIONS" (layout section wireframe illustration).
  - Card 3: "20+ STYLES & SYMBOLS" (typography preview with logo and social icons).
- Figma Banner Box: Bordered card reading "FIGMA FILE INCLUDED - To give you 100% control over the design... email templates@wavesdesign.io".
- Template Pages Overview Grids (Vibrant Red background containers):
  - Section "MAIN PAGES": Displays cards for Home, About, Services, Contact, Projects, Project Page (CMS).
  - Section "OTHER PAGES": Displays cards for Blog, Blog Post (CMS), Pricing, Product (Ecom), 404, Password Protected, Legal.

### 2. MAIN HOMEPAGE (`/homepage`)
- Hero Section: Massive red text layout with centered fashion photo overlaid with italic serif text ("MAKE IMPACT") and sans-serif text ("IMPROVE").
- Brand Statement: "IMPACT STUDIO IS WHERE ✳ DESIGN MEETS BUSINESS".
- Work Grid: "AS GOOD AS OUR LAST PROJECT" headline with 2-column project cards.

### 3. ABOUT PAGE (`/about`)
- Hero: "WE ARE IMPACT STUDIO" red header banner.
- Studio Story: Founder quote section ("Founded by Dwight Schrute and Michael Scott in 2020...") with split text and team media layout.
- Team Section: Three-column team grid (Michael Scott, Ryan Howard, Pam Halpert).
- Values: "VALUES WE LIVE BY" with four numbered values (EFFICIENT, COMMITTED, MASTERS, CRAFTY).
- Metrics: 10+ years, 200+ projects, 1 mission.
- Testimonials & Logos: Red testimonial section, 4-column client logo grid.

### 4. SERVICES PAGE (`/services`)
- Header: "OUR SERVICES".
- Structured service blocks: UX Design (Research, Wireframes, User Testing), Webflow Development, Branding, and Strategy.
- Process Timeline: 3-step workflow (1. Research, 2. Ideation & Design, 3. Develop and Maintain).

### 5. PROJECTS & CMS DETAIL PAGES (`/projects`, `/projects/:slug`)
- Projects Showcase: Filterable portfolio grid.
- Individual Project Page: Headline, client name, completion date, project goals, and full-width image gallery.

### 6. OTHER PAGES
- Contact (`/contact`): "GET IN TOUCH", social links, team grid, inquiry form.
- Blog (`/blog`) & Single Post (`/blog/:slug`): Article grid with editorial thumbnails and full article layouts.
- Pricing (`/pricing`): "GET STARTED" header with 3 red pricing cards and expandable FAQ accordion.
- Product / E-Commerce Page (`/product/:id`): Single item purchase view with "Add to Cart" button and FAQ.
- Legal (`/legal`): Formatting for Privacy Policy and Terms.
- 404 Page (`/404` or native `not-found.tsx`): Centered "404" with "Back to homepage" button and watermark background.
- Password Protected Page (`/protected`): Centered lock icon, password input box, and "Submit" button.

### 7. TEMPLATE SYSTEM PAGES
- Style Guide (`/template/style-guide`): Typography scale, color swatches, button states.
- Licenses (`/template/licenses`): Image and font licensing information.
- Start Here (`/template/start-here`): Instruction guide for editing the template.
- Changelog (`/template/changelog`): Version history list.

---

## 4. IMAGE AND ASSET MANAGEMENT
- Maintain a centralized image manifest containing: Filename, Asset path, Associated page, Section, Slug, Description, and Mapping status.
- Use supplied actual images before selecting high-resolution Unsplash placeholders (fashion, architecture, editorial photography matching the red/cream aesthetic).

---

## 5. TECHNICAL IMPLEMENTATION
- **Primary Framework (From original prompt):** Next.js with App Router, TypeScript, Tailwind CSS, Framer Motion.
- **Routing Note:** The prompt mentions `react-router-dom`. **Conflict Noted:** Next.js App Router replaces `react-router-dom`. We are proceeding with Next.js App Router (using Next.js file-based routing and `next/link`) as established in the original instruction, unless explicitly asked to rebuild the project using Vite and React Router DOM.
- Animations: Framer Motion for page entry fade-ups, smooth hover scalings on project cards, and dropdown popover animations.
- Responsive Design: Fully responsive with mobile hamburger menu and collapsible accordions.

---

## 6. VISUAL VERIFICATION
After implementation, compare each page against reference screenshots for accuracy in header height, backgrounds, typography, image crops, section spacing, and animations.
