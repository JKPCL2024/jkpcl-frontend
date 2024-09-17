import {
  Users,
  Settings,
  LayoutGrid,
  LucideIcon,
  NotebookPen,
  Newspaper,
  User,
  Images
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getUserMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/user",
          label: "Dashboard",
          active: pathname.includes("/dashboard/user"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Members",
          active: pathname.includes("/dashboard/user/members"),
          icon: Users,
          submenus: [
            {
              href: "/dashboard/user/members",
              label: "All Members",
              active: pathname === "/dashboard/user/members"
            },
            {
              href: "/dashboard/user/members/new",
              label: "New Member",
              active: pathname === "/dashboard/user/members/new"
            }
          ]
        },
        {
          href: "",
          label: "Notices",
          active: pathname.includes("/dashboard/user/notices"),
          icon: NotebookPen,
          submenus: [
            {
              href: "/dashboard/user/notices",
              label: "All Notices",
              active: pathname === "/dashboard/user/notices"
            },
            {
              href: "/dashboard/user/notices/new",
              label: "New Notice",
              active: pathname === "/dashboard/user/notices/new"
            }
          ]
        },
        {
          href: "",
          label: "Stories",
          active: pathname.includes("/dashboard/user/stories"),
          icon: Newspaper,
          submenus: [
            {
              href: "/dashboard/user/stories",
              label: "All Stories",
              active: pathname === "/dashboard/user/stories"
            },
            {
              href: "/dashboard/user/stories/new",
              label: "New Story",
              active: pathname === "/dashboard/user/stories/new"
            }
          ]
        },
        {
          href: "/dashboard/user/gallery",
          label: "Gallery",
          active: pathname.includes("/dashboard/user/gallery"),
          icon: Images,
          submenus: []
        },
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/dashboard/admin/users",
          label: "Profile",
          active: pathname.includes("/dashboard/admin/users"),
          icon: User,
          submenus: []
        },
        {
          href: "/dashboard/admin/account",
          label: "Account",
          active: pathname.includes("/dashboard/admin/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
export function getAdminMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/admin",
          label: "Dashboard",
          active: pathname.includes("/dashboard/admin"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/dashboard/admin/members",
          label: "Members",
          active: pathname.includes("/dashboard/admin/members"),
          icon: Users,
          submenus: []
        },
        {
          href: "/dashboard/admin/notices",
          label: "Notices",
          active: pathname.includes("/dashboard/admin/notices"),
          icon: NotebookPen,
          submenus: []
        },
        {
          href: "/dashboard/admin/stories",
          label: "Stories",
          active: pathname.includes("/dashboard/admin/stories"),
          icon: Newspaper,
          submenus: []
        },
        {
          href: "/dashboard/admin/gallery",
          label: "Gallery",
          active: pathname.includes("/dashboard/admin/gallery"),
          icon: Images,
          submenus: []
        },
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/dashboard/admin/users",
          label: "Profile",
          active: pathname.includes("/dashboard/admin/users"),
          icon: User,
          submenus: []
        },
        {
          href: "/dashboard/admin/account",
          label: "Account",
          active: pathname.includes("/dashboard/admin/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
