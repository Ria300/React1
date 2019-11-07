import React,{Component} from 'react'
class Eventhandling extends Component
{
    handleClick=()=>{
        alert('clicked');
    }
    render(){
        return <button onClick={this.handleClick}>CLICK ME!!</button>
    }
}
export default Eventhandling;