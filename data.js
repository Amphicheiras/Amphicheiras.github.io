export const bio = [
  'Hello. I’m Aristotelis Symeonakis, an ambitious Electrical & Computer Engineer and Musician dedicated to providing innovative software and embedded solutions.',
  'I thrive on continuous learning and am driven by the challenge of tackling complex, boundary-pushing tasks in audio technology and other interesting topics.',
  'Thanks for visiting!',
  '<strong>`*~. Page Under Construction .~*`</strong>',
];

export const skills = [
  {
    title: 'Programming Languages & Web Technologies',
    skillName:
        'C/C++, Python, Java, Assembly, VHDL, SQL, HTML, JavaScript, CSS',
    color: '4',
    percentage: '100',
  },
  {
    title: 'Software & Tools',
    skillName:
        'Ableton Live, VS Code, CMake, Git, Matlab, Xilinx ISE, Photoshop, Unity 3D, Rhino 3D',
    color: '4',
    percentage: '90',
  },
  {
    title: 'Libraries & Frameworks',
    skillName:
        'JUCE, PlatformIO, AppleMIDI, rtpMIDI, NumPy, PyTorch, Matplotlib, SciPy, scikit-learn, Pandas',
    color: '4',
    percentage: '90',
  },
  {
    title: 'Soft Skills',
    skillName: 'Detail-Oriented, Team Player, Punctual, Adaptable',
    color: '4',
    percentage: '90',
  },
];

