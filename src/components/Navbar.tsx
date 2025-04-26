"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Background", href: "/background" },
  { label: "Data", href: "/data" },
  {
    label: "Visualizations",
    href: "/visualizations",
    subItems: [
      { label: "Google Trends", href: "/visualizations/google-trends" },
      { label: "Sentiment Analysis", href: "/visualizations/sentiment" },
      { label: "Debt Index", href: "/visualizations/debt-index" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Conclusion", href: "/conclusion" },
  { label: "References", href: "/references" },
];

export default function Navbar() {
  const path = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight hover:text-blue-200 transition-colors"
          >
            FTPL Research
          </Link>
          <ul className="flex items-center space-x-1 sm:space-x-4">
            {navItems.map((item) => {
              const isActive = path === item.href || 
                (item.subItems?.some(sub => path === sub.href));

              if (item.subItems) {
                const isOpen = openDropdown === item.href;
                return (
                  <li 
                    key={item.href} 
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`
                        px-3 py-2 rounded-md text-sm font-medium transition-all
                        inline-flex items-center gap-1
                        hover:bg-blue-800 hover:text-white
                        ${isActive ? "bg-blue-800 text-white" : "text-blue-100"}
                      `}
                      onClick={() => setOpenDropdown(isOpen ? null : item.href)}
                    >
                      {item.label}
                      <svg 
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <ul className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        {item.subItems.map((subItem) => {
                          const isSubActive = path === subItem.href;
                          return (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className={`
                                  block px-4 py-3 text-sm transition-colors
                                  ${isSubActive 
                                    ? "bg-blue-50 text-blue-900 font-medium" 
                                    : "text-gray-700 hover:bg-gray-50"
                                  }
                                `}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      px-3 py-2 rounded-md text-sm font-medium transition-all
                      hover:bg-blue-800 hover:text-white
                      ${isActive ? "bg-blue-800 text-white" : "text-blue-100"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
