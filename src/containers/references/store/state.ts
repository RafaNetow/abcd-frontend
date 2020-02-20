import ReferencedModel from "./model";

export interface ReferencedState {
  isFetching: boolean;
  errorMessage: string;
  reference: ReferencedModel;
}

export const ReferenceInitalState: ReferencedState = {
  reference: {
    ownhouse: "",
    phone: "",
    manager: "",
    workplace: ""
  },
  isFetching: false,
  errorMessage: ""
};
