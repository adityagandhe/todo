import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import  AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class PersonalInput extends Component {
    continue =(e)=>
    {
e.preventDefault();
this.props.next();

    }
    render() {

        return (
            <MuiThemeProvider>
              <React.Fragment>
<AppBar title='Enter Personal Details'></AppBar>
<TextField  defaultValue ={this.props.value.firstName} floatingLabelText =" First Name" hintText="Enter First Name" onChange={this.props.onChange('firstName')}></TextField>
<br></br>
<TextField  defaultValue ={this.props.value.lastName} floatingLabelText =" last Name" hintText="Enter last Name" onChange={this.props.onChange('lastName')}></TextField>
<br></br>
<TextField  defaultValue ={this.props.value.Id} floatingLabelText =" Id" hintText="Enter Id" onChange={this.props.onChange('Id')}></TextField>
<br></br>
<RaisedButton label="Continue" primary={true} onClick ={this.continue}></RaisedButton>
           </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default PersonalInput
