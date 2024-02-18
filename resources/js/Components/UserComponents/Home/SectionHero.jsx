import React from "react";

export default function SectionHero() {
    return (
        <div>
            <section className="md:w-[100%] w-full border-t-2 border-b-2 border-opacity-60 border-secondary h-auto flex md:flex-row flex-col ">
                <div className="md:w-[50%] w-full md:border-r-2 md:border-b-0 border-b-2 flex flex-col border-secondary border-opacity-60 justify-center py-5 md:text-left text-center md:py-10 h-auto">
                    <div className="md:w-[70%] w-full">
                        <h1 className="md:text-3xl text-2xl font-extrabold text-primary">
                            Temukan Rumah Impian Anda Bersama Kami
                        </h1>
                    </div>

                    <div className="md:w-[80%] w-full">
                        <p>
                            Kami menawarkan layanan listing rumah dan
                            menyediakan berbagai pilihan dan paket untuk
                            membantu menemukan rumah impian anda
                        </p>
                    </div>
                </div>

                <div className="md:w-[50%] w-full  flex flex-col text-center  item-center py-5 md:py-10 h-auto px-5 md:px-10">
                    <div className="w-auto">
                        <h1 className="md:text-3xl text-2xl text-primary">
                            CURRENT PROJECT
                        </h1>
                    </div>

                    <div className="w-full flex text-primary justify-center gap-24 pt-5">
                        <div className="flex flex-col gap-5 md:gap-10">
                            <div>
                                <h1 className="md:text-3xl text-2xl font-extrabold">03</h1>
                                <p>Total Buildings</p>
                            </div>
                            <div>
                                <h1 className="md:text-3xl text-2xl font-extrabold">
                                    96 M
                                </h1>
                                <p>Portfolio Value</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 md:gap-10">
                            <div>
                                <h1 className="md:text-3xl text-2xl font-extrabold">120</h1>
                                <p>Total Units</p>
                            </div>
                            <div>
                                <h1 className="md:text-3xl text-2xl font-extrabold">
                                    298 K
                                </h1>
                                <p>m2 to Build</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
