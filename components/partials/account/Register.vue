<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Daftarkan akunmu segera!</h5>
            <div class="form-group">
                <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    placeholder="Email"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="phone"
                    :error-messages="phoneErrors"
                    @input="$v.phone.$touch()"
                    placeholder="No Handphone"
                    class="ps-text-field"
                    type="number"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-select
                v-model="religionId"
                :items="religions"
                placeholder="Pilih Agama"
                item-text="religionName"
                item-value="id"
                outlined
                ></v-select>
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="Password"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="confirm_password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="Konfirmasi Password"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Register
                </button>
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
    name: 'Register',
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('This field is required');
            return errors;
        },
        phoneErrors() {
            const errors = [];
            if (!this.$v.phone.$dirty) return errors;
            !this.$v.phone.required && errors.push('This field is required');
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
            email: null,
            password: null,
            confirm_password: null,
            phone: null,
            roleId: 2,
            religionId: null,
            religions: []
        };
    },
    validations: {
        email: { required },
        password: { required },
        phone: { required },
        confirm_password: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                // this.$router.push('/account/login');
                try {
                    let params = {};
                    params.name = 'Kalys lasoma'
                    params.email = this.email;
                    params.phone = this.phone;
                    params.password = this.password
                    params.roleId = this.roleId;
                    params.religionId = this.religionId;
                    console.log('param -> ', params);
                    let result = await this.$publicApi.register(params);
    
                    console.log('ini result -> ', result);
                    if (result.code == 200) {
                        this.$swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: result.message,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.$router.push('/account/login');
                    }
                } catch (error) {
                    console.log(error.response);
                    this.$swal.fire(
                        'Maaf',
                        error.response.data.message,
                        'error'
                    )
                }
            }
        },
        async getReligion(){
            this.religions = await this.$publicApi.religion();
        }
    },
    mounted () {
        this.getReligion();
    },
};
</script>

<style lang="scss" scoped></style>
