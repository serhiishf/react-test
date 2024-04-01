import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination component', () => {
  it('renders correct pagination', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
    screen.debug();
  });
});
