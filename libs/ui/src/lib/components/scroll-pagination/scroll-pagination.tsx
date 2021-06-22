import './scroll-pagination.scss';
import { BaseProps, Column } from './../../ui.models';
import { Scrollbar } from '../scrollbar/scrollbar';
import { initComponent } from '../../utils/utils';

/* eslint-disable-next-line */
interface ScrollPaginationProps extends BaseProps {
  loadingText?: string;
  emptyText?: string;
  rowHeight?: number;
  displayLoadingText?: boolean;
  displayLoader?: boolean;
  outsideScrollEl?: HTMLElement | typeof Scrollbar;
  minPageRowCount?: number;
  rowCount?: number;
  scrollContentStyle?: { [key: string]: string };
  columns?: Array<Column>;
  scrollbarYMarginTop?: number;
  scrollbarYMarginLeft?: number;
}

export const ScrollPagination: React.FC<ScrollPaginationProps> = (props) => {
  const { lastProps, classNames } = initComponent(
    'scroll-pagination',
    {
      loadingText: 'loading...',
      emptyText: 'No Data',
      rowHeight: 35,
      displayLoader: true,
      minPageRowCount: 5,
    },
    props
  );
  return (
    <div className={classNames}>
      <Scrollbar></Scrollbar>
    </div>
  );
};

export default ScrollPagination;
