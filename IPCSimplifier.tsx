import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Filter, Eye, AlertTriangle, Scale } from 'lucide-react';

interface IPCSection {
  section: string;
  title: string;
  originalText: string;
  simplifiedText: string;
  punishment: string;
  category: string;
  examples: string[];
}

export default function IPCSimplifier() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSection, setSelectedSection] = useState<IPCSection | null>(null);

  const categories = [
    'Against Person',
    'Against Property',
    'Against State',
    'Against Public Tranquility',
    'Against Human Body',
    'Economic Offences'
  ];

  const ipcSections: IPCSection[] = [
    {
      section: '302',
      title: 'Murder',
      originalText: 'Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.',
      simplifiedText: 'If someone intentionally kills another person, they will be punished with either death penalty or life imprisonment, and may also have to pay a fine.',
      punishment: 'Death penalty or Life imprisonment + Fine',
      category: 'Against Person',
      examples: [
        'Intentionally shooting someone to death',
        'Poisoning someone with intent to kill',
        'Stabbing someone leading to death'
      ]
    },
    {
      section: '420',
      title: 'Cheating and dishonestly inducing delivery of property',
      originalText: 'Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.',
      simplifiedText: 'If someone cheats another person and tricks them into giving away property or valuable documents, they can be imprisoned for up to 7 years and fined.',
      punishment: 'Imprisonment up to 7 years + Fine',
      category: 'Economic Offences',
      examples: [
        'Online fraud schemes',
        'Fake investment promises',
        'Identity theft for financial gain',
        'Credit card fraud'
      ]
    },
    {
      section: '376',
      title: 'Rape',
      originalText: 'Whoever commits rape shall be punished with rigorous imprisonment of either description for a term which shall not be less than ten years, but which may extend to imprisonment for life, and shall also be liable to fine.',
      simplifiedText: 'Anyone who commits rape will be punished with strict imprisonment for at least 10 years, which can extend to life imprisonment, and also pay a fine.',
      punishment: 'Minimum 10 years imprisonment to Life imprisonment + Fine',
      category: 'Against Person',
      examples: [
        'Sexual assault without consent',
        'Marital rape (in certain circumstances)',
        'Gang rape (enhanced punishment)'
      ]
    },
    {
      section: '379',
      title: 'Theft',
      originalText: 'Whoever commits theft shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.',
      simplifiedText: 'Anyone who steals something can be imprisoned for up to 3 years, or fined, or both.',
      punishment: 'Imprisonment up to 3 years or Fine or Both',
      category: 'Against Property',
      examples: [
        'Stealing money from someone\'s wallet',
        'Taking someone\'s mobile phone without permission',
        'Shoplifting from a store'
      ]
    },
    {
      section: '498A',
      title: 'Husband or relative of husband subjecting woman to cruelty',
      originalText: 'Whoever, being the husband or the relative of the husband of a woman, subjects such woman to cruelty shall be punished with imprisonment for a term which may extend to three years and shall also be liable to fine.',
      simplifiedText: 'If a husband or his relatives are cruel to a woman (wife), they can be imprisoned for up to 3 years and also fined.',
      punishment: 'Imprisonment up to 3 years + Fine',
      category: 'Against Person',
      examples: [
        'Domestic violence by husband',
        'Dowry harassment',
        'Mental torture by in-laws'
      ]
    },
    {
      section: '124A',
      title: 'Sedition',
      originalText: 'Whoever by words, either spoken or written, or by signs, or by visible representation, or otherwise, brings or attempts to bring into hatred or contempt, or excites or attempts to excite disaffection towards the Government established by law shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine.',
      simplifiedText: 'Anyone who speaks, writes, or acts in a way to create hatred against the government or incite people against it can be imprisoned for life or up to 3 years, and fined.',
      punishment: 'Life imprisonment or up to 3 years imprisonment + Fine',
      category: 'Against State',
      examples: [
        'Anti-government speeches inciting violence',
        'Inflammatory social media posts against state',
        'Publishing seditious material'
      ]
    }
  ];

  const filteredSections = ipcSections.filter(section => {
    const matchesSearch = !searchTerm || 
      section.section.includes(searchTerm) || 
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.simplifiedText.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || section.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">IPC Simplifier</h1>
          <p className="text-gray-600">Browse and understand Indian Penal Code sections in simple language.</p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search IPC sections..."
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* IPC Sections List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <p className="text-gray-600">
                Found {filteredSections.length} section{filteredSections.length !== 1 ? 's' : ''}
              </p>
            </motion.div>

            <div className="space-y-4">
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedSection(section)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center mb-2">
                          <Scale className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-lg font-bold text-blue-600">Section {section.section}</span>
                          <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {section.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                      </div>
                      <button className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100 transition-colors">
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{section.simplifiedText}</p>
                    
                    <div className="flex items-center text-sm">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="text-amber-700 font-medium">Punishment: </span>
                      <span className="text-gray-600 ml-1">{section.punishment}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section Details */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-8"
            >
              {selectedSection ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <Scale className="h-6 w-6 text-blue-600 mr-2" />
                    <h2 className="text-2xl font-bold text-blue-600">Section {selectedSection.section}</h2>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{selectedSection.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Original Text:</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg italic">
                      "{selectedSection.originalText}"
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Simplified Explanation:</h4>
                    <p className="text-gray-700">{selectedSection.simplifiedText}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                      Punishment:
                    </h4>
                    <p className="text-gray-700 bg-amber-50 border border-amber-200 p-3 rounded-lg">
                      {selectedSection.punishment}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-2">
                      {selectedSection.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1.5">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select an IPC Section</h3>
                  <p className="text-gray-600">Click on any section from the list to view detailed explanation and examples.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {filteredSections.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sections found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}