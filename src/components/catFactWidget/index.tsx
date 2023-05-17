import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import cn from 'classnames';
import styles from './cat.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchBreeds, fetchFact } from '../../redux/facts/asyncAction';
import { useDebounce } from '../../hooks/useDebounce';

const CatFacts: React.FC = () => {
  const fact = useAppSelector((state) => state.facts);

  const dispatch = useAppDispatch();

  const getBreeds = async (): Promise<any> => {
    try {
      dispatch(fetchBreeds());
    } catch (error) {
      toast.error('Error while getting breeds');
    }
  };

  const getFact = async (): Promise<any> => {
    try {
      dispatch(fetchFact());
    } catch (error) {
      toast.error('Error while getting facts');
    }
  };

  useEffect(() => {
    getBreeds();
    getFact();
  }, []);

  useDebounce(
    15000,
    () => {
      getFact();
    },
    [fact.randomCatFact],
  );

  return (
    <div className={cn(styles.factsWidget)}>
      <div className={cn(styles.catFacts)}>
        <h3 className={styles.catHeader}>
          Here you will get a random cat fact every 15 seconds
        </h3>
        <p className={styles.randomFact}>{fact.randomCatFact}</p>
      </div>
      <div className={cn(styles.breedTypes)}>
        <h3 className={styles.breedsHeadere}>Info about breeds</h3>
        <div className={styles.allBreeds}>
          {' '}
          <ul className={styles.breedList}>
            {fact.breeds.map((obj) => (
              <li
                key={`${obj.breed}_${obj.coat}_${obj.origin}`}
                className={styles.eachBreed}
              >
                <p>
                  {`Breed: ${obj.breed} Coat: ${obj.coat} Country: ${obj.country} Origin: ${obj.origin} Pattern: ${obj.pattern}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CatFacts;
