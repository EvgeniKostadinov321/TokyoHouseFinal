'use client'
import './cart-style.css';
import './single-item-style.css';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function Cart() {
    const [removeBtnStyle, setRemoveBtnStyle] = useState('remove-order-component-btn');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // State to track if the component is mounted
    const [address, setAddress] = useState(''); // State to track the address input
    const [addressError, setAddressError] = useState(''); // State to track address validation error
    const { isDarkMode } = useTheme();
    const { cart, removeFromCart, clearCart } = useCart(); // Add clearCart to the context
    const router = useRouter(); // Initialize useRouter

    

    useEffect(() => {
        setIsMounted(true); // Set isMounted to true after the component mounts

        if (isDarkMode) {
            setRemoveBtnStyle('remove-order-component-btn-dark');
        } else {
            setRemoveBtnStyle('remove-order-component-btn');
        }
    }, [isDarkMode]);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + parseFloat(item.totalPrice), 0).toFixed(2);
    }

    const handleConfirmOrder = () => {
        if (cart.length === 0) {
            alert('There are no items in the cart.');
            return;
        }

        if (address.trim() === '') {
            setAddressError('Address is required.');
            return;
        }

        if (address.trim().length < 5) {
            setAddressError('The address must me at least 5 symbols.');
            return;
        }

        // Simulate sending order
        setTimeout(() => {
            setShowSuccessMessage(true);
            // Reset success message after 3 seconds
            setTimeout(() => {
                setShowSuccessMessage(false);
                // Clear the cart
                clearCart();
                // Redirect to home page after success
                if (isMounted) { // Ensure router is used only after the component has mounted
                    router.push('/');
                }
            }, 1000);
        }, 500);
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        if (e.target.value.trim() !== '') {
            setAddressError('');
        }
    }

    return (
        <section id='shopping-cart'>
            <div className='cart-wrapper-box'>
                <div className='items-wrapper'>
                    {cart.length === 0 ? (
                        <p className="empty-cart-message">There are no items in the cart.</p>
                    ) : (
                        cart.map((item) => (
                            <div className='item-container' key={item.id}>
                                <div className='order-name_details'>
                                    <h1 className='header-single-order-element'>{item.title}</h1>
                                    {item.selectedAddOns.length > 0 && (
                                        <p className='parag-item-singular'>Add-ons: {item.selectedAddOns.join(', ')}</p>
                                    )}
                                    <div className='information-meal-sigle-price-plus-quantity'>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>{(item.price * item.quantity).toFixed(2)}$</p>
                                    </div>
                                </div>
                                <button className={removeBtnStyle} onClick={() => removeFromCart(item.id)}>Remove Item</button>
                            </div>
                        ))
                    )}
                </div>
                <div className='total-order-wrapper'>
                    <div className='form-group-cart'>
                        <label id='label-address'>Enter Address</label>
                        <input 
                            min={4} 
                            maxLength={50} 
                            id='address-input-cart' 
                            className={isDarkMode ? 'input-dark-cart' : 'input-light-cart'} 
                            placeholder='Enter your address.' 
                            type='text' 
                            value={address}
                            onChange={handleAddressChange}
                            required
                        />
                        {addressError && <p className='error-message'>{addressError}</p>}
                    </div>
                    <div className='group-order-total'>
                        <p>Total Price</p>
                        <p>{calculateTotal()}$</p>
                    </div>
                    <button id='confirm-order-btn' onClick={handleConfirmOrder}>CONFIRM ORDER</button>
                    {showSuccessMessage && (
                        <p className="success-message">Order sent successfully!</p>
                    )}
                </div>
            </div>
        </section>
    )
}
