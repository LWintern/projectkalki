
"use client"
import react from "react";
import { useEffect,useState } from "react";
import {
    NavigationMenu, 
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
  import { Button } from "@/components/ui/button";
  import { Menu, X } from "lucide-react";
  import { ArrowRight } from "lucide-react";
import Link from "next/link";

const navigationItems = [
    { name: "Home", href: "https://www.projectkalki.com/#hero", sectionId: "hero" },
    { name: "About", href: "https://www.projectkalki.com/#language-model", sectionId: "language-model" },
    // { name: "Services", href: "#collaborator", sectionId: "collaborator" },
    // { name: "Contact", href: "#tortoise", sectionId: "tortoise" },
    
    { name: "Contributor", href: "https://www.projectkalki.com/#collaborator", sectionId: "collaborator" },
    { name: "Roadmap", href: "https://www.projectkalki.com/#roadmap", sectionId: "roadmap" },
    { name: "Infrastructure", href: "https://www.projectkalki.com/#infrastructure", sectionId: "india-ai" },
    { name: "Contact Us", href: "https://www.projectkalki.com/#join", sectionId: "join" },
    {name:"Upskilling",href:"/upskills",sectionId:""}
  
  ];
  
  const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
    <NavigationMenuLink
      href={href}
      className={`
        relative text-sm font-medium px-3 py-2
        transition-all duration-300 ease-in-out
        ${isActive ? 'text-white' : 'text-gray-200'}
        after:content-['']
        after:absolute
        after:w-0
        after:h-0.5
        after:bg-white
        after:left-0
        after:bottom-0
        after:transition-all
        after:duration-300
        ${isActive ? 'after:w-full' : 'hover:after:w-full'}
      `}
    >
      {children}
    </NavigationMenuLink>
  );
  
  const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
  
  
  
    return (
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${scrolled 
            ? 'bg-[#07038d] backdrop-blur-md shadow-lg py-2' 
            : 'bg-[#07038d] py-4'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <div className="flex-shrink-0 w-24 transition-transform duration-300 hover:scale-105">
              <Link href="/">
              <img 
                className="w-16 h-12 object-contain" 
                src="/assets/logo.png" 
                alt="Logo"
                loading="eager"
              />
              </Link>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-2">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <NavLink 
                        href={item.href}
                        isActive={activeSection === item.sectionId}
                      >
                        {item.name}
                      </NavLink>
                    
                    </NavigationMenuItem>
                  ))}
  
  
  {/* Join our team */}
  
  <NavigationMenuItem>
                    <a className=" text-sm font-medium px-3 py-2 text-gray-200
                    
                    after:content-['']
        after:absolute
        after:w-0
        after:h-0.5
        after:bg-white
        after:left-0
        after:bottom-0
        after:transition-all
        after:duration-300
                    " href="https://forms.gle/bCrh7DJSyvwE5ZmC7" target="blank" >
                      <Button 
                variant="default"
                className="bg-white text-black hover:bg-white hover:text-black"
              >  Join our Team 
              
               {/* <ArrowRight className=" h-4 w-4 transition-transform group-hover:translate-x-2" /> */}
              
              </Button>
                    </a>
                  </NavigationMenuItem>
  
  
  
                  <NavigationMenuItem>
                    <a className=" text-sm font-medium px-3 py-2 text-gray-200
                    
                    after:content-['']
        after:absolute
        after:w-0
        after:h-0.5
        after:bg-white
        after:left-0
        after:bottom-0
        after:transition-all
        after:duration-300
                    " href="https://forms.gle/QMamhHCGvGpQGf896" target="blank" >
                      <Button 
                variant="default"
                className="bg-white text-black hover:bg-white hover:text-black   "
              >  Try Now  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" /></Button>
                    </a>
                  </NavigationMenuItem>
  
  
  
                </NavigationMenuList>
              </NavigationMenu>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden w-24 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-white/10 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </Button>
            </div>
          </div>
  
          {/* Mobile Navigation */}
          <div
            className={`
              md:hidden
              transition-all duration-300 ease-in-out
              ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              overflow-hidden
            `}
          >
            <div className="px-2 pt-2 pb-2 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-3 py-2 text-base font-medium
                    transition-all duration-300
                    hover:bg-white/10 hover:text-white rounded-md
                    ${activeSection === item.sectionId ? 'text-white bg-white/10' : 'text-gray-200'}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
  
              
              ))}
  
  {/* Join our Team in desktop menu  */}
  
  <a className={`
                    block px-3 py-2 text-base font-medium
                    transition-all duration-300 text-gray-200
                    hover:bg-white/10 hover:text-white rounded-md
                     text-white `} href="https://forms.gle/bCrh7DJSyvwE5ZmC7">Join our Team</a>
  
              <a className={`
                    block px-3 py-2 text-base font-medium
                    transition-all duration-300 text-gray-200
                    hover:bg-white/10 hover:text-white rounded-md
                     text-white `} href="https://forms.gle/QMamhHCGvGpQGf896">Try Now</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;