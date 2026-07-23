
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-45JKTYHF.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WRVNDACV.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WRVNDACV.js"
    ],
    "route": "/atendimento"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WRVNDACV.js"
    ],
    "route": "/funcionarios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WRVNDACV.js"
    ],
    "route": "/relatorios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WRVNDACV.js"
    ],
    "route": "/servicos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WRVNDACV.js"
    ],
    "route": "/chamados"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WRVNDACV.js"
    ],
    "route": "/agendamento"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5281, hash: '57169c97db358fa20e32f6d783e6daf7477fc0ef3ce1a3cba5d870a6c0b5a261', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '714ca9a9ea6f05c9fed98629fdab439e8962faa1efaf87a759ae4f9758cdb895', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 16938, hash: '2a0e87293f51223685b67e747caa68eb4f84a083ab503d39d35689030cf400d1', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'atendimento/index.html': {size: 15873, hash: '32ec87d46d78ba31a4f1bc256c48b3debc2348b31fd05b9e1e27f2dc861347ac', text: () => import('./assets-chunks/atendimento_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 10000, hash: '457cce2f50b331a750d0aeac56fc1b22d9bd2831b60bf3b13501fd8b60059e4c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'funcionarios/index.html': {size: 17466, hash: '22a2edfefaee6ee4321d06cf32acfb8ae31529847b4095b9cca8aee8407327fd', text: () => import('./assets-chunks/funcionarios_index_html.mjs').then(m => m.default)},
    'chamados/index.html': {size: 13735, hash: '07006a1767bdde487443625f71bec43f78943786b7222ffb60b3232727627e1b', text: () => import('./assets-chunks/chamados_index_html.mjs').then(m => m.default)},
    'relatorios/index.html': {size: 15454, hash: '700db74db088ac477fa6d425f01962646c3c13de308ac9079cdecb7b10b91dd3', text: () => import('./assets-chunks/relatorios_index_html.mjs').then(m => m.default)},
    'agendamento/index.html': {size: 16441, hash: '403f90eccd80adbfab752e95357ef0eb1b4f7e2be961bcf4570af2e6159d6641', text: () => import('./assets-chunks/agendamento_index_html.mjs').then(m => m.default)},
    'servicos/index.html': {size: 17318, hash: '212de9232311cd622673f71d78dbff57a2127e05ff9520d0356b33d6f9c8bf7c', text: () => import('./assets-chunks/servicos_index_html.mjs').then(m => m.default)},
    'styles-GLHRPDMA.css': {size: 231311, hash: 'IC4f3lPtydA', text: () => import('./assets-chunks/styles-GLHRPDMA_css.mjs').then(m => m.default)}
  },
};
