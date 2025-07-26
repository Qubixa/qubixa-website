"use client"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean, message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    console.log('Submitting form data directly to Web3Forms:', formData);
    
    // Submit directly to Web3Forms (no proxy server)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "7d657e90-4b00-466b-b659-4bcbdb79974f",
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone || '',
        service: formData.service || '',
        message: formData.message,
        subject: `New contact from ${formData.firstName} ${formData.lastName}`,
        from_name: "Qubixa Website Contact Form",
        to_email: "support@qubixatech.com",
        reply_to: formData.email
      })
    });

    console.log('Web3Forms response status:', response.status);
    
    const data = await response.json();
    console.log('Web3Forms response data:', data);

    if (response.ok && data.success) {
      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! We will get back to you soon.' 
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } else {
      setSubmitStatus({ 
        success: false, 
        message: data.message || 'Failed to send message. Please try again.' 
      });
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setSubmitStatus({ 
      success: false, 
      message: 'Network error. Please check your connection and try again.' 
    });
  } finally {
    setIsSubmitting(false);
  }
};
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "qubixatech@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 7620981412",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Mumbai, Maharashtra, India",
      description: "Come say hello at our office",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Saturday: 10:00 AM - 2:00 PM",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - Elegant Design */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>

                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YjcyOGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1rem]"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="desktop-development">Desktop Development</option>
                      <option value="backend-development">Backend Development</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information - Elegant Design */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Contact Details</h2>
                <p className="text-gray-600">
                  Reach out to us through any of these channels for prompt assistance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    detail: "qubixatech@gmail.com",
                    description: "Typically reply within 1 business day",
                    color: "bg-blue-100 text-blue-600"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    detail: "+91 98765 43210",
                    description: "Mon-Fri, 9am-6pm IST",
                    color: "bg-green-100 text-green-600"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    detail: "Mumbai, India",
                    description: "Remote-first company",
                    color: "bg-purple-100 text-purple-600"
                  },
                  {
                    icon: MessageCircle,
                    title: "Live Chat",
                    detail: "Start chat",
                    description: "Available for existing clients",
                    color: "bg-orange-100 text-orange-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-800 font-medium mb-1">{item.detail}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Qubixa?</h3>
                <ul className="space-y-4">
                  {[
                    "Founded in 2025 with a future-focused vision",
                    "10+ skilled professionals with 2-3 years of experience",
                    "100% remote team, agile and collaborative",
                    "Scalable solutions across web, desktop, and AI",
                    "Client-focused approach with high retention"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on complexity, but most web applications take 8-16 weeks, while enterprise solutions may take 3-6 months.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages to ensure your application continues to perform optimally.",
              },
              {
                question: "Can you work with our existing systems?",
                answer:
                  "We specialize in integrating new solutions with existing systems and can work with various APIs and databases.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We work with modern technologies including React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms like AWS.",
              },
              {
                question: "Do you sign NDAs?",
                answer:
                  "Yes, we're happy to sign non-disclosure agreements to protect your intellectual property and business information.",
              },
              {
                question: "What are your payment terms?",
                answer:
                  "We typically work with milestone-based payments, with 30% upfront, 40% at midpoint, and 30% upon completion.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


// "use client"
// import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
// import { useState } from "react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch("http://localhost:5000/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           message: formData.message
//         }),
//       });

//       // First check if response is ok before trying to parse JSON
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
//       }

//       const result = await response.json();
//       setSubmitStatus({
//         success: true,
//         message: "Thank you! Your message has been sent successfully."
//       });
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Form submission error:', error);
//       setSubmitStatus({
//         success: false,
//         message: error.message || "Failed to submit form. Please try again."
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you
//             achieve your goals.
//           </p>
//         </div>
//       </section>

//       {/* Contact Form and Info */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form - Elegant Design */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
//               <div className="p-8">
//                 <div className="mb-8 text-center">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
//                   <p className="text-gray-600">We typically respond within 24 hours</p>
//                 </div>

//                 {submitStatus && (
//                   <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                     {submitStatus.message}
//                   </div>
//                 )}

//                 <div className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
//                         First Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="firstName"
//                         name="firstName"
//                         type="text"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                         placeholder="John"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
//                         Last Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="lastName"
//                         name="lastName"
//                         type="text"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                         placeholder="Doe"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                       placeholder="john@example.com"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//                       Service Interested In
//                     </label>
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white"
//                     >
//                       <option value="">Select a service</option>
//                       <option value="web-development">Web Development</option>
//                       <option value="desktop-development">Desktop Development</option>
//                       <option value="backend-development">Backend Development</option>
//                       <option value="ai-integration">AI Integration</option>
//                       <option value="consulting">Consulting</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Message <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                       placeholder="Tell us about your project..."
//                       required
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information - Elegant Design */}
//             <div className="space-y-8">
//               <div className="text-center lg:text-left">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Contact Details</h2>
//                 <p className="text-gray-600">
//                   Reach out to us through any of these channels for prompt assistance.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {[
//                   {
//                     icon: Mail,
//                     title: "Email Us",
//                     detail: "info@qubixa.com",
//                     description: "Typically reply within 1 business day",
//                     color: "bg-blue-100 text-blue-600"
//                   },
//                   {
//                     icon: Phone,
//                     title: "Call Us",
//                     detail: "+91 8369690693",
//                     description: "Mon-Fri, 9am-6pm IST",
//                     color: "bg-green-100 text-green-600"
//                   },
//                   {
//                     icon: MapPin,
//                     title: "Visit Us",
//                     detail: "Mumbai, India",
//                     description: "Remote-first company",
//                     color: "bg-purple-100 text-purple-600"
//                   },
//                   {
//                     icon: MessageCircle,
//                     title: "Live Chat",
//                     detail: "Start chat",
//                     description: "Available for existing clients",
//                     color: "bg-orange-100 text-orange-600"
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                     <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
//                       <item.icon className="w-6 h-6" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
//                     <p className="text-gray-800 font-medium mb-1">{item.detail}</p>
//                     <p className="text-sm text-gray-500">{item.description}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Why Choose Us */}
//               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Qubixa?</h3>
//                 <ul className="space-y-4">
//                   {[
//                     "Founded in 2025 with a future-focused vision",
//                     "10+ skilled professionals with 2-3 years of experience",
//                     "100% remote team, agile and collaborative",
//                     "Scalable solutions across web, desktop, and AI",
//                     "Client-focused approach with high retention"
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <div className="flex-shrink-0 mt-1 mr-3">
//                         <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
//                           <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </div>
//                       </div>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Quick answers to common questions about our services and process.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 question: "What is your typical project timeline?",
//                 answer:
//                   "Project timelines vary based on complexity, but most web applications take 8-16 weeks, while enterprise solutions may take 3-6 months.",
//               },
//               {
//                 question: "Do you provide ongoing support?",
//                 answer:
//                   "Yes, we offer comprehensive support and maintenance packages to ensure your application continues to perform optimally.",
//               },
//               {
//                 question: "Can you work with our existing systems?",
//                 answer:
//                   "We specialize in integrating new solutions with existing systems and can work with various APIs and databases.",
//               },
//               {
//                 question: "What technologies do you specialize in?",
//                 answer:
//                   "We work with modern technologies including React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms like AWS.",
//               },
//               {
//                 question: "Do you sign NDAs?",
//                 answer:
//                   "Yes, we're happy to sign non-disclosure agreements to protect your intellectual property and business information.",
//               },
//               {
//                 question: "What are your payment terms?",
//                 answer:
//                   "We typically work with milestone-based payments, with 30% upfront, 40% at midpoint, and 30% upon completion.",
//               },
//             ].map((faq, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
//                 <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
