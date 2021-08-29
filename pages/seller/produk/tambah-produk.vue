<template>
    <div class="container">
        <h1>Tambah Produk</h1>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <label>Pilih Produk atau layanan</label>
                         <v-radio-group v-model="radio">
                            <v-radio
                                v-for="data in radioGroup"
                                :key="data.name"
                                :label="`${data.name}`"
                                :value="data.value"
                            ></v-radio>
                        </v-radio-group>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <label>Foto Produk</label>
                        <v-file-input
                            show-size
                            counter
                            multiple
                            label="File input"
                        ></v-file-input>
                    </div>
                </div>
                <div class="row mt-10">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Nama Produk</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-text-field
                            label="Nama Produk"
                            outlined
                        ></v-text-field>
                    </div>

                </div>
                <div class="row mt-10">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Kategori</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-select
                        :items="items"
                        label="Pilih Kategori"
                        outlined
                        ></v-select>
                    </div>

                </div>
                <div class="row mt-10">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Agama</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-select
                        :items="items"
                        label="Pilih Agama"
                        outlined
                        ></v-select>
                    </div>

                </div>
                <div class="row mt-10">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Harga</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-text-field
                            label="Harga"
                            outlined
                        ></v-text-field>
                    </div>

                </div>
                <div class="row mt-10" v-if="radio == 'produk'">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Stok</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-text-field
                            label="Stok"
                            outlined
                        ></v-text-field>
                    </div>
                </div>
                <div class="row mt-10" v-if="radio == 'jasa'">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <label>Dokumen (max 10)</label>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Nama Dokumen</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-text-field
                            label="Tulis Nama Dokumen"
                            outlined
                        ></v-text-field>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Tipe Dokumen</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-text-field
                            label="Tulis Tipe Dokumen"
                            outlined
                        ></v-text-field>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Catatan</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-text-field
                            label="Tulis Catatan"
                            outlined
                        ></v-text-field>
                    </div>
                </div>
                <div class="row mt-10">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Berat Produk (gram)</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-text-field
                            label="1000 gr"
                            outlined
                        ></v-text-field>
                    </div>

                </div>
                <div class="row mt-10">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>Deskripsi Produk</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <v-textarea
                        outlined
                        label="Tulis deskripsi produk anda"
                        placeholder="Tulis deskripsi produk anda"
                        ></v-textarea>
                    </div>
                </div>
                <div class="row mt-10">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <label>&nbsp;</label>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <button
                            type="submit"
                            class="ps-btn ps-btn--fullwidth"
                        >
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'seller',
    data() {
        return {
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            radio: '',
            radioGroup: [
                {
                    name: 'Produk',
                    value: 'produk'
                },
                {
                    name: 'Jasa',
                    value: 'jasa'
                }
            ]
        }
    },
}
</script>

<style>
.ps-btn {
    color: white !important;
}
</style>