import {BuildingOfficeIcon} from '@heroicons/react/24/solid';

function Experience() {
  return (
    <>
      <div className="mb-0 lg:mb-64">
        <ul className="timeline timeline-vertical lg:timeline-horizontal md:-ml-0 [--timeline-col-start:0rem]">
          <li className="h-full lg:h-36 lg:w-auto">
            <div className="timeline-start max-w-4" />
            <div className="timeline-middle flex items-center mr-1 w-20 lg:w-auto justify-center lg:justify-left flex-col lg:flex-row">
              <BuildingOfficeIcon className="w-5 m-1"/>
              <div className="text-end lg:text-center">2007</div>
            </div>
            <div className="timeline-end timeline-box bg-p-metal-900 rounded-none border-0 w-11/12 lg:w-80 shadow-2xl">
              <h2 className="card-title text-p-tan-light-700 mb-4">ReelFX</h2>
              Technical director. Supported projects with various tooling built for Maya.
            </div>
            <hr className="bg-p-tan-light-800"/>
          </li>
          <li className="h-full lg:h-36 lg:w-auto">
            <hr className="bg-p-tan-light-800"/>
            <div className="timeline-start max-w-4" />
            <div className="timeline-middle flex items-center mr-1 w-20 lg:w-auto justify-center lg:justify-left flex-col lg:flex-row">
              <BuildingOfficeIcon className="w-5 m-1"/>
              <div className="text-end lg:text-center">2010</div>
            </div>
            <div className="timeline-end timeline-box bg-p-metal-900 rounded-none border-0 w-11/12 lg:w-80 shadow-2xl">
              <h2 className="card-title text-p-tan-light-700 mb-4">Brain Performance Institute</h2>
              <div className=" text-wrap">
                Software engineer. Lead development of 'Charisma', a multi-user first person social scenario simulator built on Unreal Engine. Charisma is currently being used to treat young people suffering from autism.
              </div>
            </div>
            <hr className="bg-p-tan-light-800"/>
          </li>
          <li className="h-full lg:h-36 full lg:w-auto">
            <hr className="bg-p-tan-light-800"/>
            <div className="timeline-start max-w-4" />
            <div className="timeline-middle flex items-center mr-1 w-20 lg:w-auto justify-center lg:justify-left flex-col lg:flex-row">
              <BuildingOfficeIcon className="w-5 m-1"/>
              <div className="text-end lg:text-center">2017 to Present</div>
            </div>
            <div className="timeline-end timeline-box bg-p-metal-900 rounded-none border-0 w-11/12 lg:w-80 shadow-2xl">
            <h2 className="card-title text-p-tan-light-700 mb-4">Precocity LLC</h2>
              Senior software engineer. Mostly front-end consulting, in addition to some back end and Unity 3d work.
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Experience;