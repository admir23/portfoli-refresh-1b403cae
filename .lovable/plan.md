## Goal
Redesign Admir Kurtovic’s portfolio into a polished, Stripe-inspired, mobile-friendly website while keeping the existing content: intro copy, project names, project links/images, navigation, contact CTA, social links, and footer.

## Design direction
- Use Stripe as inspiration, not a copy: clean layout, strong typography, subtle grid lines, soft gradients, layered abstract visuals, and premium spacing.
- Keep the portfolio’s dark, high-end feel but add Stripe-like energy through gradient accents, translucent cards, and modern section transitions.
- Replace the current broken mobile layout with responsive typography, spacing, navigation, and project cards.

## Pages and structure
I will create a proper multi-page portfolio structure:

```text
/          Home: hero, featured work preview, CTA
/work      Full work/project grid
/about     About/profile content using existing available content
/contact   Contact CTA and social links
```

Each page will have its own SEO metadata so the site is more shareable and indexable.

## Homepage redesign
- Add a fixed/top navigation with logo, Work, About, and Contact.
- Create a Stripe-inspired hero:
  - Large expressive headline using the existing message.
  - Gradient-highlighted words similar to Stripe’s visual language.
  - Short supporting paragraph from the current site.
  - Clear CTA buttons: “View work” and “Let’s chat”.
  - Abstract gradient background shapes that scale down cleanly on mobile.
- Add a featured work section with the existing projects:
  - Fumis Solutions / Fumis
  - Direct2Care / Direct2MD
  - United Fitness / United Fitness Brands
  - Ebgroupp / Handwerker Pro
- Add a final “Let’s start creating together” CTA section.

## Work page
- Build a responsive project grid using the same project images and links from the current site.
- Use large visual cards with hover states on desktop and tap-friendly cards on mobile.
- Preserve external/internal links to the current project detail URLs where possible.

## About page
- Keep the content aligned with the current portfolio positioning: product strategy, purposeful design, user-centered insights, and impactful products.
- Present it in a clean Stripe-inspired editorial layout with short value pillars rather than a cramped text block.

## Contact page
- Build a simple contact-focused page with:
  - “Let’s start creating together” headline.
  - Email link to `hello@admirkurtovic.com`.
  - LinkedIn and Dribbble links.
  - Mobile-friendly CTA buttons.

## Mobile fixes
- Use responsive font sizes so the headline no longer overflows.
- Replace wide fixed-width containers with fluid layout constraints.
- Stack project cards cleanly on phones.
- Make navigation usable on small screens, likely with a compact menu or simplified visible links.
- Ensure buttons and links have proper touch targets.
- Avoid horizontal scrolling.

## Technical implementation
- Replace the placeholder home page in `src/routes/index.tsx` with real portfolio content.
- Add route files for `/work`, `/about`, and `/contact` using TanStack Router.
- Update the root metadata from generic “Lovable App” to Admir’s portfolio brand.
- Update `src/styles.css` design tokens as needed using `oklch` colors, including dark background, muted text, accent gradients, borders, and card surfaces.
- Reuse existing Tailwind/shadcn-style utilities already available in the project.
- Do not add unnecessary backend/database functionality.

## Acceptance checks
- Site renders without placeholder content.
- Navigation works between Home, Work, About, and Contact.
- The design is visibly inspired by Stripe: clean grid, gradient accents, strong hero, refined cards.
- Existing content and project links are preserved.
- Mobile layout is readable and has no horizontal overflow.