/* ─── DATA ─── */
const projects = [
  {
    index: "01",
    title: "You As I Made",
    subtitle: "Game UX/UI · Coder",
    year: "Nov 2025",
    tags: ["Game UX", "Interaction Design", "JavaScript"],
    desc: "A narrative interactive game built in 48 hours at Gamerella, Montréal's inclusive game jam. Sole designer and developer.",
    eyebrow: "Gamerella 2025 — 48hr Game Jam",
    role: "UX/UI Designer & Developer",
    duration: "48 hours",
    tools: "JavaScript, Figma",
    cover: "static/images/gamerella.png",
    steps: [
      {
        title: "The Challenge",
        body: "At Gamerella — a game jam for underrepresented voices in gaming — our team had 48 hours to build a complete game. I was responsible for all UX/UI design and coding.",
        img: "static/images/gamerella.png" 
      },
      {
        title: "User Persona",
        persona: {
          name: "Jamie, 22",
          role: "Casual gamer, narrative game fan",
          quote: "I don't want to read a manual. I want to feel something immediately and understand how to play by just... playing."
        }
      },
      {
        title: "Interaction & Signaling",
        body: "With no time for tutorials, every UI element had to be self-explanatory. I focused on visual affordance — ensuring interactive elements looked clickable, state changes were obvious, and the player always knew what was possible.",
        img: true // placeholder for interaction design sketches or early UI mockups
      },
      {
        title: "Iteration Under Pressure",
        body: "Rapid playtests with other jam participants revealed players didn't read flavor text — they scanned for action cues. I stripped back copy and amplified visual signals across three interface passes in 12 hours.",
        img: true
      },
      {
        title: "Outcome",
        body: "The game was completed and presented at Gamerella. The process taught me more about signaling, affordance, and friction than any classroom exercise.",
        img: true
      }
    ]
  },
  {
    index: "02",
    title: "Workout App",
    subtitle: "UX/UI Design",
    year: "Sep – Dec 2023",
    tags: ["Figma", "Prototyping", "User Research"],
    desc: "A fitness app from research to high-fidelity prototype — with full branding, user flows, and usability testing.",
    eyebrow: "Academic Project — Concordia University",
    role: "UX/UI Designer",
    duration: "3 months",
    tools: "Figma, Adobe Illustrator",
    cover: "static/images/gymgo.png",
    steps: [
      {
        title: "Research & Discovery",
        body: "User interviews and competitive analysis of existing fitness apps. Key pain points: overwhelming onboarding, no progress feedback, poor customization flows.",
        img: "static/images/project.png"
      },
      {
        title: "User Persona",
        persona: {
          name: "Sofia, 25",
          role: "Beginner gym-goer, busy student",
          quote: "I want to start working out but every app feels like it's made for someone who already knows what they're doing."
        }
      },
      {
        title: "Information Architecture",
        body: "Mapped the full user journey and identified three critical drop-off points. Restructured the flow to reduce onboarding from 7 steps to 3 using progressive disclosure.",
        img: true
      },
      {
        title: "Wireframes → Prototype",
        body: "Low-fidelity wireframes to test structure, then high-fidelity Figma prototype with interactive transitions and a full component library.",
        img: true
      },
      {
        title: "Branding",
        body: "Full visual identity: wordmark, warm-but-energetic color palette (deep navy + coral), and a type system pairing geometric and humanist fonts.",
        img: true
      },
      {
        title: "Usability Testing",
        body: "Moderated tests with 5 participants. Iterated on navigation and CTA placement. Final SUS score: 82/100."
      }
    ]
  },
  {
    index: "03",
    title: "Dominican Cultural Showcase",
    subtitle: "Web Design & Development",
    year: "Sep 2022",
    tags: ["HTML/CSS", "JavaScript", "Interaction Design"],
    desc: "An immersive multimedia website celebrating the culture, music, and heritage of the Dominican Republic.",
    eyebrow: "Personal Project",
    role: "Designer & Developer",
    duration: "1 month",
    tools: "HTML, CSS, JavaScript",
    cover: "static/images/dr.png",
    steps: [
      {
        title: "Concept & Goal",
        body: "Represent Dominican culture online in a way that felt alive — not a Wikipedia article, but an experience. The goal: make someone who's never heard merengue feel its rhythm.",
        img: true
      },
      {
        title: "User Persona",
        persona: {
          name: "Lena, 28",
          role: "Curious traveler, culture enthusiast",
          quote: "I love discovering new cultures online but most sites feel dry. I want to feel like I'm actually there."
        }
      },
      {
        title: "Content Architecture",
        body: "Thematic sections — Music, Food, Landmarks, Traditions — each with its own visual mood, using color and typography to shift atmosphere like moving through different rooms.",
        img: true
      },
      {
        title: "Interaction Design",
        body: "Interactive audio samples, image galleries with custom transitions, and scroll-triggered animations. Every interaction designed to feel like discovery, not navigation.",
        img: true
      },
      {
        title: "Outcome",
        body: "A personal reference for emotional design — the idea that a website can have a feeling, not just a function."
      }
    ]
  },
  {
    index: "04",
    title: "Learning Experience Platform",
    subtitle: "Product Design & Development",
    year: "2019 – 2021",
    tags: ["Product Design", "Gamification", "Javascript"],
    desc: "An interactive educational platform for Dominican public schools — gamification drove a 35% increase in student engagement.",
    eyebrow: "Client Project — Santo Domingo, DR",
    role: "Lead Designer & Developer",
    duration: "18 months",
    tools: "Javascript, HTML/CSS, Figma",
    emoji: "📚",
    cover: "static/images/pocketschool.png",
    steps: [
      {
        title: "Problem Space",
        body: "Public schools in the DR lacked engaging digital tools. Design a platform aligned with the national curriculum that would hold students' attention — even for those with limited digital literacy.",
        img: true
      },
      {
        title: "User Persona",
        persona: {
          name: "Carlos, 13",
          role: "Public school student, low prior tech exposure",
          quote: "School stuff on a computer always feels the same as a textbook. I'd rather be playing."
        }
      },
      {
        title: "Gamification Strategy",
        body: "XP points, streak systems, badges, and personal progress charts — woven into the content flow, not bolted on top. Behavioral design principles drove every mechanic.",
        img: true
      },
      {
        title: "Iterative Testing",
        body: "In-school trials revealed leaderboards caused anxiety for lower performers. Replaced public rankings with personal progress charts — same motivation, no shame.",
        img: true
      },
      {
        title: "Outcome",
        body: "Deployed to pilot schools. Engagement up 35%. Taught me the full product lifecycle — research through real-world deployment."
      }
    ]
  },
  {
    index: "05",
    title: "Mushroom World",
    subtitle: "3D Modeling & World Design",
    year: "2023",
    tags: ["3D Modeling", "World Design", "Character Design"],
    desc: "A whimsical 3D environment and character — a mushroom world built to explore organic form, light, and spatial storytelling.",
    eyebrow: "Academic / Personal Project",
    role: "3D Artist & World Designer",
    duration: "Ongoing",
    tools: "Blender, Illustrator",
    cover: "static/images/mushroomy.png",
    steps: [
      {
        title: "Concept",
        body: "How do you build something that feels alive and tactile? The mushroom world became a space to experiment with form, color, light, and environmental storytelling.",
        img: true
      },
      {
        title: "Character Design",
        body: "Multiple sketched iterations exploring silhouette, personality, and how the character would relate to its environment — landing on curious and gentle, with exaggerated proportions.",
        img: true
      },
      {
        title: "Environment Building",
        body: "Built in layers: terrain, flora, lighting atmosphere, and character. Scale, texture, and palette chosen to create a coherent, immersive world.",
        img: true
      },
      {
        title: "Learnings",
        body: "Deepened my understanding of spatial hierarchy and depth — principles that directly inform how I think about visual focus in 2D UX work."
      }
    ]
  },
  {
    index: "06",
    title: "Studio Booking Platform",
    subtitle: "UX/UI Design",
    year: "2024",
    tags: ["UX Design", "Figma", "Service Design"],
    desc: "A booking platform for creative studios — streamlining scheduling, availability, and client communication.",
    eyebrow: "Design Project",
    role: "UX/UI Designer",
    duration: "—",
    tools: "Figma, Miro",
    cover: "static/images/booking.png",
    steps: [
      {
        title: "Problem Definition",
        body: "Creative studios rely on DMs and spreadsheets to manage bookings. Design a unified platform that reduces admin overhead and gives clients a smooth, professional experience.",
        img: true
      },
      {
        title: "User Persona — Owner",
        persona: {
          name: "Marcus, 34",
          role: "Independent photo studio owner",
          quote: "I spend more time managing bookings than actually shooting. I need something that just works."
        }
      },
      {
        title: "User Persona — Client",
        persona: {
          name: "Aisha, 27",
          role: "Freelance creative, regular renter",
          quote: "I want to see availability, book, and get a confirmation — without back-and-forth messages."
        }
      },
      {
        title: "Flow Design",
        body: "Mapped two parallel journeys — owner and client. Key decision: surface real-time availability upfront to eliminate the most common friction point.",
        img: true
      },
      {
        title: "Design System",
        body: "Minimal calendar UI, clear status indicators, and a per-booking message thread. Designed for desktop (management) and mobile (client booking).",
        img: true
      }
    ]
  },
  {
    index: "07",
    title: "Marketing Box",
    subtitle: "Product & Brand Design",
    year: "2024",
    tags: ["Brand Design", "Packaging", "Marketing"],
    desc: "A branded product box designed as a marketing artifact — balancing brand storytelling, visual impact, and unboxing experience.",
    eyebrow: "Design Project",
    role: "Brand & Product Designer",
    duration: "—",
    tools: "Adobe Illustrator, Photoshop",
    cover: "static/images/mysteryBox2.png",
    steps: [
      {
        title: "Brief",
        body: "Design a box recipients would photograph, share, and remember. The box itself needed to tell a brand story before it was even opened.",
        img: "static/images/mysteryBox2.png",
      },
      {
        title: "Unboxing as UX",
        body: "Treated unboxing as a user journey: exterior (first impression), opening (reveal), contents (hierarchy), insert card (final touch). Each moment intentional.",
        img: true
      },
      {
        title: "Visual Identity",
        body: "Bold typographic exterior, soft textured interior — the contrast between outside confidence and inside warmth mirrors the brand personality.",
        img: true
      },
      {
        title: "Outcome",
        body: "Packaging design is fundamentally UX — guiding someone through an experience, creating anticipation, delight, and a feeling they want to share."
      }
    ]
  }
];

