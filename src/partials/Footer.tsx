import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <hr />
    <br />
    <p>© Copyright 2024 by {AppConfig.site_name}</p>
  </Section>
);

export { Footer };
