import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        最近的 <GradientText>项目</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="C语言之考勤模拟系统平台（千行代码）"
        description="C语言之考勤模拟系统平台（千行代码）"
        link="https://blog.csdn.net/lwcwam/article/details/140266032?spm=1001.2014.3001.5501"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>C语言</Tags>
            <Tags color={ColorTags.LIME}>考勤模拟系统平台</Tags>
            <Tags color={ColorTags.SKY}>千行代码</Tags>
            {/* <Tags color={ColorTags.ROSE}>TypeScript</Tags> */}
          </>
        }
      />
      <Project
        name="C语言之图像文件的属性"
        description="C语言之图像文件的属性"
        link="https://blog.csdn.net/lwcwam/article/details/140105542?spm=1001.2014.3001.5501"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>C语言</Tags>
            <Tags color={ColorTags.EMERALD}>图像文件的属性</Tags>
            <Tags color={ColorTags.YELLOW}>BMP</Tags>
          </>
        }
      />
      <Project
        name="C语言之饭店外卖信息管理系统"
        description="C语言之饭店外卖信息管理系统"
        link="https://blog.csdn.net/lwcwam/article/details/140084415?spm=1001.2014.3001.5501"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>C语言</Tags>
            <Tags color={ColorTags.INDIGO}>饭店外卖信息管理系统</Tags>
            {/* <Tags color={ColorTags.ROSE}>TypeScript</Tags> */}
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
