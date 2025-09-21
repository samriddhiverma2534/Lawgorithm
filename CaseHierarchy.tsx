import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, FileText, Gavel, User, Building, AlertCircle, CheckCircle } from 'lucide-react';

interface CaseStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  documents: string[];
  completed: boolean;
  current: boolean;
}

export default function CaseHierarchy() {
  const [selectedType, setSelectedType] = useState<'criminal' | 'civil'>('criminal');
  
  const criminalSteps: CaseStep[] = [
    {
      id: '1',
      title: 'FIR Registration',
      description: 'First Information Report is filed at the police station. This is the first step in criminal proceedings.',
      duration: 'Immediate',
      documents: ['FIR Copy', 'Identity Proof', 'Witness Details'],
      completed: true,
      current: false
    },
    {
      id: '2',
      title: 'Police Investigation',
      description: 'Police investigate the case, collect evidence, record statements, and gather all necessary information.',
      duration: '60-90 days',
      documents: ['Evidence Collection', 'Witness Statements', 'Site Investigation Report'],
      completed: true,
      current: false
    },
    {
      id: '3',
      title: 'Chargesheet Filing',
      description: 'If evidence is found, police file chargesheet in court. If no evidence, case is closed.',
      duration: '90 days from FIR',
      documents: ['Chargesheet', 'Evidence List', 'Police Report'],
      completed: false,
      current: true
    },
    {
      id: '4',
      title: 'Court Proceedings',
      description: 'Case goes to appropriate court. Charges are framed and trial begins.',
      duration: '6 months - 2 years',
      documents: ['Court Summons', 'Charge Sheet', 'Legal Notice'],
      completed: false,
      current: false
    },
    {
      id: '5',
      title: 'Trial',
      description: 'Evidence presentation, witness examination, and arguments by both prosecution and defense.',
      duration: '1-3 years',
      documents: ['Trial Proceedings', 'Evidence Documents', 'Witness Testimonies'],
      completed: false,
      current: false
    },
    {
      id: '6',
      title: 'Judgment',
      description: 'Court delivers final judgment - conviction or acquittal based on evidence presented.',
      duration: '30 days after trial',
      documents: ['Final Judgment', 'Sentencing Order'],
      completed: false,
      current: false
    },
    {
      id: '7',
      title: 'Appeal (if applicable)',
      description: 'If dissatisfied, either party can appeal to higher court within specified time limit.',
      duration: '30-90 days to file appeal',
      documents: ['Appeal Application', 'Grounds for Appeal', 'Lower Court Records'],
      completed: false,
      current: false
    }
  ];

  const civilSteps: CaseStep[] = [
    {
      id: '1',
      title: 'Legal Notice',
      description: 'Send legal notice to the opposing party informing them of the grievance and giving them a chance to resolve the matter.',
      duration: '30 days response time',
      documents: ['Legal Notice', 'Proof of Service', 'Response (if any)'],
      completed: true,
      current: false
    },
    {
      id: '2',
      title: 'Filing Civil Suit',
      description: 'If no satisfactory response to legal notice, file civil suit in appropriate court with proper jurisdiction.',
      duration: '1-2 weeks',
      documents: ['Plaint', 'Supporting Documents', 'Court Fees Receipt'],
      completed: true,
      current: false
    },
    {
      id: '3',
      title: 'Court Summons',
      description: 'Court issues summons to defendant. Defendant must appear in court or file written statement.',
      duration: '30 days',
      documents: ['Court Summons', 'Service Report', 'Written Statement (defendant)'],
      completed: false,
      current: true
    },
    {
      id: '4',
      title: 'Pleadings',
      description: 'Both parties file their pleadings - plaintiff\'s case and defendant\'s defense.',
      duration: '60-90 days',
      documents: ['Additional Pleadings', 'Counter Claims', 'Rejoinder'],
      completed: false,
      current: false
    },
    {
      id: '5',
      title: 'Evidence Stage',
      description: 'Both parties present their evidence, examine witnesses, and submit documents.',
      duration: '6 months - 2 years',
      documents: ['Evidence Documents', 'Witness Affidavits', 'Expert Reports'],
      completed: false,
      current: false
    },
    {
      id: '6',
      title: 'Arguments',
      description: 'Final arguments by both parties\' lawyers based on evidence and legal provisions.',
      duration: '1-3 months',
      documents: ['Written Arguments', 'Case Law Citations', 'Legal Authorities'],
      completed: false,
      current: false
    },
    {
      id: '7',
      title: 'Judgment & Decree',
      description: 'Court pronounces judgment and passes decree. Winning party gets court order.',
      duration: '30-60 days',
      documents: ['Final Judgment', 'Decree', 'Cost Order'],
      completed: false,
      current: false
    },
    {
      id: '8',
      title: 'Appeal (if applicable)',
      description: 'Dissatisfied party can file appeal in higher court within limitation period.',
      duration: '30-90 days to file',
      documents: ['Appeal Memo', 'Appeal Fee', 'Certified Copy of Judgment'],
      completed: false,
      current: false
    }
  ];

  const currentSteps = selectedType === 'criminal' ? criminalSteps : civilSteps;

  const tips = [
    {
      title: 'Document Everything',
      description: 'Keep copies of all documents, receipts, and correspondence related to your case.'
    },
    {
      title: 'Meet Deadlines',
      description: 'Always file documents and appear in court on scheduled dates. Missing deadlines can harm your case.'
    },
    {
      title: 'Stay Informed',
      description: 'Regularly check with your lawyer about case progress and next steps.'
    },
    {
      title: 'Be Patient',
      description: 'Legal proceedings take time. Be prepared for a lengthy process and multiple court visits.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Case Solving Hierarchy Guide</h1>
          <p className="text-gray-600">Understand the step-by-step process of how legal cases proceed in India.</p>
        </motion.div>

        {/* Case Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Case Type</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedType('criminal')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
                selectedType === 'criminal'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Gavel className="h-5 w-5 mr-2" />
              Criminal Case
            </button>
            <button
              onClick={() => setSelectedType('civil')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
                selectedType === 'civil'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Building className="h-5 w-5 mr-2" />
              Civil Case
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Case Process Timeline */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                {selectedType === 'criminal' ? (
                  <Gavel className="h-6 w-6 mr-2 text-red-600" />
                ) : (
                  <Building className="h-6 w-6 mr-2 text-blue-600" />
                )}
                {selectedType === 'criminal' ? 'Criminal Case' : 'Civil Case'} Process
              </h2>

              <div className="space-y-6">
                {currentSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`relative flex ${index !== currentSteps.length - 1 ? 'pb-6' : ''}`}
                  >
                    {/* Timeline Line */}
                    {index !== currentSteps.length - 1 && (
                      <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200"></div>
                    )}

                    {/* Step Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-green-100 text-green-600' 
                        : step.current 
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {step.completed ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : step.current ? (
                        <Clock className="h-6 w-6" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-current opacity-30"></div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="ml-6 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-lg font-semibold ${
                          step.completed 
                            ? 'text-green-900' 
                            : step.current 
                            ? 'text-blue-900'
                            : 'text-gray-900'
                        }`}>
                          Step {step.id}: {step.title}
                        </h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          step.completed 
                            ? 'bg-green-100 text-green-800' 
                            : step.current 
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {step.duration}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{step.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          Required Documents:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.documents.map((doc, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tips and Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Important Tips */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-amber-600" />
                  Important Tips
                </h3>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-gray-900 mb-1">{tip.title}</h4>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Average Timelines</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-800">Criminal Cases:</span>
                    <span className="font-medium text-blue-900">2-4 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Civil Cases:</span>
                    <span className="font-medium text-blue-900">3-7 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Appeals:</span>
                    <span className="font-medium text-blue-900">1-3 years</span>
                  </div>
                </div>
              </div>

              {/* Get Help */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Need Legal Help?</h3>
                <p className="text-sm text-green-700 mb-4">
                  Connect with experienced lawyers who can guide you through the process.
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <User className="h-4 w-4 mr-2" />
                  Find a Lawyer
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}