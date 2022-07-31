export type Product = {
  idProduct: number;
  imgProduct: string;
  titleProduct: string;
  typeProduct: string[];
  descriptionProduct: string;
  valueProduct: number;
};

export interface ProductWithAmount extends Product {
  amountProduct: number;
}
