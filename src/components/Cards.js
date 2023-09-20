import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Charity Organization!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/caritas.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Caritas'
              path='/services'
            />
            <CardItem
              src='images/green-earth.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Green Earth'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/haribon.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Foundation Haribon'
              path='/services'
            />
            <CardItem
              src='images/unicef.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Unicef'
              path='/services'
            />
            <CardItem
              src='images/world-vision.png'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='World Vision'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;