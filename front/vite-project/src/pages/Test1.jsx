import { BasicBox } from "../components/container";

function Test1() {
    return (
        <>
            {/* 라이트 모드 */}
            <BasicBox className="h-[450px]">
                <div>Mistery</div>
            </BasicBox>

            {/* 다크모드 */}
            <BasicBox className="gap-8 h-[1400px] mt-4 bg-[#262931] items-center justify-center flex-wrap">
                <button
                    onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                    }
                    className="group bg-gray-700 rounded-xl p-4 text-gray-300 shadow-sm shadow-gray-950/55 cursor-pointer hover:bg-gray-800 transition"
                >
                    <div>테스트 버튼</div>
                    <div>안녕하세요. 저는 홍길동입니다.</div>

                    <div
                        className="
        title2 inline-block mt-8 text-white
        leading-none
        transition-transform duration-200 ease-out
        origin-center
        
      "
                    >
                        Download
                    </div>
                    <div>for Free!</div>
                    <div>7.1.0v</div>
                </button>
                <dialog id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <h3 class="text-lg font-bold">Hello!</h3>
                        <p class="py-4">
                            Press ESC key or click the button below to close
                        </p>
                        <div class="modal-action">
                            <form method="dialog">
                                <button class="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <div className="border-t-[1px] border-gray-500 w-[400px] "></div>

                <button className="hover:text-gray-200 hover:bg-blue-500 text-blue-950  cursor-pointer transition  shadow-sm shadow-gray-950/55 bg-blue-400 rounded-xl px-7 py-2">
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
                    <div className="text-gray-100 opacity-50 font-extralight mt-4">
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
                    <div className="mt-1 ml-[340px] font-extralight text-gray-100 opacity-50 mt">
                        자료제공 : 국민연금공단
                    </div>

                    <div className="mt-10 flex">
                        <svg
                            className="size-4 ms-2 inline-block text-info mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="currentColor"
                                stroke-linejoin="miter"
                                stroke-linecap="butt"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></circle>
                                <path
                                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></path>
                                <circle
                                    cx="12"
                                    cy="7.25"
                                    r="1.25"
                                    fill="currentColor"
                                    stroke-width="2"
                                ></circle>
                            </g>
                        </svg>
                        <span class="inline-block align-middle ms-1 w-[400px] ml-4">
                            두 번 탭하여 Google에서 검색합니다. 신고하기. 취소.
                            확인. 삭제. 인기 검색어.재 구글은 미국 캘리포니아
                            주에 있는 빌딩을 본사로 사용합니다.
                        </span>
                    </div>

                    <div className="mt-10 flex">
                        <svg
                            className="size-4 ms-2 inline-block text-info mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="currentColor"
                                stroke-linejoin="miter"
                                stroke-linecap="butt"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></circle>
                                <path
                                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></path>
                                <circle
                                    cx="12"
                                    cy="7.25"
                                    r="1.25"
                                    fill="currentColor"
                                    stroke-width="2"
                                ></circle>
                            </g>
                        </svg>
                        <span class="inline-block align-middle ms-1 w-[400px] ml-4">
                            1월 9일 - 1월 16일로 한 주 연기되었으니 일정 혼동
                            없으시도록 꼭 참고하여 주세요.
                        </span>
                    </div>

                    <div className="mt-10 flex">
                        <svg
                            className="size-4 ms-2 inline-block text-info mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="currentColor"
                                stroke-linejoin="miter"
                                stroke-linecap="butt"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></circle>
                                <path
                                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="square"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                ></path>
                                <circle
                                    cx="12"
                                    cy="7.25"
                                    r="1.25"
                                    fill="currentColor"
                                    stroke-width="2"
                                ></circle>
                            </g>
                        </svg>
                        <span class="inline-block align-middle ms-1 w-[400px] ml-4">
                            정부 고시에 따라 국민연금 및 건강보험 보험료 요율이
                            인상되면서, 2026년 1월분 급여부터 급여 공제 금액에
                            일부 변동이 생기게 되어 미리 안내드립니다.
                        </span>
                    </div>
                </div>
            </BasicBox>
        </>
    );
}
export default Test1;
