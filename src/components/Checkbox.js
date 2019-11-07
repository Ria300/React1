import React,{Component} from 'react'
class Checkbox extends Component
{
    state={ acceptedAgreement:false};
    handleAgreementChange=(e)=>{
        const acceptedAgreement=e.target.checked;
        this.setState({acceptedAgreement});
    }
    
    render(){
        return(
            <form>
                <label>
                    I accept the acceptedAgreement
                    <input checked={this.state.acceptedAgreement} onChange={this.handleAgreementChange} type="checkbox"/>
                </label>
            </form>
        );
}
}
export default Checkbox;