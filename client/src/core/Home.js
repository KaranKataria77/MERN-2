import React, {useState, useEffect} from 'react';
import '../styles.css';
// import { API } from '../backend';
import Base from './Base';
import Card from './Cart';
import { getAllProducts } from './helper/coreapicalls';

const API = "https://mern-neww.herokuapp.com/api/"

function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)

    const preload = () => {
        getAllProducts()
         .then(data => {
             console.log(data)
             if(data.error){
                 setError({...error, error: true})
             }else{
                 setProducts(data)
             }
         }) 
    }

    useEffect(() => {
        preload()
    }, [])

    console.log("API is", API)
    return (
        <Base title="My Home page" description="Welcome to the T-Shirt Store">
            <div className="row text-center">
                <div className="row">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-3 mb-4">
                            <Card product={product} />
                        </div>
                    )
                })}
                </div>
            </div>
        </Base>
    )
}


export default Home
