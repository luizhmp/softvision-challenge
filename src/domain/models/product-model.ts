interface RatingInterface {
  count: number;
  rate: number;
}

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: RatingInterface;
}
