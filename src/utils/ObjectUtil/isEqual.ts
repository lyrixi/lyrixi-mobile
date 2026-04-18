import _isEqual from 'lodash/isEqual'

function isEqual(...params: Parameters<typeof _isEqual>) {
  return _isEqual(...params)
}

export default isEqual
