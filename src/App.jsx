// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import Layouts
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import SidebarOnlyLayout from "./layouts/SidebarOnlyLayout";

// Import Components for Private Route
import PrivateRoute from "./components/PrivateRoute";

// Import Authentication Context
import { AuthProvider, useAuth } from './context/AuthContext';

// Import Pages
// HomePage is now integrated into Loading.jsx as the initial public view
import Loading from "./pages/Loading"; // This is now your public homepage content
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";
import Help from "./pages/Help";
import MyProfile from "./pages/MyProfile";
import MyApplications from "./pages/MyApplications";
import Setdetail from "./pages/Setdetail";
import Messager from "./pages/Messager";
import Usedashbord from "./pages/Usedashbord";
import Findjob from "./pages/Findjob";
import BrowseCompanies from "./pages/BrowseCompanies";

function AppContent() {
  const { isLoading } = useAuth(); // We only need isLoading here for a global app-level check

  // If the authentication status is still being checked by AuthProvider,
  // show a very brief global loading indicator before Loading.jsx takes over.
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">Initializing application...</div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes (no auth needed) */}
      {/* These routes will use the PublicLayout */}
      <Route element={<PublicLayout />}>
        {/* The root path now points to the Loading component, which acts as your public homepage */}
        <Route path="/" element={<Loading />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Private Routes Group */}
      {/* All routes nested within this PrivateRoute element will require authentication */}
      <Route element={<PrivateRoute />}>
        {/* Private Routes with SidebarOnlyLayout */}
        {/* These routes will use the SidebarOnlyLayout for authenticated users */}
        <Route element={<SidebarOnlyLayout />}>
          <Route path="/find-job" element={<Findjob />} />
          <Route path="/browse-companies" element={<BrowseCompanies />} />
          <Route path="/user-dashboard" element={<Usedashbord />} />
        </Route>

        {/* Private Routes with DashboardLayout */}
        {/* These routes will use the DashboardLayout for authenticated users */}
        <Route element={<DashboardLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-applications" element={<MyApplications />} />
          <Route path="/messager" element={<Messager />} />
          <Route path="/set-detail" element={<Setdetail />} />
        </Route>
      </Route>

      {/* Catch-all route for any undefined paths */}
      {/* Redirects based on authentication status (handled by PrivateRoute or direct to register) */}
      <Route
        path="*"
        element={<Navigate to="/" replace />} // Redirect any unknown path back to the root (Loading.jsx)
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* AuthProvider wraps the entire application to provide authentication context */}
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
