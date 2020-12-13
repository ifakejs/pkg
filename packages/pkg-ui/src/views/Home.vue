<template>
  <div class="pkg-ui">
    <header class="pkg-ui__header">
      <img src="~assets/ifake-logo.png" alt="">
      <div class="pkg-ui__title">
        {{ language === 'en' ? 'PKG CLI Project Builder' : 'PKG CLI项目创建工具'}}
      </div>
      <el-button-group class="pkg-ui__lang">
        <el-button size="mini" :type="langStatus('cn')" @click="setLang('cn')">简体中文</el-button>
        <el-button size="mini" :type="langStatus('en')" @click="setLang('en')">English</el-button>
      </el-button-group>
    </header>
    <main class="pkg-ui__main">
      <el-form ref="form" :rules="rules" :model="form" label-width="240px">
        <el-form-item :label="i18.appNameLabel[language].name" prop="appName">
          <el-input
            v-model="form.appName"
            :aria-placeholder="i18.appNameLabel[language].placeholder"
            :placeholder="i18.appNameLabel[language].placeholder"
          />
          <div class="pkg-ui__dir">{{ language === 'cn' ? '当前所在目录:' : 'Current directory:' }} {{ localAddress }}</div>
        </el-form-item>
        <el-form-item :label="i18.pkgNameLabel[language].name" prop="pkgName">
          <el-input
            v-model="form.pkgName"
            :aria-placeholder="i18.pkgNameLabel[language].placeholder"
            :placeholder="i18.pkgNameLabel[language].placeholder"
          />
        </el-form-item>
        <el-form-item :label="i18.libraryLabel[language].name" prop="library">
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
          <el-radio v-model="form.eslint" :label="true">{{ radioText(language)[0] }}</el-radio>
          <el-radio v-model="form.eslint" :label="false">{{ radioText(language)[1] }}</el-radio>
        </el-form-item>
        <el-form-item :label="i18.jestLabel[language]">
          <el-radio v-model="form.jest" :label="true">{{ radioText(language)[0] }}</el-radio>
          <el-radio v-model="form.jest" :label="false">{{ radioText(language)[1] }}</el-radio>
        </el-form-item>
        <el-form-item :label="i18.packageTypeLabel[language]">
          <el-radio v-model="form.platform" label="js">JS</el-radio>
          <el-radio v-model="form.platform" label="ts">TS</el-radio>
          <el-radio v-model="form.platform" label="web-js">Web-JS</el-radio>
          <el-radio v-model="form.platform" label="web-ts">Web-TS</el-radio>
          <div class="pkg-ui__dir">{{ i18.platform[language][form.platform] }}</div>
        </el-form-item>
        <el-form-item :label="i18.npmMirrorLabel[language].name">
          <el-radio v-model="form.npmMirror" :label="true">{{ radioText(language)[0] }}</el-radio>
          <el-radio v-model="form.npmMirror" :label="false">{{ radioText(language)[1] }}</el-radio>
          <div class="pkg-ui__dir">{{ i18.npmMirrorLabel[language].placeholder }}</div>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" @click="createPackage('form')" style="background-color: #5ebd84" type="success">Create</el-button>
          <el-button :loading="loading" @click="clearPackage('form')" type="ghost">Clear</el-button>
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
      language: 'en',
      loading: false,
      form: {
        appName: 'app-name',
        platform: 'ts',
        manager: 'yarn',
        pkgName: 'pkg-name',
        eslint: true,
        jest: true,
        npmMirror: true,
        library: 'PkgName'
      },
      rules: {
        appName: [
          { required: true, message: '项目名称', trigger: 'blur' }
        ],
        pkgName: [
          { required: true, message: 'Npm包名', trigger: 'blur' }
        ],
        library: [
          { required: true, message: 'UMD名称', trigger: 'blur' }
        ]
      },
      i18,
      ioInstance: null
    }
  },
  mounted() {
    this.ioInstance = io('http://localhost:9986', {
      transports: ['websocket']
    })
    this.ioInstance.on('connect', socket => {
      this.ioInstance.emit('GET_CURRENT_PATH')
      this.ioInstance.on('GET_CURRENT_PATH', data => {
        this.localAddress = data
      })
      this.ioInstance.on('CREATE_DONE', () => {
        this.clearPackage('form')
        this.loading = false
        this.$message.success('Create Success.')
      })
    })
    this.ioInstance.on('disconnect', () => {
      console.log('disconnect')
    })
  },
  methods: {
    createPackage(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          this.ioInstance.emit('RESOLVE_DATA', {
            ...this.form,
            language: this.language
          })
        } else {
          this.$message.error('Error ')
        }
      })
    },
    clearPackage(formName) {
      this.$refs[formName].resetFields()
    },
    setLang(lang) {
      this.language = lang
    },
    langStatus(val) {
      if (this.language === val) {
        return 'primary'
      }
      return ''
    },
    radioText(val) {
      if (val === 'en') {
        return ['Yes', 'No']
      }
      return ['是', '否']
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

  &__lang {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
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
