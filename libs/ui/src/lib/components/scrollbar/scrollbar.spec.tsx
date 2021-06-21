import { render } from '@testing-library/react';

import Scrollbar from './scrollbar';

describe('Scrollbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Scrollbar />);
    expect(baseElement).toBeTruthy();
  });
});
