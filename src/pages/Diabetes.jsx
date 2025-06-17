
import React from 'react';
import { Activity, AlertTriangle, Heart, Pill, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import AdSenseBlock from '../components/AdSenseBlock';

const Diabetes = () => {
  return (
    <>
      <SEO
        title="Diabetes - Symptoms, Causes, Treatment & Prevention"
        description="Complete guide to diabetes management including types, symptoms, causes, prevention strategies, and treatment options. Learn how to manage blood sugar effectively."
        keywords="diabetes, blood sugar, insulin, type 1 diabetes, type 2 diabetes, diabetes symptoms, diabetes treatment"
        url="/diabetes"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-pink-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 mb-6">
                <Activity className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Understanding Diabetes
              </h1>
              <p className="text-xl text-red-100 leading-relaxed">
                Comprehensive information about diabetes management, prevention, and living a healthy life with this condition.
              </p>
            </div>
          </div>
        </section>

        <AdSenseBlock slot="page-header" format="horizontal" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What is Diabetes?</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Diabetes is a chronic health condition that affects how your body turns food into energy. When you have diabetes, your body either doesn't make enough insulin or can't use the insulin it makes as well as it should. This leads to elevated blood sugar levels that can cause serious health complications if not properly managed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">Type 1 Diabetes</h3>
                    <p className="text-gray-600 dark:text-gray-300">An autoimmune condition where the body attacks insulin-producing cells in the pancreas.</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">Type 2 Diabetes</h3>
                    <p className="text-gray-600 dark:text-gray-300">The most common form, where the body becomes resistant to insulin or doesn't produce enough.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Causes */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Causes & Risk Factors</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Type 1 Diabetes Causes</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Autoimmune response destroying insulin-producing cells</li>
                      <li>• Genetic predisposition</li>
                      <li>• Environmental factors (viruses, toxins)</li>
                      <li>• Family history of Type 1 diabetes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Type 2 Diabetes Risk Factors</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Being overweight or obese</li>
                      <li>• Physical inactivity</li>
                      <li>• Age 45 or older</li>
                      <li>• Family history of diabetes</li>
                      <li>• High blood pressure</li>
                      <li>• Gestational diabetes history</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="mid-content" format="rectangle" />

            {/* Symptoms */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Symptoms</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    'Frequent urination',
                    'Excessive thirst',
                    'Unexplained weight loss',
                    'Extreme fatigue',
                    'Blurred vision',
                    'Slow healing wounds',
                    'Frequent infections',
                    'Tingling in hands/feet',
                    'Increased hunger'
                  ].map((symptom, index) => (
                    <div key={index} className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{symptom}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Important:</strong> If you experience several of these symptoms, consult a healthcare provider for proper testing and diagnosis.
                  </p>
                </div>
              </div>
            </div>

            {/* Prevention */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Prevention & Best Practices</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">Lifestyle Changes</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Maintain a healthy weight through balanced diet and exercise
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Engage in regular physical activity (150 minutes per week)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Follow a balanced diet rich in vegetables, fruits, and whole grains
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Limit processed foods and sugary beverages
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">Health Monitoring</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Regular blood sugar testing if at risk
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Annual check-ups with healthcare provider
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Monitor blood pressure and cholesterol levels
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Don't smoke and limit alcohol consumption
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Pill className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Treatment Options</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Blood Sugar Management</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      The primary goal is maintaining blood glucose levels within target ranges through medication, diet, and lifestyle modifications.
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Insulin therapy (Type 1 and some Type 2)</li>
                      <li>• Oral medications (Metformin, sulfonylureas, etc.)</li>
                      <li>• Blood glucose monitoring</li>
                      <li>• Continuous glucose monitors (CGM)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Lifestyle Management</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Carbohydrate counting and meal planning</li>
                      <li>• Regular exercise routine</li>
                      <li>• Stress management techniques</li>
                      <li>• Regular sleep schedule</li>
                      <li>• Diabetes education programs</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">Complication Prevention</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Regular eye exams for diabetic retinopathy</li>
                      <li>• Foot care and daily inspection</li>
                      <li>• Kidney function monitoring</li>
                      <li>• Cardiovascular health management</li>
                      <li>• Dental care and oral health</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="bottom-content" format="horizontal" />

            {/* Emergency Warning */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">Seek Immediate Medical Attention If:</h3>
              <ul className="text-red-600 dark:text-red-400 space-y-1">
                <li>• Blood glucose over 400 mg/dL or under 70 mg/dL</li>
                <li>• Signs of diabetic ketoacidosis (fruity breath, vomiting, confusion)</li>
                <li>• Severe dehydration or persistent vomiting</li>
                <li>• Loss of consciousness or seizures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diabetes;
// Note: Ensure you have the AdSense script loaded in your index.html or main.jsx file:
// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>