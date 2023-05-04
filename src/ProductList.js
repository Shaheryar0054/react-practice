import React, { useState, useEffect } from 'react';
import './index.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://deshole.com/wp-json/wc/v3/products?per_page=100', {
      headers: {
        Authorization:
          'Basic Y2tfZDNmYTBhZTMzODA0ZWNjYWEwMTE4ZWM4MzNkMGE4ODEwZjc4M2UxMTpjc19lY2U3ODdhZTU0MmRhN2JkYjg5N2Y0NWRkMzIzN2M3Zjc0NmZhN2Qx',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.images[0].src} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.short_description}</p>
            <p>
              Price:
              {product.price}
              {' '}
              {product.currency}
            </p>
            <p>
              Stock Quantity:
              {product.stock_quantity}
            </p>
            <p>
              Stock Status:
              {product.stock_status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
