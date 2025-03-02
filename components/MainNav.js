import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          {/* Brand/Logo */}
          <Navbar.Brand>Jacob Rivera</Navbar.Brand>

          {/* Navigation Links */}
          <Nav>
            {/* Movies Link */}
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Movies</Nav.Link>
            </Link>

            {/* About Link */}
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Add spacing below the fixed navbar */}
      <br /><br />
    </>
  );
}