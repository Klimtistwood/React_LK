import React from "react"
import ComponentTest from "../components/ComponentTest"

export default class Test extends React.Component{

    constructor(props){
        super(props);

        this.state={
            numberA  : 1,
            numberB : 2,
            msg : "Hey dude"
        }
    }

    handleChange = () => {
        this.setState({ msg : "NOTHING"})
    }

    render(){
        return(
            <div>
                <ComponentTest 
                    func = {this.handleChange}
                />
                {this.state.msg}
            </div>
        )
    }
}