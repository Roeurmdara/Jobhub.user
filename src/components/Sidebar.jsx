import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkBase =
    "flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group";

  return (
    <div>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-4 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink to="/user-dashboard" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
                  <path d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/messager" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.9.9 0 0 0-.889.875v9.25a.9.9 0 0 0 .889.875H9l3 4 3-4h4.111a.9.9 0 0 0 .889-.875v-9.25a.9.9 0 0 0-.889-.875Z"
                  />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">Messages</span>
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/my-applications" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5.4V3m0 2.4a5.34 5.34 0 0 1 5.13 5.37v1.8c0 2.39 1.87 2.98 1.87 4.18 0 .59 0 1.29-.54 1.29H5.54C5 18 5 17.3 5 16.71c0-1.19 1.87-1.79 1.87-4.18v-1.8A5.34 5.34 0 0 1 12 5.4Z"
                  />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">My Applications</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/find-job" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                  />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">Find Job</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/browse-companies" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">Browse Companies</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/my-profile" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">My Public Profile</span>
              </NavLink>
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <NavLink to="/set-detail" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13v-2a1 1 0 0 0-1-1h-.76l-.71-1.71.54-.54a1 1 0 0 0 0-1.41l-1.41-1.41a1 1 0 0 0-1.42 0l-.54.53L14 4.76V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.76l-1.71.71-.54-.53a1 1 0 0 0-1.42 0L4.93 6.34a1 1 0 0 0 0 1.41l.54.54L4.76 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.76l.71 1.71-.54.54a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.42 0l.54-.53 1.71.71V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.76l1.71-.71.54.54a1 1 0 0 0 1.42 0l1.41-1.41a1 1 0 0 0 0-1.41l-.54-.54.71-1.71H20a1 1 0 0 0 1-1Z"
                  />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" />
                </svg>
                <span className="ms-3">Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/help" className={linkBase}>
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.08 6.84a3 3 0 0 0-4.26.1M13 20h1.08A3.92 3.92 0 0 0 18 16.08V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z"
                  />
                </svg>
                <span className="ms-3">Help Center</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
