import React, { Component } from 'react';
import {connect} from "react-redux"

class ReduxTodo extends Component {
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


  render() {
      console.log(this.props.book)
    return (
        <div className="container">
             <h1>hi</h1>
        </div>
    );
  }
}

const mapStateToProps = state => ({
book :state.app
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodo);
