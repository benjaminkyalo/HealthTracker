import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white mb-8">Disclaimer</h1>
          
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6 mb-6">
            <p className="text-yellow-200 font-medium text-lg">
              ⚠️ Important Medical Disclaimer
            </p>
          </div>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            All content on MyHealthTracker is intended for informational purposes only. It is not a substitute 
            for professional medical advice, diagnosis, or treatment.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Always consult with a qualified healthcare provider before making any medical decisions. Never 
            disregard professional medical advice or delay seeking it because of information you have read 
            on this website.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">No Medical Advice</h2>
              <p className="text-gray-300 leading-relaxed">
                The information provided on this website is for educational and informational purposes only. 
                It should not be used as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Consult Healthcare Professionals</h2>
              <p className="text-gray-300 leading-relaxed">
                Always seek the advice of your physician or other qualified health provider with any questions 
                you may have regarding a medical condition or treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Emergency Situations</h2>
              <p className="text-gray-300 leading-relaxed">
                If you think you may have a medical emergency, call your doctor or emergency services 
                immediately. Do not rely on information from this website for emergency medical decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Accuracy of Information</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we make no representations 
                or warranties of any kind about the completeness, accuracy, or reliability of the information 
                provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;