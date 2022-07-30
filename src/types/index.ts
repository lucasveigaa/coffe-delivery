export type Product = {
  idProduct: number;
  imgProduct: string;
  titleProduct: string;
  typeProduct: string;
  descriptionProduct: string;
};

export interface ProductWithAmount extends Product {
  amountProduct: number;
}
