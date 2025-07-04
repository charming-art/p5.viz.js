export function registerAPI(name, Cls) {
  const addon = function (p5) {
    p5[name] = Cls;
  };
  if (typeof p5 !== "undefined") p5.registerAddon(addon);
  return addon;
}

export function composeAddons(...addons) {
  return function (_, fn) {
    for (const addon of addons) addon(_, fn);
  };
}
