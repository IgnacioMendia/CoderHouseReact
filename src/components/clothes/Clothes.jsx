import React, { useState, useEffect } from "react";
import NavBar from '../navbar/NavBar'
import Card from './Card'
import './Card.css'

const Clothes = () => {

    const [MenClothes, setMenClothes] = useState([]);
    const [WomenClothes, setWomenClothes] = useState([]);
    const [AllClothes, setAllClothes] = useState([]);

    useEffect(() => {
        fetchWomenClothes();
        fetchMenClothes();
    }, []);

    useEffect(() => {
        const mixedClothes = intercalateArrays(MenClothes, WomenClothes);
        setAllClothes(mixedClothes);
    }, [MenClothes, WomenClothes]);

    function fetchWomenClothes() {
        fetch(window.conexionML + 'category=MLA1430&limit=15&sort=sold_quantity_desc')
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (data?.results) {
                    setWomenClothes(data.results);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function fetchMenClothes() {
        fetch(window.conexionML + 'category=MLA409572&limit=15&sort=sold_quantity_desc')
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (data?.results) {
                    setMenClothes(data.results);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    const intercalateArrays = (arr1, arr2) => {
        const maxLength = Math.max(arr1.length, arr2.length);
        const result = [];
        for (let i = 0; i < maxLength; i++) {
            if (i < arr1.length) result.push(arr1[i]);
            if (i < arr2.length) result.push(arr2[i]);
        }
        return result;
    };

    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };

    return (
        <div>
            <NavBar />
            <h1>Categoria Ropa</h1>
            <div className="container">
                {chunkArray(AllClothes, 4).map((row, rowIndex) => (
                    <div className="row mb-6" key={rowIndex}>
                        {row.map((item) => (
                            <div className="col" key={item.id}>
                                <Card thumbnail={item.thumbnail} title={item.title} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clothes