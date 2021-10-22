import api from '../api/index';

const createReview = (params) => {
	return api.post(`/api/rooms/${params.post_id}/reviews`, {
		rating: params.rating,
		comment: params.initalDescription,
		userId: 'kyuung',
	});
};

const deleteReview = (params) => {
	console.log('<<<', params);
	return api.delete(`/api/rooms/${params.post_id}/reviews/kyuung`);
};

export { createReview, deleteReview };
