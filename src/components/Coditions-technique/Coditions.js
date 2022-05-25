import React from 'react';
import './Coditions.scss';
import ethique from '../../assets/icons/ethique.jpg';
import expertise from '../../assets/icons/Expertise_technique.jpg';
import organisation from '../../assets/icons/organisation.jpg';
const Coditions = () => {
  return (
    <div className='conditions '>
      <div className='condition ethique '>
        <img src={ethique} alt='ethique' />
        <h3>Ethique</h3>
      </div>
      <div className='condition expertise '>
        <img src={expertise} alt='expertise' />
        <h3>
          Expertise <br />
          Technique
        </h3>
      </div>
      <div className='condition organisation '>
        {' '}
        <img src={organisation} alt=' organisation' />
        <h3>Organisation</h3>
      </div>
    </div>
  );
};
export default Coditions;
