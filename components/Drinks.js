import Link from "next/link"

export default class Drinks extends React.Component{
  constructor(props){
    super(props)
    this.state={
      datas: this.props.datas,
    }
  }

  render(){
    return(
      <div className="Drinks">
        <div className="row">
        {this.state.datas.drinks.slice(0,12).map(item => {
          return (
            <div className="col-6 col-md-4" key={item.idDrink}>
                <Link href="../pages/[id]" as={`../pages/${item.idDrink}`} className="navbar-brand">
                <div className="card mb-5">
                  <img className="card-img-top" src={item.strDrinkThumb} alt="..."/>
                  <div className="card-body">
                    <p className="card-text">{item.strDrink}</p>
                    <button className="btn btn-dark btn-sm">More Info</button>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}
