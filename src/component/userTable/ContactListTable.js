import React, {Component} from "react";
import "./ContactListTable.css";

class ContactListTable extends Component{
    constructor(props){
        super(props);

    }
    //https://codeburst.io/redux-a-crud-example-abb834d763c9
// so default is this style:
editBtnStyle = {
    backgroundColor: '#008CBA',
    color:'white'
}
// so default is this style:
deleteBtnStyle = {
    backgroundColor: '#f44336',
    color:'white'
}
    render(){
        const {user} = this.props;
//console.log(user.length);
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>pincode</th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                {user.length>0?(
                    user.map(user=>(
                        <tr key={user.id} index={user.id}>
                        <td>{user.name}</td>
                        <td>{user.contactno}</td>
                        <td>{user.pincode}</td>
                        <td>
                            <button onClick={()=>this.props.handleUpdateData({user,edit:true})}   style={this.editBtnStyle} className="button muted-button">Edit</button>
                            &nbsp;&nbsp;&nbsp; 
                            <button onClick={()=>this.props.handleDeleteData(user)}   style={this.deleteBtnStyle} className="button muted-button">Delete</button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td>No Users found</td>
                    </tr>
                )

                }
                   
                </tbody>
            </table>
        )
    }
}

export default ContactListTable;