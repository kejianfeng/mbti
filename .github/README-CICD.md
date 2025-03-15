# CI/CD 部署指南

本项目使用GitHub Actions自动构建并部署到服务器。以下是设置过程：

## 必要的GitHub Secrets

在GitHub仓库中，需要设置以下Secrets以使CI/CD工作流正常工作：

1. **SSH_PRIVATE_KEY**: 用于连接到服务器的SSH私钥
2. **SERVER_IP**: 服务器的IP地址
3. **SERVER_USER**: 服务器的用户名

## 设置步骤

### 1. 生成SSH密钥对（如果没有）

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/github_deploy
```

### 2. 将公钥添加到服务器

将生成的公钥（`~/.ssh/github_deploy.pub`）添加到服务器的`~/.ssh/authorized_keys`文件中：

```bash
cat ~/.ssh/github_deploy.pub | ssh user@your-server "cat >> ~/.ssh/authorized_keys"
```

### 3. 在GitHub中添加Secrets

1. 在GitHub仓库页面，点击"Settings" > "Secrets and variables" > "Actions"
2. 点击"New repository secret"按钮
3. 添加以下Secrets：
   - 名称: `SSH_PRIVATE_KEY`, 值: 私钥内容（`cat ~/.ssh/github_deploy`的输出）
   - 名称: `SERVER_IP`, 值: 您服务器的IP地址
   - 名称: `SERVER_USER`, 值: 您服务器的用户名

### 4. 确保服务器上安装了必要的软件

服务器上需要安装以下软件：

- Node.js (推荐v16或更高版本)
- npm
- PM2 (用于进程管理)

可以使用以下命令安装PM2：

```bash
npm install -g pm2
```

## 工作流程说明

当您推送代码到`main`分支时，GitHub Actions将：

1. 检出代码
2. 设置Node.js环境
3. 安装依赖
4. 构建项目
5. 尝试导出静态文件（如果配置了`next export`）
6. 使用SSH连接到服务器
7. 部署构建产物到服务器的`/data/mbti-app/`目录

## 故障排除

如果部署失败，请检查：

1. GitHub Actions日志中的错误信息
2. 确保所有Secrets都已正确设置
3. 确保服务器上的目标目录具有正确的权限
4. 检查服务器上的防火墙设置是否允许SSH连接

## 手动部署

如果需要手动部署，可以运行：

```bash
npm run build
npm run export  # 如果使用静态导出
```

然后将生成的`.next`目录（或`out`目录，如果使用了`export`）复制到服务器上。 