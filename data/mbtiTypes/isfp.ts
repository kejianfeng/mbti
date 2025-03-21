import { MBTIType } from './types';

const isfp: MBTIType = {
  type: 'ISFP',
  name: '探险家',
  description: '灵活、魅力四射的艺术家，随时准备探索和体验新事物。',
  group: 'explorer',
  groupName: '探险家族群',
  traits: {
    extraversion: 25,
    sensing: 70,
    thinking: 35,
    judging: 20
  },
  fullDescription: '探险家 (ISFP) 是敏感、艺术且和平主义的人格类型，以其创造力、审美感和对真实性的追求而著称。他们通常安静而谦逊，但内心拥有丰富的情感和深刻的价值观。ISFPs喜欢自由和灵活性，抵制严格的规则和结构。他们对美学和感官体验有很强的欣赏能力，常常通过艺术、音乐、烹饪或其他创造性表达方式展现自己的才华。他们重视和谐与真实，在与他人互动时表现得温和而体贴。',
  characteristics: [
    {
      title: '创造力强',
      description: '具有天生的审美感和创造力，善于以艺术和实用的方式表达自己。'
    },
    {
      title: '真实性',
      description: '高度重视真实和诚实，追求与自己的价值观和信念保持一致。'
    },
    {
      title: '灵活适应',
      description: '喜欢自由和灵活性，能够轻松适应变化和新环境。'
    },
    {
      title: '感官敏锐',
      description: '对美学和感官体验有很强的感知能力，注重当下的体验和享受。'
    },
    {
      title: '和平主义',
      description: '追求和谐与平静，避免冲突和对抗，尊重他人的个性和空间。'
    },
    {
      title: '实用主义',
      description: '尽管有艺术气质，但也很实际，喜欢通过具体行动解决问题。'
    }
  ],
  strengths: [
    '强烈的创造力和审美感',
    '对他人的需求和感受敏感',
    '适应力强和灵活性高',
    '实际的问题解决能力',
    '真诚和忠于自我',
    '和平与和谐的促进者',
    '对当下的专注和感知能力'
  ],
  weaknesses: [
    '可能过于保留或难以表达自己',
    '有时过于敏感或容易受伤',
    '可能回避冲突和困难对话',
    '有时难以长期规划或设定目标',
    '可能过于独立或抵制外部结构',
    '有时对批评反应强烈',
    '可能难以做出重大决定'
  ],
  careers: [
    {
      category: '艺术与设计',
      jobs: ['艺术家', '平面设计师', '摄影师', '室内设计师', '时装设计师']
    },
    {
      category: '医疗与健康',
      jobs: ['按摩治疗师', '营养师', '兽医', '物理治疗师', '健康教练']
    },
    {
      category: '教育与服务',
      jobs: ['幼儿教师', '特殊教育教师', '社会工作者', '辅导员', '个人教练']
    },
    {
      category: '自然与环境',
      jobs: ['园艺师', '景观设计师', '环保工作者', '动物护理员', '自然保护区工作者']
    },
    {
      category: '创意与表演',
      jobs: ['音乐家', '厨师', '工艺艺术家', '舞者', '作家']
    }
  ],
  relationships: {
    strengths: [
      '真诚和忠实',
      '敏感和体贴伴侣的需求',
      '尊重伴侣的独立性和空间',
      '创造和谐与平静的环境',
      '通过行动而非言语表达爱意'
    ],
    challenges: [
      '可能难以言语表达情感和需求',
      '有时回避冲突和困难对话',
      '可能过于独立或需要过多空间',
      '有时对批评和负面反馈敏感',
      '可能难以讨论长期计划和承诺'
    ],
    compatibleTypes: [
      {
        type: 'ESTJ',
        name: '总经理',
        compatibility: 'medium',
        description: 'ESTJ的结构化和组织能力可以平衡ISFP的灵活性和自发性，而ISFP则能为ESTJ带来更多创造力和情感深度。'
      },
      {
        type: 'ESFJ',
        name: '执政官',
        compatibility: 'high',
        description: 'ESFJ的社交能力和关怀精神与ISFP的创造力和真实性形成良好互补，两者都重视和谐与关系。'
      },
      {
        type: 'ENFJ',
        name: '主人公',
        compatibility: 'high',
        description: 'ENFJ的热情和组织能力与ISFP的创造力和真实性相结合，创造出既有深度又有方向的关系。'
      }
    ],
    communicationTips: [
      '尝试更直接地表达你的感受和需求',
      '不要回避必要的冲突和困难对话',
      '与伴侣分享你的长期目标和愿望',
      '学习接受建设性批评',
      '在需要独处时明确沟通，而不是简单地退缩'
    ]
  }
};

export default isfp;