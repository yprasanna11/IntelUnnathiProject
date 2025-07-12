import React, { useState } from 'react';
import { Upload, MessageCircle, BookOpen, Brain, FileText, Presentation as PresentationChart } from 'lucide-react';
import FileUpload from './components/FileUpload';
import ChatInterface from './components/ChatInterface';
import QuizGenerator from './components/QuizGenerator';
import MaterialsLibrary from './components/MaterialsLibrary';

function App() {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [currentMaterial, setCurrentMaterial] = useState<any>(null);

  const tabs = [
    { id: 'upload', label: 'Upload Materials', icon: Upload },
    { id: 'library', label: 'Materials Library', icon: BookOpen },
    { id: 'chat', label: 'Ask Questions', icon: MessageCircle },
    { id: 'quiz', label: 'Generate Quiz', icon: Brain },
  ];

  const handleFileUpload = (files: any[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleMaterialSelect = (material: any) => {
    setCurrentMaterial(material);
    setActiveTab('chat');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-2 rounded-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI Learning Assistant</h1>
                <p className="text-sm text-gray-600">Interactive classroom companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-100 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-emerald-800">
                  {uploadedFiles.length} Materials
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'upload' && (
          <FileUpload onFileUpload={handleFileUpload} />
        )}
        
        {activeTab === 'library' && (
          <MaterialsLibrary 
            materials={uploadedFiles} 
            onMaterialSelect={handleMaterialSelect}
          />
        )}
        
        {activeTab === 'chat' && (
          <ChatInterface currentMaterial={currentMaterial} />
        )}
        
        {activeTab === 'quiz' && (
          <QuizGenerator currentMaterial={currentMaterial} />
        )}
      </main>
    </div>
  );
}

export default App;