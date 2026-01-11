import circularCollection from "@/assets/circular-collection.png";
import organicEarring from "@/assets/organic-earring.png";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-24 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 group cursor-pointer">
          <Link to="/category/rings" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-6 overflow-hidden rounded-lg">
              <img 
                src={organicEarring} 
                alt="Artisan crafted jewelry" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </Link>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Artisan Craft
            </h3>
            <p className="text-base font-light text-foreground/80">
              Handcrafted pieces with meticulous attention to detail
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 group cursor-pointer">
          <Link to="/category/necklaces" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-6 overflow-hidden rounded-lg">
              <img 
                src={circularCollection} 
                alt="Circular jewelry collection" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </Link>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Circular Elements
            </h3>
            <p className="text-base font-light text-foreground/80">
              Geometric perfection meets contemporary minimalism
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;