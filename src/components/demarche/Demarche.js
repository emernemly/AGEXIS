import React from 'react';
import './Demarche.scss';
import demarche from './../../assets/img/demarche_new_pic.png';
import LogoBlue from '../../assets/img/logo_agexis.jpg';
import { ReactComponent as CadreUp } from '../../assets/icons/cadre_up.svg';

const Demarche = () => {
  return (
    <div className="demarche">
      <div className="all-demarche">
        <div className="left-demarche">
          <div className="title">
            <h3>
              Notre démarche <CadreUp />
            </h3>
          </div>

          <div className="demarche-contant">
            <h4>AGEXIS</h4>
            <p>
              a dont le but de développer son offre et répandre a ses
              engagements opérationnels et techniques d'excellence tout en ayant
              une vision en harmonie d'un point de vue sociétal et écologique
            </p>
            <ul>
              <li>Mise en place d'un organisation</li>
              <li>Mise en place d'une offre technique certifier</li>
              <li> Mise en place d'une offre technique certifier</li>
              <li> Promouvoir le RGE auprès des différents acteurs d AGEXIS</li>
            </ul>
          </div>
        </div>
        <div className="demarche-image">
          <img src={demarche} alt="demarche_pic.png" />

          <div className="demarche-description">
            <div className="date">2015-2022</div>
            <img
              className="logo"
              src={LogoBlue}
              alt="Logo agexis bureau etude france"
            />
            <p>
              AGEXIS prend en main les études de l'ensemble des étapes du cycle
              de votre projet, qu'il s'agisse de nouvelle construction, de
              rénovation, d'extension de démolition ou d'aménagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demarche;
