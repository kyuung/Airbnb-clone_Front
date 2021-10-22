/* 개발모드에서 logger */
export const logger = msg => {
  if (process.env.NODE_ENV === 'production') {
    return
  }
  console.log(msg)
}

/* localStorage에서 토큰 가져오기 */
export const getToken = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return `Bearer ${token}`
  } else {
    return null
  }
}

// get id from jwt-token
export const getIdFromToken = () => {
  const token = getToken('token')
  if (!token) {
    window.alert('로그인을 먼저 해주세요')
    return
  }
  console.log('token', token)
  const payload = token.split('.')[1]
  console.log('split', payload)
  const decoded = atob(payload)
  console.log(decoded)
  const index = decoded.indexOf('","iat')
  const login_user_id = decoded.slice(8, index)
  return login_user_id
}
