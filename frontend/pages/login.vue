<template>
  <v-container class="pa-0 pa-16">
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
              id="wf-form-login"
              name="wf-form-login"
              data-name="login"
              method="post"
              redirect="/painel"
              data-redirect="/painel"
              action="/painel"
            >
              <div class="button">
                <div class="icon-certificate">
                  <img
                    src="https://uploads-ssl.webflow.com/60a41cbcb768f76857b497f4/60b5529d4fb7cc93689e6e1e_diploma.svg"
                    loading="lazy"
                    height="60"
                    width="100"
                    alt=""
                    class="image-4"
                  >
                </div><input type="submit" value="CERTIFICADO DIGITAL" data-wait="Aguarde..." class="submit-button-4-copy w-button">
              </div><a href="#" class="link link-right-copy">Como obter o certificado digital?</a>
            </form>
          </div><div class="div-block-11">
            <div class="text-block-4">
              OU
            </div>
          </div><div class="formulario w-form">
            <form
              id="wf-form-login"
              name="wf-form-login"
              data-name="login"
              method="post"
              redirect="/painel"
              data-redirect="/painel"
              action="/painel"
            >
              <input
                id="login"
                type="text"
                class="input w-input"
                maxlength="256"
                name="login"
                data-name="Login"
                placeholder="Login"
                required=""
              ><input
                id="senha"
                type="password"
                class="input w-input"
                maxlength="256"
                name="senha"
                data-name="Senha"
                placeholder="Senha"
                required=""
              >
              <v-btn
                x-large
                color="primary"
                dark
                elevation="0"
                type="submit"
              >
                ENTRAR
              </v-btn>
              <div class="div-block-6">
                <a href="#" class="link link-right">Esqueceu a senha?</a>
              </div>
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
</template>
<script>
export default { layout: 'page' }
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
    height: 220px;
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
