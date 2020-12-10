<template>
  <div class="pkg-ui">
    <header class="pkg-ui__header">
      <img src="~assets/ifake-logo.png" alt="">
      <div class="pkg-ui__title">
        PKG CLI项目创建工具
      </div>
    </header>
    <main class="pkg-ui__main">
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item :label="i18.appNameLabel[language].name">
          <el-input
            v-model="form.appName"
            :aria-placeholder="i18.appNameLabel[language].placeholder"
            :placeholder="i18.appNameLabel[language].placeholder"
          />
          <div class="pkg-ui__dir">当前所在目录: {{ localAddress }}</div>
        </el-form-item>
        <el-form-item :label="i18.pkgNameLabel[language].name">
          <el-input
            v-model="form.pkgName"
            :aria-placeholder="i18.pkgNameLabel[language].placeholder"
            :placeholder="i18.pkgNameLabel[language].placeholder"
          />
        </el-form-item>
        <el-form-item :label="i18.libraryLabel[language].name">
          <el-input
            v-model="form.library"
            :aria-placeholder="i18.libraryLabel[language].placeholder"
            :placeholder="i18.libraryLabel[language].placeholder"
          />
        </el-form-item>
        <el-form-item :label="i18.managerLabel[language]">
          <el-radio v-model="form.manager" label="yarn">Yarn</el-radio>
          <el-radio v-model="form.manager" label="npm">Npm</el-radio>
        </el-form-item>
        <el-form-item :label="i18.eslintLabel[language]">
          <el-radio v-model="form.eslint" :label="true">是</el-radio>
          <el-radio v-model="form.eslint" :label="false">否</el-radio>
        </el-form-item>
        <el-form-item :label="i18.jestLabel[language]">
          <el-radio v-model="form.jest" :label="true">是</el-radio>
          <el-radio v-model="form.jest" :label="false">否</el-radio>
        </el-form-item>
        <el-form-item :label="i18.packageTypeLabel[language]">
          <el-radio v-model="form.platform" label="js">JS</el-radio>
          <el-radio v-model="form.platform" label="ts">TS</el-radio>
          <el-radio v-model="form.platform" label="web-js">Web-JS</el-radio>
          <el-radio v-model="form.platform" label="web-ts">Web-TS</el-radio>
          <div class="pkg-ui__dir">{{ i18.platform[language][form.platform] }}</div>
        </el-form-item>
        <el-form-item :label="i18.npmMirrorLabel[language].name">
          <el-radio v-model="form.npmMirror" :label="true">是</el-radio>
          <el-radio v-model="form.npmMirror" :label="false">否</el-radio>
          <div class="pkg-ui__dir">{{ i18.npmMirrorLabel[language].placeholder }}</div>
        </el-form-item>
        <el-form-item>
          <el-button @click="createPackage" style="background-color: #5ebd84" type="success">创建</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script>
import { io } from 'socket.io-client'
import i18 from '../utils/i18'
export default {
  data() {
    return {
      localAddress: '',
      language: 'cn',
      form: {
        appName: '',
        platform: 'ts',
        manager: 'yarn',
        pkgName: '',
        eslint: true,
        jest: true,
        npmMirror: true,
        library: ''
      },
      i18,
      ioInstance: null
    }
  },
  mounted() {
    this.ioInstance = io('http://localhost:8081', {
      transports: ['websocket']
    })
    this.ioInstance.on('connect', socket => {
      this.ioInstance.emit('GET_CURRENT_PATH')
      this.ioInstance.on('GET_CURRENT_PATH', data => {
        this.localAddress = data
      })
    })
    this.ioInstance.on('disconnect', () => {
      console.log('disconnect')
    })
  },
  methods: {
    createPackage() {
      this.ioInstance.emit('RESOLVE_DATA', {
        ...this.form,
        language: this.language
      })
    }
  }
}
</script>
<style lang="scss" scoped>
$baseBg: #5ebd84;
$baseColor: #146882;
$labelColor: #146882;
.pkg-ui {
  &__header {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $baseColor;
    background-color: $baseBg;
    font-size: 30px;
    font-weight: bolder;
    position: relative;
    img {
      width: 60px;
      height: 60px;
      margin-right: 15px;
      position: absolute;
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__main {
    margin: 0 auto;
    padding: 20px;
    max-width: 900px;
  }

  &__dir {
    color: #adadad;
    font-size: 16px;
  }
}
  ::v-deep .el-form-item__label {
    color: $labelColor;
    font-size: 18px;
    font-weight: bolder;
  }
</style>
