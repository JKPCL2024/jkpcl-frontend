import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Home, Users } from "lucide-react";

const GITHUB_PROFILE_LINK = "https://github.com/Dhananjoy43"
const LINKEDIN_PROFILE_LINK = "https://www.linkedin.com/in/dhananjoy-mahata-ab00b4229/"
const TWITTER_PROFILE_LINK = "https://twitter.com/Dhananjoy_99"

export const navigationLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "Stories",
        href: "/stories"
    },
    {
        label: "Gallery",
        href: "/gallery"
    },
    {
        label: "Contact",
        href: "/contact"
    },
]

export const footerLinks = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "FAQs",
        href: "/faqs"
    },
    {
        label: "Terms & Conditions",
        href: "/terms-and-conditions"
    },
    {
        label: "Privacy Policy",
        href: "/privacy-policy"
    },
]

export const socialLinks = [
    {
        name: "Github",
        icon: GitHubLogoIcon,
        url: GITHUB_PROFILE_LINK
    },
    {
        name: "Twitter",
        icon: TwitterLogoIcon,
        url: TWITTER_PROFILE_LINK
    },
    {
        name: "LinkedIn",
        icon: LinkedInLogoIcon,
        url: LINKEDIN_PROFILE_LINK
    },
]


export const adminDashboardNavigationLinks = [
    {
        label: "Dashboard",
        icon: Home,
        href: "/dashboard/admin"
    },
    {
        label: "Members",
        icon: Users,
        href: "/dashboard/admin/members"
    }
]