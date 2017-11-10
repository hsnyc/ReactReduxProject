import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//Youtueb API key
const API_KEY = 'AIzaSyDs8zTWMQoKbbUxOFS8Stsyx3lBJHsnJ1c'; 

//YTSearch({key: API_KEY, term: 'surfboards'}, console.log(this.state.videos));

//creating a class based component
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };

        //lets do a search
        YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

//take this component's generated html and put it on the page (in the DOM). Must render an instance of the Class App. Not the class itself. So when passing wrap it in JSX syntax.
ReactDOM.render(<App/>, document.querySelector('.container'));