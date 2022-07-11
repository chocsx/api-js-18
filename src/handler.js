import { parse } from "node:url";

function handler (request, response) {
  const {
    url, 
    method
  } = request

  const {
    pathname
  } = parse(url, true)

  const key = `${pathname}:${method.toLowerCase()}`
  console.log(key)
  response.end('hello world')
}

export default handler