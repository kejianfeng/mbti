/**
 * 这个脚本用于修复MBTI类型文件中的语法错误
 */

const fs = require('fs');
const path = require('path');

// 所有MBTI类型
const allTypes = [
  'intj', 'intp', 'entj', 'entp',
  'infj', 'infp', 'enfj', 'enfp',
  'istj', 'isfj', 'estj', 'esfj',
  'istp', 'isfp', 'estp', 'esfp'
];

// 修复类型文件
allTypes.forEach(type => {
  const filePath = path.join(__dirname, `${type}.ts`);
  
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    console.log(`文件不存在: ${filePath}`);
    return;
  }
  
  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 检查是否有语法错误
  if (content.includes('  },\n      // 请添加更多兼容类型\n    ],')) {
    // 修复语法错误
    content = content.replace(/  },\n      \/\/ 请添加更多兼容类型\n    ],\n    communicationTips: \[\n      \/\/ 请填写沟通技巧\n    ]\n  }/s, '  }');
    
    // 写入文件
    fs.writeFileSync(filePath, content);
    console.log(`修复了文件语法: ${type}.ts`);
  } else {
    console.log(`文件语法正常: ${type}.ts`);
  }
});

// 创建正确的模板文件
const templateContent = `import { MBTIType } from './index';

const TYPE_CODE: MBTIType = {
  type: 'TYPE_CODE_UPPER',
  name: 'TYPE_NAME',
  description: 'TYPE_DESCRIPTION',
  group: 'TYPE_GROUP',
  groupName: 'TYPE_GROUP_NAME',
  traits: {
    extraversion: EXTRAVERSION_SCORE,
    sensing: SENSING_SCORE,
    thinking: THINKING_SCORE,
    judging: JUDGING_SCORE
  },
  fullDescription: 'TYPE_FULL_DESCRIPTION',
  characteristics: [
    {
      title: 'CHARACTERISTIC_TITLE',
      description: 'CHARACTERISTIC_DESCRIPTION'
    }
    // 可以添加更多特征
  ],
  strengths: [
    'STRENGTH_1',
    'STRENGTH_2'
    // 可以添加更多优势
  ],
  weaknesses: [
    'WEAKNESS_1',
    'WEAKNESS_2'
    // 可以添加更多劣势
  ],
  careers: [
    {
      category: 'CAREER_CATEGORY',
      jobs: ['JOB_1', 'JOB_2']
    }
    // 可以添加更多职业类别
  ],
  relationships: {
    strengths: [
      'RELATIONSHIP_STRENGTH_1',
      'RELATIONSHIP_STRENGTH_2'
    ],
    challenges: [
      'RELATIONSHIP_CHALLENGE_1',
      'RELATIONSHIP_CHALLENGE_2'
    ],
    compatibleTypes: [
      {
        type: 'COMPATIBLE_TYPE_CODE',
        name: 'COMPATIBLE_TYPE_NAME',
        compatibility: 'COMPATIBILITY_LEVEL',
        description: 'COMPATIBILITY_DESCRIPTION'
      }
      // 可以添加更多兼容类型
    ],
    communicationTips: [
      'COMMUNICATION_TIP_1',
      'COMMUNICATION_TIP_2'
    ]
  }
};

export default TYPE_CODE;`;

// 保存模板文件
fs.writeFileSync(path.join(__dirname, 'template.ts'), templateContent);
console.log('创建了正确的模板文件: template.ts');

console.log('所有文件语法修复完成!'); 