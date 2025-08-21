import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function BasicCard({ image, title, text, options = [], onSelect }) {
  return (
    <Card className="h-100" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text>{text}</Card.Text>}

        {options.length > 0 && (
          <Form.Select
            aria-label={`Select option for ${title}`}
            onChange={(e) => onSelect?.(e.target.value)}
          >
            <option value="" disabled selected hidden>Select option</option>
            {options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        )}
      </Card.Body>
    </Card>
  );
}


export default BasicCard;

