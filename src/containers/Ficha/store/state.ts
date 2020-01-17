import Ficha from "./model";

export interface FichaState {
  isFetching: boolean;
  errorMessage: string;
  ficha: Ficha;
}

export const FichaInitalState: FichaState = {
  ficha: {
    noCuenta: "",
    rne: "",
    nombre: "",
    apellido: "",
    lugarDeNacimiento: "",
    fechaDeNacimiento: new Date(),
    edad: "",
    genero: false,
    nacionalidad: "",
    direccion: "",
    telefono: "",
    tipoDeSangre: "",
    loading: false,
    confirmDirty: false,
    autoCompleteResult: []
  },
  isFetching: false,
  errorMessage: ""
};
