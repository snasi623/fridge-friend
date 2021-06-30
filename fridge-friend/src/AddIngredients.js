import React, {Component} from 'react';
import IngredientForm from './IngredientForm';

class AddIngredients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);

    }

    createTasks(item) {
        return (            
            <div className="AddIngredients">
                <div className="header">
                    <IngredientForm addItem={this.addItem} />
                </div>
            </div>
        );
    }

    addItem = (newItem) => {
        this.setState((prevState) => {
            return { 
                items: prevState.items.concat(newItem) 
            };
        });
    }

    render() {
        return (
            <div className="AddIngredients">
                <div className="header">
                    <IngredientForm addItem={this.addItem} />
                </div>
            </div>
        );
    }
}

export default AddIngredients