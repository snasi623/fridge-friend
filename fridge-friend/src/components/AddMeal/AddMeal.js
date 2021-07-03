import React, {Component} from 'react';
import './AddMeal.css'

class AddMeal extends Component {
    constructor(props) {
        super(props)
        this.state = {mealName: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addMeal = this.addMeal.bind(this);
    }

    handleChange(event) {
        this.setState({mealName: event.target.value});
    }

    addMeal(event) {
        event.preventDefault();
        this.props.onClick(this.state.mealName);
    }

    render() {
        return (
            <div className="AddMeal">
                <form onSubmit={this.addMeal}>
                    <input className="form-control" type="text" value={this.state.mealName} onChange={this.handleChange} placeholder="Add a Meal"></input>
                    <button className="btn btn-success" type="submit">+</button>
                </form>
            </div>
        );
    }
}

export default AddMeal