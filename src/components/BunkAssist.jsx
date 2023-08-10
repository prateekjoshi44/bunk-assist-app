import React, { useState } from 'react'

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

            const newAttendance = parseFloat(((attended / newTotal) * 100)).toFixed(3);
            setNewAttendance(newAttendance);

            let diff;
            if (newAttendance > currentAttendance) {
                diff = "Attendance Increased by " + (newAttendance - currentAttendance).toFixed(3);
            } else {
                diff = "Attendance Decreased by " + (currentAttendance - newAttendance).toFixed(3);
            }
            setDifference(diff);
            setDone(true)
        }
        form.classList.add('was-validated')
    }


    return (
        <>
            <div className='p-3 mt-5'>
                <h5 className='text-center'>Wondering if you can skip a few lectures?</h5>
                <p className='text-center '>With BunkBuddy, simply input the number of classes you're considering missing, and get an instant projection of how your attendance will be affected. Stay informed, make informed choices, and keep your attendance on track with BunkBuddy.</p>
            </div>
            {
                subjectEntered ?

                    <form onSubmit={handleSubmit} className="container h-100 px-5 py-3 needs-validation" noValidate>

                        <div className="row row-cols-lg-4 g-3">

                            {
                                subjectArea.map((sub, index) =>
                                    <div className="col-md-3" key={index}>
                                        <div className="form-floating">
                                            <input
                                                type="tel"
                                                maxLength={2}
                                                className="form-control"
                                                name={`sub${index + 1}`}
                                                id={`sub${index}`}
                                                required
                                            />
                                            <label htmlFor={`sub${index}`}>{`Lectures Attended in Subject ${index + 1}`}</label>
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
                                        className="form-control p-2"
                                        id="currentAttendance"
                                        name="currentAttendance"
                                        required
                                    />
                                    <label htmlFor="currentAttendance">Current Attendance Percentage</label>
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
                                        className="form-control"
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
                                        className="form-control"
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
                                <button className="btn custom-color shadow mt-3" type="submit">Submit</button>
                            </div>
                        </div>
                    </form >

                    :

                    <form onSubmit={onSubmit} className="container h-100 mt-5 px-5 py-3 needs-validation" noValidate>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-3 ">
                                <div className="form-floating ">
                                    <input
                                        type='number'
                                        min='1'
                                        max='50'
                                        className="form-control shadow"
                                        id="sub"
                                        name="subjects"
                                        required
                                    />
                                    <label htmlFor="sub">Enter Total Subjects(as per ERP)</label>
                                    <div className="invalid-feedback">
                                        Please Enter a valid Subject Value.<br />(cannot be greater than 50)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <button className="btn custom-color shadow mt-3 px-3 py-2 " type="submit">Proceed</button>
                            </div>
                        </div>
                    </form>
            }
            
            {
                done &&
                <div className='m-3 pb-4'>
                    <h2>New Attendance: {newAttendance}</h2>
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
