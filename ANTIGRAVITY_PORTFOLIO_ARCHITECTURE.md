# PORTFOLIO ARCHITECTURE — ANTIGRAVITY

## IMPLEMENTATION PRIORITY

Build the portfolio from this architecture before adding extra sections or visual elements.

DO NOT invent content.

DO NOT add sections that are not specified here.

DO NOT add:
- Journey
- Timeline
- Statistics/counters
- Skill percentages
- Fake GitHub data
- Fake achievements
- Fake experience
- Filler content
- Generic template sections

Prioritize:
1. Visual quality
2. Smooth animations
3. Responsive design
4. Clean component architecture
5. Performance
6. Accessibility

The final result should feel like a premium personal developer portfolio, not a template or generic resume website.

---

## DEVELOPMENT RULES

Before implementing a component:

1. Check this architecture.
2. Reuse existing components and animation variants.
3. Keep content in the data layer.
4. Avoid duplicated styles or logic.
5. Test desktop and mobile behavior.
6. Do not introduce dependencies unless necessary.
7. Prefer simple, maintainable solutions.
8. Never fabricate personal information, achievements, metrics, companies, internships, or project results.

Architecture is the source of truth for:
- Page structure
- Component responsibilities
- Visual hierarchy
- Content behavior
- Animation behavior

Implementation files control:
- Exact spacing
- Breakpoints
- Shadows
- Typography sizing
- Minor visual details
- Technical implementation

---

# DESIGN DIRECTION

Style:
- Minimal
- Cinematic
- Premium
- Personal
- Technical
- Interactive
- Modern

Core principle:

> LESS TEXT. MORE VISUAL STORYTELLING.

Use:
- Strong typography
- Personal photography
- Project visuals
- Large whitespace
- Subtle motion
- Clean grids
- Editorial composition

Avoid:
- Excessive neon
- Heavy gradients
- Excessive glassmorphism
- Particle backgrounds
- Random 3D objects
- Floating decorative cards
- Excessive text
- Generic dashboard styling
- Over-animation

The site should feel like a personal digital experience created by a developer.

---

# PAGE STRUCTURE

Main flow:

1. Cinematic Intro
2. Navigation
3. Hero
4. About
5. Skills
6. Projects
7. Achievements
8. GitHub
9. Contact
10. Footer

DO NOT create a Journey section.

---

# 1. CINEMATIC INTRO

Initial screen:
- Nearly black background
- Centered word: "Portfolio"
- Great Vibes / handwritten typography
- Handwritten/reveal animation
- Very subtle glow
- Short pause
- Scale/fade into main portfolio

Duration:
- Approximately 2–3 seconds

After intro:
- Transition smoothly into Hero

Do not make the intro unnecessarily complex.

---

# 2. NAVIGATION

Links:
- Home
- About
- Skills
- Projects
- Achievements
- Contact

Secondary actions:
- GitHub
- Resume

Behavior:
- Sticky navigation
- Initially minimal
- On scroll: subtle background/blur/border
- Smooth anchor scrolling
- Mobile navigation must be touch-friendly

---

# 3. HERO

Content:

PREM SAI

CSM Student & Developer

"Building with code, AI and curiosity."

Primary actions:
- View Work
- Contact

Visual:
- Use the user's first uploaded personal photograph as the primary Hero visual.
- Do NOT use a circular avatar.
- Present the image editorially.
- Natural colors.
- Clean crop.
- Rounded corners.
- Soft shadow.
- Very subtle dark gradient only if needed for readability.
- No heavy filters or distortion.

Image reveal:
- opacity: 0 → 1
- blur: small → 0
- scale: 1.04 → 1
- subtle scroll parallax

The Hero must establish identity immediately.

---

# 4. ABOUT

Keep this short.

Suggested content:

B.Tech CSM student at MLR Institute of Technology,
interested in building practical software using AI,
web technologies and connected systems.

Use:
- Short paragraph
- Small visual/photo/detail
- Generous whitespace

Do not create a long biography.

---

# 5. SKILLS

Group skills instead of using progress bars.

Languages:
- C
- Python
- Java
- JavaScript

Web:
- HTML
- CSS
- React

Backend:
- Node.js
- Spring Boot

Database:
- MySQL
- MongoDB

Tools:
- Git
- GitHub
- AWS

Interaction:
- Subtle hover
- Small scale
- Soft glow
- Spring-based motion

DO NOT show:
- 80%
- 90%
- progress bars
- fake proficiency scores

---

# 6. PROJECTS

Projects are the main visual focus after the Hero.

## FEATURED PROJECT

ORBIT

AI Interview & Proctoring Platform

Focus:
- AI
- Web
- Interview automation
- Proctoring

ORBIT receives the largest project treatment.

Use:
- Large product visual
- Strong title typography
- Short description
- Technology tags
- Project link

Hover:
- image scale approximately 1.02
- slight lift
- subtle glow
- border highlight
- arrow movement

If practical, use a shared-element/expansion transition when opening the project instead of a generic modal.

## SECONDARY PROJECTS

FAQ Chatbot

Short description:
AI-powered FAQ/chatbot project.

Smart Wi-Fi / Obstacle Avoiding Car

Short description:
Connected/embedded project demonstrating practical automation.

Use a clean staggered or bento layout.

Each card:
- Project image
- Title
- 1–2 line description
- Technology tags
- Link

Do not write large paragraphs.

---

# 7. ACHIEVEMENTS

Only show real achievements.

Use:
- Compact cards
- Small badges
- Short titles
- Minimal supporting text

If verified achievement information is unavailable:
- Keep the section minimal
- Use editable placeholders in the data file
- Do NOT invent achievements

