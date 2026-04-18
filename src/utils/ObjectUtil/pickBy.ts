import _pickBy from 'lodash/pickBy'

function pickBy(...params: Parameters<typeof _pickBy>) {
  return _pickBy(...params)
}

export default pickBy
