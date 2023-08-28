
import { useEffect, useState } from "react";
import gift from "../Asset/images/gift.jpeg";
export default function Model() {
    const [model, setModel] = useState();
    useEffect(()=>{
       setTimeout(()=>{
        setModel(true);
       }, 1000)
    }, []);
    return (
        <> {model ? (<div className={`wrapper ${model ? 'open' : ''}`} >
            <div className="box1" ></div>
            <div className="box2">
                <div className="box3" onClick={() => { setModel() }}>
                    <span >x</span>
                    <div className="col-12 px-2 py-2 content">
                        <div className="row">
                            <div><h2>Welcome!</h2></div></div></div>
                    <div className="col-12  " >
                        <div className="row">
                            <div className="col-9 px-4 py-2  content-left ">
                                sign up to our mailing list to get exclusive access to members only
                                 offers and pre-release content.</div>

                            <div className="col-3  px-2 py-2">
                                <img className="wedding-gift" src={gift} alt="" /></div></div>
                    </div>

                </div>
            </div>
        </div>) : null
        }
        </>)
}