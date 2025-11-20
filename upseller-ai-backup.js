//load voiceflow embed script here

(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '691dae042f0466fbd8370e99' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        },
        render: {
          mode: 'embedded',
          target: document.getElementById("upseller-embed")
        },
          assistant: {
              stylesheet: 'https://embed.upseller.cloud/plugin-v5/clients/upseller-ai.css'
          }
      });
    }
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');

//run other scripts here