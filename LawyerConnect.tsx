import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Phone, Mail, Calendar, Filter, User, Award } from 'lucide-react';

interface Lawyer {
  id: string;
  name: string;
  specialization: string[];
  experience: number;
  location: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  languages: string[];
  availability: string;
  image: string;
  description: string;
}

export default function LawyerConnect() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  const categories = [
    'Property Law',
    'Criminal Law',
    'Employment Law',
    'Family Law',
    'Corporate Law',
    'Civil Law',
    'Tax Law',
    'Immigration Law'
  ];

  const lawyers: Lawyer[] = [
    {
      id: '1',
      name: 'Adv. Priya Sharma',
      specialization: ['Property Law', 'Civil Law'],
      experience: 12,
      location: 'Mumbai',
      rating: 4.8,
      reviews: 156,
      hourlyRate: 2500,
      languages: ['Hindi', 'English', 'Marathi'],
      availability: 'Available today',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Specialized in property disputes and civil matters with over 12 years of experience in Mumbai courts.'
    },
    {
      id: '2',
      name: 'Adv. Rajesh Kumar',
      specialization: ['Criminal Law'],
      experience: 18,
      location: 'Delhi',
      rating: 4.9,
      reviews: 203,
      hourlyRate: 3000,
      languages: ['Hindi', 'English', 'Punjabi'],
      availability: 'Available tomorrow',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert criminal lawyer with extensive experience in high-profile cases and court representations.'
    },
    {
      id: '3',
      name: 'Adv. Meera Patel',
      specialization: ['Family Law', 'Civil Law'],
      experience: 8,
      location: 'Bangalore',
      rating: 4.7,
      reviews: 94,
      hourlyRate: 2000,
      languages: ['English', 'Gujarati', 'Kannada'],
      availability: 'Available this week',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Compassionate family lawyer specializing in divorce, custody, and matrimonial disputes.'
    },
    {
      id: '4',
      name: 'Adv. Suresh Reddy',
      specialization: ['Employment Law', 'Corporate Law'],
      experience: 15,
      location: 'Hyderabad',
      rating: 4.6,
      reviews: 127,
      hourlyRate: 2800,
      languages: ['Telugu', 'English', 'Hindi'],
      availability: 'Available next week',
      image: 'https://images.pexels.com/photos/8112200/pexels-photo-8112200.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Corporate and employment law expert with a track record of successful labor dispute resolutions.'
    }
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesCategory = !selectedCategory || lawyer.specialization.includes(selectedCategory);
    const matchesSearch = !searchTerm || lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         lawyer.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !locationFilter || lawyer.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesCategory && matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lawyer Connect</h1>
          <p className="text-gray-600">Find and connect with verified legal experts for your specific needs.</p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search lawyers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <p className="text-gray-600">
            Found {filteredLawyers.length} lawyer{filteredLawyers.length !== 1 ? 's' : ''} matching your criteria
          </p>
        </motion.div>

        {/* Lawyer Cards */}
        <div className="grid gap-6">
          {filteredLawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                  </div>
                  
                  {/* Lawyer Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{lawyer.name}</h3>
                      <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {lawyer.availability}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <Award className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-600">{lawyer.experience} years experience</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-600">{lawyer.location}</span>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-4">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{lawyer.rating}</span>
                        <span className="text-gray-600 ml-1">({lawyer.reviews} reviews)</span>
                      </div>
                      <div className="text-gray-600">
                        ₹{lawyer.hourlyRate}/hour
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {lawyer.specialization.map(spec => (
                          <span key={spec} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{lawyer.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 mr-2">Languages:</span>
                      <span className="text-sm text-gray-700">{lawyer.languages.join(', ')}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Consultation
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredLawyers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No lawyers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}