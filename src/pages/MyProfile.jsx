"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
const MyProfile = () => {
  // Profile data state - no API needed
  const [profileData, setProfileData] = useState({
    name: "Jake Gyll",
    title: "Product Designer",
    company: "Twitter",
    location: "Manchester, UK",
    status: "OPEN FOR OPPORTUNITIES",
    about:
      "I'm a product designer - filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I'm passionate about designing digital products that have a positive impact on the world.\n\nFor 10 years, I've specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.",
    email: "jakegyll@email.com",
    phone: "+44 1245 572 135",
    languages: "English, French",
    profileImage: "https://i.pinimg.com/736x/30/64/76/306476051781a257cdc54dfd86394260.jpg",
    socialLinks: {
      instagram: "instagram.com/jakegyll",
      twitter: "twitter.com/jakegyll",
      website: "www.jakegyll.com",
    },
  })

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Product Designer",
      company: "Twitter",
      type: "Full-Time",
      duration: "Jun 2019 - Present (1y 1m)",
      location: "Manchester, UK",
      description:
        "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    },
    {
      id: 2,
      title: "Growth Marketing Designer",
      company: "GoDaddy",
      type: "Full-Time",
      duration: "Jun 2011 - May 2019 (8y)",
      location: "Manchester, UK",
      description:
        "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
    },
  ])

  // Simple event handlers - no API calls
  const handleEditProfile = () => {
    console.log("Edit profile clicked")
    // You can add modal logic here later
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Create a local URL for the image preview
      const imageUrl = URL.createObjectURL(file)
      setProfileData((prev) => ({
        ...prev,
        profileImage: imageUrl,
      }))
      console.log("Image uploaded:", file.name)
    }
  }

  const handleBackToHomepage = () => {
    navigate('/');
  }
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 sm:ml-64">
      <div className="p-4 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <button
            onClick={handleBackToHomepage}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Back to homepage
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header Card */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-600 px-6 py-8 text-white relative">
                <button
                  onClick={handleEditProfile}
                  className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>

                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white border-opacity-30">
                      <img
                        src={profileData.profileImage || "/placeholder.svg"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      title="Click to upload new profile image"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">{profileData.name}</h2>
                    <p className="text-purple-100 mb-2">
                      {profileData.title} at <span className="font-medium">{profileData.company}</span>
                    </p>
                    <div className="flex items-center text-purple-100 mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {profileData.location}
                    </div>

                    <div className="inline-flex items-center px-3 py-1 bg-green-500 bg-opacity-20 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-100">{profileData.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <button
                  onClick={handleEditProfile}
                  className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* About Me Section */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">About Me</h3>
                  <button onClick={handleEditProfile} className="text-blue-600 hover:text-blue-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{profileData.about}</p>
              </div>
            </div>

            {/* Experiences Section */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Experiences</h3>
                  <button className="text-blue-600 hover:text-blue-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className={`${index !== experiences.length - 1 ? "border-b border-gray-200 pb-6" : ""}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          {exp.company === "Twitter" ? (
                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          ) : (
                            <div className="w-8 h-8 bg-gray-800 rounded text-white flex items-center justify-center text-xs font-bold">
                              G
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-base font-semibold text-gray-900">{exp.title}</h4>
                              <p className="text-gray-600 text-sm">
                                {exp.company} • {exp.type} • {exp.duration}
                              </p>
                              <p className="text-gray-500 text-sm">{exp.location}</p>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </button>
                          </div>

                          <p className="text-gray-600 text-sm mt-3 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Additional Details */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Additional Details</h3>
                <button onClick={handleEditProfile} className="text-blue-600 hover:text-blue-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">{profileData.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">{profileData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Languages</p>
                    <p className="text-sm text-gray-600">{profileData.languages}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Social Links</h3>
                <button onClick={handleEditProfile} className="text-blue-600 hover:text-blue-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Instagram</p>
                    <a
                      href={`https://${profileData.socialLinks.instagram}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {profileData.socialLinks.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Twitter</p>
                    <a
                      href={`https://${profileData.socialLinks.twitter}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {profileData.socialLinks.twitter}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Website</p>
                    <a
                      href={`https://${profileData.socialLinks.website}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {profileData.socialLinks.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
