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
                        <p class="text-h5 text-10 font-weight-medium">- ${fund.name} -</p>
                        <p class="text-h5 text-10 font-weight-medium">- ${fund.investment_type} -</p>
                        <p class="text-h5 text-10 font-weight-medium">RM ${fund.net_asset_value}</p>
                    </div>
                    <div class="v-field__field my-3">
                        <input type="number" class="v-field__input" id="purchased_unit" placeholder="How many unit to purchase?" required style="    border: 1px solid #ccc!important;
                          border-radius: 16px;
                          padding: 0.01em 16px;
                          height: 3rem;">
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
  <v-btn class="me-2" density="compact" icon variant="text" @click="toggleModal">
    <v-icon stroke-width="1.5" size="20">mdi-chart-box</v-icon>
    <v-tooltip activator="parent" location="top">Trade</v-tooltip></v-btn
  >
</template>
