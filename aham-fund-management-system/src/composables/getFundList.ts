import { ref } from 'vue'
import { FundService } from '@/services'

const getFundList = () => {
  const fundList = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const { data } = await FundService.getFundList()
      fundList.value = data
    } catch (err: any) {
      error.value =
        err.response?.data.message ||
        (err.message === 'Network Error' ? 'Please ensure the backend is running!' : err.message)
      console.log(error.value)
    }
  }

  return { fundList, error, load }
}

export default getFundList
