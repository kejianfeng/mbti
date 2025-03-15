import { MBTIType } from './types';

const intj: MBTIType = {
  type: 'INTJ',
  name: '建筑师',
  description: '富有想象力和战略性的思想家，拥有一切实现目标的计划。',
  group: 'analyst',
  groupName: '分析家族群',
  traits: {
    extraversion: 22,
    sensing: 24,
    thinking: 79,
    judging: 81
  },
  fullDescription: '建筑师 (INTJ) 是稀有但具有影响力的人格类型，以其战略思维和创新能力而闻名。他们善于看到系统和计划中的改进空间，并将其愿景转化为现实。INTJs 通常独立、理性且注重效率，他们的思维方式既有深度又有前瞻性。',
  characteristics: [
    {
      title: '战略思考',
      description: '能够看到模式并制定长期计划，总是考虑未来的可能性和影响。'
    },
    {
      title: '独立自主',
      description: '高度自给自足，喜欢独立工作，并按照自己的标准和愿景行事。'
    },
    {
      title: '追求知识',
      description: '终身学习者，不断寻求扩展知识和理解复杂概念。'
    },
    {
      title: '高标准',
      description: '对自己和他人都有极高的期望，追求卓越和持续改进。'
    },
    {
      title: '理性决策',
      description: '基于逻辑和客观分析做决定，而不是情感或社会期望。'
    },
    {
      title: '创新思维',
      description: '能够以新颖和创造性的方式解决问题，挑战传统思维。'
    }
  ],
  strengths: [
    '战略规划和系统思考能力强',
    '高度独立和自我激励',
    '对复杂问题有深刻的洞察力',
    '持续学习和自我提升',
    '能够看到长期愿景并为之努力',
    '在压力下保持冷静和理性',
    '诚实直接，不玩政治游戏'
  ],
  weaknesses: [
    '可能显得傲慢或过于批判',
    '有时对情感需求不够敏感',
    '可能过于完美主义',
    '不耐烦对待他人的效率低下',
    '在社交场合可能显得疏远或冷漠',
    '不善于处理高度情感化的情境',
    '可能过于独立，不愿寻求帮助'
  ],
  careers: [
    {
      category: '科学与研究',
      jobs: ['科学家', '研究员', '数据分析师', '系统分析师']
    },
    {
      category: '技术与工程',
      jobs: ['软件架构师', '网络安全专家', '系统工程师', 'IT战略顾问']
    },
    {
      category: '商业与管理',
      jobs: ['战略顾问', '投资银行家', '企业家', '项目经理']
    },
    {
      category: '学术与教育',
      jobs: ['大学教授', '研究主任', '教育政策分析师']
    }
  ],
  relationships: {
    strengths: [
      '忠诚且承诺长期关系',
      '提供深思熟虑的建议和支持',
      '尊重伴侣的独立性和个人空间',
      '愿意为关系成长而改变',
      '在解决问题时保持冷静和理性'
    ],
    challenges: [
      '可能难以表达情感和感受',
      '有时过于理性，忽视情感需求',
      '可能对伴侣过于批判',
      '在亲密关系中可能显得疏远',
      '不善于处理高度情感化的冲突'
    ],
    compatibleTypes: [
      {
        type: 'ENFP',
        name: '竞选者',
        compatibility: 'high',
        description: 'ENFP的热情和创造力与INTJ的深度和战略思维形成良好互补，两者都重视独立性和智力成长。'
      },
      {
        type: 'ENTP',
        name: '辩论家',
        compatibility: 'high',
        description: '两种类型都享受智力挑战和深度对话，ENTP的创新思维与INTJ的战略规划能力相得益彰。'
      },
      {
        type: 'INFJ',
        name: '提倡者',
        compatibility: 'medium',
        description: '两者都是有远见的战略思考者，但INFJ更注重情感和人际和谐，而INTJ更注重逻辑和效率。'
      }
    ],
    communicationTips: [
      '练习表达感受和情感需求',
      '记住不是每个问题都需要立即解决',
      '欣赏伴侣的情感智能和社交技能',
      '在提供批评前先表达欣赏',
      '允许伴侣有不同的沟通和处理冲突的方式'
    ]
  }
};

export default intj; 