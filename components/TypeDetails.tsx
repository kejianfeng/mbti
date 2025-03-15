import React from 'react';

interface TypeDetailsProps {
  type: string;
  name: string;
  description: string;
  group: 'analyst' | 'diplomat' | 'sentinel' | 'explorer';
  groupName: string;
  traits: {
    extraversion: number;
    sensing: number;
    thinking: number;
    judging: number;
  };
}

const TypeDetails: React.FC<TypeDetailsProps> = ({ 
  type, 
  name, 
  description, 
  group, 
  groupName,
  traits 
}) => {
  // 获取族群颜色
  const getGroupColor = (group: string) => {
    switch (group) {
      case 'analyst':
        return 'var(--color-analyst)';
      case 'diplomat':
        return 'var(--color-diplomat)';
      case 'sentinel':
        return 'var(--color-sentinel)';
      case 'explorer':
        return 'var(--color-explorer)';
      default:
        return 'var(--primary-color)';
    }
  };
  
  const color = getGroupColor(group);
  
  // 计算相反的特质值
  const oppositeTraits = {
    introversion: 100 - traits.extraversion,
    intuition: 100 - traits.sensing,
    feeling: 100 - traits.thinking,
    perceiving: 100 - traits.judging
  };
  
  return (
    <div className="type-details">
      <div style={{ 
        backgroundColor: color,
        color: 'white',
        padding: 'var(--spacing-xl) var(--spacing-md)',
        borderRadius: 'var(--border-radius-lg)',
        marginBottom: 'var(--spacing-xl)',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'inline-block',
          padding: 'var(--spacing-xs) var(--spacing-md)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 'var(--border-radius-sm)',
          marginBottom: 'var(--spacing-md)',
          fontSize: 'var(--font-size-sm)'
        }}>
          {groupName}
        </div>
        
        <h1 style={{ 
          fontSize: '3rem',
          marginBottom: 'var(--spacing-xs)'
        }}>
          {type}
        </h1>
        
        <h2 style={{ 
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'normal',
          marginBottom: 'var(--spacing-lg)'
        }}>
          "{name}"
        </h2>
        
        <p style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: 'var(--font-size-lg)',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
      </div>
      
      <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h3 style={{ 
          marginBottom: 'var(--spacing-lg)',
          color: color
        }}>
          性格特质
        </h3>
        
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div className="trait-bar">
            <div className="trait-label">内向 (I)</div>
            <div className="trait-bar-container">
              <div 
                className="trait-bar-fill" 
                style={{ 
                  width: `${oppositeTraits.introversion}%`,
                  backgroundColor: oppositeTraits.introversion > traits.extraversion ? color : 'var(--neutral-500)'
                }}
              ></div>
              <div className="trait-percentage">
                {oppositeTraits.introversion}%
              </div>
            </div>
            <div className="trait-opposite-label">外向 (E)</div>
          </div>
          
          <div className="trait-bar">
            <div className="trait-label">直觉 (N)</div>
            <div className="trait-bar-container">
              <div 
                className="trait-bar-fill" 
                style={{ 
                  width: `${oppositeTraits.intuition}%`,
                  backgroundColor: oppositeTraits.intuition > traits.sensing ? color : 'var(--neutral-500)'
                }}
              ></div>
              <div className="trait-percentage">
                {oppositeTraits.intuition}%
              </div>
            </div>
            <div className="trait-opposite-label">感觉 (S)</div>
          </div>
          
          <div className="trait-bar">
            <div className="trait-label">情感 (F)</div>
            <div className="trait-bar-container">
              <div 
                className="trait-bar-fill" 
                style={{ 
                  width: `${oppositeTraits.feeling}%`,
                  backgroundColor: oppositeTraits.feeling > traits.thinking ? color : 'var(--neutral-500)'
                }}
              ></div>
              <div className="trait-percentage">
                {oppositeTraits.feeling}%
              </div>
            </div>
            <div className="trait-opposite-label">思考 (T)</div>
          </div>
          
          <div className="trait-bar">
            <div className="trait-label">感知 (P)</div>
            <div className="trait-bar-container">
              <div 
                className="trait-bar-fill" 
                style={{ 
                  width: `${oppositeTraits.perceiving}%`,
                  backgroundColor: oppositeTraits.perceiving > traits.judging ? color : 'var(--neutral-500)'
                }}
              ></div>
              <div className="trait-percentage">
                {oppositeTraits.perceiving}%
              </div>
            </div>
            <div className="trait-opposite-label">判断 (J)</div>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: 'var(--neutral-100)',
          padding: 'var(--spacing-md)',
          borderRadius: 'var(--border-radius-md)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--neutral-700)'
        }}>
          <p>
            <strong>注意：</strong> 这些百分比表示每种偏好的强度，而不是能力或发展水平。
            每个人都会在不同程度上使用所有八种偏好，但通常会更倾向于一种。
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypeDetails; 