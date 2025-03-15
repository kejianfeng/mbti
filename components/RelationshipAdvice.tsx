import React from 'react';
import Link from 'next/link';

interface Compatibility {
  type: string;
  name: string;
  compatibility: 'high' | 'medium' | 'low';
  description: string;
}

interface RelationshipAdviceProps {
  compatibleTypes: Compatibility[];
  relationshipStrengths: string[];
  relationshipChallenges: string[];
  communicationTips: string[];
  color?: string;
}

const RelationshipAdvice: React.FC<RelationshipAdviceProps> = ({ 
  compatibleTypes, 
  relationshipStrengths,
  relationshipChallenges,
  communicationTips,
  color = 'var(--primary-color)' 
}) => {
  // 根据兼容性级别获取颜色
  const getCompatibilityColor = (compatibility: 'high' | 'medium' | 'low') => {
    switch (compatibility) {
      case 'high':
        return 'var(--success-color)';
      case 'medium':
        return 'var(--warning-color)';
      case 'low':
        return 'var(--error-color)';
      default:
        return 'var(--neutral-600)';
    }
  };
  
  // 根据兼容性级别获取文本
  const getCompatibilityText = (compatibility: 'high' | 'medium' | 'low') => {
    switch (compatibility) {
      case 'high':
        return '高度兼容';
      case 'medium':
        return '中等兼容';
      case 'low':
        return '低度兼容';
      default:
        return '未知';
    }
  };
  
  return (
    <div className="relationship-advice">
      <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h3 style={{ 
          marginBottom: 'var(--spacing-lg)',
          color: color
        }}>
          类型兼容性
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--spacing-md)'
        }}>
          {compatibleTypes.map((compatType, index) => (
            <div 
              key={index} 
              style={{ 
                border: `1px solid ${getCompatibilityColor(compatType.compatibility)}`,
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                backgroundColor: getCompatibilityColor(compatType.compatibility),
                color: 'white',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <Link href={`/types/${compatType.type.toLowerCase()}`}>
                    <a style={{ color: 'white', textDecoration: 'none' }}>
                      <strong>{compatType.type}</strong> - {compatType.name}
                    </a>
                  </Link>
                </div>
                <div style={{ 
                  fontSize: 'var(--font-size-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: '2px 8px',
                  borderRadius: 'var(--border-radius-sm)'
                }}>
                  {getCompatibilityText(compatType.compatibility)}
                </div>
              </div>
              <div style={{ padding: 'var(--spacing-md)' }}>
                <p>{compatType.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div className="card" style={{ height: '100%' }}>
          <h3 style={{ 
            marginBottom: 'var(--spacing-md)',
            color: color
          }}>
            关系中的优势
          </h3>
          <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
            {relationshipStrengths.map((strength, index) => (
              <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                {strength}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card" style={{ height: '100%' }}>
          <h3 style={{ 
            marginBottom: 'var(--spacing-md)',
            color: color
          }}>
            关系中的挑战
          </h3>
          <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
            {relationshipChallenges.map((challenge, index) => (
              <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="card">
        <h3 style={{ 
          marginBottom: 'var(--spacing-md)',
          color: color
        }}>
          沟通技巧
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 'var(--spacing-md)'
        }}>
          {communicationTips.map((tip, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'var(--neutral-100)',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--border-radius-md)',
                borderLeft: `3px solid ${color}`
              }}
            >
              {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelationshipAdvice; 