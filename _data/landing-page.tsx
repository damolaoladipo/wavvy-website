export const LandingPageData = {
  navigation: {
    logo: "Wavvy",
    items: [
      {
        label: "How it works",
        href: "#how-it-works",
      },
      {
        label: "Product",
        href: "#product",
      },
    ],
    button: {
      id: "01",
      href: "#product",
      text: "See the product",
      variant: "default" as const,
    },
  },
  hero: {
    heading: "First-stage screening, with recruiters in control",
    subheading:
      "Instead of scheduling initial screening calls, recruiters create an AI-powered interview that candidates can complete anytime. AI analyzes each interview. You compare, explain, and decide.",
    badge: "",
    button: {
      id: "01",
      href: "#product",
      text: "See the product",
      variant: "default" as const,
    },
  },
  uishowcase: {
    heading: "Not an ATS. A screening layer.",
    subheading:
      "Wavvy complements existing recruitment workflows by optimizing the pre-screening stage. Candidates complete interviews by invitation. Every AI insight is explainable. Recruiters remain responsible for hiring decisions. Speed should never reduce hiring quality.",
    image: {
      src: "",
      alt: "Wavvy first-stage screening",
      width: 1248,
      height: 765,
    },
    button: {
      id: "01",
      text: "How recruiters work",
      href: "#how-it-works",
      variant: "default" as const,
    },
  },
  footer: {
    description:
      "Wavvy is an AI-powered first-stage recruitment screening platform",
    builtBy: "",
    copyright: "All rights reserved.",
    ownedBy: "Wavvy",
    socialLinks: [] as { href: string; label: string }[],
    items: {
      group: "Product",
      items: [
        { href: "#how-it-works", label: "How it works" },
        { href: "#product", label: "Product" },
      ],
    },
    items2: {
      group: "Positioning",
      items: [
        { href: "#product", label: "Not an ATS" },
        { href: "#product", label: "Recruiters decide" },
      ],
    },
  },
};
