import { Head } from '~/components/shared/Head';

function Index() {

  return (
    <>
      <Head title="Andrew Closson" />
      
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src='assets/Logo.svg'/>
          <div>
          <h1 className="text-right">Andrew Closson</h1>
            <h3 className="text-right pb-6 pr-4">
              A senior software engineer focused<br/> on front-end development
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
