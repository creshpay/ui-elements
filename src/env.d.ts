interface ImportMetaEnv {
  readonly VITE_I18N_LOCALE: string
  readonly VITE_I18N_FALLBACK_LOCALE: string
  // more env variables...
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
