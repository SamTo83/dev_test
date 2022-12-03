import { React, useState } from 'react';
import ExoPlanet from '../../assets/planets.json';
import Placeholder from './imagePlaceholder.PNG';
import style from './style.module.scss';

const Planets = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <h1 className={style.title}>List of ExoPlanets</h1>
      <div className={style.cardContainer}>
        {ExoPlanet.sort(function (a, b) {
          const dateA = new Date(a.releasedate);
          const dateB = new Date(b.releasedate);
          if (dateA > dateB) return 1;
          else if (dateA < dateB) return -1;
          return 0;
        }).map((planet) => {
          return (
            <div className={style.wrapper} key={planet.id}>
              <img className={style.img} src={planet.image} alt="Planets" />
              <div>
                <h5 className={style.label}>
                  <span>Planet Name:</span> {planet.pl_name}
                </h5>
                <p className={style.label}>
                  <span>Planet Radius:</span> {planet.pl_rade}
                </p>
                <p className={style.label}>
                  <span>Release Date:</span> {planet.releasedate}
                </p>
              </div>
              <button className={style.openModalBtn} onClick={toggleModal}>
                Click for more info
              </button>
            </div>
          );
        })}
        <div className={style.modalDisplay}>
          {modalOpen && (
            <div className={style.modalBackground}>
              <div className={style.modalContainer}>
                <div className={style.modalCloseBtn}>
                  <button onClick={toggleModal}>Close</button>
                </div>
                <div className={style.modalWrapper}>
                  <div>
                    <img className={style.modalPlaceholder} src={Placeholder} alt="placeholder" />
                  </div>
                  <div>
                    <h1 className={style.modalTitle}>Name of ExoPlanet</h1>
                    <br />
                    <br />
                    <p className={style.modalDescription}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, cum explicabo sint debitis ratione fuga quia nulla
                      vero cumque! Dolore totam nostrum velit laborum debitis
                      dicta. Harum, maxime quibusdam dolorem omnis odit aut
                      doloremque sit obcaecati cupiditate enim perspiciatis.
                      Assumenda mollitia minima quas iusto quis ut ex maiores
                      beatae necessitatibus?.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planets;
