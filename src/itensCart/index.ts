import ImgExpressoTradicional from "../assets/01-expresso-tradicional.svg";
import ImgExpressoAmericano from "../assets/02-expresso-americano.svg";
import ImgExpressoCremoso from "../assets/03-expresso-cremoso.svg";
import ImgExpressoGelado from "../assets/04-expresso-gelado.svg";
import ImgCafeComLeite from "../assets/05-cafe-com-leite.svg";
import ImgLatte from "../assets/06-latte.svg";
import ImgCapuccino from "../assets/07-capuccino.svg";
import ImgMacciato from "../assets/08-macciato.svg";
import ImgMocaccino from "../assets/09-mocaccino.svg";
import ImgChocolateQuente from "../assets/10-chocolate-quente.svg";
import ImgCubano from "../assets/11-cubano.svg";
import ImgHavaiano from "../assets/12-havaiano.svg";
import ImgArabe from "../assets/13-arabe.svg";
import ImgIrlandes from "../assets/14-irlandes.svg";

export const coffeItens = [
  {
    idProduct: 1,
    imgProduct: ImgExpressoTradicional,
    typeProduct: ["TRADICIONAL"],
    titleProduct: "Expresso Tradicional",
    descriptionProduct:
      "O tradicional café feito com água quente e grãos moídos",
  },
  {
    idProduct: 2,
    imgProduct: ImgExpressoAmericano,
    typeProduct: ["TRADICIONAL", "GELADO"],
    titleProduct: "Expresso Americano",
    descriptionProduct: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    idProduct: 3,
    imgProduct: ImgExpressoCremoso,
    typeProduct: ["TRADICIONAL"],
    titleProduct: "Expresso Cremoso",
    descriptionProduct: "Café expresso tradicional com espuma cremosa",
  },
  {
    idProduct: 4,
    imgProduct: ImgExpressoGelado,
    typeProduct: ["TRADICIONAL", "GELADO"],
    titleProduct: "Expresso Cremoso",
    descriptionProduct: "Bebida preparada com café expresso e cubos de gelo",
  },
  {
    idProduct: 5,
    imgProduct: ImgCafeComLeite,
    typeProduct: ["TRADICIONAL", "COM LEITE"],
    titleProduct: "Café com Leite",
    descriptionProduct:
      "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    idProduct: 6,
    imgProduct: ImgLatte,
    typeProduct: ["TRADICIONAL", "COM LEITE"],
    titleProduct: "Café com Leite",
    descriptionProduct:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    idProduct: 7,
    imgProduct: ImgCapuccino,
    typeProduct: ["TRADICIONAL", "COM LEITE"],
    titleProduct: "Capuccino",
    descriptionProduct:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    idProduct: 8,
    imgProduct: ImgMacciato,
    typeProduct: ["TRADICIONAL", "COM LEITE"],
    titleProduct: "Macchiato",
    descriptionProduct:
      "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    idProduct: 9,
    imgProduct: ImgMocaccino,
    typeProduct: ["TRADICIONAL", "COM LEITE"],
    titleProduct: "Mocaccino",
    descriptionProduct:
      "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    idProduct: 10,
    imgProduct: ImgChocolateQuente,
    typeProduct: ["ESPECIAL", "COM LEITE"],
    titleProduct: "Chocolate Quente",
    descriptionProduct:
      "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    idProduct: 11,
    imgProduct: ImgCubano,
    typeProduct: ["ESPECIAL", "ALCOÓLICO","GELADO"],
    titleProduct: "Cubano",
    descriptionProduct:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    idProduct: 12,
    imgProduct: ImgHavaiano,
    typeProduct: ["ESPECIAL"],
    titleProduct: "Havaiano",
    descriptionProduct: "Bebida adocicada preparada com café e leite de coco",
  },
  {
    idProduct: 13,
    imgProduct: ImgArabe,
    typeProduct: ["ESPECIAL"],
    titleProduct: "Árabe",
    descriptionProduct:
      "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    idProduct: 14,
    imgProduct: ImgIrlandes,
    typeProduct: ["ESPECIAL", "ALCOÓLICO"],
    titleProduct: "Irlandês",
    descriptionProduct:
      "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];
