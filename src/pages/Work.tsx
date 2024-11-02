function Work() {
    return (
      <>
        <div className="px-0 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card bg-p-metal-900 rounded-none w-full lg:w-90 xl:w-96">
              <figure className="">
                <img
                  className=""
                  src="assets/dealforce-screenshot.png"
                  alt="Screenshot" />
              </figure>
              <div className="card-body px-8 pt-8 pb-4">
                <h2 className="card-title text-p-tan-light-700">Dealforce</h2>
                <p>A marketplace app to shop for businesses.</p>
                <div className="card-actions justify-end">
                <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">React</div>
                <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">Next</div>
                </div>
              </div>
            </div>
            <div className="card bg-p-metal-900 rounded-none w-full lg:w-90 xl:w-96">
              <figure>
                <img
                  src="assets/placeholder-screenshot.jpg"
                  alt="Screenshot" />
              </figure>
              <div className="card-body px-8 pt-8 pb-4">
                <h2 className="card-title text-p-tan-light-700">Hero</h2>
                <p>Internal safety incident reporting tool created for Johns Hopkins.</p>
                <div className="card-actions justify-end">
                <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">Angular</div>
                </div>
              </div>
            </div>
            <div className="card bg-p-metal-900 rounded-none w-full lg:w-90 xl:w-96">
              <figure>
                <img
                  src="assets/placeholder-screenshot.jpg"
                  alt="Screenshot" />
              </figure>
              <div className="card-body px-8 pt-8 pb-4">
                <h2 className="card-title text-p-tan-light-700">CAMS</h2>
                <p className="">Internal administration tool created for Crash Champions.</p>
                <div className="card-actions justify-end pt-4">
                  <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">React</div>
                  <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">Tailwind CSS</div>
                  <div className="badge pt-1 text-p-tan-light-700 bg-p-tan-light-950">Tanstack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Work;