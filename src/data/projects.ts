export interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  link: string;
  github?: string;
  extraLinks?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: "BhumiChain",
    category: "Web3 / GovTech",
    description: "GovTech blockchain land registry built for Uttar Pradesh, digitizing land records with DPDPA-compliant cryptography and dual-login flows for citizens and officials.",
    year: "2024",
    link: "https://bhumichain.vercel.app",
    extraLinks: [
      { label: "Live App", url: "https://bhumichain.vercel.app" }
    ]
  },
  {
    title: "Dehix",
    category: "Startup / Web3 Ecosystem",
    description: "Web3 talent and trust ecosystem connecting freelancers and businesses with smart-contract escrow, Oracle verification, and a DAO fundraising layer.",
    year: "2025",
    link: "https://dehix.org",
    extraLinks: [
      { label: "Web", url: "https://dehix.org" },
      { label: "App", url: "https://app.dehix.org" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/dehix-talent" }
    ]
  },
  {
    title: "D-Frame Foundation",
    category: "Web3 / Data Privacy",
    description: "Decentralized data ecosystem enabling individuals to monetize their personal data with privacy via smart contracts and a native token economy.",
    year: "2021",
    link: "https://dframe.org",
    extraLinks: [
      { label: "Website", url: "https://dframe.org" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/d-frame-foundation" }
    ]
  },
  {
    title: "Svensk Bakgrundsanalys",
    category: "Web Platform / Security",
    description: "Full-service B2B security and compliance platform for a Swedish background screening company serving highly regulated industries.",
    year: "2024",
    link: "https://bakgrundsanalys.se",
    extraLinks: [
      { label: "Live App", url: "https://bakgrundsanalys.se" }
    ]
  },
  {
    title: "SSI Strategy Factory",
    category: "AI / Web3",
    description: "No-code platform for launching AI-balanced, auto-rebalancing crypto index funds in under 2 minutes.",
    year: "2024",
    link: "https://ssi-backend-three.vercel.app",
    github: "https://github.com/arpit2222/ssi"
  },
  {
    title: "LexCrypt",
    category: "Web3 / Legal Tech",
    description: "Privacy-first legal contract platform computing directly on encrypted terms via Fully Homomorphic Encryption.",
    year: "2024",
    link: "https://lex-crypt.vercel.app",
    github: "https://github.com/arpit2222/LexCrypt"
  },
  {
    title: "Dehix LiveRoom",
    category: "Web3 / AI Platform",
    description: "Real-time AI-powered Web3 hiring platform with in-room AI assistant and live chat.",
    year: "2024",
    link: "https://dehix-liveroom-api-server.vercel.app",
    github: "https://github.com/arpit2222/dehix-liveroom"
  },
  {
    title: "Sentinel",
    category: "AI / Security",
    description: "Autonomous AI liquidation-protection agent secured by biometric smart accounts.",
    year: "2024",
    link: "https://sentinel-seven-tau.vercel.app",
    github: "https://github.com/arpit2222/sentinel"
  },
  {
    title: "SandwichShield",
    category: "Web3 / Security",
    description: "AI-driven MEV sandwich-attack detection agent for the Mantle Network.",
    year: "2024",
    link: "https://sandwhichshield.vercel.app",
    github: "https://github.com/arpit2222/sandwhichshield"
  },
  {
    title: "Guardian",
    category: "AI / Infrastructure",
    description: "Multi-agent autonomous incident response system integrated with Splunk.",
    year: "2024",
    link: "https://guardian-umber-theta.vercel.app",
    github: "https://github.com/arpit2222/guardian"
  },
  {
    title: "Crucible",
    category: "UI / UX",
    description: "Recently redesigned with a premium glassmorphism UI.",
    year: "2024",
    link: "https://crucible-lilac.vercel.app",
    github: "https://github.com/arpit2222/Crucible"
  },
  {
    title: "MezoOS",
    category: "Web3 / Bitcoin",
    description: "Bitcoin-native treasury and payments OS using BTC-backed MUSD, with an AI financial assistant.",
    year: "2024",
    link: "https://mezo-os-web.vercel.app",
    github: "https://github.com/arpit2222/mezoOs"
  },
  {
    title: "PropCall",
    category: "Frontend",
    description: "React + Vite app with a live product demo landing page.",
    year: "2024",
    link: "https://propcall.vercel.app",
    github: "https://github.com/arpit2222/propcall"
  },
  {
    title: "AgentPrediction",
    category: "AI / Web3",
    description: "Autonomous agent-native prediction markets on Kite AI, with three competing AI agent personalities staking real funds.",
    year: "2024",
    link: "https://agent-prediction.vercel.app",
    github: "https://github.com/arpit2222/AgentPrediction"
  },
  {
    title: "VerifyTrade",
    category: "DeFi / Web3",
    description: "MEV-protected DeFi trading platform with TEE-based execution and on-chain fairness proofs.",
    year: "2024",
    link: "https://verify-trade-frontend.vercel.app",
    github: "https://github.com/arpit2222/VerifyTrade"
  },
  {
    title: "SourceScan",
    category: "AI / Data",
    description: "AI + web-scraping agent for discovering cost-saving suppliers.",
    year: "2024",
    link: "https://sourcescan.vercel.app",
    github: "https://github.com/arpit2222/sourcescan"
  },
  {
    title: "ForgeAgent",
    category: "AI / Automation",
    description: "Fully autonomous AI developer agent that builds and ships SaaS apps end-to-end.",
    year: "2024",
    link: "https://forge-agent-red.vercel.app",
    github: "https://github.com/arpit2222/forge-agent"
  },
  {
    title: "EthDelhi",
    category: "DeFi / Bridge",
    description: "Cross-chain HTLC bridge plus real-world stock tokenization and AI trading strategies.",
    year: "2024",
    link: "https://ethdelhi.vercel.app",
    github: "https://github.com/arpit2222/ethdelhi"
  },
  {
    title: "CarbonIQ",
    category: "Climate Tech / AI",
    description: "Carbon-credit intelligence platform with IPCC-based calculations and AI-assisted research.",
    year: "2024",
    link: "https://carbon-iq-gold.vercel.app",
    github: "https://github.com/arpit2222/carbonIQ"
  },
  {
    title: "Solana Kit Migrator",
    category: "Open Source / CLI",
    description: "Published npm codemod package migrating Solana web3.js v1 to @solana/kit.",
    year: "2024",
    link: "https://solana-kit-migrator.vercel.app",
    github: "https://github.com/arpit2222/solana-kit-migrator"
  },
  {
    title: "React Router v6→v7 Codemod",
    category: "Open Source / CLI",
    description: "Published open-source codemod automating React Router's v6-to-v7 migration, benchmarked against a competing tool.",
    year: "2024",
    link: "https://react-router-v6-to-v7.vercel.app",
    github: "https://github.com/arpit2222/react-router-v6-to-v7"
  },
  {
    title: "NoxLend",
    category: "DeFi / Web3",
    description: "Private DeFi lending protocol with fully encrypted deposit/borrow balances.",
    year: "2024",
    link: "https://noxlend.vercel.app",
    github: "https://github.com/arpit2222/noxlend"
  },
  {
    title: "GhostPool",
    category: "DeFi / Web3",
    description: "Privacy-first prediction market dApp using FHE-encrypted bets on Arbitrum.",
    year: "2024",
    link: "https://ghostpool.vercel.app",
    github: "https://github.com/arpit2222/ghostpool"
  },
  {
    title: "TrialVault",
    category: "Web3 / Healthcare",
    description: "Zero-knowledge clinical trials platform proving patient eligibility without exposing health data.",
    year: "2024",
    link: "https://trialvault-midnight.vercel.app",
    github: "https://github.com/arpit2222/trialvaultMidnight"
  },
  {
    title: "EduOS",
    category: "Web3 / EdTech",
    description: "AI study-guide generator with on-chain LEARN token rewards for passing quizzes.",
    year: "2024",
    link: "https://edu-os-two.vercel.app",
    github: "https://github.com/arpit2222/eduOs"
  },
  {
    title: "Dream7",
    category: "Web3 / Gaming",
    description: "Binary prediction market for live IPL cricket and crypto events on Monad Testnet.",
    year: "2024",
    link: "https://monad-blitz-delhi-dream7.vercel.app",
    github: "https://github.com/arpit2222/monad-blitz-delhi-dream7"
  },
  {
    title: "Bondflow",
    category: "Web3 / Frontend",
    description: "Next.js project with Web3 integration.",
    year: "2024",
    link: "https://bondflow-ochre.vercel.app",
    github: "https://github.com/arpit2222/bondflow"
  }
];
