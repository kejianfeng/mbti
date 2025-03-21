import React from 'react';
import Link from 'next/link';

const Terms: React.FC = () => {
  return (
    <section className="screen">
      <h2 className="screen-title">服务条款</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 var(--spacing-md)' }}>
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <p className="text-center" style={{ fontStyle: 'italic', color: 'var(--neutral-600)' }}>
            最后更新日期：2023年12月1日
          </p>
          
          <p>
            欢迎使用MBTI测试应用。请仔细阅读以下条款和条件，因为它们适用于您对我们网站、应用程序和服务的访问和使用。
            通过访问或使用我们的服务，您同意受这些条款的约束。如果您不同意这些条款的任何部分，请不要使用我们的服务。
          </p>
          
          <h3>1. 服务描述</h3>
          <p>
            MBTI测试应用提供基于迈尔斯-布里格斯类型指标(MBTI)的人格测试和相关内容。
            我们的服务包括但不限于：
          </p>
          <ul>
            <li>MBTI人格测试</li>
            <li>测试结果分析和解释</li>
            <li>关于16种MBTI类型的详细信息</li>
            <li>用户账户管理</li>
            <li>相关教育内容和资源</li>
          </ul>
          
          <h3>2. 用户账户</h3>
          <p>
            某些功能可能需要您创建用户账户。您负责维护您账户的保密性，并对发生在您账户下的所有活动负责。您同意：
          </p>
          <ul>
            <li>提供准确、完整和最新的注册信息</li>
            <li>保护您的账户密码，不与他人共享</li>
            <li>立即通知我们任何未经授权使用您账户的情况</li>
            <li>确保在每次会话结束时退出您的账户</li>
          </ul>
          <p>
            我们保留在我们自行决定的情况下拒绝服务、终止账户或修改/删除内容的权利。
          </p>
          
          <h3>3. 知识产权</h3>
          <p>
            我们的服务及其原始内容、功能和设计受国际版权、商标、专利、商业秘密和其他知识产权法律的保护。
            使用我们的服务不会授予您对我们的服务或内容的所有权。
          </p>
          <p>
            未经我们明确许可，您不得：
          </p>
          <ul>
            <li>复制、修改或创建我们服务的衍生作品</li>
            <li>使用我们的商标、标志或其他专有信息</li>
            <li>尝试反向工程、反编译或以其他方式尝试获取我们服务的源代码</li>
            <li>框架或镜像我们网站的任何部分</li>
          </ul>
          
          <h3>4. 用户内容</h3>
          <p>
            您可能有机会提交内容（如评论、反馈或个人资料信息）。您保留对您提交的内容的所有权利，但授予我们非独占、免版税、可转让、可再许可的权利，以使用、复制、修改、改编、出版、翻译和分发此类内容。
          </p>
          <p>
            您提交的内容不得：
          </p>
          <ul>
            <li>包含任何非法、有害、威胁、辱骂、骚扰、诽谤、淫秽或其他令人反感的材料</li>
            <li>侵犯任何第三方的知识产权</li>
            <li>包含恶意软件、病毒或旨在破坏或限制任何计算机软件或硬件功能的代码</li>
            <li>冒充他人或虚假陈述您与任何人或实体的关系</li>
          </ul>
          
          <h3>5. 免责声明</h3>
          <p>
            我们的服务按"原样"和"可用"基础提供，不提供任何明示或暗示的保证。
            MBTI测试结果仅供参考和娱乐目的，不应被视为专业心理评估或诊断的替代品。
          </p>
          <p>
            我们不保证：
          </p>
          <ul>
            <li>服务将不间断、及时、安全或无错误</li>
            <li>结果将准确或可靠</li>
            <li>服务质量将满足您的期望</li>
            <li>服务中的任何错误将被纠正</li>
          </ul>
          
          <h3>6. 责任限制</h3>
          <p>
            在法律允许的最大范围内，我们及我们的董事、员工、合作伙伴、代理人或供应商对任何间接、偶然、特殊、后果性或惩罚性损害不承担责任，包括但不限于利润损失、数据损失、替代成本或任何类似损害。
          </p>
          
          <h3>7. 第三方链接</h3>
          <p>
            我们的服务可能包含指向第三方网站或服务的链接，这些网站或服务不由我们拥有或控制。
            我们对任何第三方网站或服务的内容、隐私政策或做法不承担责任，也不对其承担任何责任。
          </p>
          
          <h3>8. 条款变更</h3>
          <p>
            我们保留在任何时候修改或替换这些条款的权利。重大变更将提前通知。
            继续使用我们的服务构成对修订条款的接受。
          </p>
          
          <h3>9. 适用法律</h3>
          <p>
            这些条款应受中华人民共和国法律管辖，不考虑其冲突法规定。
          </p>
          
          <h3>10. 联系我们</h3>
          <p>
            如果您对这些服务条款有任何疑问，请联系我们：
          </p>
          <p>
            电子邮件：terms@mbtiapp.com<br />
            地址：中国上海市浦东新区张江高科技园区科苑路88号
          </p>
        </div>
        
        <div className="text-center" style={{ margin: 'var(--spacing-xl) 0' }}>
          <Link href="/">
            <a className="btn btn-primary">返回首页</a>
          </Link>
          <Link href="/privacy">
            <a className="btn btn-outline" style={{ marginLeft: 'var(--spacing-md)' }}>
              查看隐私政策
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Terms; 