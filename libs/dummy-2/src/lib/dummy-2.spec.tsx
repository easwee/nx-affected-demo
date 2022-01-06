import { render } from '@testing-library/react';

import Dummy2 from './dummy-2';

describe('Dummy2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Dummy2 />);
    expect(baseElement).toBeTruthy();
  });
});
