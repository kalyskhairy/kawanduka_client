<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5 class="text-center">Lupa Password ?</h5>
            <div class="text-center">
                <p>
                    Masukan email Anda dan kami akan mengirim link untuk mengubah password Anda.
                </p>
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="username"
                    class="ps-text-field"
                    :error-messages="usernameErrors"
                    @input="$v.username.$touch()"
                    placeholder="Email atau No Handphone"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Masuk
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
    name: 'FogetPassword',
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
            username: null,
        };
    },
    validations: {
        username: { required },
    },
    methods: {
        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$store.dispatch('auth/setAuthStatus', true);
                this.$router.push('/account/otp-verification');
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