/* ══════════════════════════════════════
   CAROUSEL
══════════════════════════════════════ */
const track = document.getElementById('carouselTrack');
const dotsEl = document.getElementById('carouselDots');
let current = 0, autoTimer;

projects.forEach((p, i) => {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';

  const visual = document.createElement('div');
  visual.className = 'slide-visual';

  if (p.cover) {
    visual.innerHTML = `<img src="${p.cover}" alt="${p.title}"/>`;
  } else {
    visual.innerHTML = `
      ${p.emoji}
      <div class="slide-placeholder">
        <span class="slide-placeholder-label">set cover: in main.js</span>
      </div>`;
  }

  const caption = document.createElement('div');
  caption.className = 'slide-caption';
  caption.innerHTML = `
    <div class="slide-caption-label">${p.subtitle} · ${p.year}</div>
    <div class="slide-caption-title">${p.title}</div>`;
  caption.addEventListener('click', () => openModal(i));

  slide.appendChild(visual);
  slide.appendChild(caption);
  track.appendChild(slide);

  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(dot);
});

function goTo(n) {
  current = ((n % projects.length) + projects.length) % projects.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
}

document.getElementById('prevBtn').addEventListener('click', () => { goTo(current - 1); resetAuto(); });
document.getElementById('nextBtn').addEventListener('click', () => { goTo(current + 1); resetAuto(); });

function resetAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goTo(current + 1), 4500);
}
resetAuto();

/* ══════════════════════════════════════
   PROJECT CARDS
══════════════════════════════════════ */
const grid = document.getElementById('projectGrid');

projects.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const thumbInner = p.cover
    ? `<img src="${p.cover}" alt="${p.title}"/>`
    : p.emoji;

  card.innerHTML = `
    <div class="card-thumb">${thumbInner}</div>
    <div class="card-index">${p.index}</div>
    <div class="card-title">${p.title}</div>
    <div class="card-subtitle">${p.subtitle}</div>
    <div class="card-desc">${p.desc}</div>
    <div class="card-footer">
      <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <span class="card-arrow">↗</span>
    </div>`;

  card.addEventListener('click', () => openModal(i));
  grid.appendChild(card);
});

/* ══════════════════════════════════════
   MODAL
══════════════════════════════════════ */
const overlay = document.getElementById('modalOverlay');
const modalCover = document.getElementById('modalCover');
const modalInner = document.getElementById('modalInner');

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function openModal(idx) {
  const p = projects[idx];

  // Cover image
  modalCover.innerHTML = p.cover
    ? `<img src="${p.cover}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"/>`
    : `<span style="font-size:3.5rem">${p.emoji}</span>
       <div class="cover-placeholder">
         <span class="cover-placeholder-label">set cover: in main.js</span>
       </div>`;

  // Build steps HTML
  const stepsHTML = p.steps.map((s, si) => {
    if (s.persona) {
      return `
        <div class="step" style="transition-delay:${si * 0.07}s">
          <div class="step-num">0${si + 1}</div>
          <div class="step-content">
            <div class="step-title">${s.title}</div>
            <div class="persona-card">
              <div class="persona-avatar">${s.persona.name[0]}</div>
              <div>
                <div class="persona-name">${s.persona.name}</div>
                <div class="persona-role">${s.persona.role}</div>
                <div class="persona-quote">"${s.persona.quote}"</div>
              </div>
            </div>
          </div>
        </div>`;
    }

    // img: true = placeholder, img: "path" = real image
    const imgBlock = s.img
      ? (typeof s.img === 'string'
          ? `<div class="img-slot"><img src="${s.img}" alt="${s.title}"/></div>`
          : `<div class="img-slot"><span class="slot-label">set s.img to a path in main.js</span></div>`)
      : '';

    return `
      <div class="step" style="transition-delay:${si * 0.07}s">
        <div class="step-num">0${si + 1}</div>
        <div class="step-content">
          <div class="step-title">${s.title}</div>
          <div class="step-body">${s.body}</div>
          ${imgBlock}
        </div>
      </div>`;
  }).join('');

  modalInner.innerHTML = `
    <div class="modal-eyebrow">${p.eyebrow}</div>
    <h2 class="modal-title">${p.title}</h2>
    <div class="modal-meta">
      <div class="modal-meta-item"><strong>Role</strong>${p.role}</div>
      <div class="modal-meta-item"><strong>Duration</strong>${p.duration}</div>
      <div class="modal-meta-item"><strong>Tools</strong>${p.tools}</div>
      <div class="modal-meta-item"><strong>Year</strong>${p.year}</div>
    </div>
    <div class="process-steps">${stepsHTML}</div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => requestAnimationFrame(() => {
    modalInner.querySelectorAll('.step').forEach(s => s.classList.add('visible'));
  }));
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
