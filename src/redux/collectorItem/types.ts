export type CollectorItem = {
  id: string;
  title: string;
  subtitle: string;
  drawingUrl: string;
  imageUrl: string;
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchCollectorItemParams = {
  category: string;
};

export interface CollectorItemSliceState {
  items: CollectorItem[];
  status: Status;
}
