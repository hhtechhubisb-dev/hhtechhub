import { NavLink } from "react-router-dom";
import { Users, FolderOpen, Calendar, Megaphone } from "lucide-react";

const menuItems = [
  { title: "Members", url: "/members", icon: Users },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Future Projects", url: "/future-projects", icon: Calendar },
  { title: "Ads", url: "/ads", icon: Megaphone },
  { title: "Blogs", url: "/admin/blogs", icon: Megaphone },
  { title: "Contact Us", url: "/contactmessage", icon: Megaphone },
  { title: "Get a Quote", url: "/quoteadminpanel", icon: Megaphone },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-orange-500 text-white flex flex-col py-6 px-4">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded-lg font-bold text-white">
          C
        </div>
        <span className="text-lg font-semibold">HH TECH HUB</span>
      </div>

      <nav className="space-y-2">
        <p className="text-xs text-blue-200 uppercase tracking-wide mb-1">Navigation</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-white text-blue-800 font-medium"
                  : "bg-orange-500"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
