import Registration from './model'


export interface FichaState {
    isFetching: boolean;
    errorMessage: string;
    registration: Registration;
}

export const RegistrationInitalState: FichaState  ={
    registration: {
      noCuenta: '',
      rne: '', 
      matricula:'',
      name: '',
      lastname: '',
      date: new Date(),
      matrDate: new Date(),
      curso: ' ',
      modalidad: '',
      institutoAnterior: '',
      seccion: '',
      provinencia: '',
      documentos:[],
      paper:''

    },
    isFetching: false,
    errorMessage:''
  }
