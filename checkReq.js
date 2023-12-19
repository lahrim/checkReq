function checkReq(req, keys) {
  let isValid = true

  for(const field of keys){
    if(!req[field] || req[field] === '') isValid = false
  }

  return isValid
}

module.exports = { checkReq }
