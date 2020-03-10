import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import  AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class BusinessInput extends Component {
    continue =(e)=>
    {
e.preventDefault();
this.props.next();

    }
    Previous =(e) =>
    {

        e.preventDefault();
        this.props.previous();
    }
    render() {
        return (
            <MuiThemeProvider>
              <React.Fragment>
<AppBar title='Enter Business Details'></AppBar>
<TextField  defaultValue ={this.props.value.email} floatingLabelText =" Email" hintText="Enter Email" onChange={this.props.onChange('email')}></TextField>
<br></br>
<TextField  defaultValue ={this.props.value.cityName} floatingLabelText =" cityName" hintText="Enter cityName" onChange={this.props.onChange('cityName')}></TextField>
<br></br>
<TextField  defaultValue ={this.props.value.countryName} floatingLabelText =" countryName" hintText="countryName" onChange={this.props.onChange('countryName')}></TextField>
<br></br>
<RaisedButton label="Continue" primary={true} onClick ={this.continue}></RaisedButton>
<br></br>
<br></br>
<RaisedButton label="Previous" primary={true} onClick ={this.Previous}></RaisedButton>
           </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default BusinessInput
