import React, { Component, createElement } from 'react'
const regEmail= RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regName = (/^[a-zA-Z ]{2,100}$/);

class Form extends Component {
     constructor(props) {
         super(props)
         this.state = {
              name:"",
              email:"",
              skill:"", 
              items:[{name:"Kashyap",email:"Kashyap@gmail.com",skill:"React"}]
         }
     }
    nameHandler= event =>{
        this.setState({
            name:event.target.value,
        })
        console.log(this.state.items);
    }
    emailHandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    skillHandler=(event)=>{
        this.setState({
            skill:event.target.value
        })
    }
    
    showData=(event)=>{
        event.preventDefault();
        
        if(this.state.name=="" || this.state.email=="" || this.state.skill==""){
            alert("Fill the complete form");
        }
        else if(!regName.test(this.state.name)){
            alert("Invalid Name");
        }
        else if(!regEmail.test(this.state.email)){
            alert("Invalid email");
        }
        else{
            this.setState({items:[...this.state.items,{name:this.state.name, email:this.state.email, skill:this.state.skill}]});
        }
    }
   
    
    
    render() {
        return (
            <div>
                <form>
                    <table className="inputs">
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" onChange={this.nameHandler} value={this.state.name}/></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="text" onChange={this.emailHandler} value={this.state.email}/></td>
                        </tr>
                        <tr>
                            <td>Skill:</td>
                            <td><input type="text" onChange={this.skillHandler} value={this.state.skill}/></td>
                        </tr>
                        <tr colSpan="2" >
                            <button type="submit" onClick={this.showData}>Click here</button>
                        </tr>
                    </table>
                </form>
                <div>
                    <table className="outputs" border="1px">
                      
                            <tr>
                                <td><b>Sr no.</b></td>
                                <td><b>Name</b></td>
                                <td><b>Email</b></td>
                                <td><b>Skills</b></td>
                            </tr>
                      
                        {this.state.items.map((value,index)=> {return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.skill}</td>                
                            </tr> 
                        )})}
                    </table>
                </div>
            </div>
        )
    }
}

export default Form