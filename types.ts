
// Import React to provide the proper namespace for JSX and ReactNode types
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Changed from JSX.Element to React.ReactNode to resolve the "Cannot find namespace 'JSX'" error in .ts files
  icon: React.ReactNode;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure';
  status: 'Completed' | 'In Progress';
  image: string;
  year: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  desc: string;
}
