import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./components/App.vue";

//icon library
import { library } from "@fortawesome/fontawesome-svg-core";

//font awsome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//icons
import {
    faArrowLeft,
    faSearch,
    faChartLine,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
//add icons to library
library.add(faArrowLeft, faCommentDots, faChartLine, faSearch, faChevronDown);

const app = createApp(App);

//component registration
app.component("font-awsome-icon", FontAwesomeIcon);

app.mount("#app");
