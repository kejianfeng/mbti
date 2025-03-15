import React, { useState } from 'react';
import Link from 'next/link';

// FAQ数据
const faqData = [
  {
    id: 1,
    question: 'MBTI测试是什么？',
    answer: 'MBTI（迈尔斯-布里格斯类型指标）是一种基于荣格心理学理论的人格类型评估工具。它通过评估人们在四个维度上的偏好（能量来源、信息获取、决策方式和生活方式），将人格分为16种不同的类型。MBTI测试帮助人们更好地了解自己的思考方式、行为模式和与他人互动的方式。'
  },
  {
    id: 2,
    question: 'MBTI测试的科学依据是什么？',
    answer: 'MBTI测试基于瑞士心理学家卡尔·荣格的心理类型理论，由凯瑟琳·布里格斯和她的女儿伊莎贝尔·迈尔斯在20世纪初进一步发展。虽然在学术心理学界对其科学有效性存在一些争议，但MBTI已被全球数百万人使用，并被许多组织和企业采用作为个人发展和团队建设的工具。'
  },
  {
    id: 3,
    question: 'MBTI的16种类型是什么？',
    answer: 'MBTI将人格分为16种类型，每种类型由四个字母组成，代表四个维度上的偏好：E（外向）或I（内向）、S（实感）或N（直觉）、T（思考）或F（情感）、J（判断）或P（感知）。16种类型包括：ISTJ、ISFJ、INFJ、INTJ、ISTP、ISFP、INFP、INTP、ESTP、ESFP、ENFP、ENTP、ESTJ、ESFJ、ENFJ和ENTJ。'
  },
  {
    id: 4,
    question: '我的MBTI类型会随时间改变吗？',
    answer: '根据MBTI理论，你的基本人格类型倾向是相对稳定的。然而，测试结果可能会因多种因素而有所变化，如当前的生活环境、工作压力、个人成长等。此外，随着年龄增长和经历积累，你可能会发展出更平衡的偏好，或者更好地利用你不太偏好的功能。建议定期重新测试，以跟踪你的发展变化。'
  },
  {
    id: 5,
    question: 'MBTI类型与职业选择有什么关系？',
    answer: '不同的MBTI类型通常在不同类型的工作环境中表现更好。例如，外向型（E）可能更适合需要频繁人际互动的工作，而内向型（I）可能在需要深度思考和独立工作的环境中表现更佳。然而，MBTI类型只是职业选择的一个考虑因素，个人兴趣、技能、价值观和经验同样重要。我们的网站提供了基于MBTI类型的职业建议，但这些建议应作为参考，而非绝对指导。'
  },
  {
    id: 6,
    question: '如何解读我的测试结果？',
    answer: '测试结果会显示你在四个维度上的偏好百分比，以及你的整体类型。结果页面提供了类型概述和主要特质。点击"查看详细解析"可以获取更深入的分析，包括优势、挑战、适合的职业方向和人际关系建议等。记住，MBTI结果是描述性的，而非评价性的——没有"好"或"坏"的类型，每种类型都有其独特的优势和挑战。'
  },
  {
    id: 7,
    question: '我可以与他人分享我的测试结果吗？',
    answer: '是的，你可以分享你的测试结果。在结果页面，我们提供了社交媒体分享按钮。了解彼此的MBTI类型可以帮助改善人际关系，增进相互理解。然而，请记住尊重他人的隐私，不要强迫他人分享他们的类型。'
  },
  {
    id: 8,
    question: '测试需要多长时间完成？',
    answer: '完成测试通常需要15-20分钟。我们建议在不受干扰的环境中完成测试，以获得最准确的结果。如果需要，你可以暂停测试并稍后继续。'
  },
  {
    id: 9,
    question: '如何获得最准确的测试结果？',
    answer: '为获得最准确的结果，请根据你在大多数情况下的真实想法和行为来回答问题，而不是基于特定情境或你希望成为的样子。避免过度分析每个问题，通常第一反应最能反映真实的你。如果你对某些问题感到犹豫，可以考虑你在放松和自然状态下的行为方式。'
  },
  {
    id: 10,
    question: '我需要付费才能查看详细结果吗？',
    answer: '我们的基本测试和结果解析是免费的。注册账户后，你可以保存测试历史并访问基本的类型描述。我们也提供高级会员服务，包括更详细的个性分析、职业匹配、关系兼容性报告等增值功能。'
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  return (
    <section className="screen">
      <h2 className="screen-title">常见问题</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className="text-center mb-5">
          以下是关于MBTI测试的一些常见问题。如果你没有找到你想要的答案，请 
          <Link href="/contact">
            <a style={{ color: 'var(--primary-color)' }}>联系我们</a>
          </Link>。
        </p>
        
        <div>
          {faqData.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                marginBottom: 'var(--spacing-md)',
                border: '1px solid var(--neutral-300)',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{ 
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  backgroundColor: openItems.includes(item.id) ? 'var(--primary-color)' : 'white',
                  color: openItems.includes(item.id) ? 'white' : 'var(--neutral-800)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onClick={() => toggleItem(item.id)}
              >
                <span>{item.question}</span>
                <span>{openItems.includes(item.id) ? '−' : '+'}</span>
              </div>
              
              {openItems.includes(item.id) && (
                <div style={{ padding: 'var(--spacing-lg)', backgroundColor: 'white' }}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <h4>还有其他问题？</h4>
          <p>我们很乐意帮助你解答关于MBTI测试的任何疑问。</p>
          <Link href="/contact">
            <a className="btn btn-primary mt-3">联系我们</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 