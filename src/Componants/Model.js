
import { useEffect, useState } from "react";
import gift from "../Asset/images/gift.jpeg";
export default function Model(props) {
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState("");
   
    const[sucessMsg,setSucessMsg] =useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email?.length > 0) {
            setEmailError("");
            setSucessMsg("thank u for submitting email")
            setTimeout(
                ()=>{
                  setEmail(""); 
                  props.setModel(false); 
                  setSucessMsg("") ;   
                },2000
            )
        }
        else {
            setEmailError("please enter valid email");
        }
    }
   
    useEffect(() => {
        setTimeout(() => {
            props.setModel(true);
        }, 1000)
    }, [props, props.setModel]);
    return (
        <> {props.model ? (<div className={`wrapper ${props.model ? 'open' : ''}`} >
            <div className="box1" ></div>
            <div className="box2">
                <div className="box3" >
                    <span onClick={() => { props.setModel(false) }}>x</span>
                    <div className="col-12 px-2 py-2 content">
                        <div className="row">
                            <div><h2>Welcome!</h2></div></div></div>
                    <div className="col-12  " >
                        <div className="row">
                            <div className="col-9 px-4 py-2  content-left ">
                                sign up to our mailing list to get exclusive access to members only
                                offers and pre-release content.
                                <form method="post" action="">
                                    <div className="input-field">
                                        <input type="text" onChange={(e) => { setEmail(e.target.value) }} className="form-control mt-2 " placeholder="Email*" />
                                    </div>
                                    <p>
                                        {emailError.length > 0 ? emailError : null}
                                    </p>
                                    <div >
                                        <button type="submit" onClick={(e) => { handleSubmit(e) }} className="signup mt-2">
                                            Sign Up
                                        </button>
                                        <p>{sucessMsg?.length>0?sucessMsg:null}</p>

                                    </div>
                                </form>
                            </div>

                            <div className="col-3  px-2 py-2">
                                <img className="wedding-gift" src={gift} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>) : null
        }
        </>)
}