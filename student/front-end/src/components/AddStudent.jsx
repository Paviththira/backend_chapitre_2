import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddStudent = ({ changeStudentAdded }) => {
  const history = useHistory()
  const [studentName, setStudentName] = useState('')

  const sendStudent = () => {
    const url = 'http://localhost:8000/students'

    fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ student: studentName }),
    })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        changeStudentAdded(studentName)
        // message(response.message)
        history.push('/studentAdded')
      })

  }

  return (
    <div className="col-6">

      <h2>Add student</h2>

      <div>
        <label>Student Name:</label>
        <input type="text" name="studentName" onChange={(e) => setStudentName(e.target.value)}/>
      </div>

      <button className="btn btn-primary" onClick={sendStudent}>Send</button>

    </div>
  )
}

export default AddStudent