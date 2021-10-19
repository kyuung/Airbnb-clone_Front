import api from '../api/index'

const getRoomList = () => {
  return api.get('roomList')
}

export { getRoomList }
