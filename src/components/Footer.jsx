import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col " style={{fontFamily: "Pixelify Sans"}}>
            <div className='text-center'>The Pokemon Mart</div>
            <div className='flex flex-col sm:flex-row justify-between p-4'>
                <div>
                    <div>Categories</div>

                    <div>Pokeballs</div>
                    <div>Potions</div>
                    <div>TMs</div>
                    <div>Berries</div>
                    <div>Key Items</div>
                </div>
                <div>
                    <div>Customer Service</div>
                    
                    <div>Shipping</div>
                    <div>Return Policy</div>
                    <div>Contact Us</div>
                    <div>FAQ</div>
                </div>
                <div>
                    <div>Follow Us</div>

                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                    <div>YouTube</div>
                </div>
            </div>
            <div className='flex p-4 sm:p-0 flex-col sm:flex-row justify-between'>
                <div>About Us</div>
                <div>Contact</div>
                <div>Careers</div>
                <div>Terms of Service</div>
                <div>Privacy Policy</div>
            </div>
            <div className='text-center bg-black text-white'>© 2024 The Pokemon Store. All rights reserved.</div>
        </div>
    )
};
export default Footer;