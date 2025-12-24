import { ArrowRight, Zap, Target, TrendingUp, Menu, X } from "lucide-react";
import { ShoppingCart, Package,Award } from 'lucide-react';

// import background2 from "../images/background2.jpeg"
// import background3 from "../images/background3.jpeg"
import background4 from "../images/background4.jpeg"

import Contact from "../components/Contact";
  const services = [
  {
    title: "Account Setup",
    description: "Seller account & brand approval.",
    gradient: "from-blue-50 to-cyan-50",
    color: "blue",
    includes: ["Account Creation", "KYC", "Brand Approval", "Category Approval", "Guidance"],
  },
  {
    title: "Product Listing",
    description: "SEO-optimized listings.",
    gradient: "from-purple-50 to-pink-50",
    color: "purple",
    includes: ["Title Optimization", "Descriptions", "Category Mapping", "Price Management", "Bulk Support"],
  },
  {
    title: "A+ Content",
    description: "Premium branded content.",
    gradient: "from-emerald-50 to-teal-50",
    color: "emerald",
    includes: ["A+ Content", "Infographics", "Brand Store", "Mobile Design", "Storytelling"],
  },
  {
    title: "Marketplace SEO",
    description: "Boost product ranking.",
    gradient: "from-orange-50 to-red-50",
    color: "orange",
    includes: ["Search Optimization", "Keywords", "Competitor Analysis", "Rank Strategy", "Enhancement"],
  },
  {
    title: "Ads & PPC",
    description: "ROI-driven campaigns.",
    gradient: "from-green-50 to-lime-50",
    color: "green",
    includes: ["Amazon Ads", "Flipkart Ads", "Meesho Ads", "Campaign Setup", "Monitoring"],
  },
  {
    title: "Account Health",
    description: "Monitor compliance.",
    gradient: "from-indigo-50 to-blue-50",
    color: "indigo",
    includes: ["Defect Monitoring", "Compliance", "Violation Handling", "Return Support", "Rating Boost"],
  },
  {
    title: "Sales Growth",
    description: "Monthly strategy boost.",
    gradient: "from-rose-50 to-pink-50",
    color: "rose",
    includes: ["Data Analysis", "Keyword Audit", "Rank Planning", "Market Trends", "Growth Plan"],
  },
  {
    title: "Shipping",
    description: "Reliable order dispatch.",
    gradient: "from-cyan-50 to-blue-50",
    color: "cyan",
    includes: ["Courier Integration", "Rates", "Pan India", "Pickup Scheduling", "Tracking"],
  },
  {
    title: "FBA Prep",
    description: "Complete packaging.",
    gradient: "from-amber-50 to-orange-50",
    color: "amber",
    includes: ["FBA Labelling", "Packaging", "Bundling", "Polybagging", "FNSKU", "Shipment"],
  },
];
  const colorMap = {
    blue: { icon: "text-blue-600", bg: "bg-blue-200" },
    purple: { icon: "text-purple-600", bg: "bg-purple-200" },
    emerald: { icon: "text-emerald-600", bg: "bg-emerald-200" },
    orange: { icon: "text-orange-600", bg: "bg-orange-200" },
    green: { icon: "text-green-600", bg: "bg-green-200" },
    indigo: { icon: "text-indigo-600", bg: "bg-indigo-200" },
    rose: { icon: "text-rose-600", bg: "bg-rose-200" },
    cyan: { icon: "text-cyan-600", bg: "bg-cyan-200" },
    amber: { icon: "text-amber-600", bg: "bg-amber-200" },
  };

const Home = () => {
  return (
    <div className=" bg-white ">
      {/* Hero Section */}

    <div
  className="bg-no-repeat bg-center bg-cover md:bg-cover h-[70vh] md:h-[100vh] relative"
  style={{ backgroundImage: `url(${background4})` }}
>

      {/* <div className="absolute inset-0 bg-opacity-10 backdrop-blur-[8px]"></div> */}

      {/* Content */}
      <div className="relative  flex items-center justify-center h-full">
        <div className="text-center  mt-[-30px] text-white px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            ECommerceServices4u
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 font-semibold">
            Your Complete E-Commerce Solution
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
            We specialize in scaling your e-commerce business across Amazon, Flipkart, Meesho, Walmart, and eBay. From product listing optimization and marketplace SEO to PPC advertising and account management, we handle everything to maximize your sales and visibility.
          </p>
          <a
            href="#contact"
            className="w-50  bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold mx-auto transition"
          >
            Get In Touch <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
    
      {/* About Section */}
<section id="about" className=" max-w-7xl mx-auto py-20 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="bg-gradient-to-br from-indigo-400 to-blue-600 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
      {/* Add image or content here if needed */}
    </div>
    <div>
      <h2 className="text-center md:text-start text-3xl font-bold text-gray-900 mb-6">About Us</h2>
      <p className="text-center md:text-start text-lg text-gray-700 mb-4">
        We are dedicated to helping businesses achieve growth and success across digital platforms.
      </p>
      <p className="text-center md:text-start text-lg text-gray-700 mb-6">
        Our expertise lies in creating high-performance websites, optimizing digital marketing strategies, and offering eCommerce solutions to scale your business.
      </p>

      <div className="space-y-4 flex flex-col items-center md:items-start"> {/* Added flex and centered the items */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-gray-700">
            Proven track record of success
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-gray-700">Dedicated support team</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-gray-700">Cutting-edge technology</span>
        </div>
      </div>
    </div>
  </div>
</section>

      

      {/* Services Section */}
    <section id="service" className="max-w-7xl mx-auto py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          E-Commerce Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const colors = colorMap[service.color];
            
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${service.gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>

                {/* Includes List */}
                <ul className="space-y-2 mb-6">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
<span className={`w-2 h-2 rounded-full ${colors.bg} mt-1.5 shrink-0`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>
      </div>
    </section>


     <Contact/> 

    </div>
  );
};

export default Home;
