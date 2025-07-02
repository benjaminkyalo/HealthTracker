
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Brain, Shield, Scale, Ribbon } from 'lucide-react';
import SEO from '../components/SEO';
import AdSenseBlock from '../components/AdSenseBlock';

const Home = () => {
  const diseases = [
    {
      name: 'Diabetes',
      path: '/diabetes',
      icon: Activity,
      description: 'What is diabetes? Causes of diabetes, symptoms of diabetes, types of diabetes, treatment of diabetes, diabetes diet, prevention of diabetes.',
      color: 'from-red-500 to-pink-500',
      linkDescription: 'What is diabetes, causes of diabetes, symptoms of diabetes, types of diabetes, treatment of diabetes, diabetes diet, prevention of diabetes.'
    },
    {
      name: 'High Blood Pressure',
      path: '/high-blood-pressure',
      icon: Heart,
      description: 'What is high blood pressure? Causes of high blood pressure, symptoms of high blood pressure, types of hypertension, treatment of high blood pressure, hypertension diet, prevention of high blood pressure.',
      color: 'from-blue-500 to-indigo-500',
      linkDescription: 'What is high blood pressure, causes of high blood pressure, symptoms of high blood pressure, types of hypertension, treatment of high blood pressure, hypertension diet, prevention of high blood pressure.'
    },
    {
      name: 'Depression',
      path: '/depression',
      icon: Brain,
      description: 'What is depression? Causes of depression, symptoms of depression, types of depression, treatment of depression, depression diet, prevention of depression.',
      color: 'from-purple-500 to-pink-500',
      linkDescription: 'What is depression, causes of depression, symptoms of depression, types of depression, treatment of depression, depression diet, prevention of depression.'
    },
    {
      name: 'Cancer',
      path: '/cancer',
      icon: Ribbon,
      description: 'What is cancer? Causes of cancer, symptoms of cancer, types of cancer, treatment of cancer, cancer diet, prevention of cancer.',
      color: 'from-green-500 to-teal-500',
      linkDescription: 'What is cancer, causes of cancer, symptoms of cancer, types of cancer, treatment of cancer, cancer diet, prevention of cancer.'
    },
    {
      name: 'Obesity',
      path: '/obesity',
      icon: Scale,
      description: 'What is obesity? Causes of obesity, symptoms of obesity, types of obesity, treatment of obesity, obesity diet, prevention of obesity.',
      color: 'from-orange-500 to-red-500',
      linkDescription: 'What is obesity, causes of obesity, symptoms of obesity, types of obesity, treatment of obesity, obesity diet, prevention of obesity.'
    },
    {
      name: 'HIV/AIDS',
      path: '/hiv-aids',
      icon: Shield,
      description: 'What is HIV/AIDS? Causes of HIV/AIDS, symptoms of HIV/AIDS, types of HIV/AIDS, treatment of HIV/AIDS, HIV/AIDS diet, prevention of HIV/AIDS.',
      color: 'from-yellow-500 to-orange-500',
      linkDescription: 'What is HIV/AIDS, causes of HIV/AIDS, symptoms of HIV/AIDS, types of HIV/AIDS, treatment of HIV/AIDS, HIV/AIDS diet, prevention of HIV/AIDS.'
    }
  ];

  return (
    <>
      <SEO
        title="Health Education & Disease Prevention"
        description="Comprehensive health education platform covering diabetes, hypertension, depression, cancer, obesity, and HIV/AIDS. Learn prevention, symptoms, and treatment options."
        keywords="health education, disease prevention, diabetes, hypertension, depression, cancer, obesity, HIV AIDS"
        url="/"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        {/* Hero Section */}
       <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Health Journey
                <span className="block text-blue-200">Starts Here</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Empowering you with evidence-based health education and practical guidance for preventing and managing common diseases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#diseases"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Explore Health Topics
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#about"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <AdSenseBlock slot="header-banner" format="horizontal" />

        {/* Mission Section */}
        <section id="about" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At MyHealthTracker, we believe that knowledge is the foundation of good health. Our platform provides comprehensive, evidence-based information about common diseases to help you make informed decisions about your health and well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Diseases Grid */}
        <section id="diseases" className="py-16 lg:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Health Education Topics
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore comprehensive information about common health conditions, including prevention strategies, symptoms, and treatment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diseases.map((disease) => {
                const IconComponent = disease.icon;
                return (
                  <div
                    key={disease.name}
                    className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className={`h-3 bg-gradient-to-r ${disease.color}`}></div>
                    <div className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${disease.color} mb-6`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {disease.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {disease.description}
                      </p>
                      <Link
                        to={disease.path}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                      >
                        Learn More&nbsp;
                        <span className="sr-only">{disease.linkDescription}</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <AdSenseBlock slot="middle-content" format="rectangle" />

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Control of Your Health Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Start your journey toward better health with our comprehensive disease education resources and prevention strategies.
            </p>
            <a 
              href="#diseases"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

    
 