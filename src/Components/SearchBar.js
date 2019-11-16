import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    // Creating a controlled component by adding state.
    state = { term: '' }

    onFormSubmit = (e) => {
        e.preventDefault();
        // calling the method that was passed down via props from App component
        this.props.onSubmit(this.state.term)
    }

    render () {
        return (
            <div className="SearchBar">
                <form className="full-container" onSubmit={this.onFormSubmit}>
                    <div className="input-container">
                        <label>Image Search</label>
                        {/* Creating a controlled component by adding value and arrow function to update state. */}
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;