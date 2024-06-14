import { layoutProps } from "@/types";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RootLayout({ children }: Readonly<layoutProps>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
