import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import keys from '../unsplashKeys';

class App extends React.Component {

    state = {
        images: []
    }

    // Using async and await instead of .then to hold http response. Using a special arrow function with async in order to keep this context.
    onSearchSubmit = async (term) => {
        const resp = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID ' + keys.accessKey
            }
        })
        
        this.setState({ images: resp.data.results})

    }

    render () {
        return (
            <div>
                {/* Passing method as props that will be used as a callback in SearchBar comoopnent */}
                < SearchBar onSubmit={this.onSearchSubmit} />
                <p>There are {this.state.images.length} images.</p>
            </div>
        )
    }
}

export default App;