const book_api = "https://bookapi.cm.hmw.lol/api"

export const getBookData = async (resource) => {
  const response = await fetch(`${book_api}/${resource}`)
  const books = await response.json()
  return books.data
}

export const getBookDetailData = async (resource, query) => {
  const response = await fetch(`${book_api}/${resource}/${query}`)
  const book = await response.json()
  return book
}

export const getLatestBookData = async () => {
  const data = await getBookData("books")
  data.sort((a, b) => {
    return new Date(a.created_at) - new Date(b.created_at)
  }).reverse()
  return data
}

export const getSearchBookData = async (resource, query) => {
  const response = await fetch(`${book_api}/${resource}?search=${query}`)
  const books = await response.json()
  return books.data
}
