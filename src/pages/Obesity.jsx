
import React from 'react';
import { Scale, AlertTriangle, Heart, Pill, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import AdSenseBlock from '../components/AdSenseBlock';

const Obesity = () => {
  return (
    <>
      <SEO
        title="Obesity - Causes, Health Risks & Weight Management"
        description="Comprehensive guide to obesity including causes, health risks, prevention strategies, and effective weight management approaches."
        keywords="obesity, weight management, BMI, weight loss, healthy eating, exercise, nutrition"
        url="/obesity"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 mb-6">
                <Scale className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Understanding Obesity
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed">
                Learn about healthy weight management, nutrition strategies, and sustainable lifestyle changes for better health.
              </p>
            </div>
          </div>
        </section>

        <AdSenseBlock slot="page-header" format="horizontal" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding Obesity</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Obesity is a complex health condition characterized by excessive body fat accumulation that increases the risk of various health problems. It's typically measured using Body Mass Index (BMI), but other factors like waist circumference and body composition also matter.
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-4">BMI Categories</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-orange-200 dark:border-orange-700">
                          <th className="text-left py-2 text-orange-700 dark:text-orange-300">Category</th>
                          <th className="text-left py-2 text-orange-700 dark:text-orange-300">BMI Range</th>
                          <th className="text-left py-2 text-orange-700 dark:text-orange-300">Health Risk</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-300">
                        <tr className="border-b border-orange-100 dark:border-orange-800">
                          <td className="py-2 font-medium">Underweight</td>
                          <td className="py-2">Below 18.5</td>
                          <td className="py-2">Increased</td>
                        </tr>
                        <tr className="border-b border-orange-100 dark:border-orange-800">
                          <td className="py-2 font-medium">Normal Weight</td>
                          <td className="py-2">18.5-24.9</td>
                          <td className="py-2">Lowest</td>
                        </tr>
                        <tr className="border-b border-orange-100 dark:border-orange-800">
                          <td className="py-2 font-medium">Overweight</td>
                          <td className="py-2">25.0-29.9</td>
                          <td className="py-2">Increased</td>
                        </tr>
                        <tr className="border-b border-orange-100 dark:border-orange-800">
                          <td className="py-2 font-medium">Obesity Class I</td>
                          <td className="py-2">30.0-34.9</td>
                          <td className="py-2">High</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Obesity Class II+</td>
                          <td className="py-2">35.0+</td>
                          <td className="py-2">Very High</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Causes */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Causes & Contributing Factors</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Obesity is caused by a complex interaction of factors. Weight gain occurs when calorie intake consistently exceeds calories burned.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-3">Dietary Factors</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• High-calorie, low-nutrient foods</li>
                      <li>• Large portion sizes</li>
                      <li>• Frequent fast food consumption</li>
                      <li>• Sugary drinks and snacks</li>
                      <li>• Emotional eating patterns</li>
                      <li>• Irregular eating schedules</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Lifestyle Factors</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Sedentary lifestyle</li>
                      <li>• Lack of regular exercise</li>
                      <li>• Poor sleep patterns</li>
                      <li>• High stress levels</li>
                      <li>• Screen time and inactivity</li>
                      <li>• Work-related factors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Medical & Genetic</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Genetic predisposition</li>
                      <li>• Hormonal disorders</li>
                      <li>• Certain medications</li>
                      <li>• Medical conditions</li>
                      <li>• Age-related changes</li>
                      <li>• Metabolic factors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="mid-content" format="rectangle" />

            {/* Health Risks */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Health Risks & Complications</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">Important Health Impact</h3>
                  <p className="text-red-600 dark:text-red-400">
                    Obesity significantly increases the risk of numerous serious health conditions and can reduce life expectancy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cardiovascular Risks</h3>
                    <div className="space-y-3">
                      {[
                        'High blood pressure',
                        'Heart disease',
                        'Stroke',
                        'High cholesterol',
                        'Blood clots'
                      ].map((risk, index) => (
                        <div key={index} className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300">{risk}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Metabolic & Other Risks</h3>
                    <div className="space-y-3">
                      {[
                        'Type 2 diabetes',
                        'Sleep apnea',
                        'Certain cancers',
                        'Fatty liver disease',
                        'Arthritis and joint problems',
                        'Gallbladder disease',
                        'Depression and anxiety'
                      ].map((risk, index) => (
                        <div key={index} className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300">{risk}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention & Management */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Weight Management Strategies</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">Nutrition Strategies</h3>
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Portion Control</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Use smaller plates and bowls</li>
                          <li>• Measure portions initially</li>
                          <li>• Eat slowly and mindfully</li>
                          <li>• Stop eating when satisfied</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Food Choices</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Prioritize whole foods</li>
                          <li>• Increase fruits and vegetables</li>
                          <li>• Choose lean proteins</li>
                          <li>• Limit processed foods</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Physical Activity</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Aerobic Exercise</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• 150-300 minutes moderate weekly</li>
                          <li>• Walking, swimming, cycling</li>
                          <li>• Start gradually and progress</li>
                          <li>• Find enjoyable activities</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Strength Training</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• 2-3 sessions per week</li>
                          <li>• Build lean muscle mass</li>
                          <li>• Boost metabolism</li>
                          <li>• Improve bone health</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Behavioral Changes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Goal Setting</h4>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                        <li>• Set realistic, specific goals</li>
                        <li>• Track progress regularly</li>
                        <li>• Celebrate small victories</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Support Systems</h4>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                        <li>• Join support groups</li>
                        <li>• Work with professionals</li>
                        <li>• Involve family and friends</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Lifestyle Habits</h4>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                        <li>• Prioritize adequate sleep</li>
                        <li>• Manage stress effectively</li>
                        <li>• Stay hydrated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Options */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Pill className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Treatment Options</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Medical Interventions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Weight Loss Medications</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">For BMI ≥30 or ≥27 with complications:</p>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Orlistat (Alli, Xenical)</li>
                          <li>• GLP-1 agonists (Semaglutide)</li>
                          <li>• Combination medications</li>
                          <li>• Always with lifestyle changes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Bariatric Surgery</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">For severe obesity (BMI ≥40 or ≥35 with complications):</p>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Gastric bypass</li>
                          <li>• Sleeve gastrectomy</li>
                          <li>• Adjustable gastric band</li>
                          <li>• Requires lifelong follow-up</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Professional Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Registered Dietitian</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Personalized nutrition counseling and meal planning</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Personal Trainer</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Safe, effective exercise programs and motivation</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Behavioral Therapist</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Address emotional eating and behavior patterns</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="bottom-content" format="horizontal" />

            {/* Healthy Weight Tips */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Sustainable Weight Management Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Daily Habits:</h4>
                  <ul className="space-y-1 text-green-600 dark:text-green-400 text-sm">
                    <li>• Eat regular, balanced meals</li>
                    <li>• Stay hydrated throughout the day</li>
                    <li>• Get 7-9 hours of quality sleep</li>
                    <li>• Take breaks from sitting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Long-term Success:</h4>
                  <ul className="space-y-1 text-green-600 dark:text-green-400 text-sm">
                    <li>• Focus on health, not just weight</li>
                    <li>• Make gradual, sustainable changes</li>
                    <li>• Plan for challenges and setbacks</li>
                    <li>• Regular medical check-ups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Obesity;
