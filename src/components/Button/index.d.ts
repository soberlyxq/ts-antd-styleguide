import * as React from 'react';
export interface Props {
  bordered?: boolean;
  rowSelection?: Object;
  columns: any;
  dataSource: any;
  expandIcon?: any; //
  loading?: boolean; //
  pagination?: any;
  onChange?: any; //页码改变的回调函数                                  (page, size) => {}
  onExpand?: any;
  onPageSizeChange?: Function;
  rowKey?: any;
  scroll?: any;
  [index: string]: any;
}
