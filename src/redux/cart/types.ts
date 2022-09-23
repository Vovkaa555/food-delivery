export type CartItem = {
    id: string;
    type: string;
    title: string;
    price: number;
    image: string;
    count: number;
  }
  
 export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }