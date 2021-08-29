<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <h1>Penjualan</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3">
        <v-select
          :items="items"
          label="Pilih Penjualan"
          outlined
        ></v-select>
      </div>
      <div class="col-lg-6 col-md-3 col-sm-3">
        <input
            v-model="searchText"
            class="form-control"
            type="text"
            placeholder="Cari produk, nomor penjualan, pembeli"
        />
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3">
        <v-select
          :items="items"
          label="Urutan Berdasarkan"
          outlined
        ></v-select>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <v-tabs>
            <v-tab :href="`#semua_pesanan`">Semua Pesanan</v-tab>
            <!-- Semua pesanan -->
            <v-tab-item :value="`semua_pesanan`">
                <tab-my-order />
            </v-tab-item>
            <v-tab :href="`#pesanan_baru`">Pesanan Baru</v-tab>
            <!-- pesanan baru -->
            <v-tab-item :value="`pesanan_baru`">
                <tab-my-order />
            </v-tab-item>
            <v-tab :href="`#kemas`">Dikemas</v-tab>
            <v-tab-item :value="`kemas`">
                <tab-my-order />
            </v-tab-item>
            <v-tab :href="`#kirim`">Dikirim</v-tab>
            <v-tab-item :value="`kirim`">
                <tab-my-order />
            </v-tab-item>
            <v-tab :href="`#selesai`">Selesai</v-tab>
            <v-tab-item :value="`selesai`">
                <tab-my-order />
            </v-tab-item>
            <v-tab :href="`#batalkan`">Dibatalkan</v-tab>
            <v-tab-item :value="`batalkan`">
                <tab-my-order />
            </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import TabMyOrder from '~/components/partials/account/modules/TabMyOrder';
  export default {
    layout: 'seller',
    components: {
      TabMyOrder,
    },
    data () {
      return {
        searchText: '',
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    },
  }
</script>

<style scoped>
.list-item {
  height: 20%;
}
.list-content {
  height: 100%;
}
p {
  margin-bottom: auto;
}
</style>
