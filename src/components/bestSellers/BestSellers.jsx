import { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';
import './bestSellers.css'

const BestSellers = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(window.conexionML + 'category=MLA1055&sort=sold_quantity_desc&limit=24')
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (data?.results) {
                    setProducts(data.results);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const separateArray = (arr, size) => {
        const five = [];
        for (let i = 0; i < arr.length; i += size) {
            five.push(arr.slice(i, i + size));
        }
        return five;
    };
    const productsFive = separateArray(products, 8);

    return (
        <div className="container-fluid ">
            <h1>Productos mas vendidos</h1>
            <Carousel>
                {productsFive.map((five, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center">
                            {five.map((product, i) => (
                                <div key={i} className="card mx-2">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );

}

export default BestSellers