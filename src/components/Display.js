import React from 'react';


const Display = ({id,pic,firstName,email,company,skill,grades}) => {
    const average = (array)=>{
        let newArray = [];
        for(let item of array){
            newArray.push(parseInt(item))
        }
        let sum = newArray.reduce((a,b)=>{return(a+b)})
        return parseInt(sum)/ newArray.length
    }
  return (
    <div key={id}>
        <div>
            <img src={pic} alt={firstName}/>
        </div>
        <div>
            <h2>{firstName}</h2>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {average(grades)}%</p>
        </div>
    </div>
  )
}

export default Display