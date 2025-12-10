
import React, { useState } from 'react';
import { Search, Book, Cpu, Shield, Database, Briefcase } from 'lucide-react';
import { terms } from '../data/glossaryTerms';

export const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = terms.filter(item => 
    item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (category: string) => {
    switch(category) {
      case 'técnico': return <Cpu className="w-5 h-5 text-purple-500" />;
      case 'legal': return <Shield className="w-5 h-5 text-blue-500" />;
      case 'dados': return <Database className="w-5 h-5 text-green-500" />;
      case 'gov': return <Briefcase className="w-5 h-5 text-amber-600" />;
      default: return <Book className="w-5 h-5 text-slate-500" />;
    }
  };

  const getBadgeColor = (category: string) => {
    switch(category) {
      case 'técnico': return 'bg-purple-100 text-purple-800';
      case 'legal': return 'bg-blue-100 text-blue-800';
      case 'dados': return 'bg-green-100 text-green-800';
      case 'gov': return 'bg-amber-100 text-amber-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Glossário Técnico e Legal</h2>
        <p className="mt-2 text-slate-600">Entenda os termos usados nas políticas de privacidade, tecnologia e contratação pública.</p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm shadow-sm"
          placeholder="Pesquisar termo (ex: Nuvem, RGPD, eSPap)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid of Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-slate-900 text-lg pr-2">{item.word}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(item.category)}`}>
                  {getIcon(item.category)}
                  <span className="ml-1 capitalize">{item.category}</span>
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-slate-500">Nenhum termo encontrado para "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
};
