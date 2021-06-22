import { ReactNode } from 'react';

/*********** Enum **********/
export enum SortDirection {
  DESC = 'DESC',
  ASC = 'ASC',
}
export enum Align {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  CENTER = 'CENTER',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}
/*********** Props **********/
export interface BaseProps {
  themes?: string[];
  children?: ReactNode;
}

/*********** Interface **********/

export interface Column {
  field?: string; // field name;
  name?: string; // column name
  width?: number;
  sort?: boolean;
  sortDirection?: SortDirection;
  fixedWidth?: boolean;
  minWidth?: boolean; // will be used for css grid layout 'minmax(minWidth, auto)'
  classNames?: string[];
  align?: Align;
  noOverflowMask?: boolean;
  selectable?: boolean;
  selectableHeader?: boolean;
  selected?: boolean; // for selectable header
  editable?: boolean;
  // editFieldConfig?: FieldConfig; TBD
  disabled?: boolean;
}