export const projects = {
  juceProjects: [
    // {
    //   projectName: 'Harmonic voice stereo separation',
    //   // image: 'images/voiceSeparationSystem.jpg',
    //   summary:
    //       'Harmonic voice stereo separation system using Ableton Live and
    //       custom JUCE plugins.',
    //   preview: 'https://github.com/Amphicheiras',
    //   techStack: ['C++', 'JUCE', 'CMake', 'Ableton Live'],
    // },
    {
      projectName: '3D Spatial Audio',
      image: 'images/3DSA.png',
      summary:
          '3D Spatial Audio - Essential spatial audio plugin using JUCE and HRTFs.',
      preview: 'https://github.com/Amphicheiras/3D-Spatial-Audio',
      techStack: [
        'C++', 'JUCE', 'Audio Processing', 'Digital Signal Processing', 'CMake',
        'Git'
      ],
    },
    {
      projectName: 'Vocal Divider',
      image: 'images/VCDV.png',
      summary:
          'Vocal Divider - Separate 2 voices found in a mono input to a stereo output with each voice on each channel. Made with JUCE.',
      preview: 'https://github.com/Amphicheiras/Vocal-Divider',
      techStack: [
        'C++', 'JUCE', 'Audio Processing', 'Digital Signal Processing', 'CMake',
        'Git'
      ],
    },
    {
      projectName: 'UF-Oscilloscope',
      image: 'images/UF00.png',
      summary:
          'UF-Oscilloscope - A stylish oscilloscope with a few handy features, made with JUCE.',
      preview: 'https://github.com/Amphicheiras/UF-Oscilloscope',
      techStack: [
        'C++', 'JUCE', 'Oscilloscope', 'Digital Signal Processing', 'CMake',
        'Git'
      ],
    },
    {
      projectName: 'SineThesizer',
      image: 'images/SNTH.png',
      summary:
          'SineThesizer - DIY synthesizer of basic waveforms, made with JUCE.',
      preview: 'https://github.com/Amphicheiras/Wavetable-Synth',
      techStack: [
        'C++', 'JUCE', 'Synthesizers', 'Digital Signal Processing', 'CMake',
        'Git'
      ],
    },
    // {
    //   projectName: 'Bandpass Filter',
    //   // image: 'images/BPFR.jpg',
    //   summary:
    //       'Bandpass Filter - DIY VST3 audio filter using JUCE implemented
    //       with a 2nd order filter system.',
    //   preview: 'https://github.com/Amphicheiras/Bandpass-Filter',
    //   techStack: ['C++', 'JUCE', 'CMake'],
    // },
  ],
  esp32Projects: [
    {
      projectName: 'Pixie Gauntlet',
      image: 'images/controller2.jpg',
      summary:
          'Pixie Gauntlet - Compact wireless MIDI controller, focused on circuit design, code development, and motion tracking.',
      preview: 'https://github.com/Amphicheiras',
      techStack: ['C++', 'ESP32', 'Embedded Systems', 'Sensors'],
    },
    {
      projectName: 'Wireless MIDI Controller',
      image: 'images/controller1.jpg',
      summary:
          'DIY electronic musical instrument using the ESP32 microcontroller.',
      preview: 'https://github.com/Amphicheiras',
      techStack: ['C++', 'ESP32', 'Embedded Systems', 'Sensors'],
    },
  ],
  audioProjects: [
    {
      projectName: 'GIDA - Psychrolousia',
      image: 'images/gida.jpg',
      summary: 'One-man-black-metal-band.',
      preview: 'https://gida-music.bandcamp.com/album/psychrolousia',
      techStack: ['Recording Engineering', 'Music Composition', 'Mix/Master'],
    },
    {
      projectName: 'Tongas - Dragonfly Effect',
      image: 'images/tongas.jpg',
      summary:
          'Nightime electronic music, rich in audio elements and vast atmospheres.',
      preview:
          'https://liquidseedrecordings.bandcamp.com/album/dragonfly-effect',
      techStack: ['Sound Design', 'Music Composition', 'Mix/Master'],
    },
    {
      projectName: 'DJ set as Serrated Margin',
      image: 'images/sermanDJ.png',
      summary: 'DJ set as Serrated Margin at a festival in Greece.',
      preview:
          'https://soundcloud.com/tongas_serrated_margin/serrated-margin-rise-of-the-spirit-dj-set-2021',
      techStack: ['Audio Mixing', 'Stage Performance'],
    },
    {
      projectName: 'Chypno & Serrated Margin',
      image: 'images/marginCollab.png',
      summary: 'Nightime electronic music collaboration project with Chypno.',
      preview:
          'https://soundcloud.com/chypno_music/chypno-serrated-margin-subatomic-particles-va-ominous-fumes-2',
      techStack: ['Sound Design', 'Music Composition'],
    },
  ],
  universityProjects: [
    {
      projectName: 'Multi-Cycle Pipeline Processor Architecture',
      image: 'images/vhdl.png',
      summary:
          'CHARIS-4 (Chania RISC Instruction Set v.4) Processor Architecture.',
      preview:
          'https://github.com/Amphicheiras/Multi-Cycle-Pipeline-Processor-Architecture',
      techStack: ['VHDL', 'Xilinx ISE'],
    },
    {
      projectName: 'Assembly Maze Solver',
      image: 'images/maze.png',
      summary:
          'MIPS assembly programm that solves a given maze using recursive functions.',
      preview: 'https://github.com/Amphicheiras/MIPS-Assembly-Maze-Solver',
      techStack: ['MIPS Assembly'],
    },
    {
      projectName: 'Quantum Walks Quantum-Classical Phase Transition ',
      image: 'images/thesis.png',
      summary:
          'University research thesis on QW\' s quantum-classical phase transition.',
      preview:
          'https://github.com/Amphicheiras/Quantum-Walks-Quantum-Classical-Phase-Transition',
      techStack: ['Matlab', 'Python', 'Qiskit'],
    },
    {
      projectName: 'Quantum Error Correction Codes',
      image: 'images/bitflip.png',
      summary:
          'Basics of Quantum Noise and Quantum Error Correction. Description of phase flip error, amplitude error, and explanations ofthe 3-bit and 5-bit error correcting codes.',
      preview: 'https://github.com/Amphicheiras/Quantum-Error-Correction-Codes',
      techStack: ['Matlab', 'Python', 'Qiskit'],
    },
  ],
  // moocProjects: [
  //   {
  //     projectName: 'Machine Learning Specialization',
  //     image: 'images/gpuRL.PNG',
  //     summary:
  //         'Classical RL method designed to run on GPUs with the purpose of
  //         enchancing classical bitstring solutions using a problem based
  //         reward system.',
  //     preview: 'https://dias.library.tuc.gr/view/99392?locale=en',
  //     techStack: ['GPU based', 'UCB score', 'Exploration & Exploitation'],
  //   },
  //   {
  //     title: 'Beginning C++ Programming - From Beginner to Beyond',
  //     projectName:
  //         'Reinforcement learning based food recommendations based on real
  //         data',
  //     image: 'images/Structure-of-a-recommender-system.png',
  //     summary:
  //         'Developed an RL recommendation system that recommends food
  //         products to users based on their weekly budget and dietary
  //         constraints but ensuring variety of products.',
  //     preview: 'https://github.com/Amphicheiras',
  //     techStack: [
  //       'Recommendation system', 'Pandas', 'Weekly recommendations',
  //       'Multiple products'
  //     ],
  //   },
  // ],
};

