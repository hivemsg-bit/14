import React from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Master Your</span>{' '}
                <span className="block text-blue-600 xl:inline">CA Exams Today</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join India's #1 Rated Test Series for CA Foundation, Inter & Final. Get detailed evaluation within 24 hours and AI-powered doubt solving.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={onGetStarted}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Start Free Trial
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={onGetStarted}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    View Plans
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Student studying"
        />
      </div>
      
      {/* Stats Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-10 w-10 text-blue-200 mb-2" />
              <span className="text-4xl font-bold text-white">50,000+</span>
              <span className="text-blue-100">Registered Students</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-blue-200 mb-2" />
              <span className="text-4xl font-bold text-white">1.2 Million</span>
              <span className="text-blue-100">Tests Evaluated</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-10 w-10 text-blue-200 mb-2" />
              <span className="text-4xl font-bold text-white">AIR 1, 3, 5</span>
              <span className="text-blue-100">Rank Holders in 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;