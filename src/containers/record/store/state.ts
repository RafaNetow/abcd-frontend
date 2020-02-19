import Record from "./model";

export interface RecordState {
  isFetching: boolean;
  errorMessage: string;
  record: Record;
}

export const RecordInitalState: RecordState = {
  record: {
    name: "",
    lastname: "",
    birthday: new Date(),
    birthplace: "",
    gender: "",
    nacionality: "",
    address: "",
    phone: "",
    blood: "",
    photo: ""
  },
  isFetching: false,
  errorMessage: ""
};
