export default {
  rotate: {
    type: Boolean,
    required: false,
    default: false,
  },
  name: {
    type: String,
    required: false,
    default: '',
  },
  width: {
    type: Number,
    required: false,
    default: 24,
  },
  height: {
    type: Number,
    required: false,
    default: 24,
  },
  color: {
    type: String,
    required: false,
    default: 'black',
  },
  viewBox: {
    type: String,
    required: false,
    default: '0 0 24 24',
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false,
  },
  alt: {
    type: String,
    required: false,
    default: '',
  },
}
