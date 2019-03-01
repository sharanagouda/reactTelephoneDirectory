import React, {Component, useState} from "react";
import "./AddContact.css";

class AddContact extends Component{
    constructor(props){
        super(props);
        this.state={
                name:'',
                contactno:'',
                pincode:''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactNoChange = this.handleContactNoChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
    }


  handleNameChange(event){
      const name = event.target.value
    this.setState({ name: name })
  }
  handleContactNoChange(event){
      const contactno = event.target.value
    this.setState({ contactno: contactno })
  }
  handleAddressChange(event){
      this.setState({
          pincode:event.target.value
      })
  }

  render() {
    return (
      <form onSubmit={event=>{
      event.preventDefault();
     const { name,  contactno, pincode } = this.state
     const userData = {name, contactno, pincode};
    if (!name || !contactno || !pincode) return
     this.props.handleAddContactData(userData);
     event.target.reset();
      }}>
        <label>
          Name:
          <input required type="text" ref={(input) => this.input = input} onChange={this.handleNameChange}/>
        </label>
        <label>
          Contact no:
          <input required type="number" pattern="[0-9]*" ref={(input) => this.input = input} onChange={this.handleContactNoChange}/>
        </label>
        <label>
          Address pincode
          <input required type="number" pattern="[0-9]*" ref={(input) => this.input = input} onChange={this.handleAddressChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default AddContact;