import React, {Component} from 'react';
import Meal from '../Meal/Meal'
import styles from './MealList.module.css';

class MealList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.meals.map((meal, index) => 
                    <Meal key={index} meal={meal} deleteFunction={() => this.props.deleteMeal(meal)} />
                )}
            </div>
        );
    }
}

export default MealList;