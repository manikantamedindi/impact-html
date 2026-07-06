(function () {
  var ALL_ROLES = ["Project Admin", "Issue Manager", "Commissioning Engineer", "Site Supervisor", "Viewer", "Controller Specialist"];

  function getUrlParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  var userId = parseInt(getUrlParam("id"), 10);

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

  var currentAssignedRoles = [];

  function renderRoleLists() {
    if (!availableRolesList || !assignedRolesList) { return; }

    var availHtml = "";
    for (var j = 0; j < ALL_ROLES.length; j++) {
      var role = ALL_ROLES[j];
      if (currentAssignedRoles.indexOf(role) === -1) {
        availHtml += '<div class="role-item" data-role="' + escapeHtml(role) + '"><input type="checkbox" class="role-checkbox" data-role="' + escapeHtml(role) + '" />' + escapeHtml(role) + "</div>";
      }
    }
    availableRolesList.innerHTML = availHtml || '<div style="padding:12px;color:#94a3b8;font-size:13px;">All roles assigned</div>';

    var assignedHtml = "";
    for (var k = 0; k < currentAssignedRoles.length; k++) {
      assignedHtml += '<div class="role-item is-assigned" data-role="' + escapeHtml(currentAssignedRoles[k]) + '"><input type="checkbox" class="role-checkbox" data-role="' + escapeHtml(currentAssignedRoles[k]) + '" />' + escapeHtml(currentAssignedRoles[k]) + "</div>";
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

    var rolesToMove = [];
    for (var i = 0; i < checked.length; i++) {
      var r = checked[i].getAttribute("data-role");
      if (r) { rolesToMove.push(r); }
    }

    if (fromListId === "available") {
      for (var j = 0; j < rolesToMove.length; j++) {
        if (currentAssignedRoles.indexOf(rolesToMove[j]) === -1) {
          currentAssignedRoles.push(rolesToMove[j]);
        }
      }
    } else {
      for (var k = 0; k < rolesToMove.length; k++) {
        var idx = currentAssignedRoles.indexOf(rolesToMove[k]);
        if (idx !== -1) { currentAssignedRoles.splice(idx, 1); }
      }
    }

    rebuildAssignedList(currentAssignedRoles);
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
    var user = null;
    if (Number.isFinite(userId) && window.projectUsersRowData) {
      for (var i = 0; i < window.projectUsersRowData.length; i++) {
        if (window.projectUsersRowData[i].id === userId) {
          user = window.projectUsersRowData[i];
          break;
        }
      }
    }

    if (user) {
      if (userNameInput) { userNameInput.value = user.userName || ""; }
      if (userEmailInput) { userEmailInput.value = (user.userName || "").toLowerCase().replace(/\s+/g, ".") + "@example.com"; }
      currentAssignedRoles = Array.isArray(user.roles) ? user.roles.slice() : [];
    } else {
      if (userNameInput) { userNameInput.value = "John Doe"; }
      if (userEmailInput) { userEmailInput.value = "john.doe@example.com"; }
      currentAssignedRoles = ["Viewer"];
    }

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

        if (user && window.projectUsersRowData) {
          user.userName = name;
          user.roles = assigned;
        }

        alert("User Updated Successfully!\n\nName: " + name + "\nEmail: " + email + "\nRoles: " + (assigned.length ? assigned.join(", ") : "None"));
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
