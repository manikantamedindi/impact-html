// Project List - Row Data
const projectsRowData = [
  {
    id: 1,
    state: "Open",
    projectName: "IMPACT Core Rollout",
    projectNumber: "A3-00001234",
    projectDescription: "Core commissioning package for building A",
    projectManager: "John Doe",
    startDate: "2026-01-15",
    endDate: "2026-08-30",
  },
  {
    id: 2,
    state: "Closed",
    projectName: "Gateway Upgrade",
    projectNumber: "A3-00001120",
    projectDescription: "Legacy gateway replacement and validation",
    projectManager: "Emily Carter",
    startDate: "2025-03-01",
    endDate: "2025-11-20",
  },
  {
    id: 3,
    state: "Open",
    projectName: "HVAC Zone Expansion",
    projectNumber: "A3-00001377",
    projectDescription: "Additional zone sensors and controls commissioning",
    projectManager: "Michael Lee",
    startDate: "2026-02-10",
    endDate: "2026-12-15",
  },
  {
    id: 4,
    state: "Closed",
    projectName: "Panel Retrofit Batch 2",
    projectNumber: "A3-00001002",
    projectDescription: "Retrofit of aging control panels",
    projectManager: "Sara Wilson",
    startDate: "2024-06-05",
    endDate: "2025-02-12",
  },
  {
    id: 5,
    state: "Open",
    projectName: "Lighting System Integration",
    projectNumber: "A3-00001455",
    projectDescription: "Automated lighting control setup for office spaces",
    projectManager: "David Brown",
    startDate: "2026-04-01",
    endDate: "2026-10-31",
  },
  {
    id: 6,
    state: "Open",
    projectName: "Fire Alarm Upgrade",
    projectNumber: "A3-00001300",
    projectDescription: "Network-based fire detection system installation",
    projectManager: "Jennifer White",
    startDate: "2026-03-15",
    endDate: "2026-09-20",
  },
];

