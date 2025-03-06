import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Jacob Rivera</Navbar.Brand>
          <Nav>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Movies</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br /><br />
    </>
  );
}