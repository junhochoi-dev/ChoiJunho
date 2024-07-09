import Animation from "./animation";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안배고프냐?
                    <br className="hidden lg:inline-block" />
                    배고프다
                </h1>
                <p className="mb-8 leading-relaxed">
                    헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과
                    사무처리에 관한 규칙을 제정할 수 있다. 제2항과 제3항의 처분에 대하여는 법원에
                    제소할 수 없다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 대통령은
                    국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다. 정당은 그
                    목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한
                    조직을 가져야 한다. 헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정
                    또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.
                    탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.
                    정부는 예산에 변경을 가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에
                    제출할 수 있다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                        프로젝트보러가기
                    </button>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
