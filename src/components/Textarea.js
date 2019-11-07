import React,{Component} from 'react'
class Textarea extends Component{
    state=
    { bio: ''};
    handleBiochange=(e)=>{
        const bio=e.target.value;
        this.setState({bio});
    };
    render(){
        return(
            <div>
            <form>
            <div> Bio:</div>
<textarea  value={this.state.bio} onChange={this.state.bio}/>
  </form>  
  </div> 
     )
    }
}
export default Textarea
