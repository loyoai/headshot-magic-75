import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
          <Card key={index} className="bg-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold mb-2">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-4 text-black">{step.title}</h3>
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
      <div className="space-y-6">
        {[
          { name: "Starter", headshots: 50, price: 29 },
          { name: "Basic", headshots: 100, price: 39, popular: true },
          { name: "Premium", headshots: 200, price: 59, bestValue: true }
        ].map((plan) => (
          <Card key={plan.name} className={`bg-white ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
            <CardContent className="p-6 flex justify-between items-center">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-black">{plan.name}</h3>
                <p className="text-black">Get {plan.headshots} headshots{plan.popular ? ' with 10+ different styles' : plan.bestValue ? ' with 15+ different styles' : ''}</p>
                {plan.popular && <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">MOST POPULAR</span>}
                {plan.bestValue && <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">BEST VALUE</span>}
              </div>
              <Button className={`${plan.popular ? 'bg-blue-600' : 'bg-black'} text-white hover:opacity-90 transition duration-300`}>
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
