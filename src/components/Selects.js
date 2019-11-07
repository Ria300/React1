import React ,{Component} from 'react'
class Selects extends Component{
    state={
color:''
    };
    handleColorchange=(e)=>{
        const color=e.target.value;
        this.setState({color});
    };
    render(){
        return(
<form>
    <label>Desired color:</label>
    <select value={this.state.color} onChange={this.handleColorchange}>
        
        <option></option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
    </select>
    <h1> Color selected is {this.state.color}</h1>
</form>
        );
    }
}
export default Selects