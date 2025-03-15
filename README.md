# MBTI 人格测试应用

这是一个基于Next.js开发的MBTI（迈尔斯-布里格斯类型指标）人格测试应用，提供完整的MBTI测试、结果分析和16种人格类型的详细信息。

## 功能特点

- **MBTI测试**：提供标准化的MBTI测试问题，帮助用户发现自己的人格类型
- **结果分析**：测试完成后提供详细的结果分析，包括四个维度的偏好百分比
- **类型详情**：提供16种MBTI类型的详细信息，包括特点、优势、劣势、职业建议和人际关系建议
- **类型列表**：浏览所有16种MBTI类型，按族群分类
- **响应式设计**：适配各种设备尺寸，提供良好的移动端体验

## 技术栈

- **前端框架**：Next.js
- **语言**：TypeScript
- **样式**：CSS Modules + 内联样式
- **状态管理**：React Hooks
- **路由**：Next.js内置路由

## 项目结构

```
mbti-app/
├── components/         # 可复用组件
│   ├── Layout.tsx      # 布局组件
│   ├── TestQuestion.tsx # 测试问题组件
│   ├── TestResult.tsx  # 测试结果组件
│   ├── TypeDetails.tsx # 类型详情组件
│   └── ...
├── data/               # 数据文件
│   ├── questions.ts    # 测试问题数据
│   └── mbtiTypes.ts    # MBTI类型数据
├── pages/              # 页面组件
│   ├── index.tsx       # 首页
│   ├── test.tsx        # 测试页面
│   ├── result.tsx      # 结果页面
│   ├── types/          # 类型相关页面
│   │   ├── index.tsx   # 类型列表页面
│   │   └── [type].tsx  # 类型详情页面
│   └── ...
├── styles/             # 样式文件
│   ├── globals.css     # 全局样式
│   └── ...
├── utils/              # 工具函数
│   └── mbtiCalculator.ts # MBTI计算工具
└── public/             # 静态资源
```

## 页面说明

- **首页**：应用介绍和开始测试入口
- **测试页面**：MBTI测试问题和选项
- **结果页面**：测试结果分析和类型解释
- **类型列表页面**：16种MBTI类型的概览
- **类型详情页面**：特定MBTI类型的详细信息
- **关于页面**：MBTI理论介绍
- **FAQ页面**：常见问题解答
- **联系页面**：联系表单和信息

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/yourusername/mbti-app.git
cd mbti-app
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 在浏览器中访问 `http://localhost:3000`

## 构建和部署

1. 构建生产版本
```bash
npm run build
# 或
yarn build
```

2. 启动生产服务器
```bash
npm start
# 或
yarn start
```

## 未来计划

- 添加用户账户系统，保存测试结果
- 增加更多语言支持
- 提供更详细的类型比较功能
- 添加社区讨论功能
- 开发移动应用版本

## 贡献

欢迎提交问题和拉取请求，共同改进这个项目！

## 许可证

MIT 

## MBTI数据结构更新

我们对MBTI类型数据进行了重构，采用了更加模块化的方式组织数据：

### 主要变更

1. **模块化结构**：每个MBTI类型都有独立的文件，便于维护和扩展
2. **完整数据**：所有16种MBTI类型都有完整的数据，包括特质、优势、劣势、职业建议等
3. **统一接口**：提供了统一的导入方式，支持导入单个类型或所有类型
4. **更新工具**：提供了数据更新和导入语句更新的工具

### 使用方法

```typescript
// 导入所有类型
import mbtiTypes from './data/mbtiTypes';

// 导入单个类型
import INTJ from './data/mbtiTypes/INTJ';
```

### 更新数据

如需更新MBTI数据，可以运行以下命令：

```bash
# 在项目根目录下运行
./data/updateMBTIData.sh
```

详细说明请参考 `data/mbtiTypes/README.md`。 