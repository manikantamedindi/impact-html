// Point Status List - Row Data
const pointsRowData = [
  {
    controller: "CASB-BMS-L13-002",
    ioModule: "10_AOV8",
    channel: "AO7",
    point: "EfL13Iso25B_VsdSpdCtl",
    description: "Variable Speed Drive Speed Con...",
    descriptionFull: "Variable Speed Drive Speed Control",
    pointType: "0-10 VDC (Out)",
    partNumber: "",
    location: "MCC-L13-03FE",
    status: "",
    statusFilled: 3,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-003",
    ioModule: "10_AIV8",
    channel: "AI1",
    point: "EfL13Iso25B_TempSens",
    description: "Temperature Sensor Input",
    descriptionFull: "Temperature Sensor Input",
    pointType: "0-10 VDC (In)",
    partNumber: "PN-1001",
    location: "MCC-L13-03FE",
    status: "",
    statusFilled: 2,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-004",
    ioModule: "11_DIV16",
    channel: "DI5",
    point: "EfL13Iso25B_RunFb",
    description: "Run Feedback",
    descriptionFull: "Run Feedback",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1002",
    location: "MCC-L13-04FE",
    status: "",
    statusFilled: 4,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-005",
    ioModule: "11_DOV8",
    channel: "DO3",
    point: "EfL13Iso25B_StartCmd",
    description: "Start Command Output",
    descriptionFull: "Start Command Output",
    pointType: "Dry Contact (Out)",
    partNumber: "PN-1003",
    location: "MCC-L13-05FE",
    status: "",
    statusFilled: 1,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-006",
    ioModule: "12_AOV8",
    channel: "AO2",
    point: "EfL13Iso25B_DmprPos",
    description: "Damper Position Control",
    descriptionFull: "Damper Position Control",
    pointType: "0-10 VDC (Out)",
    partNumber: "PN-1004",
    location: "AHU-L13-01",
    status: "",
    statusFilled: 5,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-007",
    ioModule: "12_AIV8",
    channel: "AI6",
    point: "EfL13Iso25B_Pressure",
    description: "Static Pressure Input",
    descriptionFull: "Static Pressure Input",
    pointType: "4-20 mA (In)",
    partNumber: "PN-1005",
    location: "AHU-L13-01",
    status: "",
    statusFilled: 3,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-008",
    ioModule: "13_DIV16",
    channel: "DI9",
    point: "EfL13Iso25B_FilterAlarm",
    description: "Filter Differential Alarm",
    descriptionFull: "Filter Differential Alarm",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1006",
    location: "AHU-L13-02",
    status: "",
    statusFilled: 2,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-009",
    ioModule: "13_DOV8",
    channel: "DO1",
    point: "EfL13Iso25B_Reset",
    description: "Alarm Reset Output",
    descriptionFull: "Alarm Reset Output",
    pointType: "Dry Contact (Out)",
    partNumber: "PN-1007",
    location: "AHU-L13-02",
    status: "",
    statusFilled: 4,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-010",
    ioModule: "14_AOV8",
    channel: "AO4",
    point: "EfL13Iso25B_ValveCtl",
    description: "Valve Modulation Control",
    descriptionFull: "Valve Modulation Control",
    pointType: "0-10 VDC (Out)",
    partNumber: "PN-1008",
    location: "CHW-L13-01",
    status: "",
    statusFilled: 1,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-011",
    ioModule: "14_AIV8",
    channel: "AI7",
    point: "EfL13Iso25B_ReturnTemp",
    description: "Return Air Temperature",
    descriptionFull: "Return Air Temperature",
    pointType: "NTC 10K (In)",
    partNumber: "PN-1009",
    location: "CHW-L13-01",
    status: "",
    statusFilled: 3,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-012",
    ioModule: "15_DIV16",
    channel: "DI12",
    point: "EfL13Iso25B_Trip",
    description: "Motor Trip Feedback",
    descriptionFull: "Motor Trip Feedback",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1010",
    location: "MCC-L13-06FE",
    status: "",
    statusFilled: 0,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-003",
    ioModule: "10_AIV8",
    channel: "AI1",
    point: "EfL13Iso25B_TempSens",
    description: "Temperature Sensor Input",
    descriptionFull: "Temperature Sensor Input",
    pointType: "0-10 VDC (In)",
    partNumber: "PN-1001",
    location: "MCC-L13-03FE",
    status: "",
    statusFilled: 2,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-004",
    ioModule: "11_DIV16",
    channel: "DI5",
    point: "EfL13Iso25B_RunFb",
    description: "Run Feedback",
    descriptionFull: "Run Feedback",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1002",
    location: "MCC-L13-04FE",
    status: "",
    statusFilled: 4,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-005",
    ioModule: "11_DOV8",
    channel: "DO3",
    point: "EfL13Iso25B_StartCmd",
    description: "Start Command Output",
    descriptionFull: "Start Command Output",
    pointType: "Dry Contact (Out)",
    partNumber: "PN-1003",
    location: "MCC-L13-05FE",
    status: "",
    statusFilled: 1,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-006",
    ioModule: "12_AOV8",
    channel: "AO2",
    point: "EfL13Iso25B_DmprPos",
    description: "Damper Position Control",
    descriptionFull: "Damper Position Control",
    pointType: "0-10 VDC (Out)",
    partNumber: "PN-1004",
    location: "AHU-L13-01",
    status: "",
    statusFilled: 5,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-007",
    ioModule: "12_AIV8",
    channel: "AI6",
    point: "EfL13Iso25B_Pressure",
    description: "Static Pressure Input",
    descriptionFull: "Static Pressure Input",
    pointType: "4-20 mA (In)",
    partNumber: "PN-1005",
    location: "AHU-L13-01",
    status: "",
    statusFilled: 3,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-008",
    ioModule: "13_DIV16",
    channel: "DI9",
    point: "EfL13Iso25B_FilterAlarm",
    description: "Filter Differential Alarm",
    descriptionFull: "Filter Differential Alarm",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1006",
    location: "AHU-L13-02",
    status: "",
    statusFilled: 2,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-009",
    ioModule: "13_DOV8",
    channel: "DO1",
    point: "EfL13Iso25B_Reset",
    description: "Alarm Reset Output",
    descriptionFull: "Alarm Reset Output",
    pointType: "Dry Contact (Out)",
    partNumber: "PN-1007",
    location: "AHU-L13-02",
    status: "",
    statusFilled: 4,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-010",
    ioModule: "14_AOV8",
    channel: "AO4",
    point: "EfL13Iso25B_ValveCtl",
    description: "Valve Modulation Control",
    descriptionFull: "Valve Modulation Control",
    pointType: "0-10 VDC (Out)",
    partNumber: "PN-1008",
    location: "CHW-L13-01",
    status: "",
    statusFilled: 1,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-011",
    ioModule: "14_AIV8",
    channel: "AI7",
    point: "EfL13Iso25B_ReturnTemp",
    description: "Return Air Temperature",
    descriptionFull: "Return Air Temperature",
    pointType: "NTC 10K (In)",
    partNumber: "PN-1009",
    location: "CHW-L13-01",
    status: "",
    statusFilled: 3,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-012",
    ioModule: "15_DIV16",
    channel: "DI12",
    point: "EfL13Iso25B_Trip",
    description: "Motor Trip Feedback",
    descriptionFull: "Motor Trip Feedback",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1010",
    location: "MCC-L13-06FE",
    status: "",
    statusFilled: 0,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-003",
    ioModule: "10_AIV8",
    channel: "AI1",
    point: "EfL13Iso25B_TempSens",
    description: "Temperature Sensor Input",
    descriptionFull: "Temperature Sensor Input",
    pointType: "0-10 VDC (In)",
    partNumber: "PN-1001",
    location: "MCC-L13-03FE",
    status: "",
    statusFilled: 2,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-004",
    ioModule: "11_DIV16",
    channel: "DI5",
    point: "EfL13Iso25B_RunFb",
    description: "Run Feedback",
    descriptionFull: "Run Feedback",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1002",
    location: "MCC-L13-04FE",
    status: "",
    statusFilled: 4,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-005",
    ioModule: "11_DOV8",
    channel: "DO3",
    point: "EfL13Iso25B_StartCmd",
    description: "Start Command Output",
    descriptionFull: "Start Command Output",
    pointType: "Dry Contact (Out)",
    partNumber: "PN-1003",
    location: "MCC-L13-05FE",
    status: "",
    statusFilled: 1,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-006",
    ioModule: "12_AOV8",
    channel: "AO2",
    point: "EfL13Iso25B_DmprPos",
    description: "Damper Position Control",
    descriptionFull: "Damper Position Control",
    pointType: "0-10 VDC (Out)",
    partNumber: "PN-1004",
    location: "AHU-L13-01",
    status: "",
    statusFilled: 5,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-007",
    ioModule: "12_AIV8",
    channel: "AI6",
    point: "EfL13Iso25B_Pressure",
    description: "Static Pressure Input",
    descriptionFull: "Static Pressure Input",
    pointType: "4-20 mA (In)",
    partNumber: "PN-1005",
    location: "AHU-L13-01",
    status: "",
    statusFilled: 3,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-008",
    ioModule: "13_DIV16",
    channel: "DI9",
    point: "EfL13Iso25B_FilterAlarm",
    description: "Filter Differential Alarm",
    descriptionFull: "Filter Differential Alarm",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1006",
    location: "AHU-L13-02",
    status: "",
    statusFilled: 2,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-009",
    ioModule: "13_DOV8",
    channel: "DO1",
    point: "EfL13Iso25B_Reset",
    description: "Alarm Reset Output",
    descriptionFull: "Alarm Reset Output",
    pointType: "Dry Contact (Out)",
    partNumber: "PN-1007",
    location: "AHU-L13-02",
    status: "",
    statusFilled: 4,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-010",
    ioModule: "14_AOV8",
    channel: "AO4",
    point: "EfL13Iso25B_ValveCtl",
    description: "Valve Modulation Control",
    descriptionFull: "Valve Modulation Control",
    pointType: "0-10 VDC (Out)",
    partNumber: "PN-1008",
    location: "CHW-L13-01",
    status: "",
    statusFilled: 1,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-011",
    ioModule: "14_AIV8",
    channel: "AI7",
    point: "EfL13Iso25B_ReturnTemp",
    description: "Return Air Temperature",
    descriptionFull: "Return Air Temperature",
    pointType: "NTC 10K (In)",
    partNumber: "PN-1009",
    location: "CHW-L13-01",
    status: "",
    statusFilled: 3,
    action: "Commission",
  },
  {
    controller: "CASB-BMS-L13-012",
    ioModule: "15_DIV16",
    channel: "DI12",
    point: "EfL13Iso25B_Trip",
    description: "Motor Trip Feedback",
    descriptionFull: "Motor Trip Feedback",
    pointType: "Dry Contact (In)",
    partNumber: "PN-1010",
    location: "MCC-L13-06FE",
    status: "",
    statusFilled: 0,
    action: "Commission",
  },
];