(function () {
  const gridCommon = window.ImpactGridCommon || {};
  const gridDiv = document.getElementById("projectsGrid");

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const getResponsivePageSize = () => {
    return gridCommon.getResponsivePageSize ? gridCommon.getResponsivePageSize(5, 10) : 10;
  };

  const columnDefs = [
    {
      headerName: "ID",
      field: "id",
      minWidth: 60,
      maxWidth: 90,
      cellStyle: { fontWeight: "600" },
    },
    {
      headerName: "State",
      field: "state",
      minWidth: 100,
      maxWidth: 120,
      cellRenderer: (params) => {
        const state = params.value || "";
        const stateClass = state.toLowerCase() === "open" ? "badge-primary" : "badge-secondary";
        return `<span class="badge ${stateClass}">${state}</span>`;
      },
    },
    {
      headerName: "Project Name",
      field: "projectName",
      minWidth: 180,
      cellStyle: { fontWeight: "500" },
      cellRenderer: (params) =>
        `<a class="project-link" href="ProjectDetail.aspx?projectId=${encodeURIComponent(
          params.data.id
        )}" title="${params.value}">${params.value}</a>`,
    },
    {
      headerName: "Project Number",
      field: "projectNumber",
      minWidth: 130,
      maxWidth: 160,
      cellStyle: { fontFamily: "monospace" },
    },
    {
      headerName: "Project Description",
      field: "projectDescription",
      minWidth: 200,
      tooltipField: "projectDescription",
      cellRenderer: (params) => {
        const text = params.value || "";
        return `<span title="${text}">${text}</span>`;
      },
    },
    {
      headerName: "Project Manager",
      field: "projectManager",
      minWidth: 140,
      maxWidth: 160,
    },
    {
      headerName: "Start Date",
      field: "startDate",
      minWidth: 110,
      maxWidth: 130,
      cellRenderer: (params) => formatDate(params.value),
      comparator: (date1, date2) => {
        if (!date1 || !date2) return 0;
        return new Date(date1).getTime() - new Date(date2).getTime();
      },
    },
    {
      headerName: "End Date",
      field: "endDate",
      minWidth: 110,
      maxWidth: 130,
      cellRenderer: (params) => formatDate(params.value),
      comparator: (date1, date2) => {
        if (!date1 || !date2) return 0;
        return new Date(date1).getTime() - new Date(date2).getTime();
      },
    },
    {
      headerName: "",
      field: "action",
      minWidth: 100,
      maxWidth: 120,
      cellRenderer: (params) =>
        `<a href="ProjectAddEdit.aspx?projectId=${encodeURIComponent(params.data.id)}" class="action-link">Edit</a>`,
    },
  ];

  const gridOptions = {
    suppressSideButtons: false,
    defaultColDef: {
      flex: 1,
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
    rowData: projectsRowData,
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
    rowHeight: 36,
  };

  let currentFilteredData = [...projectsRowData];
  let gridApi = null;

  const ensureGridForViewport = () => {
    if (!gridDiv) {
      return;
    }

    if (!gridApi) {
      gridOptions.rowData = currentFilteredData;
      gridApi = gridCommon.createGrid ? gridCommon.createGrid(gridDiv, gridOptions) : null;
    }
  };

  const updateStats = () => {
    const total = projectsRowData.length;
    const openProjects = projectsRowData.filter((p) => p.state === "Open").length;
    const closedProjects = projectsRowData.filter((p) => p.state === "Closed").length;

    const openPct = total > 0 ? Math.round((openProjects / total) * 100) : 0;
    const closedPct = total > 0 ? Math.round((closedProjects / total) * 100) : 0;

    const openBadge = document.querySelector(".compact-stat-badge.open");
    const closedBadge = document.querySelector(".compact-stat-badge.closed");

    if (openBadge) {
      const valueEl = openBadge.querySelector(".compact-stat-value");
      const metaEl = openBadge.querySelector(".compact-stat-meta");
      if (valueEl) valueEl.textContent = openPct + "%";
      if (metaEl) metaEl.textContent = `(${openProjects}/${total})`;
    }

    if (closedBadge) {
      const valueEl = closedBadge.querySelector(".compact-stat-value");
      const metaEl = closedBadge.querySelector(".compact-stat-meta");
      if (valueEl) valueEl.textContent = closedPct + "%";
      if (metaEl) metaEl.textContent = `(${closedProjects}/${total})`;
    }
  };

  const applyFilters = () => {
    if (!gridApi) {
      return;
    }

    const searchValue = (document.getElementById("projectSearch")?.value || "").toLowerCase();
    const stateValue = document.getElementById("stateFilter")?.value || "all";

    const quickFilterText = searchValue ? searchValue : null;
    gridApi.setGridOption("quickFilterText", quickFilterText);

    if (stateValue !== "all") {
      const filterModel = {
        state: {
          type: "set",
          filterType: "text",
          values: [stateValue.charAt(0).toUpperCase() + stateValue.slice(1)],
        },
      };
      gridApi.setFilterModel(filterModel);
    } else {
      gridApi.setFilterModel(null);
    }
  };

  const initializeProjectsList = () => {
    ensureGridForViewport();
    updateStats();

    const searchInput = document.getElementById("projectSearch");
    const stateFilter = document.getElementById("stateFilter");

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    if (stateFilter) {
      stateFilter.addEventListener("change", applyFilters);
    }

    const addProjectBtn = document.getElementById("addProjectBtn");
    if (addProjectBtn) {
      addProjectBtn.addEventListener("click", () => {
        window.location.href = "ProjectAddEdit";
      });
    }

    window.addEventListener("resize", () => {
      if (gridApi && gridCommon.setPaginationPageSize) {
        gridCommon.setPaginationPageSize(gridApi, 5, 10);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeProjectsList);
  } else {
    initializeProjectsList();
  }
})();
