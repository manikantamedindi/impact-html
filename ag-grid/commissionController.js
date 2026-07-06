const commissionControllerIssuesRowData = [
  {
    type: "Component Failure",
    openDate: "2025-09-17",
    tags: "AHU01-ASP",
    description: "Controller failed - UPDATE - S.G. - 2025-09-17 15:54:38 ..",
    raisedBy: "steve.gregory@se.com",
  },
  {
    type: "Programming Issue",
    openDate: "2025-10-02",
    tags: "AHU01-ASP :N2",
    description: "Program download timeout on restart, requires retry sequence.",
    raisedBy: "john.doe@se.com",
  },
  {
    type: "Other",
    openDate: "2025-11-21",
    tags: "AHU01-ASP :SA Temp",
    description: "Sensor naming mismatch between drawing and controller points list.",
    raisedBy: "alex.chen@se.com",
  },
];

const controllerMetaRowData = [
  {
    id: 1,
    controller: "AHU01-ASP",
    metaType: "BACnet Instance",
    metaData: "40017",
  },
  {
    id: 2,
    controller: "AHU01-ASP",
    metaType: "Network ID",
    metaData: "N2-01",
  },
  {
    id: 3,
    controller: "AHU01-ASP",
    metaType: "Firmware Version",
    metaData: "3.2.9",
  },
];

const defaultIssueRow = {
  type: "Other",
  openDate: "2026-01-01",
  tags: "AHU01-ASP",
  description: "No issues have been raised yet.",
  raisedBy: "system@se.com",
};

const defaultMetaRow = {
  id: 1,
  controller: "AHU01-ASP",
  metaType: "Install Reference",
  metaData: "N/A",
};

