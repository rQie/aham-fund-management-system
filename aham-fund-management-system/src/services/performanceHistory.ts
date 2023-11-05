import Cookies from 'js-cookie'

import { axios } from '@/utils'

class PerformanceHistoryService {
  static getPerformanceHistoryList(fundId: number) {
    let token = Cookies.get('token')
    const config: any = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return axios.get<any>(`/performance-history?fund_id=${fundId}`, config).then((res) => res.data)
  }
}

export default PerformanceHistoryService
