/**
 * 这个脚本用于修复所有MBTI类型文件的导入语句
 */

const fs = require('fs');
const path = require('path');

// 所有MBTI类型
const allTypes = [
  'intp', 'entj', 'entp',
  'infp', 'enfj',
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
  
  // 修复导入语句
  if (content.includes("import { MBTIType } from './index';")) {
    content = content.replace("import { MBTIType } from './index';", "import { MBTIType } from './types';");
    
    // 写入文件
    fs.writeFileSync(filePath, content);
    console.log(`修复了文件导入: ${type}.ts`);
  } else {
    console.log(`文件导入正常: ${type}.ts`);
  }
});

console.log('所有文件导入修复完成!'); 