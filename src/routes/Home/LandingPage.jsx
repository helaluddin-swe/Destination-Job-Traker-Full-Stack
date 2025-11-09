import Feature from "../../components/Feature";
import Hero from "../../components/Hero";
import BG from "../../assets/bgr.png";

const LandingPage = () => {
  return (
    <div className="grow min-h-screen relative overflow-hidden flex flex-col items-center">
      {/* Background Image (Behind Hero) */}
      <div className="absolute inset-0 -z-10 ">
        <img
          src={BG}
          alt="Background"
          className="w-full h-full object-cover"
        />
       <div className="top-50 inset-0"/>
       
       
      </div>

      {/* Hero Section on top of background */}
      <div className="w-full ">
        <Hero />
      </div>

      {/* Features Section below Hero */}
      <div className="w-full mt-10 md:mt-110">
        <Feature />
      </div>
    </div>
  );
};

export default LandingPage;
