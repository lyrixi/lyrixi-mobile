import { pickBy as _pickBy } from 'lodash'

function pickBy(...params: Parameters<typeof _pickBy>) {
  return _pickBy(...params)
}

export default pickBy
