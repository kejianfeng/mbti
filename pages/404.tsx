import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <section className="screen">
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: 'var(--spacing-xl) var(--spacing-md)',
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: '120px', 
          fontWeight: 'bold',
          color: 'var(--primary-color)',
          lineHeight: '1',
          marginBottom: 'var(--spacing-md)'
        }}>
          404
        </div>
        
        <h2 style={{ 
          fontSize: '2rem',
          marginBottom: 'var(--spacing-lg)'
        }}>
          页面未找到
        </h2>
        
        <p style={{ 
          fontSize: '1.2rem',
          color: 'var(--neutral-600)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          抱歉，您要查找的页面不存在或已被移动。
          <br />
          也许是时候发现您的MBTI类型了？
        </p>
        
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-md)'
        }}>
          <Link href="/">
            <a className="btn btn-primary btn-lg">
              返回首页
            </a>
          </Link>
          
          <Link href="/test">
            <a className="btn btn-outline btn-lg">
              参加MBTI测试
            </a>
          </Link>
          
          <Link href="/types">
            <a className="btn btn-outline btn-lg">
              浏览所有MBTI类型
            </a>
          </Link>
        </div>
        
        <div style={{ 
          marginTop: 'var(--spacing-xl)',
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--spacing-md)'
        }}>
          <Link href="/contact">
            <a style={{ color: 'var(--neutral-600)', textDecoration: 'underline' }}>
              联系我们
            </a>
          </Link>
          <span style={{ color: 'var(--neutral-400)' }}>|</span>
          <Link href="/faq">
            <a style={{ color: 'var(--neutral-600)', textDecoration: 'underline' }}>
              常见问题
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound; 