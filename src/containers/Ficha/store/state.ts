import Ficha from "./model";

export interface RegistrationState {
  isFetching: boolean;
  errorMessage: string;
  registration: Ficha;
}

export const RegistrationInitalState: RegistrationState = {
  registration: {
    noCuenta: "",
    rne: "",
    name: "",
    lastname: "",
    date: new Date(),
    matrDate: new Date(),
    curso: " ",
    modalidad: "",
    institutoAnterior: "",
    seccion: "",
    provinencia: "",
    documentos: [],
    paper: ""
  },
  isFetching: false,
  errorMessage: ""
};
