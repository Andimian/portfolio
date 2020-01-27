import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/paralax";
import "./scripts/slider-reviews";
import "./scripts/test-vue";
import "./scripts/popup";
