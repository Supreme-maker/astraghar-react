import React from 'react';
import { Info, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Info className="mx-auto mb-4 text-red-600" size={48} />
        <h2 className="text-4xl mb-6 text-red-600 shadow-[0_0_15px_rgba(255,0,0,0.5)]">
          About AstraGhar
        </h2>
      </div>
      
      <div className="space-y-6 text-lg">
        <div className="bg-white/10 p-6 rounded-lg">
          <p className="mb-4">
            AstraGhar is a premier online shop specializing in high-quality weapons and accessories. 
            We provide top-tier products for enthusiasts and professionals alike, ensuring safety, 
            reliability, and innovation.
          </p>
          <p>
            Founded in 2023, our mission is to deliver unparalleled service and cutting-edge weaponry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/10 p-6 rounded-lg text-center">
            <Target className="mx-auto mb-4 text-red-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p>To provide the highest quality weapons and accessories while maintaining the highest standards of safety and customer service.</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg text-center">
            <Award className="mx-auto mb-4 text-red-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p>Quality, safety, innovation, and customer satisfaction are at the core of everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

