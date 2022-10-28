import { RootState } from '../store';

export const selectCollectorItemData = (state: RootState) =>
  state.collectorItem;
