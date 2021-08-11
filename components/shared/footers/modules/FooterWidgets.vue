<template lang="html">
    <div class="ps-footer__widgets">
        <aside class="widget widget_footer widget_contact-us">
            <h4 class="widget-title">
                <!-- {{ $t('footer.widgetHeading.contactUs') }} -->
                Kontak Kami
            </h4>
            <div class="widget_content">
                <p>Telepon kami 24/7</p>
                <h3>1800 97 97 69</h3>
                <p>
                    Alamat
                </p>
                <h5>
                    502 New Design Str, Melbourne, Australia <br />
                    <a href="mailto:contact@martfury.co">contact@martfury.co</a>
                </h5>
                <ul class="ps-list--social">
                    <li>
                        <a class="facebook" href="#">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a class="twitter" href="#">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a class="google-plus" href="#">
                            <i class="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a class="instagram" href="#">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                <!-- {{ $t('footer.widgetHeading.quickLink') }} -->
                Pembayaran
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Policy</a>
                </li>
                <li>
                    <a href="#">Term & Condition</a>
                </li>
                <li>
                    <a href="#">Shipping</a>
                </li>
                <li>
                    <a href="#">Return</a>
                </li>
                <li>
                    <a href="faqs.html">FAQs</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                <!-- {{ $t('footer.widgetHeading.company') }} -->
                Jelajahi
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="about-us.html">Tentang kami</a>
                </li>
                <li>
                    <a href="#">Term & Condition</a>
                </li>
                <li>
                    <a href="#">Pengiriman</a>
                </li>
                <li>
                    <!-- <a href="contact-us.html">Contact</a> -->
                    <a href="#">Pengembalian</a>
                </li>
                <li>
                    <a href="#">FAQ's</a>
                </li>
            </ul>
        </aside>
        <!-- <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.bussiness') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Our Press</a>
                </li>
                <li>
                    <a href="checkout.html">Checkout</a>
                </li>
                <li>
                    <a href="my-account.html">My account</a>
                </li>
                <li>
                    <a href="shop-default.html">Shop</a>
                </li>
            </ul>
        </aside> -->
    </div>
</template>

<script>
export default {
    name: 'FooterWidgets'
};
</script>

<style lang="scss" scoped>
h5 {
    color: #7AD47C;
}
</style>
