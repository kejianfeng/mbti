import { MBTIType } from './types';

const estp: MBTIType = {
  type: 'ESTP',
  name: '企业家',
  description: '聪明、精力充沛、善于察言观色的人，享受冒险和物质享受。',
  group: 'explorer',
  groupName: '探险家族群',
  traits: {
    extraversion: 80,
    sensing: 75,
    thinking: 65,
    judging: 20
  },
  fullDescription: '企业家 (ESTP) 是活力四射、实际且机智灵活的人格类型，以其冒险精神、适应能力和解决问题的实用方法而著称。他们是天生的行动者，喜欢身处事物中心，迅速应对挑战并把握机会。ESTPs通常直接坦率，享受当下的体验，而不过多担忧未来。他们具有出色的观察力，能够迅速察觉环境变化并做出相应调整。他们更关注具体事实和实际经验，而非抽象理论或未来可能性。他们的决策通常基于逻辑和效率，但也考虑到实际情况和灵活性。他们喜欢自由和变化，对规则和限制感到不耐烦。',
  characteristics: [
    {
      title: '行动导向',
      description: '喜欢直接行动而非长时间规划，能够迅速应对挑战和把握机会。'
    },
    {
      title: '适应性强',
      description: '能够快速适应新环境和变化，灵活应对不同情况。'
    },
    {
      title: '实用主义',
      description: '注重实际和具体的解决方案，关注能够产生立即结果的方法。'
    },
    {
      title: '社交能力强',
      description: '通常魅力四射，善于与各种人交往，享受社交互动。'
    },
    {
      title: '冒险精神',
      description: '喜欢刺激和冒险，愿意尝试新事物和承担风险。'
    },
    {
      title: '观察力敏锐',
      description: '对周围环境和人物有着敏锐的观察力，能够迅速察觉细节和变化。'
    }
  ],
  strengths: [
    '出色的问题解决能力',
    '适应性强，能够灵活应对变化',
    '实际和务实的行动方式',
    '良好的社交和沟通技巧',
    '在压力下保持冷静和机智',
    '享受当下的能力',
    '勇于冒险和尝试新事物'
  ],
  weaknesses: [
    '可能缺乏长期规划和耐心',
    '有时过于冲动或寻求刺激',
    '可能对规则和传统不够重视',
    '有时对他人的情感需求不够敏感',
    '可能难以承诺或坚持长期项目',
    '有时过于关注实际而忽视未来影响',
    '可能对理论和抽象概念缺乏兴趣'
  ],
  careers: [
    {
      category: '销售与营销',
      jobs: ['销售代表', '市场营销专员', '房地产经纪人', '广告执行', '零售经理']
    },
    {
      category: '创业与商业',
      jobs: ['创业者', '商业顾问', '项目经理', '风险投资家', '谈判专家']
    },
    {
      category: '紧急服务与执法',
      jobs: ['警察', '消防员', '急救医疗技术员', '搜救队员', '军事人员']
    },
    {
      category: '体育与娱乐',
      jobs: ['运动员', '健身教练', '体育教练', '娱乐主持人', '特技表演者']
    },
    {
      category: '技术与工程',
      jobs: ['机械工程师', '建筑工程师', '飞行员', '技术支持专家', '现场技术员']
    }
  ],
  relationships: {
    strengths: [
      '乐观和充满活力',
      '解决实际问题的能力',
      '适应性强，愿意尝试新事物',
      '直接坦率的沟通风格',
      '在关系中带来刺激和冒险'
    ],
    challenges: [
      '可能难以表达或处理深层情感',
      '有时对承诺和长期规划感到不适',
      '可能对伴侣的情感需求不够敏感',
      '有时过于关注当下而忽视未来',
      '可能对规则和责任感到不耐烦'
    ],
    compatibleTypes: [
      {
        type: 'ISFJ',
        name: '守卫者',
        compatibility: 'medium',
        description: 'ISFJ的关怀和稳定性与ESTP的活力和适应性形成互补，ISFJ可以为ESTP提供情感支持和稳定性。'
      },
      {
        type: 'ISTJ',
        name: '物流师',
        compatibility: 'medium',
        description: 'ISTJ的组织能力和责任感与ESTP的适应性和行动力相结合，创造出既有结构又有灵活性的关系。'
      },
      {
        type: 'ESFJ',
        name: '执政官',
        compatibility: 'high',
        description: '两者都重视实际和具体的体验，ESFJ的关怀和组织能力与ESTP的适应性和冒险精神形成良好互补。'
      }
    ],
    communicationTips: [
      '尝试更多地关注伴侣的情感需求和感受',
      '学习表达更深层次的情感和想法',
      '在关系中培养更多的耐心和承诺',
      '尝试更多地考虑行动的长期影响',
      '对伴侣的不同观点和需求保持开放态度'
    ]
  }
};

export default estp;