import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center bg-gray-200  h-screen">
      <div className="text-center">
        <h1 className="text-3xl mb-2">Oops!</h1>
        <p className="text-md">Sorry, an unexpected error has occurred.</p>
        <p className="my-3 text-red-600 font-medium rounded drop-shadow p-4">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          {" "}
          <button className="bg-orange-400 text-white p-3 rounded">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
