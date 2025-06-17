
import React from 'react';
import { Brain, AlertTriangle, Heart, Pill, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import AdSenseBlock from '../components/AdSenseBlock';

const Depression = () => {
  return (
    <>
      <SEO
        title="Depression - Symptoms, Causes, Treatment & Support"
        description="Comprehensive guide to understanding depression including symptoms, causes, treatment options, and support resources for mental health recovery."
        keywords="depression, mental health, depression symptoms, depression treatment, therapy, antidepressants"
        url="/depression"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 rounded-2xl bg-white/20 mb-6">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Understanding Depression
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Learn about depression, recognize the signs, and discover effective treatment options and support resources for mental health recovery.
              </p>
            </div>
          </div>
        </section>

        <AdSenseBlock slot="page-header" format="horizontal" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What is Depression?</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. It's more than just feeling sad or going through a rough patch - it's a persistent condition that can significantly impact your quality of life, relationships, and overall well-being.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">Major Depressive Disorder</h3>
                    <p className="text-gray-600 dark:text-gray-300">The most common form, characterized by persistent feelings of sadness and loss of interest in activities.</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Other Types</h3>
                    <p className="text-gray-600 dark:text-gray-300">Includes persistent depressive disorder, seasonal affective disorder, and postpartum depression.</p>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Important to Remember</h3>
                  <p className="text-green-600 dark:text-green-400">
                    Depression is a real medical condition, not a sign of weakness. With proper treatment and support, the vast majority of people with depression can recover and lead fulfilling lives.
                  </p>
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
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Depression rarely has a single cause. It typically results from a combination of factors:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-3">Biological Factors</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Brain chemistry imbalances</li>
                      <li>• Genetics and family history</li>
                      <li>• Hormonal changes</li>
                      <li>• Medical conditions</li>
                      <li>• Certain medications</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Psychological Factors</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Negative thinking patterns</li>
                      <li>• Low self-esteem</li>
                      <li>• Perfectionism</li>
                      <li>• History of trauma or abuse</li>
                      <li>• Other mental health conditions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Environmental Factors</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Stressful life events</li>
                      <li>• Loss of loved ones</li>
                      <li>• Financial problems</li>
                      <li>• Relationship issues</li>
                      <li>• Social isolation</li>
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Signs & Symptoms</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Depression symptoms must persist for at least two weeks and represent a change from previous functioning. Symptoms include:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Emotional Symptoms</h3>
                    <div className="space-y-3">
                      {[
                        'Persistent sadness or emptiness',
                        'Loss of interest in activities',
                        'Feelings of hopelessness',
                        'Irritability or frustration',
                        'Anxiety or restlessness',
                        'Guilt or worthlessness',
                        'Mood swings'
                      ].map((symptom, index) => (
                        <div key={index} className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300">{symptom}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Physical & Behavioral Symptoms</h3>
                    <div className="space-y-3">
                      {[
                        'Fatigue and low energy',
                        'Sleep problems (too much/too little)',
                        'Changes in appetite or weight',
                        'Difficulty concentrating',
                        'Physical aches and pains',
                        'Slowed movements or speech',
                        'Social withdrawal'
                      ].map((symptom, index) => (
                        <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300">{symptom}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-red-100 dark:bg-red-900/30 p-6 rounded-xl border border-red-200 dark:border-red-700">
                  <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-3">⚠️ Warning Signs - Seek Immediate Help</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• Thoughts of death or suicide</li>
                      <li>• Suicide plans or attempts</li>
                      <li>• Self-harm behaviors</li>
                    </ul>
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• Severe hopelessness</li>
                      <li>• Substance abuse</li>
                      <li>• Psychotic symptoms</li>
                    </ul>
                  </div>
                  <p className="text-red-700 dark:text-red-300 mt-3 font-medium">
                    Crisis Hotline: 988 (Suicide & Crisis Lifeline)
                  </p>
                </div>
              </div>
            </div>

            {/* Prevention & Coping */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Prevention & Coping Strategies</h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">Lifestyle Habits</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Regular exercise (30 min, 3-5x/week)</li>
                      <li>• Consistent sleep schedule (7-9 hours)</li>
                      <li>• Balanced, nutritious diet</li>
                      <li>• Limit alcohol and avoid drugs</li>
                      <li>• Spend time in nature</li>
                      <li>• Practice mindfulness/meditation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Social Support</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Maintain social connections</li>
                      <li>• Join support groups</li>
                      <li>• Volunteer and help others</li>
                      <li>• Share feelings with trusted friends</li>
                      <li>• Participate in group activities</li>
                      <li>• Build meaningful relationships</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">Stress Management</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      <li>• Learn relaxation techniques</li>
                      <li>• Set realistic goals</li>
                      <li>• Practice time management</li>
                      <li>• Engage in hobbies</li>
                      <li>• Journal thoughts and feelings</li>
                      <li>• Seek professional help early</li>
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
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Psychotherapy (Talk Therapy)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Helps identify and change negative thought patterns and behaviors.</p>
                        
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Interpersonal Therapy (IPT)</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Focuses on improving relationships and social functioning.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Dialectical Behavior Therapy (DBT)</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Teaches coping skills and emotional regulation.</p>
                        
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Psychodynamic Therapy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Explores unconscious thoughts and past experiences.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">Medication Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Antidepressants:</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• SSRIs (sertraline, fluoxetine)</li>
                          <li>• SNRIs (duloxetine, venlafaxine)</li>
                          <li>• Tricyclics (amitriptyline)</li>
                          <li>• MAOIs (for specific cases)</li>
                          <li>• Atypical (bupropion, mirtazapine)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Important Notes:</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• May take 4-6 weeks to show effects</li>
                          <li>• Side effects are usually temporary</li>
                          <li>• Don't stop suddenly without doctor guidance</li>
                          <li>• Regular monitoring is important</li>
                          <li>• Often combined with therapy</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">Alternative & Complementary Treatments</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Light Therapy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Especially helpful for seasonal depression</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">ECT/TMS</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Brain stimulation for severe cases</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mindfulness</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Meditation, yoga, and relaxation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock slot="bottom-content" format="horizontal" />

            {/* Resources */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Crisis Resources & Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">24/7 Crisis Lines:</h4>
                  <ul className="space-y-1 text-blue-600 dark:text-blue-400 text-sm">
                    <li>• 988 - Suicide & Crisis Lifeline</li>
                    <li>• 1-800-366-8288 - SAMHSA Helpline</li>
                    <li>• Text "HELLO" to 741741 - Crisis Text Line</li>
                    <li>• 1-800-273-8255 - Veterans Crisis Line</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Finding Help:</h4>
                  <ul className="space-y-1 text-blue-600 dark:text-blue-400 text-sm">
                    <li>• Psychology Today therapist finder</li>
                    <li>• NAMI (National Alliance on Mental Illness)</li>
                    <li>• Local community mental health centers</li>
                    <li>• Employee assistance programs</li>
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

export default Depression;
