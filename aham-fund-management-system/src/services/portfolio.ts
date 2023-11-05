import Cookies from 'js-cookie'

import { axios } from '@/utils'

class PortfolioService {
  static getPortfolioDetails() {
    let token = Cookies.get('token')
    const config: any = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return axios.get<any>(`/portfolio`, config).then((res) => res.data)
  }
}

export default PortfolioService
