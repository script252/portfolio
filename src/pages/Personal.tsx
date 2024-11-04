import { LinkIcon } from '@heroicons/react/24/solid';
import scatterbrainsScreenshot from '../../assets/scatterbrains-screenshot.png';
import { Link } from 'react-router-dom';

function Personal() {
    return (
      <>
        <div className="px-0 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 w-full md:w-80">
            <div className="card bg-p-metal-900 rounded-none">
              <figure className="">
                <img
                  className=""
                  src={scatterbrainsScreenshot}
                  alt="Screenshot" />
              </figure>
              <div className="card-body px-8 pt-8 pb-4 shadow-2xl">
                <Link to="http://script252.github.io/scatterbrains" target="_blank"><h2 className="card-title text-p-tan-light-700">Scatterbrains<LinkIcon width={24}/></h2></Link>
                <p>Sudoku, a word finding game, and a memory game. Just for fun.</p>
                <div className="card-actions justify-end">
                <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">React</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Personal;