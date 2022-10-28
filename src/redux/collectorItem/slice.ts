import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCollectorItems } from './asyncActions';
import { CollectorItem, CollectorItemSliceState, Status } from './types';

const initialState: CollectorItemSliceState = {
  items: [],
  status: Status.LOADING,
};

const collectorItemSlice = createSlice({
  name: 'collectorItem',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<CollectorItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollectorItems.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchCollectorItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchCollectorItems.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = collectorItemSlice.actions;

export default collectorItemSlice.reducer;
