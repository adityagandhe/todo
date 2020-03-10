import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import  AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'


export class Confirm extends Component {
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
<AppBar title='Confirm Details'></AppBar>
<List>
    <ListItem  primaryText="First Name" secondaryText={this.props.value.firstName}> </ListItem>
    <br></br>
    <ListItem  primaryText="last Name" secondaryText={this.props.value.lastName}> </ListItem>
    <br></br>
    <ListItem  primaryText="Id" secondaryText={this.props.value.Id}> </ListItem>
    <br></br>
    <ListItem  primaryText="Email" secondaryText={this.props.value.email}> </ListItem>
    <br></br>
    <ListItem  primaryText="City Name" secondaryText={this.props.value.cityName}> </ListItem>
    <br></br>
    <ListItem  primaryText="Country Name" secondaryText={this.props.value.countryName}> </ListItem>
    <br></br>
</List>
<RaisedButton label="Confirm & Continue" primary={true} onClick ={this.continue}></RaisedButton>
<br></br>
<br></br>
<RaisedButton label="Previous" primary={true} onClick ={this.Previous}></RaisedButton>
           </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default Confirm
