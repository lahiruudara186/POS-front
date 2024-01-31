import React from "react";
import './additem.css'
import axios from "axios";
import { useState } from "react";

function AddItem() {


    const [itemName, setItemName] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [currentStock, setCurrentStock] = useState("");
    const [alreadySold, setAlreadySold] = useState("");


    async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
        
         await axios.post("http://localhost:8080/items/add", 
         {
            name:itemName,
            price:unitPrice,
            stock:currentStock,
            sold:alreadySold,
            revenue:100

            
                // name:"test juice",
                // price:"80.0",
                // stock:"100.0",
                // sold:"",
                // revenue:""
            

        }
        );

        setItemName("");
          setUnitPrice("");
          setCurrentStock("");
          setAlreadySold("");
          alert("Item Added Successfully");
          window.location.reload(false);
          
        
        }
    catch(err)
        {
          alert(err);
        }
   }

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2 className="formtxt">Add Item</h2>
                    <h2 className="subtxt">item will be added to the inventory</h2>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Item Name' name="itemName" onChange={(event) =>{setItemName(event.target.value);}}/>
                        <input type="text" placeholder='Unit Price' name="unitPrice" onChange={(event) =>{setUnitPrice(event.target.value);}}/>
                        <input type="text" placeholder='Current Stock' name="currentStock" onChange={(event) =>{setCurrentStock(event.target.value);}}/>
                        <input type="text" placeholder='Already Sold' name="alreadySold" onChange={(event) =>{setAlreadySold(event.target.value);}}/>

                        <button type="submit" className='btn'>Add</button>
                    </form>

                </div>

            </div>
        </section>

    );
}

export default AddItem;