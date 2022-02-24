<template>
  <div class="wrapper">
    <div id="navigation-pills">
      <div class="title">
        <h3>Navigation Pills</h3>
      </div>
      <div class="title">
        <h3><small>With Icons</small></h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-50">
          <tabs
            :tab-name="['Informatika', 'Akuntansi']"
            :tab-icon="['']"
            plain
            flex-column
            nav-pills-icons
            color-button="primary"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              <h2 style="text-align: center; padding: 10px 0px 20px 0px;">
                Lulusan Prodi Informatika
              </h2>
              <div class="row">
                <div
                  class="row"
                  v-for="(wisudawan, key) in wisudawanList"
                  :key="key"
                >
                  <div
                    class="col"
                    v-if="wisudawan.prodi.nama_prodi == 'Informatika'"
                  >
                    <router-link
                      :to="{
                        name: 'wisudawanProfile',
                        params: { id: wisudawan.id }
                      }"
                    >
                      <img :src="img" style="width:100%" />
                      <div class="overlay">
                        <div class="text">
                          <h4
                            class="title"
                            style="font-size: 15px; text-align: center"
                          >
                            {{ wisudawan.nama_lengkap }}
                          </h4>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </template>

            <template slot="tab-pane-2">
              <h2 style="text-align: center; padding: 10px 0px 20px 0px;">
                Lulusan Prodi Akuntansi
              </h2>
              <div class="row">
                <div
                  class="row"
                  v-for="(wisudawan, key) in wisudawanList"
                  :key="key"
                >
                  <div
                    class="col"
                    v-if="wisudawan.prodi.nama_prodi == 'Akuntansi'"
                  >
                    <router-link
                      :to="{
                        name: 'wisudawanProfile',
                        params: { id: wisudawan.id }
                      }"
                    >
                      <img :src="img" style="width:100%" />
                      <div class="overlay">
                        <div class="text">
                          <h4
                            class="title"
                            style="font-size: 15px; text-align: center"
                          >
                            {{ wisudawan.nama_lengkap }}
                          </h4>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </template>
          </tabs>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs
            :tab-name="['Dashboard', 'Schedule', 'Tasks']"
            :tab-icon="['dashboard', 'schedule', 'list']"
            plain
            nav-pills-icons
            color-button="primary"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br /><br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </template>
            <template slot="tab-pane-2">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              <br /><br />
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </template>
            <template slot="tab-pane-3">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
              <br /><br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </template>
          </tabs>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs
            :tab-name="['Dashboard', 'Schedule']"
            :tab-icon="['dashboard', 'schedule']"
            plain
            flex-column
            nav-pills-icons
            color-button="primary"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br /><br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </template>
            <template slot="tab-pane-2">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              <br /><br />
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </template>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";

export default {
  components: {
    Tabs
  }
};
</script>

<style lang="css"></style>
