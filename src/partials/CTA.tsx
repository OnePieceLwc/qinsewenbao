import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          订阅我的<GradientText>通讯</GradientText>
        </>
      }
      description="我们承诺，您的信息安全对我们至关重要，我们绝不会与第三方分享您的个人信息。立即订阅，开启您的知识之旅！"
    />
  </Section>
);

export { CTA };
