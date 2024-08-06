import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';

import tonSvg from './ton.svg';
import {Balance} from "@/pages/Balance/Balance";

export const IndexPage: FC = () => {
  return (
      <>
          <Balance/>
          <List>
              <Section
                  header='Features'
                  body='nnn'
                  footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
              >
                  <Link to='/ton-connect'>
                      <Cell
                          before={<Image src={tonSvg} style={{ backgroundColor: '#e91f20' }}/>}
                          subtitle='Connect your TON wallet'
                      >
                          TON Connect
                      </Cell>
                  </Link>
              </Section>
              <Section
                  header='Application Launch Data'
                  footer='These pages help developer to learn more about current launch information'
              >
                  <Link to='/init-data'>
                      <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
                  </Link>
                  <Link to='/launch-params'>
                      <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
                  </Link>
                  <Link to='/theme-params'>
                      <Cell subtitle='что то'>Theme Parameters</Cell>
                  </Link>
              </Section>
          </List>
      </>

  );
};
