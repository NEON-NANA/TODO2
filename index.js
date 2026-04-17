const state = {
  title: "Frontend Task",
  description: "A well built Todo card component with proper accessibility and responsiveness.",
  priority: "High",
  status: "Pending",
  dueDate: new Date("2026-04-19T20:00:00"),
  completed: false,
  expanded: false
};

// Elements
const checkbox = document.getElementById("todoCheckbox");
const statusText = document.getElementById("statusText");
const statusControl = document.getElementById("statusControl");
const timeEl = document.getElementById("timeRemaining");
const overdueEl = document.getElementById("overdueIndicator");
const titleEl = document.getElementById("todoTitle");
const descEl = document.getElementById("todoDescription");
const priorityText = document.getElementById("priorityText");
const priorityIndicator = document.getElementById("priorityIndicator");

// Edit elements
const editBtn = document.getElementById("editBtn");
const editForm = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Expand
const expandBtn = document.getElementById("expandToggle");
const collapsible = document.getElementById("collapsibleSection");

// ---- RENDER ----
function render() {
  titleEl.textContent = state.title;
  descEl.textContent = state.description;
  priorityText.textContent = state.priority;
  statusText.textContent = state.status;
  statusControl.value = state.status;

  checkbox.checked = state.status === "Done";

  // styles
  document.getElementById("todoCard").classList.toggle("completed", state.status === "Done");

  // priority indicator
  priorityIndicator.className = `priority-indicator ${state.priority.toLowerCase()}`;
}

// ---- TIME ----
function updateTime() {
  if (state.status === "Done") {
    timeEl.textContent = "Completed";
    return;
  }

  const now = new Date();
  const diff = state.dueDate - now;

  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  let text = "";

  if (diff < 0) {
    overdueEl.hidden = false;
    text = `Overdue by ${Math.abs(hours)} hour(s)`;
  } else {
    overdueEl.hidden = true;

    if (mins < 60) text = `Due in ${mins} minutes`;
    else if (hours < 24) text = `Due in ${hours} hours`;
    else text = `Due in ${days} days`;
  }

  timeEl.textContent = text;
}

setInterval(updateTime, 30000);
updateTime();

// ---- STATUS SYNC ----
checkbox.addEventListener("change", () => {
  state.status = checkbox.checked ? "Done" : "Pending";
  render();
});

statusControl.addEventListener("change", () => {
  state.status = statusControl.value;
  render();
});

// ---- EXPAND ----
expandBtn.addEventListener("click", () => {
  state.expanded = !state.expanded;

  collapsible.style.maxHeight = state.expanded ? "500px" : "60px";
  expandBtn.setAttribute("aria-expanded", state.expanded);
  expandBtn.textContent = state.expanded ? "Collapse" : "Expand";
});

// ---- EDIT MODE ----
editBtn.addEventListener("click", () => {
  editForm.hidden = false;

  document.getElementById("editTitle").value = state.title;
  document.getElementById("editDesc").value = state.description;
  document.getElementById("editPriority").value = state.priority;
});

saveBtn.addEventListener("click", () => {
  state.title = document.getElementById("editTitle").value;
  state.description = document.getElementById("editDesc").value;
  state.priority = document.getElementById("editPriority").value;
  state.dueDate = new Date(document.getElementById("editDate").value);

  editForm.hidden = true;
  render();
});

cancelBtn.addEventListener("click", () => {
  editForm.hidden = true;
});

// Initial render
render();