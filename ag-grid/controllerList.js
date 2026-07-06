// Controller Status List - Row Data and AG Grid Initialization

const controllerRowData = [
  {
    controller: "AHU01-ASP",
    pointsFraction: "10/10",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 1,
  },
  {
    controller: "CASB-BMS-L13-002",
    pointsFraction: "8/8",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 1,
  },
  {
    controller: "CASB-BMS-L13-003",
    pointsFraction: "1/8",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 0,
  },
  {
    controller: "VavType01",
    pointsFraction: "0/1",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 0,
  },
  // Add some more mock data
  {
    controller: "CHW-Pump-01",
    pointsFraction: "5/5",
    controllerInstalled: "Complete",
    panelTerminated: "Pending",
    readyToPowerUp: "Pending",
    lastUpdate: "22-04-2026",
    issues: 2,
  },
  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },
    {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },
   {
    controller: "AHU01-ASP",
    pointsFraction: "10/10",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 1,
  },
  {
    controller: "CASB-BMS-L13-002",
    pointsFraction: "8/8",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 1,
  },
  {
    controller: "CASB-BMS-L13-003",
    pointsFraction: "1/8",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 0,
  },
  {
    controller: "VavType01",
    pointsFraction: "0/1",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 0,
  },
  // Add some more mock data
  {
    controller: "CHW-Pump-01",
    pointsFraction: "5/5",
    controllerInstalled: "Complete",
    panelTerminated: "Pending",
    readyToPowerUp: "Pending",
    lastUpdate: "22-04-2026",
    issues: 2,
  },
  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },
    {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },
   {
    controller: "AHU01-ASP",
    pointsFraction: "10/10",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 1,
  },
  {
    controller: "CASB-BMS-L13-002",
    pointsFraction: "8/8",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 1,
  },
  {
    controller: "CASB-BMS-L13-003",
    pointsFraction: "1/8",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 0,
  },
  {
    controller: "VavType01",
    pointsFraction: "0/1",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "21-04-2026",
    issues: 0,
  },
  // Add some more mock data
  {
    controller: "CHW-Pump-01",
    pointsFraction: "5/5",
    controllerInstalled: "Complete",
    panelTerminated: "Pending",
    readyToPowerUp: "Pending",
    lastUpdate: "22-04-2026",
    issues: 2,
  },
  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },
    {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  },  {
    controller: "FCU-L1-01",
    pointsFraction: "4/4",
    controllerInstalled: "Complete",
    panelTerminated: "Complete",
    readyToPowerUp: "Complete",
    lastUpdate: "23-04-2026",
    issues: 0,
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const gridDiv = document.querySelector("#myGrid");

  const getResponsivePageSize = () => (window.innerWidth <= 767 ? 5 : 10);

  // Status cell renderer
  const statusRenderer = (params) => {
    const status = params.value;
    const statusClass = status === "Complete" ? "is-complete" : "is-pending";
    return `<span class="controller-status-pill ${statusClass}">${status}</span>`;
  };

  const columnDefs = [
    {
      headerName: "Controller",
      field: "controller",
      pinned: "left",
      minWidth: 170,
      cellRenderer: (params) =>
        `<a href="#" class="controller-name-link">${params.value}</a>`,
    },
    { 
      headerName: "Points", 
      colId: "pointsLink",
      field: "pointsFraction", 
      minWidth: 120,
      width: 120,
      maxWidth: 120,
      cellRenderer: (params) => {
        return `<a href="#" class="controller-points-link">Points</a>`;
      }
    },
    {
      headerName: "",
      colId: "pointsCount",
      field: "pointsFraction",
      minWidth: 82,
      width: 82,
      maxWidth: 82,
      resizable: false,
      suppressSizeToFit: true,
      cellRenderer: (params) => {
        return `<span class="controller-points-chip">${params.value}</span>`;
      },
    },
    { 
      headerName: "Controller Installed", 
      field: "controllerInstalled", 
      minWidth: 160,
      cellRenderer: statusRenderer
    },
    { 
      headerName: "Panel Terminated", 
      field: "panelTerminated", 
      minWidth: 160,
      cellRenderer: statusRenderer
    },
    { 
      headerName: "Ready to Power Up", 
      field: "readyToPowerUp", 
      minWidth: 160,
      cellRenderer: statusRenderer
    },
    { 
      headerName: "Last Update", 
      field: "lastUpdate", 
      minWidth: 130 
    },
    { 
      headerName: "Issues", 
      field: "issues", 
      minWidth: 130,
      cellRenderer: (params) => {
        const issues = params.value;
        if (issues > 0) {
          return `<span class="controller-issues-chip has-issues">${issues}</span>`;
        } else {
          return `<span class="controller-issues-chip no-issues">0</span>`;
        }
      }
    },
    {
      headerName: "Action",
      field: "action",
      minWidth: 200,
      cellRenderer: (params) =>
        `<button class="btn btn-default btn-sm controller-grid-action-btn">Mark Install as Complete</button>`,
    },
  ];

  // Grid options
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
        fontSize: "13px",
      },
    },
    columnDefs: columnDefs,
    rowData: controllerRowData,
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

  // Initialize the grid
  const gridApi = agGrid.createGrid(gridDiv, gridOptions);

  window.addEventListener("resize", () => {
    if (gridApi && typeof gridApi.paginationSetPageSize === "function") {
      gridApi.paginationSetPageSize(getResponsivePageSize());
    }
  });

  const searchField = document.querySelector("#searchField");
  const lastUpdateFilter = document.querySelector("#lastUpdateFilter");

  const toIsoDate = (dateText) => {
    if (!dateText || typeof dateText !== "string") {
      return "";
    }

    const parts = dateText.split("-");
    if (parts.length !== 3) {
      return "";
    }

    const [dd, mm, yyyy] = parts;
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  };

  const applyFilters = () => {
    const searchText = (searchField?.value || "").trim().toLowerCase();
    const selectedDate = (lastUpdateFilter?.value || "").trim();

    const filteredRows = controllerRowData.filter((row) => {
      const matchesDate = !selectedDate || toIsoDate(row.lastUpdate) === selectedDate;
      const matchesSearch =
        !searchText ||
        Object.values(row).some((value) => String(value).toLowerCase().includes(searchText));

      return matchesDate && matchesSearch;
    });

    gridApi.setGridOption("rowData", filteredRows);
  };

  if (searchField) {
    searchField.addEventListener("input", applyFilters);
  }

  if (lastUpdateFilter) {
    lastUpdateFilter.addEventListener("change", applyFilters);
  }
});
