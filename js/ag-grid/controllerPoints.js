const controllerPointsRowData = [
  {
    module: "MOD-001",
    io: "DI-01",
    pointName: "AHU Start Command",
    description: "Start command from BMS",
  },
  {
    module: "MOD-001",
    io: "DO-04",
    pointName: "AHU Run Status",
    description: "Fan run feedback",
  },
  {
    module: "MOD-002",
    io: "AI-02",
    pointName: "Space Temperature",
    description: "Zone temperature sensor",
  },
  {
    module: "MOD-003",
    io: "AO-05",
    pointName: "Damper Position",
    description: "Outside air damper output",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const gridDiv = document.querySelector("#myGrid");
  const searchField = document.querySelector("#searchField");

  const escapeHtml = (value) => {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const checkedDisabledRenderer = () => {
    return '<input type="checkbox" checked disabled aria-label="checked" />';
  };

  const pointNameRenderer = (params) => {
    const pointName = escapeHtml(params.value || "");
    return `<a href="#" class="btn btn-link btn-sm p-0 ag-grid-column-nav-link controller-point-name-btn">${pointName}</a>`;
  };

  const actionRenderer = () => {
    return '<button type="button" class="btn btn-default btn-sm controller-grid-action-btn">Check all</button>';
  };

  const columnDefs = [
    {
      headerName: "Module",
      field: "module",
      minWidth: 120,
      pinned: "left",
      lockPinned: true,
    },
    { headerName: "IO", field: "io", minWidth: 100, maxWidth: 120 },
    {
      headerName: "Point Name",
      field: "pointName",
      minWidth: 190,
      cellRenderer: pointNameRenderer,
    },
    { headerName: "Description", field: "description", minWidth: 240 },
    {
      headerName: "Cable Installed",
      field: "cableInstalled",
      minWidth: 145,
      cellRenderer: checkedDisabledRenderer,
      filter: false,
      sortable: false,
      cellStyle: { justifyContent: "center" },
    },
    {
      headerName: "Panel Terminated",
      field: "panelTerminated",
      minWidth: 160,
      cellRenderer: checkedDisabledRenderer,
      filter: false,
      sortable: false,
      cellStyle: { justifyContent: "center" },
    },
    {
      headerName: "Field Device Terminated",
      field: "fieldDeviceTerminated",
      minWidth: 190,
      cellRenderer: checkedDisabledRenderer,
      filter: false,
      sortable: false,
      cellStyle: { justifyContent: "center" },
    },
    {
      headerName: "Check A point to point",
      field: "checkAPointToPoint",
      minWidth: 185,
      cellRenderer: checkedDisabledRenderer,
      filter: false,
      sortable: false,
      cellStyle: { justifyContent: "center" },
    },
    {
      headerName: "Check B Graphics",
      field: "checkBGraphics",
      minWidth: 160,
      maxWidth: 180,
      cellRenderer: checkedDisabledRenderer,
      filter: false,
      sortable: false,
      cellStyle: { justifyContent: "center" },
    },
    {
      headerName: "Actions",
      field: "actions",
      minWidth: 120,
      maxWidth: 110,
      pinned: "right",
      lockPinned: true,
      cellRenderer: actionRenderer,
      filter: false,
      sortable: false,
      cellStyle: { justifyContent: "center" },
    },
  ];

  const gridOptions = {
    suppressSideButtons: false,
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        fontSize: "13px",
      },
    },
    columnDefs,
    rowData: controllerPointsRowData,
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
    pagination: true,
    paginationPageSize: window.innerWidth <= 767 ? 5 : 10,
    rowHeight: 40,
    onCellClicked: (event) => {
      if (
        event.colDef.field === "pointName" &&
        event.event &&
        event.event.target &&
        event.event.target.closest(".controller-point-name-btn")
      ) {
        window.location.href = "CommissionPoint.html";
      }
    },
  };

  const gridApi = agGrid.createGrid(gridDiv, gridOptions);

  if (searchField) {
    searchField.addEventListener("input", function (event) {
      const text = (event.target.value || "").trim();
      gridApi.setGridOption("quickFilterText", text);
    });
  }
});
