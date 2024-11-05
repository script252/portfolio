import ProjectCard from '~/components/ProjectCard/ProjectCard';

import scatterbrainsScreenshot from '../../assets/scatterbrains-screenshot.png';
import mriScreenshot from '../../assets/mri-screenshot.png';

function Personal() {
    return (
      <>
        <div className="px-0 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Scatterbrains"
              imageUrl={scatterbrainsScreenshot}
              href="http://script252.github.io/scatterbrains"
              tags={['React']}
            >
              <p>Sudoku, a word finding game, and a memory game. Just for fun.</p>
            </ProjectCard>
            <ProjectCard
              title="MRI Renderer"
              imageUrl={mriScreenshot}
              href="https://www.youtube.com/watch?v=F7PEkbaZJR8&t=50s"
              tags={['Unreal Engine','C++']}
            >
              <p>
                MRI slice volume loader and renderer. Custom importing plugin. 
                Although it's built within unreal, the volume rendering doesn't 
                rely on any unreal engine code.
              </p>
            </ProjectCard>
          </div>
        </div>
      </>
    )
  }
  
  export default Personal;