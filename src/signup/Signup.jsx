import { useRef, useState } from "react"
import "./Signup.css"
import { useForm } from "react-hook-form";
import influncerImg from "../assets/influncerImg.png"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faRemove } from "@fortawesome/free-solid-svg-icons";
import { motion ,useAnimationControls} from "framer-motion";
import branImg from "../assets/brandImg.png"
import successImg from "../assets/successImg.png"
// import { useRef } from "react";

export default function Signup() {
    const controls = useAnimationControls()
    const [form, setForm] = useState(true);
    const [animation , setAnimation] = useState(true)
    const navigate = useNavigate()
    const [submitted , setIsSubmited] = useState(localStorage.getItem("submited") || "")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors ,isSubmitting}
    } = useForm()

    const refDiv = useRef()
    const onSubmit = (data) => {
        localStorage.setItem("submited", "yes")
        setIsSubmited(true);
    }

    if(submitted)
    {
       return ( <div className="main-signup">
        <div className="floater">
            <Link onClick={()=>{
              setAnimation(!animation)
              setTimeout(()=>{
                navigate("/")
              },600)
            }}>
                <FontAwesomeIcon icon={faRemove}/></Link>
        </div>
        <motion.div ref = {refDiv} className="form" initial={{position:"relative",bottom:animation ? "-100vh":"0"}} animate={{bottom:animation ? "0":"-100vh"}} transition={{duration:"0.6"}} >
            <img src={successImg} alt="" style={{width:"20rem",height:"20rem"}}/>
            </motion.div>
        </div>
        )
    }
    return (
        <div className="main-signup">
            <div className="floater">
                <Link onClick={()=>{
                  setAnimation(!animation)
                  setTimeout(()=>{
                    navigate("/")
                  },600)
                }}>
                    <FontAwesomeIcon icon={faRemove}/></Link>
            </div>
            <motion.div ref = {refDiv} className="form" initial={{position:"relative",bottom:animation ? "-100vh":"0"}} animate={{bottom:animation ? "0":"-100vh"}} transition={{duration:"0.6"}} >
                <div className="formChanger">
                    <button className="firstBtn" style={{border:form && "2px solid grey",color:form &&"grey"}} disabled={form} onClick={()=>{
                        setForm(!form);
                    }}>Signup as Influncer</button>
                    <button className="secondBtn" style={{border:!form && "2px solid grey", color:!form &&"grey"}} disabled={!form} onClick={()=>{
                        setForm(!form);
                    }}>Signup as Brand</button>
                </div>
                {
                    form ?
                        <div className="forInfluncer">
                            <div className="influnceImg">
                                <img src={influncerImg} alt="" />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="fields">

                               
                            <div className="input">
                                    <p>Email</p>
                                    <input type="text" {...register("emailInfluence",{
                                        required:{value:true, message:"Eamil is required"}
                                    })}/>
                                    {errors.emailInfluence && <span>{errors.emailInfluence.message}</span>}
                                </div>
                                <div className="inputNameOuter">
                                <div className="inputName">
                                    <p>First Name</p>
                                    <input type="text" {...register("firstNameInfluence",{
                                        required:{value:true, message:"First name is required"}
                                    })}/>
                                    {errors.firstNameInfluence && <span>{errors.firstNameInfluence.message}</span>}

                                </div>
                                <div className="inputName">
                                    <p>Last Name</p>
                                    <input type="text" {...register("lastNameInfluence",{
                                        required:{value:true, message:"Last name is required"}
                                    })}/>
                                    {errors.lastNameInfluence && <span>{errors.lastNameInfluence.message}</span>}

                                </div>
                                </div>
                                <div className="input">
                                    <p>Profile URL</p>
                                    <input type="text" {...register("profileInfluence",{
                                        required:{value:true, message:"Please enter profile URL"}
                                    })}/>
                                    {errors.profileInfluence && <span>{errors.profileInfluence.message}</span>}

                                </div>
                                <div className="dropInput">
                                    <p>Content Niche</p>
                                    <select {...register("niche",{
                                        required:{value:true , message:"Please select niche"}
                                    })}>
                                         <option value="fashion">Fashion</option>
                                        <option value="fitness">Fitness</option>
                                        <option value="health">Health</option>
                                        <option value="beauty">Beauty</option>
                                        <option value="other">Technology</option>
                                        <option value="other">Others</option>
                                    </select>
                                    {errors.niche && <span>{errors.niche.message}</span>}

                                </div>
                                <div className="input">
                                    <p>Follower Count</p>
                                    <input type="text" {...register("followerCount",{
                                        required:{value:true, message:"Follower count is required"}
                                    })}/>
                                    {errors.followerCount && <span>{errors.followerCount.message}</span>}

                                </div>
                                <div className="textArea">
                                    <p>Describe is short about age group, city, gender, etc that actively consuming your content</p>
                                    <textarea  {...register("desc",{
                                        required:{value:true,message:"This field is important"}
                                    })}></textarea>
                                    {errors.desc && <span>{errors.desc.message}</span>}
                                    
                                </div>
                                </div>
                                
                                    <input type="submit" value={isSubmitting ? "Loading..." : "Sign Up"} className="submitBtn"/>
                               
                            </form>
                        </div> :

                        <div className="forBrand forInfluncer">
                            <div className="influnceImg">
                                <img src={branImg} alt="" />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="fields">

                               
                            <div className="input">
                                    <p>Brand Name</p>
                                    <input type="text" {...register("brandName",{
                                        required:{value:true, message:"brand Name is required"}
                                    })}/>
                                    {errors.brandName && <span>{errors.brandName.message}</span>}
                                </div>
                            
                                <div className="input">
                                    <p>Brand Website URL</p>
                                    <input type="text" {...register("website",{
                                        required:{value:true, message:"Please enter profile URL"}
                                    })}/>
                                    {errors.website && <span>{errors.website.message}</span>}

                                </div>
                                <div className="dropInput">
                                    <p>Brand Niche</p>
                                    <select {...register("niche",{
                                        required:{value:true , message:"Please select niche"}
                                    })}>
                                        <option value="fashion">Fashion</option>
                                        <option value="fitness">Fitness</option>
                                        <option value="health">Health</option>
                                        <option value="beauty">Beauty</option>
                                        <option value="other">Technology</option>
                                        <option value="other">Others</option>
                                    </select>
                                    {errors.niche && <span>{errors.niche.message}</span>}

                                </div>
                                <div className="dropInput">
                                    <p>Company Size</p>
                                    <select {...register("size",{
                                        required:{value:true , message:"Please select option"}
                                    })}>
                                        <option value="fashion">Fashion</option>
                                        <option value="fitness">Fitness</option>
                                        <option value="health">Health</option>
                                        <option value="beauty">Beauty</option>
                                        <option value="other">Technology</option>
                                        <option value="other">Others</option>
                                    </select>
                                    {errors.size && <span>{errors.size.message}</span>}

                                </div>
                                <div className="input">
                                    <p>Instagram handle URL</p>
                                    <input type="text" {...register("handle",{
                                        required:{value:true, message:"Follower count is required"}
                                    })}/>
                                    {errors.handle && <span>{errors.handle.message}</span>}

                                </div>
                                <div className="textArea">
                                    <p>Describe is short about the brand core values and its target market</p>
                                    <textarea  {...register("desc",{
                                        required:{value:true,message:"This field is important"}
                                    })}></textarea>
                                    {errors.desc && <span>{errors.desc.message}</span>}
                                    
                                </div>
                                </div>
                                
                                    <input type="submit" value={isSubmitting ? "Loading..." : "Sign Up"} className="submitBtn"/>
                               
                            </form>
                        </div>
                }
            </motion.div>
        </div>
    )
}