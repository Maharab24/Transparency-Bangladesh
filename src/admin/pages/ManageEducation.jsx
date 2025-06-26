import React, { useState, useEffect } from 'react';
import {
  FiUser,
  FiUserPlus,
  FiCalendar,
  FiEdit,
  FiTrash2,
  FiSave,
  FiX,
  FiUpload,
  FiFilePlus,
  FiUsers,
  FiStar
} from 'react-icons/fi';

function ManageEducation() {
  // Trainer states
  const [trainers, setTrainers] = useState([]);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);
  const [currentTrainer, setCurrentTrainer] = useState(null);
  const [trainerForm, setTrainerForm] = useState({
    name: '',
    trainerId: '',
    nid: '',
    phone: '',
    facebook: '',
    linkedin: '',
    photo: '',
    uploadDate: new Date().toISOString().split('T')[0],
    expertise: '',
    rating: 5
  });

  // Event states
  const [events, setEvents] = useState([]);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: 'conference',
    type: 'Conference',
    speakers: [''],
    attendees: '',
    outcome: ''
  });

  const [activeTab, setActiveTab] = useState('trainers');
  const [loading, setLoading] = useState(true);

  // Initialize with sample data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTrainers([
        {
          id: 'T001',
          name: 'Dr. Ahmed Rahman',
          trainerId: 'ACC-TR-001',
          nid: '1980123456789',
          phone: '+8801712345678',
          facebook: 'https://facebook.com/ahmed.rahman',
          linkedin: 'https://linkedin.com/in/ahmed-rahman',
          photo: '',
          uploadDate: '2025-01-15',
          expertise: 'Anti-Corruption Law & Policy',
          rating: 4.8
        },
        {
          id: 'T002',
          name: 'Fatima Begum',
          trainerId: 'ACC-TR-002',
          nid: '1985123456789',
          phone: '+8801812345678',
          facebook: 'https://facebook.com/fatima.begum',
          linkedin: 'https://linkedin.com/in/fatima-begum',
          photo: '',
          uploadDate: '2025-01-20',
          expertise: 'Financial Investigation & Forensic Accounting',
          rating: 4.9
        },
        {
          id: 'T003',
          name: 'Md. Kabir Hossain',
          trainerId: 'ACC-TR-003',
          nid: '1990123456789',
          phone: '+8801912345678',
          facebook: 'https://facebook.com/kabir.hossain',
          linkedin: 'https://linkedin.com/in/kabir-hossain',
          photo: '',
          uploadDate: '2025-02-05',
          expertise: 'Digital Governance & Transparency',
          rating: 4.7
        }
      ]);

      setEvents([
        {
          id: 'E001',
          title: "National Anti-Corruption Conference 2025",
          date: "2025-11-15",
          time: "09:00 AM - 04:00 PM",
          location: "Bangabandhu International Conference Center, Dhaka",
          description: "Annual gathering of anti-corruption stakeholders to discuss strategies and share best practices.",
          image: "conference",
          type: "Conference",
          speakers: ["Mr. XYZ (Chairman, ACC)", "Dr. ABC (Transparency International)"],
          attendees: "Government officials, NGO representatives, International delegates",
          outcome: ""
        },
        {
          id: 'E002',
          title: "Youth Against Corruption Workshop",
          date: "2025-11-25",
          time: "10:00 AM - 02:00 PM",
          location: "University of Dhaka, Dhaka",
          description: "Interactive workshop for university students to engage youth in anti-corruption initiatives.",
          image: "workshop",
          type: "Workshop",
          speakers: ["Prof. DEF (Department of Law)", "Ms. GHI (Youth Activist)"],
          attendees: "University students, Youth organizations",
          outcome: ""
        }
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  // Trainer Functions
  const openTrainerModal = (trainer = null) => {
    if (trainer) {
      setCurrentTrainer(trainer);
      setTrainerForm({ ...trainer });
    } else {
      setCurrentTrainer(null);
      setTrainerForm({
        name: '',
        trainerId: '',
        nid: '',
        phone: '',
        facebook: '',
        linkedin: '',
        photo: '',
        uploadDate: new Date().toISOString().split('T')[0],
        expertise: '',
        rating: 5
      });
    }
    setIsTrainerModalOpen(true);
  };

  const handleTrainerChange = (e) => {
    const { name, value } = e.target;
    setTrainerForm({ ...trainerForm, [name]: value });
  };

  const saveTrainer = () => {
    if (currentTrainer) {
      // Update existing trainer
      setTrainers(trainers.map(t => t.id === currentTrainer.id ? trainerForm : t));
    } else {
      // Add new trainer
      const newTrainer = {
        ...trainerForm,
        id: `T${Math.floor(1000 + Math.random() * 9000)}`
      };
      setTrainers([...trainers, newTrainer]);
    }
    setIsTrainerModalOpen(false);
  };

  const deleteTrainer = (id) => {
    setTrainers(trainers.filter(trainer => trainer.id !== id));
  };

  // Event Functions
  const openEventModal = (event = null) => {
    if (event) {
      setCurrentEvent(event);
      setEventForm({ ...event });
    } else {
      setCurrentEvent(null);
      setEventForm({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        image: 'conference',
        type: 'Conference',
        speakers: [''],
        attendees: '',
        outcome: ''
      });
    }
    setIsEventModalOpen(true);
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value });
  };

  const handleSpeakerChange = (index, value) => {
    const newSpeakers = [...eventForm.speakers];
    newSpeakers[index] = value;
    setEventForm({ ...eventForm, speakers: newSpeakers });
  };

  const addSpeaker = () => {
    setEventForm({ ...eventForm, speakers: [...eventForm.speakers, ''] });
  };

  const removeSpeaker = (index) => {
    const newSpeakers = [...eventForm.speakers];
    newSpeakers.splice(index, 1);
    setEventForm({ ...eventForm, speakers: newSpeakers });
  };

  const saveEvent = () => {
    if (currentEvent) {
      // Update existing event
      setEvents(events.map(e => e.id === currentEvent.id ? eventForm : e));
    } else {
      // Add new event
      const newEvent = {
        ...eventForm,
        id: `E${Math.floor(1000 + Math.random() * 9000)}`
      };
      setEvents([...events, newEvent]);
    }
    setIsEventModalOpen(false);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center mb-4 md:mb-0">
          <FiUsers className="mr-3 text-orange-500" />
          Education Hub Management
        </h1>

        <div className="flex space-x-4">
          <div className="flex bg-orange-100 rounded-lg p-1 shadow-inner">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'trainers'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-orange-700 hover:bg-orange-200'
              }`}
              onClick={() => setActiveTab('trainers')}
            >
              Manage Trainers
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'events'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-orange-700 hover:bg-orange-200'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Manage Events
            </button>
          </div>
        </div>
      </div>

      {/* Trainers Management */}
      {activeTab === 'trainers' && (
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <FiUser className="mr-3 text-orange-500" />
              Expert Trainers
            </h2>
            <button
              onClick={() => openTrainerModal()}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium flex items-center mt-4 md:mt-0"
            >
              <FiUserPlus className="mr-2" />
              Add New Trainer
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expertise</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {trainers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                      No trainers found
                    </td>
                  </tr>
                ) : (
                  trainers.map((trainer) => (
                    <tr key={trainer.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {trainer.trainerId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{trainer.name}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {trainer.expertise}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {trainer.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FiStar className="text-yellow-400 mr-1" />
                          <span>{trainer.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {trainer.uploadDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => openTrainerModal(trainer)}
                          className="mr-2 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <FiEdit />
                        </button>
                        <button
                          onClick={() => deleteTrainer(trainer.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Events Management */}
      {activeTab === 'events' && (
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <FiCalendar className="mr-3 text-orange-500" />
              Anti-Corruption Events
            </h2>
            <button
              onClick={() => openEventModal()}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium flex items-center mt-4 md:mt-0"
            >
              <FiFilePlus className="mr-2" />
              Add New Event
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                      No events found
                    </td>
                  </tr>
                ) : (
                  events.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">{event.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {event.date} | {event.time}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {event.location.split(',')[0]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {event.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => openEventModal(event)}
                          className="mr-2 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <FiEdit />
                        </button>
                        <button
                          onClick={() => deleteEvent(event.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Trainer Modal */}
      {isTrainerModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">
                {currentTrainer ? "Edit Trainer" : "Add New Trainer"}
              </h2>
              <button
                onClick={() => setIsTrainerModalOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={trainerForm.name}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Trainer ID *</label>
                  <input
                    type="text"
                    name="trainerId"
                    value={trainerForm.trainerId}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">NID Number *</label>
                  <input
                    type="text"
                    name="nid"
                    value={trainerForm.nid}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={trainerForm.phone}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Facebook Profile</label>
                  <input
                    type="url"
                    name="facebook"
                    value={trainerForm.facebook}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://facebook.com/username"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={trainerForm.linkedin}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Area of Expertise *</label>
                  <input
                    type="text"
                    name="expertise"
                    value={trainerForm.expertise}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Rating (1-5)</label>
                  <select
                    name="rating"
                    value={trainerForm.rating}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Upload Date</label>
                  <input
                    type="date"
                    name="uploadDate"
                    value={trainerForm.uploadDate}
                    onChange={handleTrainerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Profile Photo</label>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center mr-4">
                      {trainerForm.photo ? (
                        <img src={trainerForm.photo} alt="Trainer" className="w-full h-full object-cover rounded-xl" />
                      ) : (
                        <FiUser className="text-gray-500" />
                      )}
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center">
                      <FiUpload className="mr-2" />
                      Upload Photo
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => setIsTrainerModalOpen(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveTrainer}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:opacity-90 transition-all flex items-center"
                >
                  <FiSave className="mr-2" />
                  Save Trainer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Modal */}
      {isEventModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">
                {currentEvent ? "Edit Event" : "Add New Event"}
              </h2>
              <button
                onClick={() => setIsEventModalOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Event Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={eventForm.title}
                    onChange={handleEventChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={eventForm.date}
                    onChange={handleEventChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Time *</label>
                  <input
                    type="text"
                    name="time"
                    value={eventForm.time}
                    onChange={handleEventChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="09:00 AM - 04:00 PM"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={eventForm.location}
                    onChange={handleEventChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Event Type *</label>
                  <select
                    name="type"
                    value={eventForm.type}
                    onChange={handleEventChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Training">Training</option>
                    <option value="Rally">Rally</option>
                    <option value="Symposium">Symposium</option>
                    <option value="Roundtable">Roundtable</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Image Type</label>
                  <select
                    name="image"
                    value={eventForm.image}
                    onChange={handleEventChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="training">Training</option>
                    <option value="rally">Rally</option>
                    <option value="symposium">Symposium</option>
                    <option value="roundtable">Roundtable</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={eventForm.description}
                    onChange={handleEventChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Speakers</label>
                  <div className="space-y-3">
                    {eventForm.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="text"
                          value={speaker}
                          onChange={(e) => handleSpeakerChange(index, e.target.value)}
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder={`Speaker ${index + 1} name`}
                        />
                        {eventForm.speakers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSpeaker(index)}
                            className="ml-2 p-3 text-red-600 hover:text-red-800"
                          >
                            <FiTrash2 />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addSpeaker}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
                    >
                      <FiUserPlus className="mr-2" />
                      Add Speaker
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Attendees</label>
                  <input
                    type="text"
                    name="attendees"
                    value={eventForm.attendees}
                    onChange={handleEventChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Who should attend this event?"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Outcome (for past events)</label>
                  <textarea
                    name="outcome"
                    value={eventForm.outcome}
                    onChange={handleEventChange}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Results and achievements from this event"
                  ></textarea>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => setIsEventModalOpen(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEvent}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:opacity-90 transition-all flex items-center"
                >
                  <FiSave className="mr-2" />
                  Save Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageEducation;