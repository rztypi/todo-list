class Storage {
  static projectList = [
    { name: "Today", todoList: [] },
    { name: "This week", todoList: [] },
  ];

  static getProjectList = () => {
    this.projectList =
      JSON.parse(localStorage.getItem("projectList")) || this.projectList;
    return this.projectList;
  };

  static saveProjectList = () => {
    localStorage.setItem("projectList", JSON.stringify(this.projectList));
  };
}

class TodoApp {
  static activeProjectIndex = 0;

  static getActiveProjectIndex = () => {
    return this.activeProjectIndex;
  };

  static setActiveProjectIndex = (index) => {
    this.activeProjectIndex = index;
  };

  static addProject = (name) => {
    const projectList = Storage.getProjectList();
    projectList.push({ name, todoList: [] });
    Storage.saveProjectList();
  };

  static deleteProject = (index) => {
    const projectList = Storage.getProjectList();
    projectList.splice(index, 1);
    Storage.saveProjectList();
  };

  static renameProject = (index, name) => {
    const project = Storage.getProjectList()[index];
    project.name = name;
    Storage.saveProjectList();
  };

  static addTodo = (name, description, dueDate, priority) => {
    const project = Storage.getProjectList()[this.getActiveProjectIndex()];
    const todo = { name, description, dueDate, priority, done: false };
    project.todoList.push(todo);
    Storage.saveProjectList();
  };

  static editTodo = (index, name, description, dueDate, priority) => {
    const todo =
      Storage.getProjectList()[this.getActiveProjectIndex()].todoList[index];
    todo.name = name;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    Storage.saveProjectList();
  };

  static deleteTodo = (index) => {
    const project = Storage.getProjectList()[this.getActiveProjectIndex()];
    project.todoList.splice(index, 1);
    Storage.saveProjectList();
  };
}

class FormHandler {
  static editProjectId = 0;
  static editTodoId = 0;

  static addProject = () => {
    const name = document.getElementById("addProjectName");
    if (!name) {
      return false;
    }
    TodoApp.addProject(name.value);
    TodoApp.setActiveProjectIndex(Storage.getProjectList().length - 1);
    return true;
  };

  static editProject = () => {
    const name = document.getElementById("editProjectName");
    if (!name) {
      return false;
    }
    TodoApp.renameProject(this.editProjectId, name.value);
    return true;
  };

  static deleteProject = () => {
    const projectListLength = Storage.getProjectList().length;
    if (projectListLength === 1) {
      return false;
    }
    if (this.editProjectId === TodoApp.getActiveProjectIndex()) {
      TodoApp.setActiveProjectIndex(0);
    } else if (this.editProjectId < TodoApp.getActiveProjectIndex()) {
      TodoApp.setActiveProjectIndex(TodoApp.getActiveProjectIndex() - 1);
    }
    TodoApp.deleteProject(this.editProjectId);
    return true;
  };

  static addTodo = () => {
    const name = document.getElementById("addTodoName");
    const description = document.getElementById("addDescription");
    const dueDate = document.getElementById("addDueDate");
    const priority = document.getElementById("addPriority");
    if (!name || !description || !dueDate || !priority) {
      return false;
    }
    TodoApp.addTodo(
      name.value,
      description.value,
      dueDate.value,
      priority.value
    );
    return true;
  };

  static editTodo = () => {
    const name = document.getElementById("editTodoName");
    const description = document.getElementById("editDescription");
    const dueDate = document.getElementById("editDueDate");
    const priority = document.getElementById("editPriority");
    if (!name || !description || !dueDate || !priority) {
      return false;
    }
    TodoApp.editTodo(
      this.editTodoId,
      name.value,
      description.value,
      dueDate.value,
      priority.value
    );
    return true;
  };
}

class DomController {
  static projectsDiv = document.getElementById("projects");
  static todosDiv = document.getElementById("todos");

  static addProjectDialog = document.getElementById("addProjectDialog");
  static addProjectOpenBtn = document.querySelector(
    `button[data-opens="${this.addProjectDialog.id}"]`
  );
  static addProjectCloseBtns = document.querySelectorAll(
    `button[data-closes="${this.addProjectDialog.id}"]`
  );
  static addProjectForm = document.getElementById("addProjectForm");

  static editProjectDialog = document.getElementById("editProjectDialog");
  static editProjectCloseBtns = document.querySelectorAll(
    `button[data-closes="${this.editProjectDialog.id}"]`
  );
  static editProjectForm = document.getElementById("editProjectForm");
  static deleteProjectForm = document.getElementById("deleteProjectForm");

