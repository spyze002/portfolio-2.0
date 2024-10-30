import { render } from '@testing-library/react';
import NavBar from '../page';

test('Should render the navigation bar with the correct logo and links', () => {
  const { getByAltText, getByText } = render(<NavBar />);

  // Check if the logo image is rendered
  const logoImage = getByAltText('main logo');
  expect(logoImage).toBeInTheDocument();

  // Check if the navigation links are present
  const homeLink = getByText('Home');
  const bioLink = getByText('Bio');
  const projectLink = getByText('Project');

  expect(homeLink).toBeInTheDocument();
  expect(bioLink).toBeInTheDocument();
  expect(projectLink).toBeInTheDocument();

  // Check the href attributes of the navigation links
  expect(homeLink).toHaveAttribute('href', '/');
  expect(bioLink).toHaveAttribute('href', '/component/bio');
  expect(projectLink).toHaveAttribute('href', '/component/project');
});
