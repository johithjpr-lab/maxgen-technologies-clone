"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { InquiryForm } from '@/components/inquiry-form';
import { useParams } from 'next/navigation';

const internshipDetails: Record<string, { title: string; description: string; duration: string; topics: string[] }> = {
  'python-django': {
    title: 'Python Django',
    description: 'Master backend web development with Python and the Django framework. This internship provides comprehensive training in building scalable web applications.',
    duration: '3-6 Months',
    topics: [
      'Python Programming Fundamentals',
      'Django Framework Basics',
      'Django Models & ORM',
      'Views and Templates',
      'Django REST Framework',
      'Authentication & Authorization',
      'Database Management',
      'Deployment & Hosting',
    ],
  },
  'machine-learning-data-science': {
    title: 'Machine Learning & Data Science',
    description: 'Dive into the world of AI and data science. Learn to build intelligent systems and analyze complex datasets.',
    duration: '3-6 Months',
    topics: [
      'Python for Data Science',
      'Statistics & Probability',
      'Data Preprocessing & Cleaning',
      'Machine Learning Algorithms',
      'Deep Learning Basics',
      'TensorFlow & Keras',
      'Data Visualization',
      'Real-world ML Projects',
    ],
  },
  'php-web-development': {
    title: 'PHP Web Development',
    description: 'Learn to build dynamic websites and web applications using PHP and modern development practices.',
    duration: '3-6 Months',
    topics: [
      'PHP Basics & Syntax',
      'MySQL Database Integration',
      'Object-Oriented PHP',
      'Laravel Framework',
      'RESTful API Development',
      'Security Best Practices',
      'Version Control with Git',
      'Project Development',
    ],
  },
  'java': {
    title: 'Java',
    description: 'Master object-oriented programming with Java and build robust enterprise applications.',
    duration: '3-6 Months',
    topics: [
      'Java Fundamentals',
      'Object-Oriented Programming',
      'Java Collections Framework',
      'Exception Handling',
      'Multithreading',
      'JDBC & Database Connectivity',
      'Spring Framework Basics',
      'Enterprise Application Development',
    ],
  },
  'react-js': {
    title: 'React JS',
    description: 'Become proficient in modern frontend development with React.js and build interactive user interfaces.',
    duration: '3-6 Months',
    topics: [
      'JavaScript ES6+ Fundamentals',
      'React Components & Props',
      'State Management',
      'React Hooks',
      'React Router',
      'API Integration',
      'Redux/Context API',
      'Building Complete Applications',
    ],
  },
  'android': {
    title: 'Android',
    description: 'Learn to build native Android applications and publish them on the Google Play Store.',
    duration: '3-6 Months',
    topics: [
      'Android Studio Setup',
      'Java/Kotlin for Android',
      'Android UI Components',
      'Activities & Fragments',
      'SQLite Database',
      'API Integration',
      'Material Design',
      'App Publishing',
    ],
  },
  'software-testing': {
    title: 'Software Testing',
    description: 'Master both manual and automated testing techniques to ensure software quality.',
    duration: '3-6 Months',
    topics: [
      'Software Testing Fundamentals',
      'Test Case Design',
      'Manual Testing',
      'Automation Testing',
      'Selenium WebDriver',
      'API Testing',
      'Performance Testing',
      'Bug Tracking & Reporting',
    ],
  },
  'flutter': {
    title: 'Flutter',
    description: 'Create beautiful cross-platform mobile applications with Flutter and Dart.',
    duration: '3-6 Months',
    topics: [
      'Dart Programming Language',
      'Flutter Widgets',
      'State Management',
      'Navigation & Routing',
      'Firebase Integration',
      'API Integration',
      'Platform-Specific Features',
      'App Deployment',
    ],
  },
  'aws-solution-architect': {
    title: 'AWS Solution Architect',
    description: 'Learn cloud computing with Amazon Web Services and design scalable cloud architectures.',
    duration: '3-6 Months',
    topics: [
      'Cloud Computing Fundamentals',
      'AWS Core Services (EC2, S3, RDS)',
      'AWS Networking',
      'Security & Identity Management',
      'Load Balancing & Auto Scaling',
      'AWS Lambda & Serverless',
      'CloudFormation',
      'AWS Certification Preparation',
    ],
  },
  'data-analytics': {
    title: 'Data Analytics',
    description: 'Learn to analyze data, create visualizations, and derive actionable insights.',
    duration: '3-6 Months',
    topics: [
      'Data Analysis Fundamentals',
      'Excel for Data Analysis',
      'SQL for Data Analytics',
      'Python/R for Analytics',
      'Data Visualization Tools (Tableau, Power BI)',
      'Statistical Analysis',
      'Dashboard Creation',
      'Real-world Analytics Projects',
    ],
  },
};

export default function InternshipDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const internship = internshipDetails[slug];

  if (!internship) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Internship Program Not Found</h1>
            <p className="text-lg text-gray-600">The internship program you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
                {internship.title} Internship
              </h1>
              <div className="bg-primary h-1 w-48 mx-auto mb-6"></div>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                {internship.description}
              </p>
              <div className="mt-4">
                <span className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Duration: {internship.duration}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">What You'll Learn</h2>
                <ul className="space-y-3">
                  {internship.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 mt-1">✓</span>
                      <span className="text-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Program Benefits:</h3>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• Hands-on practical experience</li>
                    <li>• Industry mentorship</li>
                    <li>• Certificate of completion</li>
                    <li>• Job placement assistance</li>
                  </ul>
                </div>
              </div>

              <InquiryForm title={internship.title} serviceType="Internship Application" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
