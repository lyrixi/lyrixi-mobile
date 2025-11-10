import loadOpenstreetTileLayer from './loadOpenstreetTileLayer'

async function loadOpenstreet() {
  loadOpenstreetTileLayer()
  return {
    status: 'success'
  }
}

export default loadOpenstreet
