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

  static editProject = () => {
    const name = document.getElementById("editProjectName");
    if (!name) {
      return false;
    }
    TodoApp.renameProject(this.editProjectId, name.value);
    return true;
  }
}

class DomController {
  static #createButtonIcon(iconName = "circle") {
    const btn = document.createElement("button");
    const span = document.createElement("span");
    
    btn.setAttribute("type", "button");
    span.classList.add("material-symbols-outlined");
    span.textContent = iconName;
    
    btn.appendChild(span);
    return btn;
  }

  static renderProjectList() {
    const projectsDiv = document.getElementById("projects");
    const ul = document.createElement("ul");
    
    projectsDiv.replaceChildren();

    const projectList = Storage.getProjectList();
    for (let [i, project] of projectList.entries()) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const projectNameSpan = document.createElement("span");
      const editBtn = this.#createButtonIcon("edit");

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
    projectsDiv.appendChild(ul);
  }

  static renderTodoList() {
    const todosDiv = document.getElementById("todos");
    const ul = document.createElement("ul");
    
    todosDiv.replaceChildren();
    
    const project = Storage.getProjectList()[TodoApp.getActiveProjectIndex()];
    for (let [i, todo] of project.todoList.entries()) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const checkbox = document.createElement("input");
      const todoName = document.createElement("label");
      const todoDueDate = document.createElement("p");
      const editBtn = this.#createButtonIcon("edit");
      const deleteBtn = this.#createButtonIcon("delete");

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
    todosDiv.appendChild(ul);
  }

  static initButtonDialog(dialogId, closeOnly = false) {
    const dialog = document.getElementById(`${dialogId}`)
    if (!closeOnly) {
      document.querySelector(`button[data-opens='${dialogId}']`).addEventListener("click", () => {
        dialog.showModal();
      });
    }
    document.querySelectorAll(`button[data-closes='${dialogId}']`).forEach((btn) => btn.addEventListener("click", () => {
      dialog.close();
    }));

    return dialog;
  }

  static initAddProject() {
    const addProjectDialog = this.initButtonDialog("addProjectDialog");

    const formId = "addProject";
    document.getElementById(`${formId}`).addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("addProjectName");
      if (!name.value) {
        return
      }

      TodoApp.addProject(name.value);
      addProjectDialog.close();
      this.renderProjectList();
    });
  }

  static initAddTodo() {
    const addTodoDialog = this.initButtonDialog("addTodoDialog");

    const formId = "addTodo";
    document.getElementById(`${formId}`).addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("addTodoName");
      const description = document.getElementById("addDescription");
      const dueDate = document.getElementById("addDueDate");
      const priority = document.getElementById("addPriority");
      if (!name || !description || !dueDate || !priority) {
        return;
      }

      TodoApp.addTodo(name.value, description.value, dueDate.value, priority.value);
      addTodoDialog.close();
      this.renderTodoList();
    });
  }

  static initEditProject() {
    const dialog = this.initButtonDialog("editProjectDialog", true);

    document.getElementById("editProject").addEventListener("submit", (event) => {
      event.preventDefault();
      const success = FormHandler.editProject();
      if (success) {
        dialog.close();
        this.renderProjectList();
      }
    });
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

  static initPage() {
    this.renderProjectList();
    this.renderTodoList();
    this.initAddProject();
    this.initAddTodo();
    this.initEditProject();
  }
}

export {
  Storage,
  TodoApp,
  DomController,
};