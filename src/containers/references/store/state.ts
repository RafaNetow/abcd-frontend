import ReferencedModel from './model'

export interface ReferenceState {
  isFetching: boolean
  errorMessage: string
  reference: ReferencedModel
}

export const ReferenceInitalState: ReferenceState = {
  reference: {
    ownhouse: false,
    phone: '',
    manager: '',
    workplace: ''
  },
  isFetching: false,
  errorMessage: ''
}
