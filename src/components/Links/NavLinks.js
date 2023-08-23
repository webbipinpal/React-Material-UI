import React from "react";
import ReactDOM from "react-dom";
import EventList from "../Content/Event/EventList";
import NewsList from "../Content/News/NewsList";
import Article from "../Content/Article/Article";
import {
  FiZap,
  FiFileText,
  FiLayout,
  FiType,
  FiCheckCircle
} from "react-icons/fi";
export const MenuItemLink = () => {
  return [
    {
      label: "Home",
      path: "/",
      icons: <FiZap />,
      class: ""
    },
    {
      label: "Dashboard",
      path: "/dashboard",
      icons: <FiZap />,
      class: ""
    },
    {
      label: "My Profile",
      path: "#",
      icons: <FiFileText />,
      class: "",
      isChildren: true,
      dropDownClass: {
        "data-toggle": "collapse",
        "data-target": "#content_drp"
      },
      childItem: MyProfileMenu()
    },
    {
      label: "Services",
      path: "/services",
      icons: <FiLayout />,
      class: ""
    },
    {
      label: "Resources",
      path: "/resources",
      icons: <FiType />,
      class: ""
    },
    {
      label: "Article",
      path: "/article",
      icons: <FiType />,
      class: ""
    },
    {
      label: "Login",
      path: "/login",
      icons: <FiType />,
      class: ""
    },
    {
      label: "Signup",
      path: "/signup",
      icons: <FiType />,
      class: ""
    }
  ];
};

export const MyProfileMenu = () => {
  return [
    {
      label: "View Profile",
      path: "/user",
      class: ""
    },
    {
      label: "Edit Profile",
      path: "/",
      class: ""
    }
  ];
};

export const UserProfileTabs = [
  {
    label: "Personal",
    icon: <FiCheckCircle />,
    status: "Completed",
    path: "#"
  },
  {
    label: "Summary",
    icon: <FiCheckCircle />,
    status: "Update",
    path: "#"
  },

  {
    label: "Education",
    icon: <FiCheckCircle />,
    status: "Update",
    path: "#"
  }
];

export const UserProfileRole = [
  {
    value: "st",
    label: "Student"
  },
  {
    value: "fa",
    label: "Faculty"
  },
  {
    value: "al",
    label: "Alumani"
  },
  {
    value: "wm",
    label: "Web Master"
  }
];
export const ProfileTab = [
  {
    label: "Feed",
    class: "d-flex h-50p align-items-center nav-link",
    path: "#feed",
    id: 1
  },
  {
    label: "Projects",
    class: "d-flex h-50p align-items-center nav-link",
    path: "#projects",
    id: 2
  },
  {
    label: "News",
    class: "d-flex h-50p align-items-center nav-link",
    path: "#news",
    id: 3
  },
  {
    label: "Events",
    class: "d-flex h-50p align-items-center nav-link",
    path: "#events",
    id: 4
  }
];
export const ProfileTabLink = [
  {
    label: "Feed",
    content: <Article />,
    class: "tab-pane",
    id: 1
  },
  {
    label: "Projects",
    content: "Projects Content",
    class: "tab-pane",
    id: 2
  },
  {
    label: "News",
    content: <NewsList />,
    class: "tab-pane",
    id: 3
  },
  {
    label: "Events",
    content: <EventList />,
    class: "tab-pane",
    id: 4
  }
];
