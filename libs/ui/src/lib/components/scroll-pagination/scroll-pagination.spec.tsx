import { render } from '@testing-library/react';

import ScrollPagination from './scroll-pagination';

describe('ScrollPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollPagination />);
    expect(baseElement).toBeTruthy();
  });
});
