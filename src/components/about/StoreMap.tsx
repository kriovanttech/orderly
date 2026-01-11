interface Store {
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

const stores: Store[] = [
  {
    name: "Orderly Bangalore",
    address: "789 MG Road, Bengaluru, KA 560001",
    phone: "+91 (80) 1234-5678",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    lat: 12.9716,
    lng: 77.5946
  },
  {
    name: "Orderly Mumbai", 
    address: "456 Marine Drive, Mumbai, MH 400036",
    phone: "+91 (22) 5678-1234",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    lat: 18.9596,
    lng: 72.8295
  },
  {
    name: "Orderly Delhi",
    address: "123 Connaught Place, New Delhi, DL 110001", 
    phone: "+91 (11) 9012-3456",
    hours: "Mon-Sat: 11AM-8PM, Sun: 12PM-7PM",
    lat: 28.6304,
    lng: 77.2177
  }
];

const StoreMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-border bg-muted/10 relative">
      {/* Static Map using Google Maps Embed API */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12063.046788464958!2d-74.0059413!3d40.7489054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      
      {/* Overlay with store markers */}
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <h4 className="text-sm font-medium text-foreground mb-3">Our Locations</h4>
        <div className="space-y-2">
          {stores.map((store, index) => (
            <div key={index} className="text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="font-medium text-foreground">{store.name}</span>
              </div>
              <p className="text-muted-foreground ml-4">{store.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreMap;