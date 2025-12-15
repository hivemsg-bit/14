import React from 'react';
import { Clock, Calendar, FileText, CheckCircle, Lock } from 'lucide-react';
import { TestPaper } from '../types';

interface TestListProps {
  tests: TestPaper[];
  isLocked?: boolean;
}

const TestList: React.FC<TestListProps> = ({ tests, isLocked = false }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tests.map((test) => (
        <div key={test.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {test.subject}
              </span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${test.status === 'attempted' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {test.status.toUpperCase()}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{test.title}</h3>
            
            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {test.durationMins} Mins
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                {test.totalMarks} Marks
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(test.date).toLocaleDateString()}
              </div>
            </div>

            {isLocked ? (
               <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 bg-gray-50 cursor-not-allowed">
               <Lock className="h-4 w-4 mr-2" />
               Unlock Series
             </button>
            ) : (
              <button 
                disabled={test.status === 'attempted'}
                className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white 
                ${test.status === 'attempted' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {test.status === 'attempted' ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    View Result
                  </>
                ) : (
                  'Start Test'
                )}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestList;