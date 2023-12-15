const props = {
  autocomplete: {
    type: String,
    default: 'on',
    required: false,
  },
  bordered: {
    type: Boolean,
    required: false,
    default: false,
  },
  id: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    type: [String, Number, Boolean],
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  errorMessage: {
    type: String,
    required: false,
    default: undefined,
  },
}

export default props
