import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-end text-3xl font-bold tracking-wide"
    >
      <Image src={"/logo.png"} width={70} height={70} alt="logo" />
      <div className="flex flex-col items-start text-primary">
        <h2 className="text-4xl font-bold">JKPCL</h2>
        <p className="text-xs font-normal">Empowering farmers</p>
      </div>
    </Link>
  );
};
