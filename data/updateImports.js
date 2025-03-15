/**
 * 这个脚本用于更新应用程序中使用MBTI类型数据的地方，以适应新的数据结构
 * 
 * 使用方法：
 * 1. 运行脚本: node updateImports.js
 * 2. 脚本会搜索项目中所有导入原始mbtiTypes.ts文件的地方，并更新为新的导入方式
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 项目根目录
const rootDir = path.resolve(__dirname, '..');

// 查找所有导入原始mbtiTypes.ts文件的地方
function findImports() {
  try {
    // 使用grep查找导入语句
    const grepCommand = `grep -r "from '.*mbtiTypes'" --include="*.ts" --include="*.tsx" ${rootDir}`;
    const result = execSync(grepCommand, { encoding: 'utf8' });
    
    // 解析结果
    const lines = result.split('\n').filter(line => line.trim() !== '');
    const files = [];
    
    lines.forEach(line => {
      const match = line.match(/^([^:]+):/);
      if (match) {
        const filePath = match[1];
        if (!filePath.includes('node_modules') && !filePath.includes('data/mbtiTypes/')) {
          files.push(filePath);
        }
      }
    });
    
    return [...new Set(files)]; // 去重
  } catch (error) {
    console.error('查找导入语句时出错:', error);
    return [];
  }
}

// 更新导入语句
function updateImports(files) {
  files.forEach(filePath => {
    try {
      // 读取文件内容
      let content = fs.readFileSync(filePath, 'utf8');
      
      // 替换导入语句
      const oldImport = /import\s+(\w+)\s+from\s+['"](.*)mbtiTypes['"]/g;
      const newImport = 'import $1 from \'$2mbtiTypes/index\'';
      
      // 替换使用方式
      const oldUsage = /(\w+)\.(\w{4})\./g;
      const newUsage = '$1.$2.';
      
      // 应用替换
      content = content.replace(oldImport, newImport);
      
      // 写入文件
      fs.writeFileSync(filePath, content);
      console.log(`更新了文件: ${filePath}`);
    } catch (error) {
      console.error(`更新文件 ${filePath} 时出错:`, error);
    }
  });
}

// 执行脚本
try {
  console.log('开始查找导入语句...');
  const files = findImports();
  console.log(`找到 ${files.length} 个文件需要更新`);
  
  if (files.length > 0) {
    console.log('开始更新导入语句...');
    updateImports(files);
    console.log('所有导入语句更新完成!');
  }
} catch (error) {
  console.error('更新过程中出错:', error);
} 