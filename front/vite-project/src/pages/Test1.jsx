import { BasicBox } from "../components/container";

function Test1() {
    return (
        <>
            {/* 라이트 모드 */}
            <BasicBox className="h-[450px]">
                <div>Mistery</div>
            </BasicBox>

            
            {/* 다크모드 */}
            <BasicBox className="h-[450px] mt-4 bg-gray-700 items-center justify-center">
                <button className="rounded-xl p-4 font-bold text-gray-300 shadow-md">
                    <div>테스트 버튼</div>
                </button>
            </BasicBox>            
        </>
    )



}
export default Test1;