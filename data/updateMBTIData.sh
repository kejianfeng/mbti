#!/bin/bash

# 更新MBTI数据结构的脚本

echo "===== MBTI数据结构更新工具 ====="
echo ""

# 确保在项目根目录下运行
cd "$(dirname "$0")/.."
ROOT_DIR=$(pwd)

echo "项目根目录: $ROOT_DIR"
echo ""

# 检查node是否安装
if ! command -v node &> /dev/null; then
    echo "错误: 未找到Node.js，请先安装Node.js"
    exit 1
fi

# 步骤1: 从原始数据更新模块化结构
echo "步骤1: 从原始数据更新模块化结构..."
if [ -f "$ROOT_DIR/data/mbtiTypes/updateFromOriginal.js" ]; then
    node "$ROOT_DIR/data/mbtiTypes/updateFromOriginal.js"
    if [ $? -ne 0 ]; then
        echo "错误: 更新模块化结构失败"
        exit 1
    fi
else
    echo "错误: 未找到updateFromOriginal.js脚本"
    exit 1
fi

# 步骤2: 更新导入语句
echo ""
echo "步骤2: 更新项目中的导入语句..."
if [ -f "$ROOT_DIR/data/updateImports.js" ]; then
    node "$ROOT_DIR/data/updateImports.js"
    if [ $? -ne 0 ]; then
        echo "错误: 更新导入语句失败"
        exit 1
    fi
else
    echo "错误: 未找到updateImports.js脚本"
    exit 1
fi

# 完成
echo ""
echo "===== 数据结构更新完成 ====="
echo "所有16种MBTI类型数据已更新到新的模块化结构"
echo "项目中的导入语句已更新"
echo ""
echo "如需手动检查，请查看以下文件:"
echo "- 模块化数据: $ROOT_DIR/data/mbtiTypes/"
echo "- 原始数据备份: $ROOT_DIR/data/mbtiTypes.ts.bak (如果存在)" 