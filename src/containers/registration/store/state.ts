import Registration from "./model";

export interface RegistrationState {
  isFetching: boolean;
  errorMessage: string;
  registration: Registration;
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
    documentos: []
  },
  isFetching: false,
  errorMessage: ""
};
