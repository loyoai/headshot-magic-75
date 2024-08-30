import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Upload, Download, User, Briefcase, Globe, Award, Check, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-blue-600 mr-4">HeadshotAI</h1>
            <Link to="/get-started">
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center"
          >
            <ul className="flex space-x-6">
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Home</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">How It Works</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Pricing</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Contact</a></li>
            </ul>
          </motion.nav>
          <div className="md:hidden flex items-center">
            <Link to="/get-started">
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 mr-2">
                Get Started
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <a href="#" className="w-full">Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">How It Works</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Pricing</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-32 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Transform Your Headshots with AI Magic</h1>
            <p className="text-xl mb-6">Get stunning, professional-quality headshots in minutes using our cutting-edge AI technology.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 transition duration-300">Get Started Now</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <img src="https://pbs.twimg.com/media/GVg-uWNWcAAHpDS?format=jpg&name=large" alt="Before and After Headshots" className="rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-blue-800"
            {...fadeInUp}
          >
            Perfect for Every Professional Need
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Resume', icon: <User className="h-12 w-12 text-blue-500 mb-4" />, description: 'Stand out with a professional headshot on your resume.' },
              { title: 'LinkedIn', icon: <Briefcase className="h-12 w-12 text-blue-500 mb-4" />, description: 'Boost your professional profile with a polished image.' },
              { title: 'Social Media', icon: <Globe className="h-12 w-12 text-blue-500 mb-4" />, description: 'Make a great first impression across all platforms.' },
              { title: 'Professional', icon: <Award className="h-12 w-12 text-blue-500 mb-4" />, description: 'Elevate your brand with a consistent, professional look.' }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition duration-300">
                  <CardHeader>
                    <div className="flex justify-center">{useCase.icon}</div>
                    <CardTitle className="text-xl font-semibold text-blue-700">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-blue-800"
            {...fadeInUp}
          >
            How It Works
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            {[
              { title: 'Upload Pictures', icon: <Upload className="h-16 w-16 text-blue-500 mb-4" />, description: 'Select and upload your best photos' },
              { title: 'AI Processing', icon: <Camera className="h-16 w-16 text-blue-500 mb-4" />, description: 'Our AI model analyzes and enhances your images' },
              { title: 'Download Photos', icon: <Download className="h-16 w-16 text-blue-500 mb-4" />, description: 'Get your professional headshots in minutes' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center mb-8 md:mb-0 max-w-xs"
              >
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-blue-800"
            {...fadeInUp}
          >
            Example Results
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-200 h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img src={`https://source.unsplash.com/random/400x400?portrait&sig=${item}`} alt={`Example ${item}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            {...fadeInUp}
          >
            Simple Pricing
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-around items-stretch">
            {[
              { images: 5, price: 15, features: ['High-quality AI enhancement', '24/7 customer support', 'Money-back guarantee'] },
              { images: 15, price: 19, features: ['All Basic features', 'Priority processing', 'Multiple style options'] },
              { images: 40, price: 25, features: ['All Pro features', 'Unlimited revisions', 'Personal AI stylist consultation'] }
            ].map((plan, index) => (
              <motion.div
                key={plan.images}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white text-blue-800 rounded-lg p-8 mb-8 md:mb-0 w-full md:w-1/4 flex flex-col justify-between shadow-xl hover:shadow-2xl transition duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{plan.images} Images</h3>
                  <p className="text-4xl font-bold mb-6">${plan.price}</p>
                  <ul className="mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-2">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300">Choose Plan</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-blue-800"
            {...fadeInUp}
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'Marketing Executive', text: 'The AI-generated headshots were amazing! They perfectly captured my professional look and boosted my LinkedIn profile.' },
              { name: 'Jane Smith', role: 'Freelance Designer', text: 'I was skeptical at first, but the results blew me away. Highly recommended for anyone looking to upgrade their professional image!' },
              { name: 'Mike Johnson', role: 'Startup Founder', text: 'This service saved me time and money. The quality is outstanding, and it\'s become an essential tool for my entire team.' }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition duration-300">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <p className="mb-4 flex-grow italic text-gray-600">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-blue-700">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">HeadshotAI</h3>
              <p className="mt-2">Transform your professional image with AI</p>
            </div>
            <nav className="mb-6 md:mb-0">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <li><a href="#" className="hover:text-blue-300 transition duration-300 block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition duration-300 block">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-300 transition duration-300 block">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 HeadshotAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
