import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <section className="screen">
      <h2 className="screen-title">探索你的MBTI人格类型</h2>
      
      <div className={styles['welcome-header']}>
        <Image 
          src="/images/mbti-logo.svg" 
          alt="MBTI Logo" 
          width={150} 
          height={150}
          priority
        />
        <h3>了解自己，发现潜能</h3>
        <p className="mb-4">MBTI人格测试是一种流行的心理学工具，帮助你了解自己的思考方式、行为模式和与他人互动的方式。</p>
      </div>
      
      <div className="d-flex flex-wrap justify-content-between">
        <div className={styles['feature-box']} style={{ flex: 1, minWidth: '250px' }}>
          <i>🧠</i>
          <h4>科学的测评方法</h4>
          <p>基于荣格心理学理论，通过60个精心设计的问题，准确评估你的人格类型。</p>
        </div>
        
        <div className={styles['feature-box']} style={{ flex: 1, minWidth: '250px' }}>
          <i>🔍</i>
          <h4>深入的类型解析</h4>
          <p>获取详细的人格特质分析，了解你的优势、挑战和潜在发展方向。</p>
        </div>
        
        <div className={styles['feature-box']} style={{ flex: 1, minWidth: '250px' }}>
          <i>💼</i>
          <h4>职业发展指导</h4>
          <p>发现最适合你人格类型的职业方向，让你的工作更符合天性。</p>
        </div>
      </div>
      
      <div className="text-center mt-5 mb-5">
        <h4>MBTI将人格分为16种类型，基于四个维度：</h4>
        <div className="d-flex flex-wrap justify-content-center mt-4">
          <div style={{ flex: 1, minWidth: '200px', padding: '0 var(--spacing-md)' }}>
            <h5>能量来源</h5>
            <p><strong>E</strong>xtroversion (外向) vs <strong>I</strong>ntroversion (内向)</p>
          </div>
          <div style={{ flex: 1, minWidth: '200px', padding: '0 var(--spacing-md)' }}>
            <h5>信息获取</h5>
            <p><strong>S</strong>ensing (实感) vs i<strong>N</strong>tuition (直觉)</p>
          </div>
          <div style={{ flex: 1, minWidth: '200px', padding: '0 var(--spacing-md)' }}>
            <h5>决策方式</h5>
            <p><strong>T</strong>hinking (思考) vs <strong>F</strong>eeling (情感)</p>
          </div>
          <div style={{ flex: 1, minWidth: '200px', padding: '0 var(--spacing-md)' }}>
            <h5>生活方式</h5>
            <p><strong>J</strong>udging (判断) vs <strong>P</strong>erceiving (感知)</p>
          </div>
        </div>
      </div>
      
      <div className={styles['mbti-grid']}>
        {/* 分析家族群 (NT) */}
        <div className={`${styles['mbti-type']} ${styles.analyst}`}>INTJ</div>
        <div className={`${styles['mbti-type']} ${styles.analyst}`}>INTP</div>
        <div className={`${styles['mbti-type']} ${styles.analyst}`}>ENTJ</div>
        <div className={`${styles['mbti-type']} ${styles.analyst}`}>ENTP</div>
        
        {/* 外交家族群 (NF) */}
        <div className={`${styles['mbti-type']} ${styles.diplomat}`}>INFJ</div>
        <div className={`${styles['mbti-type']} ${styles.diplomat}`}>INFP</div>
        <div className={`${styles['mbti-type']} ${styles.diplomat}`}>ENFJ</div>
        <div className={`${styles['mbti-type']} ${styles.diplomat}`}>ENFP</div>
        
        {/* 哨兵家族群 (SJ) */}
        <div className={`${styles['mbti-type']} ${styles.sentinel}`}>ISTJ</div>
        <div className={`${styles['mbti-type']} ${styles.sentinel}`}>ISFJ</div>
        <div className={`${styles['mbti-type']} ${styles.sentinel}`}>ESTJ</div>
        <div className={`${styles['mbti-type']} ${styles.sentinel}`}>ESFJ</div>
        
        {/* 探险家族群 (SP) */}
        <div className={`${styles['mbti-type']} ${styles.explorer}`}>ISTP</div>
        <div className={`${styles['mbti-type']} ${styles.explorer}`}>ISFP</div>
        <div className={`${styles['mbti-type']} ${styles.explorer}`}>ESTP</div>
        <div className={`${styles['mbti-type']} ${styles.explorer}`}>ESFP</div>
      </div>
      
      <div className={styles['cta-container']}>
        <Link href="/test">
          <a className="btn btn-primary btn-lg">开始测试</a>
        </Link>
        <p className="mt-3">大约需要15-20分钟完成</p>
      </div>
    </section>
  );
};

export default Home;