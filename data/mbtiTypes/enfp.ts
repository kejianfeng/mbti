import { MBTIType } from './types';

const enfp: MBTIType = {
  type: 'ENFP',
  name: '竞选者',
  description: '热情、有创造力、社交能力强的自由精神，总能找到理由微笑。',
  group: 'diplomat',
  groupName: '外交家族群',
  traits: {
    extraversion: 75,
    sensing: 25,
    thinking: 35,
    judging: 30
  },
  fullDescription: '竞选者 (ENFP) 是充满热情和创造力的人格类型，以其开放的心态和适应能力而闻名。他们善于看到可能性并激发他人的潜能。ENFPs 通常充满活力、富有同情心，并且渴望与他人建立真实的联系。他们的思维既有创新性又有灵活性，总是寻找新的想法和体验。',
  characteristics: [
    {
      title: '热情洋溢',
      description: '对生活和新体验充满热情，能够感染周围的人。'
    },
    {
      title: '创意思维',
      description: '思维灵活多变，善于发现新的可能性和创新解决方案。'
    },
    {
      title: '人际敏感',
      description: '对他人的情感和需求有很强的感知能力，善于建立联系。'
    },
    {
      title: '适应力强',
      description: '能够轻松适应变化和新环境，享受多样性和自发性。'
    },
    {
      title: '好奇心强',
      description: '对世界充满好奇，不断探索新想法、概念和可能性。'
    },
    {
      title: '重视真实',
      description: '追求真实的自我表达和关系，不喜欢表面或虚假的互动。'
    }
  ],
  strengths: [
    '出色的沟通和表达能力',
    '创造性和创新思维',
    '适应力强和灵活性高',
    '善于激励和鼓舞他人',
    '强烈的同理心和人际敏感度',
    '解决问题的创新方法',
    '对新想法和可能性的开放态度'
  ],
  weaknesses: [
    '可能难以专注和坚持长期项目',
    '有时过于理想化或不切实际',
    '可能情绪波动较大',
    '不喜欢处理细节和日常事务',
    '有时难以做出决定',
    '可能过度承诺或分散精力',
    '对批评和冲突可能敏感'
  ],
  careers: [
    {
      category: '创意与艺术',
      jobs: ['创意总监', '艺术家', '作家', '演员', '音乐家']
    },
    {
      category: '教育与培训',
      jobs: ['教师', '培训师', '教育顾问', '职业指导顾问']
    },
    {
      category: '市场与传播',
      jobs: ['市场营销专家', '公关顾问', '广告创意', '社交媒体经理']
    },
    {
      category: '人际服务',
      jobs: ['心理咨询师', '人力资源专家', '社区组织者', '非营利组织工作者']
    }
  ],
  relationships: {
    strengths: [
      '热情且富有表现力',
      '善于理解伴侣的情感需求',
      '创造性地解决关系问题',
      '保持关系的新鲜感和活力',
      '愿意成长和适应变化'
    ],
    challenges: [
      '可能难以处理日常关系的实际细节',
      '有时情绪波动较大',
      '可能难以长期专注于关系问题',
      '有时过于理想化关系',
      '可能回避冲突或困难对话'
    ],
    compatibleTypes: [
      {
        type: 'INFJ',
        name: '提倡者',
        compatibility: 'high',
        description: 'INFJ的深度和洞察力与ENFP的热情和创造力形成良好互补，两者都重视真实性和个人成长。'
      },
      {
        type: 'INTJ',
        name: '建筑师',
        compatibility: 'high',
        description: 'INTJ的深度和战略思维与ENFP的热情和创造力相结合，创造出既有深度又有活力的关系。'
      },
      {
        type: 'INFP',
        name: '调停者',
        compatibility: 'medium',
        description: '两者都是理想主义者，重视真实性和个人价值，但ENFP更外向和活跃，而INFP更内省和安静。'
      }
    ],
    communicationTips: [
      '练习专注倾听，不要急于表达自己的想法',
      '学会处理关系中的实际细节和责任',
      '在做出承诺前仔细考虑',
      '直接面对冲突，而不是回避',
      '给予伴侣独处的空间和时间'
    ]
  }
};

export default enfp; 