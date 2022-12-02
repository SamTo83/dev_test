import React from 'react';
import ExoPlanet from '../../assets/planets.json';
import style from './style.module.scss';

const Planets = () => {
  return (
    <div>
      <h1 className={style.title}>List of ExoPlanets</h1>
      <div className={style.cardContainer}>
      {
        ExoPlanet.sort(function(a, b){
          const dateA = new Date(a.releasedate);
          const dateB = new Date(b.releasedate);
          if (dateA > dateB) return 1;
          else if (dateA < dateB) return -1;
          return 0
        }).map((planet) => {
          return (
            <div className={style.wrapper} key={planet.id}>
              <img className={style.img} src={planet.image} alt="Planets" />
              <div>
              <h5 className={style.label}><span >Planet Name:</span> {planet.pl_name}</h5>
              <p className={style.label}><span >Planet Radius:</span> {planet.pl_rade}</p>
              <p className={style.label}><span >Release Date:</span> {planet.releasedate}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Planets;
