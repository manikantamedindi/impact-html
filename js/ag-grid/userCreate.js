(function () {
  var ALL_ROLES = ["Project Admin", "Issue Manager", "Commissioning Engineer", "Site Supervisor", "Viewer", "Controller Specialist"];

  var userNameInput = document.getElementById("userName");
  var userEmailInput = document.getElementById("userEmail");
  var availableRolesList = document.getElementById("availableRolesList");
  var assignedRolesList = document.getElementById("assignedRolesList");
  var assignRoleBtn = document.getElementById("assignRoleBtn");
  var unassignRoleBtn = document.getElementById("unassignRoleBtn");
  var saveUserBtn = document.getElementById("saveUserBtn");

  function escapeHtml(v) {
    return String(v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function renderRoleLists() {
    if (!availableRolesList || !assignedRolesList) { return; }

    var assignedItems = assignedRolesList.querySelectorAll(".role-item");
    var assigned = [];
    for (var i = 0; i < assignedItems.length; i++) {
      var r = assignedItems[i].getAttribute("data-role");
      if (r) { assigned.push(r); }
    }

    var availHtml = "";
    for (var j = 0; j < ALL_ROLES.length; j++) {
      var role = ALL_ROLES[j];
      if (assigned.indexOf(role) === -1) {
        availHtml += '<div class="role-item" data-role="' + escapeHtml(role) + '"><input type="checkbox" class="role-checkbox" data-role="' + escapeHtml(role) + '" />' + escapeHtml(role) + "</div>";
      }
    }
    availableRolesList.innerHTML = availHtml || '<div style="padding:12px;color:#94a3b8;font-size:13px;">All roles assigned</div>';

    var assignedHtml = "";
    for (var k = 0; k < assigned.length; k++) {
      assignedHtml += '<div class="role-item is-assigned" data-role="' + escapeHtml(assigned[k]) + '"><input type="checkbox" class="role-checkbox" data-role="' + escapeHtml(assigned[k]) + '" />' + escapeHtml(assigned[k]) + "</div>";
    }
    assignedRolesList.innerHTML = assignedHtml || '<div style="padding:12px;color:#94a3b8;font-size:13px;">No roles assigned</div>';
  }

  function getAssignedRoles() {
    if (!assignedRolesList) { return []; }
    var items = assignedRolesList.querySelectorAll(".role-item");
    var roles = [];
    for (var i = 0; i < items.length; i++) {
      var role = items[i].getAttribute("data-role");
      if (role) { roles.push(role); }
    }
    return roles;
  }

  function moveRoles(fromListId) {
    var fromList = fromListId === "available" ? availableRolesList : assignedRolesList;
    if (!fromList) { return; }
    var checked = fromList.querySelectorAll(".role-checkbox:checked");
    if (checked.length === 0) { return; }

    var currentAssigned = getAssignedRoles();
    var rolesToMove = [];
    for (var i = 0; i < checked.length; i++) {
      var r = checked[i].getAttribute("data-role");
      if (r) { rolesToMove.push(r); }
    }

    if (fromListId === "available") {
      for (var j = 0; j < rolesToMove.length; j++) {
        if (currentAssigned.indexOf(rolesToMove[j]) === -1) {
          currentAssigned.push(rolesToMove[j]);
        }
      }
    } else {
      for (var k = 0; k < rolesToMove.length; k++) {
        var idx = currentAssigned.indexOf(rolesToMove[k]);
        if (idx !== -1) { currentAssigned.splice(idx, 1); }
      }
    }

    rebuildAssignedList(currentAssigned);
  }

  function rebuildAssignedList(newAssigned) {
    if (!assignedRolesList || !availableRolesList) { return; }

    var availHtml = "";
    for (var j = 0; j < ALL_ROLES.length; j++) {
      var role = ALL_ROLES[j];
      if (newAssigned.indexOf(role) === -1) {
        availHtml += '<div class="role-item" data-role="' + escapeHtml(role) + '"><input type="checkbox" class="role-checkbox" data-role="' + escapeHtml(role) + '" />' + escapeHtml(role) + "</div>";
      }
    }
    availableRolesList.innerHTML = availHtml || '<div style="padding:12px;color:#94a3b8;font-size:13px;">All roles assigned</div>';

    var assignedHtml = "";
    for (var k = 0; k < newAssigned.length; k++) {
      assignedHtml += '<div class="role-item is-assigned" data-role="' + escapeHtml(newAssigned[k]) + '"><input type="checkbox" class="role-checkbox" data-role="' + escapeHtml(newAssigned[k]) + '" />' + escapeHtml(newAssigned[k]) + "</div>";
    }
    assignedRolesList.innerHTML = assignedHtml || '<div style="padding:12px;color:#94a3b8;font-size:13px;">No roles assigned</div>';
  }

  function init() {
    renderRoleLists();

    if (assignRoleBtn) {
      assignRoleBtn.addEventListener("click", function () { moveRoles("available"); });
    }

    if (unassignRoleBtn) {
      unassignRoleBtn.addEventListener("click", function () { moveRoles("assigned"); });
    }

    if (saveUserBtn) {
      saveUserBtn.addEventListener("click", function () {
        var name = (userNameInput ? userNameInput.value : "").trim();
        var email = (userEmailInput ? userEmailInput.value : "").trim();

        if (!name) {
          if (userNameInput) { userNameInput.focus(); }
          return;
        }
        if (!email) {
          if (userEmailInput) { userEmailInput.focus(); }
          return;
        }

        var assigned = getAssignedRoles();

        var msg = "User Created Successfully!\n\nName: " + name + "\nEmail: " + email + "\nRoles: " + (assigned.length ? assigned.join(", ") : "None");

        var existingData = window.projectUsersRowData;
        if (Array.isArray(existingData)) {
          var newId = 1;
          for (var i = 0; i < existingData.length; i++) {
            if (existingData[i].id >= newId) { newId = existingData[i].id + 1; }
          }
          existingData.push({ id: newId, userName: name, roles: assigned, membership: "current" });
        }

        alert(msg);
        window.location.href = "ProjectUserList.html";
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
