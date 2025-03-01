import { Card } from 'react-bootstrap';

export default function PageHeader({ text }) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          <h1>{text}</h1>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}