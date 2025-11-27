"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { Code, Smartphone, Palette, Wrench, ShoppingCart, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 'web-design-development',
    title: 'Web Design & Development',
    description: 'Professional website design and development services to establish your online presence with modern, responsive, and user-friendly websites.',
    icon: Code,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development for iOS and Android to reach your customers on the go.',
    icon: Smartphone,
  },
  {
    id: 'logo-design-graphic-design',
    title: 'Logo Design & Graphic Design',
    description: 'Creative logo design and graphic design services to build a strong visual identity for your brand.',
    icon: Palette,
  },
  {
    id: 'support-maintenance',
    title: 'Support & Maintenance',
    description: 'Ongoing technical support and maintenance services to keep your digital assets running smoothly and securely.',
    icon: Wrench,
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description: 'Complete e-commerce solutions to help you sell products online with secure payment integration and inventory management.',
    icon: ShoppingCart,
  },
  {
    id: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing Services',
    description: 'Comprehensive digital marketing and SEO services to increase your online visibility and drive more traffic to your business.',
    icon: TrendingUp,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-background py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
                Our Services
              </h1>
              <div className="bg-primary h-1 w-48 mx-auto mb-6"></div>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                InfoZen IT offers comprehensive technology solutions to help your business thrive in the digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-foreground mb-4">
                        {service.description}
                      </p>
                      <span className="text-primary font-semibold group-hover:underline">
                        Learn More →
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
