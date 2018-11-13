<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2 class="day-plan">
          <v-card>
            <v-toolbar color="teal" dark>
              <v-toolbar-side-icon></v-toolbar-side-icon>

              <v-toolbar-title>Settings</v-toolbar-title>
            </v-toolbar>

            <v-flex xs12 class="day-plan__title">
              today
            </v-flex>

            <v-layout row class="day-plan__columns">
              <v-flex xs6 class="column schedule">
                <v-flex class="column__title">schedule</v-flex>

                <v-layout class="schedule__container">
                  <v-flex xs3 class="schedule__time">
                    <v-text-field class="time__text-field"
                      value="06:00:00"
                      type="time"
                  ></v-text-field>
                  </v-flex>
                  <v-flex xs9 class="schedule__input">
                    <v-text-field class="input__text-field"
                        single-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout class="schedule__container">
                  <v-flex xs1 class="schedule__time">
                    <v-text-field class="time__text-field"
                        value="07:00:00"
                        type="time"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs11 class="schedule__input">
                    <v-text-field class="input__text-field"
                                  single-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout class="schedule__container">
                  <v-flex xs1 class="schedule__time">
                    <v-text-field class="time__text-field"
                        value="08:00:00"
                        type="time"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs11 class="schedule__input">
                    <v-text-field class="input__text-field"
                                  single-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout class="schedule__container">
                  <v-flex xs1 class="schedule__time">
                    <v-text-field class="time__text-field"
                        value="09:00:00"
                        type="time"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs11 class="schedule__input">
                    <v-text-field class="input__text-field"
                                  single-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs6 class="column notes">
                <v-flex class="column__title">date</v-flex>
              </v-flex>
            </v-layout>



          </v-card>
        </v-flex>


      </v-layout>
    </v-app>
  </div>
</template>

<script>
  import LandingPage from '@/components/LandingPage'

  export default {
    name: 'mkplanner-desktop',
    components: {
      LandingPage
    },
    data () {
      return {
        notifications: false,
        sound: false,
        video: false,
        invites: false
      }
    }
  }
</script>

<style lang="scss">

  .day-plan {
    border: 5px solid #bce1da;

    .day-plan__title {
      font-family: 'Allura', cursive;
      font-size: 60px;
      text-align: center;

    }
    .day-plan__columns {
      padding: 16px;

      .column {
        .column__title {
          font-family: 'Teko', sans-serif;
          font-size: 16px;
          text-align: center;
          text-transform: uppercase;
        }
      }

      .schedule {
        .schedule__container {
          height: 35px;

          .schedule__time {
            .time__text-field {
              margin-top: 0;
            }
          }

          .schedule__input {
            .input__text-field {
              margin-top: 0;

            }
          }


        }
      }
    }

  }


</style>
