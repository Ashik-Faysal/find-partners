import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <iframe width={300} height={300} src="https://lottie.host/?file=c2a56f08-ad71-4ec0-88bd-19e0d9045f8b/JmkSyd7p16.json"></iframe>
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold text-red-500 md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
