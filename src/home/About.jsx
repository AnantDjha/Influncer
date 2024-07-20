import "./About.css"
import whatIsFlunce from "../assets/whatIsFlunce.avif"
export default function About()
{
    return (
        <div className="main-about">
            <div className="aboutFlunce">
                <div className="aboutFlunce-text">
                    <h2>What is Fluence ?</h2>
                    <p>Welcome to Fluence, the premier platform where brands and influencers come together to create powerful marketing campaigns. At Fluence, brands can effortlessly discover and hire influencers who resonate with their target audience. Our platform offers a seamless sign-up process, advanced search filters, and secure transaction management to ensure smooth and successful collaborations. Influencers can showcase their portfolios, negotiate deals, and track campaign performance all in one place. Join Fluence today and elevate your brand’s presence through authentic and impactful influencer partnerships</p>
                </div>
                <div className="aboutFlunce-img">
                    <img src={whatIsFlunce} alt="" />
                </div>
            </div>
        </div>
    )
}