import React from 'react';

interface StrengthsWeaknessesProps {
  strengths: string[];
  weaknesses: string[];
  color?: string;
}

const StrengthsWeaknesses: React.FC<StrengthsWeaknessesProps> = ({ 
  strengths, 
  weaknesses, 
  color = 'var(--primary-color)' 
}) => {
  return (
    <div className="strengths-weaknesses">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-xl)'
      }}>
        <div className="card" style={{ height: '100%' }}>
          <h3 style={{ 
            marginBottom: 'var(--spacing-md)',
            color: 'var(--success-color)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'var(--success-color)',
              color: 'white',
              marginRight: 'var(--spacing-sm)',
              fontSize: '16px'
            }}>
              +
            </span>
            优势
          </h3>
          <ul style={{ 
            listStylePosition: 'inside',
            paddingLeft: 'var(--spacing-sm)'
          }}>
            {strengths.map((strength, index) => (
              <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                {strength}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card" style={{ height: '100%' }}>
          <h3 style={{ 
            marginBottom: 'var(--spacing-md)',
            color: 'var(--error-color)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'var(--error-color)',
              color: 'white',
              marginRight: 'var(--spacing-sm)',
              fontSize: '16px'
            }}>
              -
            </span>
            劣势
          </h3>
          <ul style={{ 
            listStylePosition: 'inside',
            paddingLeft: 'var(--spacing-sm)'
          }}>
            {weaknesses.map((weakness, index) => (
              <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StrengthsWeaknesses; 