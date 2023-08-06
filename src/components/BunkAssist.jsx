import React, { useState } from 'react'

export default function BunkAssist() {

    const [subjectArea, setSubjectArea] = useState([])
    const [subjectEntered, setSubjectEntered] = useState(false)
    const [newAttendance, setNewAttendance] = useState("")
    const [difference, setDifference] = useState("")
    
    const [done, setDone] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()
        setSubjectEntered(true)

        const subjects = document.getElementById('sub').value
        const arr = []
        for (let i = 0; i < subjects; i++) {
            arr.push(i);
        }
        setSubjectArea(arr)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        // let arr2 = subjectArea;
        let totalAttended = 0;
        for (let i = 0; i < subjectArea.length; i++) {
            const inputValue = document.getElementById(`sub${i}`).value;
            const numericValue = parseInt(inputValue, 10);
            totalAttended = totalAttended + numericValue;
        }
        console.log("Total Lectures", parseInt(totalAttended))

        const currentAttendance = document.getElementById('currentAttendance').value;
        const bunks = parseInt(document.getElementById('bunks').value);
        const attend = parseInt(document.getElementById('attend').value);
        // console.log(bunks)
        // console.log(attend)

        let totalLectures = (totalAttended * 100) / currentAttendance;
        totalLectures = parseInt(totalLectures)
        console.log("Total Lectures", totalLectures)

        const newTotal = totalLectures + bunks + attend;
        console.log("newTotal", parseInt(newTotal))

        const attended = totalAttended + attend;
        console.log("totalAttended", parseInt(attended))

        const newAttendance = ((attended / newTotal) * 100).toFixed(3);
        console.log("New Attendance", newAttendance);
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

    return (
        <>
            {
                subjectEntered ?

                    <form onSubmit={handleSubmit} className="container h-100 p-3 needs-validation" noValidate>
                        <div className="row g-3">

                            {
                                subjectArea.map((sub, index) =>
                                    <div className="col-md-3" key={index}>
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                name={`sub${index + 1}`}
                                                id={`sub${index}`}
                                                // onChange={(event) => handleChange(event, index)}
                                                required
                                            />
                                            <label htmlFor="sub1">{`sub${index + 1}`}</label>
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
                                    <input type="number" className="form-control" id="currentAttendance" name="currentAttendance" required />
                                    <label htmlFor="businessName">Current Attendance</label>
                                    <div className="invalid-feedback">
                                        Please choose Business Name.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="bunks" name="bunks" required />
                                    <label htmlFor="businessName">Enter Bunks</label>
                                    <div className="invalid-feedback">
                                        Please choose Business Name.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="attend" name="attend" required />
                                    <label htmlFor="businessName">classes you want to attend</label>
                                    <div className="invalid-feedback">
                                        Please choose Business Name.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col text-center">
                                <button className="btn btn-success mt-3" type="submit">Submit</button>
                            </div>
                        </div>
                    </form >

                    :

                    <form onSubmit={onSubmit} className="container h-100 mt-5 p-3 " noValidate>
                        <div className="row g-3">
                            <div className="col-md-3">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="sub" name="subjects" required />
                                    <label htmlFor="businessName">Enter Subjects</label>
                                    <div className="invalid-feedback">
                                        Please Enter Subjects
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <button className="btn btn-success mt-3 " type="submit">Proceed</button>
                            </div>
                        </div>
                    </form>
            }

{
    done &&
        <div className='m-3'>
            <h2>New Attendance: {newAttendance}</h2>
            <h4>{difference}</h4>
        </div>
}
        </>
    )
}
