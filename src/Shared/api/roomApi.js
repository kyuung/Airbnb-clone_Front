import api from '../api/index'

const getRoomList = params => {
  return api.get(`api/rooms?${params}`)
}

const getDetailRoomList = () => {
  return api.get('roomInfo')
}

export { getRoomList, getDetailRoomList }
