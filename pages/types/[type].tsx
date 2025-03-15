import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TypeDetails from '../../components/TypeDetails';
import TypeTraits from '../../components/TypeTraits';
import StrengthsWeaknesses from '../../components/StrengthsWeaknesses';
import CareerSuggestions from '../../components/CareerSuggestions';
import RelationshipAdvice from '../../components/RelationshipAdvice';
import mbtiTypes from '../../data/mbtiTypes';

// 定义兼容性类型
interface Compatibility {
  type: string;
  name: string;
  compatibility: 'high' | 'medium' | 'low';
  description: string;
}

const TypeDetail: React.FC = () => {
  const router = useRouter();
  const { type } = router.query;
  const [activeTab, setActiveTab] = useState('overview');
  
  // 如果类型不存在或页面正在加载，显示加载状态
  if (!type || typeof type !== 'string') {
    return (
      <section className="screen">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '50vh'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3>加载中...</h3>
          </div>
        </div>
      </section>
    );
  }
  
  // 获取类型数据
  const typeKey = type.toLowerCase() as keyof typeof mbtiTypes;
  const typeData = mbtiTypes[typeKey];
  
  // 如果类型不存在，显示错误信息
  if (!typeData) {
    return (
      <section className="screen">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          height: '50vh',
          textAlign: 'center'
        }}>
          <h3>未找到类型 "{type.toUpperCase()}"</h3>
          <p>请检查URL是否正确，或浏览所有可用的MBTI类型。</p>
          <Link href="/types">
            <a className="btn btn-primary mt-3">查看所有类型</a>
          </Link>
        </div>
      </section>
    );
  }
  
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
  
  const color = getGroupColor(typeData.group);
  
  // 确保兼容性数据符合类型要求
  const compatibleTypes: Compatibility[] = typeData.relationships?.compatibleTypes?.map(
    (compatType: any) => ({
      ...compatType,
      compatibility: compatType.compatibility as 'high' | 'medium' | 'low'
    })
  ) || [];

  // 定义标签页数据
  const tabs = [
    { id: 'overview', label: '概述', icon: '📋' },
    { id: 'strengths', label: '优势与劣势', icon: '⚖️' },
    { id: 'careers', label: '职业建议', icon: '💼' },
    { id: 'relationships', label: '关系与沟通', icon: '🤝' }
  ];
  
  return (
    <section className="screen">
      <TypeDetails
        type={typeData.type}
        name={typeData.name}
        description={typeData.fullDescription || typeData.description}
        group={typeData.group as any}
        groupName={typeData.groupName}
        traits={typeData.traits}
      />
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '12px',
          background: 'var(--neutral-100)',
          padding: '8px',
          marginBottom: 'var(--spacing-xl)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          position: 'relative',
          zIndex: 1
        }}>
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                flex: 1,
                padding: '12px 16px',
                border: 'none',
                borderRadius: '8px',
                background: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? color : 'var(--neutral-700)',
                fontWeight: activeTab === tab.id ? '600' : '400',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                margin: '0 4px',
                fontSize: '0.95rem'
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
          marginTop: '-8px',
          position: 'relative',
          zIndex: 0
        }}>
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h3 style={{ 
                marginBottom: 'var(--spacing-lg)',
                color: color,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>{tabs[0].icon}</span> {typeData.type} 性格特点
              </h3>
              <TypeTraits 
                traits={typeData.characteristics || []} 
                color={color}
              />
            </div>
          )}
          
          {activeTab === 'strengths' && (
            <div className="tab-content">
              <h3 style={{ 
                marginBottom: 'var(--spacing-lg)',
                color: color,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>{tabs[1].icon}</span> {typeData.type} 的优势与劣势
              </h3>
              <StrengthsWeaknesses 
                strengths={typeData.strengths || []} 
                weaknesses={typeData.weaknesses || []}
                color={color}
              />
            </div>
          )}
          
          {activeTab === 'careers' && (
            <div className="tab-content">
              <h3 style={{ 
                marginBottom: 'var(--spacing-lg)',
                color: color,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>{tabs[2].icon}</span> {typeData.type} 的职业建议
              </h3>
              <CareerSuggestions 
                careers={typeData.careers || []}
                color={color}
              />
            </div>
          )}
          
          {activeTab === 'relationships' && (
            <div className="tab-content">
              <h3 style={{ 
                marginBottom: 'var(--spacing-lg)',
                color: color,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>{tabs[3].icon}</span> {typeData.type} 的关系与沟通
              </h3>
              {typeData.relationships ? (
                <RelationshipAdvice 
                  compatibleTypes={compatibleTypes}
                  relationshipStrengths={typeData.relationships.strengths || []}
                  relationshipChallenges={typeData.relationships.challenges || []}
                  communicationTips={typeData.relationships.communicationTips || []}
                  color={color}
                />
              ) : (
                <div className="card">
                  <p>暂无关系数据</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginTop: 'var(--spacing-xl)',
          gap: 'var(--spacing-md)'
        }}>
          <Link href="/types">
            <a className="btn btn-outline">
              查看所有类型
            </a>
          </Link>
          <Link href="/test">
            <a className="btn btn-primary">
              参加测试
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TypeDetail; 