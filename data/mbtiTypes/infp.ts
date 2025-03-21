import { MBTIType } from './types';

const infp: MBTIType = {
  type: 'INFP',
  name: '调停者',
  description: '诗意、善良且利他的理想主义者，总是热心帮助正义的事业。',
  group: 'diplomat',
  groupName: '外交家族群',
  traits: {
    extraversion: 20,
    sensing: 25,
    thinking: 30,
    judging: 25
  },
  fullDescription: '调停者 (INFP) 是敏感、富有创造力且极具理想主义的人格类型，以其深厚的价值观、同理心和对真实性的追求而著称。他们通常安静而内省，但内心拥有强烈的热情和信念。INFPs重视个人成长和寻找生活的意义，常常致力于帮助他人和改善世界。他们具有丰富的想象力和创造力，善于通过艺术、写作或其他形式表达自己的想法和情感。他们对他人的痛苦和不公正现象特别敏感，经常成为弱势群体的倡导者。',
  characteristics: [
    {
      title: '理想主义',
      description: '拥有强烈的个人价值观和理想，追求更美好、更和谐的世界。'
    },
    {
      title: '同理心强',
      description: '深刻理解他人的情感和需求，能够站在他人的角度思考问题。'
    },
    {
      title: '创造力强',
      description: '具有丰富的想象力和创造力，善于以独特的方式表达思想和情感。'
    },
    {
      title: '真实性',
      description: '高度重视真实和诚实，追求与自己的价值观和信念保持一致。'
    },
    {
      title: '内省深刻',
      description: '经常深入思考生活的意义和目的，追求个人成长和自我了解。'
    },
    {
      title: '开放包容',
      description: '尊重多样性和个体差异，愿意接受不同的观点和生活方式。'
    }
  ],
  strengths: [
    '深厚的同理心和理解力',
    '强烈的创造力和想象力',
    '对个人价值观的坚定承诺',
    '对真实性和诚实的追求',
    '善于倾听和提供情感支持',
    '对他人的需求和感受敏感',
    '在冲突中寻求和谐的能力'
  ],
  weaknesses: [
    '可能过于理想化或不切实际',
    '有时过于敏感或情绪化',
    '可能难以接受批评或负面反馈',
    '有时回避冲突和困难对话',
    '可能过于完美主义或自我批评',
    '有时难以做出实际决策',
    '可能过于私密或难以接近'
  ],
  careers: [
    {
      category: '创意与艺术',
      jobs: ['作家', '诗人', '艺术家', '音乐家', '摄影师']
    },
    {
      category: '咨询与心理健康',
      jobs: ['心理咨询师', '艺术治疗师', '社会工作者', '生涯顾问', '儿童发展专家']
    },
    {
      category: '教育与研究',
      jobs: ['教师', '图书管理员', '研究员', '特殊教育教师', '教育顾问']
    },
    {
      category: '人道主义与非营利组织',
      jobs: ['非营利组织工作者', '环保活动家', '人权倡导者', '慈善组织协调员', '社区服务管理者']
    },
    {
      category: '健康与福祉',
      jobs: ['营养师', '瑜伽教练', '替代医学从业者', '健康教育者', '心灵导师']
    }
  ],
  relationships: {
    strengths: [
      '深度关怀和理解伴侣',
      '忠诚和全心投入关系',
      '善于倾听和提供情感支持',
      '尊重伴侣的独立性和个性',
      '致力于关系的真实性和深度'
    ],
    challenges: [
      '可能难以表达负面情绪或不满',
      '有时过于理想化关系',
      '可能回避冲突和困难对话',
      '有时过于敏感或容易受伤',
      '可能过于私密或难以完全敞开心扉'
    ],
    compatibleTypes: [
      {
        type: 'ENFJ',
        name: '主人公',
        compatibility: 'high',
        description: 'ENFJ的外向和组织能力与INFP的内省和创造力形成良好互补，两者都重视真实性和个人成长。'
      },
      {
        type: 'ENTJ',
        name: '指挥官',
        compatibility: 'medium',
        description: 'ENTJ的决断力和目标导向可以平衡INFP的理想主义和犹豫不决，但可能在情感表达和决策方式上存在差异。'
      },
      {
        type: 'INFJ',
        name: '提倡者',
        compatibility: 'high',
        description: '两者都是理想主义者，重视深度和真实性，能够建立基于相互理解和共同价值观的深厚关系。'
      }
    ],
    communicationTips: [
      '学习更直接地表达你的需求和界限',
      '不要回避必要的冲突和困难对话',
      '接受关系中的不完美和妥协',
      '对批评保持开放态度，不要过于敏感',
      '与伴侣分享你的内心世界和深层想法'
    ]
  }
};

export default infp;