import React, {Component} from 'react';
import AddIngredients from './AddIngredients';
import './index.css';

class Meals extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text} <button className="addIngredientButton">Add Ingredient</button></li>
    }

    render() {
        var mealEntries = this.props.entries;
        var listItems = mealEntries.map(this.createTasks)

        return (
            <div className="meal">
                <div className="listItem">
                    <ul className="mealName">{listItems}</ul>
                </div>
                <AddIngredients/>
            </div>
        );
    }
}

export default Meals;