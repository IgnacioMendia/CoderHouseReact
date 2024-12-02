import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './shoppingCart.css';

const ShoppingCart = () => {
    return (
        <Button variant="" className="position-relative">
            <i className="bi bi-cart fs-2"></i>
            <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle">
                5
            </Badge>
        </Button>
    );
}

export default ShoppingCart;
