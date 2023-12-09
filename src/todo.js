class Storage {
  static projectList = [
    { name: "Today", todoList: [] },
    { name: "This week", todoList: [] },
  ];

  static getProjectList() {
    this.projectList = JSON.parse(localStorage.getItem("projectList")) || this.projectList;
    return this.projectList;
  }

  static saveProjectList() {
    localStorage.setItem("projectList", JSON.stringify(this.projectList));
  }
}

class TodoApp {
  static activeProjectIndex = 0;

  static getActiveProjectIndex() {
    return this.activeProjectIndex;
  }

  static setActiveProjectIndex(index) {
    this.activeProjectIndex = index;
  }

  static addProject(name) {
    const projectList = Storage.getProjectList();
    projectList.push({ name, todoList: [] });
    Storage.saveProjectList();
  }

  static deleteProject(index) {
    const projectList = Storage.getProjectList();
    projectList.splice(index, 1);
    Storage.saveProjectList();
  }

  static renameProject(index, name) {
    const project = Storage.getProjectList()[index];
    project.name = name;
    Storage.saveProjectList();
  }

  static addTodo(name, description, dueDate, priority) {
    const project = Storage.getProjectList()[this.activeProjectIndex];
    const todo = { name, description, dueDate, priority, done: false };
    project.todoList.push(todo);
    Storage.saveProjectList();
  }

  static deleteTodo(index) {
    const project = Storage.getProjectList()[this.activeProjectIndex];
    project.todoList.splice(index, 1);
    Storage.saveProjectList();
  }
}

class FormHandler {
  static editProjectId = 0;

  static addProject = () => {
    const name = document.getElementById("addProjectName");
    if (!name) {
      return false;
    }
    TodoApp.addProject(name.value);
    return true;
  }

  static editProject = () => {
    const name = document.getElementById("editProjectName");
    if (!name) {
      return false;
    }
    TodoApp.renameProject(this.editProjectId, name.value);
    return true;
  }

  static deleteProject = () => {
    if (Storage.getProjectList().length === 1) {
      return false;
    }
    if (this.editProjectId === TodoApp.getActiveProjectIndex()) {
      TodoApp.setActiveProjectIndex(0);
    }
    TodoApp.deleteProject(this.editProjectId);
    return true;
  }

  static addTodo = () => {
      const name = document.getElementById("addTodoName");
      const description = document.getElementById("addDescription");
      const dueDate = document.getElementById("addDueDate");
      const priority = document.getElementById("addPriority");
      if (!name || !description || !dueDate || !priority) {
        return false;
      }
      TodoApp.addTodo(name.value, description.value, dueDate.value, priority.value);
      return true;
  }
}

class DomController {
  static projectsDiv = document.getElementById("projects");
  static todosDiv = document.getElementById("todos");

  static addProjectDialog = document.getElementById("addProjectDialog");
  static addProjectOpenBtn = document.querySelector(`button[data-opens="${this.addProjectDialog.id}"]`);
  static addProjectCloseBtns = document.querySelectorAll(`button[data-closes="${this.addProjectDialog.id}"]`);
  static addProjectForm = document.getElementById("addProjectForm");

  static editProjectDialog = document.getElementById("editProjectDialog");
  static editProjectCloseBtns = document.querySelectorAll(`button[data-closes="${this.editProjectDialog.id}"]`);
  static editProjectForm = document.getElementById("editProjectForm");
  static deleteProjectForm = document.getElementById("deleteProjectForm");

  static addTodoDialog = document.getElementById("addTodoDialog");
  static addTodoOpenBtn = document.querySelector(`button[data-opens="${this.addTodoDialog.id}"]`);
  static addTodoCloseBtns = document.querySelectorAll(`button[data-closes="${this.addTodoDialog.id}"]`);
  static addTodoForm = document.getElementById("addTodoForm");

  static createButtonIcon(iconName = "circle") {
    const btn = document.createElement("button");
    const span = document.createElement("span");
    
    btn.setAttribute("type", "button");
    span.classList.add("material-symbols-outlined");
    span.textContent = iconName;
    
    btn.appendChild(span);
    return btn;
  }

