import { Head } from '~/components/shared/Head';

import logo from '../../assets/logo.svg';

function Index() {

  return (
    <>
      <Head title="Andrew Closson" />
      <div className="flex items-center">
      <div className="hero">
        <div className="hero-content flex-col xl:flex-row-reverse">
          <div className="w-1/2 xl:w-auto"><img src={logo} className="drop-shadow-xl"/></div>
          <div>
            <h1 className="text-center xl:text-right pb-6 xl:pb-unset">Andrew Closson</h1>
            <h3 className="text-center xl:text-right pb-6 pr-0 xl:pr-4">
              A senior software engineer focused<br className="hidden lg:block"/> on front-end development
            </h3>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Index;