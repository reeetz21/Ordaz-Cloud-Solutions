import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Rita Ordaz</h1>
        <p className="text-gray-600 mb-4">Gambrills, Maryland</p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-4">
          <a 
            href="https://www.linkedin.com/in/ordaz-rita" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a 
            href="mailto:ritaordaz75@gmail.com"
            className="text-blue-800 hover:text-gray-800 flex items-center gap-1"
          >
            <FaEnvelope className="text-xl" />
            Email
          </a>
        </div>

        {/* Download Button */}
        <button 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                     transition-colors duration-200 flex items-center gap-2 mx-auto"
          onClick={() => window.open("/Rita_Ordaz_Resume.pdf", "_blank")}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </button>
      </header>

      {/* Career Objective */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-200 pb-2">
          Career Objective
        </h2>
        <p className="text-gray-700 leading-relaxed">
          I am a lifelong learner with a passion for critical thinking, problem-solving, and teaching. 
          As I transition into the AWS Cloud space, I aim to leverage my analytical mindset and technical 
          expertise to help businesses build scalable, cost-efficient, and high-performing cloud applications.
        </p>
      </section>

      {/* Skills & Expertise */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-200 pb-2">
          Skills & Expertise
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-medium">DevOps:</span> CI/CD pipelines, Infrastructure as Code, CloudFormation, CodePipeline, CodeBuild</li>
              <li><span className="font-medium">Monitoring & Automation:</span> CloudWatch, CloudTrail, Amazon SQS, Amazon SNS</li>
              <li><span className="font-medium">Programming, Scripting, and Version Control:</span> Python, YAML, HTML, CSS, JavaScript, JSON, Linux Bash, GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Professional Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Customer Obsession</li>
              <li>Training & Development</li>
              <li>Process Optimization</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Education & Certifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-200 pb-2">
          Education & Certifications
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">Master of Science, Cloud Computing Systems</span>
            <br />
            <span className="italic">University of Maryland Global Campus (Expected June 2026)</span>
          </li>
          <li>
            <span className="font-semibold">Cloud Application Developer</span>
            <br />
            <span className="italic">AWS Cloud Institute (2024)</span>
            <br />
            <span className="ml-4">Comprehensive training in cloud computing, covering AWS services, software development, DevOps, and security.</span>
          </li>
          <li>
            <span className="font-semibold">Master of Science in Nursing, Nurse Educator</span>
            <br />
            <span className="italic">Galen College of Nursing (2023)</span>
          </li>
          <li>
            <span className="font-semibold">Bachelor of Science in Nursing</span>
            <br />
            <span className="italic">AdventHealth University (2019)</span>
          </li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Certifications</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>AWS Certified Developer Associate (2025)</li>
          <li>AWS Cloud Practitioner (2024)</li>
        </ul>
      </section>

      {/* Experience - Now Last */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-200 pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800">Registered Nurse & Nurse Educator, Operating Room</h3>
            <p className="text-gray-600 italic mb-2">AYA/Medical Solutions | Sep 2022 – Nov 2023</p>
            <ul className="list-disc list-inside text-gray-700">
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800">Registered Nurse, Operating Room</h3>
            <p className="text-gray-600 italic mb-2">Brooke Army Medical Center | Oct 2021 – Aug 2022</p>
            <ul className="list-disc list-inside text-gray-700">
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800">Registered Nurse, Operating Room</h3>
            <p className="text-gray-600 italic mb-2">Methodist Hospital | Sep 2022 – Nov 2023</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            </ul>
            </div>

        </div>
      </section>
    </div>
  );
}