  static addTodoDialog = document.getElementById("addTodoDialog");
  static addTodoOpenBtn = document.querySelector(
    `button[data-opens="${this.addTodoDialog.id}"]`
  );
  static addTodoCloseBtns = document.querySelectorAll(
    `button[data-closes="${this.addTodoDialog.id}"]`
  );
  static addTodoForm = document.getElementById("addTodoForm");

  static editTodoDialog = document.getElementById("editTodoDialog");
  static editTodoCloseBtns = document.querySelectorAll(
    `button[data-closes="${this.editTodoDialog.id}"]`
  );
  static editTodoForm = document.getElementById("editTodoForm");

  static detailsDialog = document.getElementById("detailsDialog");
  static detailsCloseBtn = document.querySelector(
    `button[data-closes="${this.detailsDialog.id}"]`
  );

  static createButtonIcon = (iconName = "circle") => {
    const btn = document.createElement("button");
    const span = document.createElement("span");

    btn.setAttribute("type", "button");
    span.classList.add("material-symbols-outlined");
    span.textContent = iconName;

    btn.appendChild(span);
    return btn;
  };

  static renderProjectList = () => {
    this.projectsDiv.replaceChildren();

    const ul = document.createElement("ul");

    const projectList = Storage.getProjectList();
    for (let [i, project] of projectList.entries()) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const projectNameSpan = document.createElement("span");
      const editBtn = this.createButtonIcon("edit");

      if (i === TodoApp.getActiveProjectIndex()) {
        div.classList.add("active");
      }
      div.addEventListener("click", () => {
        this.switchProject(i);
      });
      projectNameSpan.textContent = project.name;
      editBtn.title = "Edit project";
      editBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.openEditProjectDialog(i, project);
      });

      ul.appendChild(li);
      li.appendChild(div);
      div.appendChild(projectNameSpan);
      div.appendChild(editBtn);
    }
    this.projectsDiv.appendChild(ul);
  };

  static renderTodoList = () => {
    this.todosDiv.replaceChildren();

    const ul = document.createElement("ul");

    const priorityColors = { low: "green", medium: "orange", high: "red" };
    const project = Storage.getProjectList()[TodoApp.getActiveProjectIndex()];
    for (let [i, todo] of project.todoList.entries()) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const checkbox = document.createElement("input");
      const todoName = document.createElement("label");
      const todoDueDate = document.createElement("p");
      const editBtn = this.createButtonIcon("edit");
      const deleteBtn = this.createButtonIcon("delete");

      div.style.borderLeft = `6px solid ${priorityColors[todo.priority]}`;
      div.addEventListener("click", () => {
        this.openDetailsDialog(todo);
      });
      checkbox.id = `todo${i}`;
      checkbox.setAttribute("type", "checkbox");
      if (todo.done) {
        checkbox.setAttribute("checked", true);
        todoName.classList.add("done");
      }
      checkbox.addEventListener("click", (event) => {
        event.stopPropagation();
        if (event.currentTarget.checked) {
          todoName.classList.add("done");
          todo.done = true;
        } else {
          todoName.classList.remove("done");
          todo.done = false;
        }
        Storage.saveProjectList();
      });
      todoName.textContent = todo.name;
      todoName.setAttribute("for", `todo${i}`);
      todoDueDate.textContent = todo.dueDate;
      todoName.addEventListener("click", (event) => {
        event.stopPropagation();
      });
      editBtn.title = "Edit to-do";
      editBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.openEditTodoDialog(i, todo);
      });
      deleteBtn.title = "Delete to-do";
      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.deleteTodo(i);
      });

      ul.appendChild(li);
      li.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(todoName);
      div.appendChild(todoDueDate);
      div.appendChild(editBtn);
      div.appendChild(deleteBtn);
    }
    this.todosDiv.appendChild(ul);
  };

  static switchProject = (index) => {
    if (index === TodoApp.getActiveProjectIndex()) {
      return;
    }
    TodoApp.setActiveProjectIndex(index);
    this.renderProjectList();
    this.renderTodoList();
  };

  static openEditProjectDialog = (index, project) => {
    FormHandler.editProjectId = index;

    this.editProjectDialog.showModal();

    const name = document.getElementById("editProjectName");
    name.value = project.name;
  };

  static openEditTodoDialog = (index, todo) => {
    FormHandler.editTodoId = index;

    this.editTodoDialog.showModal();

    const name = document.getElementById("editTodoName");
    const description = document.getElementById("editDescription");
    const dueDate = document.getElementById("editDueDate");
    const priority = document.getElementById("editPriority");

    name.value = todo.name;
    description.value = todo.description;
    dueDate.value = todo.dueDate;
    priority.value = todo.priority;
  };

  static openDetailsDialog = (todo) => {
    this.detailsDialog.showModal();

    const name = document.querySelector("#detailsTodoName");
    const description = document.querySelector(
      "#detailsDescription > span:last-child"
    );
    const dueDate = document.querySelector("#detailsDueDate > span:last-child");
    const priority = document.querySelector(
      "#detailsPriority > span:last-child"
    );

    name.textContent = todo.name;
    description.textContent = todo.description || "...";
    dueDate.textContent = todo.dueDate || "...";
    priority.textContent =
      todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
  };

  static deleteTodo = (index) => {
    TodoApp.deleteTodo(index);
    this.renderTodoList();
  };

  static initForms = () => {
    const baseFormHandler = (event, formHandler, dialog) => {
      event.preventDefault();
      const success = formHandler();
      if (success) {
        dialog.close();
        this.renderProjectList();
        this.renderTodoList();
        event.currentTarget.reset();
      }
    };

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
    this.editTodoForm.addEventListener("submit", (event) => {
      baseFormHandler(event, FormHandler.editTodo, this.editTodoDialog);
    });
  };

  static initDialogBtns = () => {
    this.addProjectOpenBtn.addEventListener("click", () =>
      this.addProjectDialog.showModal()
    );
    this.addProjectCloseBtns.forEach((btn) =>
      btn.addEventListener("click", () => this.addProjectDialog.close())
    );

    this.editProjectCloseBtns.forEach((btn) =>
      btn.addEventListener("click", () => this.editProjectDialog.close())
    );

    this.addTodoOpenBtn.addEventListener("click", () =>
      this.addTodoDialog.showModal()
    );
    this.addTodoCloseBtns.forEach((btn) =>
      btn.addEventListener("click", () => this.addTodoDialog.close())
    );

    this.editTodoCloseBtns.forEach((btn) =>
      btn.addEventListener("click", () => this.editTodoDialog.close())
    );

    this.detailsCloseBtn.addEventListener("click", () =>
      this.detailsDialog.close()
    );
  };

  static initThemeSwitcher = () => {
    const getStoredTheme = () => localStorage.getItem("theme");
    const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

    const getPreferredTheme = () => {
      const theme = getStoredTheme();
      if (!theme) {
        return "light";
      }
      return theme;
    };

    const setTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
    };

    const themeSwitcher = document.getElementById("themeSwitch");

    const showActiveTheme = (theme) => {
      if (!themeSwitcher) {
        return;
      }

      const icon = themeSwitcher.querySelector("span");
      if (theme === "light") {
        icon.textContent = "light_mode";
      } else {
        icon.textContent = "dark_mode";
      }
    };

    setTheme(getPreferredTheme());
    showActiveTheme(getPreferredTheme());

    themeSwitcher.addEventListener("click", () => {
      const theme = getPreferredTheme() === "light" ? "dark" : "light";
      setTheme(theme);
      showActiveTheme(theme);
      setStoredTheme(theme);
    });
  };

  static initHamburger = () => {
    const hamburgerBtn = document.querySelector("#hamburger");
    const aside = document.querySelector("aside");

    // hamburgerBtn.addEventListener("click", () => {
    //   if (aside.classList.contains("show")) {
    //     aside.classList.replace("show", "hide");
    //     setTimeout(() => aside.classList.remove("hide"), 500);
    //   } else {
    //     aside.classList.add("show");
    //   }
    // });

    hamburgerBtn.addEventListener("click", () => {
      if (
        aside.classList.contains("showAnim") ||
        aside.classList.contains("hideAnim")
      ) {
        return;
      }

      if (!aside.classList.contains("show")) {
        aside.classList.add("show");
        aside.classList.add("showAnim");
        setTimeout(() => {
          aside.classList.remove("showAnim");
        }, 500);
      } else {
        aside.classList.add("hideAnim");
        setTimeout(() => {
          aside.classList.remove("hideAnim");
          aside.classList.remove("show");
        }, 500);
      }
    });
  };

  static initPage = () => {
    this.initForms();
    this.initDialogBtns();
    this.initThemeSwitcher();
    this.initHamburger();

    this.renderProjectList();
    this.renderTodoList();
  };
}

export { Storage, TodoApp, DomController };
