import React, {Component, useState} from "react";
import "./EditContact.css";

class EditContact extends Component{
    constructor(props){
        super(props);
        this.state={
                id:this.props.usersData.id,
                name:this.props.usersData.name,
                contactno:this.props.usersData.contactno,
                pincode:this.props.usersData.pincode
        }
        console.log(this.state.pincode);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactNoChange = this.handleContactNoChange.bind(this);
       this.handleAddressChanage = this.handleAddressChanage.bind(this);
    }


  handleNameChange(event){
      const name = event.target.value
    this.setState({ name: name })
  }
  handleContactNoChange(event){
      const contactno = event.target.value
    this.setState({ contactno: contactno })
  }
  handleAddressChanage(event){
      this.setState({
          pincode:event.target.value
      })
  }
  render() {
    return (
      <form onSubmit={event=>{
      event.preventDefault();
     const { id, name,  contactno,pincode } = this.state
     const user = {id, name, contactno, pincode};
    console.log(` ${id} A first name was submitted: ${name}. An age was submitted: ${contactno}`)
    if (!id || !name || !contactno || !pincode) return
     this.props.handleUpdateData({user, edit:false});
      }}>
        <label>
          Name:
          <input type="text" className="inputField" required value={this.state.name} ref={(input) => this.input = input} onChange={this.handleNameChange}/>
        </label>
        <label>
          Contact no:
          <input type="number" className="inputField" required pattern="[0-9]*" value={this.state.contactno} ref={(input) => this.input = input} onChange={this.handleContactNoChange}/>
        </label>
        <label>
          pincode
          <input type="number" className="inputField" required pattern="[0-9]*" value={this.state.pincode} ref={(input) => this.input = input} onChange={this.handleAddressChanage}/>
        </label>
        <input type="submit" value="Update Details" />
      </form>
    );
  }
}
export default EditContact;