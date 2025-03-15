import React from 'react';
import Link from 'next/link';

export interface ResultData {
  type: string;
  name: string;
  description: string;
  traits: {
    extraversion: number;
    sensing: number;
    thinking: number;
    judging: number;
  };
}

interface TestResultProps {
  result: ResultData;
}

const TestResult: React.FC<TestResultProps> = ({ result }) => {
  // 计算相反的特质值
  const oppositeTraits = {
    introversion: 100 - result.traits.extraversion,
    intuition: 100 - result.traits.sensing,
    feeling: 100 - result.traits.thinking,
    perceiving: 100 - result.traits.judging
  };
  
  return (
    <div className="result-container">
      <div className="result-header">
        <h2 className="result-type">{result.type}</h2>
        <h3 className="result-name">"{result.name}"</h3>
        <p>{result.description}</p>
      </div>
      
      <div className="card">
        <h3 className="text-center mb-4">您的性格特质分析</h3>
        
        <div className="trait-bar">
          <div className="trait-label">内向 (I)</div>
          <div className="trait-bar-container">
            <div 
              className="trait-bar-fill" 
              style={{ 
                width: `${oppositeTraits.introversion}%`,
                backgroundColor: oppositeTraits.introversion > result.traits.extraversion ? 'var(--primary-color)' : 'var(--secondary-color)'
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
                backgroundColor: oppositeTraits.intuition > result.traits.sensing ? 'var(--primary-color)' : 'var(--secondary-color)'
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
                backgroundColor: oppositeTraits.feeling > result.traits.thinking ? 'var(--primary-color)' : 'var(--secondary-color)'
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
                backgroundColor: oppositeTraits.perceiving > result.traits.judging ? 'var(--primary-color)' : 'var(--secondary-color)'
              }}
            ></div>
            <div className="trait-percentage">
              {oppositeTraits.perceiving}%
            </div>
          </div>
          <div className="trait-opposite-label">判断 (J)</div>
        </div>
      </div>
      
      <div className="card">
        <h3 className="text-center mb-3">您可能适合的职业方向</h3>
        <p className="text-center mb-4">根据您的MBTI类型，以下职业可能更符合您的性格特质</p>
        
        <div className="d-flex flex-wrap justify-content-center">
          {getCareerSuggestions(result.type).map((career, index) => (
            <div key={index} className="career-item">
              {career}
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-5">
        <Link href={`/types/${result.type.toLowerCase()}`}>
          <a className="btn btn-primary btn-lg">
            查看详细解析
          </a>
        </Link>
        
        <div className="d-flex justify-content-center mt-4" style={{ gap: 'var(--spacing-md)' }}>
          <Link href="/test">
            <a className="btn btn-outline" style={{ minWidth: '120px' }}>
              重新测试
            </a>
          </Link>
          
          <Link href="/types">
            <a className="btn btn-outline" style={{ minWidth: '120px' }}>
              浏览所有类型
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

// 根据MBTI类型返回职业建议
const getCareerSuggestions = (type: string): string[] => {
  const careers = {
    'INTJ': ['战略规划师', '系统分析师', '科学研究员', '投资银行家', '企业架构师'],
    'INTP': ['软件开发者', '数据科学家', '研究员', '大学教授', '逻辑学家'],
    'ENTJ': ['企业高管', '管理顾问', '律师', '企业家', '项目经理'],
    'ENTP': ['创业者', '营销策略师', '产品经理', '政治顾问', '发明家'],
    'INFJ': ['心理咨询师', '作家', '人力资源专家', '社会工作者', '教师'],
    'INFP': ['作家', '心理学家', '艺术家', '设计师', '社会活动家'],
    'ENFJ': ['培训师', '公关专家', '销售经理', '人力资源经理', '教育工作者'],
    'ENFP': ['创意总监', '记者', '活动策划师', '市场营销', '演员'],
    'ISTJ': ['财务分析师', '会计师', '项目管理', '质量保证专家', '军事人员'],
    'ISFJ': ['护士', '行政助理', '客户服务', '小学教师', '社会工作者'],
    'ESTJ': ['销售经理', '项目经理', '金融顾问', '法官', '政府官员'],
    'ESFJ': ['医疗保健工作者', '销售代表', '公关专员', '办公室经理', '活动策划师'],
    'ISTP': ['工程师', '机械师', '飞行员', '法医科学家', '系统管理员'],
    'ISFP': ['平面设计师', '时装设计师', '摄影师', '景观设计师', '厨师'],
    'ESTP': ['企业家', '销售代表', '营销专员', '运动员', '消防员'],
    'ESFP': ['活动策划师', '旅游顾问', '演员', '销售代表', '公关专员']
  };
  
  return careers[type as keyof typeof careers] || ['职业顾问', '人力资源专家', '培训师', '教育工作者', '管理顾问'];
};

export default TestResult; 