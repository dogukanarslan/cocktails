import React from 'react';
import Link from "next/link";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

export default class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={
      datas: this.props.drinks,
      _datas: this.props.drinks,
    }
    this.searchDrink = this.searchDrink.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  selectedChange(selectedChange){
    console.log(selectedChange)
  }

  searchDrink(searchDrink){
    this.setState({datas: this.state._datas.filter(item => item.strDrink.toLowerCase().indexOf(searchDrink.toLowerCase()) > -1)})
  }

  sortItems(sort){
    if (sort === "idDrink"){
      this.setState({datas: this.state._datas.sort(function(a,b){return a[sort] - b[sort]})})
    } else if (sort === "strDrink"){

      this.setState({datas: this.state._datas.sort(function(a,b){
        let x = a[sort].toLowerCase();
        let y = b[sort].toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })})
    }
  }


  render(){
    return(
      <Layout>
          <div className="container">
            <SearchBar sortItems = {this.sortItems} searchDrink = {this.searchDrink} selectedChange={this.selectedChange}/>
            <div className="Drinks">
              <div className="row">
                <div className="col-12">
                <p className="lead">{this.state.datas.length} Drink results</p>
                </div>
              {this.state.datas.slice(0,12).map(item => {
                return (
                  <div className="col-6 col-md-4" key={item.idDrink}>
                      <Link href="[id]" as={`${item.idDrink}`}>
                      <div className="card mb-5" style={{cursor:"pointer"}}>
                        <img className="card-img-top" src={item.strDrinkThumb} alt="..."/>
                        <div className="card-body">
                          <p className="card-text">{item.strDrink}</p>
                          <button className="btn btn-dark btn-sm">More Info</button>
                        </div>
                      </div>
                    </Link>
                    <style jsx>{`
                      .card:hover {
                        opacity: 0.6;
                      }
                    `}</style>
                  </div>
                )
              })}
              </div>
            </div>
          </div>


      </Layout>
    )
  }
}




export const getStaticProps = async () => {
  const datas = await fetch
  (`https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary Drink`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": process.env.API_HOST,
		"x-rapidapi-key": process.env.API_KEY
	}
  })
  const datasRes = await datas.json();


  return {
    props: datasRes
  }
}
