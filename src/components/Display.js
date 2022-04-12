import React, {useState} from 'react';
import '../../src/App.css';


const Display = ({pic,firstName,lastName,email,company,skill,grades}) => {
    const average = (array)=>{
        let newArray = [];
        for(let item of array){
            newArray.push(parseInt(item))
        }
        let sum = newArray.reduce((a,b)=>{return(a+b)})
        return parseInt(sum)/ newArray.length
    }
    const [show, setShow] = useState(false);
    const [ tag, setTag] = useState([]);
    const addTag = (e)=>{
        if(e.keyCode === 13 && e.target.value){
            let item = e.target.value;
        setTag((oldvalues)=>{
            return [...oldvalues,item]
        })
        e.target.value = ''
        }
        
    }
  return (
    <div className='itemcontainer'>
        <div className='leftImg'>
            <img src={pic} alt={firstName}/>
        </div>
        <div className='rightTexts'>
            <h2>
                {firstName.toUpperCase()} {lastName.toUpperCase()}
            </h2>
            <div>
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Skill: {skill}</p>
                <p>Average: {average(grades)}%</p>
                <div className={show ? "show" : 'hidden'}>
                    <p>Test 1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {grades[0]}</p>
                    <p>Test 2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grades[1]}</p>
                    <p>Test 3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grades[2]}</p>
                    <p>Test 4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grades[3]}</p>
                    <p>Test 5: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grades[4]}</p>
                    <p>Test 6: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grades[5]}</p>
                    <p>Test 7: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grades[6]}</p>
                    <p>Test 8: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grades[7]}</p>
                </div>
                <div className='tagcontainer'>
                {tag ? tag.map(item=>(
                    <p className='tags'>
                        {item}
                    </p>
                )): null}
                </div>
                <input type='text' placeholder='Add a tag' className='taginput' onKeyDown={(e)=>addTag(e)} />
             </div>
        </div>
        
        <button className='btnplus' onClick={()=>setShow(!show)} >+</button>
    </div>
  )
}

export default Display