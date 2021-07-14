import { useEffect, useState } from 'react'

const StudentList = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {

    const url = 'http://localhost:8000/students'

    fetch(url)
      .then(res => res.json())
      .then(data => setStudents(data))

  }, [])

  return (
    <div className="col-6">

      <h2>List Students</h2>

      <ul>
        {
          students.map((elem, index) => {
            return <li key={index}>{elem}</li>
          })
        }
      </ul>

    </div>
  )
}

export default StudentList