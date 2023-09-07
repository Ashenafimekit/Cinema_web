import React from 'react'

const Display = ({name,age,address,id}) => {
  return (
    <div>
        <ul>
            <li key={id}> Name: {name} Age: {age} Address: {address}</li>
        </ul>
  { const data = [
    {
      id: 1,
      name: "Melos",
      age: 33,
      address: "Harar"
    },
    {
      id: 2,
      name: "Meloda",
      age: 23,
      address: "Diredawa"
    },
    {
      id:3,
      name: "Alex",
      age: 33,
      address: "London"
    },
  ];


  {
    data.map((val,idx)=>{
      return <Display name={val.name} age={val.age} address={val.address} key={idx}/>
    })
    }
}
    </div>
  )
}

export default Display