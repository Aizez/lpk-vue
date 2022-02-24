import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import store from "./services/store";
import MainNavbar from "./layout/MainNavbar.vue";
import Sidebar from "./layout/Sidebar.vue";
import LoginNavbar from "./layout/LoginNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import SideFooter from "./layout/SideFooter.vue";
import BlankFooter from "./layout/BlankFooter.vue";
import BlankNavbar from "./layout/BlankNavbar.vue";
// import Landing from "./views/Landing.vue";
// import Profile from "./views/Profile.vue";
// import Demo from "./views/Demo.vue";

import Profil from "./views/pages/Profil.vue";
import Program from "./views/pages/Program.vue";
import Kontak from "./views/pages/Kontak.vue";
import Blog from "./views/pages/AllNewInfo.vue";
import SingleBlog from "./views/pages/NewInfo.vue";

import Login from "./views/pages/Login.vue";

import Dashboard from "./views/dashboard/Dashboard.vue";
import UsersManagement from "./views/dashboard/user/UsersManagement.vue";
import UsersUpdate from "./views/dashboard/user/UsersUpdate.vue";
import UsersCreate from "./views/dashboard/user/UsersCreate.vue";

import ListProgram from "./views/dashboard/program_pelatihan/list_program/ListProgram.vue";
import ListProgramCreate from "./views/dashboard/program_pelatihan/list_program/ListProgramCreate.vue";
import ListProgramUpdate from "./views/dashboard/program_pelatihan/list_program/ListProgramUpdate.vue";
import DetailProgram from "./views/dashboard/program_pelatihan/detail_program/DetailProgram.vue";
import DetailProgramCreate from "./views/dashboard/program_pelatihan/detail_program/DetailProgramCreate.vue";
import DetailProgramUpdate from "./views/dashboard/program_pelatihan/detail_program/DetailProgramUpdate.vue";
import Gallery from "./views/dashboard/program_pelatihan/gallery/Gallery.vue";
import GalleryCreate from "./views/dashboard/program_pelatihan/gallery/GalleryCreate.vue";
import GalleryUpdate from "./views/dashboard/program_pelatihan/gallery/GalleryUpdate.vue";
import Testimoni from "./views/dashboard/program_pelatihan/testimoni/Testimoni.vue";
import TestimoniCreate from "./views/dashboard/program_pelatihan/testimoni/TestimoniCreate.vue";
import TestimoniUpdate from "./views/dashboard/program_pelatihan/testimoni/TestimoniUpdate.vue";
import Info from "./views/dashboard/info/Info.vue";
import InfoCreate from "./views/dashboard/info/InfoCreate.vue";
import InfoUpdate from "./views/dashboard/info/InfoUpdate.vue";
import Batch from "./views/dashboard/program_pelatihan/batch_program/Batch.vue";
import BatchCreate from "./views/dashboard/program_pelatihan/batch_program/BatchCreate.vue";
import BatchUpdate from "./views/dashboard/program_pelatihan/batch_program/BatchUpdate.vue";
import Peserta from "./views/dashboard/program_pelatihan/peserta/Peserta.vue";
import PesertaCreate from "./views/dashboard/program_pelatihan/peserta/PesertaCreate.vue";
import PesertaUpdate from "./views/dashboard/program_pelatihan/peserta/PesertaUpdate.vue";

