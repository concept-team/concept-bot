"use strict";

const Colors = {
  PRIMARY: "#2d2a26",
  SECONDARY: "#000",
  TERTIARY: "#7A736E",
  TEXT: "#fff",
};

const options = {
  colors: {
    branding: Colors.PRIMARY,
    text: Colors.TEXT,
    textLight: Colors.TEXT,
    botText: Colors.TEXT,
    footerButtonFill: Colors.TEXT,
    links: Colors.TEXT,
    inputText: Colors.TEXT,
    globalActionsText: Colors.TEXT,
    actionsText: Colors.TEXT,
    cardBackground: Colors.PRIMARY,
    footerBackground: Colors.PRIMARY,
    conversationBackground: Colors.PRIMARY,
    globalActionsBorder: Colors.SECONDARY,
    globalActionsBackground: Colors.SECONDARY,
    globalActionsBackgroundFocus: Colors.SECONDARY,
    globalActionsBackgroundHover: Colors.SECONDARY,
    botMessageBackground: Colors.SECONDARY,
    userMessageBackground: Colors.SECONDARY,
    actionsBackground: Colors.SECONDARY,
    actionsBackgroundHover: Colors.SECONDARY,
    actionsBackgroundFocus: Colors.SECONDARY,
    actionsBorder: Colors.SECONDARY,
    typingIndicator: Colors.SECONDARY,
    inputBackground: Colors.TERTIARY,
  },
};

// Set client auth mode - true to enable client auth, false to disable it
var isClientAuthEnabled = false;

var skillVoicePT = [
  {
    lang: "pt-br",
    name: "Google português do Brasil",
  },
  {
    lang: "pt-br",
    name: "Luciana",
  },
  {
    lang: "pt-PT",
    name: "Joana",
  },
  {
    lang: "pt-br",
  },
];

var skillVoiceEN = [
  {
    lang: "en-US",
    name: "Samantha",
  },
  {
    lang: "en-US",
    name: "Alex",
  },
  {
    lang: "en-US",
  },
];

var skillVoiceES = [{ lang: "es-ES" }];

/**
 * Initializes the SDK and sets a global field with passed name for it the can
 * be referred later
 *
 * @param {string} name Name by which the chat widget should be referred
 */
