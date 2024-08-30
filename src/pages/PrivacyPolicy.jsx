import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
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
            <CardTitle className="text-3xl font-bold text-center text-blue-800">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">At HeadshotAI, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information:</p>
            <ul className="list-disc list-inside mb-4">
              <li>We collect personal information that you provide to us, such as your name and email address.</li>
              <li>We use your information to provide and improve our services, and to communicate with you about your account.</li>
              <li>We do not sell or share your personal information with third parties for marketing purposes.</li>
              <li>We use industry-standard security measures to protect your data.</li>
              <li>You have the right to access, correct, or delete your personal information at any time.</li>
            </ul>
            <p>By using HeadshotAI, you consent to the collection and use of your information as described in this policy.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;