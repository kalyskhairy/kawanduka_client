<template>
  <div class="container">
      <div class="row">
          <header-dashboard title="Tarik Saldo"></header-dashboard>
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-center">
                    <h4>Saldo Anda</h4>
                    <h2>Rp 500.000</h2>

                    <label>Masukan jumlah penarikan</label>

                    <v-text-field
                    type="number"
                    outlined
                    required
                    prefix="Rp"
                    hint="Minimum penarikan Rp 100.000"
                    persistent-hint
                    ></v-text-field>

                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <label>Akun Bank Anda</label>
                <div class="card mt-3" v-for="n in 2" :key="n">
                    <div class="card-body">
                        <div class="col-12">
                            <h5>BCA</h5>
                            <p>kalys lasoma</p>
                            <p>31645258</p>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                    max-height="600px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        class="btn-modal"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        Lanjutkan
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <h4>Penarikan Saldo</h4>
                        </v-card-title>
                        <v-card-text>
                        <v-container
                        >
                            <v-row>
                            <v-col cols="12" align="center">
                                <span class="text-h5">Anda akan menarik</span>
                            </v-col>
                            <v-col cols="12" align="center">
                                <h5>Rp 500.000</h5>
                            </v-col>
                            <v-col cols="12" align="center">
                                <span class="text-h6">Uang akan masuk ke Bank BCA</span>
                            </v-col>
                            <v-col cols="12" align="center">
                                <span class="text-h6">325164879 A/N Kalys lasoma</span>
                            </v-col>
                            <v-col cols="12"><h6>&nbsp;</h6></v-col>
                            <v-col cols="6">
                                <v-btn
                                    block
                                    outlined
                                    @click="dialog = false"
                                >
                                    Batal
                                </v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn
                                    class="btn-modal"
                                    block
                                    @click="dialog = false"
                                >
                                    Tarik Saldo
                                </v-btn>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>
                    </v-card>
                    </v-dialog>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard.vue';
export default {
    layout: 'seller',
    components: {
        HeaderDashboard,
    },
    data() {
        return {
            dialog: false
        }
    },
}
</script>

<style lang="scss" scoped>
.btn-modal {
    background-color: #7aD47C !important;
    color: white;
}
.card {
  position: relative;
  background-color: #f2f8f9;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #f2f8f9;
  
  &:hover {
    border: 1px solid #00838d;
    z-index: 500;
  }
}
.card:hover {
  p{color: #00838d}
  .go-corner {
    transition: opactiy 0.3s linear;
    opacity: 1;
  }
}

</style>>
