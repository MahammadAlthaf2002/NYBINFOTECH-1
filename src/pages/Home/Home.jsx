import HeroBanner from "../../components/home/HeroBanner";
import TopCategories from "../../components/home/TopCategories";
import Promotions from "../../components/home/Promotions";
import Recommended from "../../components/home/Recommended";
import Restaurants from "../../components/home/Restaurants";
import QuickServices from "../../components/home/QuickServices";

export default function Home() {
  return <div className="homePage">
    <HeroBanner />
    <TopCategories />
    <Promotions />
    <div className="splitHome"><Recommended /><Restaurants /></div>
    <QuickServices />
  </div>;
}
