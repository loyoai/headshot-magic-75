import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RefundPolicy = () => {
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
            <CardTitle className="text-3xl font-bold text-center text-blue-800">Refund Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">At HeadshotAI, we strive to ensure your complete satisfaction with our services. Our refund policy is designed to be fair and transparent:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Refund requests must be made within 7 days of purchase.</li>
              <li>If you're unsatisfied with the quality of your AI-generated headshots, we offer a full refund.</li>
              <li>Refunds are processed within 5-10 business days.</li>
              <li>We reserve the right to deny refunds in cases of misuse or multiple refund attempts.</li>
            </ul>
            <p>For any refund inquiries, please contact our customer support team at support@headshotai.com.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RefundPolicy;