import React from 'react';
import styles from './IngredientForm.module.css';

export default class IngredientForm extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this.handleSave = this.handleSave.bind(this);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleNewIngredientNameChange = this.handleNewIngredientNameChange.bind(this)
        this.deleteIngredient = this.deleteIngredient.bind(this)

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
    
    deleteIngredient(item) {
        this.setState((prevState) => {
            let updatedIngredients = prevState.items

            if (prevState.items.indexOf(item) !== -1) {
                updatedIngredients.splice(item, 1)
            }
            this.state.items = updatedIngredients
        })
        this.forceUpdate()
    }

    render() {
        return (
            <div className={styles.IngredientForm}>  
                <div className="row">
                    <div className="col-sm-6">
                        <ul>
                        {this.state.items.map((item) => 
                            <li key={item}>{item} 
                                <button className="btn btn-sm btn-danger" onClick={() => this.deleteIngredient(item)}>Delete</button>
                            </li>)}
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <form onSubmit={this.handleAddIngredient}>
                            <input 
                                ref={this.inputRef}
                                onChange={this.handleNewIngredientNameChange}
                                placeholder="Add Ingredient" 
                                className="ingredient form-control" />
                            
                            <button className="btn btn-success" type="submit">+</button>
                        </form>
                        <form onSubmit={this.handleSave}>
                            <button className="btn btn-sm btn-primary" type="submit" title="Save"><i className="fas fa-save fa-fw"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}