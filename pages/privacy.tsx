import React from 'react';
import Link from 'next/link';

const Privacy: React.FC = () => {
  return (
    <section className="screen">
      <h2 className="screen-title">隐私政策</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 var(--spacing-md)' }}>
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <p className="text-center" style={{ fontStyle: 'italic', color: 'var(--neutral-600)' }}>
            最后更新日期：2023年12月1日
          </p>
          
          <p>
            感谢您使用我们的MBTI测试应用。本隐私政策旨在向您说明我们如何收集、使用、披露和保护您的个人信息。
            请在使用我们的服务前仔细阅读本政策。
          </p>
          
          <h3>1. 信息收集</h3>
          <p>我们可能收集以下类型的信息：</p>
          <ul>
            <li><strong>个人识别信息：</strong>当您注册账户时，我们可能会收集您的姓名、电子邮件地址和密码。</li>
            <li><strong>测试数据：</strong>我们收集您在MBTI测试中的回答和结果。</li>
            <li><strong>使用数据：</strong>我们自动收集有关您如何使用我们的应用的信息，包括访问时间、浏览页面和交互方式。</li>
            <li><strong>设备信息：</strong>我们可能收集有关您使用的设备的信息，如设备类型、操作系统和浏览器类型。</li>
          </ul>
          
          <h3>2. 信息使用</h3>
          <p>我们使用收集的信息用于：</p>
          <ul>
            <li>提供、维护和改进我们的服务</li>
            <li>处理和分析您的MBTI测试结果</li>
            <li>个性化您的体验并提供相关内容和建议</li>
            <li>与您沟通，包括发送服务更新和营销信息（如果您选择接收）</li>
            <li>监控和分析使用趋势和偏好</li>
            <li>检测、预防和解决技术问题或安全问题</li>
          </ul>
          
          <h3>3. 信息共享</h3>
          <p>我们不会出售或出租您的个人信息给第三方。我们可能在以下情况下共享您的信息：</p>
          <ul>
            <li><strong>服务提供商：</strong>我们可能与帮助我们提供服务的第三方服务提供商共享信息。</li>
            <li><strong>法律要求：</strong>如果法律要求或为了保护我们的权利，我们可能会披露您的信息。</li>
            <li><strong>业务转让：</strong>如果我们参与合并、收购或资产出售，您的信息可能会被转让。</li>
            <li><strong>匿名数据：</strong>我们可能会共享匿名或聚合数据用于研究或分析目的。</li>
          </ul>
          
          <h3>4. 数据安全</h3>
          <p>
            我们采取合理的安全措施来保护您的个人信息免受未经授权的访问、使用或披露。
            然而，请注意，互联网传输方法和电子存储不是100%安全的。
            虽然我们努力使用商业上可接受的方式来保护您的个人信息，但我们不能保证其绝对安全。
          </p>
          
          <h3>5. 您的权利</h3>
          <p>根据您所在地区的适用法律，您可能拥有以下权利：</p>
          <ul>
            <li>访问我们持有的关于您的个人信息</li>
            <li>更正不准确或不完整的个人信息</li>
            <li>删除您的个人信息</li>
            <li>限制或反对我们处理您的个人信息</li>
            <li>数据可携带性</li>
            <li>撤回同意（如适用）</li>
          </ul>
          <p>
            如需行使这些权利，请通过下方提供的联系信息与我们联系。
          </p>
          
          <h3>6. Cookie和类似技术</h3>
          <p>
            我们使用cookie和类似技术来收集和存储信息，以提供更好的用户体验。
            您可以通过浏览器设置控制cookie的使用，但这可能会影响某些功能的可用性。
          </p>
          
          <h3>7. 儿童隐私</h3>
          <p>
            我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。
            如果您发现我们可能收集了来自儿童的信息，请立即联系我们，我们将采取措施删除这些信息。
          </p>
          
          <h3>8. 隐私政策的变更</h3>
          <p>
            我们可能会不时更新本隐私政策。我们会通过在此页面上发布新版本来通知您任何变更。
            建议您定期查看本政策以了解任何变更。政策变更在此页面上发布后立即生效。
          </p>
          
          <h3>9. 联系我们</h3>
          <p>
            如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
          </p>
          <p>
            电子邮件：privacy@mbtiapp.com<br />
            地址：中国上海市浦东新区张江高科技园区科苑路88号
          </p>
        </div>
        
        <div className="text-center" style={{ margin: 'var(--spacing-xl) 0' }}>
          <Link href="/">
            <a className="btn btn-primary">返回首页</a>
          </Link>
          <Link href="/contact">
            <a className="btn btn-outline" style={{ marginLeft: 'var(--spacing-md)' }}>
              联系我们
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Privacy; 