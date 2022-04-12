import React, {useState, useEffect} from 'react';
import Display from './Display';
import '../App.css';
import Search from './Search';

const Home = () => {
    const [apiData, setApiData] = useState([]);
    const [value, setValue] = useState('');
    //  Fetch api data on load of webpage and store api data in state
    useEffect(() => {
        fetch(`https://api.hatchways.io/assessment/students`)
            .then(response => response.json())
            .then(json => {
            setApiData([...json.students]);
        })
    },[]);
    
  return (
    <div className='container'>
        <Search setValue={setValue} />
        {/* if no value in search input show all api data else show only items that satisfy the search input */}
        {apiData.filter(data=>{
            if(value ===""){
                return data
            }else{
                return data.firstName.toLowerCase().startsWith(value.toLowerCase()) || data.lastName.toLowerCase().startsWith(value.toLowerCase())
            }
        }).map(data=>(
            <Display  key = {data.id} pic = {data.pic} firstName = {data.firstName} lastName={data.lastName} email = {data.email }  company  = {data.company} skill= {data.skill}  grades = {data.grades}  />
        ))}
    </div>
  )
}

export default Home