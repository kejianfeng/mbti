import { MBTIType } from './types';

const infj: MBTIType = {
  type: 'INFJ',
  name: '提倡者',
  description: '安静而神秘，但极具启发性和不知疲倦的理想主义者。',
  group: 'diplomat',
  groupName: '外交家族群',
  traits: {
    extraversion: 25,
    sensing: 20,
    thinking: 40,
    judging: 70
  },
  fullDescription: '提倡者 (INFJ) 是最稀有的人格类型之一，具有深刻的洞察力和强烈的同理心。他们善于理解他人的情感和动机，常常致力于帮助他人实现潜能。INFJs 通常安静而有远见，他们将理想主义与决心结合，努力创造更美好的世界。',
  characteristics: [
    {
      title: '深刻洞察力',
      description: '能够直觉地理解复杂的人际关系和情感模式，看透表面现象。'
    },
    {
      title: '强烈同理心',
      description: '深刻理解并感受他人的情感，常常能准确把握他人的需求和动机。'
    },
    {
      title: '坚定的理想主义',
      description: '对未来有清晰的愿景，并致力于实现对更美好世界的向往。'
    },
    {
      title: '创造性思维',
      description: '善于以独特和创新的方式解决问题，特别是涉及人际关系的问题。'
    },
    {
      title: '追求真实',
      description: '重视真诚和真实的关系，不喜欢表面的社交互动。'
    },
    {
      title: '内省与自我反思',
      description: '经常深入思考自己的想法、感受和行为，追求个人成长。'
    }
  ],
  strengths: [
    '深刻的洞察力和直觉',
    '强烈的同理心和理解力',
    '创造性解决问题的能力',
    '对他人的需求敏感',
    '坚定的价值观和原则',
    '良好的书面表达能力',
    '对复杂概念的理解力'
  ],
  weaknesses: [
    '可能过于理想化或完美主义',
    '有时过于敏感和情绪化',
    '可能难以接受批评',
    '容易精疲力竭和情感耗尽',
    '可能过于私密和难以接近',
    '有时对自己和他人期望过高',
    '可能忽视自身需求而过度关注他人'
  ],
  careers: [
    {
      category: '咨询与治疗',
      jobs: ['心理咨询师', '治疗师', '社会工作者', '生涯顾问']
    },
    {
      category: '教育与研究',
      jobs: ['教师', '教授', '研究员', '教育顾问']
    },
    {
      category: '创意与写作',
      jobs: ['作家', '编辑', '内容创作者', '诗人']
    },
    {
      category: '人力资源与发展',
      jobs: ['人力资源专家', '组织发展顾问', '培训师']
    }
  ],
  relationships: {
    strengths: [
      '深度理解伴侣的需求和感受',
      '忠诚且全心投入关系',
      '善于倾听和提供情感支持',
      '寻求有意义的连接和成长',
      '愿意为关系付出努力'
    ],
    challenges: [
      '可能过于理想化关系',
      '有时难以表达自己的需求',
      '可能过度分析关系动态',
      '需要大量独处时间',
      '可能对冲突感到不适'
    ],
    compatibleTypes: [
      {
        type: 'ENFP',
        name: '竞选者',
        compatibility: 'high',
        description: 'ENFP的热情和创造力与INFJ的深度和洞察力形成良好互补，两者都重视真实性和个人成长。'
      },
      {
        type: 'ENTP',
        name: '辩论家',
        compatibility: 'high',
        description: 'ENTP的创新思维和开放性与INFJ的深度和远见相结合，创造出充满智力刺激的关系。'
      },
      {
        type: 'INTJ',
        name: '建筑师',
        compatibility: 'medium',
        description: '两者都是有远见的战略思考者，但INFJ更注重情感和人际和谐，而INTJ更注重逻辑和效率。'
      }
    ],
    communicationTips: [
      '表达你的需求和界限',
      '避免过度牺牲自己来取悦他人',
      '学会接受建设性批评',
      '在感到压力时寻求独处时间',
      '与伴侣分享你的内心世界和想法'
    ]
  }
};

export default infj; 