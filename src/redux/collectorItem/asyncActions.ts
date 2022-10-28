import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CollectorItem, SearchCollectorItemParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchCollectorItems = createAsyncThunk<
  CollectorItem[],
  SearchCollectorItemParams
>('collectorItem/fetchCollectorItemsStatus', async (params) => {
  const { category } = params;
  const { data } = await axios.get<CollectorItem[]>(
    `https://6340b21416ffb7e275c45dec.mockapi.io/collectorItems`,
    {
      params: pickBy(
        {
          limit: 6,
          category,
        },
        identity
      ),
    }
  );

  return data;
});
