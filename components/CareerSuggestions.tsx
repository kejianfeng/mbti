import React from 'react';

interface CareerCategory {
  category: string;
  jobs: string[];
}

interface CareerSuggestionsProps {
  careers: CareerCategory[];
  color?: string;
}

const CareerSuggestions: React.FC<CareerSuggestionsProps> = ({ 
  careers, 
  color = 'var(--primary-color)' 
}) => {
  return (
    <div className="career-suggestions">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 'var(--spacing-lg)'
      }}>
        {careers.map((career, index) => (
          <div 
            key={index} 
            className="card" 
            style={{ 
              borderLeft: `4px solid ${color}`,
              height: '100%'
            }}
          >
            <h4 style={{ 
              marginBottom: 'var(--spacing-md)',
              color: color
            }}>
              {career.category}
            </h4>
            <ul style={{ 
              listStyleType: 'none',
              padding: 0
            }}>
              {career.jobs.map((job, jobIndex) => (
                <li 
                  key={jobIndex} 
                  style={{ 
                    marginBottom: 'var(--spacing-sm)',
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    backgroundColor: 'var(--neutral-100)',
                    borderRadius: 'var(--border-radius-sm)',
                    display: 'inline-block',
                    margin: '0 var(--spacing-xs) var(--spacing-sm) 0'
                  }}
                >
                  {job}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="card" style={{ marginTop: 'var(--spacing-xl)' }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          marginBottom: 'var(--spacing-md)'
        }}>
          <div style={{ 
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            marginRight: 'var(--spacing-md)'
          }}>
            i
          </div>
          <h3 style={{ margin: 0 }}>职业选择提示</h3>
        </div>
        <p>
          这些职业建议基于您的MBTI类型的典型特征和偏好。它们可以作为您职业探索的起点，
          但请记住，职业选择应该考虑多种因素，包括您的技能、兴趣、价值观和实际情况。
        </p>
        <p>
          最适合的职业是那些能让您发挥优势、满足您内在需求，并与您的长期目标一致的职业。
          建议您结合自己的实际情况，进行更全面的职业规划和探索。
        </p>
      </div>
    </div>
  );
};

export default CareerSuggestions; 