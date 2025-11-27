"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { InquiryForm } from '@/components/inquiry-form';
import { useParams } from 'next/navigation';

const careerDetails: Record<string, { title: string; description: string; requirements: string[]; responsibilities: string[] }> = {
  'web-design-development': {
    title: 'Web Design & Development',
    description: 'We are seeking talented web developers to join our team and create innovative web solutions for our clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      'Proficiency in HTML, CSS, JavaScript',
      'Experience with modern frameworks (React, Vue, Angular)',
      'Knowledge of responsive design principles',
      'Understanding of web accessibility standards',
      'Experience with version control (Git)',
      'Strong problem-solving skills',
      'Excellent communication skills',
    ],
    responsibilities: [
      'Develop and maintain client websites',
      'Collaborate with designers and stakeholders',
      'Write clean, maintainable code',
      'Optimize applications for performance',
      'Debug and troubleshoot issues',
      'Stay updated with latest web technologies',
      'Participate in code reviews',
      'Document development processes',
    ],
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Join our mobile development team to create cutting-edge applications for iOS and Android platforms.',
    requirements: [
      'Experience in mobile app development',
      'Proficiency in Swift/Kotlin or React Native/Flutter',
      'Knowledge of mobile UI/UX best practices',
      'Experience with RESTful APIs',
      'Understanding of mobile app architecture',
      'Familiarity with app store deployment',
      'Strong debugging skills',
      'Portfolio of published apps (preferred)',
    ],
    responsibilities: [
      'Design and build mobile applications',
      'Ensure app performance and quality',
      'Integrate with backend services',
      'Implement security best practices',
      'Test and debug applications',
      'Collaborate with cross-functional teams',
      'Maintain code quality',
      'Deploy apps to app stores',
    ],
  },
  'logo-design-graphic-design': {
    title: 'Logo Design & Graphic Design',
    description: 'We\'re looking for creative graphic designers to produce visual content for our diverse client base.',
    requirements: [
      'Degree in Graphic Design or related field',
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio demonstrating design skills',
      'Understanding of color theory and typography',
      'Experience with brand identity design',
      'Knowledge of print and digital design',
      'Creativity and attention to detail',
      'Excellent time management skills',
    ],
    responsibilities: [
      'Create logos and brand identities',
      'Design marketing materials',
      'Develop visual concepts',
      'Collaborate with clients',
      'Present design ideas',
      'Maintain brand consistency',
      'Prepare files for production',
      'Stay current with design trends',
    ],
  },
  'support-maintenance': {
    title: 'Support & Maintenance',
    description: 'Join our support team to provide technical assistance and maintain client systems.',
    requirements: [
      'Technical degree or equivalent experience',
      'Strong troubleshooting skills',
      'Knowledge of web technologies',
      'Experience with support ticketing systems',
      'Excellent communication skills',
      'Customer service orientation',
      'Ability to work under pressure',
      'Problem-solving mindset',
    ],
    responsibilities: [
      'Provide technical support to clients',
      'Monitor system performance',
      'Perform regular maintenance tasks',
      'Troubleshoot and resolve issues',
      'Document support activities',
      'Update and patch systems',
      'Communicate with clients',
      'Escalate complex issues',
    ],
  },
  'ecommerce-development': {
    title: 'E-commerce Development',
    description: 'Develop robust e-commerce solutions and help businesses succeed online.',
    requirements: [
      'Experience with e-commerce platforms',
      'Knowledge of payment gateway integration',
      'Proficiency in web development',
      'Understanding of e-commerce security',
      'Database management skills',
      'Experience with Shopify/WooCommerce/Magento',
      'Strong analytical skills',
      'Attention to detail',
    ],
    responsibilities: [
      'Build e-commerce websites',
      'Integrate payment systems',
      'Implement shopping cart functionality',
      'Optimize checkout process',
      'Ensure site security',
      'Manage product databases',
      'Test e-commerce features',
      'Provide technical documentation',
    ],
  },
  'seo-digital-marketing': {
    title: 'SEO & Digital Marketing Services',
    description: 'Drive online success for clients through effective SEO and digital marketing strategies.',
    requirements: [
      'Experience in digital marketing',
      'Knowledge of SEO best practices',
      'Familiarity with Google Analytics',
      'Understanding of social media marketing',
      'Experience with content marketing',
      'Knowledge of PPC advertising',
      'Analytical mindset',
      'Excellent writing skills',
    ],
    responsibilities: [
      'Develop SEO strategies',
      'Conduct keyword research',
      'Optimize website content',
      'Manage social media campaigns',
      'Create marketing content',
      'Analyze campaign performance',
      'Generate performance reports',
      'Stay updated with industry trends',
    ],
  },
};

export default function CareerDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const career = careerDetails[slug];

  if (!career) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Position Not Found</h1>
            <p className="text-lg text-gray-600">The career position you're looking for doesn't exist.</p>
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
                {career.title}
              </h1>
              <div className="bg-primary h-1 w-48 mx-auto mb-6"></div>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                {career.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Requirements</h2>
                  <ul className="space-y-3">
                    {career.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">✓</span>
                        <span className="text-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Responsibilities</h2>
                  <ul className="space-y-3">
                    {career.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span className="text-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <InquiryForm title={career.title} serviceType="Job Application" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
