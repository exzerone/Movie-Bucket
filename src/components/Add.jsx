import React from 'react';

class Add extends React.Component{
  constructor(props){
    super(props);
    this.state={
      query:"",
      result:[]
    }
    this.queryHandler = this.queryHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  queryHandler(e){
    e.preventDefault();
    this.setState({query:{title:e.target.value}})
  }

  clickHandler(e){
    e.preventDefault();
    var array = this.state.result;
    if (!this.state.result.includes(this.state.query)){
      array.push(this.state.query)
    }
    this.props.addHandler(array)
  }  

  render(){
    return(
      <div>
        <input onChange={this.queryHandler} className="addbar" type="text" placeholder="Add movie titles here..."></input>
        <input onClick={this.clickHandler} className="addbutton" type="submit" value="Add"></input>
      </div>

    )
  }
}

export default Add;