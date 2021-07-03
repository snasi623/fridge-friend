import React, { Component } from 'react';
import MealList from '../MealList/MealList';
import AddMeal from '../AddMeal/AddMeal'
import ReportArea from '../ReportArea/ReportArea';
import './FridgeFriendApp.css'

class FridgeFriendApp extends Component {
    constructor(props) {
        super(props)
        this.state = {meals: []};
        this.addItem = this.addItem.bind(this)
    }

    addItem(mealName) {
        this.setState({
            meals: [
                ...this.state.meals,
                {
                    name: mealName,
                    ingredients: []
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <h1>Fridge Friend</h1>
                <MealList meals={this.state.meals} />
                <AddMeal onClick={this.addItem} />

                <br />
                <ReportArea meals={this.state.meals} />
            </div>
        )
    }
}

export default FridgeFriendApp;