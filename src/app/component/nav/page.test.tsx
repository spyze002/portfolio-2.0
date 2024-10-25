// import { render } from '@testing-library/react';
// import LogoTrans from './Assets/Logo/logoTransp.png';
// import NavBar from './page';

// test('Should render the navigation bar with the correct logo', () => {
//   const { getByAltText } = render(<NavBar />);
//   const logoImage = getByAltText('main logo');
//   expect(logoImage).toBeInTheDocument();
//   expect(logoImage.src).toContain(LogoTrans);

//   const { getByText } = render(<NavBar />);
//   const homeLink = getByText('Home');
//   const bioLink = getByText('Bio');
//   const projectLink = getByText('Project');

//   expect(homeLink).toBeInTheDocument();
//   expect(bioLink).toBeInTheDocument();
//   expect(projectLink).toBeInTheDocument();

//   expect(homeLink).toHaveAttribute('href', '/');
//   expect(bioLink).toHaveAttribute('href', '/component/bio');
//   expect(projectLink).toHaveAttribute('href', '/component/project');
// });