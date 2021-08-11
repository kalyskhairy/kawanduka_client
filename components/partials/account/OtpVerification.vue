<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5 class="text-center">Pilih media pengiriman kode verifikasi</h5>
            <div class="form-group">
                <v-checkbox label="Email ke Kawanduka@mail.com" color="warning" v-model="checkboxEmail"/>
                <v-checkbox label="Sms *) ke nomor 081929293030" color="warning" v-model="checkboxPhone"/>
            </div>
            <div class="form-group submit">
                <button
                    type="button"
                    class="ps-btn ps-btn--fullwidth"
                    :disabled="disableBtn"
                    @click="testing"
                >
                    Lanjutkan
                </button>
            </div>
            <div class="form-group submit mt-3">
                <button
                    type="button"
                    class="ps-btn ps-btn--fullwidth ps-btn--gray"
                >
                    Batalkan
                </button>
            </div>
            <div class="ps-form__footer"></div>
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'OtpVerification',
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('This field is required');
            return errors;
        },
    },
    data() {
        return {
            checkboxEmail: false,
            checkboxPhone: false,
        };
    },
    validations: {
    },
    methods: {
        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$store.dispatch('auth/setAuthStatus', true);
                this.$router.push('/account/otp-verification');
            }
        },
        testing () {
            alert('masuk')
        }
    },
    computed: {
        disableBtn() {
            if (this.checkboxEmail || this.checkboxPhone) return false;
            return  true;
        }
    },
};
</script>

<style lang="scss" scoped></style>
