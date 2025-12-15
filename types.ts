export enum CourseLevel {
  FOUNDATION = 'Foundation',
  INTERMEDIATE = 'Intermediate',
  FINAL = 'Final'
}

export interface TestPaper {
  id: string;
  title: string;
  subject: string;
  level: CourseLevel;
  durationMins: number;
  totalMarks: number;
  status: 'upcoming' | 'available' | 'attempted';
  date: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface User {
  name: string;
  email: string;
  level: CourseLevel;
}