import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Navbar, Container, Nav } from 'react-bootstrap';

const DynamicLink = dynamic(() => import('next/link'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Jacob Rivera</Navbar.Brand>
          <Nav>
            <DynamicLink href="/" passHref legacyBehavior>
              <Nav.Link>Movies</Nav.Link>
            </DynamicLink>
            <DynamicLink href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </DynamicLink>
          </Nav>
        </Container>
      </Navbar>
      <br /><br />
    </>
  );
}