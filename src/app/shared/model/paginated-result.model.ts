export class PaginatedResultModel<T> {
  constructor(public data: T[], public totalCount: number) {

  }
}
