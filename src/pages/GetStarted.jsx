import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  { name: 'Basic', images: 5, price: 15 },
  { name: 'Pro', images: 15, price: 19 },
  { name: 'Premium', images: 40, price: 25 },
];

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-2xl font-bold mb-6">Step 1: Choose a Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === plan ? 'border-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">${plan.price}</p>
                    <p>{plan.images} Images</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              className="mt-6"
              onClick={nextStep}
              disabled={!selectedPlan}
            >
              Next <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-2xl font-bold mb-6">Step 2: Payment</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">Selected Plan: {selectedPlan.name}</p>
                <p className="mb-4">Price: ${selectedPlan.price}</p>
                {/* Add payment form here */}
                <div className="mb-4">
                  <label className="block mb-2">Card Number</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label className="block mb-2">Expiry Date</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label className="block mb-2">CVV</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="123" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 flex justify-between">
              <Button onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep}>
                Pay Now <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-2xl font-bold mb-6">Success!</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Check className="text-green-500 w-16 h-16" />
                </div>
                <p className="text-center mb-4">
                  Thank you for your purchase! We'll send your AI-generated headshots to your email shortly.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://source.unsplash.com/random/200x200?portrait&sig=${i}`}
                      alt={`Example ${i}`}
                      className="w-full h-auto rounded-lg"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GetStarted;