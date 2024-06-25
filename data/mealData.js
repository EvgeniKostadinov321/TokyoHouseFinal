import bow1 from '../public/foods/bow_1.png'
import bow2 from '../public/foods/tomYamChicken.png'
import bow3 from '../public/foods/bow3.png'
import bow4 from '../public/foods/bow4.png'
import bow5 from '../public/foods/bow5.png'
import bow6 from '../public/foods/bow6.png'



let DUMMY_MEALS = [
    {id: 1, linkName: 'miso-ramen', title: 'MISO RAMEN WITH PORK', description: 'Features a rich broth made from miso paste, which provides a savory and slightly tangy base.', imageSRC: bow1 , price: 5.49, size: '550gr' 
        ,addOns: [
            {id: '1',name: "Onion"},
            {id: '2',name: "Garlic"},      
            {id: '3',name: "Wasabi"},
            {id: '4',name: "Tempura Flakes"}    
        
    ] },
    {id: 2, linkName: 'tom-yam-chiken', title: 'TOM YAM SOUP WITH CHICKEN', description: 'A spicy, sour Thai broth with tender chicken, fresh herbs, and vibrant vegetables.', imageSRC: bow4 , price: 8.24, size: '330gr' ,addOns: [
        {id: '1',name: "Onion"},
        {id: '2',name: "Garlic"},      
        {id: '3',name: "Wasabi"}
        
    ] },
    {id: 3, linkName: 'chicken-ramen', title: 'RAMEN SOUP WITH CHICKEN', description: 'A savory Japanese broth with chicken, noodles, and assorted toppings.', imageSRC: bow3 , price: 11.53, size: '432gr' ,addOns: [
        {id: '1',name: "Onion"},
        {id: '2',name: "Garlic"},      
        {id: '3',name: "Wasabi"}
    ] },
    {id: 4, linkName: 'tom-yam-shrimp', title: 'TOM YAM SOUP WITH SHRIMP', description: 'A spicy, sour Thai broth with shrimp, fresh herbs, and vibrant vegetables.', imageSRC: bow2 , price: 12.75, size: '244gr' ,addOns: [
        {id: '1',name: "Onion"},
        {id: '2',name: "Garlic"},      
        {id: '3',name: "Wasabi"}
    ] },
    {id: 5, linkName: 'poke-shrimp', title: 'OCEAN HARMONY SUSHI SET', description: 'A Hawaiian bowl with marinated shrimp, spicy kimchi, and fresh vegetables.', imageSRC: bow5 , price: 7.45, size: '300gr' ,addOns: [
        {id: '1',name: "Onion"},
        {id: '2',name: "Garlic"},      
        {id: '3',name: "Wasabi"},
        {id: '4', name: 'Spicy Mayo'}
    ] },
    {id: 6, linkName: 'pho-duck', title: 'VIETNAMESE PHO WITH DUCK', description: 'A fragrant Vietnamese broth with tender duck, rice noodles, and fresh herbs.', imageSRC: bow6 , price: 4.66, size: '450gr' ,addOns: [
        {id: '1',name: "Onion"},
        {id: '2',name: "Garlic"}, 
        {id: '3',name: "Extra Wasabi"},
    ] },
]

export default DUMMY_MEALS