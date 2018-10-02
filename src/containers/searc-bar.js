import React, { Component } from 'react';

export default class SearchBar extends Component {
    //turning search bar in to controlled component so that the state 
    //of the component is passed to the SearchBar
    constructor(state){
        super(state)
        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);

    }
    onInputChange(event){
        this.setState({term:event.target.value});
        // console.log(event.target.value);
    }
    onFormSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input
                placeholder='Get a five-day forecast in your favorite cities'
                className='form-control'
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}