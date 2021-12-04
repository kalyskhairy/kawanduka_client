<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <!-- <user-information /> -->
        <!-- <my-order /> -->
        <section class="ps-my-account ps-page--account">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="ps-section__left">
                            <aside class="ps-widget--account-dashboard">
                                <div class="ps-widget__header">
                                    <img src="/img/users/3.jpg" />
                                    <figure>
                                        <figcaption>Hello</figcaption>
                                        <p>{{ profile.email }}</p>
                                    </figure>
                                </div>
                                <div class="ps-widget__content">
                                    <AccountLinks />
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="ps-page__content">
                            <div class="ps-section--account-setting">
                                <div class="ps-section__header">
                                    <h3>Profil Saya</h3>
                                    <!-- <v-btn color="success"> -->
                                        <nuxt-link to="/account/change-password"
                                        class="button ps-btn ps-btn--curve"
                                        >Ubah Password</nuxt-link>
                                    <!-- </v-btn> -->
                                </div>
                                <div class="ps-section__content">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row rem">
                                                <div class="col-lg-8 col-md-8 col-sm-8">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Nama</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-text-field
                                                            v-model="selectedValue.name"
                                                            :counter="18"
                                                            label="Name"
                                                            outlined
                                                            required
                                                            ></v-text-field>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Jenis Kelamin</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                           <v-select
                                                            :items="gender"
                                                            label="Jenis Kelamin"
                                                            outlined
                                                            v-model="selectedValue.gender"
                                                            ></v-select>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Agama</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-select
                                                            :items="religions"
                                                            placeholder="Pilih Agama"
                                                            item-text="religionName"
                                                            item-value="id"
                                                            label="Agama"
                                                            outlined
                                                            disabled
                                                            v-model="selectedValue.religionId"
                                                            ></v-select>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Email</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-text-field
                                                            v-model="selectedValue.email"
                                                            :counter="18"
                                                            label="Email"
                                                            outlined
                                                            required
                                                            ></v-text-field>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>No Telepon</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-text-field
                                                            v-model="selectedValue.phone"
                                                            :counter="18"
                                                            label="No Telepon"
                                                            outlined
                                                            required
                                                            disabled
                                                            ></v-text-field>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4">
                                                    <div class="text-center">
                                                        <div class="image-upload form-control-file">
                                                            <label for="file">
                                                            <img class="upload-image form-control-file" id="uploader-placeholder" :src="uploadPlaceHolder"/>
                                                            </label>
                                                            <input id="file" required ref="file" v-on:change="handleFileUpload()" class="form-control-file" type="file" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 text-right mb-2">
                                                <v-btn
                                                style="min-width:30%;"
                                                color="secondary"
                                                elevation="2"
                                                outlined
                                                >Batalkan</v-btn>
                                                <v-btn
                                                elevation="2"
                                                class="btn-modal"
                                                style="min-width:30%;"
                                                @click="saveProfile"
                                                >Simpan</v-btn>
                                                </div>
                                                <!-- <div class="col-lg-12 col-md-12 text-right">
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
// import UserInformation from '~/components/partials/account/UserInformation';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import MyOrder from '~/components/partials/account/MyOrder';
import AccountLinks from '~/components/partials/account/modules/AccountLinks';

export default {
    middleware: ['authentication'],
    transition: 'zoom',
    components: {
        HeaderMobile,
        // UserInformation,
        BreadCrumb,
        MyOrder,
        AccountLinks,
    },
    data: () => {
        return {
            uploadPlaceHolder: 'https://i.ibb.co/61rppSQ/Group-1-1.png',
            name: '',
            phone: '',
            email: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'User Information'
                }
            ],
            gender: [
                'Pria',
                'Perempuan'
            ],
            religions: [],
            profile: [],
        };
    },
    methods: {
        handleFileUpload() {
            this.selectedValue.avatar = this.$refs.file.files[0];
            this.uploadPlaceHolder = URL.createObjectURL(this.selectedValue.avatar);
        },
        async getProfileData() {
            let token = this.$auth.strategy.token.get();
            this.profile = await this.$publicApi.getProfile(token);
        },
        async getReligion(){
            this.religions = await this.$publicApi.religion();
        },
        async saveProfile(){
            this.$blockUi();
            try {
                let token = this.$auth.strategy.token.get();
                let params = {}
                params.name = this.selectedValue.name
                params.gender = this.selectedValue.gender
                // params.avatar = this.selectedValue.avatar
                params.phone  = this.selectedValue.phone
                params.email  = this.selectedValue.email
                
                let response = await this.$publicApi.editProfile(this.selectedValue, token)
                if (response) {
                    console.log('response -> ', response);
                    this.$swal.fire({
                        title: response.message,
                        position: 'center',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                
            } catch (error) {
                console.log('error save profile -> ', error);
            } finally {
                this.$unBlockUi();
            }
        }
    },
    mounted () {
        this.getProfileData();
        this.getReligion()
    },
    computed: {
        selectedValue: {
            get(){
                return this.profile
            },
            set(newvalue){
                return this.$emit('change', newvalue);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.rem {
    margin: 1.25rem;
}

.btn-modal {
    background-color: #7aD47C !important;
    color: white;
}

.ps-section__header {
    display: flex;
    justify-content: space-between;
}

.btn {
    height: 36px;
    padding: 0 16px;
    min-width: 30%;
    align-items: center;
    border-radius: 4px;
    font-weight: 500;
    justify-content: center;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
}

</style>
