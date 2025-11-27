"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { InquiryForm } from '@/components/inquiry-form';
import { useParams } from 'next/navigation';

const serviceDetails: Record<string, { title: string; description: string; features: string[] }> = {
  'web-design-development': {
    title: 'Web Design & Development',
    description: 'We create stunning, responsive websites that help your business stand out online. Our web development services combine creativity with technical expertise to deliver websites that not only look great but also perform exceptionally well.',
    features: [
      'Custom Website Design',
      'Responsive & Mobile-Friendly',
      'CMS Integration (WordPress, etc.)',
      'E-commerce Integration',
      'SEO-Friendly Architecture',
      'Fast Loading Speed',
      'Cross-Browser Compatibility',
      'Modern Web Technologies',
    ],
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Transform your business with powerful mobile applications. We develop native and cross-platform mobile apps for iOS and Android that provide seamless user experiences and drive customer engagement.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Development (Flutter, React Native)',
      'UI/UX Design',
      'API Integration',
      'Push Notifications',
      'App Store Optimization',
      'Maintenance & Updates',
    ],
  },
  'logo-design-graphic-design': {
    title: 'Logo Design & Graphic Design',
    description: 'Build a strong visual identity for your brand with our creative design services. We create memorable logos and engaging graphics that communicate your brand message effectively.',
    features: [
      'Logo Design & Branding',
      'Business Card Design',
      'Brochure & Flyer Design',
      'Social Media Graphics',
      'Banner & Poster Design',
      'Packaging Design',
      'Brand Identity Guidelines',
      'Print-Ready Designs',
    ],
  },
  'support-maintenance': {
    title: 'Support & Maintenance',
    description: 'Keep your digital assets running smoothly with our comprehensive support and maintenance services. We provide ongoing technical support, updates, and optimization to ensure your systems perform at their best.',
    features: [
      '24/7 Technical Support',
      'Regular Updates & Patches',
      'Performance Monitoring',
      'Security Audits',
      'Bug Fixes & Troubleshooting',
      'Backup & Recovery',
      'Content Updates',
      'Performance Optimization',
    ],
  },
  'ecommerce-development': {
    title: 'E-commerce Development',
    description: 'Launch your online store with our comprehensive e-commerce solutions. We build secure, scalable e-commerce platforms that help you sell products online and grow your business.',
    features: [
      'Custom E-commerce Website',
      'Shopping Cart Integration',
      'Secure Payment Gateway',
      'Product Management System',
      'Inventory Management',
      'Order Tracking',
      'Multi-Currency Support',
      'Mobile-Responsive Design',
    ],
  },
  'seo-digital-marketing': {
    title: 'SEO & Digital Marketing Services',
    description: 'Increase your online visibility and reach more customers with our digital marketing services. We use proven strategies to improve your search engine rankings and drive targeted traffic to your website.',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
      'Pay-Per-Click (PPC) Advertising',
      'Email Marketing',
      'Google Analytics Setup',
      'Conversion Rate Optimization',
      'Monthly Performance Reports',
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-lg text-gray-600">The service you're looking for doesn't exist.</p>
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
                {service.title}
              </h1>
              <div className="bg-primary h-1 w-48 mx-auto mb-6"></div>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <InquiryForm title={service.title} serviceType="Service" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
