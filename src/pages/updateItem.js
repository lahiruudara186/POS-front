import React, { useEffect } from "react";
import './additem.css'
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function UpdateItem() {


    const [itemName, setItemName] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [currentStock, setCurrentStock] = useState("");
    const [alreadySold, setAlreadySold] = useState("");

    const { id } = useParams();
    const [values, setValues] = useState({
        id:id,
        name:"",
        price:"",
        stock:"",
        sold:"",
        revenue:""
    })

    // const navigate = useNavigate();

    
    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post("http://localhost:8080/items/add",values).then(
            res => {
                // navigate("/inventory")


            }
        ).catch(err =>console.log(err))
    }


    useEffect(()=>{
      axios.get("http://localhost:8080/items/item/"+id)
      .then(res =>{
        setValues({...values, name:res.data.name, price:res.data.price, stock:res.data.stock, sold:res.data.sold, revenue: res.data.revenue})
      })
      .catch(err => console.log(err))

    },[])


    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2 className="formtxt">Update Item</h2>
                    <h2 className="subtxt">item will be updated as per the changes</h2>

                    <form id='form' className='flex flex-col'onSubmit={handleSubmit}>
                        <input type="text" placeholder='Item Name' name="itemName" value={values.name} onChange={e =>setValues({...values, name:e.target.value})}/>
                        <input type="text" placeholder='Unit Price' name="unitPrice" value={values.price} onChange={e =>setValues({...values, name:e.target.value})}/>
                        <input type="text" placeholder='Current Stock' name="currentStock" value={values.stock} onChange={e =>setValues({...values, name:e.target.value})}/>
                        <input type="text" placeholder='Already Sold' name="alreadySold" value={values.sold} onChange={e =>setValues({...values, name:e.target.value})}/>

                        <button type="submit" className='btn'>Update</button>
                    </form>

                </div>

            </div>
        </section>

    );
}

export default UpdateItem;