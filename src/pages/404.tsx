import {Head} from "~/components/shared/Head";

function Page404() {
  return (
    <>
      <Head title={'The page is not found'}></Head>
      <div className="flex flex-col items-center">
      <h1>404</h1>
      <h3>Not found</h3>
      </div>
      
    </>
  )
}

export default Page404
