import { useRoute, useRouter } from 'vue-router'

export const changeUrlQueryPageNumber = (val?: string): void => {
  const { query } = useRoute()
  const router = useRouter()

  if (!query['page[number]']
    || query['page[number]'] !== val) {
    router.replace({
      query: {
        ...query,
        'page[number]': val,
      },
    })
  }
}

export const changeUrlQueryPageSize = (val?: string): void => {
  const { query } = useRoute()
  const router = useRouter()

  if (!query['page[size]']
    || query['page[size]'] !== val) {
    router.replace({
      query: {
        ...query,
        'page[size]': val,
      },
    })
  }
}

export const changeUrlQuerySortBy = (val?: string): void => {
  const { query } = useRoute()
  const router = useRouter()

  if (!query['sort-by']
    || query['sort-by'] !== val) {
    router.replace({
      query: {
        ...query,
        'sort-by': val,
      },
    })
  }
}

export const changeUrlQuerySortOrder = (val?: string): void => {
  const { query } = useRoute()
  const router = useRouter()

  if (!query['sort-order']
    || query['sort-order'] !== val) {
    router.replace({
      query: {
        ...query,
        'sort-order': val,
      },
    })
  }
}

export default {
  changeUrlQueryPageNumber,
  changeUrlQueryPageSize,
  changeUrlQuerySortBy,
  changeUrlQuerySortOrder,
}
