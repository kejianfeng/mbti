import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'MBTI人格测试' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MBTI人格测试应用，帮助你了解自己的性格特点、优势、职业倾向和人际关系模式。通过科学的测评方法，发现你的潜能。" />
        <meta name="keywords" content="MBTI,人格测试,性格分析,职业规划,自我认知,心理测试,16型人格,INTJ,INTP,ENTJ,ENTP,INFJ,INFP,ENFJ,ENFP,ISTJ,ISFJ,ESTJ,ESFJ,ISTP,ISFP,ESTP,ESFP" />
        <meta name="author" content="Jamki百宝袋" />
        
        {/* 规范链接 */}
        <link rel="canonical" href="https://mbti-test.example.com" />
        
        {/* Open Graph 标签，用于社交媒体分享 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="MBTI人格测试应用，帮助你了解自己的性格特点、优势、职业倾向和人际关系模式。通过科学的测评方法，发现你的潜能。" />
        <meta property="og:url" content="https://mbti-test.example.com" />
        <meta property="og:site_name" content="MBTI人格测试" />
        <meta property="og:image" content="https://mbti-test.example.com/images/mbti-logo.png" />
        
        {/* Twitter 卡片标签 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="MBTI人格测试应用，帮助你了解自己的性格特点、优势、职业倾向和人际关系模式。通过科学的测评方法，发现你的潜能。" />
        <meta name="twitter:image" content="https://mbti-test.example.com/images/mbti-logo.png" />
        
        {/* 移动应用相关 */}
        <meta name="application-name" content="MBTI人格测试" />
        <meta name="apple-mobile-web-app-title" content="MBTI人格测试" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 网站图标 */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#166088" />
        
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MBTI人格测试",
              "url": "https://mbti-test.example.com",
              "description": "MBTI人格测试应用，帮助你了解自己的性格特点、优势、职业倾向和人际关系模式。",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mbti-test.example.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jamki百宝袋",
              "url": "https://mbti-test.example.com",
              "logo": "https://mbti-test.example.com/images/mbti-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "jianfengkejamki@gmail.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://weibo.com/jamki",
                "https://www.zhihu.com/people/jamki"
              ]
            })
          }}
        />
      </Head>
      <header style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        padding: '0',
        marginBottom: 'var(--spacing-lg)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: '60px',
        display: 'flex',
        alignItems: 'center'
      }} className="header-sticky">
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          height: '100%'
        }}>
          <Link href="/">
            <a style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
              color: 'var(--primary-color)',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              padding: '6px 10px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.05) 0%, rgba(var(--primary-rgb), 0.1) 100%)',
              height: '40px'
            }} className="nav-logo">
              <span style={{ 
                marginRight: '8px', 
                fontSize: '1.5rem',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
              }}>🧠</span>
              <span style={{ 
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                MBTI测试
              </span>
            </a>
          </Link>
          <nav>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              margin: 0, 
              padding: 0,
              gap: 'var(--spacing-sm)',
              height: '100%'
            }}>
              <li className="nav-item">
                <Link href="/test">
                  <a style={{ 
                    textDecoration: 'none', 
                    color: 'var(--neutral-800)',
                    fontWeight: '600',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    fontSize: '0.95rem',
                    background: 'transparent',
                    border: '2px solid transparent',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="nav-link">
                    <span style={{ 
                      position: 'relative', 
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span style={{ fontSize: '1rem' }}>✏️</span>
                      开始测试
                    </span>
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--primary-color)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'right',
                      transition: 'transform 0.3s ease',
                    }} className="nav-underline"></span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/types">
                  <a style={{ 
                    textDecoration: 'none', 
                    color: 'var(--neutral-800)',
                    fontWeight: '600',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    fontSize: '0.95rem',
                    background: 'transparent',
                    border: '2px solid transparent',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="nav-link">
                    <span style={{ 
                      position: 'relative', 
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span style={{ fontSize: '1rem' }}>📊</span>
                      类型介绍
                    </span>
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--primary-color)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'right',
                      transition: 'transform 0.3s ease',
                    }} className="nav-underline"></span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faq">
                  <a style={{ 
                    textDecoration: 'none', 
                    color: 'var(--neutral-800)',
                    fontWeight: '600',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    fontSize: '0.95rem',
                    background: 'transparent',
                    border: '2px solid transparent',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="nav-link">
                    <span style={{ 
                      position: 'relative', 
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span style={{ fontSize: '1rem' }}>❓</span>
                      常见问题
                    </span>
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--primary-color)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'right',
                      transition: 'transform 0.3s ease',
                    }} className="nav-underline"></span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
      <footer style={{ 
        backgroundColor: 'white', 
        padding: 'var(--spacing-xl) 0',
        marginTop: 'var(--spacing-xxl)',
        borderTop: '1px solid var(--neutral-200)'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)' }}>MBTI人格测试</h3>
              <p style={{ color: 'var(--neutral-600)', maxWidth: '400px' }}>
                MBTI人格测试是一种流行的心理学工具，帮助你了解自己的思考方式、行为模式和与他人互动的方式。
              </p>
            </div>
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>快速链接</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <Link href="/test">
                    <a style={{ 
                      textDecoration: 'none', 
                      color: 'var(--neutral-700)'
                    }}>
                      开始测试
                    </a>
                  </Link>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <Link href="/types">
                    <a style={{ 
                      textDecoration: 'none', 
                      color: 'var(--neutral-700)'
                    }}>
                      类型介绍
                    </a>
                  </Link>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <Link href="/faq">
                    <a style={{ 
                      textDecoration: 'none', 
                      color: 'var(--neutral-700)'
                    }}>
                      常见问题
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>联系我们</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <a href="mailto:jianfengkejamki@gmail.com" style={{ 
                    textDecoration: 'none', 
                    color: 'var(--neutral-700)'
                  }}>
                    jianfengkejamki@gmail.com
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <a href="#" style={{ 
                    textDecoration: 'none', 
                    color: 'var(--neutral-700)'
                  }}>
                    微信公众号: Jamki百宝袋
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ 
            marginTop: 'var(--spacing-xl)',
            padding: 'var(--spacing-md) 0',
            borderTop: '1px solid var(--neutral-200)',
            textAlign: 'center',
            color: 'var(--neutral-600)',
            fontSize: '0.9rem'
          }}>
            <p>© {new Date().getFullYear()} MBTI人格测试. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout; 