import './scrollbar-example.scss';
import { Scrollbar, BaseProps, initComponent } from '@react-nx/ui';
import { useContext } from 'react';
import { AppContext } from '../../context/context';

/* eslint-disable-next-line */
export interface ScrollbarExampleProps extends BaseProps {}

export const ScrollbarExample: React.FC<ScrollbarExampleProps> = (props) => {
  const { appThemes } = useContext(AppContext);
  const { lastProps, classNames } = initComponent(
    'scrollbar-example',
    {},
    props,
    appThemes
  );
  return (
    <div className={classNames}>
      <Scrollbar>
        <div className='mc-scrollbar-example--content'>Test</div>
      </Scrollbar>
    </div>
  );
};

export default ScrollbarExample;
