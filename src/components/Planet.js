import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions'
//import PlanetList from './planet_list'
import { fetchMessage,fetchMessages  } from '../actions/index';
import { bindActionCreators } from 'redux';

class Planet extends Component {
    constructor(props) {
        super(props);
				this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
				let count=0;
				

		}

	/*	controlSearch(){
			if(this.props.user!=='Luke Skywalker' ){
				if(this.count==0){
				this.setState({timestamp:new Date().getSeconds()})
				}
				this.count++;
				if(this.count==3 && this.state.timestamp+59>new Date().getSeconds())
				{
					this.setState({error:'Limit exceeded!'})
				}
				else{
					this.props.fetchMessage(this.state.term);
				}
			}else{
				this.props.fetchMessage(this.state.term);
			}

		}*/
		
    onInputChange(event) {
			//console.log(event.target.value);
				this.setState({ term: event.target.value });
				
				this.props.fetchMessages(this.state.term);
    }

    onFormSubmit(event) {

        event.preventDefault();
        setTimeout(()=>{
            this.props.fetchMessage(this.state.term);
        
        this.setState({ term: '' });

        },2000)
				//we need to go and fetch .
				//this.controlSearch();
		
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Search planet"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange} />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary"> Search </button>
                    </span>
                </form>
							{this.state.error}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ fetchMessage,fetchMessages }, dispatch);
    //this will maintain the flow of action and through dispatch
    //it will reach out to moddleware and reducer.
}

function mapStateToProps(state){
	return {user:state.auth.user};
}
export default connect(mapStateToProps, mapDispatchToProps)(Planet);