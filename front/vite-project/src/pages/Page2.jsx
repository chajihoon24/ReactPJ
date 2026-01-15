import { LinkBtn } from "../components/button";
import { BASE_URL } from "../constants/api";

function Page2() {
    return (
        <div className="flex gap-4">
            <LinkBtn
                to={"/test/testLayout1600"}
                text="테스트 레이아웃 1600px"
            ></LinkBtn>
            <LinkBtn
                to={"/test/testLayout1440"}
                text="테스트 레이아웃 1440px"
            ></LinkBtn>
            <LinkBtn
                to={"/test/testLayoutCustom"}
                text="테스트 레이아웃 커스텀"
            ></LinkBtn>
        </div>
    );
}
export default Page2;
