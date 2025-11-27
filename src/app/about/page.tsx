import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-background py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
                About InfoZen IT
              </h1>
              <div className="bg-primary h-1 w-48 mx-auto mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                <p className="text-foreground mb-4">
                  InfoZen IT is a leading technology solutions provider specializing in web development, 
                  mobile app development, digital marketing, and IT consulting services. We are committed 
                  to delivering innovative solutions that help businesses thrive in the digital age.
                </p>
                <p className="text-foreground mb-4">
                  With a team of experienced professionals and a passion for technology, we work closely 
                  with our clients to understand their unique needs and deliver customized solutions that 
                  drive growth and success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-foreground">
                    To empower businesses with cutting-edge technology solutions that enhance their 
                    digital presence, improve operational efficiency, and drive sustainable growth.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-foreground">
                    To be the most trusted and innovative technology partner for businesses worldwide, 
                    known for excellence, reliability, and transformative digital solutions.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose InfoZen IT?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <span className="text-primary text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Expert Team</h4>
                      <p className="text-foreground text-sm">
                        Skilled professionals with years of industry experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Quality Assurance</h4>
                      <p className="text-foreground text-sm">
                        Rigorous testing and quality control processes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Timely Delivery</h4>
                      <p className="text-foreground text-sm">
                        Committed to meeting deadlines and project milestones
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">24/7 Support</h4>
                      <p className="text-foreground text-sm">
                        Round-the-clock technical support and maintenance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Competitive Pricing</h4>
                      <p className="text-foreground text-sm">
                        Affordable solutions without compromising on quality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Innovation Focus</h4>
                      <p className="text-foreground text-sm">
                        Leveraging latest technologies and industry best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-foreground">
                      <span className="text-secondary mr-2">•</span>
                      Web Design & Development
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="text-secondary mr-2">•</span>
                      Mobile App Development
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="text-secondary mr-2">•</span>
                      Logo Design & Graphic Design
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-foreground">
                      <span className="text-secondary mr-2">•</span>
                      Support & Maintenance
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="text-secondary mr-2">•</span>
                      E-commerce Development
                    </li>
                    <li className="flex items-center text-foreground">
                      <span className="text-secondary mr-2">•</span>
                      SEO & Digital Marketing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
