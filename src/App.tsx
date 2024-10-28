import React from 'react';
import { CategoryCard } from './components/CategoryCard';
import { categories } from './data/categories';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Sistema de Gestión de Conocimiento en Semiconductores
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Object.values(categories).map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Perspectivas y Metodología
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Análisis multidisciplinario para una visión integral</li>
            <li>• Entrevistas específicas según el perfil profesional</li>
            <li>• Documentación y gestión del conocimiento</li>
            <li>• Integración de tecnologías emergentes</li>
            <li>• Evaluación continua y mejora de procesos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;