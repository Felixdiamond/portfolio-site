import { Section, SectionColors, Sections } from './types';
import Home from '@/components/home';
import Works from '@/components/works';
import MjolnirCover from '@/assets/images/mjolnir-cover.png';
import AinurCover from '@/assets/images/ainur-cover.png';
import Experiences from '@/components/experiences';
import Contact from '@/components/contact';

export const ANIMATION_DURATION = {
 SHORT: 0.2,
 MEDIUM: 0.4,
 LONG: 0.8,
};

export const SECTIONS: Section[] = [
 { content: <Home />, title: 'Home' },
 { content: <Works />, title: 'Works' },
 {
  content: <Experiences />,
  title: 'Experiences',
 },
 {
  content: <Contact />,
  title: 'Contact',
 },
];

export const THEMES: Record<string, SectionColors> = {
 main: {
  background: 'var(--theme-1-background)',
  primary: 'var(--theme-1-primary)',
  secondary: 'var(--theme-1-secondary)',
  accent: 'var(--theme-1-accent)',
 },
 mjolnir: {
  background: 'var(--theme-2-background)',
  primary: 'var(--theme-2-primary)',
  secondary: 'var(--theme-2-secondary)',
  accent: 'var(--theme-2-accent)',
 },
 ainur: {
  background: 'var(--theme-3-background)',
  primary: 'var(--theme-3-primary)',
  secondary: 'var(--theme-3-secondary)',
  accent: 'var(--theme-3-accent)',
 },
 jeton: {
  background: 'var(--theme-4-background)',
  primary: 'var(--theme-4-primary)',
  secondary: 'var(--theme-4-secondary)',
  accent: 'var(--theme-4-accent)',
 },
 experiences: {
  background: 'var(--theme-5-background)',
  primary: 'var(--theme-5-primary)',
  secondary: 'var(--theme-5-secondary)',
  accent: 'var(--theme-5-accent)',
 },
};

export const SECTION_THEME_MAP: {
 [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
 [Sections.Home]: THEMES.main,
 [Sections.Works]: {
  0: THEMES.mjolnir,
  1: THEMES.ainur,
  2: THEMES.jeton,
 },
 [Sections.Experience]: THEMES.experiences,
 [Sections.Contact]: THEMES.main,
};

export const WORKS_ITEMS = [
 {
  cover: MjolnirCover,
  title: 'GTCO Fashion Week',
  subject: 'Fashion and Photography',
  description:
   "The photographs I captured for GTCO Fashion Week document Africa's vibrant fashion scene, where creativity and culture collide on the runway.",
  link: 'https://www.instagram.com/deji.vtw/p/DCR6Feoog9h',
  techStack: ['mobilephotography', 'fashion', 'expression'],
 },
 {
  cover: AinurCover,
  title: 'Envagelism in the slums',
  subject: 'Envagelism and Photography',
  description:
   "These photos were captured during my church's evangelism outreach in the slums, showcasing the efforts and impact of our mission in reaching the community.",
  link:
   'https://www.instagram.com/p/DChXFihoubm',
  techStack: ['envagelism', 'outreach', 'mobilephotography'],
 },
];

export const WORK_SUBSECTIONS = WORKS_ITEMS.length;

export const experiences = [
 { date: 'Feb 2024', title: 'Amuwo Odofin Baptist Church', role: 'Social media manager' },
 { date: 'Jun 2023', title: 'Blunce Medical Diagnostics Lab', role: 'Lab Assistant Intern' },
 { date: 'May 2023', title: 'Clearview Hospital', role: 'Lab Assistant' },
];
