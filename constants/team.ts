export type TeamHighlight = {
  title: string;
  description: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  image: string;
  detailPage?: boolean;
  background?: string[];
  executionHighlights?: TeamHighlight[];
  executionHighlightsFooter?: string;
};

export const TEAM_MEMBERS: Record<string, TeamMember> = {
  "brendan-kennedy": {
    slug: "brendan-kennedy",
    name: "Brendan Kennedy",
    title: "Co-Founder/Executive Producer",
    image: "/images/j2.webp",
    detailPage: true,
    background: [
      "The team at HoYoverse approached ASH with an incredible challenge: to bring one of their most iconic weapons to life.",
      "To celebrate the arrival of Hoshimi Miyabi, the latest and most anticipated playable Agent in Zenless Zone Zero, we were commissioned to forge her signature weapon, the Tailless Blue Flame Katana. The blade stands as a symbol of Miyabi’s strength, her family lineage, and the source of her formidable power.",
    ],
    executionHighlights: [
      {
        title: "AWE ME:",
        description:
          "Full-length episode of Man at Arms: Reforged featuring the complete creation of Miyabi’s Tailless Katana.",
      },
      {
        title: "CREATIVE FIDELITY:",
        description:
          "Showcased real-world smithing techniques and flame effects faithful to the game’s art direction.",
      },
      {
        title: "SOCIAL BOOST:",
        description:
          "Amplified across YouTube, Instagram, and X with short-form edits and stills.",
      },
    ],
    executionHighlightsFooter:
      "Players raved across Reddit, X, and HoYo’s official discussion forums.",
  },
  "dat-tran": {
    slug: "dat-tran",
    name: "Dat Tran",
    title: "Co-Founder/Head of Business Dev",
    image: "/images/j3.webp",
    detailPage: true,
      executionHighlights: [
      {
        title: "AWE ME:",
        description:
          "Full-length episode of Man at Arms: Reforged featuring the complete creation of Miyabi’s Tailless Katana.",
      },
      {
        title: "CREATIVE FIDELITY:",
        description:
          "Showcased real-world smithing techniques and flame effects faithful to the game’s art direction.",
      },
      {
        title: "SOCIAL BOOST:",
        description:
          "Amplified across YouTube, Instagram, and X with short-form edits and stills.",
      },
    ],
    background: [
      "Before games he was a competitive figure skater from Canada. Having traveled the world to various competitions, events, and shows, he developed a deep appreciation for the artistry behind live storytelling.",
      "As he entered and began building a career in gaming, he found himself at the epicenter in the early stages of the launch of esports, streaming, and influencer marketing which led to his involvement in some of the earliest creator-led activations for brands like Red Bull and Ubisoft.",
    ],
  },
};

export const TEAM_MEMBERS_LIST: TeamMember[] = [
  {
    slug: "kerry-stagmer",
    name: "Kerry Stagmer",
    title: "Co-Founder/CEO",
    image: "/images/j1.webp",
  },
  TEAM_MEMBERS["brendan-kennedy"],
  TEAM_MEMBERS["dat-tran"],
  {
    slug: "mahendra-khera",
    name: "Mahendra Khera",
    title: "Producer/Editor",
    image: "/images/j4.webp",
  },
  {
    slug: "cate-barry",
    name: "Cate Barry",
    title: "Administrative Assistant",
    image: "/images/j5.webp",
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM_MEMBERS[slug];
}