// import MataKuliah from "./views/dashboard/mata_kuliah/MataKuliah.vue";
// import MataKuliahCreate from "./views/dashboard/mata_kuliah/MataKuliahCreate.vue";
// import MataKuliahUpdate from "./views/dashboard/mata_kuliah/MataKuliahUpdate.vue";
import ReportMataKuliah from "./views/dashboard/mata_kuliah/report/ReportMataKuliah.vue";
// import ReportMataKuliahCreate from "./views/dashboard/mata_kuliah/report/ReportMataKuliahCreate.vue";
// import ReportMataKuliahUpdate from "./views/dashboard/mata_kuliah/report/ReportMataKuliahUpdate.vue";
// import ReportMataKuliahKaprodi from "./views/dashboard/mata_kuliah/kaprodi/ReportMataKuliahKaprodi.vue";
// import ReportMataKuliahKaprodiCreate from "./views/dashboard/mata_kuliah/kaprodi/ReportMataKuliahKaprodiCreate.vue";
// import ReportMataKuliahKaprodiUpdate from "./views/dashboard/mata_kuliah/kaprodi/ReportMataKuliahKaprodiUpdate.vue";
// import BookingPriority from "./views/dashboard/mata_kuliah/booking/BookingMataKuliah.vue";
// import BookingPriorityCreate from "./views/dashboard/mata_kuliah/booking/BookingMataKuliahCreate.vue";
// import BookingPriorityUpdate from "./views/dashboard/mata_kuliah/booking/BookingMataKuliahUpdate.vue";
// import BookingPriorityUpdateAdmin from "./views/dashboard/mata_kuliah/booking/BookingMataKuliahUpdate2.vue";
// import PeriodeCreate from "./views/dashboard/periode/PeriodeCreate.vue";
// import PeriodeUpdate from "./views/dashboard/periode/PeriodeUpdate.vue";
// import Dosen from "./views/dashboard/dosen/Dosen.vue";
// import DosenCreate from "./views/dashboard/dosen/DosenCreate.vue";
// import DosenUpdate from "./views/dashboard/dosen/DosenUpdate.vue";

