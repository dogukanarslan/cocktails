import Fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

export default class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={
      datas: this.props.datas.drinks,
      _datas: this.props.datas.drinks,
      options: this.props.test,
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
        var x = a[sort].toLowerCase();
        var y = b[sort].toLowerCase();
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
            <SearchBar sortItems = {this.sortItems} searchDrink = {this.searchDrink} selectedChange={this.selectedChange} options={this.state.options}/>
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




Index.getInitialProps = async (context) => {

  const options = await fetch
  ("https://the-cocktail-db.p.rapidapi.com/list.php?c=list", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
  		"x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
  	}
  })
  const optionsRes = await options.json();

  const datas = await fetch
  (`https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary Drink`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
	}
  })
  const datasRes = await datas.json();


  return {
    test: optionsRes,
    datas: datasRes
  }
}
