import { ref } from 'vue'
import { PortfolioService } from '@/services'

const getPortfolioDetails = () => {
  const portfolioDetails = ref({ investment: [], grand_total: 0 })
  const error = ref(null)

  const load = async () => {
    try {
      const { data } = await PortfolioService.getPortfolioDetails()
      portfolioDetails.value = data
    } catch (err: any) {
      error.value =
        err.response?.data.message ||
        (err.message === 'Network Error' ? 'Please ensure the backend is running!' : err.message)
      console.log(error.value)
    }
  }

  return { portfolioDetails, error, load }
}

export default getPortfolioDetails
