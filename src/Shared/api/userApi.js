import api from '../api/index'

/* 유저 유무 인증 */
const postExistPhone = params => {
  return api.post('api/users/exist_phone', params)
}

/* 유저 회원가입 */
const postSignUp = params => {
  return api.post('api/users/signup', params)
}

/* 유저 로그인 */
const postLogin = params => {
  return api.post('api/users/auth_phone', params)
}

export { postExistPhone, postSignUp, postLogin }
