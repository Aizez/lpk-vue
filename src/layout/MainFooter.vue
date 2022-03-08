<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container mx-auto" style="color: white;">
      <div class="md-toolbar-section-start">
        <img
          :src="logo"
          alt="logo-abipraya"
          style="height: 60px; width: 60px; padding: 5px; margin:0px 7px 5px -5px;"
        />
        <h3 class="md-title2" style="letter-spacing: 4px; margin-top: 8px">
          <strong style="font-size: 30px">LPK Abipraya</strong>
        </h3>
      </div>
    </div>

    <div class="container mx-auto" style="color: white;">
      <nav>
        <ul>
          <li>
            <a href="/" style="letter-spacing: 2px">
              Beranda
            </a>
          </li>
          <li>
            <a href="#/profil" style="letter-spacing: 2px">
              Profil
            </a>
          </li>
          <li>
            <a href="#/blog" style="letter-spacing: 2px">
              Blog
            </a>
          </li>
          <li>
            <a href="#/kontak" style="letter-spacing: 2px">
              Kontak
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright" style="margin-top: -50px">
        <p style="font-weight: 400; letter-spacing: 1px">Connect with us</p>
        <a href="https://www.youtube.com/channel/UCX3Aez1DThZqzLNjOF7hnwA">
          <img
            class="md-title"
            :src="yb"
            alt="logo-abipraya"
            style="height: 65px;padding: 5px 5px 15px 0px;margin-right:5px;"
          />
        </a>
        <a href="https://www.instagram.com/lpk_abipraya/">
          <img
            class="md-title"
            :src="ig"
            alt="logo-abipraya"
            style="height: 65px;padding: 5px 5px 15px 0px;margin-right:5px;"
          />
        </a>
        <a href="https://www.facebook.com/LPK-Abipraya-102161165760041">
          <img
            class="md-title"
            :src="fb"
            alt="logo-abipraya"
            style="height: 65px;padding: 5px 5px 15px 0px;margin-right:5px;"
          />
        </a>
      </div>
    </div>
    <div class="container mx-auto">
      <div
        class="copyright mx-auto"
        style="color: #fae019; letter-spacing: 1px"
      >
        <!-- <strong>&copy; Xyziz_ {{ year }}, Universitas Pembangunan Jaya</strong> -->
        <strong
          >&copy; PT Brantas Abipraya | {{ year }} All Right Reserved</strong
        >
        <!-- <a
          href="https://www.creative-tim.com/"
          target="_blank"
          style="color:green"
          >Creative Tim</a
        > -->
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    logo: {
      type: String,
      default: require("@/assets/img/logo/lpkrounded-logo.png")
    },
    yb: {
      type: String,
      default: require("@/assets/img/logo/YB.png")
    },
    fb: {
      type: String,
      default: require("@/assets/img/logo/FB.png")
    },
    ig: {
      type: String,
      default: require("@/assets/img/logo/IG.png")
    },
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
