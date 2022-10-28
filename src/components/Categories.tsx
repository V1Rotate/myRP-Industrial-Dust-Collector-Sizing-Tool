import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['72 - 272', '72 - 92', '136 - 156', '200 - 272']; // Number of filter bags of each dust collector. Main and single (in this project) parameter that affects the selection. In fact, there is a big number of other parameters that make an engineer to make a specific choice. So I just used the number of filter bags, to make it more simple. I don't see any need to apply many parameters.

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className='categories'>
        <ul className='categories_list'>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : ''}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
