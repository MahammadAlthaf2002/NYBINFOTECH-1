import React from 'react'
import Child1 from './Child1'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child1
        name="Rahul"
        age={20}
         city="Hyderabad"
  course="React"
      />
      <Child
        name="Rahul"
        age={21}
        city="Hyderabad"
        isPassed={true}
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />

      < Child
        name="Ali"
        age={22}
        city="Bengaluru"
        isPassed={false}
        skills={["Java", "Spring Boot"]}
        />

    </div>
  )
}

export default Parent
