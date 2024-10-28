import React from 'react';

interface CategoryCardProps {
  title: string;
  items: string[];
}

export function CategoryCard({ title, items }: CategoryCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}