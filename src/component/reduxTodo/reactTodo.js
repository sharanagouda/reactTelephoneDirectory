import React, { Component } from 'react';
import ContactListTable from "../../component/userTable/ContactListTable"
import AddContact from '../../component/forms/AddContact';
import EditContact from '../../component/forms/EditContact';
import "./reactTodo.css";

class ReactTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            usersData: [
                { id: 1, name: "Sharanagouda", contactno: "9876543210", pincode:516408 },
                { id: 2, name: "Devid", contactno: "1236547890",pincode:560012 },
                { id: 3, name: "john", contactno: "1245789630", pincode:585103 },
                { id: 4, name: "Kumar", contactno: "9874662540", pincode:661087 }
              ],
        }
    }


  //Create a new Data
  handleAddContactData = userDetails => {
    const newArray = {
      id: this.state.usersData.length + 1,
      //id:new Date(),
      name: userDetails.name,
      contactno: userDetails.contactno,
      pincode:userDetails.pincode
    };
    this.setState({
      usersData: [...this.state.usersData, newArray]
    });
    console.log(JSON.stringify(this.state.usersData));
    
  };

  // Delete data
  handleDeleteData = index => {
    this.setState( {
      usersData: this.state.usersData.filter(i => i !== index)
    });
  };

  handleUpdateData = updatedData => {
    this.setState({
        edit: updatedData.edit,
        oldUserData: {
            id:updatedData.user.id,
            name:updatedData.user.name,
            contactno:updatedData.user.contactno,
            pincode:updatedData.user.pincode
        }
});

const newArray = this.state.usersData;
newArray[updatedData.user.id-1] = updatedData.user
  this.setState({
    usersData : newArray
  })
  console.log(this.state.usersData);
};


  render() {
    return (
        <div className="container">
        <h1 style={{textAlign:"center"}}>Telephone Directory Application (TDA)</h1>
        <div className="flex-row">
          <div className="flex-one">
            {this.state.edit ? (
              <div>
                <h2>Edit contact form</h2>
                <EditContact
                  edit={this.state.edit}
                  usersData={this.state.oldUserData}
                  handleUpdateData={this.handleUpdateData}
                />
              </div>
            ) : (
              <div>
                <h2>Add contact form</h2>
                <AddContact handleAddContactData={this.handleAddContactData} />
              </div>
            )}
          </div>
          <div className="flex-two">
            <h2>View All Contacts</h2>
            <ContactListTable
              user={this.state.usersData}
              handleDeleteData={this.handleDeleteData}
              handleUpdateData={this.handleUpdateData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactTodo;
