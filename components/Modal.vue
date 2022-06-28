<template>
  <div class="modal" v-if="$store.getters['platform/GET_STATE_MODAL'].state">
    <button class="modal-close--bg" @click="
        $store.commit('platform/modalOpen', {
          state: false,
          content: '',
        })
      "></button>
    <div class="modal-wrap" :style="$vuetify.theme.dark ? 'background-color: #1E1E1E;' : 'background-color: #fff;'">
      <div class="modal-row">
        <button class="modal-close" @click="
            $store.commit('platform/modalOpen', {
              state: false,
              content: '',
            })
          ">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.55575 2L12 12M11.4442 2L2 12" stroke="black" stroke-width="3" stroke-linecap="round" />
          </svg>
        </button>
        <v-row class="modal-form" v-if="$store.getters['platform/GET_STATE_MODAL'].content == 'auth'">
          <v-col cols="12">
            <h2 class="text-xl">{{ $t('authObj')['title'] }}</h2>
          </v-col>
          <AuthForm />
        </v-row>
        <v-row class="modal-form" v-if="$store.getters['platform/GET_STATE_MODAL'].content == 'regist'">
          <v-col cols="12">
            <h2 class="text-xl">{{ $t('registObj')['title'] }}</h2>
          </v-col>
          <Registration />
        </v-row>
        <v-row class="modal-form d-flex justify-center" v-if="$store.getters['platform/GET_STATE_MODAL'].content == 'board'">
          <v-col cols="12">
            <h2 class="text-xl">Выберите желаемое</h2>
          </v-col>
          <Board :subtaskObj="{
              id: $store.getters['platform/GET_STATE_MODAL'].id,
              name: $store.getters['platform/GET_STATE_MODAL'].name,
            }" />
        </v-row>
        <v-row class="modal-form" v-if="$store.getters['platform/GET_STATE_MODAL'].content == 'task'">
          <v-col cols="12">
            <h2 class="text-xl">{{ $store.getters['platform/GET_STATE_MODAL'].task.name }}</h2>
          </v-col>
          <Task :taskObj="$store.getters['platform/GET_STATE_MODAL'].task" />
        </v-row>
        <v-row class="modal-form" v-if="$store.getters['platform/GET_STATE_MODAL'].content == 'theory'">
          <v-col cols="12">
            <h2 class="text-xl">{{ $store.getters['platform/GET_STATE_MODAL'].theory.name }}</h2>
          </v-col>
          <Theory :theoryObj="$store.getters['platform/GET_STATE_MODAL'].theory" />
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['modalOpen'],
  data() {
    return {}
  },
}
</script>
<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  &-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    padding: 60px;
    box-shadow: 0 0 3em rgb(0 0 0 / 40%);
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
    height: auto;
    overflow: hidden;
    @include _md {
      max-width: 85%;
      padding: 60px 30px 30px 30px;
    }
  }
  &-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &-loader {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-form {
    width: 100%;
    z-index: 3;
    h2 {
      text-align: center;
    }
    img {
      width: 100%;
      max-width: 220px;
      margin: 0 auto;
    }
    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
      @include _md {
        flex-direction: column;
        text-align: center;
      }
    }
    &-text {
      text-align: center;
      width: 100%;
      z-index: 3;
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, -15%);
      h3 {
        ::v-deep b {
          color: #e41f30;
        }
      }
      @include _md {
        margin-left: 0;
        margin-top: 20px;
        bottom: 4%;
      }
    }
  }
  &-close {
    padding: 0;
    height: 40px;
    width: 40px;
    top: 30px;
    right: 30px;
    position: absolute;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 10;
    background: white;
    border: 2px solid #e0e1e4;
    border-radius: 50%;
    line-height: 40px;
    @include _md {
      top: 20px;
      right: 20px;
    }
    @include _sm {
      top: 10px;
      right: 10px;
    }
    svg {
      pointer-events: none;
    }
    &:hover {
      opacity: 0.5;
    }
    &--bg {
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      backdrop-filter: blur(2px);
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
      margin: 0;
      padding: 0;
      border: none;
    }
  }
}
</style>
