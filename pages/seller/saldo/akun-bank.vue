<template>
  <div class="container">
      <div class="row">
          <header-dashboard title="Akun Bank"></header-dashboard>
        <div class="col-lg-12 col-md-12 col-sm-12" v-if="data.length > 0">
            <div class="card" v-for="(value, index) in data" :key="index">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <h5>{{value.bank}}</h5>
                            <p>{{value.name}}</p>
                            <p>{{value.norek}}</p>
                        </div>
                        <div class="col-lg-4 col-md-4 center">
                            <button class="btn btn-modal btn-block">Ubah</button>
                            <button class="btn btn-outline-danger btn-block">Hapus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="card">
                <div class="card-body" style="padding:10rem;">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <!-- <span class="fas fa-home"></span> -->
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="col-12 text-center">
                                    <p>Anda belum memiliki Akun Bank untuk menyimpan saldo toko Anda</p>
                                </div>
                                <div class="col-12 text-center">
                                    <v-dialog
                                    v-model="dialog"
                                    persistent
                                    max-width="600px"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        class="btn-modal"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        >
                                        Tambahkan Akun Bank
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                        <span class="text-h5">Tambahkan Alamat</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container>
                                            <v-row>
                                            <v-col cols="12">
                                                <v-text-field
                                                label="Bank"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                label="Nama Pemilik"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                label="Nomor Rekening"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="dialog = false"
                                        >
                                            Close
                                        </v-btn>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="dialog = false"
                                        >
                                            Save
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                </div>
                            </div>
                        </div>
                    </div>
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
            dialog: false,
            data: [
                {
                    bank: 'BCA',
                    name: 'Tokyo',
                    norek: '8264951359'
                },
            ]
        }
    },

}
</script>

<style>
.center {
    margin: auto;
    width: 60%;
    padding: 10px;
}
.btn-modal {
    background-color: #7aD47C !important;
    color: white;
}
</style>