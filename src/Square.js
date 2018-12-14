import React from 'react'

export default  class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "grey",
       }
  
    }



    onClick = (e) => {
    this.props.parentMethod(e.target.id);
    }       



    render() {
        return (
            <div
                onClick={this.onClick}
                id={this.props.count}
                className="color"
                style={{
                    backgroundColor: this.props.color,
                }}
            >
            </div>

        );
    }
 }