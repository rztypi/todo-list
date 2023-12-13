(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>m});var o=n(81),i=n.n(o),r=n(645),a=n.n(r),d=n(667),c=n.n(d),s=new URL(n(950),n.b),l=a()(i());l.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0);"]);var u=c()(s);l.push([t.id,`/* Material icons */\n\n/* Fonts */\n@font-face {\n  font-family: "Poppins";\n  src: url(${u});\n}\n\n/* CSS reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* Custom styles */\n:root {\n  --normal-text-color: #222;\n  --muted-text-color: #444;\n  --active-text-color: #000;\n  --base-color: #fff;\n  --light-fade-color: rgb(0 0 0 / 0.05);\n  --fade-color: rgb(0 0 0 / 0.1);\n  --heavy-fade-color: rgb(0 0 0 / 0.5);\n  color-scheme: normal;\n}\n\n:root[data-theme="light"] {\n  --normal-text-color: #222;\n  --muted-text-color: #444;\n  --active-text-color: #000;\n  --base-color: #fff;\n  --light-fade-color: rgb(0 0 0 / 0.05);\n  --fade-color: rgb(0 0 0 / 0.1);\n  --heavy-fade-color: rgb(0 0 0 / 0.5);\n  color-scheme: light;\n}\n\n:root[data-theme="dark"] {\n  --normal-text-color: #ddd;\n  --muted-text-color: #bbb;\n  --active-text-color: #fff;\n  --base-color: #222;\n  --light-fade-color: rgb(255 255 255 / 0.05);\n  --fade-color: rgb(255 255 255 / 0.1);\n  --heavy-fade-color: rgb(255 255 255 / 0.5);\n  color-scheme: dark;\n}\n\n* {\n  transition: all 0.1s;\n}\n\nbody {\n  display: grid;\n  grid-template:\n    "header header" 64px\n    "aside  main" 1fr / 300px 1fr;\n  min-height: 100vh;\n  background-color: var(--base-color);\n  font-family: "Poppins";\n  color: var(--normal-text-color);\n}\n\np,\nspan,\nlabel,\nh2,\nh3 {\n  color: var(--normal-text-color);\n}\n\n.material-symbols-outlined {\n  font-size: 1.5rem;\n}\n\nheader {\n  grid-area: header;\n  padding: 0 16px;\n  background-color: var(--fade-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#hamburger {\n  display: none;\n}\n\nheader > h1 {\n  color: var(--active-text-color);\n}\n\n#themeSwitch {\n  padding: 4px;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n}\n\n#themeSwitch > span {\n  color: var(--muted-text-color);\n}\n\n#themeSwitch:hover > span {\n  color: var(--active-text-color);\n}\n\naside {\n  grid-area: aside;\n  background-color: var(--light-fade-color);\n}\n\naside > h2 {\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\nmain {\n  grid-area: main;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#projects li > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  height: 36px;\n  margin: 12px;\n  padding: 0 8px;\n  cursor: pointer;\n}\n\n#projects li > div > span {\n  overflow: hidden;\n}\n\n#projects li > div > button {\n  display: none;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n}\n\n#projects li > div > button > span {\n  color: var(--muted-text-color);\n}\n\n#projects li > div > button > span:hover {\n  color: var(--active-text-color);\n}\n\n#projects li > div.active,\n#projects li > div:hover,\n#projects li > div:active {\n  background-color: var(--light-fade-color);\n}\n\n#projects li > div.active > button,\n#projects li > div:hover > button,\n#projects li > div:active > button {\n  display: flex;\n  align-items: center;\n}\n\nbutton[data-opens="addProjectDialog"] {\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background-color: transparent;\n  border: none;\n}\n\nbutton[data-opens="addTodoDialog"] {\n  margin: 0 auto;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background-color: transparent;\n  border: none;\n}\n\nbutton[data-opens="addProjectDialog"]:hover,\nbutton[data-opens="addTodoDialog"]:hover {\n  transform: scale(1.05);\n}\n\n#todos li > div {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin: 16px;\n  padding: 12px;\n  min-width: 300px;\n  background-color: var(--fade-color);\n  outline: 1px solid var(--base-color);\n  cursor: pointer;\n}\n\n#todos li > div:hover {\n  outline: 1px solid var(--heavy-fade-color);\n}\n\n#todos li > div > p {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n#todos li > div > button {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n}\n\n#todos li > div > button > span {\n  color: var(--muted-text-color);\n}\n\n#todos li > div > button > span:hover {\n  color: var(--active-text-color);\n}\n\n.done {\n  text-decoration: line-through;\n}\n\ndialog {\n  top: 10vh;\n  max-height: 80vh;\n  margin: 0 auto;\n  background-color: var(--base-color);\n  border: 2px solid var(--heavy-fade-color);\n}\n\ndialog::backdrop {\n  backdrop-filter: blur(4px);\n}\n\ndialog input,\ndialog select {\n  width: 300px;\n  margin-bottom: 16px;\n  border: 1px solid var(--heavy-fade-color);\n  background-color: var(--base-color);\n  color: var(--normal-text-color);\n}\n\ndialog > div:first-of-type {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\ndialog > div:first-of-type > button {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  align-self: flex-start;\n}\n\ndialog > form {\n  display: flex;\n  flex-direction: column;\n}\n\ndialog button[type="submit"] {\n  width: 100%;\n}\n\ndialog label {\n  font-size: 0.9rem;\n}\n\nhr {\n  margin: 24px 0;\n}\n\nbutton[form="addProjectForm"],\nbutton[form="addTodoForm"] {\n  background-color: transparent;\n  border: 2px solid green;\n  color: green;\n}\n\nbutton[form="addProjectForm"]:hover,\nbutton[form="addTodoForm"]:hover {\n  background-color: green;\n  color: white;\n}\n\nbutton[form="editProjectForm"],\nbutton[form="editTodoForm"] {\n  background-color: transparent;\n  border: 2px solid orange;\n  color: orange;\n}\n\nbutton[form="editProjectForm"]:hover,\nbutton[form="editTodoForm"]:hover {\n  background-color: orange;\n  color: white;\n}\n\n#deleteProjectForm > button {\n  background-color: transparent;\n  border: 2px solid red;\n  color: red;\n}\n\n#deleteProjectForm > button:hover {\n  background-color: red;\n  color: white;\n}\n\n.material-symbols-outlined {\n  user-select: none;\n}\n\n#detailsDialog {\n  width: 400px;\n}\n\n#detailsDialog > div[id] {\n  display: flex;\n  flex-direction: column;\n}\n\n#detailsDialog > div[id]:not(:last-child) {\n  margin-bottom: 16px;\n}\n\n#detailsDialog > div[id] > span:first-child {\n  color: var(--muted-text-color);\n  font-size: 0.9rem;\n}\n\n@media only screen and (max-width: 768px) {\n  :root {\n    font-size: 90%;\n  }\n\n  body {\n    grid-template:\n      "header" 64px\n      "main" 1fr / 1fr;\n  }\n\n  #hamburger {\n    align-self: stretch;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    border: none;\n    background-color: transparent;\n  }\n\n  #hamburger > span {\n    font-size: 2.5rem;\n  }\n\n  #hamburger:hover > span {\n    color: var(--active-text-color);\n  }\n\n  aside {\n    display: none;\n    position: absolute;\n    top: 64px;\n    bottom: 0;\n    width: 100%;\n    min-height: max-content;\n    background-color: var(--base-color);\n  }\n\n  aside.showAnim {\n    animation: slide 0.5s ease both;\n  }\n\n  aside.show {\n    display: block;\n  }\n\n  aside.hideAnim {\n    animation: slide 0.5s ease reverse both;\n  }\n\n  @keyframes slide {\n    0% {\n      transform: translateX(-100vw);\n    }\n    100% {\n      transform: translateX(0vw);\n    }\n  }\n}\n`,""]);const m=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},a=[],d=0;d<t.length;d++){var c=t[d],s=o.base?c[0]+o.base:c[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=i(p,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var d=n(r[a]);e[d].references--}for(var c=o(t,i),s=0;s<r.length;s++){var l=n(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},950:(t,e,n)=>{t.exports=n.p+"405055dd680fa1dcdfa2.woff2"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!t;)t=o[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),i=n.n(o),r=n(569),a=n.n(r),d=n(565),c=n.n(d),s=n(216),l=n.n(s),u=n(589),m=n.n(u),p=n(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;class g{static projectList=[{name:"Today",todoList:[]},{name:"This week",todoList:[]}];static getProjectList=()=>(this.projectList=JSON.parse(localStorage.getItem("projectList"))||this.projectList,this.projectList);static saveProjectList=()=>{localStorage.setItem("projectList",JSON.stringify(this.projectList))}}class v{static activeProjectIndex=0;static getActiveProjectIndex=()=>this.activeProjectIndex;static setActiveProjectIndex=t=>{this.activeProjectIndex=t};static addProject=t=>{g.getProjectList().push({name:t,todoList:[]}),g.saveProjectList()};static deleteProject=t=>{g.getProjectList().splice(t,1),g.saveProjectList()};static renameProject=(t,e)=>{g.getProjectList()[t].name=e,g.saveProjectList()};static addTodo=(t,e,n,o)=>{const i={name:t,description:e,dueDate:n,priority:o,done:!1};g.getProjectList()[this.getActiveProjectIndex()].todoList.push(i),g.saveProjectList()};static editTodo=(t,e,n,o,i)=>{const r=g.getProjectList()[this.getActiveProjectIndex()].todoList[t];r.name=e,r.description=n,r.dueDate=o,r.priority=i,g.saveProjectList()};static deleteTodo=t=>{g.getProjectList()[this.getActiveProjectIndex()].todoList.splice(t,1),g.saveProjectList()}}class f{static editProjectId=0;static editTodoId=0;static addProject=()=>{const t=document.getElementById("addProjectName");return!!t&&(v.addProject(t.value),v.setActiveProjectIndex(g.getProjectList().length-1),!0)};static editProject=()=>{const t=document.getElementById("editProjectName");return!!t&&(v.renameProject(this.editProjectId,t.value),!0)};static deleteProject=()=>1!==g.getProjectList().length&&(this.editProjectId===v.getActiveProjectIndex()?v.setActiveProjectIndex(0):this.editProjectId<v.getActiveProjectIndex()&&v.setActiveProjectIndex(v.getActiveProjectIndex()-1),v.deleteProject(this.editProjectId),!0);static addTodo=()=>{const t=document.getElementById("addTodoName"),e=document.getElementById("addDescription"),n=document.getElementById("addDueDate"),o=document.getElementById("addPriority");return!!(t&&e&&n&&o)&&(v.addTodo(t.value,e.value,n.value,o.value),!0)};static editTodo=()=>{const t=document.getElementById("editTodoName"),e=document.getElementById("editDescription"),n=document.getElementById("editDueDate"),o=document.getElementById("editPriority");return!!(t&&e&&n&&o)&&(v.editTodo(this.editTodoId,t.value,e.value,n.value,o.value),!0)}}class b{static projectsDiv=document.getElementById("projects");static todosDiv=document.getElementById("todos");static addProjectDialog=document.getElementById("addProjectDialog");static addProjectOpenBtn=document.querySelector(`button[data-opens="${this.addProjectDialog.id}"]`);static addProjectCloseBtns=document.querySelectorAll(`button[data-closes="${this.addProjectDialog.id}"]`);static addProjectForm=document.getElementById("addProjectForm");static editProjectDialog=document.getElementById("editProjectDialog");static editProjectCloseBtns=document.querySelectorAll(`button[data-closes="${this.editProjectDialog.id}"]`);static editProjectForm=document.getElementById("editProjectForm");static deleteProjectForm=document.getElementById("deleteProjectForm");static addTodoDialog=document.getElementById("addTodoDialog");static addTodoOpenBtn=document.querySelector(`button[data-opens="${this.addTodoDialog.id}"]`);static addTodoCloseBtns=document.querySelectorAll(`button[data-closes="${this.addTodoDialog.id}"]`);static addTodoForm=document.getElementById("addTodoForm");static editTodoDialog=document.getElementById("editTodoDialog");static editTodoCloseBtns=document.querySelectorAll(`button[data-closes="${this.editTodoDialog.id}"]`);static editTodoForm=document.getElementById("editTodoForm");static detailsDialog=document.getElementById("detailsDialog");static detailsCloseBtn=document.querySelector(`button[data-closes="${this.detailsDialog.id}"]`);static createButtonIcon=(t="circle")=>{const e=document.createElement("button"),n=document.createElement("span");return e.setAttribute("type","button"),n.classList.add("material-symbols-outlined"),n.textContent=t,e.appendChild(n),e};static renderProjectList=()=>{this.projectsDiv.replaceChildren();const t=document.createElement("ul"),e=g.getProjectList();for(let[n,o]of e.entries()){const e=document.createElement("li"),i=document.createElement("div"),r=document.createElement("span"),a=this.createButtonIcon("edit");n===v.getActiveProjectIndex()&&i.classList.add("active"),i.addEventListener("click",(()=>{this.switchProject(n)})),r.textContent=o.name,a.title="Edit project",a.addEventListener("click",(t=>{t.stopPropagation(),this.openEditProjectDialog(n,o)})),t.appendChild(e),e.appendChild(i),i.appendChild(r),i.appendChild(a)}this.projectsDiv.appendChild(t)};static renderTodoList=()=>{this.todosDiv.replaceChildren();const t=document.createElement("ul"),e={low:"green",medium:"orange",high:"red"},n=g.getProjectList()[v.getActiveProjectIndex()];for(let[o,i]of n.todoList.entries()){const n=document.createElement("li"),r=document.createElement("div"),a=document.createElement("input"),d=document.createElement("label"),c=document.createElement("p"),s=this.createButtonIcon("edit"),l=this.createButtonIcon("delete");r.style.borderLeft=`6px solid ${e[i.priority]}`,r.addEventListener("click",(()=>{this.openDetailsDialog(i)})),a.id=`todo${o}`,a.setAttribute("type","checkbox"),i.done&&(a.setAttribute("checked",!0),d.classList.add("done")),a.addEventListener("click",(t=>{t.stopPropagation(),t.currentTarget.checked?(d.classList.add("done"),i.done=!0):(d.classList.remove("done"),i.done=!1),g.saveProjectList()})),d.textContent=i.name,d.setAttribute("for",`todo${o}`),c.textContent=i.dueDate,d.addEventListener("click",(t=>{t.stopPropagation()})),s.title="Edit to-do",s.addEventListener("click",(t=>{t.stopPropagation(),this.openEditTodoDialog(o,i)})),l.title="Delete to-do",l.addEventListener("click",(t=>{t.stopPropagation(),this.deleteTodo(o)})),t.appendChild(n),n.appendChild(r),r.appendChild(a),r.appendChild(d),r.appendChild(c),r.appendChild(s),r.appendChild(l)}this.todosDiv.appendChild(t)};static switchProject=t=>{t!==v.getActiveProjectIndex()&&(v.setActiveProjectIndex(t),this.renderProjectList(),this.renderTodoList())};static openEditProjectDialog=(t,e)=>{f.editProjectId=t,this.editProjectDialog.showModal(),document.getElementById("editProjectName").value=e.name};static openEditTodoDialog=(t,e)=>{f.editTodoId=t,this.editTodoDialog.showModal();const n=document.getElementById("editTodoName"),o=document.getElementById("editDescription"),i=document.getElementById("editDueDate"),r=document.getElementById("editPriority");n.value=e.name,o.value=e.description,i.value=e.dueDate,r.value=e.priority};static openDetailsDialog=t=>{this.detailsDialog.showModal();const e=document.querySelector("#detailsTodoName"),n=document.querySelector("#detailsDescription > span:last-child"),o=document.querySelector("#detailsDueDate > span:last-child"),i=document.querySelector("#detailsPriority > span:last-child");e.textContent=t.name,n.textContent=t.description||"...",o.textContent=t.dueDate||"...",i.textContent=t.priority.charAt(0).toUpperCase()+t.priority.slice(1)};static deleteTodo=t=>{v.deleteTodo(t),this.renderTodoList()};static initForms=()=>{const t=(t,e,n)=>{t.preventDefault(),e()&&(n.close(),this.renderProjectList(),this.renderTodoList(),t.currentTarget.reset())};this.addProjectForm.addEventListener("submit",(e=>{t(e,f.addProject,this.addProjectDialog)})),this.editProjectForm.addEventListener("submit",(e=>{t(e,f.editProject,this.editProjectDialog)})),this.deleteProjectForm.addEventListener("submit",(e=>{t(e,f.deleteProject,this.editProjectDialog)})),this.addTodoForm.addEventListener("submit",(e=>{t(e,f.addTodo,this.addTodoDialog)})),this.editTodoForm.addEventListener("submit",(e=>{t(e,f.editTodo,this.editTodoDialog)}))};static initDialogBtns=()=>{this.addProjectOpenBtn.addEventListener("click",(()=>this.addProjectDialog.showModal())),this.addProjectCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.addProjectDialog.close())))),this.editProjectCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.editProjectDialog.close())))),this.addTodoOpenBtn.addEventListener("click",(()=>this.addTodoDialog.showModal())),this.addTodoCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.addTodoDialog.close())))),this.editTodoCloseBtns.forEach((t=>t.addEventListener("click",(()=>this.editTodoDialog.close())))),this.detailsCloseBtn.addEventListener("click",(()=>this.detailsDialog.close()))};static initThemeSwitcher=()=>{const t=()=>localStorage.getItem("theme")||"light",e=t=>{document.documentElement.setAttribute("data-theme",t)},n=document.getElementById("themeSwitch"),o=t=>{if(!n)return;n.querySelector("span").textContent="light"===t?"light_mode":"dark_mode"};e(t()),o(t()),n.addEventListener("click",(()=>{const n="light"===t()?"dark":"light";e(n),o(n),(t=>{localStorage.setItem("theme",t)})(n)}))};static initHamburger=()=>{const t=document.querySelector("#hamburger"),e=document.querySelector("aside");t.addEventListener("click",(()=>{e.classList.contains("showAnim")||e.classList.contains("hideAnim")||(e.classList.contains("show")?(e.classList.add("hideAnim"),setTimeout((()=>{e.classList.remove("hideAnim"),e.classList.remove("show")}),500)):(e.classList.add("show"),e.classList.add("showAnim"),setTimeout((()=>{e.classList.remove("showAnim")}),500)))}))};static initPage=()=>{this.initForms(),this.initDialogBtns(),this.initThemeSwitcher(),this.initHamburger(),this.renderProjectList(),this.renderTodoList()}}b.initPage()})()})();