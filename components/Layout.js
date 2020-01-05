import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
  <div>
    <Head>
      <title>Cocktails</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
      <link rel="icon" href="../screenshots/cocktaillogo.png" />
    </Head>
    <Navbar/>
      <div className="container">
        {props.children}
      </div>
  </div>
);

export default Layout;
