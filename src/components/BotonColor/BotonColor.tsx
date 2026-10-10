import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const BotonColor = () => {
  
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para controlar la visibilidad del modal
  const [color, setColor] = useState("#1B2A4A"); // Estado para el color que vas eligiendo en el input (temporal)  
  const [colorAplicado, setColorAplicado] = useState("#1B2A4A"); // Estado para el color confirmado que se aplica al botón

  
  const aceptarColor = () => { // Función para confirmar el color al presionar "Aceptar"
    setColorAplicado(color);
    setMostrarModal(false);
  };

  return (
    <>
      
      <Button // El botón toma el color guardado en colorAplicado
        style={{ backgroundColor: colorAplicado, borderColor: colorAplicado }}
        onClick={() => setMostrarModal(true)}
        
      >
        Cambiar Color
      </Button>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Elegí un Color</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="form-control form-control-color"
          />
          <span className="text-secondary">{color}</span>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={aceptarColor}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BotonColor;