import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

class Signin extends Component {
    handleFormSubmit({ name, password }) {
        this.props.signinUser({ name, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops! </strong>{this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, fields: { name, password } } = this.props;
        return (
            
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Name:</label>
                    <input {...name} className="form-control" />
                    {name.touched && name.error && <div className="error">{name.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} type="password" className="form-control" />
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
            
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error }
}
function validate(formProps){
    const errors={};
    if(!formProps.name){
        errors.name='please enter a name from starWar character';
    }

    if(!formProps.password){
        errors.password='please enter DOB of starWar character';
    }
    return errors
}
export default reduxForm({
    form: 'signin',
    fields: ['name', 'password'],
    validate
}, mapStateToProps, actions)(Signin);