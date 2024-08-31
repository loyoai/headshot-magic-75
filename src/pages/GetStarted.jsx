import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const GetStarted = () => {
  const [showPackages, setShowPackages] = useState(false);

  const handleCreateHeadshots = () => {
    setShowPackages(true);
  };

  const renderHowItWorks = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      <Progress value={33} className="w-full h-2 mb-8 bg-gray-200" indicatorClassName="bg-green-500" />
      <h1 className="text-4xl font-bold mb-6 text-black">How it Works</h1>
      <p className="text-lg mb-8 text-black">
        You will get professional-grade headshots generated from your selfie in just one hour and three simple steps:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {[
          { title: "Upload your images", image: "https://source.unsplash.com/random/300x200?upload" },
          { title: "Headpix AI generates photos", image: "https://source.unsplash.com/random/300x200?ai" },
          { title: "Download Your AI Headshots", image: "https://source.unsplash.com/random/300x200?download" }
        ].map((step, index) => (
          <Card key={index} className="bg-transparent">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 left-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black mt-12">{step.title}</h3>
              <img src={step.image} alt={step.title} className="w-full h-40 object-cover rounded-lg" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        onClick={handleCreateHeadshots}
        className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
      >
        Create my Headshots
      </Button>
    </motion.div>
  );

  const renderPackages = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold mb-6 text-black">Select a Package</h1>
      <p className="text-lg mb-8 text-black">
        Single payment, no recurring charges. Once you've paid, you'll need to upload at least 8 photos of yourself.
      </p>
      <div className="space-y-6 md:space-y-4">
        {[
          { name: "Starter", headshots: 50, price: 29 },
          { name: "Basic", headshots: 100, price: 39, popular: true, originalPrice: 49, discount: 20 },
          { name: "Premium", headshots: 200, price: 59, bestValue: true }
        ].map((plan) => (
          <Card key={plan.name} className={`bg-white rounded-2xl overflow-hidden ${plan.popular ? 'border-purple-500 border-2' : ''}`}>
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-left mb-4 md:mb-0">
                <div className="flex items-center mb-2">
                  <h3 className="text-2xl font-bold text-black mr-2">{plan.name}</h3>
                  {plan.popular && <span className="bg-purple-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">MOST POPULAR</span>}
                  {plan.bestValue && <span className="bg-teal-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">BEST VALUE</span>}
                </div>
                <p className="text-black text-lg">Get {plan.headshots} headshots{plan.popular ? ' with 10+ different styles' : plan.bestValue ? ' with 15+ different styles' : ''}</p>
                {plan.discount && (
                  <div className="flex items-center mt-2">
                    <span className="text-gray-500 line-through mr-2">${plan.originalPrice}</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">-{plan.discount}%</span>
                  </div>
                )}
              </div>
              <Button className={`${plan.popular ? 'bg-purple-500' : 'bg-black'} text-white hover:opacity-90 transition duration-300 w-full md:w-auto px-8 py-3 rounded-full text-lg font-semibold`}>
                Purchase ${plan.price}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-black">
        ★★★★★ More than 300 000 AI Headshots already created
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#EFEFE9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {showPackages ? renderPackages() : renderHowItWorks()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GetStarted;
