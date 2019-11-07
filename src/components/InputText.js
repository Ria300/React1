import React,{Component} from 'react';

class InputText extends Component{
state={
    name: ''
}
handleNameChange=(e)=>
{
    const name=e.target.value;
    this.setState({name});
};
render(){
return(
    <div>
        <form>
            
        <div>Name:</div> <input type="text"value={this.state.name} onChange={this.handleNameChange} >
            </input>
            <strong>The typed name is :</strong>
            <span>{this.state.name}</span>
        </form>
    </div>
)

}
}
export default InputText;