import { SectionProvider } from '@/components/section-provider';
import Section from '@/components/section';
import Frame from '@/components/frame';
import { Metadata } from 'next';
import { FuzzyOverlay } from '@/components/ui/fuzzy-overlay';
import Cursor from '@/components/ui/cursor';

export default function Page() {
 return (
  <main
   id="portfolio"
   className="h-full touch-none w-full relative overflow-hidden overscroll-none"
   style={{
    WebkitOverflowScrolling: 'auto',
   }}
  >
   <SectionProvider>
    <Frame />
    <Section />
    <FuzzyOverlay />
    <Cursor />
   </SectionProvider>
  </main>
 );
}

export const metadata: Metadata = {
 title: 'Fatumo Ayodeji | Portfolio',
 description:
  "Learn about Fatumo Ayodeji's journey in Photography, explore his projects, and stay updated through his instagram, where he shares insights and experiences from his work.",
 openGraph: {
  title: 'Fatumo Ayodeji | Portfolio',
  description:
   "Learn about Fatumo Ayodeji's journey in Photography, explore his projects, and stay updated through his instagram, where he shares insights and experiences from his work.",
  images: [
   {
    url: `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/thumbnail.png`,
    width: 1200,
    height: 630,
    alt: 'Fatumo Ayodeji Portfolio Thumbnail',
   },
  ],
  locale: 'en_US',
  type: 'website',
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Fatumo Ayodeji | Portfolio',
  description:
   "Learn about Fatumo Ayodeji's journey in Photography, explore his projects, and stay updated through his instagram, where he shares insights and experiences from his work.",
  images: [`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/thumbnail.png`],
 },
};