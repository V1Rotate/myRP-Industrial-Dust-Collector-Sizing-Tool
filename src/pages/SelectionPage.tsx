import React from 'react';

import { useSelector } from 'react-redux';

import { CollectorItemBlock } from '../components/CollectorItemBlock';
import { Skeleton } from '../components/CollectorItemBlock/Skeleton';
import { Categories } from '../components/Categories';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectCollectorItemData } from '../redux/collectorItem/selectors';
import { setCategoryId } from '../redux/filter/slice';
import { fetchCollectorItems } from '../redux/collectorItem/asyncActions';
import { Link } from 'react-router-dom';

export const SelectionPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectCollectorItemData);
  const { categoryId } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const getCollectorItems = async () => {
    const category = categoryId > 0 ? String(categoryId) : '';

    dispatch(
      fetchCollectorItems({
        category,
      })
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getCollectorItems();
  }, [categoryId]);

  const collectorItems = items.map((obj: any) => (
    <CollectorItemBlock key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className='input'>
      <div className='input-header'>
        <h1>RP MODEL SELECTION</h1>
      </div>
      <div className='input-grid'>
        <div className='input-grid__item leftCol'>Number of Filters</div>
        <div className='input-grid__item'>
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        </div>
      </div>
      <div className='input-buttons'>
        <button className='input-buttons__select inputBtn'>
          <div>
            <Link to='/saveinfo' className='input-link '>
              Save Info
            </Link>
          </div>
        </button>
        <button className='input-buttons__back inputBtn'>
          <div>
            <Link to='/menu' className='input-link '>
              Back
            </Link>
          </div>
        </button>
        <button className='input-buttons__signOut inputBtn'>
          <div>
            <Link to='/' className='input-link'>
              Sign Out
            </Link>
          </div>
        </button>
      </div>
      <div className='content-items'>
        {status === 'loading' ? skeletons : collectorItems}
      </div>
    </div>
  );
};

export default SelectionPage;
