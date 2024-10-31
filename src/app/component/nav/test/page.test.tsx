import { render } from '@testing-library/react';
import assert from 'node:assert';
import test from 'node:test';
import NavBar from '../page';

test('Should render the navigation bar with the correct logo and links', () => {
  const { getByAltText, getByText } = render(<NavBar />);

  // Check if the logo image is rendered
  const logoImage = getByAltText('main logo');
  assert.ok(logoImage);

  // Check if the navigation links are present
  const homeLink = getByText('Home');
  const bioLink = getByText('Bio');
  const projectLink = getByText('Project');

  assert.ok(homeLink);
  assert.ok(bioLink);
  assert.ok(projectLink);

  // Check the href attributes of the navigation links
  assert.strictEqual(homeLink.getAttribute('href'), '/');
  assert.strictEqual(bioLink.getAttribute('href'), '/component/bio');
  assert.strictEqual(projectLink.getAttribute('href'), '/component/project');
});
