import {
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJava,
  BiLogoPhp,
  BiLogoReact,
  BiLogoRedux,
  BiLogoGit
} from 'react-icons/bi'
import { FaNodeJs, FaFigma } from 'react-icons/fa'
import { DiMysql, DiSass } from 'react-icons/di'
import { RiJavascriptFill, RiDatabase2Fill } from 'react-icons/ri'
import { SiExpress, SiJest, SiMui } from 'react-icons/si'

const languages = [
  { name: 'TypeScript', icon: BiLogoTypescript, scale: '1.2' },
  { name: 'JavaScript', icon: RiJavascriptFill, scale: '1.2' },
  { name: 'HTML5', icon: BiLogoHtml5, scale: '1.1' },
  { name: 'CSS3', icon: BiLogoCss3, scale: '1.1' },
  { name: 'SQL', icon: DiMysql, scale: '1.2' },
  { name: 'PHP', icon: BiLogoPhp, scale: '1.2' },
  { name: 'Java', icon: BiLogoJava, scale: '1.4' }
]

const tools = [
  { name: 'React', icon: BiLogoReact, scale: '1.1' },
  { name: 'Node.Js', icon: FaNodeJs, scale: '.9' },
  { name: 'Express', icon: SiExpress, scale: '1' },
  { name: 'SCSS', icon: DiSass, scale: '1.1' },
  { name: 'Figma', icon: FaFigma, scale: '1' },
  { name: 'DBMS', icon: RiDatabase2Fill, scale: '1' },
  { name: 'Git', icon: BiLogoGit, scale: '1.1' }
]

const libraries = [
  { name: 'Redux', icon: BiLogoRedux, scale: '1.1' },
  { name: 'Material UI', icon: SiMui, scale: '.9' },
  { name: 'Jest (Unit testing)', icon: SiJest, scale: '.9' }
]

export const techData = [
  {
    section: 'Programming languages',
    content: [
      {
        title: 'Frontend / backend',
        list: languages
      }
    ]
  },
  {
    section: 'Industry',
    content: [
      {
        title: 'Tools / frameworks',
        list: tools
      },
      {
        title: 'Libraries',
        list: libraries
      }
    ]
  }
]
