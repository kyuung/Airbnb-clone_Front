import api from '../api/index'

const getRoomList = () => {
  return api.get('roomListInfo?page=1')
}

const getDetailRoomList = () => {
  return api.get('roomInfo')
}

export { getRoomList, getDetailRoomList }
