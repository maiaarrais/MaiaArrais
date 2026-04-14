
const projects = [
  {
    index: "01",
    title: "You As I Made",
    subtitle: "Game UX/UI · Coder",
    year: "Nov 2025",
    tags: ["Game UX", "Interaction Design", "JavaScript"],
    desc: "A narrative interactive game built in 48 hours at Gamerella, Montréal's inclusive game jam. Designer and developer.",
    eyebrow: "Gamerella 2025 — 48hr Game Jam",
    role: "UX/UI Designer & Developer",
    duration: "48 hours",
    tools: "JavaScript, Figma",
    cover: "static/images/gamerella.png",
    coverFit: "cover", 
    link: "https://sdr2.itch.io/you-as-i-made", 

    steps: [
      {
        title: "The Challenge",
        body: "Gamerella is a 48-hour game jam in Montréal focused on amplifying underrepresented voices in gaming. Over one weekend, our team had to design and build a complete game from scratch. My role was to design the entire UX/UI and implement the interface in code. With such a short timeframe, every decision had to balance creativity with speed. We didn't have the luxury of long planning phases so the design process had to happen in real time as the game was being built.",
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
        title: "Designing for Intuitive Play",
        body: "Rather than relying on tutorials, I focused on visual signaling so players could learn through interaction. Buttons needed to look clickable and the player always needed to understand what actions were possible. The goal was to reduce friction and let the design guide the player naturally.",
        img: "static/images/Gamerella1.png"
      },
      {
        title: "Iteration Under Pressure",
        body: "Quick playtests with other participants showed that players rarely read narrative text, they scanned the screen for action cues. Based on this, I simplified the copy and strengthened the visual hierarchy. Over about twelve hours, the interface went through several fast iterations to make interactions clearer.",
        img: "static/images/Gamerella2.png"
      },
      {
        title: "Outcome",
        body: "By the end of the jam we had a fully playable game presented at Gamerella. The experience reinforced how important observation and iteration are in UX. Seeing how players actually behave often reveals more than initial design assumptions.",
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
    duration: "~ 3 months",
    tools: "Figma, Adobe Illustrator",
    cover: "static/images/gymgo.png",
    coverFit:"fill",
    link: "https://www.figma.com/proto/w4Xizrbu6zPOFF7baRcEgL/Gymgo-app-final-project-CART-310?node-id=1-126&t=fMzDiMjtUiS7o3aw-1",
    steps: [
      {
        title: "Research & Discovery",
        body: "This project was a UX/UI wireframe for a workout app designed around what users actually said they wanted. I created a Google Form to understand people's habits, frustrations, and preferences when using fitness apps, then used those responses to guide the features and overall flow of the app. I also looked at other workout apps to compare what worked well, what felt unnecessary, and which features I would want to bring into my own design. From there, I built the wireframes in Figma to explore how the app could feel more clear, approachable, and motivating for users.",
        img: "static/images/GYMGO2.png"
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
        title: "Focus",
        body: "A big part of the project was thinking about how the app would work from the user's point of view: what screens they would need, how they would move through the app, and what information should feel most visible and useful. I focused on creating a structure that felt simple and easy to follow, especially for someone trying to stay consistent with workouts.",
        img: "static/images/GYMGO1.png"
      },
      {
        title: "Outcome",
        body: "The final result was a UI/UX wireframe that brought together user input, app inspiration, and my own design decisions into one concept. It helped me practice translating research and references into a more intentional user experience.",
        img: "static/images/project.png"
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
    duration: "2 months",
    tools: "HTML, CSS, JavaScript",
    cover: "static/images/dr.png",
    coverFit: "fill",
    link: "https://hybrid.concordia.ca/m_arrais/final-project-211/homepage.html",
    steps: [
      {
        title: "Concept & Goal",
        body: "This project was an interactive website designed to capture the essence of the Dominican Republic, my home country. Rather than presenting information in a traditional way, the goal was to create a small digital experience that lets visitors explore the culture through choices and visuals. The homepage introduces the country through a collage of images that highlight landscapes, daily life, and cultural moments.",
        img: "static/images/RD1.png"
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
        title: "Experience Design",
        body: "After entering the site, users begin an interactive journey. They first choose a character inspired by well-known Dominican historical or cultural figures. From there, they select a location to explore: the beach, the mountains, or the city. Each environment presents different aspects of Dominican culture including: food, imagery of the landscape, and music associated with that setting. This allows users to move through the site as a small narrative experience rather than a static webpage.",
        img: "static/images/RD2.png"
      },
      {
        title: "Outcome",
        body: "The final result was a website that combines storytelling, culture, and interaction. The project helped me explore how web design can create a sense of place and identity, using visuals, navigation, and small choices to guide the user through a cultural experience.",
        img: "static/images/RD3.png"
      }
    ]
  },
  {
    index: "04",
    title: "Learning Experience Platform",
    subtitle: "Product Design & Development",
    year: "2018 – work in progress",
    tags: ["Product Design", "Gamification", "Javascript"],
    desc: "An interactive educational platform for Dominican public schools — gamification drove a 35% increase in student engagement.",
    eyebrow: "Client Project — Santo Domingo, DR",
    role: "Lead Designer & Developer",
    duration: "18 months",
    tools: "Javascript, HTML/CSS, Figma",
    emoji: "📚",
    cover: "static/images/pocketschool.png",
    coverFit: "fill",
    link: "https://maiaarrais.github.io/New_pocketshcool/", 
    steps: [
      {
        title: "Problem Space",
        body: "Public schools in the DR lacked engaging digital tools. PocketSchool began as an exploration of how digital tools could support early math education. The idea was inspired by looking at the Dominican Republic's first-grade math curriculum and imagining how those lessons could be translated into a simple, gamified learning experience for children. The goal was to design something that could act both as a classroom aid for teachers and a practice companion for students, making math feel more playful and less intimidating.",
      //img
      },
      {
        title: "User Persona",
        persona: {
          name: "Carlos, 9",
          role: "Public school student, low prior tech exposure",
          quote: "School stuff on a computer always feels the same as a textbook. I'd rather be playing."
        }
      },
      {
        title: "Process & Iterations",
        body: "The project went through several iterations. It first started as a Scratch prototype, where the focus was experimenting with how math questions could become small interactive challenges. From there, the project evolved into a coded web version, where I redesigned the interface and began building the interactions directly using HTML, CSS, and JavaScript. A later iteration refined the layout and navigation to make the experience clearer and easier for young users to follow.",
        //img
      },
      {
        title: "Outcome",
        body: "PocketSchool became my first coding project, and it marked the moment I began connecting design ideas with real implementation. Through its different iterations, the project helped me understand how educational concepts, interaction design, and simple game mechanics can come together to support learning."
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
    duration: "2 months",
    tools: "Blender, Illustrator",
    cover: "static/images/mushroomy.png",
    coverFit: "cover",
    link: "https://www.youtube.com/watch?v=6u5idQ_AkDg", 
    steps: [
      {
        title: "Concept",
        body: "How do you build something that feels alive and tactile? Mushroomy Character World is a concept project exploring how a single character could exist across three distinct environments. Each world reimagines the same mushroom-inspired character in a different atmosphere, showing how changes in environment, color, and lighting can shape the tone of a story..",
        // img: true
      },
      {
        title: "Character Design",
        body: "I designed and modeled the mushroom character first, using soft, rounded forms and playful proportions. From there, I developed three separate environments around the character, each with its own visual identity.",
        // img: true
      },
      {
        title: "Environment Building",
        body: "Built in layers: terrain, flora, lighting atmosphere, and character. Scale, texture, and palette chosen to create a coherent, immersive world.",
        // img: true
      },
      {
        title: "Outcome",
        body: "The final project presents three variations of the character's world, showing how environment design can shift the feeling of a space while maintaining a cohesive visual language. It was an exploration of concept design, character presence, and environmental storytelling in 3D."
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
    duration: "1 month",
    tools: "Figma, Html/CSS, JavaScript",
    cover: "static/images/booking.png",
    coverFit: "cover",
    link: "https://github.com/maiaarrais/CART351/tree/main/Projects/project%202", 
    steps: [
      {
        title: "Problem Definition",
        body: "This project explored the design of a simple booking platform for Pilates classes, focused on making scheduling sessions quick and intuitive for both clients and instructors while being visually engaging.",
        img: "static/images/booking1.png"
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
          quote: "I want to see availability, book, and get a confirmation without back-and-forth messages."
        }
      },
      {
        title: "Process",
        body: "The project started with mapping the core user flow: discovering a class, checking availability, and completing a booking. I designed the interface structure in Figma before translating it into a working webpage. Special attention was given to the clarity of the schedule layout and booking interactions, ensuring that users could understand availability at a glance and move through the booking process smoothly.",
        img: "static/images/booking2.png"
      },
      {
        title: "Outcome",
        body: "The result was a functional web prototype that demonstrates how a small service-based business could manage class reservations through a clear and visually calm interface. The project helped explore how UX design and simple web development can streamline everyday service interactions.",
        img: "static/images/booking3.png"
      }
    ]
  },
  {
    index: "07",
    title: "Marketing Box",
    subtitle: "Product & Brand Design",
    year: "2024",
    tags: ["Brand Design", "Packaging", "Marketing"],
    desc: "This is a food rescue initiative designed for Concordia students. The idea was to create a weekly mystery box of rescued groceries and baked goods, offered at a reduced price to make fresh food more accessible while preventing waste.",
    eyebrow: "Design Project",
    role: "Brand & Product Designer",
    duration: "1 month",
    tools: "Adobe Illustrator, html/CSS, JavaScript",
    cover: "static/images/mysteryBox2.png",
    coverFit: "cover",
    link: "https://maiaarrais.github.io/MysteryBox-MARK305/", 
    steps: [
      {
        title: "Brief",
        body: "Rather than presenting the service as a traditional grocery alternative, the concept uses the \"mystery box\" model to introduce curiosity and anticipation, transforming the act of buying discounted food into a more engaging experience.",
        img: "static/images/mysteryBox2.png",
      },
      {
        title: "User Experience",
        body: "The platform was designed to make the process as simple as possible for students. The experience focuses on three steps: discovering the box, reserving it quickly online, and picking it up at a local location such as People's Potato. The interface communicates the value of the box, the environmental impact, and the ease of the process within seconds, allowing users to understand the service without navigating complex pages or forms.",
        // img: true
      },
      {
        title: "Marketing Initiative",
        body: "The project also explores how UX design can support marketing goals. The mystery box concept itself becomes part of the strategy: by framing rescued food as a surprise experience, the service shifts the perception from \"leftover food\" to something exciting and shareable. Clear impact metrics such as food waste prevented and money saved by students, reinforce the value of participating, while encouraging a sense of collective contribution to sustainability.",
        // img: true
      },
      {
        title: "Outcome",
        body: "The final concept demonstrates how digital design, user experience, and marketing strategy can work together to support a sustainable service model. By combining affordability, simplicity, and a sense of discovery, the project positions food rescue as both a practical and engaging experience for students."
      } 
    ]
  }, 
  {
    index: "08",
    title: "3D LED Box",
    subtitle: "Online Version of Physical Design",
    year: "2026",
    tags: ["LED Multiplexing", "3D", "Physical Computing"],
    desc: "A 3D LED Box that shows the topological turning points of the brain through a light display of a 4x4x4 LED matrix. This is the online version of a physical design project.",
    eyebrow: "Design Project",
    role: "Programmer & Designer",
    duration: "3 weeks",
    tools: "Raspberry Pi, TinkerCad, Threejs",
    cover: "static/images/3dLed.png",
    coverFit: "cover",
    link: "https://maiaarrais.github.io/3D_LED_Box/", 
    steps: [
      {
        title: "Concept",
        body: "This project is the online version of a physical art–science installation built around a 4×4×4 LED matrix. The goal of the piece is to visualize the topological turning points of the brain across different stages of life through evolving light patterns. Because the physical LED cube required complex wiring and multiplexing, I created a 3D web version that simulates the light behaviors digitally. This allowed us to test patterns, communicate the concept of the installation, and visualize how the cube would behave once built.",
        // img: "static/images/LED1.png",
      },
      {
        title: "Process",
        body: "The online model recreates the LED cube as a 3D structure, where each point represents one LED within the matrix. Using Three.js, I programmed light patterns that correspond to different epochs of brain development, translating scientific ideas about neural change into visual sequences of illumination.",
        // img: true
      },
      {
        title: "Outcome",
        body: "The result is a 3D interactive visualization that mirrors the physical LED box and helps communicate the project's intended behavior. It bridges physical computing and digital simulation, allowing the concept to be experienced online while supporting the development of the real installation."
      }
    ]
  }
];

/* PANEL TOGGLE --------------------------*/
const homeSection = document.getElementById('home');
const heroToggle  = document.getElementById('heroToggle');

heroToggle.addEventListener('click', () => {
  homeSection.classList.toggle('panel-open');
});

/* CAROUSEL --------------------------*/
const track = document.getElementById('carouselTrack');
const dotsEl = document.getElementById('carouselDots');
let current = 0, autoTimer;

projects.forEach((p, i) => {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';

  const visual = document.createElement('div');
  visual.className = 'slide-visual';

  if (p.cover) {
    const fit = p.coverFit || 'cover';
    // "cover-top" / "cover-bottom" are shorthand for cover + object-position
    const objFit = fit.startsWith('cover') ? 'cover' : fit;
    const objPos = fit === 'cover-top' ? 'top' : fit === 'cover-bottom' ? 'bottom' : 'center';
    visual.innerHTML = `<img src="${p.cover}" alt="${p.title}" style="object-fit:${objFit};object-position:${objPos};"/>`;
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

/* PROJECT CARDS --------------------------*/
const grid = document.getElementById('projectGrid');

projects.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const fit = p.coverFit || 'cover';
  const objFit = fit.startsWith('cover') ? 'cover' : fit;
  const objPos = fit === 'cover-top' ? 'top' : fit === 'cover-bottom' ? 'bottom' : 'center';
  const thumbInner = p.cover
    ? `<img src="${p.cover}" alt="${p.title}" style="object-fit:${objFit};object-position:${objPos};"/>`
    : p.emoji;

  // Link button shown below card footer if a link exists
  const linkRow = p.link
    ? `<a class="card-link" href="${p.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">View Project ↗</a>`
    : '';

  card.innerHTML = `
    <div class="card-thumb">${thumbInner}</div>
    <div class="card-index">${p.index}</div>
    <div class="card-title">${p.title}</div>
    <div class="card-subtitle">${p.subtitle}</div>
    <div class="card-desc">${p.desc}</div>
    <div class="card-footer">
      <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <span class="card-arrow">↗</span>
    </div>
    ${linkRow}`;

  card.addEventListener('click', () => openModal(i));
  grid.appendChild(card);
});

/* MODAL ---------------------------*/
const overlay    = document.getElementById('modalOverlay');
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

  // Link button in modal meta bar
  const linkBtn = p.link
    ? `<a class="modal-project-link" href="${p.link}" target="_blank" rel="noopener">View Project ↗</a>`
    : '';

  modalInner.innerHTML = `
    <div class="modal-eyebrow">${p.eyebrow}</div>
    <h2 class="modal-title">${p.title}</h2>
    <div class="modal-meta">
      <div class="modal-meta-item"><strong>Role</strong>${p.role}</div>
      <div class="modal-meta-item"><strong>Duration</strong>${p.duration}</div>
      <div class="modal-meta-item"><strong>Tools</strong>${p.tools}</div>
      <div class="modal-meta-item"><strong>Year</strong>${p.year}</div>
      ${linkBtn}
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
