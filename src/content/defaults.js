// Default site content.
// The site shows this when nothing has been saved from the admin panel yet
// (or if the database can't be reached). Once you save a section in /admin,
// the saved version is used instead.

const defaults = {
  showcase: {
    items: [
      { title: 'Ai-cha Food Nepal', category: 'Brand launch · F&B', src: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/q_auto,f_auto/v1782164715/vanilla_gpieo7.mp4', type: 'video', shape: 'wide' },
      { title: 'ING Group', category: 'Social storytelling', src: '/assets/asset_04.mp4', type: 'video', shape: 'portrait' },
      { title: 'Naamche & Utopia', category: 'Brand direction', src: '/assets/asset_07.mp4', type: 'video', shape: 'square' }
    ],
  },
  hero: {
    eyebrow: 'Diya Shrestha — Social Media & Brand Strategist · Dubai, UAE',
    intro: "From brand positioning to TikTok growth to full GTM execution, I've done it for global and local brands across Nepal. I'm looking to bring that to a team full-time.",
    logos: [
      { image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164704/logo1_vrznlj.png' },
      { image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164705/logo2_apwghu.png' },
      { image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164706/logo3_cj0so0.png' },
      { image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164706/logo4_q8atau.png' },
      { image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164707/logo5_chd6r9.png' },
      { image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164707/logo6_vrsgzm.png' },
      { image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto/v1782164708/logo7_ocmhe1.png' },
    ],
  },

  about: {
    note: 'Based in Kathmandu. Open to full-time roles at agencies and brands — in Nepal or remote.',
    intro: "I've been the marketing department for a global brand's Nepal entry, the social media engine behind institutions reaching hundreds of thousands of students, and the strategist who turns a vague brief into a campaign that moves people.",
    body: "My work spans the full funnel — from positioning a brand before launch, to writing the copy, directing the ad shoot, building the content system, and reading the numbers after. I don't hand off at the strategy deck. I stay until it works.",
    skills: [
      { label: 'Social Media Strategy', items: ['TikTok & Reels growth', 'Content calendar systems', 'Platform-specific storytelling', 'Community building'] },
      { label: 'Brand & Positioning', items: ['Brand voice & identity', 'GTM strategy', 'Campaign architecture', 'Content audits'] },
      { label: 'Execution', items: ['Ad direction & storyboarding', 'Paid social (Meta, TikTok)', 'Cross-channel campaigns', 'Physical & digital collateral'] },
    ],
  },

  work: {
    industries: [
      {
        id: 'fnb', label: 'F&B Marketing',
        headline: 'Content that sells before the first bite.',
        client: 'Ai-cha', role: 'National Marketing Manager', color: '#F472B6',
        cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=90',
        summary: 'Full-funnel marketing for a global F&B brand entering Nepal — positioning, paid ads, in-store activation, and social content that actually converted.',
        result: '80–90 quality leads generated. Full numbers updating soon.',
        subcats: ['Ad Campaigns', 'Content', 'Brand Strategy'],
        videos: [
          { href: 'https://www.instagram.com/p/C_x3o3HtBPi/', preview: '/assets/previews/fnb-1.mp4', orientation: 'landscape', caption: 'F&B Campaign — Cut 01', tags: ['Ad Campaigns', 'Content', 'Brand Strategy'] },
          { href: 'https://www.instagram.com/p/DAEAdrytoil/', preview: '/assets/previews/fnb-2.mp4', orientation: 'landscape', caption: 'F&B Campaign — Cut 02', tags: ['Content', 'Brand Strategy'] },
          { href: 'https://www.instagram.com/p/DBM1CGHO9PI/', preview: '/assets/previews/fnb-3.mp4', orientation: 'landscape', caption: 'F&B Campaign — Cut 03', tags: ['Ad Campaigns', 'Content'] },
        ],
      },
      {
        id: 'education', label: 'Education Marketing',
        headline: 'Millions of views. Three institutions. One strategy.',
        client: 'ING Group', role: 'Social Media & Marketing Strategist', color: '#7C6AF7',
        cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90',
        summary: 'Built the complete social and content engine for Herald College, Islington College, and Kavya School simultaneously — TikTok growth, ad direction, storyboarding, and reels production.',
        result: 'Millions of organic TikTok views across all three institutions.',
        subcats: ['Campaign Marketing', 'Brand Strategy', 'Experiential Marketing', 'Influencer Marketing', 'Ad Campaigns', 'Promotional Marketing', 'Lead Generation'],
        videos: [
          { href: 'https://www.instagram.com/tv/Ca1N3OwFzRA/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164687/education1_jxvtic.mp4', orientation: 'landscape', caption: 'Honoring the Women Who Built This Place', tags: ['Campaign Marketing', 'Brand Strategy', 'Experiential Marketing'] },
          { href: 'https://www.instagram.com/p/CxqHwsjN7Fg/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164681/education2_wtky2j.mp4', orientation: 'landscape', caption: 'The Unboxing That Sold the Story', tags: ['Influencer Marketing', 'Brand Strategy', 'Ad Campaigns'] },
          { href: 'https://www.instagram.com/p/CmbMvevB5V7/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164681/education3_pvohza.mp4', orientation: 'landscape', caption: 'The Walk Across the Stage', tags: ['Ad Campaigns', 'Brand Strategy', 'Promotional Marketing'] },
          { href: 'https://www.instagram.com/p/C5nnVntt0GP/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164691/education4_kmq9ts.mp4', orientation: 'portrait', caption: 'What Campus Life Actually Looks Like', tags: ['Brand Strategy', 'Campaign Marketing'] },
          { href: 'https://www.instagram.com/p/C0baMn2NHyz/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164694/education5_n7syzq.mp4', orientation: 'landscape', caption: 'Four Years, One Moment', tags: ['Ad Campaigns', 'Brand Strategy', 'Lead Generation'] },
          { href: 'https://www.instagram.com/p/Crk_-7yuwg4/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164703/education6_cvmwxs.mp4', orientation: 'landscape', caption: 'Energy You Can Feel Through the Screen', tags: ['Experiential Marketing', 'Brand Strategy'] },
          { href: 'https://www.instagram.com/p/CpgvofyIh-k/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164703/education7_yqvupx.mp4', orientation: 'portrait', caption: 'A Thank You, Caught on Camera', tags: ['Experiential Marketing', 'Campaign Marketing', 'Brand Strategy'] },
          { href: 'https://www.instagram.com/tv/ClTO1_RNOzd/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164705/education8_shkx96.mp4', orientation: 'landscape', caption: 'Making Higher Education Reachable', tags: ['Lead Generation', 'Ad Campaigns', 'Promotional Marketing'] },
        ],
      },
      {
        id: 'events', label: 'Event Marketing',
        headline: 'Capturing the room, not just the event.',
        client: 'Classic Projects & KaPa', role: 'Brand Head & Content Lead', color: '#C76FE0',
        cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90',
        summary: 'From the first floral detail to the headline act — self-shot photography, on-site content, and the brand strategy holding it all together.',
        result: 'Consistent brand presence across every event format — intimate ceremonies to full-scale productions.',
        subcats: ['Experiential Marketing', 'Brand Strategy', 'Campaign Marketing', 'Engagement Strategy', 'Promotional Marketing', 'Entertainment Marketing', 'Ad Campaigns'],
        videos: [
          { href: 'https://www.instagram.com/p/DU25tpnk59x/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164695/events1_ihussq.mp4', orientation: 'landscape', caption: 'The Ritual Before the Vows', tags: ['Experiential Marketing', 'Brand Strategy', 'Campaign Marketing'] },
          { href: 'https://www.instagram.com/p/DWJPq32TC0C/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164693/events3_axq7zy.mp4', orientation: 'portrait', caption: 'A Quiet Moment, Captured Loud', tags: ['Experiential Marketing', 'Engagement Strategy', 'Campaign Marketing'] },
          { href: 'https://www.instagram.com/p/DWd1-epzsAG/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164696/events4_ivxmyr.mp4', orientation: 'portrait', caption: 'Set, Styled, Ready', tags: ['Brand Strategy', 'Promotional Marketing'] },
          { href: 'https://www.instagram.com/p/DXWrauVFUuA/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164702/events6_q1hqnk.mp4', orientation: 'portrait', caption: 'Every Detail On Display', tags: ['Brand Strategy', 'Experiential Marketing', 'Promotional Marketing'] },
          { href: 'https://www.instagram.com/p/CrDEvbWPaQY/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164710/events7_keblkm.mp4', orientation: 'portrait', caption: 'Sabin Rai Live — The Crowd Reacts', tags: ['Entertainment Marketing', 'Experiential Marketing', 'Engagement Strategy'] },
          { href: 'https://www.instagram.com/p/CyqIsfxMSDC/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164706/events8_j3rczc.mp4', orientation: 'landscape', caption: 'A Production Built for the Brand', tags: ['Ad Campaigns', 'Experiential Marketing', 'Brand Strategy'] },
          { href: 'https://www.instagram.com/p/Crk_-7yuwg4/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164715/events9_wqauxs.mp4', orientation: 'landscape', caption: 'Sabin Rai On Stage, In Full Scale', tags: ['Ad Campaigns', 'Experiential Marketing', 'Entertainment Marketing'] },
        ],
      },
      {
        id: 'realestate', label: 'Real Estate Campaigns',
        headline: 'Clean visuals that let the space speak.',
        client: 'Naamche', role: 'Brand & Social Strategist', color: '#1D9E75',
        cover: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=90',
        summary: 'Brand identity and social content for a real estate brand — visual guidelines, content system, and social strategy across platforms.',
        result: 'Cohesive brand language across all digital and physical touchpoints.',
        subcats: ['Brand Strategy', 'Content'],
        videos: [
          { href: 'https://www.instagram.com/p/DCzbZLqAlRa/', preview: 'https://res.cloudinary.com/dvhs1dbxh/video/upload/v1782164710/realstate1_simcef.mp4', orientation: 'landscape', caption: 'Where the Right Buyer Sees Themselves', tags: ['Brand Strategy', 'Content'] },
          { href: 'https://www.instagram.com/p/DC8MnOAN4ZI/', preview: '/assets/previews/re-2.mp4', orientation: 'landscape', caption: 'The Space Before the Sale', tags: ['Brand Strategy', 'Content'] },
        ],
      },
      {
        id: 'design', label: 'Design & Creative',
        headline: 'Strategy behind the aesthetic.',
        client: 'Utopia', role: 'Social Media Strategist', color: '#EF9F27',
        cover: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=90',
        summary: 'Social media strategy and reels content engine for a design agency — brand voice, content calendar, and platform consistency.',
        result: 'Consistent reels output and measurable engagement lift.',
        subcats: ['Content', 'Brand Strategy'],
        videos: [],
      },
      {
        id: 'hospitality', label: 'Hospitality Marketing',
        headline: 'Premium stays deserve premium content.',
        client: 'Coming soon', role: '', color: '#64A8D8',
        cover: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=90',
        summary: 'Hospitality and boutique hotel campaigns coming soon.',
        result: '', subcats: [], videos: [],
      },
      {
        id: 'lifestyle', label: 'Lifestyle Campaigns',
        headline: 'Culture-first content with commercial results.',
        client: 'Coming soon', role: '', color: '#F59E8A',
        cover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=90',
        summary: 'Lifestyle brand and cultural content work coming soon.',
        result: '', subcats: [], videos: [],
      },
    ],
  },

  results: {
    metrics: [
      { value: '650%', label: 'Follower base growth achieved across key institutional social channels', context: 'ING Skill Academy' },
      { value: '80+', label: 'Quality conversion leads generated inside a single campaign timeline', context: 'Ai-cha Food Nepal' },
      { value: '4+', label: 'Years spent building identities and digital campaigns with true impact', context: 'Market Presence' },
      { value: '100%', label: 'End-to-end campaign ownership — from strategy through execution', context: 'Full-Funnel' },
    ],
    testimonials: [
      {
        quote: 'Diya was instrumental in our brand-building efforts. She demonstrated a natural talent for content ideation and storytelling, helping us craft a more compelling narrative for our brand. Diya is a highly motivated and capable individual with a strong grasp of both digital marketing and brand development. Any organization would be lucky to have her.',
        name: 'Sarang Ranjitkar',
        title: 'Brand Operations',
        image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto,w_120,h_120,c_fill/v1782164709/sarang_bgzvxi.jpg',
        relation: 'Managed Diya directly',
      },
      {
        quote: 'Diya consistently demonstrated her strengths in campaign management, social media strategy, and content creation. She has a natural ability to understand audience behavior and tailor campaigns that not only engage but also drive measurable growth. What I admire most is her collaborative spirit and problem-solving mindset.',
        name: 'Shruti Shrestha',
        title: 'Marketing Professional · Building Brands',
        image: 'https://res.cloudinary.com/dvhs1dbxh/image/upload/q_auto,f_auto,w_120,h_120,c_fill/v1782164709/shruti_adx677.jpg',
        relation: 'Worked on the same team',
      },
    ],
    experience: [
      { year: '2026 — Present', role: 'National Marketing Manager', company: 'AI-CHA FOOD NEPAL', desc: 'Developing overarching brand strategy for Utopia, aligning voice and market positioning. Orchestrating brand-aligned event execution for Cue to heighten audience community engagement.' },
      { year: '2024 — Present', role: 'Digital Marketing Strategist', company: 'Freelance Workspace', desc: 'Formulating strategic brand assets and workflows. Designing and conducting hands-on training courses for digital marketing at DanpheLink covering analytics, SEO, and content structures.' },
      { year: '2024 — 2025', role: 'Growth Marketing Manager', company: 'NAAMCHE Inc Pvt. Ltd', desc: 'Oversaw active advertising targets across Google, Instagram, and Facebook Ads. Directed copy positioning and competitive market research loops for reAlpha, a US-based real estate AI platform.' },
      { year: '2022 — 2024', role: 'Digital Marketing Executive', company: 'ING SKILL ACADEMY', desc: 'Covered large-scale company events on-site. Authored content frameworks across TikTok, IG, and Facebook to generate deep platform tracking logs, elevating active follower numbers by 650%.' },
      { year: '2021 — 2022', role: 'Social Media Manager', company: 'SURFPRO', desc: 'Researched, scripted, and edited organic product tutorial lines on YouTube. Managed distribution metrics to cultivate visible subscriber growth paths and solid engagement parameters.' },
    ],
    resumeUrl: '/resume.pdf',
  },

  contact: {
    email: 'diya.shr.business@gmail.com',
    linkedin: 'https://www.linkedin.com/in/diya-shr/',
  },
};

export default defaults;
