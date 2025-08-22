"use client"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"

const Usedashbord = () => {
  const [dateRange, setDateRange] = useState("Jul 19-Jul 25")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedMetric, setSelectedMetric] = useState("applications")
  const [showNotifications, setShowNotifications] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalJobsApplied: 45,
    interviewed: 18,
    rejected: 12,
    pending: 15,
    offered: 3,
    hired: 1,
    applicationStatus: {
      unsuitable: 60,
      interviewed: 40,
    },
    weeklyGrowth: {
      applications: 12,
      interviews: 5,
      responses: 8,
    },
    responseRate: 67,
    averageResponseTime: "3.2 days",
  }

  const notifications = [
    {
      id: 1,
      type: "interview",
      title: "Interview Reminder",
      message: "You have an interview with Joe Bartmann in 30 minutes",
      time: "30 mins ago",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "application",
      title: "Application Update",
      message: "Your application at Nomad has been reviewed",
      time: "2 hours ago",
      read: false,
      priority: "medium",
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      message: "Jan Mayer sent you a message",
      time: "4 hours ago",
      read: true,
      priority: "low",
    },
  ]

  const upcomingInterviews = [
    {
      id: 1,
      time: "10:30 AM",
      interviewer: "Joe Bartmann",
      position: "Senior Product Designer",
      company: "Divvy",
      type: "Video Call",
      duration: "45 mins",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "confirmed",
      meetingLink: "https://zoom.us/j/123456789",
    },
    {
      id: 2,
      time: "2:00 PM",
      interviewer: "Sarah Chen",
      position: "UX Designer",
      company: "TechFlow",
      type: "Phone Call",
      duration: "30 mins",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "pending",
    },
  
  ]

  const recentApplications = [
    {
      id: 1,
      company: "Nomad",
      logo: "https://i.pinimg.com/1200x/48/76/5d/48765dfadc72b49b98e767945c08582f.jpg",
      position: "Senior Product Designer",
      location: "Paris, France",
      type: "Full-Time",
      salary: "$85,000 - $120,000",
      dateApplied: "24 July 2021",
      status: "In Review",
      statusColor: "bg-orange-100 text-orange-800",
      progress: 60,
      nextStep: "Technical Interview",
      recruiter: "Jan Mayer",
      applicationSource: "LinkedIn",
    },
    {
      id: 2,
      company: "Udacity",
      logo: "https://i.pinimg.com/1200x/ec/4f/92/ec4f92b5c3e318b5407dbe3eb331af33.jpg",
      position: "UX/UI Designer",
      location: "New York, USA",
      type: "Full-Time",
      salary: "$75,000 - $95,000",
      dateApplied: "23 July 2021",
      status: "Interviewing",
      statusColor: "bg-blue-100 text-blue-800",
      progress: 80,
      nextStep: "Final Round",
      recruiter: "Alex Thompson",
      applicationSource: "Company Website",
    },
    {
      id: 3,
      company: "Packer",
      logo: "https://i.pinimg.com/736x/f1/f3/ce/f1f3cebb100fc6b4c9ceb69bf7a70fe6.jpg",
      position: "Product Designer",
      location: "Madrid, Spain",
      type: "Full-Time",
      salary: "$60,000 - $80,000",
      dateApplied: "22 July 2021",
      status: "Offered",
      statusColor: "bg-green-100 text-green-800",
      progress: 100,
      nextStep: "Decision Pending",
      recruiter: "Maria Garcia",
      applicationSource: "Indeed",
    },
    {
      id: 4,
      company: "TechFlow",
      logo: "https://i.pinimg.com/736x/95/63/40/956340c95eb9bd9f1269cfa8ae547e23.jpg",
      position: "Senior UX Designer",
      location: "Remote",
      type: "Full-Time",
      salary: "$90,000 - $130,000",
      dateApplied: "21 July 2021",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800",
      progress: 40,
      nextStep: "Application Closed",
      recruiter: "David Kim",
      applicationSource: "Glassdoor",
    },
    {
      id: 5,
      company: "CreativeAgency",
      logo: "https://i.pinimg.com/1200x/2e/d4/ac/2ed4ac0f7175f764de3a6311d1c73120.jpg",
      position: "Visual Designer",
      location: "Los Angeles, USA",
      type: "Contract",
      salary: "$50/hour",
      dateApplied: "20 July 2021",
      status: "Applied",
      statusColor: "bg-gray-100 text-gray-800",
      progress: 20,
      nextStep: "Waiting for Response",
      recruiter: "Lisa Wong",
      applicationSource: "AngelList",
    },
  ]

  const jobAlerts = [
    {
      id: 1,
      title: "5 new Product Designer jobs",
      location: "San Francisco, CA",
      count: 5,
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "3 new UX Designer jobs",
      location: "Remote",
      count: 3,
      time: "5 hours ago",
    },
  ]

  const weeklyActivity = [
    { day: "Mon", applications: 3, interviews: 1, responses: 2 },
    { day: "Tue", applications: 5, interviews: 0, responses: 1 },
    { day: "Wed", applications: 2, interviews: 2, responses: 3 },
    { day: "Thu", applications: 4, interviews: 1, responses: 1 },
    { day: "Fri", applications: 6, interviews: 0, responses: 2 },
    { day: "Sat", applications: 1, interviews: 0, responses: 0 },
    { day: "Sun", applications: 2, interviews: 1, responses: 1 },
  ]

  const quickActions = [
    {
      id: 1,
      title: "Find New Jobs",
      description: "Browse latest job opportunities",
      icon: "search",
      color: "bg-blue-500",
      action: () => console.log("Find jobs"),
    },
    {
      id: 2,
      title: "Update Resume",
      description: "Keep your profile current",
      icon: "document",
      color: "bg-green-500",
      action: () => console.log("Update resume"),
    },
    {
      id: 3,
      title: "Practice Interview",
      description: "Prepare for upcoming interviews",
      icon: "microphone",
      color: "bg-purple-500",
      action: () => console.log("Practice interview"),
    },
    {
      id: 4,
      title: "Network",
      description: "Connect with professionals",
      icon: "users",
      color: "bg-orange-500",
      action: () => console.log("Network"),
    },
  ]

 const handleBackToHomepage = () => {
  navigate('/');
};

  const handleViewAllApplications = () => {
    console.log("View all applications clicked")
  }

  const handleViewApplicationsHistory = () => {
    console.log("View applications history clicked")
  }

  const handleJoinInterview = (interviewId) => {
    console.log("Joining interview:", interviewId)
  }

  const handleApplicationAction = (applicationId, action) => {
    console.log("Application action:", applicationId, action)
  }

  const handleImageError = (e) => {
    const companyName = e.target.alt
    const initial = companyName.charAt(0).toUpperCase()
    const fallbackDiv = document.createElement("div")
    fallbackDiv.className =
      "w-full h-full rounded-lg bg-blue-500 flex items-center justify-center text-white font-medium text-sm"
    fallbackDiv.textContent = initial
    e.target.parentNode.replaceChild(fallbackDiv, e.target)
  }
  const navigate = useNavigate()
  const handleTabChange = (tab) => {
    navigate(`/`)
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Applied":
        return "📝"
      case "In Review":
        return "👀"
      case "Interviewing":
        return "🎤"
      case "Offered":
        return "🎉"
      case "Rejected":
        return "❌"
      default:
        return "📋"
    }
  }

  const renderIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      search: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      document: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      microphone: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      users: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
    }
    return icons[iconName] || null
  }

  return (
    <div className="min-h-screen  sm:ml-64">
      <div className="p-4 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-600 hover:text-gray-800 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4.828 4.828A4 4 0 015.5 4H9v1a3 3 0 006 0V4h3.5c.276 0 .526.111.707.293l.707.707M12 12v.01"
                  />
                </svg>
                {notifications.filter((n) => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${!notification.read ? "bg-blue-50" : ""}`}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${notification.priority === "high" ? "bg-red-500" : notification.priority === "medium" ? "bg-yellow-500" : "bg-green-500"}`}
                          ></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                            <p className="text-gray-600 text-sm">{notification.message}</p>
                            <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleBackToHomepage}
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Back to homepage
            </button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Good morning, Jake</h2>
            <p className="text-gray-600">
              Here is what's happening with your job search applications from July 19 - July 25.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-sm text-green-600 font-medium">
                ↗ {stats.weeklyGrowth.applications}% more applications this week
              </span>
              <span className="text-sm text-blue-600 font-medium">Response rate: {stats.responseRate}%</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-6 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="Jul 19 - Jul 25">Jul 19 - Jul 25</option>
              <option value="Jul 12 - Jul 18">Jul 12 - Jul 18</option>
              <option value="Jul 5 - Jul 11">Jul 5 - Jul 11</option>
              <option value="This Month">This Month</option>
              <option value="Last 3 Months">Last 3 Months</option>
            </select>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={action.action}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left"
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white mb-3`}>
                {renderIcon(action.icon)}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{action.title}</h3>
              <p className="text-gray-600 text-xs">{action.description}</p>
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Jobs Applied */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Jobs Applied</h3>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stats.totalJobsApplied}</div>
            <div className="text-sm text-green-600">+{stats.weeklyGrowth.applications} this week</div>
          </div>

          {/* Interviewed */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Interviewed</h3>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stats.interviewed}</div>
            <div className="text-sm text-green-600">+{stats.weeklyGrowth.interviews} this week</div>
          </div>

          {/* Response Rate */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Response Rate</h3>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stats.responseRate}%</div>
            <div className="text-sm text-green-600">+{stats.weeklyGrowth.responses} responses</div>
          </div>

          {/* Average Response Time */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Avg Response Time</h3>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stats.averageResponseTime}</div>
            <div className="text-sm text-gray-500">Industry avg: 5.1 days</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Jobs Applied Status */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Application Status Breakdown</h3>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray={`${stats.applicationStatus.interviewed}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-900">{stats.applicationStatus.interviewed}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  <span className="text-sm text-gray-600">{stats.applicationStatus.interviewed}% Interviewed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                  <span className="text-sm text-gray-600">{stats.applicationStatus.unsuitable}% Other</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Pending</span>
                <span className="font-medium">{stats.pending}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Rejected</span>
                <span className="font-medium">{stats.rejected}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Offered</span>
                <span className="font-medium text-green-600">{stats.offered}</span>
              </div>
            </div>
            <button
              onClick={handleViewAllApplications}
              className="mt-4 w-full text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center space-x-1"
            >
              <span>View All Applications</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Weekly Activity Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Weekly Activity</h3>
            <div className="space-y-4">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 text-xs text-gray-500">{day.day}</div>
                  <div className="flex-1 flex items-center space-x-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(day.applications / 6) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 w-4">{day.applications}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Applications</span>
              </div>
            </div>
          </div>

          {/* Upcoming Interviews */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Today's Interviews</h3>
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900">Today, 26 November</p>
            </div>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={interview.avatar || "/placeholder.svg"}
                        alt={interview.interviewer}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{interview.time}</p>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            interview.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {interview.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-900 font-medium">{interview.interviewer}</p>
                      <p className="text-xs text-gray-600">
                        {interview.position} at {interview.company}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">{interview.type}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{interview.duration}</span>
                      </div>
                      {interview.status === "confirmed" && (
                        <button
                          onClick={() => handleJoinInterview(interview.id)}
                          className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700"
                        >
                          {interview.type === "Video Call"
                            ? "Join Call"
                            : interview.type === "Phone Call"
                              ? "Call Now"
                              : "Get Directions"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Alerts</h3>
            <div className="space-y-3">
              {jobAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{alert.title}</p>
                    <p className="text-sm text-gray-600">
                      {alert.location} • {alert.time}
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                    View Jobs
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Tips</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium text-green-900">Great response rate!</p>
                <p className="text-sm text-green-700">Your response rate is above average. Keep up the good work!</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <p className="font-medium text-yellow-900">Optimize your profile</p>
                <p className="text-sm text-yellow-700">Add more skills to increase your visibility to recruiters.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Applications History */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Applications History</h3>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">Filter</button>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">Export</button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div
                  key={application.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={application.logo || "/placeholder.svg"}
                          alt={application.company}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{application.position}</h4>
                          <span className="text-lg">{getStatusIcon(application.status)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {application.company} • {application.location} • {application.type}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>💰 {application.salary}</span>
                          <span>👤 {application.recruiter}</span>
                          <span>📍 {application.applicationSource}</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-900">{application.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                application.status === "Offered"
                                  ? "bg-green-500"
                                  : application.status === "Rejected"
                                    ? "bg-red-500"
                                    : application.status === "Interviewing"
                                      ? "bg-blue-500"
                                      : "bg-yellow-500"
                              }`}
                              style={{ width: `${application.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Next: {application.nextStep}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Applied</p>
                        <p className="text-sm font-medium text-gray-900">{application.dateApplied}</p>
                      </div>
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${application.statusColor}`}
                      >
                        {application.status}
                      </span>
                      <div className="relative">
                        <button
                          className="text-gray-400 hover:text-gray-600 p-1"
                          onClick={() => handleApplicationAction(application.id, "menu")}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleViewApplicationsHistory}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 mx-auto"
              >
                <span>View all applications history</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usedashbord
