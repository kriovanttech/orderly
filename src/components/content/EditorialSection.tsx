import founders from "@/assets/founders.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const EditorialSection = () => {
  return <section className="w-full mb-24 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 max-w-[630px]">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Quality Products, Without the Clutter
          </h2>
          <p className="text-base font-light text-foreground/80 leading-relaxed">Orderly is a modern online store bringing together quality products, fair pricing, and reliable delivery — without the clutter. We believe shopping should be simple, transparent, and enjoyable.
        </p>
          <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-light text-foreground hover:text-foreground/80 transition-colors duration-200">
            <span>Read our full story</span>
            <ArrowRight size={12} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img src={founders} alt="Linea founders - two women in minimalist jewelry" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default EditorialSection;