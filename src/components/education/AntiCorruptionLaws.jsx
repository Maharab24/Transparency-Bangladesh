import React from 'react';

const AntiCorruptionLaws = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white p-2 rounded-full mr-4">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center">Anti-Corruption Laws of Bangladesh</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl text-center">
            Comprehensive legal framework combating corruption through legislation, institutions, and international commitments
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">100,000+</h3>
              <p className="text-gray-700">Cases investigated by ACC since 2004</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">15+</h3>
              <p className="text-gray-700">Key laws and amendments</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">2004</h3>
              <p className="text-gray-700">Establishment of Anti-Corruption Commission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Primary Legislation Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-orange-700 mb-6 pb-2 border-b-2 border-orange-300">Primary Anti-Corruption Legislation</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Penal Code, 1860</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Criminalizes bribery (Section 23)</li>
                        <li>Defines "wrongful gain" (illegal property acquisition)</li>
                        <li>Addresses abuse of power by public servants (Sections 161-169)</li>
                        <li>Penalties include 1-10 years imprisonment and fines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Prevention of Corruption Act, 1947</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Defines "criminal misconduct"</li>
                        <li>Imposes stricter penalties than Penal Code</li>
                        <li>Up to 7 years imprisonment for bribery</li>
                        <li>Mirrors PC 1860 offenses with enhanced punishments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Anti-Corruption Commission Act, 2004</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Established the Anti-Corruption Commission (ACC)</li>
                        <li>Grants powers to investigate, arrest, and prosecute</li>
                        <li>2013 & 2016 Amendments modified prosecution requirements</li>
                        <li>Requires asset declarations for public officials</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Money Laundering Prevention Act, 2012</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Criminalizes laundering proceeds from corruption</li>
                        <li>Linked to ACCA 2004's "scheduled offenses"</li>
                        <li>Provides framework for asset recovery</li>
                        <li>Enables international cooperation on financial crimes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Framework */}
            <h2 className="text-3xl font-bold text-orange-700 mt-12 mb-6 pb-2 border-b-2 border-orange-300">Institutional Framework</h2>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Anti-Corruption Commission (ACC)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Mandate:</strong> Investigate corruption, recover illicit assets, promote awareness</li>
                    <li><strong>Powers:</strong> Summon witnesses, freeze assets, demand asset declarations</li>
                    <li><strong>Limitations:</strong> Political interference, resource constraints, case backlog</li>
                  </ul>

                  <div className="mt-4 bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-700 mb-2">Supplementary Laws:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Code of Criminal Procedure:</strong> Governs procedures for corruption trials</li>
                      <li><strong>Government Servants (Conduct) Rules:</strong> Caps gifts at 500 taka (∼$6) for public officials</li>
                      <li><strong>Right to Information Act, 2009:</strong> Enhances transparency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* International Commitments */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4 pb-2 border-b-2 border-orange-300">International Commitments</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">UN Convention Against Corruption (UNCAC)</h3>
                    <p className="text-gray-700 text-sm">Ratified by Bangladesh - commits to asset recovery, mutual legal assistance, and preventive measures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">SAARC Anti-Corruption Convention</h3>
                    <p className="text-gray-700 text-sm">Regional commitment to combat corruption in South Asia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enforcement Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4 pb-2 border-b-2 border-orange-300">Enforcement Challenges</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Systemic Issues</h3>
                    <p className="text-gray-700 text-sm">Judiciary backlogs, political influence, police corruption, and impunity for abuses</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Sector-Specific Risks</h3>
                    <ul className="list-disc pl-5 text-gray-700 text-sm mt-1">
                      <li>Land Administration: Bribery for permits</li>
                      <li>Tax & Customs: Negotiated liabilities</li>
                      <li>Public Procurement: Favoritism and nepotism</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Notable Cases */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-orange-700 mb-4 pb-2 border-b-2 border-orange-300">Notable Cases & Impact</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h3 className="font-bold text-gray-800">High-Profile Convictions</h3>
                  <p className="text-gray-700 text-sm">MPs like Abdur Rahman Bodi and ex-minister Mofazzal Chowdhury received prison sentences for corruption</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h3 className="font-bold text-gray-800">Padma Bridge Scandal</h3>
                  <p className="text-gray-700 text-sm">World Bank halted $3 billion funding over bribery allegations involving ministers</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h3 className="font-bold text-gray-800">Rana Plaza Collapse (2013)</h3>
                  <p className="text-gray-700 text-sm">Exposed corruption in building permits and inspections that led to 1,134 deaths</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
              <p className="text-orange-100">
                Bangladesh has established a comprehensive legal framework through legislation like the Penal Code (1860), Prevention of Corruption Act (1947), ACC Act (2004), and MLP Act (2012). While institutions like the Anti-Corruption Commission demonstrate commitment to combating corruption, challenges remain in enforcement due to political interference, resource constraints, and systemic vulnerabilities in key sectors. Continuous reforms and strengthening of institutions are crucial for effective implementation of anti-corruption measures.
              </p>
            </div>
          </div>
        </div>
      </main>

     

    </div>
  );
};

export default AntiCorruptionLaws;