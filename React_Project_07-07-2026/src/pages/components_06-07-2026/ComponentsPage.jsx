import Footer from "../../components/components_06-07-2026/Footer";
import Header from "../../components/components_06-07-2026/Header";
import Navbar from "../../components/components_06-07-2026/Navbar";
import Class from "../../components/components_06-07-2026/Class";
import Functional from "../../components/components_06-07-2026/Functional";

function ComponentsPage(){
    return (

      <div className="footer">
        <Class/>
        <Functional/>
          <Footer />
        <Header />
        <Navbar/>
      </div>
    )
}
export default ComponentsPage;

