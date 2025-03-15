import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="screen">
      <h2 className="screen-title">联系我们</h2>
      
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        padding: 'var(--spacing-xl)',
        backgroundColor: 'white',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        textAlign: 'center'
      }}>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          borderRadius: 'var(--radius-md)',
          background: 'linear-gradient(135deg, var(--primary-color-light) 0%, var(--primary-color-lighter) 100%)'
        }}>
          <h3 style={{ 
            fontSize: '1.8rem', 
            marginBottom: 'var(--spacing-md)',
            color: 'var(--primary-color-dark)'
          }}>
            我们很乐意听取您的意见
          </h3>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--neutral-800)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            无论您有问题、建议还是反馈，都欢迎通过以下方式与我们联系
          </p>
        </div>
        
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-xl)'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-md)',
            background: 'white',
            boxShadow: 'var(--shadow-sm)',
            width: '100%',
            maxWidth: '500px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              fontSize: '2.5rem', 
              marginRight: 'var(--spacing-lg)',
              color: 'var(--primary-color)'
            }}>
              📧
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--neutral-900)'
              }}>
                电子邮件
              </h4>
              <a 
                href="mailto:jianfengkejamki@gmail.com" 
                style={{ 
                  fontSize: '1.1rem',
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                jianfengkejamki@gmail.com
              </a>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-md)',
            background: 'white',
            boxShadow: 'var(--shadow-sm)',
            width: '100%',
            maxWidth: '500px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              fontSize: '2.5rem', 
              marginRight: 'var(--spacing-lg)',
              color: 'var(--primary-color)'
            }}>
              📱
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--neutral-900)'
              }}>
                微信公众号
              </h4>
              <p style={{ 
                fontSize: '1.1rem',
                color: 'var(--neutral-700)',
                margin: 0,
                fontWeight: '500'
              }}>
                Jamki百宝袋
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          marginTop: 'var(--spacing-xxl)', 
          padding: 'var(--spacing-lg)',
          borderTop: '1px solid var(--neutral-200)'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem',
            color: 'var(--neutral-800)',
            marginBottom: 'var(--spacing-md)'
          }}>
            常见问题
          </h3>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--neutral-600)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            在联系我们之前，您可能想查看我们的 
            <a 
              href="/faq" 
              style={{ 
                color: 'var(--primary-color)', 
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              常见问题
            </a> 
            页面，那里可能已经有您想要的答案。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 