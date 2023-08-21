import { EmailSVG, LinkedInSVG, GitHubSVG } from '../assets/icons.js'

export const profile = {
  name: 'Kagotho, Andrew G.',
  tags: ['Full Stack Developer', 'BSc. Applied Computer Technology'],
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
      username: 'andrewkagotho7@live.com',
      site: 'Email',
      ref: 'mailto:andrewkagotho7@live.com',
      icon: EmailSVG
    }
  ],
  about:
    'Creation, resilience, mastery: a working summary of my pursuits as a developer. These are attributes that depict the premium I place on originality, grit and work towards mastery. I believe in lasting solutions to prevailing problems, especially where the efficiency of code can be applied. I am a full stack developer, and this is my portfolio.',
  degree: {
    major: 'BSc. in Applied Computer Technology (Dual-accredited)',
    minor: 'Software Engineering',
    college: 'United States International University',
    location: 'Nairobi, Kenya'
  }
}
