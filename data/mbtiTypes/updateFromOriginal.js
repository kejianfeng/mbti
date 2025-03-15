/**
 * 这个脚本用于从原始的mbtiTypes.ts文件中提取数据，并填充到新的模板文件中
 * 
 * 使用方法：
 * 1. 将原始的mbtiTypes.ts文件内容复制到下面的originalData变量中
 * 2. 运行脚本: node updateFromOriginal.js
 * 3. 脚本会尝试提取数据并更新对应的类型文件
 */

const fs = require('fs');
const path = require('path');

// 这里需要粘贴原始的mbtiTypes.ts文件内容
const originalData = `
// 在这里粘贴原始的mbtiTypes.ts文件内容
`;

// 解析原始数据
function parseOriginalData(data) {
  const typeData = {};
  
  // 使用正则表达式提取各个类型的数据
  const typeRegex = /(\w{4}):\s*{([^}]+type:\s*['"](\w{4})['"][^}]+)}/g;
  let match;
  
  while ((match = typeRegex.exec(data)) !== null) {
    const typeCode = match[1].toLowerCase();
    const typeContent = match[2];
    
    // 提取各个字段
    const nameMatch = /name:\s*['"]([^'"]+)['"]/i.exec(typeContent);
    const descMatch = /description:\s*['"]([^'"]+)['"]/i.exec(typeContent);
    const groupMatch = /group:\s*['"]([^'"]+)['"]/i.exec(typeContent);
    const groupNameMatch = /groupName:\s*['"]([^'"]+)['"]/i.exec(typeContent);
    
    // 创建类型对象
    typeData[typeCode] = {
      name: nameMatch ? nameMatch[1] : '',
      description: descMatch ? descMatch[1] : '',
      group: groupMatch ? groupMatch[1] : '',
      groupName: groupNameMatch ? groupNameMatch[1] : ''
    };
  }
  
  return typeData;
}

// 更新模板文件
function updateTemplateFiles(typeData) {
  Object.keys(typeData).forEach(typeCode => {
    const filePath = path.join(__dirname, `${typeCode}.ts`);
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      console.log(`文件不存在: ${filePath}`);
      return;
    }
    
    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 替换字段
    const data = typeData[typeCode];
    content = content.replace(/name: ['"].*['"],/, `name: '${data.name}',`);
    content = content.replace(/description: ['"].*['"],/, `description: '${data.description}',`);
    content = content.replace(/group: ['"].*['"],/, `group: '${data.group}',`);
    content = content.replace(/groupName: ['"].*['"],/, `groupName: '${data.groupName}',`);
    
    // 写入文件
    fs.writeFileSync(filePath, content);
    console.log(`更新了 ${typeCode} 类型数据`);
  });
}

// 执行脚本
try {
  const typeData = parseOriginalData(originalData);
  updateTemplateFiles(typeData);
  console.log('所有类型数据更新完成!');
} catch (error) {
  console.error('更新过程中出错:', error);
} 