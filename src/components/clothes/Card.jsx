import './Card.css'
import Button from 'react-bootstrap/Button';

const Card = (props) => {
    return (
        <div className="custom-card-container">
            <div className="custom-card">
                <img
                    src={props.thumbnail}
                    alt={props.title}
                    className="custom-card-img"
                />
                <div className="custom-card-body">
                    <h5 className="custom-card-title">{props.title}</h5>
                    <Button variant="success" className="custom-card-button">
                        Agregar al carrito
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card