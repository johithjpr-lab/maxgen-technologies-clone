"use client";

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Summer Internship 2025",
    description: "Maxgen Technologies Pvt Ltd is seeking a highly motivated and enthusiastic individual to join Internship Programme for the summer. This internship offers an excellent opportunity to gain hands-on experience in IT Sector and contribute to real-world projects.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/summwr-D3XibHaG-6.jpeg",
    href: "#",
  },
  {
    title: "Why Digital Marketing is Important to Generate Revenue",
    description: "Digital marketing has become an essential aspect of generating revenue for businesses. Here are some reasons why digital marketing is important for revenue generation.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/Digital-Marketing-Services-Bq7wjA3h-7.jpg",
    href: "#",
  },
  {
    title: "Importance of Website in your Business Growth",
    description: "Websites are an essential tool for businesses looking to grow and succeed in today's digital age. Every website plays a vital role in business growth.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/web-design-DaxKeutq-8.jpg",
    href: "#",
  },
];

const BlogCards = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              <Link href={post.href}>
                <div className="relative w-full h-56">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  <Link href={post.href} className="text-heading-gray hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {post.description}
                </p>
                <div className="mt-auto pt-4">
                  <Link href={post.href} className="font-semibold text-primary hover:underline">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;