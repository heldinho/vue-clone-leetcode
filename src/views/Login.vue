<template>
  <div class="box-login">
    <div class="mb-5">
      <img
        src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
        alt=""
      />
    </div>
    <div class="form-group">
      <input
        class="form-control"
        type="text"
        placeholder="E-mail"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <div class="input-group mb-3">
        <input
          :type="dtInputType"
          class="form-control"
          placeholder="Senha"
          v-model="password"
        />
        <span class="btn btn-link" @click="fnShowPassword">{{
          dtShowPassword
        }}</span>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check text-right">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label btn-link" for="flexCheckDefault">
          Lembrar acesso
        </label>
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-dark btn-block">Entrar</button>
    </div>
    <div class="d-flex justify-content-between aling-items-center">
      <spsn class="btn btn-link m-0 p-0">
        <span>Esqueceu a senha?</span>
      </spsn>
      <span class="btn btn-link m-0 p-0">
        <span>Criar nova conta</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data: () => ({
    dtInputType: 'password',
    dtShowPassword: 'Mostrar'
  }),
  computed: {
    ...mapState({
      email: state => state.email,
      password: state => state.password
      // isLoadingFolders: ({ ecm }) => ecm.isLoadingFolders,
      // showFolderPermission: ({ ecm }) => ecm.showFolderPermission,
      // activeFolderPermission: ({ ecm }) => ecm.activeFolderPermission,
      // selectedFolder: ({ ecm }) => ecm.selectedFolder,
      // listFolders: ({ ecm }) => ecm.listFolders,
      // foldersGeneralSettings: ({ ecm }) => ecm.foldersGeneralSettings
    })
  },
  methods: {
    ...mapActions({
      // setIsLoadingFolders: 'ecm/setIsLoadingFolders',
      // setSelectedFolder: 'ecm/setSelectedFolder',
      // setFoldersGeneralSettings: 'ecm/setFoldersGeneralSettings',
      // setListFolders: 'ecm/setListFolders',
      // getListTags: 'ecm/getListTags',
      // setDocumentsList: 'ecm/setDocumentsList',
      // showDocumentScan: 'scan/showDocumentScan',
      // resetAllState: 'scan/resetAllState'
    }),
    fnShowPassword() {
      if (this.dtInputType === 'password') {
        this.dtInputType = 'text'
        this.dtShowPassword = 'Ocultar'
      } else {
        this.dtInputType = 'password'
        this.dtShowPassword = 'Mostrar'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-login {
  box-shadow: 0px 0px 8px 0px #ccc;
  padding: 50px;
  text-align: center;
  max-width: 500px;
  margin: 50px auto;
  border-radius: 8px;
  background: #fff;
}
.form-check-label {
  cursor: pointer;
}

@media (max-width: 700px) {
  .box-login {
    margin: 0;
    max-width: 100% !important;
    height: 100vh !important;
    box-shadow: none;
    border-radius: 0px;
  }
}
</style>
