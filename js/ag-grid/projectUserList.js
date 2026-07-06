const projectUsersRowData = [
  {
    id: 1,
    userName: "John Doe",
    roles: ["Project Admin", "Issue Manager"],
    membership: "current",
  },
  {
    id: 2,
    userName: "Emily Carter",
    roles: ["Commissioning Engineer"],
    membership: "current",
  },
  {
    id: 3,
    userName: "Michael Lee",
    roles: ["Site Supervisor"],
    membership: "all",
  },
  {
    id: 4,
    userName: "Sara Wilson",
    roles: ["Viewer", "Controller Specialist"],
    membership: "current",
  },
  {
    id: 5,
    userName: "David Brown",
    roles: ["Viewer"],
    membership: "all",
  },
  {
    id: 6,
    userName: "Jennifer White",
    roles: ["Commissioning Engineer", "Issue Manager"],
    membership: "current",
  },
];

(function () {
  const gridCommon = window.ImpactGridCommon || {};
  const gridDiv = document.getElementById("projectUsersGrid");
  const userSearch = document.getElementById("userSearch");
  const memberFilter = document.getElementById("memberFilter");



  const dataState = projectUsersRowData.map((item) => ({
    ...item,
    roles: Array.isArray(item.roles) ? [...item.roles] : [],
  }));

  let gridApi = null;


  const getResponsivePageSize = () =>
    gridCommon.getResponsivePageSize ? gridCommon.getResponsivePageSize(6, 12) : 12;

  const escapeHtml = (value) =>
    String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const roleCellRenderer = (params) => {
    const roles = Array.isArray(params.value) ? params.value : [];
    if (!roles.length) {
      return "<span class=\"text-muted\">No role assigned</span>";
    }

    return roles
      .map((role) => `<span class=\"badge badge-primary mr-1\">${escapeHtml(role)}</span>`)
      .join(" ");
  };

  const openEditPage = (userId) => {
    window.location.href = "UserEdit.html?id=" + userId;
  };

  const applyFilters = () => {
    if (!gridApi) {
      return;
    }

    const searchValue = (userSearch?.value || "").trim().toLowerCase();
    const memberValue = memberFilter?.value || "all";

    const filteredRows = dataState.filter((row) => {
      const matchesMember = memberValue === "all" || row.membership === memberValue;
      const searchableText = `${row.userName} ${(row.roles || []).join(" ")}`.toLowerCase();
      const matchesSearch = !searchValue || searchableText.includes(searchValue);
      return matchesMember && matchesSearch;
    });

    gridApi.setGridOption("rowData", filteredRows);
  };

  const columnDefs = [
    {
      headerName: "User Name",
      field: "userName",
      minWidth: 220,
      cellStyle: { fontWeight: "500" },
    },
    {
      headerName: "Role",
      field: "roles",
      minWidth: 280,
      flex: 1,
      cellRenderer: roleCellRenderer,
      sortable: false,
      filter: false,
    },
    {
      headerName: "Actions",
      field: "action",
      minWidth: 90,
      maxWidth: 110,
      sortable: false,
      filter: false,
      cellRenderer: (params) =>
        `<div class="ag-grid-table-actions-columns">
            <a href="#" class="user-edit-action" data-user-id="${params.data.id}" title="Edit" aria-label="Edit">
                <img src="/assets/icons/edit.svg" alt="Edit" />
            </a>
            <a href="#" class="user-delete-action" data-user-id="${params.data.id}" title="Delete" aria-label="Delete">
                <img src="/assets/icons/delete.svg" alt="Delete" />
            </a>
        </div>`,
    },
  ];

  const gridOptions = {
    suppressSideButtons: false,
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
    rowData: dataState,
    sideBar: {
      hiddenByDefault: false,
      position: "right",
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
        },
        {
          id: "filters",
          labelDefault: "Filters",
          labelKey: "filters",
          iconKey: "filter",
          toolPanel: "agFiltersToolPanel",
        },
      ],
      defaultToolPanel: "",
    },
    suppressHorizontalScroll: false,
    suppressScrollOnNewData: true,
    pagination: true,
    paginationPageSize: getResponsivePageSize(),
    rowHeight: 40,
  };

  const initializeProjectUserList = () => {
    if (gridDiv && !gridApi) {
      gridApi = gridCommon.createGrid ? gridCommon.createGrid(gridDiv, gridOptions) : null;
    }

    if (userSearch) {
      userSearch.addEventListener("input", applyFilters);
    }

    if (memberFilter) {
      memberFilter.addEventListener("change", applyFilters);
    }

    if (gridDiv) {
      gridDiv.addEventListener("click", (event) => {
        const editTarget = event.target.closest(".user-edit-action");
        if (editTarget) {
          event.preventDefault();
          const userId = Number(editTarget.getAttribute("data-user-id"));
          if (Number.isFinite(userId)) {
            openEditPage(userId);
          }
          return;
        }

        const deleteTarget = event.target.closest(".user-delete-action");
        if (deleteTarget) {
          event.preventDefault();
          const userId = Number(deleteTarget.getAttribute("data-user-id"));
          if (Number.isFinite(userId) && confirm("Are you sure you want to remove this user from the project?")) {
            const idx = dataState.findIndex((item) => item.id === userId);
            if (idx !== -1) {
              dataState.splice(idx, 1);
              applyFilters();
            }
          }
          return;
        }
      });
    }



    window.addEventListener("resize", () => {
      if (gridApi && gridCommon.setPaginationPageSize) {
        gridCommon.setPaginationPageSize(gridApi, 6, 12);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeProjectUserList);
  } else {
    initializeProjectUserList();
  }
})();
