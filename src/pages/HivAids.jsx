
import React from 'react';
import { Shield, AlertTriangle, Heart, Pill, Users } from 'lucide-react';
import SEO from '../components/SEO';
import AdSenseBlock from '../components/AdSenseBlock';

const HivAids = () => {
  return (
    <>
      <SEO
        title="HIV/AIDS - Prevention, Testing, Treatment & Support"
        description="Comprehensive guide to HIV/AIDS including prevention strategies, testing information, treatment options, and support resources."
        keywords="HIV, AIDS, HIV prevention, HIV testing, HIV treatment, sexual health, antiretroviral therapy"
        url="/hiv-aids"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-600 via-yellow-700 to-orange-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 mb-6">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                HIV/AIDS Information
              </h1>
              <p className="text-xl text-yellow-100 leading-relaxed">
                Essential information about HIV/AIDS prevention, testing, treatment, and living a healthy life with proper medical care.
              </p>
            </div>
          </div>
        </section>

        <AdSenseBlock slot="page-header" format="horizontal" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding HIV/AIDS</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-3">HIV (Human Immunodeficiency Virus)</h3>
                    <p className="text-gray-600 dark:text-gray-300">A virus that attacks the body's immune system, specifically CD4 cells (T cells), which help fight infections and diseases.</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">AIDS (Acquired Immunodeficiency Syndrome)</h3>
                    <p className="text-gray-600 dark:text-gray-300">The most severe phase of HIV infection, when the immune system is severely damaged and cannot fight off infections.</p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Important Facts</h3>
                  <ul className="text-green-600 dark:text-green-400 space-y-1">
                    <li>• HIV is a manageable chronic condition with proper treatment</li>
                    <li>• People with HIV can live long, healthy lives</li>
                    <li>• HIV cannot be transmitted through casual contact</li>
                    <li>• Early treatment prevents HIV from progressing to AIDS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transmission */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How HIV is Transmitted</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-4">High-Risk Activities</h3>
                    <div className="space-y-3">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Sexual Contact</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Unprotected anal, vaginal, or oral sex with someone who has HIV</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Blood Contact</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Sharing needles, syringes, or other drug equipment</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mother to Child</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">During pregnancy, birth, or breastfeeding (preventable with treatment)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">HIV Cannot Be Transmitted Through</h3>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Hugging, kissing, or casual contact</li>
                        <li>• Sharing food, drinks, or eating utensils</li>
                        <li>• Using public bathrooms or swimming pools</li>
                        <li>• Mosquito or other insect bites</li>
                        <li>• Saliva, tears, or sweat</li>
                        <li>• Air or water</li>
                        <li>• Touching surfaces or doorknobs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="mid-content" format="rectangle" />

            {/* Prevention */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Prevention Strategies</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Safe Sex Practices</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Use condoms consistently and correctly</li>
                      <li>• Limit number of sexual partners</li>
                      <li>• Know your partner's HIV status</li>
                      <li>• Avoid alcohol/drugs before sex</li>
                      <li>• Consider PrEP if at high risk</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Drug Safety</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Never share needles or syringes</li>
                      <li>• Use sterile injection equipment</li>
                      <li>• Seek treatment for substance use</li>
                      <li>• Use needle exchange programs</li>
                      <li>• Consider medication-assisted treatment</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">Medical Prevention</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Regular HIV testing</li>
                      <li>• PrEP (pre-exposure prophylaxis)</li>
                      <li>• PEP (post-exposure prophylaxis)</li>
                      <li>• Treatment of other STIs</li>
                      <li>• Male circumcision</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">PrEP (Pre-Exposure Prophylaxis)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What is PrEP?</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Daily medication for HIV-negative people at high risk to prevent HIV infection. When taken consistently, PrEP reduces risk by up to 99%.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Who Should Consider PrEP?</h4>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                        <li>• HIV-negative with HIV-positive partner</li>
                        <li>• Multiple or high-risk partners</li>
                        <li>• Injection drug users</li>
                        <li>• Sex workers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testing */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">HIV Testing</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Why Get Tested?</h3>
                  <p className="text-yellow-600 dark:text-yellow-400">
                    Early detection allows for prompt treatment, better health outcomes, and prevention of transmission to others.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Testing Options</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Rapid Tests</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Results in 20 minutes using blood from finger stick or oral fluid</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Laboratory Tests</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Blood drawn and sent to lab; results in few days to a week</p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Home Tests</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">FDA-approved self-tests available at pharmacies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Testing Recommendations</h3>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Everyone 13-64 should test at least once
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          High-risk individuals should test annually
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Test after potential exposure
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Pregnant women should be tested
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Window Period</h4>
                      <p className="text-red-600 dark:text-red-400 text-sm">It can take 10-90 days after infection for tests to detect HIV. Test again if recent exposure occurred.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Pill className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Treatment & Care</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Good News About HIV Treatment</h3>
                  <p className="text-green-600 dark:text-green-400">
                    Modern HIV treatment is highly effective. People who take HIV medicine as prescribed can achieve an undetectable viral load, meaning they cannot transmit HIV sexually (U=U: Undetectable = Untransmittable).
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Antiretroviral Therapy (ART)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">How ART Works</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Combination of HIV medicines</li>
                          <li>• Prevents HIV from multiplying</li>
                          <li>• Reduces viral load to undetectable levels</li>
                          <li>• Preserves immune system function</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Treatment Success</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Take medication exactly as prescribed</li>
                          <li>• Don't skip doses</li>
                          <li>• Regular medical appointments</li>
                          <li>• Monitor viral load and CD4 count</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">Comprehensive Care</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Medical Care</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• HIV specialist care</li>
                          <li>• Regular lab monitoring</li>
                          <li>• Preventive care</li>
                          <li>• Treatment of other conditions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mental Health</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Counseling and therapy</li>
                          <li>• Support groups</li>
                          <li>• Stress management</li>
                          <li>• Depression treatment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Lifestyle Support</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Nutritional counseling</li>
                          <li>• Exercise programs</li>
                          <li>• Substance abuse treatment</li>
                          <li>• Social services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="bottom-content" format="horizontal" />

            {/* Living with HIV */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Living Well with HIV</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Healthy Living Tips</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Stay Healthy</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Take HIV medicine as prescribed</li>
                          <li>• Attend all medical appointments</li>
                          <li>• Get vaccinated as recommended</li>
                          <li>• Practice safe sex</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Maintain Wellness</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Eat a balanced diet</li>
                          <li>• Exercise regularly</li>
                          <li>• Get adequate sleep</li>
                          <li>• Manage stress</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Support & Disclosure</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Building Support</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Join HIV support groups</li>
                          <li>• Connect with HIV organizations</li>
                          <li>• Consider peer counseling</li>
                          <li>• Maintain social connections</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Disclosure Decisions</h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Choose when and how to tell others</li>
                          <li>• Consider professional counseling</li>
                          <li>• Know your legal obligations</li>
                          <li>• Prepare for different reactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">HIV/AIDS Resources & Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">National Hotlines:</h4>
                  <ul className="space-y-1 text-blue-600 dark:text-blue-400 text-sm">
                    <li>• CDC HIV/AIDS Hotline: 1-800-232-4636</li>
                    <li>• AIDS.gov: HIV/AIDS information</li>
                    <li>• National HIV Testing Day resources</li>
                    <li>• Ryan White HIV/AIDS Program</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Find Services:</h4>
                  <ul className="space-y-1 text-blue-600 dark:text-blue-400 text-sm">
                    <li>• HIV testing locations</li>
                    <li>• HIV care providers</li>
                    <li>• Support groups and counseling</li>
                    <li>• Financial assistance programs</li>
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

export default HivAids;
// Note: Ensure you have the AdSense script loaded in your index.html or main.jsx file:
// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>