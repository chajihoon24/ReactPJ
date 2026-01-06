import { BasicBox } from "../components/container";

function Test1() {
    return (
        <>
            {/* 라이트 모드 */}
            <BasicBox className="h-[450px]">
                <div>Mistery</div>
            </BasicBox>

            {/* 다크모드 */}
            <BasicBox className="gap-8 h-[900px] mt-4 bg-[#262931] items-center justify-center">
                <button className="leading-relaxed bg-gray-700 rounded-xl p-4 text-gray-300 shadow-md shadow-gray-950/55 hover:scale-105 transition">
                    <div>테스트 버튼</div>
                    <div>안녕하세요. 저는 홍길동입니다.</div>
                    <div class="title2 text-white mt-8">Download</div>
                    <span class="">for Free!</span>
                </button>

                <div className="border-t-[1px] border-gray-500 w-[400px] "></div>

                <button className="hover:text-gray-200 hover:bg-blue-500 text-blue-950  cursor-pointer transition  shadow-md shadow-gray-950/55 bg-blue-400 rounded-xl px-7 py-2">
                    <div class="text-xl font-bold ">예약 하기</div>
                </button>
                <div className="basic-text text-gray-200 leading-relaxed">
                    <div className="">
                        <span className="font-bold">[ 주의사항 ]</span>
                        <br />
                        색의 계층 구조는 주로 색의 3속성
                        <span className="text-blue-400 font-bold">
                            {" "}
                            (색상, 명도, 채도){" "}
                        </span>
                        을 기준으로 체계화합니다.
                        <br />
                        색상의 이름에 합의하기 위해 우리에게 필요한 시간
                    </div>
                    <div className="text-gray-100 opacity-50 mt-4">
                        ※&nbsp;&nbsp; 수강료는 예고 없이 인상될 수 있습니다.
                    </div>
                    <div className="bg-[#15151b] gap-4 w-full h-[300px] mt-3 rounded-lg flex flex-col items-center justify-center basic-text text-gray-200 ">
                        <div className="-mt-5 -mb-3">국민연금</div>
                        <progress
                            class="progress progress-info w-56"
                            value="15"
                            max="100"
                        ></progress>
                        <div className="-mb-3">고용보험</div>
                        <progress
                            class="progress progress-info w-56"
                            value="60"
                            max="100"
                        ></progress>
                        <div className="-mb-3">건강보험</div>
                        <progress
                            class="progress progress-info w-56"
                            value="30"
                            max="100"
                        ></progress>
                        <div className="-mb-3">산재보험</div>
                        <progress
                            class="progress progress-info w-56"
                            value="70"
                            max="100"
                        ></progress>
                    </div>
                    <div className="mt-1 ml-[340px] text-gray-100 opacity-50 mt">
                        자료제공 : 국민연금공단
                    </div>
                </div>
            </BasicBox>
        </>
    );
}
export default Test1;
