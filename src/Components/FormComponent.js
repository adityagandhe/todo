import React, { Component } from 'react'
import PersonalInput from './PersonalInput'
import BusinessInput from './BusinessInput'
import Success from './Success'
import Confirm from './Confirm'

export class FormComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
           step: 1,
           firstName :'' ,
           lastName :'' ,
           email :'' ,
           Id :'' ,
           cityName :'' ,
           countryName :'' ,


        }
    }
nextStep =()=>{
    this.setState({
        step: this.state.step + 1
    })
}
previousStep =()=>{
    this.setState({
        step: this.state.step - 1
    })
}
handleChange =(input)=>(e)=>{

    this.setState({

      [input] :e.target.value
    })
}

    render() {

const {step,firstName,lastName,Id,email,cityName,countryName} =this.state
const values={step,firstName,lastName,Id,email,cityName,countryName}
        switch(this.state.step)
        {
          case 1:
            return (
              <PersonalInput value={values} next={this.nextStep} onChange={this.handleChange}></PersonalInput>
            )
            case 2:
            return (
              <BusinessInput value={values} previous ={this.previousStep} next={this.nextStep} onChange={this.handleChange}></BusinessInput>
            )
            case 3:
            return (
                <Confirm value={values} previous ={this.previousStep} next={this.nextStep} ></Confirm>
            )
            case 4:
                return (
                    <Success></Success>
                )

        }

    }
}

export default FormComponent
