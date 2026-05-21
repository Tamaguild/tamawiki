import { CHANGE_LOG } from "./data.js";

const div = document.getElementById("changeLogList");

let html = "";

for (let i = 0; i < CHANGE_LOG.length; i++) {
    html += "- [" + CHANGE_LOG[i].date + "] " + CHANGE_LOG[i].text + "<br>";
}

div.innerHTML = html;