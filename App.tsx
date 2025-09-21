import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DocumentSimplifier from './pages/DocumentSimplifier';
import LawyerConnect from './pages/LawyerConnect';
import IPCSimplifier from './pages/IPCSimplifier';
import CaseHierarchy from './pages/CaseHierarchy';
import AdminPanel from './pages/AdminPanel';
import UserProfile from './pages/UserProfile';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/document-simplifier" element={<DocumentSimplifier />} />
            <Route path="/lawyer-connect" element={<LawyerConnect />} />
            <Route path="/ipc-simplifier" element={<IPCSimplifier />} />
            <Route path="/case-hierarchy" element={<CaseHierarchy />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;