'use client'

import React from 'react';

export default class SearchBar extends React.Component{

  constructor(props){
    super(props)
    this.state={
      options: this.props.options,
      searchValue:"",
      currentFilter: "Ordinary Drink"
    }
    this.searchDrink = this.searchDrink.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  selectedChange(event){
    this.props.selectedChange(event.target.value);
  }

  searchDrink(event){
    this.setState({searchValue: event.target.value},()=>this.props.searchDrink(this.state.searchValue))
  }

  sortItems(event){
    this.props.sortItems(event.target.value);
  }

  sort

  render(){
    return(
      <form>
        <div className="row">

        <div className="col">
          <div className="form-group">
            <label htmlFor="sort">Drink Name</label>
            <input className="form-control" value={this.state.searchValue} onChange={(event) => this.searchDrink(event)} placeholder="Enter your drinks name..."/>
          </div>
        </div>


            <div className="col">
              <div className="form-group">
                <label htmlFor="sort">Sort by</label>
                <select className="form-control" id="sort" onChange={(event) => this.sortItems(event)}>
                      <option value="strDrink">Name</option>
                      <option value="idDrink">ID</option>
                </select>
              </div>
            </div>
          </div>
          <style jsx>{`
            label{
              font-size: 1.4rem;
            }
          `}</style>
      </form>
    )
  }
}
