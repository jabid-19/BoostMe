import backendApi from './backendApi'

const ENDPOINT = '/v1/user'

const signup = async (userObj) => {
  try {
    const res = await backendApi.post(ENDPOINT, userObj)
    return res
  } catch (err) {
    return err.response
  }
}

const login = async ({ email, password }) => {
  try {
    const res = await backendApi.post(`${ENDPOINT}/signin`, { email, password })
    return res
  } catch (err) {
    return err.response
  }
}

const forgetPassword = async (email) => {
  try {
    const res = await backendApi.post(`${ENDPOINT}/forget-password`, { email })
    return res
  } catch (err) {
    return err.response
  }
}

module.exports = { signup, login, forgetPassword }
