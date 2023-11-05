import Cookies from 'js-cookie'

import { axios } from '@/utils'

interface Investment {
  fund_id: number
  purchased_unit: number
}

class InvestmentService {
  static Invest(form: Investment) {
    let token = Cookies.get('token')
    const config: any = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return axios.post<any>(`/invest`, form, config).then((res) => res.data)
  }
}

export default InvestmentService
