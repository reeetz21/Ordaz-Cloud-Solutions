import React from 'react';

export function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issueDate: "2024-04-15", // Update with your actual date
      credlyLink: "https://www.credly.com/badges/f5b29d65-67fb-408e-98b8-2ab0d2aa7540/public_url",
      image: "/public/images/aws-certified-cloud-practitioner.png", // Update with your actual image path
      // description: "Validates overall understanding of the AWS Cloud"
    },
    {
      id: 2,
      title: "AWS Certified Developer - Associate",
      issueDate: "2025-03-07", // Update with your actual date
      credlyLink: "https://www.credly.com/badges/900bd18d-2e08-4261-9e26-0f029be7676f/public_url",
      image: "/public/images/aws-certified-developer-associate.png", // Update with your actual image path
      // description: "Validates ability to develop applications on AWS"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-8">AWS Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-200 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-48 h-auto object-contain"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
                <p className="text-gray-600 text-sm mb-1">
                  Issued: {cert.issueDate}
                </p>
                {cert.credlyLink && (
                  <a 
                    href={cert.credlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-sm mb-2 block"
                  >
                    View Certificate
                  </a>
                )}
                <p className="text-gray-700 text-base">
                  {cert.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
