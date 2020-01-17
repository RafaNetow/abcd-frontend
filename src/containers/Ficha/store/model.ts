export default interface FichaModel {
  noCuenta: String;
  rne: String;
  correo: String;
  nombre: String;
  apellido: String;
  lugarDeNacimiento: String;
  fechaDeNacimiento: Date;
  edad: String;
  genero: Boolean;
  nacionalidad: String;
  direccion: String;
  telefono: String;
  tipoDeSangre: String;
  loading: boolean;
  confirmDirty: Boolean;
  autoCompleteResult: [];
}
