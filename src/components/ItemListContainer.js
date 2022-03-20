
import React from 'react'
import ItemCount from './ItemCount';
//Drinks
import fernetBranca from '../Drinks/fernetBranca.jpg'
import Aperol from '../Drinks/Aperol.webp'
import JackDaniels from '../Drinks/Whisky Jack Daniels.webp'
import RonMalibu from '../Drinks/ronMalibu.jpg'
import GinBombay from '../Drinks/GinBombaySapphire.webp'
import JoseCuervo from '../Drinks/Jose Cuervo Especial.png'
import Absolut from '../Drinks/vodkaAbsolut.jpg'
import Gancia from '../Drinks/gancia.jpg'
//CSS
import '../css/ItemListContainer.css'

const ItemListContainer = () => {
  return (
    <div className='ItemListContainer'>

     <ItemCount title='Fernet Branca'
      img={fernetBranca} alt={fernetBranca}
      stock={4}
      price={1250}/>
     <ItemCount title='Aperol'
      img={Aperol} alt={Aperol}
      stock={10}
      price={790}/>
     <ItemCount title='Whisky Jack Daniels'
      img={JackDaniels} alt={JackDaniels}
      stock={8}
      price={4500}/>
     <ItemCount title='Ron Malibu'
      img={RonMalibu} alt={RonMalibu}
      stock={3}
      price={2230}/>
     <ItemCount title='Gin Bombay Sapphire'
      img={GinBombay} alt={GinBombay}
      stock={11}
      price={1250}/>
     <ItemCount title='Jose Cuervo Especial'
      img={JoseCuervo} alt={JoseCuervo}
      stock={18}
      price={2990}/>
     <ItemCount title='Vodka Absolut'
      img={Absolut} alt={Absolut}
      stock={6}
      price={2400}/>
     <ItemCount title='Gancia'
      img={Gancia} alt={Gancia}
      stock={4}
      price={1000}/>
      
    </div>
  )
}


export default ItemListContainer