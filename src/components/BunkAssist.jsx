import React, { useEffect, useState } from 'react'
import frontimg from '../assets/images/2.jpg'
export default function BunkAssist() {

    const [subjectArea, setSubjectArea] = useState([])
    const [subjectEntered, setSubjectEntered] = useState(false)
    const [newAttendance, setNewAttendance] = useState("")
    const [difference, setDifference] = useState("")
    const [done, setDone] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        if(form.checkValidity()){

            setSubjectEntered(true)
    
            const subjects = document.getElementById('sub').value
            const arr = []
            for (let i = 0; i < subjects; i++) {
                arr.push(i);
            }
            setSubjectArea(arr)
        }
        form.classList.add("was-validated");
    }


    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target;

        if (form.checkValidity()) {
            let totalAttended = 0;
            for (let i = 0; i < subjectArea.length; i++) {
                const inputValue = document.getElementById(`sub${i}`).value;
                const numericValue = parseInt(inputValue, 10);
                totalAttended = totalAttended + numericValue;
            }

            const currentAttendance = parseFloat(document.getElementById('currentAttendance').value);
            const bunks = parseInt(document.getElementById('bunks').value);
            const attend = parseInt(document.getElementById('attend').value);

            let totalLectures = (totalAttended * 100) / currentAttendance;
            totalLectures = parseInt(totalLectures)

            const newTotal = totalLectures + bunks + attend;
            const attended = totalAttended + attend;

            const newAttendance = parseFloat(((attended / newTotal) * 100)).toFixed(2);
            setNewAttendance(newAttendance);

            let diff;
            if (newAttendance > currentAttendance) {
                diff = "Attendance Increased by: " + (newAttendance - currentAttendance).toFixed(2) + "%";
            } else {
                diff = "Attendance Decreased by: " + (currentAttendance - newAttendance).toFixed(2) + "%";
            }
            setDifference(diff);
            setDone(true)
        }
        form.classList.add('was-validated')
    }

    // useEffect(()=>{
    //     document.getElementById('form')
    //     if(done){
    //         form.classList.add("d-none")
    //     }
    // },[done])


    return (
        <>
            <div className='p-3 m-3'>
                <img className="w-100 text-center"src={frontimg} alt="image not found" />
                <h4 className='text-center custom-text-color'>Wondering if you can skip a few lectures?</h4>
                <p className='text-center '>With BunkBuddy, simply input the number of classes you're considering missing, and get an instant projection of how your attendance will be affected. Stay informed, make informed choices, and keep your attendance on track with BunkBuddy.</p>
            </div>
            {
                subjectEntered ?

                    <form onSubmit={handleSubmit} className={done ? "d-none" : "container h-100 px-5 py-3 needs-validation"} noValidate>

                        <div className="row row-cols-sm-2 g-3">

                            {
                                subjectArea.map((sub, index) =>
                                    <div className="col-md-3" key={index}>
                                        <div className="form-floating">
                                            <input
                                                type="tel"
                                                maxLength={2}
                                                className="form-control shadow border border-primary text-center  "
                                                name={`sub${index + 1}`}
                                                id={`sub${index}`}
                                                
                                                required
                                            />
                                            <label className='w-100 text-center' htmlFor={`sub${index}`}>{`Lectures Attended in Subject ${index + 1}`}</label>
                                            <div className="invalid-feedback">
                                                Please choose This Subject
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                        <div className="row my-3">
                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input
                                        type="tel"
                                        step="0.01"
                                        maxLength={5}
                                        className="form-control shadow border border-primary text-center "
                                        id="currentAttendance"
                                        name="currentAttendance"
                                        
                                        required
                                    />
                                    <label className='w-100 text-center' htmlFor="currentAttendance">Current Attendance Percentage</label>
                                    <div className="invalid-feedback">
                                        Please enter Current Attendance Percentage.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input
                                        type="tel"
                                        maxLength={2}
                                        className="form-control shadow border border-primary text-center"
                                        id="bunks"
                                        name="bunks"
                                        
                                        required
                                    />
                                    <label htmlFor="bunks">Enter Bunks</label>
                                    <div className="invalid-feedback">
                                        Please Enter Bunks
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input
                                        type="tel"
                                        maxLength={2}
                                        className="form-control shadow border border-primary text-center"
                                        id="attend"
                                        name="attend"
                                        
                                        required
                                    />
                                    <label htmlFor="attend">Lectures you want to Attend</label>
                                    <div className="invalid-feedback">
                                        Please Enter Number of Classes you want to attend
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col text-center">
                                <button className="button-85 mt-3" type="submit">Submit</button>
                            </div>
                        </div>
                    </form >

                    :

                    <form onSubmit={onSubmit} id='form' className="container h-100 mt-3 px-5 py-3 needs-validation" noValidate>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-3 ">
                                <div className="form-floati">
                                    <label  className="w-100 text-center"htmlFor="sub">Enter Total Subjects(as per ERP)</label>
                                    <input
                                        type='number'
                                        min='1'
                                        max='15'
                                        className="form-control shadow border border-primary  text-center px-3"
                                        id="sub"
                                        
                                        name="subjects"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please Enter a valid Subject Value.<br />(cannot be greater than 15)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <button className="button-85 mt-3" type="submit">Proceed</button>
                            </div>
                        </div>
                    </form>
            }
            
            {
                done &&
                <div className='mx-3 mt-5  px-3 pb-4 text-center'>
                    <h1 className='custom-font result-color'>New Attendance: {newAttendance}%</h1>
                    <h4>{difference}</h4>
                </div>
            }

                {/*New Features  */}

            {/* <div className='text-center'>
                <button onClick={toggleClick} className='btn btn-outline-primary'>How to Use</button>
            </div> */}
        </>
    )
}
