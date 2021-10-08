<template>
  <div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <header-dashboard title="Pengiriman"/>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
            <v-select
            :items="items"
            label="Pilih Alamat Toko"
            outlined
            v-model="test"
            ></v-select>
        </div>
    </div>
    <div class="row" v-if="test">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="card">
                <div class="card-body" style="margin:10px">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                            <h5>Toko {{test}}</h5>
                            <p>Jalan sudirman no 666 jakarta selatan</p>
                            <p>Jakarta, 20123 indonesia</p>
                            <p>081930107770</p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style="display:flex;justify-content:center;align-items:center;">

                            <button class="btn btn-modal btn-block">Ubah</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="card" >
                <div class="card-header">
                    JNE
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="card" >
                <div class="card-header">
                    Gojek
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
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
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            test: '',

        }
    },
}
</script>

<style>
.btn-modal {
    background-color: #7aD47C !important;
    color: white;
}
</style>