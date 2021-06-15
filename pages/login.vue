<template>
  <Main>
    <v-container class="pa-0 pt-16 pb-16">
      <v-row>
        <v-col
          cols="6"
          lg="2"
          md="12"
          sm="12"
        />
        <v-col
          cols="6"
          lg="8"
          md="12"
          sm="12"
        >
          <div class="form-block-2 login div-block-10">
            <div class="formulario w-form">
              <form
                id="form-login"
                name="form-login"
                method="POST"
                redirect="/admin"
                action="/admin"
              >
                <p class="body-1">
                  ACESSE AGORA COM CERTIFICADO
                </p>
                <div class="button d-inline-flex mb-4 clear" style="width:100%; display:table;">
                  <div class="icon-certificate">
                    <v-icon dark>
                      mdi-certificate-outline
                    </v-icon>
                  </div><input type="submit" value="CERTIFICADO DIGITAL" class="submit-button-4-copy w-button">
                </div><a href="#" class="body-1">Como obter o certificado digital?</a>
              </form>
            </div><div class="div-block-11">
              <div class="text-block-4">
                OU
              </div>
            </div><div class="formulario w-form">
              <form
                id="wf-form-login"
                name="wf-form-login"
                method="POST"
                redirect="/admin"
                action="/admin"
              >
                <v-text-field name="login" label="Login" required outlined />
                <v-text-field name="code" label="Código de acesso" required outlined />
                <v-text-field
                  type="password"
                  name="senha"
                  label="Senha"
                  required
                  outlined
                />
                <v-btn
                  x-large
                  color="primary"
                  dark
                  elevation="0"
                  type="submit"
                  width="100%"
                  class="mb-4"
                >
                  ENTRAR
                </v-btn>
                <a href="#" class="body-1">Esqueceu a senha?</a>
              </form>
            </div>
          </div>
        </v-col>
        <v-col
          cols="6"
          lg="2"
          md="12"
          sm="12"
        />
      </v-row>
    </v-container>
  </Main>
</template>
<script>
export default {
  data () {
    return {
      title: 'Login'
    }
  },
  head () {
    return {
      title: this.title + ' | ' + process.env.nameApp,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página ' + this.title + ' | ' + process.env.nameApp + ' ' + process.env.descriptionApp
        }
      ]
    }
  }
}
</script>
<style scoped>
.form-block-2 {
  padding: 3rem;
  border-radius: 9px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.form-block-2.login {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 95%;
  height: 400px;
  padding-right: 2.2rem;
  padding-left: 2.2rem;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.formulario {
    width: 45%;
    margin-bottom: 0px;
}
.div-block-11 {
    position: relative;
    right: -30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 10%;
    height: 335px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-left: 1px solid #d3cece;
    text-align: center;
}
.text-block-4 {
    position: relative;
    left: -36px;
    padding: 11px;
    background-color: #fff;
}
.w-button {
    display: inline-block;
    padding: 9px 15px;
    background-color: #3898EC;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
}
.submit-button-4-copy {
    width: 100%;
    height: 52px;
    border-style: solid;
    border-width: 1px;
    border-color: #0497c4;
    border-radius: 0px 5px 5px 0px;
    background-color: #0497c4;
    text-align: center;
}
.icon-certificate {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 62px;
    height: 52px;
    margin: 0px;
    padding: 8px 14px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 5px 0px 0px 5px;
    background-color: #017da3;
}

@media screen and (max-width: 1000px) {
  .text-block-4 {
      left: auto;
      bottom: -22px;
  }
  .div-block-11 {
      top: -20px;
      right: auto;
      width: 85%;
      height: auto;
      border-bottom: 1px solid #d3cece;
      border-left-style: none;
  }
}
</style>
