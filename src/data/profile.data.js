import { EmailSVG, LinkedInSVG, GitHubSVG } from '../assets/icons.js'

export const profile = {
  name: 'Kagotho, Andrew G.',
  tags: ['Full Stack Developer', 'BSc. in Applied Computer Technology'],
  links: [
    {
      username: 'Andrew Kagotho',
      site: 'LinkedIn',
      ref: 'https://www.linkedin.com/in/andrew-k-2447b0181',
      icon: LinkedInSVG
    },
    {
      username: 'Andrew G. Kagotho',
      site: 'GitHub',
      ref: 'https://github.com/AndrewKagotho',
      icon: GitHubSVG
    },
    {
      username: 'zxcandrewkagotho7@live.com',
      site: 'Email',
      ref: 'mailto:andrewkagotho7@live.com',
      icon: EmailSVG
    }
  ],
  about: `Full stack developer with a Bachelor's degree in Applied Computer Technology from the United States International University (USIU - Africa) and competencies in web design and development. Driven towards mastery.`,
  degree: {
    major: 'BSc. in Applied Computer Technology (Dual-accredited)',
    minor: 'Software Engineering',
    college: 'United States International University',
    location: 'Nairobi, Kenya'
  }
}
