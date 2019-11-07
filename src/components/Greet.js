import React from 'react'
//function Greet()

//{
   // return <h1>Hello ria!!</h1> function component
//}
const Greet=(props) =>{
return(
   <div>
      <h1> Hello Mr {props.name} how are you?{props.ans}</h1>
   
{props.children}
</div>
)
}
export default Greet;
