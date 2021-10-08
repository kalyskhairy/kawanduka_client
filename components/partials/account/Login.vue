<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Masuk ke akunmu</h5>
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
            <div class="form-group">
                <v-text-field
                    v-model="password"
                    type="password"
                    class="ps-text-field"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="Masukan Password anda"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group">
                <v-checkbox label="Ingatkan saya" color="warning" />
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
            <div class="text-center mt-5">
                <a href="/account/forget-password">Lupa password ?</a>
            </div>
        </div>
        <div class="ps-form__footer">
            <p>Connect with:</p>
            <ul class="ps-list--social">
                <li>
                    <a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="google">
                        <i class="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
    middleware: ["auth"],
    auth: "guest",
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('This field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            username: null,
            password: null
        };
    },
    validations: {
        username: { required },
        password: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                // this.$store.dispatch('authen/setAuthStatus', true);
                // this.$router.push('/');
                try {
                    let params = {};
                    params.Username = this.username;
                    params.Password = this.password;
                    let header = Buffer.from(`${this.username}:${this.password}`, 'utf8').toString('base64');

                    let result = await this.$publicApi.login(params, header);
                    
                    console.log('result -> ' , result);
                    if (result) {
                        this.$swal.fire({
                            position: 'center',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.$auth.strategy.token.set(result.accessToken);
                        this.$store.dispatch('authen/setAuthStatus', result.accessToken);
                        this.$router.push('/');
                    }
                    
                } catch (error) {
                    console.log('ini error -> ',error.response);
                }
            }
        },
        async setToken(token){
            try {
                let result = await this.$auth.setUserToken(token);
                console.log('result setToken -> ', result);
                debugger
            } catch (error) {
                console.log('error setToken => ', error.response);
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
