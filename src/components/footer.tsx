import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { P } from "@/components/typography/p";
import { footerLinks, socialLinks } from "@/data/navigation-menu";

export const Footer = () => {
  return (
    <>
      <Section className="bg-muted py-6">
        <div className="flex items-end">
          <Image src={"/logo.png"} height={50} width={50} alt="Logo" />
          <h4 className="font-bold text-primary md:text-3xl">
            Jhargram Krishak Producer Farmer&apos;s Club
          </h4>
        </div>

        <div className="mt-6 flex w-full flex-wrap justify-center gap-4">
          {footerLinks.map((footerLink) => (
            <Button key={footerLink.label} variant={"link"} size={"sm"} asChild>
              <Link href={footerLink.href}>{footerLink.label}</Link>
            </Button>
          ))}
        </div>
      </Section>
      <Section className="flex-row justify-between bg-gray-900/20 p-2">
        <P className="md:textsm text-xs text-muted-foreground">
          Copyright © 2024 JKPCL. All rights reserved.
        </P>
        <div className="flex gap-2">
          {socialLinks.map((socialLink) => (
            <Button
              key={socialLink.name}
              size={"icon"}
              variant={"outline"}
              className="rounded-full"
              asChild
            >
              <Link href={socialLink.url}>{<socialLink.icon />}</Link>
            </Button>
          ))}
        </div>
      </Section>
    </>
  );
};
