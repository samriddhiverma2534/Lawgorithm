import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Download, Eye, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function DocumentSimplifier() {
  const [file, setFile] = useState<File | null>(null);
  const [documentText, setDocumentText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const analyzeDocument = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        summary: "This is a property sale agreement between John Smith (Seller) and Jane Doe (Buyer) for a residential property located at 123 Main Street, Mumbai. The total consideration amount is ₹50,00,000 with a security deposit of ₹5,00,000.",
        keyPoints: [
          "Total Property Value: ₹50,00,000",
          "Security Deposit: ₹5,00,000",
          "Property Location: 123 Main Street, Mumbai",
          "Registration Date: Within 30 days of agreement",
          "Possession Date: December 31, 2024"
        ],
        legalObligations: [
          "Seller must provide clear title deed before possession",
          "Buyer must pay remaining amount within 15 days",
          "Both parties must be present for registration",
          "Property tax clearance certificate required"
        ],
        deadlines: [
          { item: "Registration completion", date: "December 15, 2024", priority: "high" },
          { item: "Final payment", date: "December 10, 2024", priority: "high" },
          { item: "Property inspection", date: "December 5, 2024", priority: "medium" }
        ],
        riskAreas: [
          "No mention of penalty for delayed possession",
          "Property tax liability unclear",
          "No specific clause for property defects"
        ]
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const analyzeText = () => {
    if (documentText.trim()) {
      analyzeDocument();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Document Simplifier</h1>
          <p className="text-gray-600">Upload or paste your legal document for AI-powered analysis and simplification.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* File Upload */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Document</h2>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop your file here, or</p>
                <label className="cursor-pointer">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Browse Files
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Supports PDF, DOC, DOCX, TXT files up to 10MB
                </p>
              </div>

              {file && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-900">{file.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Text Input */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Or Paste Document Text</h2>
              
              <textarea
                value={documentText}
                onChange={(e) => setDocumentText(e.target.value)}
                className="w-full h-40 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Paste your legal document text here..."
              />
              
              <div className="mt-4 flex justify-between">
                <span className="text-sm text-gray-500">
                  {documentText.length} characters
                </span>
                <button
                  onClick={analyzeText}
                  disabled={!documentText.trim() || isAnalyzing}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
                </button>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={analyzeDocument}
              disabled={!file || isAnalyzing}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing Document...
                </div>
              ) : (
                'Analyze Document'
              )}
            </button>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {isAnalyzing && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
                  <span className="text-gray-600">Analyzing your document with AI...</span>
                </div>
              </div>
            )}

            {analysis && (
              <>
                {/* Summary */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-blue-600" />
                    Document Summary
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{analysis.summary}</p>
                </div>

                {/* Key Points */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Key Points
                  </h3>
                  <ul className="space-y-2">
                    {analysis.keyPoints.map((point: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deadlines */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-amber-600" />
                    Important Deadlines
                  </h3>
                  <div className="space-y-3">
                    {analysis.deadlines.map((deadline: any, index: number) => (
                      <div key={index} className={`p-3 rounded-lg border-l-4 ${
                        deadline.priority === 'high' 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-amber-500 bg-amber-50'
                      }`}>
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-gray-900">{deadline.item}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            deadline.priority === 'high' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {deadline.priority} priority
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{deadline.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal Obligations */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Legal Obligations
                  </h3>
                  <ul className="space-y-2">
                    {analysis.legalObligations.map((obligation: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{obligation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risk Areas */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                    Potential Risk Areas
                  </h3>
                  <ul className="space-y-2">
                    {analysis.riskAreas.map((risk: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-red-200 rounded-full p-1 mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="text-red-800">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Summary
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                    <Users className="h-5 w-5 mr-2" />
                    Find Lawyer
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}