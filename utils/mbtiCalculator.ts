import { Option } from '../components/TestQuestion';
import { ResultData } from '../components/TestResult';
import mbtiTypes from '../data/mbtiTypes';

// 计算MBTI测试结果
export const calculateMbtiResult = (selectedOptions: Option[]): ResultData => {
  // 初始化计数器
  const dimensionCounts = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };
  
  // 统计每个维度的选择次数
  selectedOptions.forEach(option => {
    dimensionCounts[option.dimension]++;
  });
  
  // 确定每个维度的偏好
  const preferences = {
    EI: dimensionCounts.E > dimensionCounts.I ? 'E' : 'I',
    SN: dimensionCounts.S > dimensionCounts.N ? 'S' : 'N',
    TF: dimensionCounts.T > dimensionCounts.F ? 'T' : 'F',
    JP: dimensionCounts.J > dimensionCounts.P ? 'J' : 'P'
  };
  
  // 计算每个维度的百分比
  const totalQuestions = selectedOptions.length;
  const eiQuestions = dimensionCounts.E + dimensionCounts.I;
  const snQuestions = dimensionCounts.S + dimensionCounts.N;
  const tfQuestions = dimensionCounts.T + dimensionCounts.F;
  const jpQuestions = dimensionCounts.J + dimensionCounts.P;
  
  const traits = {
    extraversion: Math.round((dimensionCounts.E / eiQuestions) * 100),
    sensing: Math.round((dimensionCounts.S / snQuestions) * 100),
    thinking: Math.round((dimensionCounts.T / tfQuestions) * 100),
    judging: Math.round((dimensionCounts.J / jpQuestions) * 100)
  };
  
  // 组合MBTI类型
  const mbtiType = `${preferences.EI}${preferences.SN}${preferences.TF}${preferences.JP}`;
  
  // 获取类型信息
  // 注意：这里假设mbtiTypes中有所有16种类型的数据
  // 如果没有完整数据，可以使用默认值
  const typeKey = mbtiType.toLowerCase() as keyof typeof mbtiTypes;
  const typeInfo = mbtiTypes[typeKey] || {
    type: mbtiType,
    name: '未知类型',
    description: '这种类型的详细信息尚未添加到我们的数据库中。',
    traits: traits
  };
  
  // 返回结果
  return {
    type: mbtiType,
    name: typeInfo.name,
    description: typeInfo.description,
    traits: traits
  };
};

// 获取随机测试结果（用于演示）
export const getRandomMbtiResult = (): ResultData => {
  const dimensions = [
    ['E', 'I'],
    ['S', 'N'],
    ['T', 'F'],
    ['J', 'P']
  ];
  
  // 随机选择每个维度
  const randomType = dimensions.map(dim => 
    dim[Math.floor(Math.random() * 2)]
  ).join('');
  
  // 随机生成特质百分比
  const traits = {
    extraversion: Math.floor(Math.random() * 101),
    sensing: Math.floor(Math.random() * 101),
    thinking: Math.floor(Math.random() * 101),
    judging: Math.floor(Math.random() * 101)
  };
  
  // 获取类型信息
  const typeKey = randomType.toLowerCase() as keyof typeof mbtiTypes;
  const typeInfo = mbtiTypes[typeKey] || {
    type: randomType,
    name: '随机类型',
    description: '这是一个随机生成的MBTI类型结果，仅用于演示目的。',
    traits: traits
  };
  
  return {
    type: randomType,
    name: typeInfo.name,
    description: typeInfo.description,
    traits: traits
  };
}; 