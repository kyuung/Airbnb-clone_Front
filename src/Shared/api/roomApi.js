import api from '../api/index'

const getRoomList = params => {
  return api.get(`api/rooms?${params}`)
}

const getDetailRoomList = params => {
  return api.get(`roomInfo/${params}`)
}

export { getRoomList, getDetailRoomList }
