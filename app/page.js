"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  Book,
  DollarSign,
  Clock,
  Users,
  Award,
  ThumbsUp,
  CheckIcon,
  Mail,
  Phone,
  MessageCircleMore,
} from "lucide-react";


export default function LandingPage() {
const router = useRouter();
  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
 
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    College Projects Made Easy
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    We offer high-quality mega and micro projects for college
                    students at reasonable prices. Get the help you need to
                    succeed.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="w-full sm:w-auto" onClick={scrollToContact}>Get Started</Button>
                  <Button variant="outline" className="w-full sm:w-auto" onClick={()=>router.push("/projects")} >Projects</Button>
                    
                </div>
              </div>
            </div>
          </section>
          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Why Choose Us
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    icon: Book,
                    title: "Expert Guidance",
                    description:
                      "Get support from experienced professionals in various fields.",
                  },
                  {
                    icon: DollarSign,
                    title: "Affordable Pricing",
                    description: "High-quality projects that fit your budget.",
                  },
                  {
                    icon: Clock,
                    title: "Timely Delivery",
                    description:
                      "Meet your deadlines with our efficient project completion.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                  >
                    <feature.icon className="h-10 w-10 mb-2" />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                More About Us
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Users,
                    title: "Experienced Team",
                    description:
                      "Our team consists of experienced professionals and academics who understand the intricacies of college projects.",
                  },
                  {
                    icon: Award,
                    title: "Quality Assurance",
                    description:
                      "We maintain high standards for all our projects, ensuring you receive top-notch work that meets academic requirements.",
                  },
                  {
                    icon: ThumbsUp,
                    title: "Student Success",
                    description:
                      "Our primary goal is your success. We're committed to helping you achieve your academic goals and excel in your studies.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg"
                  >
                    <item.icon className="h-10 w-10 mb-2" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
                  At ProjectPro, we're dedicated to empowering college students
                  by providing high-quality project assistance. We believe in
                  fostering learning, creativity, and academic excellence
                  through our services.
                </p>
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Why Trust Us</h3>
                <ul className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-left list-disc list-inside">
                  {[
                    "Years of experience in academic project assistance",
                    "Tailored solutions for various fields of study",
                    "Strict adherence to academic integrity and originality",
                    "Continuous support throughout your project journey",
                    "Positive feedback from thousands of satisfied students",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section
            id="service"
            className="w-full py-12 md:py-24 lg:py-32 bg-background"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Our Service
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Micro Projects",
                    description:
                      "Perfect for small assignments and quick tasks",
                    features: [
                      "Basic research and implementation",
                      "Documentation included",
                      "1 round of revisions",
                    ],
                    isPrimary: false,
                  },
                  {
                    title: "Mega Projects",
                    description:
                      "Comprehensive solutions for complex assignments",
                    features: [
                      "In-depth research and analysis",
                      "Full implementation and testing",
                      "Comprehensive documentation",
                      "3 rounds of revisions",
                    ],
                    isPrimary: true,
                  },
                  {
                    title: "Custom Projects",
                    description: "Tailored solutions for unique requirements",
                    features: [
                      "Customized scope and deliverables",
                      "Dedicated project manager",
                      "Flexible revision policy",
                    ],
                    isPrimary: false,
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`flex flex-col p-6 ${
                      service.isPrimary
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-card-foreground"
                    } rounded-lg shadow-lg`}
                  >
                    <h3 className="text-2xl font-bold text-center mb-4">
                      {service.title}
                    </h3>
                    <p
                      className={`${
                        service.isPrimary
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      } text-center mb-4`}
                    >
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckIcon
                            className={`w-4 h-4 mr-2 ${
                              service.isPrimary
                                ? "text-primary-foreground"
                                : "text-primary"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                    onClick={scrollToContact}
                      className={`mt-auto ${
                        service.isPrimary
                          ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                          : ""
                      }`}
                    >
                      {service.title === "Custom Projects"
                        ? "Contact Us"
                        : "Get Started"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center gap-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get Started Today
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Ready to ace your college projects? Contact us now and let's
                    make your academic journey a success!
                  </p>
                </div>
                <div className="container px-4 md:px-6">
                  <div className="grid gap-16 sm:grid-cols-3 items-center justify-center min-w-3xl mx-auto">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <Mail className="h-10 w-10 mb-2 text-primary" />
                      <h3 className="text-xl font-bold">Email</h3>
                      <a
                        href="mailto:projecthubbusiness@gmail.com"
                        className="text-gray-500 dark:text-gray-400 hover:underline"
                      >
                        projecthubbusiness@gmail.com
                      </a>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <Phone className="h-10 w-10 mb-2 text-primary" />
                      <h3 className="text-xl font-bold">Phone</h3>
                      <div className="flex gap-2">
                        <a
                          href="tel:+91 7775858902"
                          className="text-gray-500 dark:text-gray-400 hover:underline"
                        >
                          7775858902
                        </a>
                        /
                        <a
                          href="tel:+91 78881 24630"
                          className="text-gray-500 dark:text-gray-400 hover:underline"
                        >
                          7888124630
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <MessageCircleMore className="h-10 w-10 mb-2 text-primary" />
                      <h3 className="text-xl font-bold">WhatsApp</h3>
                      <div className="flex gap-2">
                        <a
                          target="_blank"
                          href="https://wa.me/917775858902"
                          className="text-gray-500 dark:text-gray-400 hover:underline"
                        >
                          7775858902
                        </a>
                        /
                        <a
                          href="https://wa.me/917888124630"
                          target="_blank"
                          className="text-gray-500 dark:text-gray-400 hover:underline"
                        >
                          7888124630
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
      </div>

  );
}
