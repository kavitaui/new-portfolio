import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { BiCalendar } from "react-icons/bi";
import 'react-calendar/dist/Calendar.css';


export default function Home() {
    const [sucessMsg, setSucessMsg] = useState("");
    const [formData, setFormData] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Package: '',
        Date: '',

    })
    const [errors, setErrors] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Package: '',
        Date: '',

    })
    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        if (validateForm()) {
            setSucessMsg("Thank you for sharing details!!, we will get back to you soon.")
            setFormData({
                Name: '',
                Phone: '',
                Email: '',
                Package: '',
                Date: '',
            })
            setTimeout(() => {
                setSucessMsg('')
            }, 3000);
        }
        else setSucessMsg("form is not valid");
    }
    const handleChange = (e) => {
        debugger
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        validateForm();
    }
    const validateForm = () => {
        debugger;
        let isValid = true;
        const newErrors = { ...errors };
        if (formData.Name.trim() === '') {
            newErrors.Name = 'name is reqiured'
            isValid = false;
        } else {
            newErrors.Name = '';
        }
       
        if (formData.Phone.trim() === '') {
            newErrors.Phone = 'Phone No is reqiured'
            isValid = false;
        } else {
            newErrors.Phone = '';
        }
        if (formData.Email.trim() === '') {
            newErrors.Email = 'Email is reqiured'
            isValid = false;
        } else {
            newErrors.Email = '';
        }
        if (formData.Package.trim() === '') {
            newErrors.Package = 'Email is reqiured'
            isValid = false;
        } else {
            newErrors.Package = '';
        }
        if (formData.Date.trim() === '') {
            newErrors.Date = 'Package is reqiured'
            isValid = false;
        } else {
            newErrors.Date = '';
        }



        setErrors(newErrors);
        return isValid;
    }

    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)

    const formatDate = (date) => {
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
                                    <div>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            className={`form-control mt-2  ${errors.Name.length ? 'error-field' : ''} ${formData.Name ? 'success' : ''}`}
                                            placeholder="Name"
                                            value={formData.Name}
                                            name="Name"
                                        />
                                    
                                    <p className="popup">
                                        {errors.Name.length > 0 ? errors.Name : null}
                                    </p>
                                     <input type="text" onChange={handleChange}
                                     className="form-control mt-2" placeholder="Phone" name="Phone" value={formData.Phone} />
                                    <p className="popup">
                                        {errors.Phone.length > 0 ? errors.Phone : null}
                                    </p>
                                    <input type="text" className="form-control mt-2 " onChange={handleChange} placeholder="Email" value={formData.Email} name="Email" />
                                    <p className="popup">
                                        {errors.Email.length > 0 ? errors.Email : null}
                                    </p>
                                    <input type="text" className="form-control mt-2 " onChange={handleChange} placeholder="Package" value={formData.Package} name="Package" />
                                    <p className="popup">
                                        {errors.Package.length > 0 ? errors.Package : null}
                                    </p>
                                    <div className="w-100">
                                        <input type="text" onClick={() => setShow(!show)} className="form-control mt-2" id="datepicker" placeholder="Avilability" onChange={handleChange} value={formatDate(date)} name="Avilability" />
                                        {show && <Calendar onChange={setDate} value={ formData.date} name="Avilability" />}
                                        <span className="cal-icon" ><BiCalendar /></span>
                                    </div>
                                    <button type="submit" onClick={handleSubmit} className="custom-button mt-2">CHECK AVILABILITY</button>
                                    <p className="message">{sucessMsg.length ? sucessMsg : null}</p>
                                </div>
</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}