import { LayoutProps } from "@/types";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";

const HomeLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <SiteHeader />
            {children}
            <SiteFooter />
        </>
    );
};

export default HomeLayout;
