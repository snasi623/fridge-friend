import React, {Component} from 'react';
import Meal from '../Meal/Meal'
import styles from './MealList.module.css';

class MealList extends Component {
    render() {
        console.log(styles)
        return (
            <div>
                {this.props.meals.map((meal, index) => 
                    <Meal key={index} meal={meal} />
                )}
            </div>
        );
    }
}

export default MealList;