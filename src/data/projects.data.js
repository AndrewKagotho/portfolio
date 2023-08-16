export const projects = [
  {
    id: 1,
    name: 'County Development Project Tracker',
    demoLink: 'https://andrewkagotho.github.io/development-project-tracker',
    sourceLink: 'https://github.com/AndrewKagotho/development-project-tracker',
    description:
      'An online tracking and repository system covering development projects in all 47 counties in Kenya, with project insights and updates provided on both county and national levels.',
    keywords: ['tracker', 'development', 'Kenya'],
    content: [
      {
        title: 'The problem',
        text: 'The lack of citizen-centric project tracking solutions for government-run public works was the gap the CDPT system attempts to tackle. Currently, there are very few (and scarcely maintained) sources of public projects data available to the general public. The present ones, predecessors to the CDPT, lean heavily towards technicalities that the layman - the common <i>mwananchi</i> - would most likely be non-conversant with.'
      },
      {
        title: 'The solution',
        text: 'To redefine the concept of public works project tracking, the solution had to adopt a focus for the person in the grassroots. What the CDPT system manages to do is offer itself up as a centralized platform for tracking development projects in all 47 counties, providing digestible insights for each. The interface makes for an easy-to-follow-and-understand experience, ensuring that all information that may be needed is only a few clicks away.'
      },
      {
        title: 'The approach',
        text: 'The system was developed for web due to the ubiquity and accessibility of the online medium. Web pages were maintained at a minimum for ease of use. The system architecture comprised of a frontend with public user and admin client UIs, a web server, a backend with a relational database and an intermediary RESTful API for data communications across the various levels.'
      },
      {
        title: 'The result',
        text: 'An online system capable of relaying public project information by facts and numbers to the general public.'
      }
    ]
  },
  {
    id: 2,
    name: 'Crowdfunding app',
    demoLink: 'https://andrewkagotho.github.io/crowdfunding-app',
    sourceLink: 'https://github.com/AndrewKagotho/crowdfunding-app',
    description:
      'An HTML, CSS and JavaScript challenge on Frontend Mentor further developed with a simple relational database and API integration.',
    keywords: ['pledges', 'tracking'],
    content: [
      {
        title: 'The challenge',
        text: 'Provided with screenshots for the desktop and mobile experience, the task was to recreate the website with the specifications highlighted in the guides. Backend integration was not required but was included in this particular attempt, by way of a relational database queried using MySQL over a RESTful API. The frontend was hosted on GitHub using GitHub Pages and the backend deployed on Heroku.'
      },
      {
        title: "The challenge's challenge",
        text: "This project features on my portfolio by virtue of being a personal victory in my web development learning journey. First built using vanilla JavaScript in 2021 and (unsuccessfully) deployed, I came around to it months later with a better understanding of 'how things work', made things work, and now everything works - and not just on my machine."
      }
    ]
  },
  {
    id: 3,
    name: 'Portfolio',
    demoLink: 'https://andrewkagotho.github.io/portfolio',
    sourceLink: 'https://github.com/AndrewKagotho/portfolio',
    description:
      'This site. Built to showcase itself and other personal projects, providing project commentary, links and previews. Also features current unfinished projects.',
    keywords: ['projects', 'about'],
    content: [
      {
        title: 'The design',
        text: 'An uncluttered, minimalist design was preferred to busier alternatives given the nature of the site and its emphasis on text. For further context, and to fill negative spaces in occasion, illustrations (sourced from popsy.co) were added to the website desktop experience. These additions however feature less on mobile devices. Initial design was accomplished using a desktop-first approach before translation for smaller, taller, screens.'
      },
      {
        title: 'The build',
        text: 'Content on the site is served statically to eliminate any challenges that may arise with network latencies. Because the site is not expected to scale much, server overhead was deemed unnecessary.'
      }
    ]
  }
]

export const unpublishedProjects = [
  {
    id: 1,
    name: "Students' Living Quarters Portal",
    description:
      'An account management portal for students and landlords in off-campus living establishments, offering rent management solutions and direct communications in-app. Coming soon.'
  }
]
