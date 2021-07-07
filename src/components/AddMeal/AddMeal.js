import React, {Component} from 'react';
import styles from './AddMeal.module.css';

class AddMeal extends Component {
    constructor(props) {
        super(props)
        this.state = {mealName: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addMeal = this.addMeal.bind(this);
        this.inputRef = React.createRef();
    }

    handleChange(event) {
        this.setState({mealName: event.target.value});
    }

    addMeal(event) {
        event.preventDefault();
        this.props.onClick(this.state.mealName);
        this.inputRef.current.value = "";
    }

    render() {
        return (
            <div className={styles.FridgeFriendApp}>
                <form onSubmit={this.addMeal}>
                    <input className="form-control" ref={this.inputRef} type="text" onChange={this.handleChange} placeholder="Add a Meal"></input>
                    <button className="btn btn-success" type="submit">+</button>
                </form>
            </div>
        );
    }
}

export default AddMeal