import { dividerClasses } from "@mui/material";
import { useState } from "react";

const Cart = (cart, setCart) =>{
    const [price, setPrice] = useState(0);

    return (
        <article>
            {
              cart.map((item)=>{
                <div className="cart_box" key={item.id}>
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <button>+</button>
                    <button>-</button>
                  </div>
                  <div>
                    <span>{item.price}</span>
                    <button>Remove</button>
                  </div>

                </div>
              })
            }
            <div>
                <span>Total Price</span>
                <span>Rs {price}</span>
            </div>
        </article>
    )
}

export default Cart;