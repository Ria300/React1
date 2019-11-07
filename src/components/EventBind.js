import React,{Component} from 'react'
class EventBind extends Component{
    constructor(props)
    {
        super(props)
this.state= {
    message:'Hello'
}
        
        
    }
clickHandler()
{
    this.setState(
        {
            message: 'Good bye!!'
        }
    )
console.log(this)
}
    render(){
    return(
<div>
    <div>{this.state.message}</div>
<button onClick={this.clickHandler.bind(this)}>CLICK</button>
</div>
    )
    }
}
export default EventBind
//event binding in react