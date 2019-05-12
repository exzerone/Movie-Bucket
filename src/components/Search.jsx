import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      query: '',
      result: []
    };
    this.queryHandler = this.queryHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
	}

	queryHandler(e) {
    e.preventDefault();
    this.setState({query:e.target.value})
	}

	clickHandler(e) {
    e.preventDefault();
    // var array = this.state.result;
    for (let movie of this.props.movies){
      if (movie['title'].toLocaleLowerCase().indexOf(this.state.query.toLocaleLowerCase()) !== -1){
        this.state.result.push(movie);
      } else {
        this.props.searchHandler([])
      }
    }
    console.log(this.state.result);
		this.props.searchHandler(this.state.result);
	}

	render() {
		return (
			<div>
				<input
					onChange={this.queryHandler}
					type="text"
          className="search_bar"
          placeholder="Search Movie..."
				/>
				<input
					onClick={this.clickHandler}
					type="submit"
					className="searchbutton"
					value="Go!"
				/>
			</div>
		);
	}
}

export default Search;
