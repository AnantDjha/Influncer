import not from "./assets/404.png"
import { Link } from "react-router-dom"

export default function PageNotFound()
{
    
    return (
        <div className="main-not" style={{width:"100vw",height:"100vh",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <img src={not} alt="" style={{width:"30rem"}}/>
            <p>OOPs! No page found that you are looking for</p>
            <Link to="/" style={{textDecoration:"none", padding:"0.5rem 1rem", color:"white", backgroundColor:"blueviolet",marginTop:"0.5rem",borderRadius:"10px"}}>Back to Home</Link>
        </div>
    )
}