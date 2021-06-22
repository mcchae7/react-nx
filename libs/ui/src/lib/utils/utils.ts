import { BaseProps } from '../ui.models';

export function getThemeClassnames(
  componentName: string,
  themes: string[] = [],
  prefix = 'mc'
): string {
  themes = themes.reduce((agg: string[], d) => {
    if (d) {
      agg.push(prefix + '-' + componentName + '-' + d);
    }
    return agg;
  }, []);
  themes.unshift(prefix + '-' + componentName);
  return themes.join(' ');
}

export function initComponent<P = BaseProps>(
  componentName: string,
  defaultProps: P,
  props: P,
  extraThemes: string[] = []
) {
  props = { ...defaultProps, ...props };
  // TODO: why is the type of props unknown?
  const { themes = [] } = props as BaseProps;
  const lastProps = props;
  const classNames = getThemeClassnames(
    componentName,
    themes.concat(extraThemes)
  );
  return {
    lastProps,
    classNames,
  };
}
