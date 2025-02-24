import { createContext, useState } from "react";

export const UserInformationContext = createContext();

export const UserInformationProvider = ({ children }) => {
  const [breedTypeRadioValue, setBreedTypeRadioValue] = useState("");

  const [servicesRadioValue, setServicesRadioValue] = useState("");

  const updateBreedTypeRadioValue = (value) => {
    setBreedTypeRadioValue(value);
    console.log(value);
  };

  const updateServicesRadioValue = (value) => {
    setServicesRadioValue(value);
    console.log(value);
  };

  return (
    <UserInformationContext.Provider
      value={{
        breedTypeRadioValue,
        servicesRadioValue,
        updateBreedTypeRadioValue,
        updateServicesRadioValue,
      }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};

/*

import { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (data) => {
    setFormData(data);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

*/