var initSdk = function (name) {
  if (!name) {
    name = "Bots"; // Set default reference name to 'Bots'
  }
  var Bots;

  var locale = sessionStorage.getItem("languageTag");
  var speechLocale =
    locale == "pt-BR" ? "pt-br" : locale == "es" ? "es-es" : "en-US";
  var skillVoices =
    locale == "pt-BR"
      ? skillVoicePT
      : locale == "es"
        ? skillVoiceES
        : skillVoiceEN;

  setTimeout(function () {
    /**
     * SDK configuration settings
     * Other than URI, all fields are optional with two exceptions for auth modes
     * In client auth disabled mode, 'channelId' must be passed, 'userId' is optional
     * In client auth enabled mode, 'clientAuthEnabled: true' must be passed
     */
    var chatWidgetSettings = {
      URI: "oda-2497a55ccce743cdb5e930a2c58741f6-da2.data.digitalassistant.oci.oraclecloud.com",
      channelId: "46e6b051-0e2f-4ac7-a4d2-7151a51bc320",
      openChatOnLoad: false,
      initUserHiddenMessage: "Oi",
      initMessageOptions: {
        sendAt: "expand",
      },
      displayActionsAsPills: true,
      enableAttachment: false,
      //			shareMenuItems: ['visual'],
      shareLocation: false,
      enableAutocomplete: true,
      enableAutocompleteClientCache: true,
      enableClearMessage: false,
      initUserProfile: {
        profile: {
          givenName: sessionStorage.getItem("givenName"),
          surname: sessionStorage.getItem("surname"),
          email: sessionStorage.getItem("email"),
          languageTag: sessionStorage.getItem("languageTag"),
          passInt: sessionStorage.getItem("passInt"),
        },
        properties: {
          userInt: sessionStorage.getItem("email"),
          passInt: sessionStorage.getItem("passInt"),
          userId: sessionStorage.getItem("userId"),
        },
      },
      enableTimestamp: true,
      showConnectionStatus: true,
      embeddedVideo: true,
      locale: "pt-BR",
      enableBotAudioResponse: true,
      enableSpeech: true,
      speechLocale: speechLocale,
      enableSecureConnection: true,
      initBotAudioMuted: true,
      openChatOnLoad: true,
      skillVoices: skillVoices,
      /*			multiLangChat: {
        supportedLangs: [{
          lang: 'en'
        }, {
          lang: 'es',
          label: 'Español'
        }, {
          lang: 'pt',
          label: 'Português'
        }],
        primary: 'pt'
      },	*/
      conversationBeginPosition: "bottom",
      //botButtonIcon: 'botOracle/images/iconConceptStore.png',
      //logoIcon: 'botOracle/images/iconConceptStore.png',
      //botIcon: 'botOracle/images/iconConceptStore.png',
      font: '14px "Mier B", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      colors: options.colors,
      i18n: {
        "pt-BR": {
          audioResponseOff: "Clique para ativar a resposta de áudio",
          audioResponseOn: "Clique para desativar a resposta de áudio",
          chatTitle: "Assistente Digital",
          connected: "Disponível",
          disconnected: "Indisponível",
          inputPlaceholder: "Escrever mensagem",
          send: "Enviar (Enter)",
          clear: "Limpar Chat",
          close: "Minimizar Chat",
          connecting: "Conectando...",
          closing: "Fechando...",
          requestLocation: "Envie a sua localização",
          upload: "Escolha o arquivo a ser enviado",
          uploadFailed: "Ocorreu um erro. Contacte o administrador.",
          uploadUnsupportedFileType:
            "Ocorreu um erro. Este tipo de arquivo não é permitido.",
          requestLocationString: "Ocorreu um erro. Contacte o administrador",
          uploadFileSizeLimitExceeded:
            "Limite de arquivo ultrapassado. O tamanho máximo é de 25mb.",
          cardNavPrevious: "Opção anterior",
          cardNavNext: "Próxima opção",
          cardImagePlaceholder: "Imagem",
          recognitionTextPlaceholder: "Fale a sua mensagem",
          speak: "Digite a sua mensagem",
          shareVisual: "Selecionar imagem",
          shareLocation: "Compartilhar localização",
          openMap: "Visualizar no mapa",
          userMessage: "Eu disse",
          utteranceGeneric: "Mensagem da Loja Conceito",
          retryMessage: "Tente novamente",
          requestLocationDeniedUnavailable:
            "Seu local atual não está disponível. Tente novamente ou digite sua cidade/UF.",
          requestLocationDeniedTimeout:
            "Demorando muito para obter sua localização atual. Tente novamente ou digite sua cidade/UF.",
          requestLocationDeniedPermission:
            "Permissão de localização negada. Permita o acesso para compartilhar sua localização ou digite sua cidade/UF.",
          previousChats: "Conversa anterior",
          noSpeechTimeout:
            "Não foi possível detectar a voz, nenhuma mensagem foi enviada.",
          errorSpeechUnsupportedLocale:
            "O navegador utilizado para detecção de fala não é compatível. Não é possível iniciar a voz.",
          card: "Cartão",
        },
        en: {
          audioResponseOff: "Click to enable audio response",
          audioResponseOn: "Click to disable audio response",
          chatTitle: "Digital Assistant",
          connected: "Available",
          disconnected: "Unavailable",
          inputPlaceholder: "Type your message here",
          send: "Send (Enter)",
          clear: "Clear Chat",
          close: "Close Chat",
          connecting: "Connecting...",
          closing: "Closing...",
          requestLocation: "Send your location",
          upload: "Choose the file to send",
          uploadFailed: "An error has occurred. Contact your administrator.",
          requestLocationString:
            "An error has occurred. Contact your administrator.",
          uploadFileSizeLimitExceeded:
            "File limit exceeded. The maximum size is 25mb.",
        },
      },
    };
    Bots = new WebSDK(chatWidgetSettings);


    // ----------------------------- HERE, THERE! ------------------------------------------
    // document.getElementsByTagName("style")[0].remove();


    // remove header
    document.getElementsByClassName("oda-chat-header")[0].remove();


    // Input element
    document.getElementsByClassName("oda-chat-user-input oda-chat-user-input-inline-send")[0].style.borderRadius = '6px'
    document.getElementsByClassName("oda-chat-user-input oda-chat-user-input-inline-send")[0].style.minHeight = '58px'
    document.getElementsByClassName("oda-chat-user-input oda-chat-user-input-inline-send")[0].style.paddingTop = '20px'
    document.getElementsByClassName("oda-chat-user-input oda-chat-user-input-inline-send")[0].innerHTML = 'Escrever mensagem'

    document.getElementsByClassName("oda-chat-footer-button oda-chat-button-switch-voice")[0].style.position = 'absolute'
    document.getElementsByClassName("oda-chat-footer-button oda-chat-button-switch-voice")[0].style.right = '60px'

    document.getElementsByClassName("oda-chat-footer-button oda-chat-button-send oda-chat-button-send-inline")[0].style.position = 'absolute'
    document.getElementsByClassName("oda-chat-footer-button oda-chat-button-send oda-chat-button-send-inline")[0].style.right = '20px'


    document.getElementsByClassName("oda-chat-footer oda-chat-mode-keyboard")[0].style.borderWidth = '0'





    // ----------------------------- HERE WE GO! ------------------------------------------


    Bots.setSize("100vw", "100vh");

    // Connect to the ODA
    Bots.connect().then(() => {
      Bots.openChat();
    });

    // Create global object to refer Bots
    window[name] = Bots;

    // Customize the launch button
    customizeLaunchButton();
  }, 0);
};

function customizeLaunchButton() {
  const launchButton = document.querySelector(".oda-chat-button");
  if (launchButton) {
    const element = document.createElement("div");
    element.setAttribute("dir", "auto");
    element.setAttribute("class", "oda-chat-letschat");
    const innerText = document.createTextNode("Olá, como posso ajudar?");
    element.appendChild(innerText);
    launchButton.appendChild(element);
  }
}
