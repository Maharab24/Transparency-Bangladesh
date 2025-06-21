// src/components/ContactPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Message should be at least 20 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setIsSubmitted(false);
            }, 3000);
        }
    };

    // SVG Icons
    const LocationIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );

    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );

    const EmailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );

    const ClockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fff5f0] to-[#ffece0] pt-10 pb-20 px-4">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="bg-gradient-to-r from-[#f6824d] to-[#e05a2a] text-white p-3 rounded-xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Contact Transparency Bangladesh</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Have questions, suggestions, or need assistance? Reach out to us through our contact form or directly via our contact information below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            Send us a message
                        </h2>

                        {isSubmitted && (
                            <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-200 text-green-700 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Your message has been sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6824d] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6824d] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your email address"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6824d] ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="What is this regarding?"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6824d] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Type your message here..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#f6824d] to-[#e05a2a] hover:from-[#e05a2a] hover:to-[#c54a1a] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#f6824d] focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Our Office
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="mt-1 mr-4 text-[#f6824d]">
                                        <LocationIcon />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Headquarters</h3>
                                        <p className="text-gray-600 mt-1">
                                            Asfia Tower, Road no 11<br />
                                            Banani, Dhaka 1212<br />
                                            Bangladesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mt-1 mr-4 text-[#f6824d]">
                                        <PhoneIcon />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
                                        <p className="text-gray-600 mt-1">
                                            +880 0184213662 (General)<br />
                                            +880 01732577036(Support)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mt-1 mr-4 text-[#f6824d]">
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email Addresses</h3>
                                        <p className="text-gray-600 mt-1">
                                            info@transparencybd.org<br />
                                            support@transparencybd.org
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mt-1 mr-4 text-[#f6824d]">
                                        <ClockIcon />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Working Hours</h3>
                                        <p className="text-gray-600 mt-1">
                                            Sunday to Thursday: 9:00 AM - 5:00 PM<br />
                                            Friday & Saturday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    Find Us
                                </h2>
                            </div>
                            <div className="h-80 w-full">
                                {/* Google Maps iframe */}
                                <iframe
                                    title="Transparency Bangladesh Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735.0814815227172!2d90.40935390715809!3d23.790078930944297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e320970f2f%3A0x78b46ec73b35095d!2sAsfia%20Tower!5e1!3m2!1sen!2sbd!4v1750540069364!5m2!1sen!2sbd"
                                    className="w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">How can I report corruption anonymously?</h3>
                            <p className="text-gray-600">
                                We provide a secure whistleblowing platform where you can report corruption anonymously. Visit our "Report Corruption" section to submit information securely.
                            </p>
                        </div>

                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">How long does it take to get a response?</h3>
                            <p className="text-gray-600">
                                We strive to respond to all inquiries within 1-2 business days. For urgent matters, please call our support line during business hours.
                            </p>
                        </div>

                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Can I volunteer with Transparency Bangladesh?</h3>
                            <p className="text-gray-600">
                                Absolutely! We welcome volunteers who are passionate about fighting corruption. Visit our "Get Involved" section to learn about current opportunities.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2">How can I donate to support your work?</h3>
                            <p className="text-gray-600">
                                We accept donations through bank transfer, mobile banking, and online payment systems. Visit our "Donate" page for detailed instructions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactPage;