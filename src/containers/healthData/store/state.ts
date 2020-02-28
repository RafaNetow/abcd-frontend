import HealthData from "./model";

export interface HealthState {
  isFetching: boolean;
  errorMessage: string;
  healtData: HealthData;
}

export const HealthInitalState: HealthState = {
  healtData: {
    vaccine: "",
    disease: "",
    treatments: "",
    pastDiseases: ""
  },
  isFetching: false,
  errorMessage: ""
};
