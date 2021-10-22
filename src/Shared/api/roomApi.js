import api from '../api/index'

const getRoomList = params => {
  return api.get(`api/rooms?${params}`)
}

const getDetailRoomList = params => {
  console.log(params)
  return api.get(`api/rooms/${params}`)
}

export { getRoomList, getDetailRoomList }
