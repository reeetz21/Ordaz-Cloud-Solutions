import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Let's Connect
                </h1>
                
                <div className="space-y-6">
                    <a
                        href="https://www.linkedin.com/in/ordaz-rita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <FaLinkedin className="text-2xl" />
                        <span>Connect on LinkedIn</span>
                    </a>

                    <a
                        href="mailto:ritaordaz75@gmail.com"
                        className="flex items-center justify-center gap-3 p-4 text-white bg-blue-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <FaEnvelope className="text-2xl" />
                        <span>Send me an Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
