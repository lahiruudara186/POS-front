import React from "react";
import './additem.css'

function ShopProfile() {
    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2 className="formtxt">Business Profile</h2>
                    <h2 className="subtxt">this details will be added to the reciepts</h2>

                    <form id='form' className='flex flex-col'>
                        <input type="text" placeholder='Name of Your Business' />
                        <input type="text" placeholder='Address or Web' />
                        <input type="text" placeholder='Phone Number' />
                        <input type="text" placeholder='Name of Yours to Find on Social Media' />
                        <input type="text" placeholder='Currency Symbol (e.g-$,Rs)' />

                        <button className='btn'>Create</button>
                    </form>

                </div>

            </div>
        </section>

    );
}

export default ShopProfile;