import Cookies from 'js-cookie'

import { axios } from '@/utils'

class FundService {
  static getFundList() {
    let token = Cookies.get('token')
    const config: any = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return axios.get<any>(`/fund`, config).then((res) => res.data)
  }
}

export default FundService
