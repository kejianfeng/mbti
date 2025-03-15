import React from 'react';
import Link from 'next/link';

const ServerError: React.FC = () => {
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
          color: 'var(--error-color)',
          lineHeight: '1',
          marginBottom: 'var(--spacing-md)'
        }}>
          500
        </div>
        
        <h2 style={{ 
          fontSize: '2rem',
          marginBottom: 'var(--spacing-lg)'
        }}>
          服务器错误
        </h2>
        
        <p style={{ 
          fontSize: '1.2rem',
          color: 'var(--neutral-600)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          抱歉，服务器遇到了一些问题。
          <br />
          我们的技术团队正在努力解决这个问题。
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
          
          <button 
            className="btn btn-outline btn-lg"
            onClick={() => window.location.reload()}
          >
            刷新页面
          </button>
        </div>
        
        <div style={{ 
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--neutral-100)',
          borderRadius: 'var(--border-radius-md)'
        }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>需要帮助？</h3>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>
            如果问题持续存在，请通过以下方式联系我们：
          </p>
          <p>
            <strong>电子邮件：</strong> support@mbtiapp.com<br />
            <strong>工作时间：</strong> 周一至周五 9:00-18:00
          </p>
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

export default ServerError; 