import React from 'react';

interface Trait {
  title: string;
  description: string;
}

interface TypeTraitsProps {
  traits: Trait[];
  color?: string;
}

const TypeTraits: React.FC<TypeTraitsProps> = ({ traits, color = 'var(--primary-color)' }) => {
  return (
    <div className="type-traits">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 'var(--spacing-lg)'
      }}>
        {traits.map((trait, index) => (
          <div 
            key={index} 
            className="card" 
            style={{ 
              borderTop: `3px solid ${color}`,
              height: '100%'
            }}
          >
            <h4 style={{ 
              marginBottom: 'var(--spacing-sm)',
              color: color
            }}>
              {trait.title}
            </h4>
            <p>{trait.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeTraits; 