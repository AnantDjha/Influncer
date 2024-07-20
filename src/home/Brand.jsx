import "./Brand.css"
import aiMaBetter from "../assets/aiMaBetter.png"
import sugar from "../assets/sugar.png"
import sugar2 from "../assets/sugar2.jpg"
import superBottom from "../assets/superBottom.png"
import rainbow from "../assets/rainbow.png"
import rizzle from "../assets/rizzle.png"
export default function Brand()
{
    return (
        <div className="main-brand">
            <div className="brands">
                <h2>Some Top Brand with Collaboration</h2>
                <div className="branfImage">
                    <img src={sugar} alt="" />
                    <img src={aiMaBetter} alt="" />
                    <img src={sugar2} alt="" />
                    <img src={superBottom} alt="" />
                    <img src={rainbow} alt="" />
                    <img src={rizzle} alt="" />
                </div>
            </div>
        </div>
    )
}