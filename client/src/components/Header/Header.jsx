import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-5">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              {" "}
              <Link to="/">
                <span className="ml-2 text-xl font-bold tracking-wide uppercase flex justify-center items-center ">
                  taskmanager
                </span>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm"></ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    to="/tolistitems"
                    className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200  md:w-auto rounded-xl  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-[#111827] hover:bg-gray-700  text-white"
                  >
                    Your Tasks
                  </Link>
                </div>
                <div className="sm:flex sm:gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200  md:w-auto rounded-xl  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-[#111827] hover:bg-gray-700  text-white"
                  >
                    Add Tasks
                  </Link>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
