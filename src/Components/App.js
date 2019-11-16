import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        console.log('from App component: ', term);
    }

    render () {
        return (
            <div>
                {/* Passing method as props that will be used as a callback in SearchBar comoopnent */}
                < SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;