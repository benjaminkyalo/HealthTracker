
import React from 'react';
import { Ribbon, AlertTriangle, Heart, Pill, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import AdSenseBlock from '../components/AdSenseBlock';

const Cancer = () => {
  return (
    <>
      <SEO
        title="Cancer - Prevention, Early Detection & Treatment"
        description="Comprehensive guide to cancer including types, risk factors, prevention strategies, early detection signs, and treatment options."
        keywords="cancer, cancer prevention, cancer symptoms, cancer treatment, oncology, early detection"
        url="/cancer"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-green-700 to-teal-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 mb-6">
                <Ribbon className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Understanding Cancer
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Learn about cancer prevention, early detection, and treatment options to make informed decisions about your health.
              </p>
            </div>
          </div>
        </section>

        <AdSenseBlock slot="page-header" format="horizontal" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What is Cancer?</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells. If the spread is not controlled, it can result in death. Cancer can affect any part of the body and has many subtypes that require different treatment approaches.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Carcinomas</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Most common type, affecting skin, lungs, breasts, prostate, and colon.</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Sarcomas</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Affect bones, cartilage, fat, muscle, and other connective tissues.</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">Blood Cancers</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Include leukemia, lymphoma, and multiple myeloma.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risk Factors</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Controllable Risk Factors</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Tobacco use (smoking, chewing)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Excessive alcohol consumption
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Poor diet and lack of physical activity
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Excessive sun exposure
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Certain infections (HPV, Hepatitis B/C)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Non-Controllable Risk Factors</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Age (risk increases with age)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Genetics and family history
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Gender (some cancers are sex-specific)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Race and ethnicity
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Previous cancer treatment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="mid-content" format="rectangle" />

            {/* Early Detection */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Early Detection & Screening</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Why Early Detection Matters</h3>
                  <p className="text-green-600 dark:text-green-400">
                    When cancer is found early, it's often smaller, hasn't spread, and is easier to treat successfully. Many cancers can be cured when detected early.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended Screenings</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Breast Cancer</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Mammograms annually starting at age 40-50</p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Colorectal Cancer</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Colonoscopy every 10 years starting at age 45-50</p>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Cervical Cancer</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Pap smears every 3-5 years starting at age 21</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Warning Signs</h3>
                    <div className="space-y-3">
                      {[
                        'Unexplained weight loss',
                        'Persistent fatigue',
                        'Unusual lumps or bumps',
                        'Changes in bowel/bladder habits',
                        'Persistent cough or hoarseness',
                        'Unusual bleeding or discharge',
                        'Changes in moles or skin',
                        'Difficulty swallowing'
                      ].map((sign, index) => (
                        <div key={index} className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300">{sign}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Prevention Strategies</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Healthy Lifestyle</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Don't smoke or use tobacco</li>
                      <li>• Limit alcohol consumption</li>
                      <li>• Maintain healthy weight</li>
                      <li>• Exercise regularly (150 min/week)</li>
                      <li>• Get adequate sleep</li>
                      <li>• Manage stress effectively</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Healthy Diet</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Eat plenty of fruits and vegetables</li>
                      <li>• Choose whole grains over refined</li>
                      <li>• Limit red and processed meats</li>
                      <li>• Reduce saturated and trans fats</li>
                      <li>• Include omega-3 rich foods</li>
                      <li>• Stay hydrated with water</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">Environmental Protection</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Use sunscreen (SPF 30+)</li>
                      <li>• Avoid excessive sun exposure</li>
                      <li>• Get vaccinated (HPV, Hepatitis B)</li>
                      <li>• Practice safe sex</li>
                      <li>• Avoid exposure to carcinogens</li>
                      <li>• Regular medical check-ups</li>
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
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Primary Treatments</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Surgery</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Physical removal of tumors and affected tissues</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Chemotherapy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Drugs that kill cancer cells throughout the body</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Radiation Therapy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">High-energy beams that destroy cancer cells</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">Advanced Treatments</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Immunotherapy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Helps your immune system fight cancer</p>
                        <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                          <li>• Checkpoint inhibitors</li>
                          <li>• CAR-T cell therapy</li>
                          <li>• Cancer vaccines</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Targeted Therapy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Drugs that target specific cancer features</p>
                        <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                          <li>• Hormone therapy</li>
                          <li>• Monoclonal antibodies</li>
                          <li>• Precision medicine</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">Supportive Care</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Palliative Care</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Symptom management and quality of life</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Psychological Support</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Counseling and mental health care</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Rehabilitation</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Physical and occupational therapy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="bottom-content" format="horizontal" />

            {/* Support Resources */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Support Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">National Organizations:</h4>
                  <ul className="space-y-1 text-green-600 dark:text-green-400 text-sm">
                    <li>• American Cancer Society: 1-800-227-2345</li>
                    <li>• National Cancer Institute: 1-800-422-6237</li>
                    <li>• CancerCare: 1-800-813-4673</li>
                    <li>• Leukemia & Lymphoma Society</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Online Resources:</h4>
                  <ul className="space-y-1 text-green-600 dark:text-green-400 text-sm">
                    <li>• Cancer.gov (NCI website)</li>
                    <li>• Cancer.org (ACS website)</li>
                    <li>• OncoLink (University of Pennsylvania)</li>
                    <li>• CancerConnect online community</li>
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

export default Cancer;