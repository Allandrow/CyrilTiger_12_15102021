// service functions fetching mock data
import axios from 'axios'

export const getUserName = (cb) => {
  axios
    .get('../src/data/userInfos.json')
    .then((res) => {
      cb(res.data.userInfos.firstName)
    })
    .catch((err) => console.log(err))
}
