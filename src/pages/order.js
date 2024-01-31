import Axios from "axios";
// import React from "react";
import React, { useState, useEffect } from "react";
import './additem.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import * as icons from 'react-icons/ai';
import Cart from "./cart";
import { Button, Row } from "antd";
import Column from "antd/es/table/Column";
import { Link } from 'react-router-dom';
import { CartProvider } from "react-use-cart";



// function Inventory() {

//     document.addEventListener('DOMContentLoaded', function () {
//         getProducts();
//     });

//     const getProducts = () => {
//         fetch("http://localhost:8080/items/allitems").then((response) => {

//             return response.json();

//         }).then((data) => {

//             let product;

//             data.map((product) => {
//              product += <MDBCardTitle className='cardText'>${product.name}</MDBCardTitle>;
//              product += <MDBCardText className='cardText'>${product.stock}</MDBCardText>;
//             });

//             document.getElementById('products').innerHTML = product;

//         }).catch((error) => {
//             console.log(error);
//             // alert(error);
//         });
//     }

//     return (
//         <MDBCard>
//       <MDBCardBody id='products'>
//         <MDBCardTitle className='cardText'>Card title</MDBCardTitle>
//         <MDBCardText className='cardText'>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn>Button</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//     );
// }




function Order() {


    const [show,setShow]=useState(true);
    const [cart,setCart]=useState([]);
    const [products, setProducts] = useState([]);
    const [warning, setWarning]= useState(false);

    const fetchProducts = async () => {
        const { data } = await Axios.get(
            "http://localhost:8080/items/allitems"
        );
        const products = data;
        setProducts(products);
        console.log(products);
    };


    useEffect(() => {
        fetchProducts();
    }, []);


    // const handleClick = (productName) => {

    //     Axios.delete(`http://localhost:8080/items/delete/${productName}`).then(res => {
    //         alert(`Deleted ${productName}`, res)
    //         window.location.reload(false);
    //     }).catch(err => alert(err));
    // }

    // const handleUpdate = (productName) => {

    // }

    const handleClick = (item)=>{
        console.log(item);
        let isPresent = false;
        cart.forEach((pd)=>{
            if(item.id===pd.id)
            isPresent = true;
        })
        if(isPresent){
            setWarning(true);
          setTimeout(()=>{
            setWarning(false)
          },2000)
          return;
        }
        
        setCart([...cart,item]);
    }



    return (
       
        <div>
             <Link to="#" className="menu-bars">
          <icons.AiFillShopping onClick={()=>setShow(false)}/>
          <span>{cart.length}</span>
          {
            warning && <div className="warning">Item is already added</div>
          }
          {
            show ? <Cart cart={cart} setCart={setCart}></Cart> : <p>No items</p>
          }
        </Link>

            <Row gutter={[20, 20]}>
                {products.map((product) => (

                    <MDBCard className="cardD" onClick={()=>handleClick(product)}>
                        <MDBCardBody id='products'>
                            <MDBCardTitle className='cardNum'>{product.name}</MDBCardTitle>
                            <MDBCardText className='cardText'>Price</MDBCardText>
                            <MDBCardText className='cardNum'>{product.price}</MDBCardText>
                            <MDBCardText className='cardText'>Stock</MDBCardText>
                            <MDBCardText className='cardNum'>{product.stock}</MDBCardText>
                            <MDBCardText className='cardText'>Sold</MDBCardText>
                            <MDBCardText className='cardNum'>{product.sold}</MDBCardText>
                            <MDBCardText className='cardText'>Revenue</MDBCardText>
                            <MDBCardText className='cardNum'>{product.revenue}</MDBCardText>
                            {/* <Link className="duButtons" to={`/updateitem${product.id}`}>Update</Link>
                            <Link className="duButtons"onClick={() => { handleClick(product.id) }} to="/inventory">Delete</Link> */}
                        </MDBCardBody>

                    </MDBCard>


                ))}
            </Row>

        </div>


    );

}



export default Order;