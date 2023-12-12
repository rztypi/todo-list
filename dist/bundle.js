(()=>{"use strict";var t={426:(t,e,o)=>{o.d(e,{Z:()=>p});var n=o(81),r=o.n(n),i=o(645),d=o.n(i),a=o(667),c=o.n(a),s=new URL(o(950),o.b),l=d()(r());l.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0);"]);var u=c()(s);l.push([t.id,`/* Material icons */\n\n/* Fonts */\n@font-face {\n  font-family: "Poppins";\n  src: url(${u});\n}\n\n/* CSS reset */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n/* Custom styles */\n:root {\n  --normal-text-color: #222;\n  --muted-text-color: #444;\n  --active-text-color: #000;\n  --base-color: #fff;\n  --light-fade-color: rgb(0 0 0 / 0.05);\n  --fade-color: rgb(0 0 0 / 0.1);\n  --heavy-fade-color: rgb(0 0 0 / 0.5);\n  color-scheme: normal;\n}\n\n:root[data-theme="light"] {\n  --normal-text-color: #222;\n  --muted-text-color: #444;\n  --active-text-color: #000;\n  --base-color: #fff;\n  --light-fade-color: rgb(0 0 0 / 0.05);\n  --fade-color: rgb(0 0 0 / 0.1);\n  --heavy-fade-color: rgb(0 0 0 / 0.5);\n  color-scheme: light;\n}\n\n:root[data-theme="dark"] {\n  --normal-text-color: #ddd;\n  --muted-text-color: #bbb;\n  --active-text-color: #fff;\n  --base-color: #222;\n  --light-fade-color: rgb(255 255 255 / 0.05);\n  --fade-color: rgb(255 255 255 / 0.1);\n  --heavy-fade-color: rgb(255 255 255 / 0.5);\n  color-scheme: dark;\n}\n\n* {\n  transition: all 0.1s;\n}\n\nbody {\n  display: grid;\n  grid-template:\n    "header header" 64px\n    "aside  main"   1fr / 300px 1fr;\n  min-height: 100vh;\n  background-color: var(--base-color);\n  font-family: "Poppins";\n  color: var(--normal-text-color);\n}\n\np, span, label, h2, h3 {\n  color: var(--normal-text-color);\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--fade-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nheader > h1 {\n  margin-left: 16px;\n  color: var(--active-text-color);\n}\n\n#themeSwitch {\n  margin-right: 16px;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n}\n\n#themeSwitch > span {\n  color: var(--muted-text-color);\n}\n\n#themeSwitch > span:hover {\n  color: var(--active-text-color);\n}\n\naside {\n  grid-area: aside;\n  background-color: var(--light-fade-color);\n}\n\naside > h2 {\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\nmain {\n  grid-area: main;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#projects li > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  height: 36px;\n  margin: 12px;\n  padding: 0 8px;\n  cursor: pointer;\n}\n\n#projects li > div.active {\n  background-color: var(--light-fade-color);\n}\n\n#projects li > div > span {\n  overflow: hidden;\n}\n\n#projects li > div > button {\n  display: none;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n}\n\n#projects li > div > button > span {\n  color: var(--muted-text-color);\n}\n\n#projects li > div > button > span:hover {\n  color: var(--active-text-color);\n}\n\n#projects li > div:hover {\n  background-color: var(--light-fade-color);\n}\n\n#projects li > div:hover > button {\n  display: flex;\n  align-items: center;\n}\n\nbutton[data-opens="addProjectDialog"] {\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background-color: transparent;\n  border: none;\n}\n\nbutton[data-opens="addTodoDialog"] {\n  margin: 0 auto;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background-color: transparent;\n  border: none;\n}\n\nbutton[data-opens="addProjectDialog"]:hover,\nbutton[data-opens="addTodoDialog"]:hover {\n  transform: scale(1.05);\n}\n\n#todos li > div {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin: 16px;\n  padding: 12px;\n  background-color: var(--fade-color);\n  outline: 1px solid var(--base-color);\n  cursor: pointer;\n}\n\n#todos li > div:hover {\n  outline: 1px solid var(--heavy-fade-color);\n}\n\n#todos li > div > p {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n#todos li > div > button {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n}\n\n#todos li > div > button > span {\n  color: var(--muted-text-color);\n}\n\n#todos li > div > button > span:hover {\n  color: var(--active-text-color);\n}\n\n.done {\n  text-decoration: line-through;\n}\n\ndialog {\n  top: 10vh;\n  max-height: 80vh;\n  margin: 0 auto;\n  background-color: var(--base-color);\n  border: 2px solid var(--heavy-fade-color);\n}\n\ndialog::backdrop {\n  backdrop-filter: blur(4px);\n}\n\ndialog input,\ndialog select {\n  width: 300px;\n  margin-bottom: 16px;\n  border: 1px solid var(--heavy-fade-color);\n  background-color: var(--base-color);\n  color: var(--normal-text-color);\n}\n\ndialog > div:first-of-type {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\ndialog > div:first-of-type > button {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  align-self: flex-start;\n}\n\ndialog > form {\n  display: flex;\n  flex-direction: column;\n}\n\ndialog button[type="submit"] {\n  width: 100%;\n}\n\ndialog label {\n  font-size: 0.9rem;\n}\n\nhr {\n  margin: 24px 0;\n}\n\nbutton[form="addProjectForm"],\nbutton[form="addTodoForm"] {\n  background-color: transparent;\n  border: 2px solid green;\n  color: green;\n}\n\nbutton[form="addProjectForm"]:hover,\nbutton[form="addTodoForm"]:hover {\n  background-color: green;\n  color: white;\n}\n\n\nbutton[form="editProjectForm"],\nbutton[form="editTodoForm"] {\n  background-color: transparent;\n  border: 2px solid orange;\n  color: orange;\n}\n\nbutton[form="editProjectForm"]:hover,\nbutton[form="editTodoForm"]:hover {\n  background-color: orange;\n  color: white;\n}\n\n#deleteProjectForm > button {\n  background-color: transparent;\n  border: 2px solid red;\n  color: red;\n}\n\n#deleteProjectForm > button:hover {\n  background-color: red;\n  color: white;\n}\n\n.material-symbols-outlined {\n  user-select: none;\n}\n\n#detailsDialog {\n  width: 400px;\n}\n\n#detailsDialog > div[id] {\n  display: flex;\n  flex-direction: column;\n}\n\n#detailsDialog > div[id]:not(:last-child) {\n  margin-bottom: 16px;\n}\n\n#detailsDialog > div[id] > span:first-child {\n  color: var(--muted-text-color);\n  font-size: 0.9rem;\n}`,""]);const p=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var d={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);n&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,n=0;n<e.length;n++)if(e[n].identifier===t){o=n;break}return o}function n(t,n){for(var i={},d=[],a=0;a<t.length;a++){var c=t[a],s=n.base?c[0]+n.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=o(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var g=r(m,n);n.byIndex=a,e.splice(a,0,{identifier:u,updater:g,references:1})}d.push(u)}return d}function r(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,r){var i=n(t=t||[],r=r||{});return function(t){t=t||[];for(var d=0;d<i.length;d++){var a=o(i[d]);e[a].references--}for(var c=n(t,r),s=0;s<i.length;s++){var l=o(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{var e={};t.exports=function(t,o){var n=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},950:(t,e,o)=>{t.exports=o.p+"405055dd680fa1dcdfa2.woff2"}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),o.b=document.baseURI||self.location.href,o.nc=void 0,(()=>{var t=o(379),e=o.n(t),n=o(795),r=o.n(n),i=o(569),d=o.n(i),a=o(565),c=o.n(a),s=o(216),l=o.n(s),u=o(589),p=o.n(u),m=o(426),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;class h{static projectList=[{name:"Today",todoList:[]},{name:"This week",todoList:[]}];static getProjectList=()=>(this.projectList=JSON.parse(localStorage.getItem("projectList"))||this.projectList,this.projectList);static saveProjectList=()=>{localStorage.setItem("projectList",JSON.stringify(this.projectList))}}class v{static activeProjectIndex=0;static getActiveProjectIndex=()=>this.activeProjectIndex;static setActiveProjectIndex=t=>{this.activeProjectIndex=t};static addProject=t=>{h.getProjectList().push({name:t,todoList:[]}),h.saveProjectList()};static deleteProject=t=>{h.getProjectList().splice(t,1),h.saveProjectList()};static renameProject=(t,e)=>{h.getProjectList()[t].name=e,h.saveProjectList()};static addTodo=(t,e,o,n)=>{const r={name:t,description:e,dueDate:o,priority:n,done:!1};h.getProjectList()[this.getActiveProjectIndex()].todoList.push(r),h.saveProjectList()};static editTodo=(t,e,o,n,r)=>{const i=h.getProjectList()[this.getActiveProjectIndex()].todoList[t];i.name=e,i.description=o,i.dueDate=n,i.priority=r,h.saveProjectList()};static deleteTodo=t=>{h.getProjectList()[this.getActiveProjectIndex()].todoList.splice(t,1),h.saveProjectList()}}class f{static editProjectId=0;static editTodoId=0;static addProject=()=>{const t=document.getElementById("addProjectName");return!!t&&(v.addProject(t.value),v.setActiveProjectIndex(h.getProjectList().length-1),!0)};static editProject=()=>{const t=document.getElementById("editProjectName");return!!t&&(v.renameProject(this.editProjectId,t.value),!0)};static deleteProject=()=>1!==h.getProjectList().length&&(this.editProjectId===v.getActiveProjectIndex()?v.setActiveProjectIndex(0):this.editProjectId<v.getActiveProjectIndex()&&v.setActiveProjectIndex(v.getActiveProjectIndex()-1),v.deleteProject(this.editProjectId),!0);static addTodo=()=>{const t=document.getElementById("addTodoName"),e=document.getElementById("addDescription"),o=document.getElementById("addDueDate"),n=document.getElementById("addPriority");return!!(t&&e&&o&&n)&&(v.addTodo(t.value,e.value,o.value,n.value),!0)};static editTodo=()=>{const t=document.getElementById("editTodoName"),e=document.getElementById("editDescription"),o=document.getElementById("editDueDate"),n=document.getElementById("editPriority");return!!(t&&e&&o&&n)&&(v.editTodo(this.editTodoId,t.value,e.value,o.value,n.value),!0)}}class b{static projectsDiv=document.getElementById("projects");static todosDiv=document.getElementById("todos");static addProjectDialog=document.getElementById("addProjectDialog");static addProjectOpenBtn=document.querySelector(`button[data-opens="${this.addProjectDialog.id}"]`);static addProjectCloseBtns=document.querySelectorAll(`button[data-closes="${this.addProjectDialog.id}"]`);static addProjectForm=document.getElementById("addProjectForm");static editProjectDialog=document.getElementById("editProjectDialog");static editProjectCloseBtns=document.querySelectorAll(`button[data-closes="${this.editProjectDialog.id}"]`);static editProjectForm=document.getElementById("editProjectForm");static deleteProjectForm=document.getElementById("deleteProjectForm");static addTodoDialog=document.getElementById("addTodoDialog");static addTodoOpenBtn=document.querySelector(`button[data-opens="${this.addTodoDialog.id}"]`);static addTodoCloseBtns=document.querySelectorAll(`button[data-closes="${this.addTodoDialog.id}"]`);static addTodoForm=document.getElementById("addTodoForm");static editTodoDialog=document.getElementById("editTodoDialog");static editTodoCloseBtns=document.querySelectorAll(`button[data-closes="${this.editTodoDialog.id}"]`);static editTodoForm=document.getElementById("editTodoForm");static detailsDialog=document.getElementById("detailsDialog");static detailsCloseBtn=document.querySelector(`button[data-closes="${this.detailsDialog.id}"]`);static createButtonIcon=(t="circle")=>{const e=document.createElement("button"),o=document.createElement("span");return e.setAttribute("type","button"),o.classList.add("material-symbols-outlined"),o.textContent=t,e.appendChild(o),e};static renderProjectList=()=>{this.projectsDiv.replaceChildren();const t=document.createElement("ul"),e=h.getProjectList();for(let[o,n]of e.entries()){const e=document.createElement("li"),r=document.createElement("div"),i=document.createElement("span"),d=this.createButtonIcon("edit");o===v.getActiveProjectIndex()&&r.classList.add("active"),r.addEventListener("click",(()=>{this.switchProject(o)})),i.textContent=n.name,d.title="Edit project",d.addEventListener("click",(t=>{t.stopPropagation(),this.openEditProjectDialog(o,n)})),t.appendChild(e),e.appendChild(r),r.appendChild(i),r.appendChild(d)}this.projectsDiv.appendChild(t)};static renderTodoList=()=>{this.todosDiv.replaceChildren();const t=document.createElement("ul"),e={low:"green",medium:"orange",high:"red"},o=h.getProjectList()[v.getActiveProjectIndex()];for(let[n,r]of o.todoList.entries()){const o=document.createElement("li"),i=document.createElement("div"),d=document.createElement("input"),a=document.createElement("label"),c=document.createElement("p"),s=this.createButtonIcon("edit"),l=this.createButtonIcon("delete");i.style.borderLeft=`6px solid ${e[r.priority]}`,i.addEventListener("click",(()=>{this.openDetailsDialog(r)})),d.id=`todo${n}`,d.setAttribute("type","checkbox"),r.done&&(d.setAttribute("checked",!0),a.classList.add("done")),d.addEventListener("click",(t=>{t.stopPropagation(),t.currentTarget.checked?(a.classList.add("done"),r.done=!0):(a.classList.remove("done"),r.done=!1),h.saveProjectList()})),a.textContent=r.name,a.setAttribute("for",`todo${n}`),c.textContent=r.dueDate,a.addEventListener("click",(t=>{t.stopPropagation()})),s.title="Edit to-do",s.addEventListener("click",(t=>{t.stopPropagation(),this.openEditTodoDialog(n,r)})),l.title="Delete to-do",l.addEventListener("click",(t=>{t.stopPropagation(),this.deleteTodo(n)})),t.appendChild(o),o.appendChild(i),i.appendChild(d),i.appendChild(a),i.appendChild(c),i.appendChild(s),i.appendChild(l)}this.todosDiv.appendChild(t)};static switchProject=t=>{t!==v.getActiveProjectIndex()&&(v.setActiveProjectIndex(t),this.renderProjectList(),this.renderTodoList())};static openEditProjectDialog=(t,e)=>{f.editProjectId=t,this.editProjectDialog.showModal(),document.getElementById("editProjectName").value=e.name};static openEditTodoDialog=(t,e)=>{f.editTodoId=t,this.editTodoDialog.showModal();const o=document.getElementById("editTodoName"),n=document.getElementById("editDescription"),r=document.getElementById("editDueDate"),i=document.getElementById("editPriority");o.value=e.name,n.value=e.description,r.value=e.dueDate,i.value=e.priority};static openDetailsDialog=t=>{this.detailsDialog.showModal();const e=document.querySelector("#detailsTodoName"),o=document.querySelector("#detailsDescription > span:last-child"),n=document.querySelector("#detailsDueDate > span:last-child"),r=document.querySelector("#detailsPriority > span:last-child");e.textContent=t.name,o.textContent=t.description||"...",n.textContent=t.dueDate||"...",r.textContent=t.priority.charAt(0).toUpperCase()+t.priority.slice(1)};static deleteTodo=t=>{v.deleteTodo(t),this.renderTodoList()};static initForms=()=>{const t=(t,e,o)=>{t.preventDefault(),e()&&(o.close(),this.renderProjectList(),this.renderTodoList(),t.currentTarget.reset())};this.addProjectForm.addEventListener("submit",(e=>{t(e,f.addProject,this.addProjectDialog)})),this.editProjectForm.addEventListener("submit",(e=>{t(e,f.editProject,this.editProjectDialog)})),this.deleteProjectForm.addEventListener("submit",(e=>{t(e,f.deleteProject,this.editProjectDialog)})),this.addTodoForm.addEventListener("submit",(e=>{t(e,f.addTodo,this.addTodoDialog)})),this.editTodoForm.addEventListener("submit",(e=>{t(e,f.editTodo,this.editTodoDialog)}))};static initDialogBtns=()=>{this.addProjectOpenBtn.addEventListener("click",(()=>this.addProjectDialog.showModal())),this.addProjectCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.addProjectDialog.close())))),this.editProjectCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.editProjectDialog.close())))),this.addTodoOpenBtn.addEventListener("click",(()=>this.addTodoDialog.showModal())),this.addTodoCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.addTodoDialog.close())))),this.editTodoCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.editTodoDialog.close())))),this.detailsCloseBtn.addEventListener("click",(()=>this.detailsDialog.close()))};static initThemeSwitcher=()=>{const t=()=>localStorage.getItem("theme")||"light",e=t=>{document.documentElement.setAttribute("data-theme",t)},o=document.getElementById("themeSwitch"),n=t=>{if(!o)return;o.querySelector("span").textContent="light"===t?"light_mode":"dark_mode"};e(t()),n(t()),o.addEventListener("click",(()=>{const o="light"===t()?"dark":"light";e(o),n(o),(t=>{localStorage.setItem("theme",t)})(o)}))};static initPage=()=>{this.initForms(),this.initDialogBtns(),this.initThemeSwitcher(),this.renderProjectList(),this.renderTodoList()}}b.initPage()})()})();