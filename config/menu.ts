export const MENU_ITEMS = [
    { label: "Home", href: "/" },
    { 
      label: "About", 
      href: "/about",
      children: [
        { label: "Our History", href: "/about/history" },
        { label: "Vision & Mission", href: "/about/vision" },
      ]
    },
    { 
      label: "Academics", 
      href: "/academics",
      children: [
        { label: "Kindergarten", href: "/academics/kindergarten" },
        { label: "Elementary", href: "/academics/elementary" },
      ]
    },
    { label: "Student Life", href: "/student-life" },
    // { label: "News", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    // { label: "Calendar", href: "/calendar" },
  ];