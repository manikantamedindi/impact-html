// Issues List - Row Data and AG Grid Initialization

const issuesRowData = [
  {
    type: "Other",
    tags: "CASB-BMS-L13-002 :05_UI16 :UI11 :EfL13Iso25B_EaDmpFbOpen",
    openDate: "2026-04-18",
    description: "Panel terminations do not match approved diagram revision.",
    raisedBy: "John Doe",
    assignedTo: "Jane Smith",
    photos: 4,
  },
  {
    type: "Programming Issue",
    tags: "AHU01-ASP",
    openDate: "2026-04-21",
    description: "Controller intermittently drops from network during commissioning.",
    raisedBy: "Jane Smith",
    assignedTo: "Alex Chen",
    photos: 2,
  },
  {
    type: "Component Failure",
    tags: "CASB-BMS-L13-002 :05_UI16 :UI11 :EfL13Iso25B_EaDmpFbOpen",
    openDate: "2026-04-23",
    description: "Damper actuator stroke is out of range and needs recalibration.",
    raisedBy: "Alex Chen",
    assignedTo: "John Doe",
    photos: 1,
  },
  {
    type: "Other",
    tags: "AHU01-ASP",
    openDate: "2026-04-26",
    description: "As-built package is missing final point naming schedule.",
    raisedBy: "John Doe",
    assignedTo: "Unassigned",
    photos: 0,
  },
  {
    type: "Programming Issue",
    tags: "CASB-BMS-L13-002 :05_UI16 :UI11 :EfL13Iso25B_EaDmpFbOpen",
    openDate: "2026-04-29",
    description: "No power at controller panel after maintenance shutdown.",
    raisedBy: "Jane Smith",
    assignedTo: "John Doe",
    photos: 3,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const gridDiv = document.querySelector("#myGrid");
  const searchField = document.querySelector("#searchField");
  const assignedToFilter = document.querySelector("#assignedToFilter");
  const raiseIssueBtn = document.querySelector("#raiseIssueBtn");

  const getResponsivePageSize = () => (window.innerWidth <= 767 ? 8 : 14);

  const columnDefs = [
    {
      headerName: "Type",
      field: "type",
      minWidth: 125,
    },
    {
      headerName: "Tags",
      field: "tags",
      minWidth: 300,
    },
    {
      headerName: "Open Date",
      field: "openDate",
      minWidth: 125,
      valueFormatter: (params) => {
        const raw = params.value || "";
        if (!raw) {
          return "";
        }

        const dateObj = new Date(raw);
        if (Number.isNaN(dateObj.getTime())) {
          return raw;
        }

        return dateObj.toLocaleDateString("en-GB");
      },
    },
    {
      headerName: "Description",
      field: "description",
      minWidth: 300,
      flex: 1,
      tooltipField: "description",
    },
    {
      headerName: "Raised By",
      field: "raisedBy",
      minWidth: 130,
    },
    {
      headerName: "Photos",
      field: "photos",
      minWidth: 110,
      cellRenderer: (params) => `
        <span class="issues-photo-count" title="${params.value} photo(s)">
          <span class="glyphicon glyphicon-camera" aria-hidden="true"></span>
          ${params.value}
        </span>
      `,
    },
    {
      headerName: "Actions",
      field: "actions",
      minWidth: 120,
      width: 120,
      maxWidth: 120,
      pinned: "right",
      lockPinned: true,
      suppressMovable: true,
      sortable: false,
      filter: false,
      cellRenderer: () => {
        return `
          <div class="issues-action-wrap">
            <a href="#" class="issues-action-icon" title="Edit" aria-label="Edit issue">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </a>
            <a href="#" class="issues-action-icon" title="View" aria-label="View issue">
              <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
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
    columnDefs: columnDefs,
    rowData: issuesRowData,
    suppressHorizontalScroll: false,
    suppressScrollOnNewData: true,
    pagination: true,
    paginationPageSize: getResponsivePageSize(),
    rowHeight: 40,
  };

  const gridApi = agGrid.createGrid(gridDiv, gridOptions);

  const applyFilters = () => {
    const searchText = (searchField?.value || "").trim().toLowerCase();
    const selectedAssignee = (assignedToFilter?.value || "all").toLowerCase();

    const filteredRows = issuesRowData.filter((row) => {
      const rowAssigned = String(row.assignedTo || "").toLowerCase();

      const matchesAssignee = selectedAssignee === "all" || rowAssigned === selectedAssignee;

      const searchableText = [
        row.type,
        row.description,
        row.raisedBy,
        row.assignedTo,
        row.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !searchText || searchableText.includes(searchText);

      return matchesAssignee && matchesSearch;
    });

    gridApi.setGridOption("rowData", filteredRows);
  };

  if (searchField) {
    searchField.addEventListener("input", applyFilters);
  }

  if (assignedToFilter) {
    assignedToFilter.addEventListener("change", applyFilters);
  }

  if (raiseIssueBtn) {
    raiseIssueBtn.addEventListener("click", function () {
      window.open("RaiseIssue.html", "_blank");
    });
  }

  window.addEventListener("resize", function () {
    if (gridApi && typeof gridApi.paginationSetPageSize === "function") {
      gridApi.paginationSetPageSize(getResponsivePageSize());
    }
  });
});
