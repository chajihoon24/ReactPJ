import { BASE_URL } from "../constants/api";

function Page1() {
    return (
        <>
            <div className="title1">비쥬얼 컨셉</div>
            <div className="title2">Concept Color</div>

            <div class="color_container">
                <div className="colorSample smart_blue">#0466c8</div>
                <div className="colorSample steel_azure">#0353a4</div>
                <div className="colorSample regal_navy">#023e7d</div>
                <div className="colorSample prussian_blue1">#002855</div>
                <div className="colorSample prussian_blue2">#001845</div>
            </div>

            <div class="color_container">   
                <div className="colorSample prussian_blue3">#001233</div>
                <div className="colorSample twilight_indigo">#33415c</div>
                <div className="colorSample blue_slate">#5c677d</div>
                <div className="colorSample slate_grey">#7d8597</div>
                <div className="colorSample cool_steel">#979dac</div>
            </div>

                <div>{BASE_URL}</div>
        </>
    )



}
export default Page1;