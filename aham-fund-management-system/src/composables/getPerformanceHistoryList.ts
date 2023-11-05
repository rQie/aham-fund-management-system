import { ref } from 'vue'
import { PerformanceHistoryService } from '@/services'

const getPerformanceHistoryList = (fundId: number) => {
  const performanceHistoryList = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const { data } = await PerformanceHistoryService.getPerformanceHistoryList(fundId)
      performanceHistoryList.value = data
    } catch (err: any) {
      error.value =
        err.response?.data.message ||
        (err.message === 'Network Error' ? 'Please ensure the backend is running!' : err.message)
      console.log(error.value)
    }
  }

  return { performanceHistoryList, error, load }
}

export default getPerformanceHistoryList
