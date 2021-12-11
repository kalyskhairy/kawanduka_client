<template lang="html">
<div>
    <div class="card" v-for="(value, index) in data" :key="index">
        <div class="card-body">
            <div class="row rem">
                <div class="col-lg-10 col-md-10">
                    <h4>{{ value.title }}</h4>
                    <p>{{ value.description }}</p>
                    <strong>{{ value.date }}</strong>
                </div>
                <div class="col-lg-2 col-md-2 center">
                    <v-checkbox></v-checkbox>
                </div>
            </div>
        </div>
    </div>
    <div v-if="data.length == 0">
        <p class="text-center mt-2">Tidak ada data notifikasi</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'TableInvoices',
    props: {
        data: {
            type: [Array, Object]
        }
    },
    data() {
        return {
        };
    }
};
</script>

<style lang="scss" scoped>
.rem {
    margin: 2rem;
}
</style>
