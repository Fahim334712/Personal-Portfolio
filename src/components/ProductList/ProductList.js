import Product from '../Product/Product';
import './ProductList.css';
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create and inspire .Its Fahim
                </h1>
                <p className="pl-desc">
                    If you have enough time,visit the following projects.These are individual demu projects.New things are being added to the websites day by day.
                </p>
            </div>
            <div className="pl-list">
                {
                    products.map((item) => (
                        <Product key={item.id} img={item.img} link={item.link} ></Product>
                    ))}

            </div>
        </div>
    )
}

export default ProductList
