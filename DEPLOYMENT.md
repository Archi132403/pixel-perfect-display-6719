# Deployment and review — Architha comparison assignment

## Vercel via GitHub
1. Push these updated files to your GitHub repository (or create a new repository using the ZIP).
2. Open https://vercel.com/new and import the repository.
3. Use detected TanStack Start settings and the project build command `npm run build`. Do not force a static `dist` output folder: this is an SSR application.
4. Deploy. The vite.config.ts detects VERCEL and selects Nitro's `vercel` preset.
5. Open the public URL and check desktop/mobile, workflow tabs, FAQs, all anchors, links and comparison table.

## Content review before submission
- CTA now points to the official /request-a-demo page (the old /demo link returned 404).
- Dyninno statistic is a single-customer reported result, not a comparative performance claim.
- Pricing is a selected set of module prices, not total cost. Confirm current figures, bundle inclusions and eligibility.
- G2 section describes customer themes, not statistical findings; link to reviews and optionally cite exact accessible review URLs.
- This is an independent assignment concept, not an official ThriveSparrow page. Consider labeling it as a concept in the footer.

## If Vercel build fails
Check the deployment logs; ensure Vercel uses Node.js >=20 and has installed dependencies. The package uses TanStack Start and a Lovable-specific Vite plugin. The build was not run to completion in the preparation environment due to dependency installation timeout.
