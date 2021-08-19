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
            tableData: [
                {
                    key: '1',
                    title:
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                    dateCreate: '20-1-2020',
                    tag: 'sale'
                },
                {
                    key: '2',
                    title:
                        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
                    dateCreate: '21-1-2020',
                    tag: 'new'
                },
                {
                    key: '3',
                    title: ' Et harum quidem rerum',
                    dateCreate: '21-1-2020',
                    tag: 'new'
                },
                {
                    key: '4',
                    title:
                        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
                    dateCreate: '21-1-2020',
                    tag: 'sale'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.rem {
    margin: 2rem;
}
</style>
