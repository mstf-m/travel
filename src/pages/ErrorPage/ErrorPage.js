import { useRouteError } from "react-router-dom";
import './ErrorPage.css'
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="page_404 font">
      <div className="container">
        <div className="grid">
          <div className="col-span-12">
            <div className="sm:col-span-10 sm:col-start-2 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center pb-10">404</h1>


              </div>

              <div className="contant_box_404">
                <h3 className="h2 text-5xl pb-2">
                !!It seams you're lost
                </h3>

                <p className="text-lg pb-8">!!The page you are looking for is not found</p>

                <Link to="/"><span className="bg-[#39AD31] p-5 rounded-full text-slate-50">Main page</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div id="error-page">
    //   <h1>Oops!</h1>
    //   <p>Sorry, an unexpected error has occurred.</p>
    //   <p>
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    // </div>
  );
}