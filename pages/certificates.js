import Layout from "../components/layouts";
import Image from "next/image";
export default function Certificates() {
    return (
        <Layout>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Certificates
                            </h1>
                            <div class="h-1 w-20 bg-red-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            {/* Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                            gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                            heard of them man bun deep jianbing selfies heirloom prism food truck
                            ugh squid celiac humblebrag. */}
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <h3 class="tracking-widest text-500 text-xs font-bold title-font">
                                    2024.06.18
                                </h3>
                                <h2 class="text-xl text-gray-900 font-bold title-font">
                                    정보처리기사
                                </h2>
                                <h3 class="tracking-widest text-500 text-sm font-bold title-font mb-4">
                                    한국산업인력공단
                                </h3>
                                <Image
                                    src="/certificates/20240618_정보처리기사.png"
                                    width={500}
                                    height={500}
                                    style={{ height: "400px" }}
                                />
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <h3 class="tracking-widest text-500 text-xs font-bold title-font">
                                    2023.12.15
                                </h3>
                                <h2 class="text-xl text-gray-900 font-bold title-font">
                                    SQLD SQL개발자
                                </h2>
                                <h3 class="tracking-widest text-500 text-sm font-bold title-font mb-4">
                                    한국데이터산업진흥원
                                </h3>
                                <Image
                                    src="/certificates/20231215_SQLD.png"
                                    width={500}
                                    height={500}
                                    style={{ height: "400px" }}
                                />
                            </div>
                        </div>

                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <h3 class="tracking-widest text-500 text-xs font-bold title-font">
                                    2023.11.17
                                </h3>
                                <h2 class="text-xl text-gray-900 font-bold title-font">
                                    ADsP 데이터분석준전문가
                                </h2>
                                <h3 class="tracking-widest text-500 text-sm font-bold title-font mb-4">
                                    한국데이터산업진흥원
                                </h3>
                                <Image
                                    src="/certificates/20231117_ADsP.png"
                                    width={500}
                                    height={500}
                                    style={{ height: "400px" }}
                                />
                            </div>
                        </div>

                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <h3 class="tracking-widest text-500 text-xs font-bold title-font">
                                    2023.10.06
                                </h3>
                                <h2 class="text-xl text-gray-900 font-bold title-font">
                                    삼성SW역량테스트 Level B
                                </h2>
                                <h3 class="tracking-widest text-500 text-sm font-bold title-font mb-4">
                                    삼성전자주식회사
                                </h3>
                                <Image
                                    src="/certificates/20231006_삼성SW역량테스트B형.png"
                                    width={500}
                                    height={500}
                                    style={{ height: "400px" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <h3 class="tracking-widest text-500 text-xs font-bold title-font">
                                    2023.10.06
                                </h3>
                                <h2 class="text-xl text-gray-900 font-bold title-font">
                                    리눅스마스터2급
                                </h2>
                                <h3 class="tracking-widest text-500 text-sm font-bold title-font mb-4">
                                    한국정보통신진흥협회
                                </h3>
                                <Image
                                    src="/certificates/20231006_리눅스마스터2급.png"
                                    width={500}
                                    height={500}
                                    style={{ height: "400px" }}
                                />
                            </div>
                        </div>

                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <h3 class="tracking-widest text-500 text-xs font-bold title-font">
                                    2023.08.31
                                </h3>
                                <h2 class="text-xl text-gray-900 font-bold title-font">
                                    삼성SW역량테스트 Level A+
                                </h2>
                                <h3 class="tracking-widest text-500 text-sm font-bold title-font mb-4">
                                    삼성전자주식회사
                                </h3>
                                <Image
                                    src="/certificates/20230831_삼성SW역량테스트A형.png"
                                    width={500}
                                    height={500}
                                    style={{ height: "400px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
