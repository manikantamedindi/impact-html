document.addEventListener("DOMContentLoaded", function () {
  const issueOpenDate = document.querySelector("#issueOpenDate");
  const issuePhotos = document.querySelector("#issuePhotos");
  const issuePhotoPreview = document.querySelector("#issuePhotoPreview");
  const assignTo = document.querySelector("#assignTo");
  const newAssignee = document.querySelector("#newAssignee");
  const addAssigneeWrap = document.querySelector("#addAssigneeWrap");
  const showAddAssigneeBtn = document.querySelector("#showAddAssigneeBtn");
  const addAssigneeBtn = document.querySelector("#addAssigneeBtn");
  const hideAddAssigneeBtn = document.querySelector("#hideAddAssigneeBtn");
  const raiseIssueForm = document.querySelector("#raiseIssueForm");

  const now = new Date();
  const formatDateTime = (dateValue) => {
    const day = String(dateValue.getDate()).padStart(2, "0");
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const year = dateValue.getFullYear();
    const hours = String(dateValue.getHours()).padStart(2, "0");
    const minutes = String(dateValue.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  if (issueOpenDate) {
    issueOpenDate.value = formatDateTime(now);
  }

  const renderImagePreviews = (files) => {
    if (!issuePhotoPreview) {
      return;
    }

    issuePhotoPreview.innerHTML = "";

    const imageFiles = Array.from(files || []).filter((file) => file.type.startsWith("image/"));
    if (!imageFiles.length) {
      issuePhotoPreview.innerHTML = '<div class="raise-issue-preview-empty">No photos selected</div>';
      return;
    }

    imageFiles.forEach((file) => {
      const previewItem = document.createElement("div");
      previewItem.className = "raise-issue-preview-item";

      const image = document.createElement("img");
      image.className = "raise-issue-preview-image";
      image.alt = file.name;
      image.src = URL.createObjectURL(file);
      image.addEventListener("load", function () {
        URL.revokeObjectURL(image.src);
      });

      const label = document.createElement("span");
      label.className = "raise-issue-preview-name";
      label.textContent = file.name;

      previewItem.appendChild(image);
      previewItem.appendChild(label);
      issuePhotoPreview.appendChild(previewItem);
    });
  };

  if (issuePhotos) {
    issuePhotos.addEventListener("change", function (event) {
      renderImagePreviews(event.target.files);
    });
    renderImagePreviews(issuePhotos.files);
  }

  if (showAddAssigneeBtn && addAssigneeWrap && newAssignee) {
    showAddAssigneeBtn.addEventListener("click", function () {
      addAssigneeWrap.classList.remove("raise-issue-inline-add-hidden");
      newAssignee.focus();
    });
  }

  if (hideAddAssigneeBtn && addAssigneeWrap && newAssignee) {
    hideAddAssigneeBtn.addEventListener("click", function () {
      newAssignee.value = "";
      addAssigneeWrap.classList.add("raise-issue-inline-add-hidden");
    });
  }

  if (addAssigneeBtn && assignTo && newAssignee && addAssigneeWrap) {
    addAssigneeBtn.addEventListener("click", function () {
      const newName = newAssignee.value.trim();
      if (!newName) {
        newAssignee.focus();
        return;
      }

      const normalizedValue = newName.toLowerCase();
      const existingOption = Array.from(assignTo.options).find((option) => option.value === normalizedValue);

      if (!existingOption) {
        const option = document.createElement("option");
        option.value = normalizedValue;
        option.textContent = newName;
        assignTo.appendChild(option);
      }

      assignTo.value = normalizedValue;
      newAssignee.value = "";
      addAssigneeWrap.classList.add("raise-issue-inline-add-hidden");
    });
  }

  if (raiseIssueForm) {
    raiseIssueForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.alert("Issue submitted.");
    });
  }
});
