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
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value})}/>
            </div>
        );
    }
}


//make this component available to other files.
export default SearchBar;