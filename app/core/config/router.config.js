function routerConfig($componentLoaderProvider) {
  // views: snake-cased-name.html (components/name/*)
  $componentLoaderProvider.setTemplateMapping(function (name) {
    var snakeCased = name.match(/[A-Z]*[^A-Z]+/g).join('-');
    return `components/${name}/${snakeCased}.html`;
  });
  // controllers: CapitalizedNameCtrl (components/name/*)
  $componentLoaderProvider.setCtrlNameMapping(function (name) {
    var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return `${capitalized}Ctrl`;
  });
}

export default appModule => {
  appModule.config(routerConfig);
};
