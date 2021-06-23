import './scroll-pagination.scss';
import { BaseProps, ComponentEvent } from './../../ui.models';
import { Scrollbar } from '../scrollbar/scrollbar';
import { initComponent, isEmpty } from '../../utils/utils';

export interface ScrollPage {
  startRowIndex: number;
  endRowIndex: number;
  index: number;
  height: number;
  extraHeight: number;
  top: number;
}

export enum ScrollPaginationAction {
  UPDATE_PAGES = 'UPDATE_PAGES',
  GET_ROW_COUNT = 'GET_ROW_COUNT',
}
export interface ScrollPaginationEvent
  extends ComponentEvent<ScrollPaginationAction> {
  currentPageIndexes?: number[];
  addingPageIndexes?: number[];
  removingPageIndexes?: number[];
  pageElements?: HTMLElement[];
  pageRowCount?: number;
  pages?: ScrollPage[];
}

interface ScrollPaginationProps extends BaseProps<ScrollPaginationEvent> {
  loadingText?: string;
  emptyText?: string;
  rowHeight?: number;
  displayLoadingText?: boolean;
  displayLoader?: boolean;
  minPageRowCount?: number;
  rowCount?: number;
  scrollbarYMarginTop?: number;
  scrollbarYMarginLeft?: number;
  loading?: boolean;
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
      loading: false,
    },
    props
  );

  const { rowCount, onAction } = lastProps;

  if (isEmpty(rowCount) && onAction) {
    onAction({ action: ScrollPaginationAction.GET_ROW_COUNT });
  }

  return (
    <div className={classNames}>
      <Scrollbar></Scrollbar>
    </div>
  );
};

export default ScrollPagination;
