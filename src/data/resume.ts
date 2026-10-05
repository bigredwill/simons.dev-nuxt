// Update resume content here; /resume uses this for both screen and print.
export const resume = {
  name: "Will Simons",
  title: "Solo Founder & Software Engineer",
  email: "will@simons.dev",
  location: "San Francisco, CA",
  summary: "Software engineer and solo founder building skateboard.fyi, a research platform for skateboard print culture. Previously built web products, publishing systems, and acquisition flows at Glowforge.",
  skills: "TypeScript, JavaScript, Astro, Preact, React, Next.js, SQL, Drizzle, Cloudflare Workers/R2, Docker, CI/CD, Swift / Apple Vision",
  experience: [
    {
      company: "skateboard.fyi", role: "Solo Founder & Software Engineer", dates: "2025–Present", href: "https://skateboard.fyi",
      bullets: [
        "Founded and independently develop an archive and research platform for skateboard print culture; published 281 issues and 15,000+ pages as of October 2026.",
        "Built magazine browsing, full-text search, annotation tools, and an ingestion pipeline combining local OCR, image derivatives, object storage, and database indexing.",
        "Expanded into physical digitization in December 2025, establishing a DIY scanning workflow and developing tools to process and publish magazine scans.",
      ],
    },
    {
      company: "Independent", role: "Freelance Software Engineer", dates: "May 2023–Present",
      bullets: [
        "Overhauled osc.link, a real-time WebSocket control interface for multi-user media installations; streamlined GitHub Actions CI/CD.",
        "Migrated hundreds of Glowforge pages into Builder.io using Next.js, React, and Bash automation. Built interactive maps, event scoreboards, and landing pages.",
      ],
    },
    {
      company: "Glowforge", role: "Software Engineer", dates: "Nov 2018–Jan 2023",
      bullets: [
        "Migrated the marketing website to Next.js with Lambda@Edge and Optimizely A/B testing; led the CMS migration from Contentful to Builder.io.",
        "Built an email capture flow that increased user acquisition 10×; tracked web performance using New Relic.",
        "Resolved performance bottlenecks with zero-downtime infrastructure updates, led a frontend monorepo migration, and published internal npm packages.",
        "Mentored engineers, led a sitewide rebrand using a new design system, and built features for the laser-cutter design tools using Redux.",
      ],
    },
    {
      company: "Avast", role: "Software Engineer", dates: "Aug 2016–Sep 2017",
      bullets: [
        "Built high-traffic, accessible React applications and landing pages. Led a transition to component-based architecture, collaborated on a design system, and interviewed engineering candidates.",
      ],
    },
  ],
  education: "San Jose State University — B.S. Computer Science, 2016",
};
