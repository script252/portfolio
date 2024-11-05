import dealforceScreenshot from '../../assets/dealforce-screenshot.png';
import heroScreenshot from '../../assets/hero-screenshot.png';
import placeholderScreenshot from '../../assets/placeholder-screenshot.jpg';
import { LinkIcon } from '@heroicons/react/24/solid';
import ProjectCard, {Props as ProjectCardProps} from '~/components/ProjectCard/ProjectCard';
import { ReactNode } from 'react';

interface CardData extends ProjectCardProps {
  content?: ReactNode
}

const cards: CardData[] = [
  {
    title: "Dealforce",
    imageUrl: dealforceScreenshot,
    href: "https://www.dealforce.com",
    tags: ['React','Next'],
    children: (<><p>A marketplace app to shop for businesses.</p></>)
  },
  {
    title: "Hero",
    imageUrl: heroScreenshot,
    href: "https://safetower.com/solution",
    tags: ['Angular'],
    children: (<><p>A hospital safety incident reporting tool.</p></>)
  },
  {
    title: "CAMS",
    imageUrl: placeholderScreenshot,
    tags: ['React', 'Tailwind CSS', 'Tanstack'],
    children: (<><p>Internal administration tool created for Crash Champions.</p></>)
  }
];

function Work() {
    return (
      <>
        <div className="px-0 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <ProjectCard 
                key={index}
                {...card}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export default Work;