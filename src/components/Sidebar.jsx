import { useState } from "react";
import { Home, Settings, Users, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home className="w-5 h-5" /> },
    {
      name: "Add Students",
      path: "/add-students",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        onClick={toggleMenu}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 md:translate-x-0 md:static md:w-64 lg:w-72 h-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo or Branding */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-2xl font-bold text-indigo-600">MyApp</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 flex-1 ">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 ${
                  location.pathname === item.path
                    ? "bg-indigo-500 text-white"
                    : ""
                }`}
              >
                <div className="mr-3">{item.icon}</div>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