window.pointsRowData = pointsRowData;

document.addEventListener("DOMContentLoaded", function () {
  const gridDiv = document.querySelector("#myGrid");
  const searchField = document.querySelector("#searchField");
  const gridCommon = window.ImpactGridCommon || {
    isMobileViewport: () => window.innerWidth <= 767,
    getResponsivePageSize: (mobilePageSize, desktopPageSize) =>
      window.innerWidth <= 767 ? mobilePageSize : desktopPageSize,
    createGrid: (gridElement, gridOptions) =>
      window.agGrid && typeof window.agGrid.createGrid === "function"
        ? window.agGrid.createGrid(gridElement, gridOptions)
        : null,
    setPaginationPageSize: (gridApi, mobilePageSize, desktopPageSize) => {
      if (gridApi && typeof gridApi.paginationSetPageSize === "function") {
        gridApi.paginationSetPageSize(window.innerWidth <= 767 ? mobilePageSize : desktopPageSize);
      }
    },
    syncColumnPinnedState: (gridApi, colId, desktopPinned = "left") => {
      if (gridApi && typeof gridApi.applyColumnState === "function") {
        gridApi.applyColumnState({
          state: [
            {
              colId,
              pinned: window.innerWidth <= 767 ? null : desktopPinned,
            },
          ],
          applyOrder: false,
        });
      }
    },
  };

  const getResponsivePageSize = () => gridCommon.getResponsivePageSize(10, 20);

  const columnDefs = [
    {
      headerName: "Controller",
      field: "controller",
      minWidth: 170,
      cellStyle: { fontWeight: "600" },
      cellRenderer: (params) =>
        `<a class="ag-grid-column-nav-link" href="controller-points.html">${params.value}</a>`,
    },
    { headerName: "IO Module", field: "ioModule", minWidth: 100, maxWidth: 150 },
    { headerName: "Channel", field: "channel", minWidth: 90, maxWidth: 150 },
    { headerName: "Point", field: "point", minWidth: 160 },
    {
      headerName: "Description",
      field: "description",
      minWidth: 200,
      tooltipField: "descriptionFull",
      cellRenderer: (params) => {
        const full = params.data.descriptionFull || params.value;
        const shortText = params.value || "";
        return `<span title="${full}">${shortText}</span>`;
      },
    },
    { headerName: "Point Type", field: "pointType", minWidth: 120, maxWidth: 150 },
    { headerName: "Part Number", field: "partNumber", minWidth: 110, maxWidth: 150 },
    { headerName: "Location", field: "location", minWidth: 130, maxWidth: 140 },
    {
      headerName: "Status",
      field: "status",
      minWidth: 90,
      cellRenderer: (params) => {
        const totalChecks = 5;
        const filledChecks = Number(params.data.statusFilled || 0);
        const safeFilled = Math.max(0, Math.min(totalChecks, filledChecks));
        const percent = Math.round((safeFilled / totalChecks) * 100);
        let segments = "";

        for (let i = 0; i < totalChecks; i++) {
          const isFilled = i < safeFilled;
          segments += `<span class="status-segment ${isFilled ? "is-filled" : ""}"></span>`;
        }

        const stateClass =
          safeFilled === totalChecks
            ? "is-complete"
            : safeFilled === 0
            ? "is-empty"
            : "is-progress";

        return `
          <div class="status-cell ${stateClass}" title="${safeFilled}/${totalChecks} checks completed">
            <div class="status-segments">${segments}</div>
          </div>
        `;
      },
    },
    {
      headerName: "",
      field: "action",
      minWidth: 100,
      maxWidth: 150,
      cellRenderer: (params) =>
        `<a class="commission-link" href="CommissionPoint.html">Commission</a>`,
    },
    {
      headerName: "Actions",
      field: "actions",
      minWidth: 100,
      maxWidth: 120,
      width: 180,
      pinned: "right",
      lockPinned: true,
      suppressMovable: true,
      sortable: false,
      filter: false,
      cellRenderer: (params) => {
        const pointName = encodeURIComponent(params.data.point || "");
        const controllerName = encodeURIComponent(params.data.controller || "");

        return `
          <div class="ag-grid-table-actions-columns">
            <a href="ControllerPointsAddEdit.html" title="Edit" aria-label="Edit point">
              <img src="assets/icons/edit.svg" alt="Edit"  />
            </a>
            <a href="#"  title="Delete" aria-label="Delete point">
              <img src="assets/icons/delete.svg" alt="Delete" />
            </a>
            <a href="RaiseIssue.html" title="Raise issue" aria-label="Raise issue">
              <img src="assets/icons/issue.svg" alt=""  aria-hidden="true" />
            </a>
          </div>
        `;
      },
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
    rowData: pointsRowData,
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
    flexwidth: 1,
  };

  let currentFilteredData = [...pointsRowData];
  let gridApi = null;

  const emitFilteredRows = (rows) => {
    document.dispatchEvent(
      new CustomEvent("points:filtered", {
        detail: { rows: rows || [] },
      })
    );
  };

  const ensureGridForViewport = () => {
    if (!gridDiv) {
      return;
    }

    if (!gridApi) {
      gridOptions.rowData = currentFilteredData;
      gridApi = gridCommon.createGrid(gridDiv, gridOptions);
    }
  };

  const updateStats = () => {
    const total = 284;
    const complete = 9;
    const incomplete = 28;

    const completePct = total > 0 ? Math.round((complete / total) * 100) : 0;
    const incompletePct = total > 0 ? Math.round((incomplete / total) * 100) : 0;

    const completeVal = document.querySelector(".compact-stat-badge.complete .compact-stat-value");
    const completeMeta = document.querySelector(".compact-stat-badge.complete .compact-stat-meta");
    const installedVal = document.querySelector(".compact-stat-badge.installed .compact-stat-value");
    const installedMeta = document.querySelector(".compact-stat-badge.installed .compact-stat-meta");
    const completeBadge = document.querySelector(".compact-stat-badge.complete");
    const incompleteBadge = document.querySelector(".compact-stat-badge.installed");

    if (completeVal) completeVal.textContent = `${completePct}%`;
    if (completeMeta) completeMeta.textContent = `(${complete}/${total})`;
    if (installedVal) installedVal.textContent = `${incompletePct}%`;
    if (installedMeta) installedMeta.textContent = `(${incomplete}/${total})`;
    if (completeBadge) completeBadge.style.setProperty("--stat-progress", `${completePct}%`);
    if (incompleteBadge) incompleteBadge.style.setProperty("--stat-progress", `${incompletePct}%`);
  };

  const syncResponsiveState = () => {
    ensureGridForViewport();
    gridCommon.syncColumnPinnedState(gridApi, "controller", "left");
    gridCommon.syncColumnPinnedState(gridApi, "actions", "right");
    gridCommon.setPaginationPageSize(gridApi, 10, 20);
  };

  const applyFilters = () => {
    const levelDropdownBtn = document.querySelector("#levelDropdownBtn");
    const customFilterBtn = document.querySelector("#customFilterBtn");
    const customFilterCountBadge = document.querySelector("#customFilterCountBadge");
    const resetBtn = document.querySelector("#resetMilestoneFiltersBtn");
    const activeLevel = document.querySelector(".level-option.active")?.getAttribute("data-level") || "all";
    const searchText = searchField?.value.toLowerCase() || "";
    const cableVal = document.querySelector("#filterCableBtn")?.getAttribute("data-val") || "all";
    const panelVal = document.querySelector("#filterPanelBtn")?.getAttribute("data-val") || "all";
    const deviceVal = document.querySelector("#filterDeviceBtn")?.getAttribute("data-val") || "all";
    const commAVal = document.querySelector("#filterCommABtn")?.getAttribute("data-val") || "all";
    const commBVal = document.querySelector("#filterCommBBtn")?.getAttribute("data-val") || "all";

    const activeFilterCount = [activeLevel, cableVal, panelVal, deviceVal, commAVal, commBVal].filter(
      (value) => value !== "all"
    ).length;
    const hasActiveFilters = activeFilterCount > 0;

    if (customFilterBtn) {
      customFilterBtn.classList.toggle("has-active-filters", hasActiveFilters);
    }

    if (customFilterCountBadge) {
      customFilterCountBadge.textContent = String(activeFilterCount);
    }

    if (resetBtn) {
      resetBtn.style.display = hasActiveFilters ? "inline-flex" : "none";
    }

    let filteredData = [...pointsRowData];

    if (activeLevel === "high") {
      filteredData = filteredData.filter((row) => {
        const channelNum = parseInt(row.channel.replace(/\D/g, ""), 10) || 0;
        return channelNum < 8;
      });
    } else if (activeLevel === "low") {
      filteredData = filteredData.filter((row) => {
        const channelNum = parseInt(row.channel.replace(/\D/g, ""), 10) || 0;
        return channelNum >= 8;
      });
    }

    if (cableVal === "completed") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) >= 1);
    } else if (cableVal === "incompleted") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) < 1);
    }

    if (panelVal === "completed") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) >= 2);
    } else if (panelVal === "incompleted") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) < 2);
    }

    if (deviceVal === "completed") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) >= 3);
    } else if (deviceVal === "incompleted") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) < 3);
    }

    if (commAVal === "completed") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) >= 4);
    } else if (commAVal === "incompleted") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) < 4);
    }

    if (commBVal === "completed") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) >= 5);
    } else if (commBVal === "incompleted") {
      filteredData = filteredData.filter((row) => Number(row.statusFilled || 0) < 5);
    }

    if (searchText) {
      filteredData = filteredData.filter((row) => {
        return Object.values(row).some((value) => String(value).toLowerCase().includes(searchText));
      });
    }

    currentFilteredData = filteredData;

    if (gridApi && typeof gridApi.setGridOption === "function") {
      gridApi.setGridOption("rowData", filteredData);
    }

    emitFilteredRows(filteredData);
    updateStats();
  };

  const levelDropdownBtn = document.querySelector("#levelDropdownBtn");
  const levelOptions = document.querySelectorAll(".level-option");
  const customFilterBtn = document.querySelector("#customFilterBtn");
  const customFilterRow = document.querySelector("#customFilterRow");
  const mobileFilterBackdrop = document.querySelector("#mobileFilterBackdrop");
  const mobileFilterCloseBtn = document.querySelector("#mobileFilterCloseBtn");
  const mobileFilterSubmitBtn = document.querySelector("#mobileFilterSubmitBtn");
  const statusFilterOptions = document.querySelectorAll(".status-filter-option");

  const isMobileFilterViewport = () => window.innerWidth <= 767;

  const openMobileFilterDrawer = () => {
    if (!customFilterRow || !customFilterBtn) {
      return;
    }

    customFilterRow.style.display = "block";
    customFilterRow.classList.add("mobile-open");
    customFilterRow.setAttribute("aria-hidden", "false");
    customFilterBtn.classList.add("is-open");
    customFilterBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("mobile-filter-open");

    if (mobileFilterBackdrop) {
      mobileFilterBackdrop.classList.add("is-open");
      mobileFilterBackdrop.setAttribute("aria-hidden", "false");
    }
  };

  const closeMobileFilterDrawer = () => {
    if (!customFilterRow || !customFilterBtn) {
      return;
    }

    customFilterRow.classList.remove("mobile-open");
    customFilterRow.setAttribute("aria-hidden", "true");
    customFilterBtn.classList.remove("is-open");
    customFilterBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-filter-open");

    if (mobileFilterBackdrop) {
      mobileFilterBackdrop.classList.remove("is-open");
      mobileFilterBackdrop.setAttribute("aria-hidden", "true");
    }

    window.setTimeout(() => {
      if (customFilterRow && isMobileFilterViewport() && !customFilterRow.classList.contains("mobile-open")) {
        customFilterRow.style.display = "block";
      }
    }, 300);
  };

  const syncFilterLayoutMode = () => {
    if (!customFilterRow || !customFilterBtn) {
      return;
    }

    if (isMobileFilterViewport()) {
      customFilterRow.style.display = "block";
      customFilterRow.classList.remove("mobile-open");
      customFilterRow.setAttribute("aria-hidden", "true");
      customFilterBtn.classList.remove("is-open");
      customFilterBtn.setAttribute("aria-expanded", "false");

      if (mobileFilterBackdrop) {
        mobileFilterBackdrop.classList.remove("is-open");
        mobileFilterBackdrop.setAttribute("aria-hidden", "true");
      }

      document.body.classList.remove("mobile-filter-open");
      return;
    }

    customFilterRow.classList.remove("mobile-open");
    customFilterRow.style.display = "none";
    customFilterRow.setAttribute("aria-hidden", "true");
    customFilterBtn.classList.remove("is-open");
    customFilterBtn.setAttribute("aria-expanded", "false");

    if (mobileFilterBackdrop) {
      mobileFilterBackdrop.classList.remove("is-open");
      mobileFilterBackdrop.setAttribute("aria-hidden", "true");
    }

    document.body.classList.remove("mobile-filter-open");
  };

  if (window.jQuery && window.jQuery.fn && typeof window.jQuery.fn.dropdown === "function") {
    if (levelDropdownBtn) window.jQuery("#levelDropdownBtn").dropdown();
    window.jQuery("#filterCableBtn").dropdown();
    window.jQuery("#filterPanelBtn").dropdown();
    window.jQuery("#filterDeviceBtn").dropdown();
    window.jQuery("#filterCommABtn").dropdown();
    window.jQuery("#filterCommBBtn").dropdown();
  }

  if (customFilterBtn && customFilterRow) {
    customFilterBtn.addEventListener("click", function () {
      if (isMobileFilterViewport()) {
        const isDrawerOpen = customFilterRow.classList.contains("mobile-open");

        if (isDrawerOpen) {
          closeMobileFilterDrawer();
        } else {
          openMobileFilterDrawer();
        }

        return;
      }

      const isOpening = customFilterRow.style.display === "none";

      customFilterRow.style.display = isOpening ? "block" : "none";
      customFilterRow.setAttribute("aria-hidden", String(!isOpening));
      customFilterBtn.classList.toggle("is-open", isOpening);
      customFilterBtn.setAttribute("aria-expanded", String(isOpening));
    });
  }

  if (mobileFilterBackdrop) {
    mobileFilterBackdrop.addEventListener("click", closeMobileFilterDrawer);
  }

  if (mobileFilterCloseBtn) {
    mobileFilterCloseBtn.addEventListener("click", closeMobileFilterDrawer);
  }

  if (mobileFilterSubmitBtn) {
    mobileFilterSubmitBtn.addEventListener("click", () => {
      applyFilters();

      if (isMobileFilterViewport()) {
        closeMobileFilterDrawer();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && customFilterRow?.classList.contains("mobile-open")) {
      closeMobileFilterDrawer();
    }
  });

  const resetBtn = document.querySelector("#resetMilestoneFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      const milestoneIds = ["Cable", "Panel", "Device", "CommA", "CommB"];
      milestoneIds.forEach((id) => {
        const btn = document.querySelector(`#filter${id}Btn`);
        if (btn) {
          btn.setAttribute("data-val", "all");
          btn.innerHTML = `All <span class="caret"></span>`;
          btn.style.borderColor = "";
          btn.style.color = "";
          btn.style.backgroundColor = "";
        }
      });

      document.querySelectorAll(".status-filter-option").forEach((opt) => {
        if (opt.getAttribute("data-val") === "all") {
          opt.classList.add("active");
        } else {
          opt.classList.remove("active");
        }
      });

      applyFilters();
    });
  }

  levelOptions.forEach((option) => {
    option.addEventListener("click", function (event) {
      event.preventDefault();
      levelOptions.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      const selectedLevel = this.getAttribute("data-level");
      const selectedLabel = this.textContent.trim();

      if (levelDropdownBtn) {
        levelDropdownBtn.setAttribute("data-level", selectedLevel);
        levelDropdownBtn.innerHTML = `${selectedLabel} <span class="caret"></span>`;
      }

      applyFilters();
    });
  });

  statusFilterOptions.forEach((option) => {
    option.addEventListener("click", function (event) {
      event.preventDefault();

      const parentUl = this.closest(".dropdown-menu");
      const optionsInMenu = parentUl.querySelectorAll(".status-filter-option");
      optionsInMenu.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      const filterType = this.getAttribute("data-filter");
      const selectedVal = this.getAttribute("data-val");
      const selectedLabel = this.textContent.trim();

      let btnId = "";
      if (filterType === "cable") {
        btnId = "#filterCableBtn";
      } else if (filterType === "panel") {
        btnId = "#filterPanelBtn";
      } else if (filterType === "device") {
        btnId = "#filterDeviceBtn";
      } else if (filterType === "commA") {
        btnId = "#filterCommABtn";
      } else if (filterType === "commB") {
        btnId = "#filterCommBBtn";
      }

      const btn = document.querySelector(btnId);
      if (btn) {
        btn.setAttribute("data-val", selectedVal);
        btn.innerHTML = `${selectedLabel} <span class="caret"></span>`;

        if (selectedVal !== "all") {
          btn.style.borderColor = "#3dcd58";
          btn.style.color = "#166534";
          btn.style.backgroundColor = "#f0fdf4";
        } else {
          btn.style.borderColor = "";
          btn.style.color = "";
          btn.style.backgroundColor = "";
        }
      }

      applyFilters();
    });
  });

  if (searchField) {
    searchField.addEventListener("input", applyFilters);
  }

  syncResponsiveState();
  syncFilterLayoutMode();
  updateStats();
  emitFilteredRows(currentFilteredData);

  window.addEventListener("resize", () => {
    syncResponsiveState();
    syncFilterLayoutMode();
  });
});
