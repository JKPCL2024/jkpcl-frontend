import Image from "next/image";

export default function ClientSection() {
    return (
        <section
            id="clients"
            className="mx-auto mt-12 max-w-7xl px-6 text-center md:px-8"
        >
            <div className="py-14">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h2 className="text-center text-sm font-semibold text-gray-600">
                        REGISTERED WITH REPUTETED ORGANISATIONS
                    </h2>
                    <div className="mt-6">
                        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                            <li>
                                <Image
                                    alt="GST"
                                    src="/images/GST.png"
                                    className="h-10 w-auto px-2"
                                    width={400}
                                    height={100}
                                />
                            </li>
                            <li>
                                <Image
                                    alt="FSSAI"
                                    src="/images/fssai.webp"
                                    className="h-24 w-auto px-2"
                                    width={600}
                                    height={400}
                                />
                            </li>
                            <li>
                                <Image
                                    alt="eNam"
                                    src="/images/eNam.png"
                                    className="h-16 w-auto px-2"
                                    width={400}
                                    height={200}
                                />
                            </li>

                            <li>
                                <Image
                                    alt="NSDL"
                                    src="/images/NSDL.png"
                                    className="h-20 w-auto translate-y-3 px-2"
                                    width={400}
                                    height={200}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
