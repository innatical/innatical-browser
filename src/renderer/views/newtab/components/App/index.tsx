import * as React from 'react';
import { observer } from 'mobx-react-lite';

import store from '../../store';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Content, Image, StyledTime, StyledForecast } from './style';
import { TopSites } from '../TopSites';
import { WebUIStyle } from '~/renderer/mixins/default-styles';

import { useQuery } from 'react-query';
import { QueryClientProvider, QueryClient } from 'react-query';
import {FastAverageColor} from 'fast-average-color';
import { useAsync } from 'react-use';
import { Helmet } from 'react-helmet';

const queryClient = new QueryClient();

const Time = () => {
  return (
    <StyledTime>
      <h1>{new Date().toLocaleTimeString([], { timeStyle: 'short' })}</h1>
    </StyledTime>
  );
};

const Forecast = () => {
  const { data: forecast } = useQuery(['weather'], async () => {
    try {
      const res = await (await fetch(`https://wttr.in/?format=%c%20%C`)).text();
      return res;
    } catch {
      return 'Failed to load weather';
    }
  });

  return (
    <StyledForecast>
      {new Date().toLocaleDateString([], {
        month: 'long',
        day: '2-digit',
      })}
      {' - '}
      {forecast}
    </StyledForecast>
  );
};

export default observer(() => {
  const theme = useAsync(async () => {
    if (store.settings.tab.image == '') {
      return '#070b10';
    }

    const fac = new FastAverageColor();
    return (await fac.getColorAsync(store.settings.tab.image)).hex;
  }, [store.settings.tab.image]);
  return (
    // @ts-ignore
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...store.theme }}>
        <div>
          {/* @ts-ignore */}
          <Helmet>
            <meta name="theme-color" content={theme.value} />
          </Helmet>
          <WebUIStyle />

          <Wrapper color={theme.value} theme={store.theme}>
            <Image src={store.settings.tab.image} />
            <Content>
              <Time />
              <Forecast />

              {store.settings.tab.topSites && (
                <>
                  <TopSites backgroundColor={theme.value} />
                </>
              )}
            </Content>
          </Wrapper>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
});
