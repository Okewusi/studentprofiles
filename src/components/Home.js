import React, {useState, useEffect} from 'react';
import Display from './Display';
import '../App.css';
import Search from './Search';

const Home = () => {
    const [apiData, setApiData] = useState([]);
    const [value, setValue] = useState('');
    const [tagValue, setTagValue] = useState('');
    const [ tag, setTag] = useState([]);
    //  Fetch api data on loadof webpage and update state
    useEffect(() => {
        fetch(`https://api.hatchways.io/assessment/students`)
            .then(response => response.json())
            .then(json => {
            setApiData([...json.students]);
        })
    },[]);
    
  return (
    <div className='container'>
        <Search setValue={setValue} setTagValue={setTagValue} tagValue= {tagValue}/>
        {/* map through array of data and display */}
        {apiData.filter(data=>{
            if(value ===""){
                return data
            }else{
                return data.firstName.toLowerCase().startsWith(value.toLowerCase()) || data.lastName.toLowerCase().startsWith(value.toLowerCase())
            }
        }).map(data=>(
            <Display  key = {data.id} pic = {data.pic} firstName = {data.firstName} lastName={data.lastName} email = {data.email }  company  = {data.company} skill= {data.skill}  grades = {data.grades} tag={tag} setTag={setTag}/>
        ))}
    </div>
  )
}

export default Home