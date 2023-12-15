export type DatatableHeaderItemAlignment = 'start' | 'middle' | 'end'

export type DatatableSortOrder = 'desc' | 'asc'

export interface DatatableHeaderItem<T = any> {
  text: string
  key: string
  align: DatatableHeaderItemAlignment
  sortable: boolean
  sortOrder?: DatatableSortOrder
  customSort?: (a: T, b: T, order?: 'desc' | 'asc') => number
  id?: string
  metadata?: Record<string, unknown>
}

export type PaginationLinks = {
  first?: string

  last?: string

  prev?: string

  next?: string
}

export type Pagination = {
  page?: number

  pagesCount?: number

  itemsPerPage?: number

  totalCount?: number

  links?: PaginationLinks
}
