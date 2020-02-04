import React from "react";
import "./design.css";
import Data from "../../data/products.json";

function actualPrice(price) {
  return price * 0.01;
}

export default function Store() {
  return (
    <div>
      <div className="productslisting">
        {Data.products.map(product => (
          <div class="col-md-4">
            <div>
                    <img
                        width={100}
                        title={product.name}
                        src={product.image}
                    />
            </div>

            <div>${actualPrice(product.price)} </div>

            <div> {product.name} </div>

                <button

                >Add to cart
                </button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
