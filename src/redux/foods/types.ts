export type FoodItem = {
    id: string;
    type: string;
    image: string; 
    title: string; 
    price: number;
    description: string;
    weight: number;
  }
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }

  export type SearchFoodsParams = {
    search: string, category: string, sortBy: string, order: string, currentPage: string,
  }
  
  export interface FoodSliceState {
    items: FoodItem[];
    status: Status;
  }