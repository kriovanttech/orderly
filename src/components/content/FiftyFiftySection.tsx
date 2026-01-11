import earringsCollection from "@/assets/earrings-collection.png";
import linkBracelet from "@/assets/link-bracelet.png";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-24 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="group cursor-pointer">
          <Link to="/category/earrings" className="block">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg">
              <img 
                src={earringsCollection} 
                alt="Earrings collection" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </Link>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Organic Forms
            </h3>
            <p className="text-base font-light text-foreground/80">
              Nature-inspired pieces with fluid, sculptural details
            </p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <Link to="/category/bracelets" className="block">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg">
              <img 
                src={linkBracelet} 
                alt="Chain link bracelet" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </Link>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Chain Collection
            </h3>
            <p className="text-base font-light text-foreground/80">
              Refined links and connections in precious metals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;