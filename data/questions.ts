import { Question } from '../components/TestQuestion';

// MBTI测试问题
const questions: Question[] = [
  {
    id: 1,
    text: '在社交场合中，你通常会：',
    options: [
      { id: '1a', text: '认识很多新朋友并积极参与对话', dimension: 'E' },
      { id: '1b', text: '与少数几个人进行深入交流', dimension: 'I' }
    ]
  },
  {
    id: 2,
    text: '你更喜欢的工作环境是：',
    options: [
      { id: '2a', text: '充满活力和互动的开放空间', dimension: 'E' },
      { id: '2b', text: '安静且能够专注的私人空间', dimension: 'I' }
    ]
  },
  {
    id: 3,
    text: '当你需要充电时，你更倾向于：',
    options: [
      { id: '3a', text: '与朋友一起出去玩或参加社交活动', dimension: 'E' },
      { id: '3b', text: '独自待着，享受安静的时间', dimension: 'I' }
    ]
  },
  {
    id: 4,
    text: '在团队项目中，你通常：',
    options: [
      { id: '4a', text: '喜欢讨论和头脑风暴的过程', dimension: 'E' },
      { id: '4b', text: '先独立思考，然后再分享想法', dimension: 'I' }
    ]
  },
  {
    id: 5,
    text: '你更关注：',
    options: [
      { id: '5a', text: '当下的现实和具体细节', dimension: 'S' },
      { id: '5b', text: '未来的可能性和大局观', dimension: 'N' }
    ]
  },
  {
    id: 6,
    text: '你更相信：',
    options: [
      { id: '6a', text: '经验和实际证据', dimension: 'S' },
      { id: '6b', text: '直觉和理论概念', dimension: 'N' }
    ]
  },
  {
    id: 7,
    text: '在学习新事物时，你更喜欢：',
    options: [
      { id: '7a', text: '循序渐进，掌握具体步骤', dimension: 'S' },
      { id: '7b', text: '先了解整体概念，再填补细节', dimension: 'N' }
    ]
  },
  {
    id: 8,
    text: '你更欣赏的人是：',
    options: [
      { id: '8a', text: '脚踏实地，注重实际的人', dimension: 'S' },
      { id: '8b', text: '富有想象力，思维创新的人', dimension: 'N' }
    ]
  },
  {
    id: 9,
    text: '做决定时，你更看重：',
    options: [
      { id: '9a', text: '逻辑分析和客观事实', dimension: 'T' },
      { id: '9b', text: '个人价值观和对他人的影响', dimension: 'F' }
    ]
  },
  {
    id: 10,
    text: '当朋友向你倾诉问题时，你通常会：',
    options: [
      { id: '10a', text: '提供解决方案和实用建议', dimension: 'T' },
      { id: '10b', text: '提供情感支持和理解', dimension: 'F' }
    ]
  },
  {
    id: 11,
    text: '在评估情况时，你更倾向于：',
    options: [
      { id: '11a', text: '保持客观，不受个人感受影响', dimension: 'T' },
      { id: '11b', text: '考虑所有人的感受和需求', dimension: 'F' }
    ]
  },
  {
    id: 12,
    text: '你认为更重要的是：',
    options: [
      { id: '12a', text: '诚实直接，即使可能伤害他人感受', dimension: 'T' },
      { id: '12b', text: '保持和谐，避免不必要的冲突', dimension: 'F' }
    ]
  },
  {
    id: 13,
    text: '你更喜欢：',
    options: [
      { id: '13a', text: '提前计划并遵循既定日程', dimension: 'J' },
      { id: '13b', text: '保持灵活，根据情况随机应变', dimension: 'P' }
    ]
  },
  {
    id: 14,
    text: '对于截止日期，你通常：',
    options: [
      { id: '14a', text: '提前完成任务，避免最后一刻的压力', dimension: 'J' },
      { id: '14b', text: '在压力下工作更有效率，常在最后期限前完成', dimension: 'P' }
    ]
  },
  {
    id: 15,
    text: '你的工作区域通常是：',
    options: [
      { id: '15a', text: '整洁有序，一切都有固定位置', dimension: 'J' },
      { id: '15b', text: '创意性混乱，能在需要时找到东西', dimension: 'P' }
    ]
  },
  {
    id: 16,
    text: '你更喜欢的生活方式是：',
    options: [
      { id: '16a', text: '有结构和可预测性', dimension: 'J' },
      { id: '16b', text: '自发和充满可能性', dimension: 'P' }
    ]
  },
  {
    id: 17,
    text: '在团队中，你更倾向于：',
    options: [
      { id: '17a', text: '主动发言并引导讨论', dimension: 'E' },
      { id: '17b', text: '倾听他人并在必要时提供见解', dimension: 'I' }
    ]
  },
  {
    id: 18,
    text: '你更喜欢阅读的书籍是：',
    options: [
      { id: '18a', text: '基于事实的非虚构作品或实用指南', dimension: 'S' },
      { id: '18b', text: '探索新概念或富有想象力的小说', dimension: 'N' }
    ]
  },
  {
    id: 19,
    text: '在争论中，你更看重：',
    options: [
      { id: '19a', text: '真相和正确性，即使可能伤害关系', dimension: 'T' },
      { id: '19b', text: '维护关系和共识，即使需要妥协', dimension: 'F' }
    ]
  },
  {
    id: 20,
    text: '面对变化，你通常：',
    options: [
      { id: '20a', text: '喜欢有计划地过渡，知道会发生什么', dimension: 'J' },
      { id: '20b', text: '享受意外和新的可能性', dimension: 'P' }
    ]
  }
];

export default questions; 