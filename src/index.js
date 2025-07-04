import {composeAddons} from "./register.js";
import {barY} from "./bar.js";
import {viz as vis} from "./viz.js";

export const viz = composeAddons(vis, barY);