No fake certificates, rankings, awards, competition results, or metrics.

---

# 8. GITHUB

Supporting section, not the main attraction.

Preferred:
- Real GitHub API data if implemented safely.

Otherwise:
"Building in public."

Add:
GitHub →

Never generate fake:
- repository counts
- contribution numbers
- stars
- commits
- followers

---

# 9. CONTACT

Large typography:

LET'S BUILD
SOMETHING.

Supporting text:

Have an idea or opportunity?

Primary action:
Get in touch

Motion:
- Slow typography reveal
- Subtle magnetic button interaction
- Respect reduced-motion settings

Keep the section visually strong and simple.

---

# 10. FOOTER

Content:

Prem Sai

© 2026

GitHub · LinkedIn · Email

Minimal layout.

---

# MOTION SYSTEM

Create a centralized animation system.

## Micro

150–250ms

Use for:
- hover
- buttons
- small UI feedback

## Standard

300–500ms

Use for:
- cards
- navigation
- section transitions

## Reveal

500–800ms

Use for:
- sections
- large text
- project visuals

## Cinematic

2–3 seconds

Use only for:
- Portfolio intro

Preferred motion:
- opacity
- translateY
- scale
- blur
- spring
- subtle parallax

Avoid:
- excessive rotation
- bouncing
- extreme parallax
- constant movement
- animation on every tiny element

Animation must serve:
- hierarchy
- feedback
- navigation
- storytelling

---

# SCROLL REVEALS

Preferred pattern:

opacity:
0 → 1

translateY:
30px → 0

blur:
6px → 0

Use staggered children where appropriate.

Do not animate every element independently.

---

# RESPONSIVE DESIGN

Support:

Desktop:
- 1440px+
- 1024px

Tablet:
- 768px

Mobile:
- 390px

Desktop:
- Cinematic composition
- Large typography
- Large project visuals
- Hover interactions
- Optional cursor effects

Mobile:
- Single column
- Touch-friendly buttons
- Full-width visuals
- Reduced motion
- No cursor-dependent effects

---

# ACCESSIBILITY

Implement:
- Semantic HTML
- Keyboard navigation
- Visible focus states
- Alt text
- Sufficient contrast
- Accessible buttons/links
- `prefers-reduced-motion`

Reduced-motion mode should:
- Remove parallax
- Reduce transitions
- Disable decorative motion
- Preserve content hierarchy

---

# PERFORMANCE

Prefer:
- CSS transforms
- opacity animations
- Lazy-loaded project images
- Optimized image assets
- Minimal dependencies
- Efficient React rendering

Avoid:
- Expensive continuous effects
- Unnecessary re-renders
- Large background animations
- Heavy libraries for simple effects

Pause or reduce expensive effects when elements are offscreen.

---

# DATA ARCHITECTURE

Keep all personal/project content in:

`src/data/portfolio.js`

Do not duplicate personal information across components.

Example structure:

```js
export const portfolio = {
  name: "Prem Sai",
  role: "CSM Student & Developer",

  hero: {
    tagline: "Building with code, AI and curiosity."
  },

  skills: {
    languages: [],
    web: [],
    backend: [],
    database: [],
    tools: []
  },

  projects: [],

  achievements: [],

  links: {
    github: "",
    linkedin: "",
    email: "",
    resume: ""
  }
};
```

---

# PROJECT STRUCTURE

Recommended:

```text
src/
├── components/
│   ├── intro/
│   ├── navigation/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── achievements/
│   ├── github/
│   ├── contact/
│   └── footer/
│
├── animations/
│   └── variants.js
│
├── data/
│   └── portfolio.js
│
├── hooks/
│   ├── useMousePosition.js
│   ├── useScrollProgress.js
│   └── useReducedMotion.js
│
├── assets/
│   ├── profile/
│   ├── projects/
│   └── resume/
│
├── App.jsx
├── main.jsx
└── index.css
```

Adapt the structure to the existing project if equivalent components already exist. Do not duplicate functionality.

---

# VISUAL HIERARCHY

Priority:

1. Identity
2. Personal Hero photograph
3. ORBIT project
4. Other projects
5. Typography
6. Skills
7. Achievements
8. GitHub
9. Contact

---

# CONTENT SAFETY / DATA INTEGRITY

Never invent:
- Achievements
- Certifications
- Internships
- Jobs
- Companies
- Awards
- User counts
- Project metrics
- GitHub statistics
- Testimonials
- Client information
- Experience

If information is missing, use an editable placeholder or omit the element.

---

# EXPLICITLY DO NOT REUSE

Do not carry forward old portfolio patterns such as:
- Journey/timeline sections
- Metric counters
- Fake statistics
- Fake 3D cubes
- Particle fields
- Floating decorative cards
- Fake terminal/code blocks
- Excessive neon effects
- Generic template sections

---

# FINAL QUALITY CHECK

Before considering the portfolio complete, verify:

[ ] Intro feels cinematic but short
[ ] Hero establishes identity immediately
[ ] Uploaded personal image is used properly
[ ] Navigation is minimal
[ ] About is concise
[ ] Skills contain no percentages
[ ] ORBIT is visually dominant among projects
[ ] Other projects are concise
[ ] Achievements contain only real data
[ ] GitHub data is real or omitted
[ ] Contact section is visually strong
[ ] No Journey/Timeline section exists
[ ] Mobile layout works
[ ] Reduced-motion mode works
[ ] Keyboard navigation works
[ ] Images have alt text
[ ] Animations are smooth
[ ] No fake information exists
[ ] No unnecessary dependencies were added
[ ] The final result feels like a personal digital experience, not a resume template
