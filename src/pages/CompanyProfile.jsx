import { MapPin, Calendar, Users, Briefcase, Globe, Mail, Share2, Linkedin, Facebook, Twitter, ChevronDown, MessageCircle, CheckCircle, AlertTriangle } from 'lucide-react'
const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-600">Jobfolio</div>
              <nav className="hidden md:flex space-x-6">
                <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                  <span>Home</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                  <span>Find work</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  For Employers
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Companies
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Blog
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Log in
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Post a Job</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-6">
            {/* Company Logo */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">#</div>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Slack Company</h1>
                <CheckCircle className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Member since 2020</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-500">
                <span className="text-sm">Share on</span>
                <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                <Share2 className="w-4 h-4 cursor-pointer hover:text-blue-600" />
              </div>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                <MessageCircle className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium">About</button>
                <button className="py-2 px-1 text-gray-500 hover:text-gray-700">Open jobs</button>
              </nav>
            </div>

            {/* About Company */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">About Company</h2>
                <button className="flex items-center space-x-1 text-red-500 hover:text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">Report Company</span>
                </button>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Slack Technologies, Inc. is a prominent software company headquartered in San Francisco, California.
                  Founded in 2009 by Stewart Butterfield, Eric Costello, Cal Henderson, and Serguei Mourachov, the
                  company has revolutionized team communication and collaboration with its innovative platform, Slack.
                </p>

                <p>
                  Slack offers various subscription plans to cater to the needs of different businesses, from small
                  startups to large enterprises. These plans include free, standard, plus, and enterprise versions, each
                  with its own set of features and capabilities. Since its official launch in 2013, Slack has
                  experienced remarkable growth and adoption across various industries.
                </p>

                <p>
                  In December 2020, Salesforce, a leading customer relationship management (CRM) software company,
                  announced its intention to acquire Slack Technologies, Inc. The acquisition aimed to combine
                  Salesforce's CRM capabilities with Slack's collaboration platform to create a more integrated and
                  comprehensive solution for businesses.
                </p>

                <p>
                  As part of Salesforce, Slack continues to evolve and innovate, offering new features and capabilities
                  to support remote work, hybrid work models, and the changing landscape of business communication and
                  collaboration.
                </p>

                <p>
                  At the heart of Slack's offerings is its eponymous collaboration platform, Slack. Slack is designed to
                  streamline communication within teams and organizations, enabling users to collaborate, share files,
                  exchange messages, and integrate with a wide range of other software tools. It provides an intuitive
                  interface that organizes conversations into channels, making it easy for teams to discuss projects,
                  share updates, and stay informed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Company Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">300-500</div>
                    <div className="text-sm text-gray-500">Total Employees</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">102</div>
                    <div className="text-sm text-gray-500">Current open position</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium text-gray-900">www.slack.com</div>
                    <div className="text-sm text-gray-500">Website</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium text-gray-900">Los Angeles, CA</div>
                    <div className="text-sm text-gray-500">Location</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium text-gray-900">info.rachel@slack.com</div>
                    <div className="text-sm text-gray-500">Contact</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Share on</span>
                  <div className="flex space-x-2">
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                    <Facebook className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                    <Twitter className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                    <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p>Los Angeles, CA</p>
                  <p className="text-sm">Interactive map would be here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default CompanyProfile