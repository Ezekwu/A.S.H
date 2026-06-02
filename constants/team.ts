export type TeamHighlight = {
  title: string;
  description: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  image: string;
  externalLink?: string;
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
      "Brendan Kennedy is a producer and director with over 10 years of experience delivering video production across video game marketing, esports, and branded content. As CoFounder of ASH Entertainment, he leads the company's video production services alongside Co-Founder and Head of Business Development Dat Tran.",
      "He has a demonstrated history of working in the digital branded content world, having worked at Riot Games and produced content for Activision Blizzard, Bethesda, 2K, HoYoverse, and Krafton Games, among others. His experience in the gaming community has given him valuable insight into what players are looking for.",
      "He can oversee a shoot from pre-production, working with the creative, lining out the budget, booking the crew, and running the shoot on the day, all the way through the delivery and posting of the project."
    ],
    
  },
  "dat-tran": {
    slug: "dat-tran",
    name: "Dat Tran",
    title: "Co-Founder/Head of Business Dev",
    image: "/images/j3.webp",
    detailPage: true,
      
    background: [
      "Dat Tran is a producer and business development executive with over 10 years of experience delivering video production across music, gaming, and branded content. As Co-Founder of ASH Entertainment, he leads the company's video production services alongside Co-Founder and Executive Producer Brendan Kennedy, bringing a unique blend of traditional media and Hollywood studio experience to build an independent, creator-driven model grounded in real industry insight.",
      "After completing his service in the Army National Guard, Dat began working in the entertainment industry, spending four years on the senior leadership team at Warner Music Group overseeing studio production operations, followed by a role as Head of Production at Huffman Creative. Before that, he built his foundation at UPROXX Studios managing branded campaigns for some of the biggest names in entertainment.",
      "His project credits include Executive Producer and Supervising Producer roles on campaigns for Activision Blizzard (Call of Duty: WWII), Ubisoft (Far Cry 5), Bethesda (The Elder Scrolls Online: Gold Road), Doja Cat x BBC, JoJo x Honda, Rick Ross x Checkers, and more.",
      "With a track record spanning global game launches, music videos, celebrity brand partnerships, and long-form branded series, Dat and the ASH team are built to deliver at every scale."
    ],
  },
};

export const TEAM_MEMBERS_LIST: TeamMember[] = [
  {
    slug: "kerry-stagmer",
    name: "Kerry Stagmer",
    title: "Co-Founder/CEO",
    image: "/images/j1.webp",
    externalLink: "https://baltimoreknifeandsword.com/kerry",
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
