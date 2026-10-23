// Research data for Creator Niche Lab.
// Figures are approximate (late 2026) and drawn from public channel pages and
// creator-economy reports. RPM ranges vary a lot by country and audience;
// always check YouTube Studio / Instagram Professional Dashboard for your own numbers.

window.LAB_DATA = {
  updated: "October 2026",

  rules: {
    youtube: [
      { tier: "Fan-funding tier", subs: 500, alt: "3,000 public watch hours (12 months) OR 3M Shorts views (90 days)", plus: "3 public uploads in the last 90 days", unlocks: "Memberships, Super Thanks/Chat/Stickers, Shopping" },
      { tier: "Full ad revenue", subs: 1000, alt: "4,000 public watch hours (12 months) OR 10M Shorts views (90 days)", plus: "No active strikes, 2-Step Verification, linked AdSense", unlocks: "Ad revenue on long-form + Shorts feed revenue, YouTube Premium share" }
    ],
    youtubeNote: "Third-party sources report the full-ad-revenue bar for NEW applicants may rise in 2027 (8,000 watch hours or 20M Shorts views). YouTube has not been confirmed as the source, so check the official YPP help page before planning around it.",
    instagram: [
      { tier: "Affiliate & small brand deals", subs: 1000, alt: "Engagement rate above ~3% matters more than follower count", plus: "Professional (Creator) account", unlocks: "Affiliate links, product seeding, paid micro-collabs" },
      { tier: "Gifts on Reels", subs: 500, alt: "Thresholds vary by country and change often", plus: "Professional account, 18+, supported region", unlocks: "Viewers send paid gifts on Reels" },
      { tier: "Subscriptions", subs: 10000, alt: "Commonly reported bar; check your Professional Dashboard", plus: "18+, supported country, payout account", unlocks: "Monthly paid subscriptions, exclusive content" }
    ],
    policy: [
      "YouTube's 'inauthentic / reused content' policy demonetizes channels that re-upload or lightly edit other people's videos. Copy the format, never the footage.",
      "Instagram's recommendation system down-ranks reposted and watermarked content. Original audio + original footage gets distributed.",
      "Using a competitor's title structure, topic or pacing is fair game. Using their script word-for-word, thumbnail art, music or clips is not."
    ]
  },

  niches: [
    {
      id: "finance",
      name: "Personal Finance & Side Income",
      tagline: "Money explainers, budgeting, investing basics, side hustles",
      rpm: "$8–25", rpmMid: 15,
      monetize: [60, 90],
      speed: "60–90 days",
      faceless: true,
      competition: "High",
      ytFit: 5, igFit: 4,
      why: "Advertisers like brokerages, banks, credit cards and tax tools pay the highest CPMs on YouTube. Viewers search for answers ('how to invest ₹10,000', 'Roth IRA explained'), so evergreen videos keep earning for years.",
      audience: "22–40 year olds starting their first job or trying to get out of debt",
      paths: [
        { name: "YouTube ads", when: "After YPP (1K subs + 4K hrs)", value: "Top-tier RPM" },
        { name: "Affiliate (brokers, budgeting apps, credit cards)", when: "From day 1 (check local rules)", value: "$20–200 per signup" },
        { name: "Digital products (budget sheets, Notion templates)", when: "From ~1K followers", value: "High margin" },
        { name: "Brand deals (fintech apps)", when: "From ~5K engaged followers", value: "$100–2,000 per post early on" }
      ],
      formats: ["Whiteboard / screen-share explainers", "'I tried X for 30 days' experiments", "Salary & budget breakdowns", "Carousel cheat-sheets on Instagram"],
      subNiches: ["Investing for beginners (country-specific)", "Budgeting for students", "Side hustles tested with real numbers", "Credit score & debt payoff", "FIRE / early retirement", "Taxes explained simply"],
      risks: "Crowded at the top. Win by going narrow (one country, one audience, one income level) and showing real numbers. Never give guaranteed-return claims.",
      plan: [
        { phase: "Days 1–30", tasks: ["Pick ONE audience (e.g. 'first-salary earners in India').", "Publish 3 long-form searchable explainers + 1 Short/Reel per day.", "Set up a free budget template as a lead magnet."] },
        { phase: "Days 31–60", tasks: ["Double down on the 2 topics with highest CTR.", "Start one recurring series ('Salary breakdown Fridays').", "Apply for affiliate programs; add links in descriptions."] },
        { phase: "Days 61–90", tasks: ["Push long-form to hit 4,000 watch hours (10–20 min videos).", "Pitch 5 fintech brands with a 1-page media kit.", "Launch a low-ticket product."] }
      ]
    },
    {
      id: "ai",
      name: "AI Tools & Tech Tutorials",
      tagline: "AI tool walkthroughs, productivity workflows, gadget reviews",
      rpm: "$5–12", rpmMid: 8.5,
      monetize: [30, 60],
      speed: "30–60 days",
      faceless: true,
      competition: "Medium",
      ytFit: 5, igFit: 5,
      why: "New AI tools launch every week, so there is always fresh search demand with few good answers. Screen-recorded tutorials are cheap to make, and SaaS affiliate programs pay recurring commissions.",
      audience: "Students, freelancers, marketers and small business owners who want to save time",
      paths: [
        { name: "SaaS affiliate (recurring 20–40%)", when: "From day 1", value: "Recurring monthly income" },
        { name: "YouTube ads", when: "After YPP", value: "Solid tech/B2B RPM" },
        { name: "Sponsored tool reviews", when: "From ~2–5K subs; AI startups sponsor small channels", value: "$200–3,000 per video" },
        { name: "Templates, prompt packs, courses", when: "From ~1K followers", value: "High margin" }
      ],
      formats: ["'5 AI tools that replace X' listicles", "Step-by-step screen tutorials", "Before/after workflow demos", "'This new feature just dropped' news Shorts"],
      subNiches: ["AI for students", "AI for small business / marketing", "No-code automation", "AI video & image tools", "Excel / Notion / Google Sheets with AI", "Phone & gadget tips"],
      risks: "Tools change fast, so videos age quickly. Balance news with evergreen 'how to do X' workflows. Disclose affiliate links.",
      plan: [
        { phase: "Days 1–30", tasks: ["Choose one audience (e.g. 'AI for teachers').", "Post a tutorial on every major tool launch within 48 hours.", "Daily Shorts/Reels showing one 30-second trick."] },
        { phase: "Days 31–60", tasks: ["Turn your top Short into a 10-minute deep dive.", "Join 5 affiliate programs for tools you actually use.", "Reach out to new AI startups for paid reviews."] },
        { phase: "Days 61–90", tasks: ["Build a 'starter kit' of prompts/templates to sell.", "Create comparison videos ('X vs Y'), which rank for a long time.", "Add a newsletter to own your audience."] }
      ]
    },
    {
      id: "fitness",
      name: "Fitness & Healthy Living",
      tagline: "Home workouts, science-based training, weight-loss journeys",
      rpm: "$3–8", rpmMid: 5.5,
      monetize: [60, 90],
      speed: "60–90 days",
      faceless: false,
      competition: "High",
      ytFit: 4, igFit: 5,
      why: "Huge year-round demand with spikes every January and before summer. Transformation content is very shareable, and follow-along workouts produce long watch time, which helps you reach 4,000 hours quickly.",
      audience: "Beginners who want results at home with little equipment",
      paths: [
        { name: "Coaching / workout programs", when: "From ~1K engaged followers", value: "Highest income per follower" },
        { name: "Supplement & apparel brand deals", when: "From ~5–10K followers", value: "Frequent, recurring" },
        { name: "Affiliate (equipment, apps)", when: "From day 1", value: "Steady" },
        { name: "YouTube ads", when: "After YPP; follow-along videos earn lots of watch time", value: "Medium RPM, high volume" }
      ],
      formats: ["20–30 minute follow-along workouts", "Form-check Reels", "'What I eat in a day'", "30-day challenge vlogs"],
      subNiches: ["Workouts for busy parents", "Desk-job posture & mobility", "Beginner strength training for women", "Fat loss for 40+", "Calisthenics at home", "Vegetarian high-protein eating"],
      risks: "Avoid medical claims and extreme diets. On-camera presence helps a lot, though faceless 'form demo' animation channels also work.",
      plan: [
        { phase: "Days 1–30", tasks: ["Start a public 90-day challenge; it gives you a built-in story.", "Post 1 follow-along long video per week + daily Reels.", "Use the same set and lighting so the brand looks consistent."] },
        { phase: "Days 31–60", tasks: ["Release a free 7-day plan PDF for emails.", "Do collab Reels with similar-size creators.", "Answer comments with video replies."] },
        { phase: "Days 61–90", tasks: ["Launch a paid 4-week program or group coaching.", "Pitch supplement and activewear brands.", "Repurpose long workouts into 60-second Shorts."] }
      ]
    },
    {
      id: "food",
      name: "Quick Recipes & Food",
      tagline: "15-minute meals, budget cooking, street-food recreations",
      rpm: "$3–7", rpmMid: 5,
      monetize: [45, 90],
      speed: "45–90 days",
      faceless: true,
      competition: "Medium",
      ytFit: 4, igFit: 5,
      why: "Food Reels are among the most saved and shared posts on Instagram, and saves push distribution. Hands-only overhead shots mean you never need to show your face, and kitchen brands sponsor even small accounts.",
      audience: "Students, working professionals and new parents who want fast, cheap, tasty food",
      paths: [
        { name: "Brand deals (kitchenware, groceries, delivery apps)", when: "From ~3–5K followers", value: "Frequent product + paid deals" },
        { name: "Recipe e-books / meal plans", when: "From ~1K followers", value: "High margin" },
        { name: "Amazon / affiliate kitchen links", when: "From day 1", value: "Steady" },
        { name: "YouTube ads + Shorts revenue", when: "After YPP", value: "Medium RPM" }
      ],
      formats: ["Overhead 30–45 second recipe Reels", "'Restaurant dish at home for less' comparisons", "Weekly meal-prep long-form", "Ingredient-swap carousels"],
      subNiches: ["High-protein vegetarian meals", "Hostel / student cooking", "Air-fryer recipes", "Regional home food (e.g. Punjabi, Kerala)", "5-ingredient desserts", "Budget meals under ₹100 / $5"],
      risks: "Very visual: lighting and the first frame decide everything. Original recipes or clear credit matter; copying recipe videos shot-for-shot gets flagged.",
      plan: [
        { phase: "Days 1–30", tasks: ["Set up one fixed overhead angle + window light.", "Post 1 Reel/Short every day, all in one sub-niche.", "Write full recipes in the caption to get saves."] },
        { phase: "Days 31–60", tasks: ["Start a series ('₹100 dinners', 'Air-fryer week').", "Release a free 10-recipe PDF for emails.", "Tag ingredient and kitchen brands you use."] },
        { phase: "Days 61–90", tasks: ["Publish weekly 10-minute meal-prep videos for watch hours.", "Pitch brands with your save/share rate.", "Launch a paid recipe e-book."] }
      ]
    },
    {
      id: "story",
      name: "Faceless Storytelling & Explainers",
      tagline: "History, true stories, business case studies, science, 'how it works'",
      rpm: "$4–12", rpmMid: 8,
      monetize: [30, 90],
      speed: "30–90 days",
      faceless: true,
      competition: "Medium",
      ytFit: 5, igFit: 4,
      why: "Story videos keep people watching to the end, and retention is the strongest signal on both platforms. A single viral Short can bring millions of views, so this is one of the fastest routes to the 10M Shorts-views path.",
      audience: "Curious 16–35 year olds who binge documentaries and 'did you know' content",
      paths: [
        { name: "YouTube ads (documentary long-form)", when: "After YPP", value: "Medium–high RPM, long watch time" },
        { name: "Shorts revenue", when: "Via the 10M Shorts views path", value: "Lower RPM, huge volume" },
        { name: "Sponsors (apps, VPNs, learning platforms)", when: "From ~10K subs", value: "$500–5,000 per integration" },
        { name: "Paid community / Patreon", when: "From ~5K loyal fans", value: "Recurring" }
      ],
      formats: ["8–15 minute documentaries with B-roll and maps", "60-second 'untold story' Shorts", "Business rise-and-fall case studies", "Carousel 'thread' stories on Instagram"],
      subNiches: ["Business case studies (startups, brands)", "Dark history / mysteries", "Science 'what if' scenarios", "Geography & geopolitics explained", "Sports stories", "Stoic / philosophy stories"],
      risks: "Fully AI-generated channels with no original value risk the inauthentic-content policy. Write your own script, research properly, and add your own voice or opinion.",
      plan: [
        { phase: "Days 1–30", tasks: ["Pick one story category and make 30 Shorts on it.", "Find the 3 best-performing and expand them into long videos.", "Build a reusable template: intro sting, map style, font."] },
        { phase: "Days 31–60", tasks: ["Publish 2 long-form documentaries per week.", "Add a recurring series name viewers can follow.", "Test 3 thumbnail styles per video."] },
        { phase: "Days 61–90", tasks: ["Push to 10M Shorts views or 4,000 watch hours.", "Approach sponsors once you have a consistent 20K+ views per video.", "Hire a freelance editor to scale."] }
      ]
    }
  ],

  channels: [
    // Personal finance
    { niche: "finance", name: "Graham Stephan", platforms: ["YouTube", "Instagram"], handle: "@GrahamStephan", size: "5M+ YouTube", format: "Talking-head reaction + explainer, long-form", works: "Reacts to money news within hours and adds a strong personal opinion. Huge, curious thumbnails.", copy: "The 'news → what it means for YOUR money' format.", improve: "Localise it: same news, explained for your country with local apps and tax rules.", motive: "Authority + ad revenue" },
    { niche: "finance", name: "Nischa", platforms: ["YouTube", "Instagram"], handle: "@nischa", size: "1M+ YouTube", format: "Calm, aesthetic explainers with clean text graphics", works: "Simple frameworks ('6 money rules') shown with minimalist visuals. Feels premium and trustworthy.", copy: "Numbered framework videos with clean on-screen text.", improve: "Add your own spreadsheet and real numbers from your life for proof.", motive: "Trust → digital products" },
    { niche: "finance", name: "Humphrey Yang", platforms: ["YouTube", "Instagram"], handle: "@HumphreyYang", size: "1M+ YouTube, large IG/TikTok", format: "Short visual explainers, often using physical props", works: "Makes big numbers tangible (stacks of cash, rice grains). Ideal for Reels.", copy: "Visualise one money concept with a physical prop in under 60 seconds.", improve: "Use local currency and prices; finish with a carousel version for saves.", motive: "Fast reach on Shorts/Reels" },
    { niche: "finance", name: "Ankur Warikoo", platforms: ["YouTube", "Instagram"], handle: "@warikoo", size: "5M+ YouTube", format: "Direct-to-camera life & money lessons for young Indians", works: "Relatable, emotional hooks for first-job earners. Sells courses and books to the same audience.", copy: "'Things I wish I knew at 22' lesson lists.", improve: "Narrow down: one city, one profession or one salary band.", motive: "Personal brand → courses" },
    { niche: "finance", name: "CA Rachana Ranade", platforms: ["YouTube", "Instagram"], handle: "@CARachanaRanade", size: "5M+ YouTube", format: "Teacher-style stock market lessons, whiteboard", works: "Deep, structured education that viewers trust. Long watch time.", copy: "Lesson-series playlists ('Stock market basics, Part 1–10').", improve: "Shorter chapters, modern graphics, and practical demos inside real apps.", motive: "Education → courses" },
    { niche: "finance", name: "Andrei Jikh", platforms: ["YouTube"], handle: "@AndreiJikh", size: "2M+ YouTube", format: "Investing explainers with cinematic B-roll", works: "High production on topics like dividends and crypto; clear storytelling around data.", copy: "Monthly 'my portfolio update' accountability videos.", improve: "Start with a small, realistic portfolio; beginners relate more to it.", motive: "Ads + affiliate" },

    // AI & tech
    { niche: "ai", name: "Matt Wolfe", platforms: ["YouTube"], handle: "@mreflow", size: "800K+ YouTube", format: "Weekly AI news roundups + tool tutorials", works: "Consistent weekly news show; viewers come back every week to stay updated.", copy: "A fixed weekly 'AI news you missed' episode.", improve: "Focus each roundup on one audience (e.g. 'AI news for teachers').", motive: "Sponsors + affiliate" },
    { niche: "ai", name: "Jeff Su", platforms: ["YouTube", "Instagram"], handle: "@JeffSu", size: "1M+ YouTube", format: "Tight productivity tutorials (Google, ChatGPT, Notion)", works: "Zero fluff, very practical, perfect pacing with on-screen zooms.", copy: "'Top 10 tips for X' with timestamps and fast zoom-in edits.", improve: "Use your own industry's workflows and give viewers a downloadable template.", motive: "Authority → sponsors" },
    { niche: "ai", name: "Marques Brownlee (MKBHD)", platforms: ["YouTube", "Instagram"], handle: "@mkbhd", size: "19M+ YouTube", format: "Premium tech reviews", works: "Iconic visual style and honest opinions. People trust the verdict.", copy: "A clear verdict structure: what's good, what's bad, who should buy.", improve: "Review budget products in your market that big channels ignore.", motive: "Ads + brand deals" },
    { niche: "ai", name: "Kevin Stratvert", platforms: ["YouTube"], handle: "@KevinStratvert", size: "3M+ YouTube", format: "Beginner software tutorials", works: "Answers exact search queries ('how to use Copilot in Excel'). Evergreen traffic.", copy: "One video = one searchable question, answered step by step.", improve: "Add chapters, a cheat-sheet and a regional-language version.", motive: "Search traffic → ads" },
    { niche: "ai", name: "Ali Abdaal", platforms: ["YouTube", "Instagram"], handle: "@aliabdaal", size: "6M+ YouTube", format: "Productivity & tools, evidence-based", works: "Friendly teacher energy, research-backed frameworks, strong product funnel.", copy: "'The system I use for X' workflow videos.", improve: "Show the system with AI tools for a specific job (designer, student, lawyer).", motive: "Courses + sponsors" },

    // Fitness
    { niche: "fitness", name: "Jeff Nippard", platforms: ["YouTube", "Instagram"], handle: "@JeffNippard", size: "7M+ YouTube", format: "Science-based training explainers", works: "Cites studies, debunks myths, makes training feel smart. Sells programs.", copy: "'The science-based way to train X' explainers.", improve: "Make them for beginners at home or for women; cover gaps his audience does not.", motive: "Programs + app" },
    { niche: "fitness", name: "Jeremy Ethier", platforms: ["YouTube", "Instagram"], handle: "@JeremyEthier", size: "7M+ YouTube", format: "3D-animated form explainers", works: "Animated muscle visuals make complex topics clear. Very shareable.", copy: "Animated 'do this, not that' exercise comparisons.", improve: "Use simple 2D overlays (cheaper) and target a niche like desk workers.", motive: "Programs + app" },
    { niche: "fitness", name: "MadFit", platforms: ["YouTube", "Instagram"], handle: "@MadFit", size: "9M+ YouTube", format: "Follow-along home workouts, no equipment", works: "Clear titles (minutes + body part + 'no equipment'). Long watch time per video.", copy: "Searchable follow-along titles: '15 MIN FULL BODY – no equipment'.", improve: "Serve a group she does not: postpartum, seniors, small apartments, low-impact.", motive: "Watch hours → ads + app" },
    { niche: "fitness", name: "Pamela Reif", platforms: ["YouTube", "Instagram"], handle: "@PamelaRf1", size: "9M+ YouTube, 9M+ IG", format: "Workouts with music + aesthetic lifestyle", works: "Strong personal brand and visuals. Builds her own food brand off the audience.", copy: "Workouts set to music with simple on-screen timers.", improve: "Add beginner modifications and local-language voice cues.", motive: "Brand → own products" },
    { niche: "fitness", name: "Chloe Ting", platforms: ["YouTube", "Instagram"], handle: "@ChloeTing", size: "25M+ YouTube", format: "Free multi-week challenges", works: "A free 'challenge' gives viewers a reason to return daily for weeks.", copy: "A free 2–4 week challenge playlist with a printable schedule.", improve: "Run it live with community check-ins and before/after features of followers.", motive: "Community → app" },

    // Food
    { niche: "food", name: "Nick DiGiovanni", platforms: ["YouTube", "Instagram"], handle: "@NickDiGiovanni", size: "20M+ YouTube", format: "High-energy Shorts and food challenges", works: "Fast cuts, big personality, and collabs with other huge creators.", copy: "Rapid 30-second recipe Shorts with satisfying close-ups.", improve: "Use budget ingredients from your local market; viewers can actually make them.", motive: "Shorts reach → brand deals" },
    { niche: "food", name: "Joshua Weissman", platforms: ["YouTube", "Instagram"], handle: "@JoshuaWeissman", size: "9M+ YouTube", format: "'But cheaper/better' fast-food remakes", works: "A repeatable series format with a built-in comparison and humour.", copy: "'Restaurant dish vs homemade' price + taste comparisons.", improve: "Do it with local chains and street food in your city.", motive: "Series → cookbook" },
    { niche: "food", name: "Your Food Lab (Sanjyot Keer)", platforms: ["YouTube", "Instagram"], handle: "@YourFoodLab", size: "5M+ YouTube", format: "Cinematic Indian recipes", works: "Restaurant-quality visuals for home recipes; strong brand partnerships.", copy: "Cinematic close-up B-roll with a calm voice-over.", improve: "Focus on quick weekday versions (under 20 minutes).", motive: "Brand deals" },
    { niche: "food", name: "Kabita's Kitchen", platforms: ["YouTube", "Instagram"], handle: "@KabitasKitchen", size: "10M+ YouTube", format: "Simple home-style recipes in Hindi", works: "Clear, homely instructions in the audience's own language. Huge search traffic.", copy: "Native-language, step-by-step recipes for everyday dishes.", improve: "Add on-screen measurements, Shorts versions and a printable recipe card.", motive: "Search traffic → ads" },
    { niche: "food", name: "Babish Culinary Universe", platforms: ["YouTube", "Instagram"], handle: "@babishculinaryuniverse", size: "10M+ YouTube", format: "Recreating dishes from movies and TV", works: "Pop-culture hooks bring in non-cooking viewers too.", copy: "'Dish from [famous show/movie]' recreations.", improve: "Use local films, web series and festival dishes.", motive: "Cross-audience reach" },

    // Storytelling
    { niche: "story", name: "Kurzgesagt", platforms: ["YouTube", "Instagram"], handle: "@kurzgesagt", size: "20M+ YouTube", format: "Animated science explainers", works: "Big 'what if' questions and a beautiful, consistent animation style.", copy: "Take one huge question and answer it in simple steps with visuals.", improve: "Use simple motion graphics (Canva/CapCut) and answer smaller, trending questions faster.", motive: "Authority → merch + sponsors" },
    { niche: "story", name: "Johnny Harris", platforms: ["YouTube", "Instagram"], handle: "@johnnyharris", size: "6M+ YouTube", format: "Map-heavy geopolitics documentaries", works: "Maps, archival footage and a personal investigative voice.", copy: "The 'why does X exist?' map-based investigation.", improve: "Cover your own region's geography and history; less competition.", motive: "Ads + sponsors" },
    { niche: "story", name: "MrBallen", platforms: ["YouTube", "Instagram"], handle: "@MrBallen", size: "9M+ YouTube", format: "Strange, dark and mysterious true stories", works: "Masterful suspense: cliffhangers every few minutes keep retention high.", copy: "Three-act story with a mid-video cliffhanger.", improve: "Tell regional true stories nobody has covered in English or Hindi.", motive: "Ads + podcast" },
    { niche: "story", name: "Zack D. Films", platforms: ["YouTube", "Instagram"], handle: "@zackdfilms", size: "25M+ YouTube", format: "3D-animated 'what happens if' Shorts", works: "Curiosity-gap hooks in the first second and loopable endings.", copy: "One shocking fact, visualised in under 40 seconds.", improve: "Use stock clips + AI-assisted visuals for niche facts (medicine, engineering, history).", motive: "Shorts views path to YPP" },
    { niche: "story", name: "Dhruv Rathee", platforms: ["YouTube", "Instagram"], handle: "@dhruvrathee", size: "25M+ YouTube", format: "Researched explainers on news and history", works: "Topical subjects, simple graphics, strong opinion, fast publishing.", copy: "Explain the week's biggest story with clear graphics and sources.", improve: "Go deeper on one category (business, science, sport) with a neutral tone.", motive: "Ads + courses" },
    { niche: "story", name: "Magnates Media", platforms: ["YouTube"], handle: "@MagnatesMedia", size: "2M+ YouTube", format: "Business rise-and-fall documentaries", works: "Every company has a dramatic story; titles promise conflict.", copy: "'The rise and fall of [brand]' case studies.", improve: "Cover startups and brands from your country with original research.", motive: "Ads + sponsors" }
  ],

  studio: {
    finance: {
      ideas: [
        { t: "How I'd invest my first ₹10,000 / $1,000 (step by step)", f: "Long-form", hook: "If I had to start from zero today, this is exactly what I'd do." },
        { t: "The 50/30/20 budget on a real salary", f: "Reel / Short", hook: "Here's what a ₹40,000 salary looks like split the smart way." },
        { t: "5 money apps that actually saved me money", f: "Long-form", hook: "I tested 12 apps for 30 days. Only 5 were worth keeping." },
        { t: "Why your savings account is losing money", f: "Reel / Short", hook: "Your money is shrinking every year, and the bank won't tell you." },
        { t: "Side hustle tested: 30 days, real earnings", f: "Long-form", hook: "I tried the side hustle everyone recommends. Here's the honest number." },
        { t: "Credit score myths cheat-sheet", f: "Carousel", hook: "Swipe if you think checking your score lowers it." },
        { t: "Rich vs poor money habits (with real data)", f: "Reel / Short", hook: "One of these habits costs you ₹10 lakh by 40." },
        { t: "Salary breakdown: interviewing people about their budgets", f: "Series", hook: "How much do you earn, and where does it all go?" }
      ],
      scripts: [
        { name: "60-second money explainer", beats: [
          ["Hook (0–3s)", "Bold claim with a number: 'This mistake costs the average person {money} a year.'"],
          ["Problem (3–12s)", "Show the mistake with a quick on-screen example about {topic}."],
          ["Fix (12–45s)", "3 simple steps, each with on-screen text and a number."],
          ["Proof (45–55s)", "Show your own screen, spreadsheet or result."],
          ["CTA (55–60s)", "'Follow for part 2: how to automate this.'"]
        ]},
        { name: "10-minute searchable explainer", beats: [
          ["Cold open (0–30s)", "Answer the title question immediately, then promise the deeper 'how'."],
          ["Context (0:30–2:00)", "Why {topic} matters now, with one surprising statistic."],
          ["Steps (2:00–7:00)", "3–5 numbered steps, screen share for each, chapters in the description."],
          ["Mistakes (7:00–8:30)", "Common mistakes with {topic}; this is where comments come from."],
          ["Recap + CTA (8:30–10:00)", "One-slide summary, link the free template, end screen to the next video."]
        ]}
      ],
      editing: ["Clean white or dark background with large animated numbers", "Screen recordings with zoom-ins on the key figure", "Green/red colour coding for gains vs losses", "Subtitles with keywords highlighted in a second colour", "Pattern interrupt every 5–7 seconds (cut, zoom or graphic)", "Thumbnail: your face + one big number + 3 words max"],
      titles: ["How to {topic} (Beginner's Guide 2026)", "I Tried {topic} for 30 Days: Here's What Happened", "{topic} Explained in 5 Minutes", "Stop Doing This With {topic}", "The {topic} Mistake That's Costing You Money", "{topic}: What Nobody Tells You"],
      captions: ["Save this before you forget 👇 {topic} in 3 steps:\n1️⃣ …\n2️⃣ …\n3️⃣ …\nWhich step are you on?", "Most people get {topic} wrong. Here's the simple fix. Comment 'GUIDE' and I'll send you my free template.", "{topic} doesn't have to be complicated. Share this with a friend who needs it."],
      description: "In this video I explain {topic} step by step, with real numbers, so you can start today.\n\n⏱ Chapters\n00:00 The short answer\n00:45 Why {topic} matters\n02:00 Step-by-step\n07:00 Mistakes to avoid\n09:00 Recap\n\n📥 Free template: [link]\n🔗 Tools I use (affiliate): [links]\n\nThis is education, not financial advice.\n\n#personalfinance #{tag} #money",
      hashtags: { broad: ["#money", "#finance", "#investing", "#personalfinance"], mid: ["#budgeting", "#financialfreedom", "#moneytips", "#sidehustle"], niche: ["#firstsalary", "#investingforbeginners", "#moneyhabits", "#debtfree"] },
      keywords: ["how to invest for beginners", "budgeting tips", "best SIP / index fund", "how to save money", "side hustle ideas 2026", "credit score explained", "passive income", "emergency fund"]
    },
    ai: {
      ideas: [
        { t: "5 AI tools that replace a full-time assistant", f: "Long-form", hook: "These 5 tools do the work of a ₹30,000/month assistant." },
        { t: "This one prompt saves me 2 hours a day", f: "Reel / Short", hook: "Copy this prompt. You'll thank me tomorrow." },
        { t: "ChatGPT vs Claude vs Gemini for {job}", f: "Long-form", hook: "I gave all three the same task. One clearly won." },
        { t: "Build a website in 10 minutes with AI (no code)", f: "Long-form", hook: "No coding, no designer, ten minutes." },
        { t: "New AI feature just dropped: what it means for you", f: "Reel / Short", hook: "This update changes how you'll use your phone." },
        { t: "AI cheat-sheet for students", f: "Carousel", hook: "Save this before exams." },
        { t: "I automated my whole morning with AI", f: "Long-form", hook: "Before I open my eyes, AI has already done this." },
        { t: "Stop using AI like this (3 mistakes)", f: "Reel / Short", hook: "You're using AI wrong, and it's making your work worse." }
      ],
      scripts: [
        { name: "45-second tool demo", beats: [
          ["Hook (0–3s)", "Show the end result first: 'I made this in 30 seconds with {topic}.'"],
          ["Setup (3–10s)", "Name the tool and the problem it solves."],
          ["Demo (10–35s)", "Screen recording, sped up, with 3 on-screen step labels."],
          ["Twist (35–42s)", "One hidden feature or pro tip most people miss."],
          ["CTA (42–45s)", "'Comment TOOL and I'll send the link.'"]
        ]},
        { name: "12-minute tutorial", beats: [
          ["Result first (0–20s)", "Show the finished output of {topic}."],
          ["Who it's for (0:20–1:00)", "Name the audience and the time it saves."],
          ["Walkthrough (1:00–8:00)", "Step-by-step screen share with zoom-ins and chapters."],
          ["Advanced tips (8:00–10:30)", "3 pro tips + free alternatives."],
          ["Verdict + CTA (10:30–12:00)", "Pros, cons, price, who should use it; link to the template."]
        ]}
      ],
      editing: ["Screen Studio–style smooth zooms on cursor actions", "Speed-ramp the boring parts (2–4x)", "Before/after split screen", "Tool logos popping in as you mention them", "Keyboard-sound SFX for typing moments", "Thumbnail: tool logo + result screenshot + shocked or confident face"],
      titles: ["{topic}: Full Tutorial for Beginners (2026)", "I Replaced My Workflow With {topic}", "{topic} Just Changed Everything", "Stop Wasting Time: Use {topic} Like This", "10 {topic} Tricks You Didn't Know", "{topic} vs The Rest: Honest Comparison"],
      captions: ["This AI trick feels illegal to know 🤯 {topic} in 30 seconds. Comment 'AI' for the link.", "Save this. {topic} will save you hours this week. Which tool should I test next?", "I tested {topic} so you don't have to. Verdict at the end 👀"],
      description: "Full tutorial on {topic}: what it does, how to set it up, and the tricks most people miss.\n\n⏱ Chapters\n00:00 Result\n01:00 Setup\n03:00 Walkthrough\n08:00 Pro tips\n10:30 Verdict\n\n🔗 Tools mentioned (some are affiliate links): [links]\n📥 Free prompt pack: [link]\n\n#ai #{tag} #productivity",
      hashtags: { broad: ["#ai", "#technology", "#productivity", "#chatgpt"], mid: ["#aitools", "#techtips", "#automation", "#nocode"], niche: ["#aiforstudents", "#aiforbusiness", "#promptengineering", "#workflow"] },
      keywords: ["best AI tools 2026", "how to use ChatGPT", "AI for students", "free AI tools", "AI video generator", "automate work with AI", "prompt examples", "AI for small business"]
    },
    fitness: {
      ideas: [
        { t: "15-minute full body workout, no equipment", f: "Long-form", hook: "No gym, no equipment, just 15 minutes." },
        { t: "You're doing squats wrong (fix it in 10 seconds)", f: "Reel / Short", hook: "If your knees hurt, watch this." },
        { t: "My 90-day transformation: honest results", f: "Long-form", hook: "Day 1 vs Day 90. No filters, no excuses." },
        { t: "What I eat in a day for fat loss (high protein, vegetarian)", f: "Reel / Short", hook: "120g of protein without eating meat." },
        { t: "Desk-job posture fix in 5 minutes", f: "Reel / Short", hook: "Sitting all day? Do this every evening." },
        { t: "Beginner gym plan cheat-sheet", f: "Carousel", hook: "Save this for your first week at the gym." },
        { t: "I did 100 push-ups a day for 30 days", f: "Long-form", hook: "Here's what actually changed." },
        { t: "3 fitness myths that are holding you back", f: "Reel / Short", hook: "Myth #2 wastes everyone's time." }
      ],
      scripts: [
        { name: "30-second form fix", beats: [
          ["Hook (0–3s)", "Show the WRONG way with a red X: 'Stop doing {topic} like this.'"],
          ["Why (3–10s)", "Explain the risk in one sentence."],
          ["Fix (10–25s)", "Show the RIGHT way with a green tick and 2 cues on screen."],
          ["CTA (25–30s)", "'Save this for your next workout.'"]
        ]},
        { name: "Follow-along workout", beats: [
          ["Intro (0–30s)", "Workout length, equipment needed, who it's for ({topic})."],
          ["Warm-up (0:30–3:00)", "Easy moves with a timer on screen."],
          ["Main circuit (3:00–14:00)", "Exercise name + next-up preview + countdown timer."],
          ["Cool-down (14:00–16:00)", "Stretching with calm music."],
          ["Outro (16:00+)", "'Comment DONE' + link to the next video in the series."]
        ]}
      ],
      editing: ["Big countdown timer and 'next exercise' preview", "Red X / green tick split-screen for form fixes", "Beat-synced cuts for Reels", "Progress-bar overlay across the workout", "Before/after transitions using a hand or towel wipe", "Thumbnail: action pose + duration + body part"],
      titles: ["{topic} Workout | No Equipment", "Do This Every Day for {topic}", "I Tried {topic} for 30 Days", "The Only {topic} Routine You Need", "{topic}: Beginner Friendly, 15 Min", "Stop Doing {topic} Wrong"],
      captions: ["Save this for your next workout 💪 {topic} in 3 moves. Tag your gym buddy.", "Day {n} of my 90-day challenge. {topic} today. Who's joining?", "Most people get {topic} wrong. Try this fix and tell me how it feels."],
      description: "{topic} workout you can do at home with no equipment. Follow along with me!\n\n⏱ Timestamps\n00:00 Intro\n00:30 Warm-up\n03:00 Workout\n14:00 Cool-down\n\n📥 Free 7-day plan: [link]\n🏋️ Gear I use (affiliate): [links]\n\nConsult a doctor before starting a new exercise programme.\n\n#homeworkout #{tag} #fitness",
      hashtags: { broad: ["#fitness", "#workout", "#gym", "#health"], mid: ["#homeworkout", "#fatloss", "#fitnessmotivation", "#strengthtraining"], niche: ["#beginnerworkout", "#noequipmentworkout", "#deskjobfitness", "#vegetarianprotein"] },
      keywords: ["home workout for beginners", "full body workout no equipment", "fat loss workout", "how to lose belly fat", "high protein vegetarian diet", "posture correction exercises", "workout for women at home", "30 day challenge"]
    },
    food: {
      ideas: [
        { t: "15-minute dinner with 5 ingredients", f: "Reel / Short", hook: "5 ingredients, 15 minutes, zero stress." },
        { t: "Restaurant dish at home for ¼ the price", f: "Long-form", hook: "They charge ₹450 for this. I made it for ₹110." },
        { t: "Meal prep for the whole week in 1 hour", f: "Long-form", hook: "One hour on Sunday and you're sorted till Friday." },
        { t: "High-protein breakfast without eggs", f: "Reel / Short", hook: "30g protein and no eggs." },
        { t: "Air-fryer recipes you didn't know were possible", f: "Reel / Short", hook: "You've been using your air fryer wrong." },
        { t: "Spice cheat-sheet for beginners", f: "Carousel", hook: "Save this before you cook tonight." },
        { t: "Hostel / one-pot recipes", f: "Series", hook: "One pot, one kettle, one great dinner." },
        { t: "I cooked my grandma's recipe exactly as she does", f: "Long-form", hook: "No measurements, just 'andaaz'." }
      ],
      scripts: [
        { name: "30-second recipe Reel", beats: [
          ["Hook (0–2s)", "Show the final dish first, close-up, with sound."],
          ["Promise (2–5s)", "On-screen text: '{topic} in 15 minutes'."],
          ["Steps (5–25s)", "6–8 quick shots, each with the ingredient amount as text."],
          ["Money shot (25–28s)", "Cut, pull, pour or bite moment."],
          ["CTA (28–30s)", "'Full recipe in caption. Save it!'"]
        ]},
        { name: "8-minute comparison video", beats: [
          ["Hook (0–20s)", "Taste the original {topic}, show the bill."],
          ["Breakdown (0:20–1:30)", "Guess the ingredients and the real cost."],
          ["Cook (1:30–6:00)", "Make it at home with tips and price tags on screen."],
          ["Taste test (6:00–7:30)", "Side by side, honest verdict, score out of 10."],
          ["CTA (7:30–8:00)", "'Which restaurant dish should I recreate next?'"]
        ]}
      ],
      editing: ["Fixed overhead angle with soft window light", "ASMR sound (sizzle, chop) turned up", "Ingredient amounts as clean text pops", "Speed-ramp slow cooking moments", "End with the money shot and loop back to the start", "Thumbnail/cover: tight crop of the finished dish, high saturation"],
      titles: ["{topic} in 15 Minutes", "Better Than Takeaway: {topic}", "The Easiest {topic} You'll Ever Make", "{topic} for Under ₹100 / $5", "I Made Restaurant {topic} at Home", "5-Ingredient {topic}"],
      captions: ["{topic} 😍 Save this for tonight!\n\nIngredients:\n- …\n- …\n\nMethod:\n1. …\n2. …\n\nTag someone who'd love this!", "Takeaway cost: ₹450. Homemade: ₹110. Which would you pick? 👇 {topic}", "Comment 'RECIPE' and I'll DM you the full {topic} recipe card."],
      description: "Easy {topic} recipe, ready in 15 minutes.\n\n🛒 Ingredients\n- …\n\n👩‍🍳 Method\n1. …\n\n⏱ Chapters\n00:00 Final dish\n00:20 Ingredients\n01:00 Cooking\n06:00 Taste test\n\n🍳 Kitchen tools I use (affiliate): [links]\n\n#recipe #{tag} #easyrecipes",
      hashtags: { broad: ["#food", "#recipe", "#foodie", "#cooking"], mid: ["#easyrecipes", "#quickrecipes", "#homecooking", "#mealprep"], niche: ["#airfryerrecipes", "#highproteinvegetarian", "#budgetmeals", "#hostelcooking"] },
      keywords: ["easy dinner recipes", "quick recipes", "high protein vegetarian recipes", "air fryer recipes", "meal prep for the week", "restaurant style at home", "budget meals", "breakfast ideas"]
    },
    story: {
      ideas: [
        { t: "The rise and fall of a famous brand", f: "Long-form", hook: "In 2015 it was worth billions. Today it's gone." },
        { t: "What happens to your body if you don't sleep for 7 days", f: "Reel / Short", hook: "By day 3, your brain starts doing this." },
        { t: "The mystery that was never solved", f: "Long-form", hook: "Police found everything, except the answer." },
        { t: "Why this country has no rivers", f: "Reel / Short", hook: "Over 30 million people, and not one permanent river." },
        { t: "How a tiny startup beat a giant", f: "Long-form", hook: "They had 3 employees. The giant had 30,000." },
        { t: "History's luckiest person", f: "Reel / Short", hook: "He survived both atomic bombs." },
        { t: "Explained: the week's biggest story in 60 seconds", f: "Series", hook: "Everyone's talking about this. Here's what actually happened." },
        { t: "Untold stories from your city", f: "Carousel", hook: "You walk past this building every day. Here's its secret." }
      ],
      scripts: [
        { name: "45-second curiosity Short", beats: [
          ["Hook (0–2s)", "Shocking question or fact about {topic} with visuals that match."],
          ["Context (2–10s)", "Who, where, when, in one sentence."],
          ["Escalation (10–35s)", "3 beats, each more surprising than the last."],
          ["Payoff (35–42s)", "The answer or twist."],
          ["Loop (42–45s)", "Last line connects back to the first frame so the video replays."]
        ]},
        { name: "12-minute documentary", beats: [
          ["Cold open (0–45s)", "Start at the most dramatic moment of {topic}."],
          ["Act 1: Origin (0:45–4:00)", "Background, characters, stakes."],
          ["Act 2: Conflict (4:00–8:30)", "Rising tension with a cliffhanger at the midpoint."],
          ["Act 3: Outcome (8:30–11:00)", "Resolution and what changed."],
          ["Lesson + CTA (11:00–12:00)", "What it teaches us; 'next story' end screen."]
        ]}
      ],
      editing: ["Animated maps and route lines", "Ken Burns zoom on archival photos", "Tension music with silences before reveals", "Newspaper/document 'highlight' graphics", "Captions in a bold font, 2–3 words at a time", "Thumbnail: one dramatic image + 2–4 words of curiosity"],
      titles: ["The Untold Story of {topic}", "How {topic} Really Happened", "Why Nobody Talks About {topic}", "The Rise and Fall of {topic}", "{topic}: The Mystery Explained", "What Happens If {topic}?"],
      captions: ["Wait for the ending 😳 The story of {topic}. Follow for part 2.", "Most people have never heard of {topic}. Share this with someone who loves history.", "{topic}, explained in 60 seconds. What should I cover next?"],
      description: "The full story of {topic}: how it started, what went wrong, and what we can learn.\n\n⏱ Chapters\n00:00 Cold open\n00:45 Origin\n04:00 The conflict\n08:30 The outcome\n11:00 Lessons\n\n📚 Sources: [links]\n\n#documentary #{tag} #history",
      hashtags: { broad: ["#history", "#facts", "#documentary", "#storytime"], mid: ["#didyouknow", "#truestory", "#explained", "#casestudy"], niche: ["#businesscasestudy", "#unsolvedmysteries", "#geographyfacts", "#historybuff"] },
      keywords: ["untold story", "rise and fall of", "explained", "true story", "what happens if", "history facts", "business case study", "unsolved mystery"]
    }
  },

  remixLevers: [
    { id: "local", name: "Localise", desc: "Same topic, for your country, city, language or currency.", title: "{orig}, for {audience}" },
    { id: "update", name: "Update it", desc: "Redo an older hit with 2026 data, tools or prices.", title: "{orig} (2026 Update)" },
    { id: "deeper", name: "Go deeper", desc: "Turn their 60-second take into a full guide, or their list into a step-by-step.", title: "{orig}: The Complete Guide" },
    { id: "shorter", name: "Make it faster", desc: "Turn their 20-minute video into a 60-second version.", title: "{orig} in 60 Seconds" },
    { id: "test", name: "Test it yourself", desc: "Try their advice for 7–30 days and show real results.", title: "I Tried \"{orig}\" for 30 Days" },
    { id: "counter", name: "Counter-take", desc: "Respectfully disagree with evidence.", title: "Why \"{orig}\" Is Wrong for Most People" },
    { id: "audience", name: "New audience", desc: "Same idea for beginners, students, parents, seniors…", title: "{orig}, for Complete Beginners" },
    { id: "visual", name: "Better visuals", desc: "Same topic, much clearer graphics, demos or props.", title: "{orig}, Visually Explained" }
  ],

  motives: [
    { id: "grow", name: "Grow fast (reach)", cta: "Follow for part 2", focus: "Short-form, shareable hooks, series that make people follow." },
    { id: "ads", name: "Hit YPP / ad revenue", cta: "Watch the full video next", focus: "Long-form for watch hours, playlists and end screens to chain views." },
    { id: "affiliate", name: "Affiliate income", cta: "Links to the tools are in the description", focus: "Tutorials and comparisons where the product is the solution." },
    { id: "product", name: "Sell my own product", cta: "Grab the free template (link in bio)", focus: "Teach the 'what', sell the 'how': lead magnet to email to product." },
    { id: "brand", name: "Attract brand deals", cta: "Comment your questions below", focus: "Polished, on-niche content with high saves/comments to show brands." }
  ]
};
