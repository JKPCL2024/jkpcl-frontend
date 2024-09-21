import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

const footerNavs = [
    {
        label: "Important Links",
        items: [
            {
                href: "/about",
                name: "About Us",
            },
            {
                href: "/#services",
                name: "Services",
            },
            {
                href: "/#faqs",
                name: "FAQ",
            },
        ],
    },

    {
        label: "Community",
        items: [
            {
                href: "https://www.facebook.com/profile.php?id=100076275695203",
                name: "Facebook",
            },

            {
                href: "mailto:jkpcl@yahoo.com",
                name: "Email",
            },
        ],
    },
    {
        label: "Legal",
        items: [
            {
                href: "/terms",
                name: "Terms",
            },

            {
                href: "/privacy",
                name: "Privacy",
            },
        ],
    },
];

const footerSocials = [
    {
        href: "https://www.facebook.com/profile.php?id=100076275695203",
        name: "Facebook",
        icon: <FaFacebook className="size-4" />,
    },
    {
        href: "mailto:jkpcl@yahoo.com",
        name: "Email",
        icon: <Mail className="size-4" />,
    },
];

export function SiteFooter() {
    return (
        <footer>
            <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
                <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
                    <div className="mb-12 flex flex-col gap-4">
                        <Link href="/" className="flex items-end justify-start">
                            <Image
                                src={"/logo.png"}
                                height={40}
                                width={40}
                                alt="Logo"
                            />
                            <span className="whitespace-nowrap text-2xl font-semibold dark:text-white">
                                JKPCL
                            </span>
                        </Link>
                        <p className="max-w-sm text-base text-muted-foreground">
                            Empowering Farmers for Sustainable Growth
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
                        {footerNavs.map((nav) => (
                            <div key={nav.label}>
                                <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                                    {nav.label}
                                </h2>
                                <ul className="grid gap-2">
                                    {nav.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="cursor-pointer text-sm font-[450] text-muted-foreground duration-200 hover:text-muted-foreground/70"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex space-x-5 sm:mt-0 sm:justify-center">
                        {footerSocials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
                            >
                                {social.icon}
                                <span className="sr-only">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground sm:text-center">
                        Copyright © {new Date().getFullYear()}{" "}
                        <Link href="/" className="cursor-pointer">
                            JKPCL
                        </Link>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
            {/* <SiteBanner /> */}
        </footer>
    );
}
