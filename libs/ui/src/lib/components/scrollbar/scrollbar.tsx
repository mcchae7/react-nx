import './scrollbar.scss';
import { ScrollbarProps } from './../../../ui.models';
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

export const Scrollbar: React.FC<ScrollbarProps> = ({children}) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const componentName = 'h2o-scrollbar';
  let ps: PerfectScrollbar;

  useEffect(() => {
    if (!ps && refContainer.current) {
      ps = new PerfectScrollbar(refContainer.current);
    }
    return () => ps?.destroy()
  }, []);

  return (
    <div className={componentName} ref={refContainer}>
      {children}
    </div>
  );
}

export default Scrollbar;