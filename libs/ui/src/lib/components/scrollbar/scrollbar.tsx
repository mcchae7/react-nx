import './scrollbar.scss';
import { BaseProps } from './../../ui.models';
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { initComponent } from '../../utils/utils';

/* eslint-disable-next-line */
interface ScrollbarProps extends BaseProps {}

export const Scrollbar: React.FC<ScrollbarProps> = (props) => {
  const { lastProps, classNames } = initComponent<ScrollbarProps>(
    'scrollbar',
    {},
    props
  );
  const { children } = lastProps;

  const refContainer = useRef<HTMLDivElement>(null);
  let ps: PerfectScrollbar;

  useEffect(() => {
    if (!ps && refContainer.current) {
      ps = new PerfectScrollbar(refContainer.current);
    }
    return () => ps?.destroy();
  }, []);

  return (
    <div className={classNames} ref={refContainer}>
      {children}
    </div>
  );
};

export default Scrollbar;
