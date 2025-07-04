import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            We value your privacy. MyHealthTracker does not sell or misuse your data. All information you provide — 
            like email addresses — is stored securely and used only to improve your experience on our platform.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            We use cookies for analytics, but you can opt out at any time. Your trust is important to us, and we 
            are committed to maintaining the highest standards of data protection and privacy.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed">
                We only collect information that you voluntarily provide to us, such as your email address 
                when you contact us or sign up for our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information is used solely to provide and improve our services, respond to your inquiries, 
                and send you relevant health information updates if you've opted in.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
