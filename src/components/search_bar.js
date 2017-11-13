import React from 'react';

//class base component
class SearchBar extends React.Component {
    
    //add constructor
    constructor(props) {
        super(props);
        this.state = { term: ''};
    }
    
    render() {
        
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


//make this component available to other files.
export default SearchBar;