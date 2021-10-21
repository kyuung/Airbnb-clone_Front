import api from '../api/index'

const getRoomList = () => {
  return api.get('roomListInfo?page=1')
}

export { getRoomList }
