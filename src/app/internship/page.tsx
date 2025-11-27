"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { Code2, Brain, Globe, Coffee, Atom, Smartphone, Bug, Layers, Cloud, BarChart3 } from 'lucide-react';

const internships = [
  {
    id: 'python-django',
    title: 'Python Django',
    description: 'Learn backend web development with Python and Django framework. Build powerful web applications with industry-standard practices.',
    icon: Code2,
  },
  {
    id: 'machine-learning-data-science',
    title: 'Machine Learning & Data Science',
    description: 'Master AI and machine learning algorithms, data analysis, and predictive modeling with hands-on projects.',
    icon: Brain,
  },
  {
    id: 'php-web-development',
    title: 'PHP Web Development',
    description: 'Develop dynamic websites and web applications using PHP, MySQL, and modern frameworks.',
    icon: Globe,
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Learn object-oriented programming with Java and build enterprise-level applications.',
    icon: Coffee,
  },
  {
    id: 'react-js',
    title: 'React JS',
    description: 'Master modern frontend development with React.js and create interactive user interfaces.',
    icon: Atom,
  },
  {
    id: 'android',
    title: 'Android',
    description: 'Build native Android applications using Java/Kotlin and Android Studio.',
    icon: Smartphone,
  },
  {
    id: 'software-testing',
    title: 'Software Testing',
    description: 'Learn manual and automated testing methodologies to ensure software quality.',
    icon: Bug,
  },
  {
    id: 'flutter',
    title: 'Flutter',
    description: 'Create beautiful cross-platform mobile applications with Flutter and Dart.',
    icon: Layers,
  },
  {
    id: 'aws-solution-architect',
    title: 'AWS Solution Architect',
    description: 'Master cloud computing with Amazon Web Services and design scalable cloud solutions.',
    icon: Cloud,
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Analyze data, create visualizations, and derive insights using modern analytics tools.',
    icon: BarChart3,
  },
];

export default function InternshipPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-background py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
                Internship Programs
              </h1>
              <div className="bg-primary h-1 w-48 mx-auto mb-6"></div>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Join InfoZen IT's internship program and gain hands-on experience in cutting-edge technologies. 
                Learn from industry experts and kickstart your career in technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {internships.map((internship) => {
                const IconComponent = internship.icon;
                return (
                  <Link
                    key={internship.id}
                    href={`/internship/${internship.id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-secondary/10 p-4 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
                        <IconComponent className="w-12 h-12 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {internship.title}
                      </h3>
                      <p className="text-foreground mb-4">
                        {internship.description}
                      </p>
                      <span className="text-primary font-semibold group-hover:underline">
                        Apply Now →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
