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
    'Creation, resilience, and mastery. A working summary to what this section should be. The depiction of an individual who places a high premium on originality, coupled with unimaginable levels of grit in an endless pursuit of mastery. A firm believer of lasting solutions to prevailing problems, especially where the efficiency of code can be applied. I am a full stack developer with competencies in web technologies, and yes, I was the individual in the first part of this winding paragraph. Welcome to my portfolio.',
  degree: {
    major: 'BSc. in Applied Computer Technology (Dual-accredited)',
    minor: 'Software Engineering',
    college: 'United States International University',
    location: 'Nairobi, Kenya'
  }
}
