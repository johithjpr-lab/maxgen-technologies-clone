"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { Code, Smartphone, Palette, Wrench, ShoppingCart, TrendingUp } from 'lucide-react';

const careers = [
  {
    id: 'web-design-development',
    title: 'Web Design & Development',
    description: 'Join our web development team to create stunning websites and web applications for clients worldwide.',
    icon: Code,
    positions: 'Multiple positions available',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Build innovative mobile applications for iOS and Android platforms using cutting-edge technologies.',
    icon: Smartphone,
    positions: 'Multiple positions available',
  },
  {
    id: 'logo-design-graphic-design',
    title: 'Logo Design & Graphic Design',
    description: 'Create compelling visual designs and branding solutions for diverse clients across industries.',
    icon: Palette,
    positions: 'Multiple positions available',
  },
  {
    id: 'support-maintenance',
    title: 'Support & Maintenance',
    description: 'Provide technical support and maintenance services to ensure client systems run smoothly.',
    icon: Wrench,
    positions: 'Multiple positions available',
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description: 'Develop robust e-commerce platforms and online stores with secure payment integrations.',
    icon: ShoppingCart,
    positions: 'Multiple positions available',
  },
  {
    id: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing Services',
    description: 'Drive online visibility and growth for clients through strategic digital marketing campaigns.',
    icon: TrendingUp,
    positions: 'Multiple positions available',
  },
];

export default function CareerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-background py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
                Career Opportunities
              </h1>
              <div className="bg-primary h-1 w-48 mx-auto mb-6"></div>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Join InfoZen IT and be part of an innovative team that's shaping the future of technology. 
                We're always looking for talented developers, designers, and digital marketing professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {careers.map((career) => {
                const IconComponent = career.icon;
                return (
                  <Link
                    key={career.id}
                    href={`/career/${career.id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {career.title}
                      </h3>
                      <p className="text-foreground mb-4">
                        {career.description}
                      </p>
                      <span className="text-sm text-gray-600 mb-3">{career.positions}</span>
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
