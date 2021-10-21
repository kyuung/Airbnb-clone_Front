import api from '../api/index';

const getRoomList = () => {
	return api.get('roomList');
};

const getDetailRoomList = () => {
	return api.get('roomInfo');
};

export { getRoomList, getDetailRoomList };
