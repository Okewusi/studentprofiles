import React, {useState, useEffect} from 'react';
import Display from './Display';


const Home = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch(`https://api.hatchways.io/assessment/students`)
            .then(response => response.json())
            .then(json => {
            setApiData([...json.students]);
            console.log(json.students)
        })
    },[]);
    
  return (
    <div className='container'>
        {apiData.map(data=>(
    <Display  id = {data.id} pic = {data.pic} firstName = {data.firstName} email = {data.email }  company  = {data.company} skill= {data.skill}  grades = {data.grades} />
        ))}
    </div>
  )
}

export default Home