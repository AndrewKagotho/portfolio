export const projects = [
  {
    id: 1,
    name: 'County Development Project Tracker',
    status: 'published',
    featured: 'true',
    demoLink: 'https://andrewkagotho.github.io/development-project-tracker',
    sourceLink: 'https://github.com/AndrewKagotho/development-project-tracker',
    description:
      'An online tracking and repository system covering development projects in all 47 counties in Kenya, with project insights and updates provided on both county and national levels.',
    keywords: ['Kenya', 'projects', 'tracker', 'county'],
    content: [
      {
        title: 'The problem',
        text: 'The lack of citizen-centric project tracking solutions for government-run public works is the gap the CDPT system attempts to tackle. Currently, there are very few (and scarcely maintained) sources of public projects data available to the general public. The present ones, predecessors to the CDPT, lean heavily towards technicalities that the common man would most likely not be conversant with.'
      },
      {
        title: 'The solution',
        text: 'To redefine the concept of public works project tracking, the solution had to shift the focus from the parties directly involved in the implementation of the projects to the members of the general public. The CDPT manages to offer itself up as a centralized platform for tracking countrywide development projects, providing easy-to-understand insights for each listed project to the public.'
      },
      {
        title: 'The approach',
        text: 'The system is an SPA (Single Page Application) with a React front-end, a relational database management system in the backend and a server application layer built with Node.Js and Express in a 3-tier client-server architecture model. The front-end presents two client user interfaces, public and admin, with two unique user experiences.'
      },
      {
        title: 'The result',
        text: 'An online system that relays public project information by numbers to the general public.'
      }
    ]
  },
  {
    id: 2,
    name: "Students' Living Quarters Portal",
    status: 'unpublished',
    featured: 'true',
    description:
      'An account management portal for students and landlords in off-campus living establishments, offering rent management solutions and direct communications in-app.',
    keywords: ['portal', 'reservation', 'students', 'browsing'],
    content: [
      {
        title: 'The problem',
        text: 'A prevailing demand for off-campus living solutions marred by slow space reservation processes and unreliable accounts management for college students.'
      },
      {
        title: 'The solution',
        text: 'An online portal for registered college students to browse through off-campus living establishments, make reservations and manage their tenant accounts. Landlords can post listings on the site and perform basic administration, with landlord-tenant communications facilitated in-app.'
      },
      {
        title: 'The approach',
        text: 'The system is an SPA (Single Page Application) built with a 2-tier architecture model with React on the client side.'
      }
    ]
  },
  {
    id: 3,
    name: 'Crowdfunding app',
    status: 'published',
    featured: 'true',
    demoLink: 'https://andrewkagotho.github.io/crowdfunding-app',
    sourceLink: 'https://github.com/AndrewKagotho/crowdfunding-app',
    description:
      'A Frontend Mentor challenge developed with a basic relational database management system and API integration.',
    keywords: ['pledges', 'bookmarks'],
    content: [
      {
        title: 'The challenge',
        text: 'The task was to translate Figma designs into a crowdfunding website keeping within certain provided parameters. A MySQL database was designed to persist pledge data. The application was deployed on Heroku.'
      },
      {
        title: "The challenge's challenge",
        text: "This project features on my portfolio by virtue of being a personal victory in my web development practice journey. First built using vanilla JavaScript in 2021 and (unsuccessfully) deployed, I came around to it months later with a better understanding of 'how things work', made things work, and now everything works - and not just on my machine."
      }
    ]
  },
  {
    id: 4,
    name: 'Portfolio',
    status: 'published',
    featured: 'false',
    demoLink: 'https://andrewkagotho.github.io/portfolio',
    sourceLink: 'https://github.com/AndrewKagotho/portfolio',
    description:
      'This site. Built to showcase personal projects, providing contextual project commentary and associated links.',
    keywords: ['projects', 'about'],
    content: [
      {
        title: 'The design',
        text: 'Initial design was accomplished using a desktop-first approach before translation for smaller screens.'
      },
      {
        title: 'The build',
        text: 'The site is built with React and features only on the client side.'
      }
    ]
  }
]
