<template>
  <Page>
    <Header />
    <Section id="gallery">
      <Container class="container">
        <Row class="columns">
          <Column class="w-col-6">
            <div class="div-block-2">
              <h1 class="title">
                Acelere suas<br>vendas on-line
              </h1>
              <h3 class="heading">
                A YuMe é uma Fintech com Gateway de Pagamento Próprio e <strong class="bold-text-3">Checkout Transparente</strong>. Reunindo tudo que você buscava para aumentar as conversões do seu negócio virtual.
              </h3>
              <a href="#checkout" class="button w-button">SAIBA MAIS</a>
            </div>
          </Column>
          <div class="w-col w-col-6">
            <div id="cadastro_form" class="form-block w-form">
              <div class="div-block">
                <h4 class="heading-3 size-20">
                  FAÇA SEU CADASTRO
                </h4>
                <div class="text-block">
                  Cadastre-se agora e tenha acesso a uma Plataforma Intermediadora de Pagamento completa. Com Gestão e Integrações para escalar suas vendas on-line.
                </div>
              </div>
              <div class="w-form-done">
                <div>Recebemos o seu cadastro com sucesso!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Tente novamente.</div>
              </div>
              <form id="form" method="post" action="https://yumedigital.com.br/partners" name="parceiro" class="form">
                <input
                  id="name"
                  type="text"
                  class="text-field no-border w-input"
                  maxlength="256"
                  name="name"
                  data-name="name"
                  placeholder="Nome"
                  required
                >
                <input
                  id="email"
                  type="email"
                  class="text-field no-border w-input"
                  maxlength="256"
                  name="email"
                  data-name="email"
                  placeholder="E-mail"
                  required
                >
                <div class="w-layout-grid grid">
                  <input
                    id="city"
                    type="text"
                    class="text-field no-border w-input"
                    maxlength="256"
                    name="city"
                    data-name="city"
                    placeholder="Cidade"
                    required
                  >
                  <input
                    id="state-2"
                    type="text"
                    class="text-field no-border w-input"
                    maxlength="256"
                    name="state"
                    data-name="state"
                    placeholder="Estado"
                    required
                  >
                  <input
                    id="market_time"
                    type="text"
                    class="text-field no-border w-input"
                    maxlength="256"
                    name="market_time"
                    data-name="market_time"
                    placeholder="Tempo de operação"
                  >
                  <input
                    id="revenue_avg"
                    type="number"
                    class="text-field no-border w-input"
                    maxlength="256"
                    name="revenue_avg"
                    data-name="revenue_avg"
                    placeholder="Faturamento mensal"
                  >
                  <select id="source" name="source" data-name="source" class="select-field no-border w-select">
                    <option value="0">
                      Como conheceu?
                    </option>
                    <option value="mauricio_seixas">
                      Maurício Seixas
                    </option>
                    <option value="drop_smart">
                      Drop Smart
                    </option>
                    <option value="kevin_rocha">
                      Kevin Rocha
                    </option>
                    <option value="leonardo_drop">
                      Leonardo Drop
                    </option>
                    <option value="washington_junior">
                      Washington Jr
                    </option>
                    <option value="viking">
                      Viking
                    </option>
                    <option value="instagram">
                      Instagram
                    </option>
                    <option value="facebook">
                      Facebook
                    </option>
                    <option value="google">
                      Google
                    </option>
                    <option value="indicacao">
                      Indicação/Amigo
                    </option>
                    <option value="outros">
                      Outros
                    </option>
                  </select><input
                    id="whatsapp"
                    type="text"
                    class="text-field no-border w-input"
                    maxlength="256"
                    name="whatsapp"
                    data-name="whatsapp"
                    placeholder="Telefone/Whatsapp"
                  >
                </div>
                <h4 class="heading-3 h-color-black">
                  Qual o seu segmento principal?
                </h4><select id="main_segment_type" name="main_segment_type" data-name="main_segment_type" class="select-field no-border w-select">
                  <option value="produtor_nacional">
                    Produtor Nacional
                  </option>
                  <option value="dropshipping">
                    Dropshipping
                  </option>
                  <option value="encapsulados">
                    Encapsulados
                  </option>
                  <option value="cosmeticos">
                    Cosmeticos/Beleza
                  </option>
                  <option value="ecommerce">
                    E-Commerce
                  </option>
                  <option value="infoprodutos">
                    Infoprodutos
                  </option>
                  <option value="servicos">
                    Serviços
                  </option>
                  <option value="Outros">
                    outros
                  </option>
                </select><input type="submit" value="ENVIAR CADASTRO" data-wait="Aguarde..." class="submit-button w-button">
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </Section>
    <Section id="gateway" class="bg-2">
      <Container>
        <div class="div-block-3">
          <h2 class="heading-2 color">
            Gateway de Pagamento
          </h2>
          <h3 class="heading">
            Nosso serviço de Gateway é focado em otimizar a experiência de seus pagamentos, foi especialmente pensando para acompanhar as demandas de crescimento exponencial do mercado digital.
          </h3>
        </div>
        <div class="lines w-row">
          <div class="column w-col w-col-1" />
          <div class="column-11 w-col w-col-5">
            <img src="/images/seguro.svg" loading="lazy" alt="" class="image">
          </div>
          <div class="w-col w-col-5">
            <h3 class="heading-5">
              Compra Segura
            </h3>
            <h4 class="heading-4">
              Processamos os pagamentos sem burocracia e com máxima segurança, com a emissão das cobranças através de boleto ou cartão e um dos melhores serviços antifraude do mercado.<br>
            </h4>
          </div>
          <div class="column-2 w-col w-col-1" />
        </div>
        <div class="lines w-row">
          <div class="column-3 w-col w-col-1" />
          <div class="w-col w-col-5">
            <h3 class="heading-6">
              Antecipação de Recebíveis
            </h3>
            <h4 class="heading-4 h-right">
              Realize suas vendas e tenha automaticamente antecipação em D+3 em sua conta YuMe Digital, com a opção de transferência para o Banco de sua preferência.<br>
            </h4>
          </div>
          <div class="column-12 w-col w-col-5">
            <img
              src="/images/retorno.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 210px"
              srcset="/images/retorno-p-500.png 500w, /images/retorno.png 1000w"
              alt=""
              class="image"
            >
          </div>
          <div class="column-4 w-col w-col-1" />
        </div>
        <div class="lines w-row">
          <div class="column-5 w-col w-col-1" />
          <div class="column-13 w-col w-col-5">
            <img src="/images/garantido.svg" loading="lazy" alt="" class="image">
          </div>
          <div class="w-col w-col-5">
            <h3 class="heading-5">
              Sistema Antifraude
            </h3>
            <h4 class="heading-4">
              Nosso sistema antifraude é atualizado diariamente, validando sua operação com máxima segurança. Diminuindo consideravelmente o número de recusas.<br>
            </h4>
          </div>
          <div class="column-6 w-col w-col-1" />
        </div>
        <div class="lines w-row">
          <div class="column-7 w-col w-col-1" />
          <div class="w-col w-col-5">
            <h3 class="heading-6">
              Funcionalidade Cancelamento<br>
            </h3>
            <h4 class="heading-4 h-right">
              Caso você tenha problemas na entrega de produtos ou realização dos serviços e tenha um pedido de cancelamento da venda, poderá utilizar a funcionalidade de cancelamento de forma rápida e segura diretamente na Yume.<br>
            </h4>
          </div>
          <div class="column-14 w-col w-col-5">
            <img
              src="/images/lock.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 210px"
              srcset="/images/lock-p-500.png 500w, /images/lock-p-800.png 800w, /images/lock.png 1000w"
              alt=""
              class="image"
            >
          </div>
          <div class="column-8 w-col w-col-1" />
        </div>
        <div class="lines lines-last w-row">
          <div class="column-9 w-col w-col-1" />
          <div class="column-15 w-col w-col-5">
            <img src="/images/protecao.png" loading="lazy" alt="" class="image">
          </div>
          <div class="w-col w-col-5">
            <h3 class="heading-5">
              Recuperação de<br>Carrinhos e Boletos
            </h3>
            <h4 class="heading-4">
              Recupere os Carrinhos abandonados e Boletos através da nossa plataforma, utilizando o e-mail ou o Yume Zap, dessa forma aumentando a conversão em até 30%<br>
            </h4>
          </div>
          <div class="column-10 w-col w-col-1" />
        </div>
      </Container>
    </Section>
    <lazy-section id="checkout" class="section-2">
      <Container>
        <div class="div-block-3-white">
          <h2 class="heading-2-white">
            Checkout Yume
          </h2>
          <h3 class="heading-white">
            A YuMe trouxe para o Mercado Digital uma experiência simples, imersiva e assertiva com Checkout amigável com várias vantagens que poderão representar um ganho de 35.26% nas suas conversões.
          </h3>
        </div>
        <div class="w-row">
          <div class="w-col w-col-4">
            <div class="text-left">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-left">
                Transparente Sem Fricção
              </h3>
              <h4 class="heading-4-white text-left text-shadow">
                Seu cliente irá concluir a compra sem precisar migrar para outra página finalizando a compra dentro do próprio ambiente da loja virtual.<br>
              </h4>
            </div>
            <div class="text-left">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-left">
                Checkout Parametrizável
              </h3>
              <h4 class="heading-4-white text-left text-shadow">
                Opções para parametrizar o temporizador, as ofertas, os dias do vencimento do boleto, quantidades de parcela no cartão e muito mais.<br>
              </h4>
            </div>
            <div class="text-left">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-left">
                Desconto Progressivo
              </h3>
              <h4 class="heading-4-white text-left text-shadow">
                Com essa funcionalidade ofereça descontos por acréscimo de unidades dentro do pedido inicial. Aumentando seu ticket médio.<br>
              </h4>
            </div>
            <div class="text-left">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-left">
                Prova Social
              </h3>
              <h4 class="heading-4-white text-left text-shadow">
                Tenha opção de mostrar pessoas reais que estão adquirindo seu produto, humanizando o processo de compra e fortalecendo ainda mais o valor da sua oferta.<br>
              </h4>
            </div>
          </div>
          <div class="w-col w-col-4">
            <img src="/images/checkout2.png" loading="lazy" alt="" class="image-2">
          </div>
          <div class="w-col w-col-4">
            <div class="text-right">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-right">
                Integrações e Marcação de Pixels
              </h3>
              <h4 class="heading-4-white text-right text-shadow">
                Utilize os links de direcionamento nas marcações no Taboola. E tenha integrações com Facebook e Google para marcação de pixels.<br>
              </h4>
            </div>
            <div class="text-right">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-right">
                Upsell de Juros
              </h3>
              <h4 class="heading-4-white text-right text-shadow">
                Parametrize suas vendas parceladas. Nosso upsell está́ fundamentado na noção de abordar seus clientes indicando as vantagens de parcelamento do seu produto. Aumentando seus ganhos nesta operação. <br><br>
              </h4>
            </div>
            <div class="text-right">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-right">
                Desconto Por Tipos De Pagamento
              </h3>
              <h4 class="heading-4-white text-right text-shadow">
                Oferte descontos por tipo de pagamentos &quot;Cartão ou Boleto&quot; definindo a % de desconto, aumentando assim a conversão dos pedidos para um tipo de pagamento específico.<br>
              </h4>
            </div>
            <div class="text-right">
              <img src="/images/icone2.png" loading="lazy" alt="" class="image-bg">
              <h3 class="heading-5-white text-right">
                Temporizador
              </h3>
              <h4 class="heading-4-white text-right text-shadow">
                Escolha se assim desejar, estipular os prazos estratégicos para suas ofertas, estimulando a diminuição do tempo da decisão de compra dos seus clientes.<br>
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </lazy-section>
    <lazy-section class="bg-2">
      <Container>
        <div class="div-block-3">
          <h2 class="heading-2">
            Nossos Planos
          </h2>
        </div>
        <div class="planos w-row">
          <div class="w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div class="plano-item">
              <h3 class="plano-title">
                Grátis
              </h3>
              <div class="plano-content">
                <h3 class="price">
                  Taxa de 1%
                </h3>
                <div class="text-block-3">
                  no checkout
                </div>
                <ul role="list" class="list">
                  <li class="list-item">
                    <div>Shopify</div>
                  </li>
                  <li class="list-item">
                    <div>Checkout transparente</div>
                  </li>
                  <li class="list-item">
                    <div>Gateway Yume pay</div>
                  </li>
                  <li class="list-item">
                    <div>Recuperação de carrinhos e boletos por e-mail e Whatsapp</div>
                  </li>
                  <li class="list-item">
                    <div>Integração com Ads (face, google e taboola)<br></div>
                  </li>
                  <li class="list-item">
                    <div>1% de taxa de checkout<br></div>
                  </li>
                </ul>
                <a href="#cadastro_form" class="button-link w-button">ASSINE</a>
              </div>
            </div>
          </div>
          <div class="w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div class="plano-item">
              <h3 class="plano-title plano-starter">
                Starter
              </h3>
              <div class="plano-content">
                <h3 class="price">
                  R$ 177,00
                </h3>
                <ul role="list" class="list">
                  <li class="list-item">
                    <div>Shopify</div>
                  </li>
                  <li class="list-item">
                    <div>Checkout transparente</div>
                  </li>
                  <li class="list-item">
                    <div>Gateway Yume pay</div>
                  </li>
                  <li class="list-item">
                    <div>Recuperação de carrinhos e boletos por e-mail e Whatsapp</div>
                  </li>
                  <li class="list-item">
                    <div>Integração com Ads (face, google e taboola)<br></div>
                  </li>
                  <li class="list-item">
                    <div>Até 05 usuários<br></div>
                  </li>
                </ul>
                <a href="#cadastro_form" class="button-link w-button">ASSINE</a>
              </div>
            </div>
          </div>
          <div class="w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div class="plano-item">
              <h3 class="plano-title plano-pro">
                PRO
              </h3>
              <div class="plano-content">
                <h3 class="price">
                  R$ 377,00
                </h3>
                <ul role="list" class="list">
                  <li class="list-item">
                    <div>Shopify</div>
                  </li>
                  <li class="list-item">
                    <div>Checkout transparente</div>
                  </li>
                  <li class="list-item">
                    <div>Gateway Yume pay</div>
                  </li>
                  <li class="list-item">
                    <div>Recuperação de carrinhos e boletos por e-mail e Whatsapp</div>
                  </li>
                  <li class="list-item">
                    <div>Integração com Ads (face, google e taboola)<br></div>
                  </li>
                  <li class="list-item">
                    <div>Prioridade no suporte<br></div>
                  </li>
                </ul>
                <a href="#cadastro_form" class="button-link w-button">ASSINE</a>
              </div>
            </div>
          </div>
          <div class="w-col w-col-3 w-col-medium-6 w-col-small-6 w-col-tiny-6">
            <div class="plano-item">
              <h3 class="plano-title plano-prime">
                Prime
              </h3>
              <div class="plano-content">
                <h3 class="price">
                  R$ 4.900,00
                </h3>
                <ul role="list" class="list">
                  <li class="list-item">
                    <div>Shopify</div>
                  </li>
                  <li class="list-item">
                    <div>Checkout transparente</div>
                  </li>
                  <li class="list-item">
                    <div>Gateway Yume pay</div>
                  </li>
                  <li class="list-item">
                    <div>Recuperação de carrinhos e boletos por e-mail e Whatsapp</div>
                  </li>
                  <li class="list-item">
                    <div>Integração com Ads (face, google e taboola)<br></div>
                  </li>
                  <li class="list-item">
                    <div>Vitalício<br></div>
                  </li>
                  <li class="list-item">
                    <div>Prioridade no suporte<br></div>
                  </li>
                  <li class="list-item">
                    <div>Horas de mentoria<br></div>
                  </li>
                </ul>
                <a href="#cadastro_form" class="button-link w-button">ASSINE</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </lazy-section>
    <Footer />
  </Page>
</template>

<script>
export default {
  head () {
    return {
      title: 'Yume Digital - Gateway e Checkout de pagamentos online',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Gateway e Checkout de pagamentos online'
        }
      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
    .image-2 {
        display: block;
        position: relative;
        width: 70%;
        margin: 0 auto 30px;
    }
}
</style>
