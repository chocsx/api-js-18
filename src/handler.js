function handler (request, response) {
  const {
    url, 
    method
  } = request
  console.log({url, method});
  response.end('hello world')
}

export default handler