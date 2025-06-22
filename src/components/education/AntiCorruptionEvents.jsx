import React, { useState, useEffect } from 'react';

const AntiCorruptionEvents = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState({
    upcoming: [],
    past: []
  });

  // Sample events data
  const events = {
    upcoming: [
      {
        id: 1,
        title: "National Anti-Corruption Conference 2023",
        date: "2023-11-15",
        time: "09:00 AM - 04:00 PM",
        location: "Bangabandhu International Conference Center, Dhaka",
        description: "Annual gathering of anti-corruption stakeholders to discuss strategies and share best practices in combating corruption in Bangladesh.",
        image: "conference",
        type: "Conference",
        speakers: ["Mr. XYZ (Chairman, ACC)", "Dr. ABC (Transparency International)"],
        attendees: "Government officials, NGO representatives, International delegates"
      },
      {
        id: 2,
        title: "Youth Against Corruption Workshop",
        date: "2023-11-25",
        time: "10:00 AM - 02:00 PM",
        location: "University of Dhaka, Dhaka",
        description: "Interactive workshop for university students to engage youth in anti-corruption initiatives.",
        image: "workshop",
        type: "Workshop",
        speakers: ["Prof. DEF (Department of Law)", "Ms. GHI (Youth Activist)"],
        attendees: "University students, Youth organizations"
      },
      {
        id: 3,
        title: "Digital Governance & Transparency Seminar",
        date: "2023-12-05",
        time: "02:00 PM - 05:00 PM",
        location: "ICT Tower, Dhaka",
        description: "Exploring how digital transformation can enhance transparency and reduce corruption in public services.",
        image: "seminar",
        type: "Seminar",
        speakers: ["Mr. JKL (ICT Division)", "Dr. MNO (Tech Expert)"],
        attendees: "IT professionals, Government officials"
      },
      {
        id: 7,
        title: "Public Sector Integrity Training",
        date: "2023-12-18",
        time: "10:00 AM - 01:00 PM",
        location: "Civil Service Academy, Dhaka",
        description: "Training for government officials on maintaining integrity and preventing corruption.",
        image: "training",
        type: "Training",
        speakers: ["Director, National Integrity Strategy"],
        attendees: "Government officials"
      }
    ],
    past: [
      {
        id: 4,
        title: "ACC Regional Awareness Campaign",
        date: "2023-10-10",
        time: "10:00 AM - 01:00 PM",
        location: "Chittagong City Corporation",
        description: "Regional campaign to raise awareness about corruption prevention and reporting mechanisms.",
        image: "campaign",
        type: "Campaign",
        outcome: "Over 500 participants, 120 corruption reports collected"
      },
      {
        id: 5,
        title: "Business Ethics Symposium",
        date: "2023-09-18",
        time: "09:30 AM - 03:00 PM",
        location: "Bangladesh Chamber of Commerce, Dhaka",
        description: "Discussion on ethical business practices and corporate governance to combat commercial corruption.",
        image: "symposium",
        type: "Symposium",
        outcome: "Signed MoU with 15 companies for ethical business practices"
      },
      {
        id: 6,
        title: "Anti-Corruption Day Rally",
        date: "2022-12-09",
        time: "09:00 AM - 12:00 PM",
        location: "National Parliament, Dhaka",
        description: "Annual rally commemorating International Anti-Corruption Day with participation from government and civil society.",
        image: "rally",
        type: "Rally",
        outcome: "Mass public participation with 5000+ attendees"
      },
      {
        id: 8,
        title: "Media & Corruption Roundtable",
        date: "2022-11-05",
        time: "03:00 PM - 06:00 PM",
        location: "Press Club, Dhaka",
        description: "Discussion on media's role in exposing corruption and promoting accountability.",
        image: "roundtable",
        type: "Roundtable",
        outcome: "Formed journalist network for corruption reporting"
      }
    ]
  };

  // Initialize filtered events
  useEffect(() => {
    setFilteredEvents(events);
  }, []);

  // Apply filters when filter values change
  useEffect(() => {
    const applyFilters = () => {
      const filtered = {
        upcoming: events.upcoming.filter(event => {
          const typeMatch = filterType === 'all' || event.type.toLowerCase() === filterType;
          const dateMatch = filterDate === 'all' ||
                           (filterDate === 'upcoming' && new Date(event.date) >= new Date()) ||
                           (filterDate === 'past' && new Date(event.date) < new Date());
          return typeMatch && dateMatch;
        }),
        past: events.past.filter(event => {
          const typeMatch = filterType === 'all' || event.type.toLowerCase() === filterType;
          const dateMatch = filterDate === 'all' ||
                           (filterDate === 'past' && new Date(event.date) < new Date()) ||
                           (filterDate === 'upcoming' && new Date(event.date) >= new Date());
          return typeMatch && dateMatch;
        })
      };
      setFilteredEvents(filtered);
    };

    applyFilters();
  }, [filterType, filterDate]);

  const toggleEventDetails = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const getImageStyle = (imageType) => {
    const images = {
      conference: "bg-gradient-to-r from-orange-400 to-orange-600",
      workshop: "bg-gradient-to-r from-amber-400 to-amber-600",
      seminar: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      campaign: "bg-gradient-to-r from-orange-300 to-orange-500",
      symposium: "bg-gradient-to-r from-amber-300 to-amber-500",
      rally: "bg-gradient-to-r from-yellow-300 to-yellow-500",
      training: "bg-gradient-to-r from-orange-400 to-amber-500",
      roundtable: "bg-gradient-to-r from-amber-400 to-yellow-500"
    };
    return images[imageType] || "bg-gradient-to-r from-orange-400 to-orange-600";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Unique event types for filter dropdown
  const eventTypes = [
    ...new Set([
      ...events.upcoming.map(event => event.type),
      ...events.past.map(event => event.type)
    ])
  ];

  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white p-2 rounded-full mr-4">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center">Anti-Corruption Events in Bangladesh</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl text-center">
            Upcoming and past events focused on combating corruption and promoting transparency
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">120+</h3>
              <p className="text-gray-700">Events organized annually</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">15,000+</h3>
              <p className="text-gray-700">Participants engaged each year</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-2">64</h3>
              <p className="text-gray-700">Districts covered nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-orange-100 rounded-lg p-1 shadow-inner">
            <button
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-orange-700 hover:bg-orange-200'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-orange-700 hover:bg-orange-200'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents[activeTab].map(event => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
            >
              {/* Event Image */}
              <div className={`h-40 ${getImageStyle(event.image)} flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h3>
                    <div className="flex items-center text-sm text-orange-600 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{formatDate(event.date)} | {event.time}</span>
                    </div>
                  </div>
                  <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                    {activeTab === 'upcoming' ? 'UPCOMING' : 'COMPLETED'}
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{event.location}</span>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <button
                  className="text-orange-600 font-semibold flex items-center"
                  onClick={() => toggleEventDetails(event.id)}
                >
                  {expandedEvent === event.id ? 'Show less' : 'View details'}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transform transition-transform ${expandedEvent === event.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded Details */}
                {expandedEvent === event.id && (
                  <div className="mt-4 pt-4 border-t border-orange-100">
                    {activeTab === 'upcoming' ? (
                      <>
                        <h4 className="font-bold text-gray-800 mb-2">Featured Speakers:</h4>
                        <ul className="mb-4">
                          {event.speakers.map((speaker, index) => (
                            <li key={index} className="flex items-center mb-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">{speaker}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-bold text-gray-800 mb-2">Expected Attendees:</h4>
                        <p className="text-gray-700 mb-4">{event.attendees}</p>

                        <div className="mt-4 flex">
                          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-bold transition duration-300">
                            Register Now
                          </button>
                          <button className="ml-2 border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-4 rounded-lg font-bold transition duration-300">
                            Add to Calendar
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <h4 className="font-bold text-gray-800 mb-2">Event Outcomes:</h4>
                        <p className="text-gray-700 mb-4">{event.outcome}</p>

                        <h4 className="font-bold text-gray-800 mb-2">Event Gallery:</h4>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="aspect-square bg-orange-100 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          ))}
                        </div>

                        <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-4 rounded-lg font-bold transition duration-300">
                          View Full Report
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>



        {/* Event Calendar with Filters */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-orange-700">Anti-Corruption Event Calendar</h2>
              <p className="text-gray-600 mt-2">Browse all upcoming and past events</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              {/* Type Filter */}
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="appearance-none bg-orange-50 border border-orange-200 text-orange-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  {eventTypes.map((type, index) => (
                    <option key={index} value={type.toLowerCase()}>{type}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Date Filter */}
              <div className="relative">
                <select
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="appearance-none bg-orange-50 border border-orange-200 text-orange-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                >
                  <option value="all">All Dates</option>
                  <option value="upcoming">Upcoming Only</option>
                  <option value="past">Past Only</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Reset Filters Button */}
              <button
                onClick={() => {
                  setFilterType('all');
                  setFilterDate('all');
                }}
                className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-4 rounded-lg font-medium transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-50">
                  <th className="py-3 px-4 text-left text-orange-700">Date</th>
                  <th className="py-3 px-4 text-left text-orange-700">Event</th>
                  <th className="py-3 px-4 text-left text-orange-700">Location</th>
                  <th className="py-3 px-4 text-left text-orange-700">Type</th>
                  <th className="py-3 px-4 text-left text-orange-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.upcoming.map(event => (
                  <tr key={event.id} className="border-b border-orange-100 hover:bg-orange-50">
                    <td className="py-3 px-4 font-medium">{formatDate(event.date)}</td>
                    <td className="py-3 px-4">{event.title}</td>
                    <td className="py-3 px-4">{event.location.split(',')[0]}</td>
                    <td className="py-3 px-4">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Upcoming
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredEvents.past.map(event => (
                  <tr key={event.id} className="border-b border-orange-100 hover:bg-orange-50">
                    <td className="py-3 px-4 font-medium">{formatDate(event.date)}</td>
                    <td className="py-3 px-4">{event.title}</td>
                    <td className="py-3 px-4">{event.location.split(',')[0]}</td>
                    <td className="py-3 px-4">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* No results message */}
            {filteredEvents.upcoming.length === 0 && filteredEvents.past.length === 0 && (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mt-4">No events found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters to see more results</p>
                <button
                  onClick={() => {
                    setFilterType('all');
                    setFilterDate('all');
                  }}
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>


    </div>
  );
};

export default AntiCorruptionEvents;