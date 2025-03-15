import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TestQuestion, { Option } from '../components/TestQuestion';
import TestResult from '../components/TestResult';
import questions from '../data/questions';
import { calculateMbtiResult, getRandomMbtiResult } from '../utils/mbtiCalculator';

const Test: React.FC = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);
  
  // 处理选项选择
  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };
  
  // 处理下一题按钮点击
  const handleNextQuestion = () => {
    if (!selectedOption) return;
    
    // 找到选中的选项
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOptionObj = currentQuestion.options.find(
      option => option.id === selectedOption
    );
    
    if (selectedOptionObj) {
      // 添加到已选选项列表
      setSelectedOptions([...selectedOptions, selectedOptionObj]);
      
      // 如果还有下一题，前进到下一题
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        // 如果是最后一题，计算结果
        const result = calculateMbtiResult([...selectedOptions, selectedOptionObj]);
        setTestResult(result);
        setTestCompleted(true);
      }
    }
  };
  
  // 处理上一题按钮点击
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      
      // 移除上一个选择
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions.pop();
      setSelectedOptions(newSelectedOptions);
      
      // 恢复上一题的选择
      const previousQuestion = questions[currentQuestionIndex - 1];
      const previousOption = selectedOptions[selectedOptions.length - 1];
      setSelectedOption(previousOption ? previousOption.id : null);
    }
  };
  
  // 处理跳过测试，直接查看随机结果
  const handleSkipTest = () => {
    const randomResult = getRandomMbtiResult();
    setTestResult(randomResult);
    setTestCompleted(true);
  };
  
  // 重新开始测试
  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setSelectedOptions([]);
    setTestCompleted(false);
    setTestResult(null);
  };
  
  return (
    <section className="screen">
      <h2 className="screen-title">MBTI 人格测试</h2>
      
      {!testCompleted ? (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 var(--spacing-md)' }}>
          <TestQuestion
            question={questions[currentQuestionIndex]}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
          />
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginTop: 'var(--spacing-lg)'
          }}>
            <button
              className="btn btn-outline"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              上一题
            </button>
            
            <button
              className="btn btn-primary"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestionIndex < questions.length - 1 ? '下一题' : '查看结果'}
            </button>
          </div>
          
          <div style={{ 
            textAlign: 'center',
            marginTop: 'var(--spacing-xl)',
            color: 'var(--neutral-600)',
            fontSize: 'var(--font-size-sm)'
          }}>
            <button
              onClick={handleSkipTest}
              style={{ 
                background: 'none',
                border: 'none',
                color: 'var(--neutral-600)',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              跳过测试，直接查看示例结果
            </button>
          </div>
        </div>
      ) : (
        <div>
          <TestResult result={testResult} />
          
          <div style={{ 
            textAlign: 'center',
            marginTop: 'var(--spacing-xl)'
          }}>
            <button
              className="btn btn-outline"
              onClick={handleRestartTest}
            >
              重新测试
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Test; 