  static renderProjectList = () => {
    this.projectsDiv.replaceChildren();
    
    const ul = document.createElement("ul");

    const projectList = Storage.getProjectList();
    for (let [i, project] of projectList.entries()) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const projectNameSpan = document.createElement("span");
      const editBtn = this.createButtonIcon("edit");

      div.addEventListener("click", () => {
        this.switchProject(i);
      });
      projectNameSpan.textContent = project.name;
      editBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.openEditProjectDialog(i, project);
      })

      ul.appendChild(li);
      li.appendChild(div);
      div.appendChild(projectNameSpan);
      div.appendChild(editBtn);
    }
    this.projectsDiv.appendChild(ul);
  }

  static renderTodoList = () => {
    this.todosDiv.replaceChildren();
    
    const ul = document.createElement("ul");
    
    const project = Storage.getProjectList()[TodoApp.getActiveProjectIndex()];
    for (let [i, todo] of project.todoList.entries()) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const checkbox = document.createElement("input");
      const todoName = document.createElement("label");
      const todoDueDate = document.createElement("p");
      const editBtn = this.createButtonIcon("edit");
      const deleteBtn = this.createButtonIcon("delete");

      checkbox.id = `todo${i}`;
      checkbox.setAttribute("type", "checkbox");
      if (todo.done) {
        checkbox.setAttribute("checked", true);
        todoName. classList.add("done");
      }
      checkbox.addEventListener("click", (event) => {
        if (event.currentTarget.checked) {
          todoName.classList.add("done")
          todo.done = true;
        }
        else {
          todoName.classList.remove("done");
          todo.done = false;
        }
        Storage.saveProjectList();
      })
      todoName.textContent = todo.name;
      todoName.setAttribute("for", `todo${i}`);
      todoDueDate.textContent = todo.dueDate;
      editBtn.addEventListener("click", () => {
        this.openEditTodoDialog(i);
      })
      deleteBtn.addEventListener("click", () => {
        this.deleteTodo(i);
      })

      ul.appendChild(li);
      li.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(todoName);
      div.appendChild(todoDueDate);
      div.appendChild(editBtn);
      div.appendChild(deleteBtn);
    }
    this.todosDiv.appendChild(ul);
  }

  static switchProject(index) {
    if (index === TodoApp.getActiveProjectIndex()) {
      return;
    }
    TodoApp.setActiveProjectIndex(index);
    this.renderTodoList();
  }
  
  static openEditProjectDialog(index, project) {
    FormHandler.editProjectId = index;
    
    document.getElementById("editProjectDialog").showModal();

    const name = document.getElementById("editProjectName");
    name.value = project.name;
  }

  static openEditTodoDialog(index) {
    console.log(`Edit id: ${index}`);
  }

  static deleteTodo(index) {
    TodoApp.deleteTodo(index);
    this.renderTodoList();
  }

  static initForms() {
    const baseFormHandler = (event, formHandler, dialog) => {
      event.preventDefault();
      const success = formHandler();
      if (success) {
        dialog.close();
        this.renderProjectList();
        this.renderTodoList();
      }
    }

    this.addProjectForm.addEventListener("submit", (event) => {
      baseFormHandler(event, FormHandler.addProject, this.addProjectDialog);
    });
    this.editProjectForm.addEventListener("submit", (event) => {
      baseFormHandler(event, FormHandler.editProject, this.editProjectDialog);
    });
    this.deleteProjectForm.addEventListener("submit", (event) => {
      baseFormHandler(event, FormHandler.deleteProject, this.editProjectDialog);
    });
    this.addTodoForm.addEventListener("submit", (event) => {
      baseFormHandler(event, FormHandler.addTodo, this.addTodoDialog);
    });
  }

  static initDialogBtns() {
    this.addProjectOpenBtn.addEventListener("click", () => this.addProjectDialog.showModal());
    this.addProjectCloseBtns.forEach(btn => btn.addEventListener("click", () => this.addProjectDialog.close()));

    this.editProjectCloseBtns.forEach(btn => btn.addEventListener("click", () => this.editProjectDialog.close()));

    this.addTodoOpenBtn.addEventListener("click", () => this.addTodoDialog.showModal());
    this.addTodoCloseBtns.forEach(btn => btn.addEventListener("click", () => this.addTodoDialog.close()));
  }

  static initPage() {
    this.initForms();
    this.initDialogBtns();

    this.renderProjectList();
    this.renderTodoList();
  }
}

export {
  Storage,
  TodoApp,
  DomController,
};