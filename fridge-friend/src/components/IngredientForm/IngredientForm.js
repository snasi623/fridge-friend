import React from 'react';
import styles from './IngredientForm.module.css';

export default class IngredientForm extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this.handleSave = this.handleSave.bind(this);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleNewIngredientNameChange = this.handleNewIngredientNameChange.bind(this)

        this.state = {
            newIngredientName: "",
            items: this.props.meal.ingredients
        };
    }
    
    handleAddIngredient(e) {
        e.preventDefault();

        let ingredientName = this.state.newIngredientName.trim()
        
        if (ingredientName !== "" && this.state.items.indexOf(ingredientName) === -1) {
            this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(this.state.newIngredientName.trim()) 
                };
            });
        }

        this.inputRef.current.value = "";
    }

    handleNewIngredientNameChange(e) {
        this.setState({newIngredientName: e.target.value});
    }

    handleSave(e) {
        e.preventDefault();

        this.props.meal.ingredients = this.state.items    
    }
    
    render() {
        return (
            <div>  
                <ul>
                    {this.state.items.map((item) => 
                        <li key={item}>{item}</li>
                    )}
                </ul>
                <form onSubmit={this.handleAddIngredient}>
                    <input 
                        ref={this.inputRef}
                        onChange={this.handleNewIngredientNameChange}
                        placeholder="Add Ingredient" 
                        className="ingredient form-control" />
                    
                    <button className="btn btn-success" type="submit">+</button>
                </form>
                <br />
                <form onSubmit={this.handleSave}>
                    <button className="btn btn-sm btn-primary" type="submit" title="Save"><i className="fas fa-save fa-fw"></i></button>
                </form>
            </div>
        );
    }
}