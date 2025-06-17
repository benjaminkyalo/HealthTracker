
import React from 'react';
import { Heart, AlertTriangle, Activity, Pill, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import AdSenseBlock from '../components/AdSenseBlock';

const HighBloodPressure = () => {
  return (
    <>
      <SEO
        title="High Blood Pressure - Causes, Symptoms & Treatment"
        description="Complete guide to hypertension including causes, symptoms, prevention strategies, and treatment options. Learn how to manage blood pressure naturally."
        keywords="high blood pressure, hypertension, blood pressure symptoms, hypertension treatment, heart health"
        url="/high-blood-pressure"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 mb-6">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                High Blood Pressure (Hypertension)
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Learn about managing hypertension, understanding blood pressure readings, and protecting your cardiovascular health.
              </p>
            </div>
          </div>
        </section>

        <AdSenseBlock slot="page-header" format="horizontal" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding Blood Pressure</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  High blood pressure, or hypertension, occurs when the force of blood against your artery walls is consistently too high. Often called the "silent killer," it usually has no symptoms but can lead to serious health complications including heart disease, stroke, and kidney problems.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Blood Pressure Categories</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-blue-200 dark:border-blue-700">
                          <th className="text-left py-2 text-blue-700 dark:text-blue-300">Category</th>
                          <th className="text-left py-2 text-blue-700 dark:text-blue-300">Systolic (mmHg)</th>
                          <th className="text-left py-2 text-blue-700 dark:text-blue-300">Diastolic (mmHg)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-300">
                        <tr className="border-b border-blue-100 dark:border-blue-800">
                          <td className="py-2 font-medium">Normal</td>
                          <td className="py-2">Less than 120</td>
                          <td className="py-2">Less than 80</td>
                        </tr>
                        <tr className="border-b border-blue-100 dark:border-blue-800">
                          <td className="py-2 font-medium">Elevated</td>
                          <td className="py-2">120-129</td>
                          <td className="py-2">Less than 80</td>
                        </tr>
                        <tr className="border-b border-blue-100 dark:border-blue-800">
                          <td className="py-2 font-medium">Stage 1 Hypertension</td>
                          <td className="py-2">130-139</td>
                          <td className="py-2">80-89</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Stage 2 Hypertension</td>
                          <td className="py-2">140/90 or higher</td>
                          <td className="py-2">90 or higher</td>
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Causes & Risk Factors</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Primary Hypertension</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Develops gradually over many years with no identifiable cause (90-95% of cases):</p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Age (risk increases with age)</li>
                      <li>• Genetics and family history</li>
                      <li>• Race (higher in African Americans)</li>
                      <li>• Lifestyle factors</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Secondary Hypertension</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Caused by underlying conditions (5-10% of cases):</p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Kidney disease</li>
                      <li>• Sleep apnea</li>
                      <li>• Thyroid problems</li>
                      <li>• Certain medications</li>
                      <li>• Adrenal gland tumors</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-4">Lifestyle Risk Factors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• High sodium intake</li>
                      <li>• Lack of physical activity</li>
                      <li>• Being overweight or obese</li>
                      <li>• Excessive alcohol consumption</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Smoking and tobacco use</li>
                      <li>• Chronic stress</li>
                      <li>• Low potassium intake</li>
                      <li>• Diabetes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="mid-content" format="rectangle" />

            {/* Symptoms */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Activity className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Symptoms & Warning Signs</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Note</h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Most people with high blood pressure have no symptoms, even when readings reach dangerously high levels. This is why regular monitoring is crucial.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Possible Symptoms (Severe Cases)</h3>
                    <div className="space-y-3">
                      {[
                        'Severe headaches',
                        'Chest pain',
                        'Shortness of breath',
                        'Vision problems',
                        'Nosebleeds',
                        'Dizziness',
                        'Fatigue'
                      ].map((symptom, index) => (
                        <div key={index} className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300">{symptom}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-4">Emergency Warning Signs</h3>
                    <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <p className="text-red-800 dark:text-red-200 font-medium mb-3">Call 911 immediately if you experience:</p>
                      <ul className="space-y-2 text-red-700 dark:text-red-300">
                        <li>• Blood pressure over 180/120</li>
                        <li>• Severe chest pain</li>
                        <li>• Severe shortness of breath</li>
                        <li>• Sudden severe headache</li>
                        <li>• Changes in vision</li>
                        <li>• Weakness or numbness</li>
                        <li>• Difficulty speaking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Prevention & Management</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Dietary Changes</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Reduce sodium to less than 2,300mg daily</li>
                      <li>• Follow DASH diet principles</li>
                      <li>• Increase fruits and vegetables</li>
                      <li>• Choose whole grains</li>
                      <li>• Limit saturated fats</li>
                      <li>• Increase potassium-rich foods</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Physical Activity</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• 150 minutes moderate exercise weekly</li>
                      <li>• 75 minutes vigorous exercise weekly</li>
                      <li>• Strength training 2+ days per week</li>
                      <li>• Start slowly and gradually increase</li>
                      <li>• Include aerobic activities</li>
                      <li>• Consider walking, swimming, cycling</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">Lifestyle Modifications</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Maintain healthy weight</li>
                      <li>• Quit smoking and tobacco use</li>
                      <li>• Limit alcohol consumption</li>
                      <li>• Manage stress effectively</li>
                      <li>• Get adequate sleep (7-9 hours)</li>
                      <li>• Monitor blood pressure regularly</li>
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
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Medication Classes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">First-Line Medications:</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• ACE inhibitors (lisinopril, enalapril)</li>
                          <li>• ARBs (losartan, valsartan)</li>
                          <li>• Thiazide diuretics (hydrochlorothiazide)</li>
                          <li>• Calcium channel blockers (amlodipine)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Additional Options:</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Beta-blockers (metoprolol, atenolol)</li>
                          <li>• Alpha-blockers (doxazosin)</li>
                          <li>• Combination medications</li>
                          <li>• Vasodilators (for resistant cases)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Natural Approaches</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Supplements (Consult doctor first):</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Garlic extract</li>
                          <li>• Coenzyme Q10</li>
                          <li>• Magnesium</li>
                          <li>• Omega-3 fatty acids</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mind-Body Techniques:</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Meditation and mindfulness</li>
                          <li>• Deep breathing exercises</li>
                          <li>• Yoga and tai chi</li>
                          <li>• Progressive muscle relaxation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="bottom-content" format="horizontal" />

            {/* Monitoring */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Blood Pressure Monitoring Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700 dark:text-blue-300">
                <ul className="space-y-1">
                  <li>• Use a validated home monitor</li>
                  <li>• Take readings at the same time daily</li>
                  <li>• Sit quietly for 5 minutes before measuring</li>
                  <li>• Use proper cuff size</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Keep a blood pressure log</li>
                  <li>• Take multiple readings</li>
                  <li>• Share results with healthcare provider</li>
                  <li>• Don't measure after exercise or caffeine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighBloodPressure;