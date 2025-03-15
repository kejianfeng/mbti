import React from 'react';

export interface Option {
  id: string;
  text: string;
  dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface TestQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
}

const TestQuestion: React.FC<TestQuestionProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedOption,
  onSelectOption
}) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="question-container fade-in">
      <div className="question-number">
        问题 {currentQuestion} / {totalQuestions}
      </div>
      
      <h3 className="question-text">{question.text}</h3>
      
      <div className="options-container">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`option-item ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => onSelectOption(option.id)}
          >
            {option.text}
          </div>
        ))}
      </div>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TestQuestion; 