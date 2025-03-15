import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section className="screen">
      <h2 className="screen-title">关于MBTI测试</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 var(--spacing-md)' }}>
        <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h3>什么是MBTI测试？</h3>
          <p>
            MBTI（Myers-Briggs Type Indicator，迈尔斯-布里格斯类型指标）是一种基于卡尔·荣格的心理类型理论开发的人格类型学工具。
            它由凯瑟琳·库克·布里格斯和她的女儿伊莎贝尔·布里格斯·迈尔斯在20世纪40年代开发，旨在帮助人们更好地理解自己和他人的性格特点。
          </p>
          <p>
            MBTI测试将人格分为16种不同的类型，每种类型都由四个维度的偏好组成：
          </p>
          
          <div style={{ margin: 'var(--spacing-lg) 0' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <div className="card" style={{ backgroundColor: 'var(--neutral-100)' }}>
                <h4>能量来源：外向 (E) vs 内向 (I)</h4>
                <p><strong>外向 (Extraversion)：</strong>从外部世界获取能量，喜欢社交互动</p>
                <p><strong>内向 (Introversion)：</strong>从内心世界获取能量，需要独处时间恢复精力</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--neutral-100)' }}>
                <h4>信息获取：感觉 (S) vs 直觉 (N)</h4>
                <p><strong>感觉 (Sensing)：</strong>关注具体事实和细节，注重现实和实际经验</p>
                <p><strong>直觉 (iNtuition)：</strong>关注模式和可能性，喜欢想象和抽象思考</p>
              </div>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-md)'
            }}>
              <div className="card" style={{ backgroundColor: 'var(--neutral-100)' }}>
                <h4>决策方式：思考 (T) vs 情感 (F)</h4>
                <p><strong>思考 (Thinking)：</strong>基于逻辑和客观分析做决定</p>
                <p><strong>情感 (Feeling)：</strong>基于个人价值观和对他人影响做决定</p>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--neutral-100)' }}>
                <h4>生活方式：判断 (J) vs 感知 (P)</h4>
                <p><strong>判断 (Judging)：</strong>喜欢计划和组织，追求确定性和结构</p>
                <p><strong>感知 (Perceiving)：</strong>喜欢灵活和适应性，保持开放和自发</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h3>MBTI的四大族群</h3>
          <p>
            16种MBTI类型可以进一步分为四个主要族群，每个族群共享某些核心特质：
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)',
            margin: 'var(--spacing-lg) 0'
          }}>
            <div className="card" style={{ borderTop: '4px solid var(--color-analyst)' }}>
              <h4>分析家族群 (NT)</h4>
              <p>INTJ, INTP, ENTJ, ENTP</p>
              <p>
                分析家族群以理性和创新著称。他们喜欢解决复杂问题，追求知识和理解，
                并且通常在战略思考和系统分析方面表现出色。
              </p>
            </div>
            
            <div className="card" style={{ borderTop: '4px solid var(--color-diplomat)' }}>
              <h4>外交家族群 (NF)</h4>
              <p>INFJ, INFP, ENFJ, ENFP</p>
              <p>
                外交家族群以同理心和理想主义著称。他们关注人际关系和个人成长，
                通常在沟通、激励他人和促进和谐方面表现出色。
              </p>
            </div>
            
            <div className="card" style={{ borderTop: '4px solid var(--color-sentinel)' }}>
              <h4>哨兵家族群 (SJ)</h4>
              <p>ISTJ, ISFJ, ESTJ, ESFJ</p>
              <p>
                哨兵族群以责任感和可靠性著称。他们重视传统、秩序和稳定性，
                通常在组织、管理和维护社会结构方面表现出色。
              </p>
            </div>
            
            <div className="card" style={{ borderTop: '4px solid var(--color-explorer)' }}>
              <h4>探险家族群 (SP)</h4>
              <p>ISTP, ISFP, ESTP, ESFP</p>
              <p>
                探险家族群以灵活性和实用主义著称。他们喜欢体验当下，适应变化，
                通常在危机处理、艺术表达和实际技能方面表现出色。
              </p>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h3>MBTI的应用</h3>
          <p>
            MBTI测试在多个领域有广泛应用：
          </p>
          <ul style={{ lineHeight: '1.6' }}>
            <li><strong>个人发展：</strong>帮助人们了解自己的优势、挑战和成长方向</li>
            <li><strong>职业规划：</strong>发现适合自己性格特点的职业和工作环境</li>
            <li><strong>团队建设：</strong>促进团队成员之间的理解和有效沟通</li>
            <li><strong>人际关系：</strong>改善与家人、朋友和伴侣的关系</li>
            <li><strong>教育：</strong>帮助教育者了解不同学习风格和动机</li>
          </ul>
        </div>
        
        <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h3>MBTI的局限性</h3>
          <p>
            虽然MBTI测试在全球范围内广受欢迎，但也有一些局限性需要注意：
          </p>
          <ul style={{ lineHeight: '1.6' }}>
            <li>人格类型不是固定不变的，可能随时间和环境而变化</li>
            <li>测试结果可能受到当时情绪和环境的影响</li>
            <li>MBTI提供的是偏好的描述，而非能力的评估</li>
            <li>不应将MBTI结果用于重大决策的唯一依据</li>
            <li>每个人都是独特的，即使在同一类型中也有很大差异</li>
          </ul>
        </div>
        
        <div className="text-center" style={{ margin: 'var(--spacing-xl) 0' }}>
          <Link href="/test">
            <a className="btn btn-primary btn-lg">开始测试，探索你的MBTI类型</a>
          </Link>
          <Link href="/types">
            <a className="btn btn-outline btn-lg" style={{ marginLeft: 'var(--spacing-md)' }}>
              浏览所有16种MBTI类型
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About; 