import backendApi from './backendApi'

const ENDPOINT = '/v1/post'

const createPost = async (data, uid) => {
  try {
    const res = await backendApi.post(`${ENDPOINT}/${uid}`, data)
    return res
  } catch (err) {
    return err.response
  }
}

module.exports = { createPost }
