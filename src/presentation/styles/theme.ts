import { ColorsInterface, MetricsInterface, colors, metrics } from '~/presentation/styles';
import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsInterface;
    metrics: MetricsInterface;
  }
}

export const theme: DefaultTheme = {
  colors,
  metrics,
};
