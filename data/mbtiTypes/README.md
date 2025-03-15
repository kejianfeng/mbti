# MBTI类型数据结构

本目录包含所有16种MBTI人格类型的详细数据，采用模块化结构进行组织。

## 数据结构说明

每个MBTI类型都有自己的独立文件，按照类型代码命名（例如：`INTJ.ts`、`ENFP.ts`等）。每个类型文件包含以下信息：

- `typeCode`: 类型代码（如"INTJ"）
- `name`: 类型名称（中文）
- `description`: 类型简短描述
- `group`: 类型所属群组（analyst, diplomat, sentinel, explorer）
- `groupName`: 群组名称（中文）
- `traits`: 主要特质
- `strengths`: 优势
- `weaknesses`: 劣势
- `careers`: 职业建议（按类别分组）
- `relationships`: 关系特点（优势和挑战）
- `compatibleTypes`: 兼容的类型
- `communicationTips`: 沟通技巧

## 使用方法

### 导入单个类型

```typescript
import intj from './mbtiTypes/intj';

console.log(intj.name); // "建筑师"
console.log(intj.strengths); // 获取INTJ的优势列表
```

### 导入所有类型

```typescript
import mbtiTypes from './mbtiTypes';

// 获取特定类型
const intjType = mbtiTypes.intj;

// 遍历所有类型
Object.values(mbtiTypes).forEach(type => {
  console.log(`${type.type}: ${type.name}`);
});

// 按群组筛选类型
const analysts = Object.values(mbtiTypes).filter(type => type.group === 'analyst');
```

## 数据更新

如果需要更新原始数据，可以使用以下工具：

1. `updateFromOriginal.js` - 从原始mbtiTypes.ts文件提取数据并更新到新的模块化结构
2. `updateImports.js` - 更新项目中所有导入mbtiTypes的地方，以适应新的数据结构

## 数据完整性

所有16种MBTI类型的数据均已完整填充，包括：

- 分析家（Analysts）: INTJ, INTP, ENTJ, ENTP
- 外交家（Diplomats）: INFJ, INFP, ENFJ, ENFP
- 哨兵（Sentinels）: ISTJ, ISFJ, ESTJ, ESFJ
- 探险家（Explorers）: ISTP, ISFP, ESTP, ESFP 