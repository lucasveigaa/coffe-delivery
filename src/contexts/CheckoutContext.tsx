import { createContext, PropsWithChildren, useState } from "react";
import { InputDataType } from "../types";

interface CheckoutContextType {
  checkoutInformation: InputDataType;
  setCheckoutInformation: React.Dispatch<React.SetStateAction<InputDataType>>;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

export function CheckoutProvider({ children }: PropsWithChildren) {
  const [checkoutInformation, setCheckoutInformation] = useState<InputDataType>({} as InputDataType);

  return (
    <CheckoutContext.Provider
      value={{ checkoutInformation, setCheckoutInformation }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
