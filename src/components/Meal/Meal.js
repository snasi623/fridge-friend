import React, {Component} from 'react';
import IngredientForm from '../IngredientForm/IngredientForm';
import styles from './Meal.module.css';

class Meal extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            showForm: false,
            items: []
        }
    }

    _showForm = (bool) => {
        this.setState({
            showForm: bool
        });
    }

    render() {
        return (
            <div className="card card-primary">
                <div className="card-header meal-name">
                    <div className="row">
                        <div className="col-sm-6"><strong>{this.props.meal.name}</strong></div> 
                        <div className="col-sm-6">
                            <div className="btn-group btn-group-sm">
                                <button className="btn btn-sm btn-light" onClick={this._showForm.bind(null, true)}>Open</button>
                                <button className="btn btn-sm btn-dark" onClick={this._showForm.bind(null, false)}>Close</button>
                                <button className="btn btn-sm btn-danger" onClick={this.props.deleteFunction}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                { this.state.showForm ? <div className="card-body"> 
                    <IngredientForm meal={this.props.meal} />
                </div> : '' }
            </div>
        );
    }
}

export default Meal