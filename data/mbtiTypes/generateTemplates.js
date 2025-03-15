const fs = require('fs');
const path = require('path');

// 剩余需要创建的MBTI类型
const remainingTypes = [
  'intp', 'entj', 'entp',
  'infp', 'enfj',
  'istj', 'isfj', 'estj', 'esfj',
  'istp', 'isfp', 'estp', 'esfp'
];

// 模板内容
const getTemplateContent = (type) => `import { MBTIType } from './index';

const ${type.toLowerCase()}: MBTIType = {
  type: '${type.toUpperCase()}',
  name: '', // 请填写类型名称
  description: '', // 请填写简短描述
  group: '', // 请填写所属群组: analyst, diplomat, sentinel, explorer
  groupName: '', // 请填写群组名称
  traits: {
    extraversion: 0, // 请填写外向性分数 (0-100)
    sensing: 0, // 请填写感觉性分数 (0-100)
    thinking: 0, // 请填写思考性分数 (0-100)
    judging: 0 // 请填写判断性分数 (0-100)
  },
  fullDescription: '', // 请填写完整描述
  characteristics: [
    {
      title: '', // 特征标题
      description: '' // 特征描述
    },
    // 请添加更多特征
  ],
  strengths: [
    // 请填写优势列表
  ],
  weaknesses: [
    // 请填写劣势列表
  ],
  careers: [
    {
      category: '', // 职业类别
      jobs: [''] // 职业列表
    },
    // 请添加更多职业类别
  ],
  relationships: {
    strengths: [
      // 请填写关系优势
    ],
    challenges: [
      // 请填写关系挑战
    ],
    compatibleTypes: [
      {
        type: '', // 兼容类型代码
        name: '', // 兼容类型名称
        compatibility: '', // high, medium, low
        description: '' // 兼容性描述
      },
      // 请添加更多兼容类型
    ],
    communicationTips: [
      // 请填写沟通技巧
    ]
  }
};

export default ${type.toLowerCase()};`;

// 创建模板文件
remainingTypes.forEach(type => {
  const filePath = path.join(__dirname, `${type.toLowerCase()}.ts`);
  fs.writeFileSync(filePath, getTemplateContent(type));
  console.log(`Created template for ${type}`);
});

console.log('All templates created successfully!'); 