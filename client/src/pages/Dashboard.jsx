import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfileComponent from "../components/DashProfileComponent";
import DashSidebarComponent from "../components/DashSidebarComponent";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    // console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  console.log(`Tab on Dashboard.jsx ${tab}`)

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebarComponent />
      </div>
      {/* User Profile Tabs*/}
      {/* tab options: DashProfile, DashPosts, DashComments, DashboardComp */}
      {/* profile... */}
      {tab === "profile" && <DashProfileComponent />}
    </div>
  );
}