export const certifications = [
  {
    title: 'Beginning C++ Programming - From Beginner to Beyond',
    description: '',
    // image: 'images/vrptw.PNG',
    link:
        'https://www.udemy.com/certificate/UC-4c455210-87b0-4c6b-b7e5-beb3afffd910/',
    keywords: [
      'C++', 'Object-Oriented Programming (OOP)', 'Data Structures',
      'Problem Solving'
    ],
    date: '2024'
  },
  {
    title: 'Machine Learning Specialization',
    description: '',
    // image: 'images/tuc_sign.png',
    link:
        'https://www.coursera.org/account/accomplishments/specialization/ZPR3RLXE16FR',
    keywords: [
      'Python', 'Machine Learning', 'Deep Learning',
      'Artificial Neural Networks', 'TensorFlow'
    ],
    date: '2024'
  },
  {
    title: 'A deep understanding of deep learning with Python',
    description: '',
    // image: 'images/quantum_future_academy.jpg',
    link:
        'https://www.udemy.com/certificate/UC-be7fee38-3393-40d1-a66d-7c89566c8490/',
    keywords: [
      'Python', 'Machine Learning', 'Deep Learning',
      'Convolutional Neural Networks'
    ],
    date: '2024'
  },
  {
    title: 'Audio Signal Processing for Music Applications',
    description: '',
    // image: 'images/quantum_future_academy.jpg',
    link:
        'https://github.com/Amphicheiras/Audio-Signal-Processing-for-Music-Applications',
    keywords:
        ['Python', 'Digital Signal Processing', 'Audio Engineering', 'SciPy'],
    date: '2024'
  },
  {
    title: 'Deep Learning with PyTorch: Generative Adversarial Network',
    description: '',
    // image: 'images/quantum_future_academy.jpg',
    link: 'https://coursera.org/share/5152bbc393f4d774d74d9dce880b4072',
    keywords: ['Python', 'Machine Learning', 'Generative Adversarial Networks'],
    date: '2024'
  },
  {
    title: 'Data Science and Applied Machine Learning with Python',
    description: '',
    // image: 'images/quantum_future_academy.jpg',
    link:
        'https://mathesis.cup.gr/certificates/0b734097ed814a619403fad642dcdfb1?lang=en',
    keywords: [
      'Python', 'MATLAB', 'Machine Learning', 'Data Science',
      'Digital Image Processing'
    ],
    date: '2022'
  },
];

export const awards = [
  {
    title:
        'World Robotics Olympiad RoboMission – 1st place (Crete), 4th place (Greece)',
    image: 'images/wro.jpg',
    link: 'https://www.youtube.com/watch?v=msjjqIeK3W0',
    keywords: ['Robotics', 'Team Leadership'],
    date: '2013'
  },
];


export const experience = [
  {
    title: 'Audio Engineer | Musician',
    duration: '2017 - Present',
    subtitle: 'Independent, Liquidseed Recordings · Freelance',
    details: [
      'Manifestation of a lifelong passion for music combined with technological expertise.',
      'Extensive sound design.',
      'Music synthesis, composition and arrangement.',
      'Recording engineering.',
      'Mix & Master.',
      'Live musical performances.',
      'Audiovisual installations.',
      'Acoustic treatment.',
    ],
    tags: ['Audio Engineering', 'Music Production', 'Signal Processing'],
    icon: 'brain',
  },
  {
    title: 'IT Technician & Front Desk',
    duration: 'July 2022 - September 2022',
    subtitle: 'Trolltunga Camping · Contract',
    details: [
      'Seasonal front desk position with IT responsibilities.',
      'IT systems upgrade & support.',
      'Smart-cashier installation & support.',
      'Computer software & hardware installation & support.',
      'Use of aforementioned IT systems as front desk for accommodation.',
    ],
    tags: [
      'IT Integration',
      'Hardware Installation',
      'Management',
      'Computer Repair',
      'Web Development',
      'Interpersonal Communication',
    ],
    icon: 'group',
  },
  {
    title: 'Software Engineer',
    duration: 'February 2020 - July 2020',
    subtitle: 'QCell - Spectral Vision Camera Systems · Full-time',
    details: [
      'Software engineer position under the mentorship of one of my professors.',
      'Hyper-spectral microscope image segmentation and classification in C++ with Qt 5 for biomedical applications.',
      'Database structure design and API implementation for real-time microscope-database intercommunication.',
      'Multi-purpose scripting, including loggers.',
      'Worked effectively in a fast-paced engineering cycle environment.',
    ],
    tags: [
      'C++', 'Qt', 'Digital Image Processing', 'Agile Methodologies', 'Git',
      'Hyperspectral Imaging'
    ],
    icon: 'cogs',
  },
];

export const education = [
  {
    title: 'BSE & MEng in Electrical & Computer Engineering',
    duration: '2022',
    subtitle: 'Technical University of Crete',
    details: [],
    tags: [
      'Computer Science', 'Software Engineering', 'Signals & Systems',
      'Hardware Design'
    ],
    icon: 'graduation-cap',
  },
];

export const footer = [
  //   {
  //     label: "Dev Profiles",
  //     data: [
  //       {
  //         text: "Stackoverflow",
  //         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
  //       },
  //       {
  //         text: "GitHub",
  //         link: "https://github.com/vinaysomawat",
  //       },
  //       {
  //         text: "LeetCode",
  //         link: "https://leetcode.com/somawatvinay/",
  //       },
  //     ],
  //   },
  //   {
  //     label: "Resources",
  //     data: [
  //       {
  //         text: "Enable Dark/Light Mode",
  //         func: "enableDarkMode()",
  //       },
  //       {
  //         text: "Print this page",
  //         func: "window.print()",
  //       },
  //       {
  //         text: "Clone this page",
  //         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
  //       },
  //     ],
  //   },
  {
    label: 'Life fact',
    data: [
      {
        text: 'Change is the only constant.',
      },
    ],
  },
  {
    label: 'copyright-text',
    data: [
      'Made with &hearts; by Aristotelis Symeonakis.',
    ],
  },
];
