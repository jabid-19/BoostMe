import { lookup } from 'geoip-lite'

export default async function handler(req, res) {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    console.log({ ip })
    // console.log(lookup(ip));
    const geoloc = lookup(ip)
    // const geoloc = lookup("43.224.109.206");
    console.log({ geoloc })
    const lang = geoloc?.country === 'BD' ? 'bd' : 'en'

    res.status(200).send({ message: 'success', lang })
  } catch (err) {
    console.log({ err })
    res.status(500).send({ message: `failed`, err })
  }
}
