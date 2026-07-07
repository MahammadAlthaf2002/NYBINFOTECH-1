import React from 'react'
import Footer from '../props/Footer'
import Header from '../props/Header'

const Props = () => {
  return (
    <div>
        < Footer
        name="Rahul"
        age={20}
         city="Hyderabad"
  course="React"
      />
      <Header 
        name="Rahul"
        age={21}
        city="Hyderabad"
        isPassed={true}
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />

      < Header
        name="Ali"
        age={22}
        city="Bengaluru"
        isPassed={false}
        skills={["Java", "Spring Boot"]}
        />

    </div>
  )
}

export default Props
