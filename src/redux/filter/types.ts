export enum SortPropertyEnum {
    TITLE_ASC = 'title',
    TITLE_DESC = '-title',
    PRICE_ASC = 'price',
    PRICE_DESC = '-price',
  
  }
  
  export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
  }
  
  export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: Sort;
  }