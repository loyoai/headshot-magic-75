import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-blue-800">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Welcome to HeadshotAI. By using our services, you agree to the following terms:</p>
            <ul className="list-disc list-inside mb-4">
              <li>You must be at least 18 years old to use our services.</li>
              <li>You agree not to use our service for any illegal or unauthorized purpose.</li>
              <li>We retain the right to refuse service to anyone for any reason at any time.</li>
              <li>You are responsible for maintaining the confidentiality of your account information.</li>
              <li>We reserve the right to modify or terminate the service for any reason, without notice at any time.</li>
            </ul>
            <p>By using HeadshotAI, you acknowledge that you have read and understood these terms and agree to be bound by them.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default TermsOfService;