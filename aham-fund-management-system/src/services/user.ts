import { axios } from '@/utils'

interface User {
  username: string
  password: string
}

class UserService {
  static login(form: User) {
    return axios.post<any>(`/auth/login`, form).then((res) => res.data)
  }
}

export default UserService
