
import React, { useState } from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  { id: '1', title: 'Skyline Residences', category: 'Residential', status: 'Completed', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', year: '2023' },
  { id: '2', title: 'TechHub Commercial Plaza', category: 'Commercial', status: 'Completed', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800', year: '2024' },
  { id: '3', title: 'Metro Bridge Extension', category: 'Infrastructure', status: 'In Progress', image: 'https://images.unsplash.com/photo-1545459720-aac273a2778a?auto=format&fit=crop&q=80&w=800', year: '2024' },
  { id: '4', title: 'Coastal View Villas', category: 'Residential', status: 'In Progress', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800', year: '2025' },
  { id: '5', title: 'Global Logistics Hub', category: 'Infrastructure', status: 'Completed', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', year: '2022' },
  { id: '6', title: 'Avenue Office Towers', category: 'Commercial', status: 'Completed', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800', year: '2023' },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Residential', 'Commercial', 'Infrastructure'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Portfolio</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900">Proven Performance</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-slate-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-[4/3] object-cover opacity-80 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{project.category}</span>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold border ${
                    project.status === 'Completed' ? 'border-green-400 text-green-400' : 'border-yellow-400 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Consultancy & Quality Audit • {project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
