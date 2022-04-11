import React from 'react'

const Search = ({setValue, setTagValue}) => {
    // const[value,setValue]=useState('')
    // const filterResult=(e)=>{
    //     setValue(e.target.value)
    //     if(value.length){
    //         let display = apiData.filter(data=>{
    //         return data.firstName.toLowerCase().startsWith(value.toLowerCase()) || data.lastName.toLowerCase().startsWith(value.toLowerCase())

    //     })
    //     setApiData([...display]) 
    //     }
        
    // }
  return (
    <div className='searchcontainer'>
        <input  placeholder='Search by name' onChange={(e)=>setValue(e.target.value)}/>
        <input  placeholder='Search by tag' onChange={(e)=>setTagValue(e.target.value)}/>
    </div>
  )
}

export default Search