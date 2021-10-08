export default function({ store, redirect }) {
    if (!store.state.authen.isLoggedIn) {
        return redirect('/account/login');
    }
}
