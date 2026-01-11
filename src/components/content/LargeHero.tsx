import heroImage from "@/assets/hero-image.png";

const LargeHero = () => {
  return (
    <section className="w-full mb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full aspect-[16/9] mb-6 overflow-hidden rounded-lg shadow-sm">
          <img 
            src={heroImage} 
            alt="Modern jewelry collection" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">
            Modern Heritage
          </h2>
          <p className="text-base font-light text-foreground/80 max-w-2xl">
            Contemporary jewelry crafted with timeless elegance
          </p>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;