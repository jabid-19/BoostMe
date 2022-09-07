import backendApi from './backendApi'

const ENDPOINT = '/v1/contact'

const contact = async (data) => {
  try {
    const res = await backendApi.post(`${ENDPOINT}/`, {
      fullname: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      description: data.details,
    })

    return res
  } catch (err) {
    return err.response
  }
}

module.exports = {
  contact,
}
