import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TestResult, { ResultData } from '../components/TestResult';
import { getRandomMbtiResult } from '../utils/mbtiCalculator';

const Result: React.FC = () => {
  const router = useRouter();
  const [result, setResult] = useState<ResultData | null>(null);
  
  useEffect(() => {
    // 尝试从URL参数或localStorage获取结果
    // 如果没有结果，生成一个随机结果用于演示
    const storedResult = typeof window !== 'undefined' ? localStorage.getItem('mbtiResult') : null;
    
    if (storedResult) {
      try {
        setResult(JSON.parse(storedResult));
      } catch (error) {
        console.error('Error parsing stored result:', error);
        setResult(getRandomMbtiResult());
      }
    } else {
      setResult(getRandomMbtiResult());
    }
  }, []);
  
  if (!result) {
    return (
      <section className="screen">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '50vh'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3>加载结果中...</h3>
            <p>如果长时间未加载，请尝试重新测试</p>
            <Link href="/test">
              <a className="btn btn-primary mt-3">开始测试</a>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="screen">
      <h2 className="screen-title">您的MBTI测试结果</h2>
      
      <TestResult result={result} />
    </section>
  );
};

export default Result;
