export interface SingleBook {
    id_isbn: string,
    name: string,
    description: string,
    cover: string,
    author: string,
    regular_price: number,
    discount_available: boolean,
    discount_price?: number,
    goodreads_link: string,
    availability: number
  }
  