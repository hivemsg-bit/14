import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TestList from './components/TestList';
import AITutor from './components/AITutor';
import { User, CourseLevel, TestPaper } from './types';
import { LayoutDashboard, FileText, BarChart3 } from 'lucide-react';

// Mock Data
const MOCK_USER: User = {
  name: "Rahul Sharma",
  email: "rahul.ca@example.com",
  level: CourseLevel.INTERMEDIATE
};

const MOCK_TESTS: TestPaper[] = [
  { id: '1', title: 'Accounting Full Syllabus Mock', subject: 'Accounting', level: CourseLevel.INTERMEDIATE, durationMins: 180, totalMarks: 100, status: 'available', date: '2023-11-01' },
  { id: '2', title: 'Corporate Law Unit Test 1', subject: 'Law', level: CourseLevel.INTERMEDIATE, durationMins: 60, totalMarks: 40, status: 'attempted', date: '2023-10-25' },
  { id: '3', title: 'Cost Accounting Standard Test', subject: 'Costing', level: CourseLevel.INTERMEDIATE, durationMins: 120, totalMarks: 80, status: 'upcoming', date: '2023-11-15' },
  { id: '4', title: 'Taxation - GST Special', subject: 'Taxation', level: CourseLevel.INTERMEDIATE, durationMins: 90, totalMarks: 50, status: 'available', date: '2023-11-05' },
  { id: '5', title: 'Audit Standards Mock', subject: 'Audit', level: CourseLevel.INTERMEDIATE, durationMins: 180, totalMarks: 100, status: 'upcoming', date: '2023-11-20' },
];

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'tests' | 'ai'>('overview');

  const handleLogin = () => {
    // Simulating login
    setUser(MOCK_USER);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Main Dashboard Component
  const Dashboard = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-24">
            <div className="flex items-center space-x-3 mb-6 p-2">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {user?.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.level}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'overview' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <LayoutDashboard className="mr-3 h-5 w-5" />
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('tests')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'tests' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <FileText className="mr-3 h-5 w-5" />
                My Tests
              </button>
              <button 
                onClick={() => setActiveTab('ai')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'ai' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <BarChart3 className="mr-3 h-5 w-5" />
                AI Mentor & Doubts
              </button>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-blue-600 rounded-lg shadow-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
                <p className="opacity-90">You have 2 upcoming tests this week. Keep up the momentum!</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-sm text-gray-500">Tests Attempted</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-sm text-gray-500">Avg. Score</p>
                  <p className="text-2xl font-bold text-blue-600">68%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-sm text-gray-500">Next Test</p>
                  <p className="text-lg font-bold text-gray-900">Nov 15</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended for You</h3>
                <TestList tests={MOCK_TESTS.slice(0, 3)} />
              </div>
            </div>
          )}

          {activeTab === 'tests' && (
             <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Test Series</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Buy New Package
                </button>
              </div>
              <TestList tests={MOCK_TESTS} />
             </div>
          )}

          {activeTab === 'ai' && (
            <div className="max-w-3xl mx-auto">
               <div className="mb-6 text-center">
                 <h2 className="text-2xl font-bold text-gray-900">AI Personal Tutor</h2>
                 <p className="text-gray-500">Ask doubts, generate practice questions, or get concept summaries.</p>
               </div>
               <AITutor />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar 
          user={user} 
          onLogin={handleLogin} 
          onLogout={handleLogout}
          onNavigate={(page) => {
              // Basic navigation logic could go here if using a real router hook for pushing history
              // For now, standard hrefs in Navbar handle most, but we can manage 'dashboard' view state
              if(page === 'dashboard' && !user) handleLogin();
          }}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              user ? <Navigate to="/dashboard" /> : (
                <>
                  <Hero onGetStarted={handleLogin} />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Popular Test Series</h2>
                        <p className="mt-4 text-xl text-gray-500">Designed by expert CAs based on the latest ICAI pattern.</p>
                     </div>
                     <TestList tests={MOCK_TESTS} isLocked={true} />
                  </div>
                </>
              )
            } />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
            {/* Catch all redirect */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;