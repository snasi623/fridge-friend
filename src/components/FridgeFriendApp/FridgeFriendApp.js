import React, { Component } from 'react';
import MealList from '../MealList/MealList';
import AddMeal from '../AddMeal/AddMeal'
import ReportArea from '../ReportArea/ReportArea';
import styles from './FridgeFriendApp.module.css';

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

    deleteMeal(meal) {
        this.setState((prevState) => {
            let updatedMeals = prevState.meals

            if (prevState.meals.indexOf(meal) !== -1) {
                updatedMeals.splice(meal, 1)
            }
        
            return {
                meals: updatedMeals
            }
        })
    }

    render() {
        return (
            <div className={styles.FridgeFriendApp}>
                <h1>Fridge Friend</h1>
                <MealList meals={this.state.meals}
                    deleteMeal={(meal) => this.deleteMeal(meal)} />
                <AddMeal onClick={this.addItem} />

                <br />
                <ReportArea meals={this.state.meals} />
            </div>
        )
    }
}

export default FridgeFriendApp;