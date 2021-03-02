import React from 'react';
import SearchBar from './SearchBar';
import './App.css';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component  {
    state = {videos : [] , vidSel:null}

    componentDidMount () {
        this.onSearchSubmit('google')
    }
    onSearchSubmit = async (term) =>{
        const response = await youtube.get(
            '/search',
            {
                params:{q : term} 
            }
        );
        this.setState(
            {
                videos:response.data.items ,
                vidSel:response.data.items[0]
            }
        )
    }

    onVideoSelect = (video) => {
        this.setState({vidSel:video});
    }

    render () {
    return (
    <div className="ui container"> 
        <SearchBar onBarSubmit={this.onSearchSubmit} />
        <div className="ui grid">
            <div class="four wide column">
                <VideoList videos={this.state.videos} onVidSel={this.onVideoSelect}/>
            </div>
            <div class="eleven wide column">
                <VideoDetail video={this.state.vidSel}/>
            </div>
        </div>
    </div>
    );
    }
}

export default App;