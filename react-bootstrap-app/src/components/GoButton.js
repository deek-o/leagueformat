import Button from 'react-bootstrap/Button';

function BlockExample({  title, disabled, onClick  }) {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" disabled={disabled} onClick={onClick}>
        {title || "Default Text"}
      </Button>
    </div>
  );
}

export default BlockExample;