(function () {
  const gridCommon = window.ImpactGridCommon || {};
  const issuesGridDiv = document.getElementById("commissionIssuesGrid");
  const metaGridDiv = document.getElementById("controllerMetaGrid");
  const addMetaDataBtn = document.getElementById("addMetaDataBtn");

  const metaControllerName = document.getElementById("metaControllerName");
  const metaFieldModeExisting = document.getElementById("metaFieldModeExisting");
  const metaFieldModeNew = document.getElementById("metaFieldModeNew");
  const existingMetaTypeWrap = document.getElementById("existingMetaTypeWrap");
  const newMetaTypeWrap = document.getElementById("newMetaTypeWrap");
  const existingMetaType = document.getElementById("existingMetaType");
  const newMetaType = document.getElementById("newMetaType");
  const metaDataValue = document.getElementById("metaDataValue");
  const saveMetaDataBtn = document.getElementById("saveMetaDataBtn");

  if (!issuesGridDiv && !metaGridDiv) {
    return;
  }

  const getResponsivePageSize = () =>
    gridCommon.getResponsivePageSize ? gridCommon.getResponsivePageSize(4, 8) : 8;

  const issuesState =
    commissionControllerIssuesRowData.length > 0
      ? commissionControllerIssuesRowData.map((row) => ({ ...row }))
      : [{ ...defaultIssueRow }];

  const metaState =
    controllerMetaRowData.length > 0
      ? controllerMetaRowData.map((row) => ({ ...row }))
      : [{ ...defaultMetaRow }];
  let editingMetaId = null;
  let metaGridApi = null;

  const getNextMetaId = () => {
    const maxId = metaState.reduce((max, row) => (row.id > max ? row.id : max), 0);
    return maxId + 1;
  };

  const toggleMetaFieldMode = () => {
    const isNewMode = !!metaFieldModeNew?.checked;

    if (existingMetaTypeWrap) {
      existingMetaTypeWrap.style.display = isNewMode ? "none" : "block";
    }

    if (newMetaTypeWrap) {
      newMetaTypeWrap.style.display = isNewMode ? "block" : "none";
    }
  };

  const openMetaDialogForRow = (row) => {
    editingMetaId = row?.id ?? null;

    if (metaControllerName) {
      metaControllerName.value = row?.controller || "AHU01-ASP";
    }

    if (metaDataValue) {
      metaDataValue.value = row?.metaData || "";
    }

    const hasExistingOption = !!existingMetaType?.querySelector(
      `option[value="${(row?.metaType || "").replace(/\"/g, '\\\"')}"]`
    );

    if (row && hasExistingOption) {
      if (metaFieldModeExisting) metaFieldModeExisting.checked = true;
      if (existingMetaType) existingMetaType.value = row.metaType;
      if (newMetaType) newMetaType.value = "";
    } else if (row) {
      if (metaFieldModeNew) metaFieldModeNew.checked = true;
      if (newMetaType) newMetaType.value = row.metaType || "";
      if (existingMetaType) existingMetaType.value = "";
    } else {
      if (metaFieldModeExisting) metaFieldModeExisting.checked = true;
      if (existingMetaType) existingMetaType.value = "";
      if (newMetaType) newMetaType.value = "";
    }

    toggleMetaFieldMode();
    window.jQuery("#metaDataDialog").modal("show");
  };

  const refreshMetaGrid = () => {
    if (metaState.length === 0) {
      metaState.push({ ...defaultMetaRow });
    }

    if (metaGridApi) {
      metaGridApi.setGridOption("rowData", [...metaState]);
    }
  };

  const formatDate = (rawDate) => {
    if (!rawDate) {
      return "";
    }

    const dateObj = new Date(rawDate);
    if (Number.isNaN(dateObj.getTime())) {
      return rawDate;
    }

    return dateObj.toLocaleDateString("en-GB");
  };

  const columnDefs = [
    {
      headerName: "Type",
      field: "type",
      minWidth: 140,
    },
    {
      headerName: "Open Date",
      field: "openDate",
      minWidth: 120,
      valueFormatter: (params) => formatDate(params.value),
    },
    {
      headerName: "Issue Tags",
      field: "tags",
      minWidth: 170,
      cellRenderer: (params) => `<span class="controller-issue-tag">${params.value || ""}</span>`,
    },
    {
      headerName: "Description",
      field: "description",
      minWidth: 320,
      flex: 1,
      tooltipField: "description",
    },
    {
      headerName: "Raised By",
      field: "raisedBy",
      minWidth: 180,
    },
    {
      headerName: "Action",
      field: "action",
      minWidth: 110,
      maxWidth: 120,
      sortable: false,
      filter: false,
      cellRenderer: () => '<a href="#" class="controller-issue-action">Update</a>',
    },
  ];

  const issuesGridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,
      floatingFilter: false,
      resizable: true,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
      },
    },
    columnDefs,
    rowData: issuesState,
    domLayout: "autoHeight",
    suppressHorizontalScroll: false,
    suppressScrollOnNewData: true,
    pagination: true,
    paginationPageSize: getResponsivePageSize(),
    rowHeight: 40,
  };

  const metaColumnDefs = [
    {
      headerName: "ID",
      field: "id",
      minWidth: 80,
      maxWidth: 100,
      cellStyle: { fontWeight: "700" },
    },
    {
      headerName: "Controller",
      field: "controller",
      minWidth: 180,
      cellStyle: { fontWeight: "600" },
    },
    {
      headerName: "Meta Type",
      field: "metaType",
      minWidth: 220,
    },
    {
      headerName: "Meta Data",
      field: "metaData",
      minWidth: 240,
      flex: 1,
    },
    {
      headerName: "Actions",
      field: "actions",
      minWidth: 150,
      maxWidth: 170,
      sortable: false,
      filter: false,
      cellRenderer: (params) =>
        `<div class="ag-grid-table-actions-columns">
            <a href="#" class="meta-edit-action" data-meta-id="${params.data.id}" title="Edit" aria-label="Edit">
                <img src="/assets/icons/edit.svg" alt="Edit" />
            </a>
            <a href="#" class="meta-delete-action" data-meta-id="${params.data.id}" title="Delete" aria-label="Delete">
                <img src="/assets/icons/delete.svg" alt="Delete" />
            </a>
        </div>`,
    },
  ];

  const metaGridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,
      floatingFilter: false,
      resizable: true,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
      },
    },
    columnDefs: metaColumnDefs,
    rowData: metaState,
    domLayout: "autoHeight",
    suppressHorizontalScroll: false,
    suppressScrollOnNewData: true,
    pagination: true,
    paginationPageSize: getResponsivePageSize(),
    rowHeight: 40,
  };

  const issuesGridApi =
    issuesGridDiv && gridCommon.createGrid
      ? gridCommon.createGrid(issuesGridDiv, issuesGridOptions)
      : null;

  metaGridApi =
    metaGridDiv && gridCommon.createGrid ? gridCommon.createGrid(metaGridDiv, metaGridOptions) : null;

  if (metaGridDiv) {
    metaGridDiv.addEventListener("click", (event) => {
      const editTarget = event.target.closest(".meta-edit-action");
      const deleteTarget = event.target.closest(".meta-delete-action");

      if (editTarget) {
        event.preventDefault();
        const id = Number(editTarget.getAttribute("data-meta-id"));
        const row = metaState.find((item) => item.id === id);
        if (row) {
          openMetaDialogForRow(row);
        }
      }

      if (deleteTarget) {
        event.preventDefault();
        if (metaState.length <= 1) {
          return;
        }

        const id = Number(deleteTarget.getAttribute("data-meta-id"));
        const index = metaState.findIndex((item) => item.id === id);
        if (index >= 0) {
          metaState.splice(index, 1);
          refreshMetaGrid();
        }
      }
    });
  }

  if (addMetaDataBtn) {
    addMetaDataBtn.addEventListener("click", () => {
      openMetaDialogForRow(null);
    });
  }

  if (metaFieldModeExisting) {
    metaFieldModeExisting.addEventListener("change", toggleMetaFieldMode);
  }

  if (metaFieldModeNew) {
    metaFieldModeNew.addEventListener("change", toggleMetaFieldMode);
  }

  if (saveMetaDataBtn) {
    saveMetaDataBtn.addEventListener("click", () => {
      const isNewMode = !!metaFieldModeNew?.checked;
      const selectedType = isNewMode ? (newMetaType?.value || "").trim() : (existingMetaType?.value || "").trim();
      const selectedMetaValue = (metaDataValue?.value || "").trim();

      if (!selectedType || !selectedMetaValue) {
        return;
      }

      if (editingMetaId) {
        const row = metaState.find((item) => item.id === editingMetaId);
        if (row) {
          row.controller = metaControllerName?.value || "AHU01-ASP";
          row.metaType = selectedType;
          row.metaData = selectedMetaValue;
        }
      } else {
        metaState.push({
          id: getNextMetaId(),
          controller: metaControllerName?.value || "AHU01-ASP",
          metaType: selectedType,
          metaData: selectedMetaValue,
        });
      }

      refreshMetaGrid();
      window.jQuery("#metaDataDialog").modal("hide");
    });
  }

  window.addEventListener("resize", () => {
    if (issuesGridApi && gridCommon.setPaginationPageSize) {
      gridCommon.setPaginationPageSize(issuesGridApi, 4, 8);
    }

    if (metaGridApi && gridCommon.setPaginationPageSize) {
      gridCommon.setPaginationPageSize(metaGridApi, 4, 8);
    }
  });
})();
