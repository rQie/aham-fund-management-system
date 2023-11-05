<script lang="ts">
import Swal from 'sweetalert2'

import { InvestmentService } from '@/services'

export default {
  name: 'InvestRenderer',
  props: {
    fund: Object // Define a prop to accept the fund data
  },
  setup({ fund }) {
    function toggleModal() {
      if (fund) {
        Swal.fire({
          title: `Investment`,
          html: `
                    <div>
                        <p class="fw-bold">- ${fund.name} -</p>
                        <p class="fw-bold">- ${fund.investment_type} -</p>
                        <p class="fw-bold">RM ${fund.net_asset_value}</p>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control form-control" id="purchased_unit" placeholder="How many unit to purchase?" required>
                    </div>
                `,
          showCancelButton: true,
          confirmButtonText: 'Buy',
          showLoaderOnConfirm: true,
          allowOutsideClick: () => false,
          preConfirm: () => {
            const value = document.getElementById('purchased_unit')?.value
            if (!value) {
              alert('Input field is empty!')
              return false
            }
            return value
          }
        }).then((result) => {
          if (result.isConfirmed) {
            const form = {
              fund_id: fund.id,
              purchased_unit: result.value
            }
            InvestmentService.Invest(form)
              .then((res) => {
                Swal.fire('Success!', `Transaction completed!`, 'success')
              })
              .catch((err) => {
                alert(
                  err.response?.data.message ||
                    (err.message === 'Network Error'
                      ? 'Please ensure the backend is running!'
                      : err.message)
                )
              })
          }
        })
      } else {
        console.error('fund is undefined') // Handle the case where fund is undefined
      }
    }

    return { toggleModal }
  }
}
</script>

<template>
  <v-btn class="me-2" density="compact" icon="mdi-chart-box" variant="text" @click="toggleModal" />
</template>
