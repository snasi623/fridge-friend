import React, {Component} from 'react';

class Recipes extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        var recipeEntries = this.props.entries;
        var listItems = recipeEntries.map(this.createTasks)

        return (
            <ul className="recipeList">{listItems}</ul>
        );
    }
}

export default Recipes;