// import Jadwal from "./views/dashboard/jadwal/Jadwal.vue";
// import JadwalUpdate from "./views/dashboard/jadwal/JadwalUpdate.vue";
// import JadwalCreate from "./views/dashboard/jadwal/JadwalCreate.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/profil",
      name: "profil",
      components: { default: Profil, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/program/:id",
      name: "program",
      components: { default: Program, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/kontak",
      name: "kontak",
      components: { default: Kontak, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/blog",
      name: "blog",
      components: {
        default: Blog,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/blog/:id",
      name: "blog",
      components: {
        default: SingleBlog,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/dashboard/list-program-pelatihan",
      name: "list-program-pelatihan",
      components: {
        default: ListProgram,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/list-program-create",
      name: "list-program-create",
      components: {
        default: ListProgramCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/list-program-update/:id",
      name: "list-program-update",
      components: {
        default: ListProgramUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/dashboard/detail-program-pelatihan",
      name: "detail-program-pelatihan",
      components: {
        default: DetailProgram,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/detail-program-create",
      name: "detail-program-create",
      components: {
        default: DetailProgramCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/detail-program-update/:id",
      name: "detail-program-update",
      components: {
        default: DetailProgramUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/dashboard/gallery",
      name: "gallery",
      components: {
        default: Gallery,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/gallery-create",
      name: "gallery-create",
      components: {
        default: GalleryCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/gallery-update/:id",
      name: "gallery-update",
      components: {
        default: GalleryUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/dashboard/testimoni",
      name: "testimoni",
      components: {
        default: Testimoni,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/testimoni-create",
      name: "testimoni-create",
      components: {
        default: TestimoniCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/testimoni-update/:id",
      name: "testimoni-update",
      components: {
        default: TestimoniUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/dashboard/info",
      name: "info",
      components: {
        default: Info,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/info-create",
      name: "info-create",
      components: {
        default: InfoCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/info-update/:id",
      name: "info-update",
      components: {
        default: InfoUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/dashboard/batch",
      name: "batch",
      components: {
        default: Batch,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/batch-create",
      name: "batch-create",
      components: {
        default: BatchCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/batch-update/:id",
      name: "batch-update",
      components: {
        default: BatchUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/dashboard/peserta",
      name: "peserta",
      components: {
        default: Peserta,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/peserta-create",
      name: "peserta-create",
      components: {
        default: PesertaCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/peserta-update/:id",
      name: "peserta-update",
      components: {
        default: PesertaUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/login",
      name: "login",
      components: { default: Login, header: LoginNavbar, footer: BlankFooter },
      beforeEnter: (to, from, next) => {
        if (store.state.auth.isAuthenticated) {
          next("/dashboard");
        } else {
          next();
        }
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    },

    {
      path: "/dashboard",
      name: "dashboard",
      components: { default: Dashboard, header: Sidebar, footer: SideFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/users-management",
      name: "users-management",
      components: {
        default: UsersManagement,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/users-create",
      name: "users-create",
      components: {
        default: UsersCreate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard/users-update/:id",
      name: "users-update",
      components: {
        default: UsersUpdate,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    // {
    //   path: "/dashboard/mata-kuliah-kota",
    //   name: "mata-kuliah-kota",
    //   components: {
    //     default: MataKuliah,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/mata-kuliah-create",
    //   name: "mata-kuliah-create",
    //   components: {
    //     default: MataKuliahCreate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/mata-kuliah-update/:id",
    //   name: "mata-kuliah-update",
    //   components: {
    //     default: MataKuliahUpdate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    {
      path: "/dashboard/report-mata-kuliah-kota",
      name: "report-mata-kuliah-kota",
      components: {
        default: ReportMataKuliah,
        header: Sidebar,
        footer: SideFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
    // {
    //   path: "/dashboard/report-mata-kuliah-create",
    //   name: "report-mata-kuliah-create",
    //   components: {
    //     default: ReportMataKuliahCreate,
    //     header: BlankNavbar,
    //     footer: BlankFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/report-mata-kuliah-update/:id",
    //   name: "report-mata-kuliah-update",
    //   components: {
    //     default: ReportMataKuliahUpdate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/report-mata-kuliah-kaprodi",
    //   name: "report-mata-kuliah-kaprodi",
    //   components: {
    //     default: ReportMataKuliahKaprodi,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/mata-kuliah-kaprodi-create",
    //   name: "mata-kuliah-kaprodi-create",
    //   components: {
    //     default: ReportMataKuliahKaprodiCreate,
    //     header: BlankNavbar,
    //     footer: BlankFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/mata-kuliah-kaprodi-update/:id",
    //   name: "mata-kuliah-kaprodi-update",
    //   components: {
    //     default: ReportMataKuliahKaprodiUpdate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/booking-priority",
    //   name: "booking-priority",
    //   components: {
    //     default: BookingPriority,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/booking-priority-create",
    //   name: "booking-priority-create",
    //   components: {
    //     default: BookingPriorityCreate,
    //     header: BlankNavbar,
    //     footer: BlankFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/booking-priority-update/:id",
    //   name: "booking-priority-update",
    //   components: {
    //     default: BookingPriorityUpdate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/booking-priority-update-admin/:id",
    //   name: "booking-priority-update-admin",
    //   components: {
    //     default: BookingPriorityUpdateAdmin,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/manajemen-periode",
    //   name: "manajemen-periode",
    //   components: {
    //     default: PeriodeCreate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/periode-update/:id",
    //   name: "periode-update",
    //   components: {
    //     default: PeriodeUpdate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/manajemen-dosen",
    //   name: "manajemen-dosen",
    //   components: {
    //     default: Dosen,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/dosen-create",
    //   name: "create-dosen",
    //   components: {
    //     default: DosenCreate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/dosen-update/:id",
    //   name: "dosen-update",
    //   components: {
    //     default: DosenUpdate,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/jadwal",
    //   name: "jadwal",
    //   components: {
    //     default: Jadwal,
    //     header: Sidebar,
    //     footer: SideFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/jadwal-create",
    //   name: "jadwal-create",
    //   components: {
    //     default: JadwalCreate,
    //     header: LoginNavbar,
    //     footer: MainFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/dashboard/jadwal-update/:id",
    //   name: "jadwal-update",
    //   components: {
    //     default: JadwalUpdate,
    //     header: LoginNavbar,
    //     footer: MainFooter
    //   },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // }
    // {
    //   path: "/demo",
    //   name: "demo",
    //   components: { default: Demo, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/landing",
    //   name: "landing",
    //   components: { default: Landing, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
