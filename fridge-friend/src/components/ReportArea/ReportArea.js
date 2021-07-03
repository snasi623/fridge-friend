import React, {Component} from 'react';

class ReportArea extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            checkedMeals: []
        }
        this.handleReportCheckboxChange = this.handleReportCheckboxChange.bind(this)
    }

    handleReportCheckboxChange(e, meal) {
        this.setState((prevState) => {
            return { 
                checkedMeals: prevState.checkedMeals.concat(meal) 
            };
        });
    }

    getUniqueListOfIngredients() {
        let result = []

        for (let meal in this.state.checkedMeals) {
            if (result.indexOf(meal) === -1) {
                result = result.concat(this.state.checkedMeals[meal].ingredients)
            } else {
                result.splice(result.indexOf(meal), 1)
            }
            
        }

        result.sort()

        return [...new Set(result)]
    }

    render() {
        return (
            <div>
                <h1>Report Area</h1>
                <h2>Check what you want to eat this week</h2>
                <form> 
                    {this.props.meals.map((meal, index) => (
                        <span key={index}>
                            <input
                                type="checkbox"
                                className="checkbox-no-break"
                                onChange={(e) => this.handleReportCheckboxChange(e, meal)} 
                                name={index}
                            />

                            <label htmlFor={index}>{meal.name}</label>
                        </span>
                    ))}
                </form>

                <div className="card card-default">
                    <div className="card-header">My Groceries</div>
                    <div className="card-body">
                    {this.getUniqueListOfIngredients().map((ingredient, index) => (
                        <p key={index}>{ingredient}</p>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportArea