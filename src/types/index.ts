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

export interface InputDataType {
  cep: number;
  street: string;
  num: string;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  paymentMethod: string;
}
