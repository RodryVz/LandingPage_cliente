import React from 'react';
import { Hammer, BrickWall, AirVent, Anvil, Waves, Bolt, House, Shovel, Flame, PaintBucket, Grid as FloorGrid, Wrench, Truck, Zap } from 'lucide-react';
import './Categorias.css';

interface Category {
  name: string;
  icon: JSX.Element;
}

const categories: Category[] = [
  { name: 'Plomería', icon: <Wrench /> },
  { name: 'Fletes', icon: <Truck /> },
  { name: 'Electricista', icon: <Zap /> },
  { name: 'Gas', icon: <Flame /> },
  { name: 'Pintura', icon: <PaintBucket /> },
  { name: 'Herrería', icon: <Anvil /> },
  { name: 'Pisos', icon: <FloorGrid /> },
  { name: 'Albañilería', icon: <BrickWall /> },
  { name: 'Construcción', icon: <Hammer /> },
  { name: 'Jardinería y paisajismo', icon: <Shovel /> },
  { name: 'Piscinas', icon: <Waves /> },
  { name: 'Techista', icon: <House /> },
  { name: 'Servicio técnico', icon: <Bolt /> },
  { name: 'Tecnico Aire acondicionado', icon: <AirVent /> },
];

interface FrequentCategoriesProps {
  id: string;
}

const FrequentCategories: React.FC<FrequentCategoriesProps> = ({ id }) => {
  return (
    <div className="frequent-categories" id={id}>
      <h2>Categorías frecuentes</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="icon-wrapper">
              {React.cloneElement(category.icon, { size: 24 })}
            </div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentCategories;