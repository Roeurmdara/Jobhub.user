"use client"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const MyApplications = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showNewFeature, setShowNewFeature] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate();
  const handleBackToHomepage = () => {
    navigate('/');
  }
  const tabs = [
    { name: "All", count: 45 },
    { name: "In Review", count: 34 },
    { name: "Interviewing", count: 18 },
    { name: "Assessment", count: 5 },
    { name: "Offered", count: 2 },
    { name: "Hired", count: 1 },
  ]

  const applications = [
   {
    id: 1,
    company: "Nomad",
    logo: "https://logo.clearbit.com/nomad.io",
    role: "Social Media Assistant",
    dateApplied: "24 July 2021",
    status: "In Review",
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 2,
    company: "Udacity",
    logo: "https://logo.clearbit.com/udacity.com",
    role: "Social Media Assistant",
    dateApplied: "20 July 2021",
    status: "Shortlisted",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    company: "Packer",
    logo: "https://logo.clearbit.com/packer.io",
    role: "Social Media Assistant",
    dateApplied: "16 July 2021",
    status: "Offered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 4,
    company: "Divvy",
    logo: "https://logo.clearbit.com/getdivvy.com",
    role: "Social Media Assistant",
    dateApplied: "14 July 2021",
    status: "Interviewing",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 5,
    company: "DigitalOcean",
    logo: "https://logo.clearbit.com/digitalocean.com",
    role: "Social Media Assistant",
    dateApplied: "10 July 2021",
    status: "Unsuitable",
    statusColor: "bg-red-100 text-red-800",
  },
  {
    id: 6,
    company: "DigitalOcean",
    logo: "https://logo.clearbit.com/digitalocean.com",
    role: "Social Media Assistant",
    dateApplied: "10 July 2021",
    status: "Unsuitable",
    statusColor: "bg-red-100 text-red-800",
  },
  {
    id: 7,
    company: "DigitalOcean",
    logo: "https://logo.clearbit.com/digitalocean.com",
    role: "Social Media Assistant",
    dateApplied: "10 July 2021",
    status: "Unsuitable",
    statusColor: "bg-red-100 text-red-800",
  },
  {
    id: 8,
    company: "DigitalOcean",
    logo: "https://logo.clearbit.com/digitalocean.com",
    role: "Social Media Assistant",
    dateApplied: "10 July 2021",
    status: "Unsuitable",
    statusColor: "bg-red-100 text-red-800",
  },
  {
    id: 9,
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    role: "Software Engineer",
    dateApplied: "01 July 2021",
    status: "In Review",
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 10,
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    role: "Data Scientist",
    dateApplied: "28 June 2021",
    status: "Interviewing",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 11,
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    role: "UX Designer",
    dateApplied: "25 June 2021",
    status: "Offered",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 12,
    company: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    role: "Product Manager",
    dateApplied: "20 June 2021",
    status: "Hired",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 13,
    company: "Facebook",
    logo: "https://logo.clearbit.com/facebook.com",
    role: "Research Scientist",
    dateApplied: "15 June 2021",
    status: "Assessment",
    statusColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 14,
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    role: "DevOps Engineer",
    dateApplied: "10 June 2021",
    status: "In Review",
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 15,
    company: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    role: "Frontend Developer",
    dateApplied: "05 June 2021",
    status: "Shortlisted",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 16,
    company: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    role: "Backend Developer",
    dateApplied: "01 June 2021",
    status: "Unsuitable",
    statusColor: "bg-red-100 text-red-800",
  },
 ]

  const applicationsPerPage = 5; // Number of applications to display per page

  const filteredApplications = applications.filter((app) => {
    const matchesTab = activeTab === "All" || app.status === activeTab;
    const matchesSearch = app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredApplications.length / applicationsPerPage);

  // Get current applications for the active page
  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = filteredApplications.slice(indexOfFirstApplication, indexOfLastApplication);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
    setCurrentPage(1) // Reset to first page when tab changes
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1); // Reset to first page when search query changes
  }

  const handleFilter = () => {
    console.log("Filter clicked")
  }

  const handleApplicationAction = (applicationId) => {
    console.log("Action clicked for application:", applicationId)
  }

  const handleImageError = (e) => {
    // Fallback to company initial if image fails to load
    const companyName = e.target.alt
    const initial = companyName.charAt(0).toUpperCase()

    // Create a colored div as fallback
    const fallbackDiv = document.createElement("div")
    fallbackDiv.className =
      "w-10 h-10 rounded-lg bg-gray-500 flex items-center justify-center text-white font-medium text-sm"
    fallbackDiv.textContent = initial

    e.target.parentNode.replaceChild(fallbackDiv, e.target)
  }

  // Function to generate an array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Number of page buttons to display directly

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Logic to show a limited number of pages with ellipsis
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        for (let i = 1; i <= maxPagesToShow - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - (maxPagesToShow - 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - Math.floor(maxPagesToShow / 2) + 1; i <= currentPage + Math.floor(maxPagesToShow / 2) - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="min-h-screen  sm:ml-64">
      <div className="p-4 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Applications</h1>
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors" onClick={handleBackToHomepage}>
            Back to homepage
          </button>
        </div>

        {/* Welcome Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Keep it up, Jake</h2>
              <p className="text-gray-600">Here is job applications status from July 19 - July 25.</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Jul 19 - Jul 25</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* New Feature Notification */}
        {showNewFeature && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-1">New Feature</h3>
                <p className="text-blue-800 text-sm">
                  You can request a follow-up 7 days after applying for a job if the application status is in review.
                  Only one follow-up is allowed per job.
                </p>
              </div>
              <button onClick={() => setShowNewFeature(false)} className="text-blue-600 hover:text-blue-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Status Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.name
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.name} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          {/* Applications History */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Applications History</h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <button
                  onClick={handleFilter}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
                    />
                  </svg>
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">#</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Company Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Roles</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Date Applied</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentApplications.length > 0 ? (
                    currentApplications.map((app, index) => (
                    <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-900">{indexOfFirstApplication + index + 1}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                              src={app.logo || "/placeholder.svg"}
                              alt={app.company}
                              className="w-full h-full object-cover"
                              onError={handleImageError}
                            />
                          </div>
                          <span className="font-medium text-gray-900">{app.company}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">{app.role}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{app.dateApplied}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${app.statusColor}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleApplicationAction(app.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                                No applications found for the current selection.
                            </td>
                        </tr>
                    )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredApplications.length > 0 && (
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={index} className="text-gray-500">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyApplications