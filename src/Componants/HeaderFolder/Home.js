import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { BiCalendar } from "react-icons/bi";
import 'react-calendar/dist/Calendar.css';


export default function Home() {

    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)

    const formatDate=(date)=>{
        var month = '' + (date.getMonth() + 1);
        var day = '' + date.getDate();
        var year = date.getFullYear();
      
        if (month.length < 2) {
          month = '0' + month;
        }
        if (day.length < 2) {
          day = '0' + day;
        }
      
        return [month, day, year].join('/');
      }

    return (

        <div className="col-12 ">
            <div className="row px-5 py-5 pic">
                <div className="= col-6 content "><h1>Get Special Offer
                    upto<b> 15% </b>in Our
                    Wedding Venue</h1></div>
                <div className="col-6 py-4 px-5">
                    <div className="col-6"></div>
                    <div className=" col-10 px-5 booking"> <h4> Book
                        A Wedding Venue</h4>
                        <div className="form-group px-3 py-2">
                            <form>
                                <div className="form-row  py-2  ">
                                    <div> <input type="text" className="form-control mt-2 " placeholder="Name" /></div>
                                    <div></div> <input type="text" className="form-control mt-2  " placeholder="Phone" />
                                    <input type="text" className="form-control mt-2 " placeholder="Email" />
                                    <input type="text" className="form-control mt-2 " placeholder="Package" />
                                    <div class="w-100">
                                        <input type="text"  onClick={() => setShow(!show)} className="form-control mt-2" id="datepicker" placeholder="Avilability" value={formatDate(date)}/>
                                        {show && <Calendar onChange={setDate} value={date} />}
                                        <span className="cal-icon" ><BiCalendar /></span>
                                    </div>
                                    <input type="submit" className="custom-button mt-2  " value="CHECK AVILABILITY " />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}