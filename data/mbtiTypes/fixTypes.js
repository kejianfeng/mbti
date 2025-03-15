/**
 * 这个脚本用于修复所有MBTI类型文件的基本结构，确保它们至少有最小的必要数据
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

// 类型分组
const typeGroups = {
  'intj': { group: 'analyst', groupName: '分析家族群' },
  'intp': { group: 'analyst', groupName: '分析家族群' },
  'entj': { group: 'analyst', groupName: '分析家族群' },
  'entp': { group: 'analyst', groupName: '分析家族群' },
  'infj': { group: 'diplomat', groupName: '外交家族群' },
  'infp': { group: 'diplomat', groupName: '外交家族群' },
  'enfj': { group: 'diplomat', groupName: '外交家族群' },
  'enfp': { group: 'diplomat', groupName: '外交家族群' },
  'istj': { group: 'sentinel', groupName: '哨兵族群' },
  'isfj': { group: 'sentinel', groupName: '哨兵族群' },
  'estj': { group: 'sentinel', groupName: '哨兵族群' },
  'esfj': { group: 'sentinel', groupName: '哨兵族群' },
  'istp': { group: 'explorer', groupName: '探险家族群' },
  'isfp': { group: 'explorer', groupName: '探险家族群' },
  'estp': { group: 'explorer', groupName: '探险家族群' },
  'esfp': { group: 'explorer', groupName: '探险家族群' }
};

// 类型名称
const typeNames = {
  'intj': '建筑师',
  'intp': '逻辑学家',
  'entj': '指挥官',
  'entp': '辩论家',
  'infj': '提倡者',
  'infp': '调停者',
  'enfj': '主人公',
  'enfp': '竞选者',
  'istj': '物流师',
  'isfj': '守卫者',
  'estj': '总经理',
  'esfj': '执政官',
  'istp': '鉴赏家',
  'isfp': '探险家',
  'estp': '企业家',
  'esfp': '表演者'
};

// 类型描述
const typeDescriptions = {
  'intj': '富有想象力和战略性的思想家，拥有一切实现目标的计划。',
  'intp': '具有创造力的发明家，对知识有着不可抑制的渴望。',
  'entj': '大胆、富有想象力且意志坚强的领导者，总能找到或创造解决方案。',
  'entp': '聪明好奇的思想家，不会放过任何智力上的挑战。',
  'infj': '安静而神秘，但极具启发性和不知疲倦的理想主义者。',
  'infp': '诗意、善良的利他主义者，总是热切地为正面变化而战。',
  'enfj': '富有魅力和鼓舞人心的领导者，能够吸引听众。',
  'enfp': '热情、有创造力、社交能力强的自由精神，总能找到理由微笑。',
  'istj': '实际且注重事实的个人，其可靠性是无可置疑的。',
  'isfj': '非常专注和温暖的保护者，时刻准备保护他们所爱的人。',
  'estj': '出色的管理者，对细节有着非凡的关注，并努力维护社会秩序。',
  'esfj': '非常关心他人，善于社交和受欢迎，总是热心帮助他人。',
  'istp': '大胆而实际的实验者，掌握各种工具的主人。',
  'isfp': '灵活且有魅力的艺术家，随时准备探索和体验新事物。',
  'estp': '聪明、精力充沛且非常善于感知的人，真正享受冒险。',
  'esfp': '自发的、精力充沛的表演者，生活永远不会在他们身边变得无聊。'
};

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
  
  // 如果文件内容已经完整，则跳过
  if (content.includes(`name: '${typeNames[type]}'`) && 
      content.includes(`description: '${typeDescriptions[type]}'`)) {
    console.log(`文件已完整: ${type}.ts`);
    return;
  }
  
  // 替换基本字段
  content = content.replace(/name: ['"].*['"],/, `name: '${typeNames[type]}',`);
  content = content.replace(/description: ['"].*['"],/, `description: '${typeDescriptions[type]}',`);
  content = content.replace(/group: ['"].*['"],/, `group: '${typeGroups[type].group}',`);
  content = content.replace(/groupName: ['"].*['"],/, `groupName: '${typeGroups[type].groupName}',`);
  
  // 添加基本的特质数据
  content = content.replace(/traits: {[^}]+}/s, `traits: {
    extraversion: ${type.charAt(0) === 'e' ? 75 : 25},
    sensing: ${type.charAt(1) === 's' ? 75 : 25},
    thinking: ${type.charAt(2) === 't' ? 75 : 25},
    judging: ${type.charAt(3) === 'j' ? 75 : 25}
  }`);
  
  // 添加基本的全面描述
  content = content.replace(/fullDescription: ['"].*['"],/, `fullDescription: '${typeDescriptions[type]} 这是${typeNames[type]}类型的基本描述，需要进一步完善。',`);
  
  // 添加基本的特征
  content = content.replace(/characteristics: \[[^\]]*\],/s, `characteristics: [
    {
      title: '主要特征',
      description: '这是${typeNames[type]}类型的主要特征描述，需要进一步完善。'
    }
  ],`);
  
  // 添加基本的优势
  content = content.replace(/strengths: \[[^\]]*\],/s, `strengths: [
    '这是${typeNames[type]}类型的优势，需要进一步完善'
  ],`);
  
  // 添加基本的劣势
  content = content.replace(/weaknesses: \[[^\]]*\],/s, `weaknesses: [
    '这是${typeNames[type]}类型的劣势，需要进一步完善'
  ],`);
  
  // 添加基本的职业
  content = content.replace(/careers: \[[^\]]*\],/s, `careers: [
    {
      category: '职业类别',
      jobs: ['职业1', '职业2']
    }
  ],`);
  
  // 添加基本的关系信息
  content = content.replace(/relationships: {[^}]*}/s, `relationships: {
    strengths: [
      '关系优势1'
    ],
    challenges: [
      '关系挑战1'
    ],
    compatibleTypes: [
      {
        type: '兼容类型',
        name: '兼容类型名称',
        compatibility: 'medium',
        description: '兼容性描述'
      }
    ],
    communicationTips: [
      '沟通技巧1'
    ]
  }`);
  
  // 写入文件
  fs.writeFileSync(filePath, content);
  console.log(`修复了文件: ${type}.ts`);
});

console.log('所有类型文件修复完成!'); 