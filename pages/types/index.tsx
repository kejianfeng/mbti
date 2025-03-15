import React, { useState } from 'react';
import Link from 'next/link';

// MBTI类型数据
const mbtiTypes = [
  // 分析家族群 (NT)
  {
    type: 'INTJ',
    name: '建筑师',
    description: '富有想象力和战略性的思想家，拥有一切实现目标的计划。',
    group: 'analyst',
    groupName: '分析家族群'
  },
  {
    type: 'INTP',
    name: '逻辑学家',
    description: '具有创新精神的发明家，对知识有着不可抑制的渴望。',
    group: 'analyst',
    groupName: '分析家族群'
  },
  {
    type: 'ENTJ',
    name: '指挥官',
    description: '大胆、富有想象力且意志坚强的领导者，总是能找到或创造解决方案。',
    group: 'analyst',
    groupName: '分析家族群'
  },
  {
    type: 'ENTP',
    name: '辩论家',
    description: '聪明好奇的思想家，不会放过任何智力挑战。',
    group: 'analyst',
    groupName: '分析家族群'
  },
  
  // 外交家族群 (NF)
  {
    type: 'INFJ',
    name: '提倡者',
    description: '安静而神秘，但极具启发性和不知疲倦的理想主义者。',
    group: 'diplomat',
    groupName: '外交家族群'
  },
  {
    type: 'INFP',
    name: '调停者',
    description: '诗意、善良、利他的人，总是热切地寻找善良的迹象，即使在最坏的人或事中。',
    group: 'diplomat',
    groupName: '外交家族群'
  },
  {
    type: 'ENFJ',
    name: '主人公',
    description: '富有魅力和鼓舞人心的领导者，能够吸引听众。',
    group: 'diplomat',
    groupName: '外交家族群'
  },
  {
    type: 'ENFP',
    name: '竞选者',
    description: '热情、有创造力、社交能力强的自由精神，总能找到理由微笑。',
    group: 'diplomat',
    groupName: '外交家族群'
  },
  
  // 哨兵家族群 (SJ)
  {
    type: 'ISTJ',
    name: '物流师',
    description: '实际且注重事实的个人，其可靠性是无可争议的。',
    group: 'sentinel',
    groupName: '哨兵家族群'
  },
  {
    type: 'ISFJ',
    name: '守卫者',
    description: '非常专注、温暖和保护性强的人，总是准备保护他们所爱的人。',
    group: 'sentinel',
    groupName: '哨兵家族群'
  },
  {
    type: 'ESTJ',
    name: '总经理',
    description: '出色的管理者，对细节有着无与伦比的关注，并有推动项目前进的动力。',
    group: 'sentinel',
    groupName: '哨兵家族群'
  },
  {
    type: 'ESFJ',
    name: '执政官',
    description: '极其关心的、社交的、受欢迎的人，总是热衷于帮助他人。',
    group: 'sentinel',
    groupName: '哨兵家族群'
  },
  
  // 探险家族群 (SP)
  {
    type: 'ISTP',
    name: '鉴赏家',
    description: '大胆而实际的实验者，掌握各种工具的主人。',
    group: 'explorer',
    groupName: '探险家族群'
  },
  {
    type: 'ISFP',
    name: '探险家',
    description: '灵活且有魅力的艺术家，总是准备探索和体验新事物。',
    group: 'explorer',
    groupName: '探险家族群'
  },
  {
    type: 'ESTP',
    name: '企业家',
    description: '聪明、精力充沛、善于察言观色的人，真正享受冒险的乐趣。',
    group: 'explorer',
    groupName: '探险家族群'
  },
  {
    type: 'ESFP',
    name: '表演者',
    description: '自发的、精力充沛、热情的娱乐者——生活从不会因他们而无聊。',
    group: 'explorer',
    groupName: '探险家族群'
  }
];

const TypesIndex: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  
  // 按族群分组
  const groupedTypes = mbtiTypes.reduce((acc, type) => {
    if (!acc[type.group]) {
      acc[type.group] = {
        name: type.groupName,
        types: []
      };
    }
    acc[type.group].types.push(type);
    return acc;
  }, {} as Record<string, { name: string; types: typeof mbtiTypes }>);
  
  // 获取所有族群
  const groups = Object.keys(groupedTypes);
  
  // 过滤类型
  const filteredTypes = activeGroup 
    ? mbtiTypes.filter(type => type.group === activeGroup)
    : mbtiTypes;
  
  return (
    <section className="screen">
      <h2 className="screen-title">MBTI 16种人格类型</h2>
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="text-center mb-5">
          MBTI将人格分为16种不同的类型，每种类型都有其独特的特点、优势和挑战。
          了解这些类型可以帮助你更好地理解自己和他人的行为方式和思考模式。
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: 'var(--spacing-xl)',
          flexWrap: 'wrap'
        }}>
          <button 
            className="btn btn-outline" 
            style={{ 
              margin: '0 var(--spacing-sm) var(--spacing-sm)',
              backgroundColor: activeGroup === null ? 'var(--primary-color)' : '',
              color: activeGroup === null ? 'white' : ''
            }}
            onClick={() => setActiveGroup(null)}
          >
            全部
          </button>
          
          {groups.map(group => (
            <button 
              key={group}
              className="btn btn-outline" 
              style={{ 
                margin: '0 var(--spacing-sm) var(--spacing-sm)',
                backgroundColor: activeGroup === group ? `var(--color-${group})` : '',
                color: activeGroup === group ? 'white' : ''
              }}
              onClick={() => setActiveGroup(group)}
            >
              {groupedTypes[group].name}
            </button>
          ))}
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)'
        }}>
          {filteredTypes.map(type => (
            <Link key={type.type} href={`/types/${type.type.toLowerCase()}`}>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ 
                  border: '1px solid var(--neutral-300)',
                  borderRadius: 'var(--border-radius-md)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="card"
                >
                  <div style={{ 
                    backgroundColor: `var(--color-${type.group})`,
                    color: 'white',
                    padding: 'var(--spacing-md)',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ margin: 0 }}>{type.type}</h3>
                    <p style={{ margin: '5px 0 0' }}>{type.name}</p>
                  </div>
                  <div style={{ 
                    padding: 'var(--spacing-md)',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <p>{type.description}</p>
                    <div style={{ 
                      textAlign: 'center', 
                      marginTop: 'var(--spacing-md)',
                      color: `var(--color-${type.group})`
                    }}>
                      查看详情 →
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <Link href="/test">
            <a className="btn btn-primary btn-lg">参加测试，了解你的类型</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TypesIndex; 