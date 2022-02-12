import "./Products.css";

function Products() {
    return(
        <div className="products">
            <div className="product-card">
                <div className="product-img"></div>
                <h3 className="product-name">Product</h3> 
                <p className="product-desc">Nam et mauris sit amet velit vestibulum sagittis. Maecenas in tellus turpis. Fusce posuere id sapien id tincidunt. Morbi egestas aliquam cursus. </p>
                <button className="btn">Button</button>
            </div>
            <div className="product-card">
                <div className="product-img"></div>
                <h3 className="product-name">Product</h3> 
                <p className="product-desc">Nam et mauris sit amet velit vestibulum sagittis. Maecenas in tellus turpis. Fusce posuere id sapien id tincidunt. Morbi egestas aliquam cursus. </p>
                <button className="btn">Button</button>
            </div>
            <div className="product-card">
                <div className="product-img"></div>
                <h3 className="product-name">Product</h3> 
                <p className="product-desc">Nam et mauris sit amet velit vestibulum sagittis. Maecenas in tellus turpis. Fusce posuere id sapien id tincidunt. Morbi egestas aliquam cursus. </p>
                <button className="btn">Button</button>
            </div>
        </div>
    );
}

export default Products;