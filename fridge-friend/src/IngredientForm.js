import React from 'react';

export default class IngredientForm extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        if (this.inputRef.current.value !== "") {
            var newItem = {
                text: this.inputRef.current.value,
                key: Date.now()
            };
       
            this.props.addItem(newItem);
         
            this.inputRef.current.value = "";
        }
        
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={this.inputRef} placeholder="Enter Ingredient" className="ingredient"></input>
                <input placeholder="Enter Amount" className="amount"></input>
                <input placeholder="Enter Measurement" className="measurement"></input>
                <button type="submit">+</button>
            </form>
        );
    }
}