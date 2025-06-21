import { useState } from 'react';
import { Link } from 'react-router-dom';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How can I report a corruption case anonymously?",
      answer: "You can submit a report by clicking on the 'Report Corruption' button on the homepage. You don't need to share personal information if you want to stay anonymous. Just give as much detail as possible, like location, people involved, and what happened. Your safety is our top priority."
    },
    {
      question: "How do I know if action is being taken on my report?",
      answer: "After submitting a report, you can track its status from your dashboard. You'll see updates like 'Under Review,' 'Investigating,' or 'Resolved.' You may also receive a notification if there's an important update. This helps you stay informed at every step."
    },
    {
      question: "What kind of content is in the Education section?",
      answer: "The Education section provides articles, tips, and videos to help you understand how corruption works, how to spot it, and how to take safe action. It's there to empower citizens with knowledge and promote honest practices in everyday life."
    },
    {
      question: "Is my personal information secure when I make a report?",
      answer: "Absolutely. We use military-grade encryption to protect all user data. Your personal information is never shared without your explicit consent, and anonymous reports contain no identifiable information. Our security protocols are regularly audited by independent cybersecurity experts."
    },
    {
      question: "How does the reward system work for providing information?",
      answer: "Our reward system compensates citizens for verified information that leads to successful investigations. Rewards range from $100 to $10,000 depending on the significance of the information. All rewards are paid securely and anonymously through cryptocurrency or prepaid cards."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
        <p className="text-orange-800 max-w-2xl mx-auto">
          Find answers to common questions about reporting corruption, tracking cases,
          and using our platform safely and effectively.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? 'bg-gradient-to-r from-orange-50 to-orange-100 shadow-lg'
                : 'bg-orange-50 shadow'
            }`}
          >
            <button
              className={`w-full flex justify-between items-center p-5 text-left transition-colors duration-300 ${
                activeIndex === index ? 'text-orange-800' : 'text-orange-700'
              }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <h3 className="text-lg md:text-xl font-bold flex items-center">
                <span className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center mr-4">
                  {index + 1}
                </span>
                {faq.question}
              </h3>
              <span className="ml-4 shrink-0">
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 ml-12 border-l-2 border-orange-300">
                <p className="text-orange-800 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl border border-orange-200">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-orange-800 mb-2">Still have questions?</h3>
            <p className="text-orange-700">Contact our support team for more information</p>
          </div>
          <Link to="/ContactPage">
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Accordion;