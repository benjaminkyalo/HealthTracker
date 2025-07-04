import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            By using MyHealthTracker, you agree to access our content for personal, non-commercial use. 
            You must not copy or republish our material without permission.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            We reserve the right to update our terms and suspend accounts found violating our guidelines. 
            Please review these terms regularly as they may change from time to time.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed">
                You may use our website for lawful purposes only. You agree not to use the site in any way 
                that could damage, disable, overburden, or impair our servers or networks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property 
                of MyHealthTracker and is protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                MyHealthTracker shall not be liable for any indirect, incidental, special, or consequential 
                damages arising out of or in connection with your use of our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these terms at any time. When we make changes, we will post the updated 
                terms on this page and update the effective date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
