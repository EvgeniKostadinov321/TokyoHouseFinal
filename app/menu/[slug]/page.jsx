'use client'
import './mealDetails.css'
import DUMMY_MEALS from '@/data/mealData'
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function MealDetail({ params }) {
    const correctArrayItem = DUMMY_MEALS.find((meal) => meal.linkName === params.slug);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const router = useRouter(); 
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleAddOnChange = (event) => {
        const { name, checked } = event.target;
        setSelectedAddOns((prevAddOns) => 
            checked ? [...prevAddOns, name] : prevAddOns.filter((addOn) => addOn !== name)
        );
    };

    const handleAddToCart = () => {
        addToCart({ ...correctArrayItem, quantity, selectedAddOns, totalPrice: (correctArrayItem.price * quantity).toFixed(2) });
        router.push('/menu');
    };

    const totalPrice = (correctArrayItem.price * quantity).toFixed(2);

    return (
        <section id="meal-detail-section">
            <div className='meal-box-wrapper'>
                <form className='form-single-meal'>
                    <Image className='image-single-meal-detail' src={correctArrayItem.imageSRC} alt={correctArrayItem.title} />
                    <div className='meal-price-name'>
                        <h1 className='single-meal-name'>{correctArrayItem.title}</h1>
                        <p className='single-meal-detail-parag'>{totalPrice}$</p>
                    </div>
                    <p className='single-meal-detail-parag'>{correctArrayItem.description}</p>
                    <div className='quantity-detail-div'>
                        <h2>Quantity</h2>
                        <select 
                            name="" 
                            id="select-quantity-meal" 
                            value={quantity} 
                            onChange={handleQuantityChange}
                        >
                            {Array.from({ length: 10 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>
                    <div className='checkbox-meal-detail'>
                        <h2 id='add-ons-h2'>Add-ons</h2>
                        <div id='ingred-wrapper'>
                            {correctArrayItem.addOns.map((add) => (
                                <div key={add.id} className='checkbox-ing-meal-details'>
                                    <input 
                                        type="checkbox" 
                                        className='input-ingred' 
                                        name={add.name} 
                                        onChange={handleAddOnChange}
                                    />
                                    <label className='ingred-label' htmlFor={add.name}>{add.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type="button" id='add-to-cart-btn' onClick={handleAddToCart}>ADD TO CART</button>
                </form>
            </div>
        </section>
    );
}
