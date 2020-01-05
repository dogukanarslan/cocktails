import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Link from "next/link";

const Details = (props) => {

  return(
  <Layout>
    <div>
    <div className="Details">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <Link href="/"><span style={{fontSize: "2rem",cursor:"pointer"}} className="text-dark">X</span></Link>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={props.drink.strDrinkThumb} alt=""/>
          </div>

          <div className="col-md-8">
            <p><strong>Name: </strong>{props.drink.strDrink}</p>
            <p><strong>Category: </strong>{props.drink.strCategory}</p>
            {props.drink.strAlcoholic === "Alcoholic" ? <p><strong>Alcoholic: </strong>Yes</p> : <p><strong>Alcoholic:</strong> No</p>}
            <p><strong>Glass: </strong>{props.drink.strGlass}</p>
            <p><strong>Instructions:</strong> {props.drink.strInstructions}</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  </Layout>
  )
}

Details.getInitialProps = async context =>{
  const {id} = context.query
  const res = await fetch
  (`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
	}
  })
  const drink = await res.json();
  return {drink: drink.drinks[0]};
}

export default Details;
