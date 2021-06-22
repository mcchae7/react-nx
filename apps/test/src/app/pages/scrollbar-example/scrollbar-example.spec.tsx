import { render } from '@testing-library/react';

import ScrollbarExample from './scrollbar-example';

describe('ScrollbarExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollbarExample />);
    expect(baseElement).toBeTruthy();
  });
});
