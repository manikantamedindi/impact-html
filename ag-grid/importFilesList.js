// Import Files List - Row Data
const pointsRowData = [
    {
        fileName: "CommissioningData_2026.xlsx",
        size: "2.45 MB",
        createdDate: "2026-05-10",
        modifiedDate: "2026-05-15",
        action: "Download",
    },
    {
        fileName: "CommissioningData_2026.xlsx",
        size: "2.45 MB",
        createdDate: "2026-05-10",
        modifiedDate: "2026-05-15",
        action: "Download",
    },
    {
        fileName: "ControllerConfiguration_v2.xlsx",
        size: "1.82 MB",
        createdDate: "2026-05-08",
        modifiedDate: "2026-05-14",
        action: "Download",
    },
    {
        fileName: "IOPoints_Master.xlsx",
        size: "3.15 MB",
        createdDate: "2026-05-05",
        modifiedDate: "2026-05-12",
        action: "Download",
    },
    {
        fileName: "IssuesLog_2026.xlsx",
        size: "0.95 MB",
        createdDate: "2026-04-30",
        modifiedDate: "2026-05-11",
        action: "Download",
    },
    {
        fileName: "ProjectMetadata.xlsx",
        size: "1.23 MB",
        createdDate: "2026-04-25",
        modifiedDate: "2026-05-09",
        action: "Download",
    },
    {
        fileName: "WireTags_Documentation.xlsx",
        size: "2.67 MB",
        createdDate: "2026-04-20",
        modifiedDate: "2026-05-07",
        action: "Download",
    },
    {
        fileName: "BackupData_Archive.xlsx",
        size: "5.43 MB",
        createdDate: "2026-04-15",
        modifiedDate: "2026-05-03",
        action: "Download",
    },
    {
        fileName: "TrendData_Reports.xlsx",
        size: "4.12 MB",
        createdDate: "2026-04-10",
        modifiedDate: "2026-04-28",
        action: "Download",
    },
    {
        fileName: "DeviceCalibration.xlsx",
        size: "1.56 MB",
        createdDate: "2026-04-05",
        modifiedDate: "2026-04-25",
        action: "Download",
    },
    {
        fileName: "MaintenanceSchedule_Q2.xlsx",
        size: "0.78 MB",
        createdDate: "2026-03-30",
        modifiedDate: "2026-04-20",
        action: "Download",
    },
    {
        fileName: "CommissioningData_Backup.xlsx",
        size: "2.45 MB",
        createdDate: "2026-03-25",
        modifiedDate: "2026-04-15",
        action: "Download",
    },
    {
        fileName: "SystemLogs_2026.xlsx",
        size: "3.88 MB",
        createdDate: "2026-03-20",
        modifiedDate: "2026-04-10",
        action: "Download",
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
            headerName: "File Name",
            field: "fileName",
            flex: 1,
            minWidth: 200,
            cellStyle: { fontWeight: "600" },
            cellRenderer: (params) => `<a href="#" target="_blank" style="color: #337ab7; text-decoration: none; font-weight: 600;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${params.value}</a>`,
        },
        { headerName: "Size", field: "size", flex: 0.8, minWidth: 100,  maxWidth: 200, },
        { headerName: "Created Date", field: "createdDate", flex: 1, minWidth: 120,  maxWidth: 200, },
        { headerName: "Modified Date", field: "modifiedDate", flex: 1, minWidth: 120,  maxWidth: 200, },
        {
            headerName: "Actions",
            field: "action",
            flex: 0.6,
            minWidth: 100,
            maxWidth: 160,
            cellRenderer: (params) =>
                `<div class="ag-grid-table-actions-columns">
                    <a href="#" title="Download Excel" aria-label="Download Excel">
                        <img src="/assets/icons/excel.svg" alt="Download Excel" />
                    </a>
                    <a href="#" title="Delete" aria-label="Delete">
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
        const total = 12;
        const completed = 12;

        const completePct = total > 0 ? Math.round((completed / total) * 100) : 0;

        const completeVal = document.querySelector(".compact-stat-badge.complete .compact-stat-value");
        const completeMeta = document.querySelector(".compact-stat-badge.complete .compact-stat-meta");
        const completeBadge = document.querySelector(".compact-stat-badge.complete");

        if (completeVal) completeVal.textContent = `${completePct}%`;
        if (completeMeta) completeMeta.textContent = `(${completed}/${total})`;
        if (completeBadge) completeBadge.style.setProperty("--stat-progress", `${completePct}%`);
    };

    const syncResponsiveState = () => {
        ensureGridForViewport();
        gridCommon.syncColumnPinnedState(gridApi, "controller", "left");
        gridCommon.setPaginationPageSize(gridApi, 10, 20);
    };

    const applyFilters = () => {
        const searchText = searchField?.value.toLowerCase() || "";

        let filteredData = [...pointsRowData];

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
    const statusFilterOptions = document.querySelectorAll(".status-filter-option");

    const isMobileFilterViewport = () => window.innerWidth <= 767;

    if (window.jQuery && window.jQuery.fn && typeof window.jQuery.fn.dropdown === "function") {
        if (levelDropdownBtn) window.jQuery("#levelDropdownBtn").dropdown();
    }

    if (searchField) {
        searchField.addEventListener("input", applyFilters);
    }

    // Upload Modal Functionality
    const uploadBtnMain = document.querySelector("#uploadBtnMain");
    const uploadModal = document.querySelector("#uploadModal");
    const closeUploadModal = document.querySelector("#closeUploadModal");
    const cancelUploadModal = document.querySelector("#cancelUploadModal");
    const modalFileInput = document.querySelector("#modalFileInput");
    const dragDropArea = document.querySelector("#dragDropArea");
    const filesList = document.querySelector("#filesList");
    const filesContainer = document.querySelector("#filesContainer");
    const uploadFilesBtn = document.querySelector("#uploadFilesBtn");
    let selectedFiles = [];

    function formatFileSize(bytes) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
    }

    function isValidFileType(fileName) {
        const validExtensions = [".pdf", ".txt", ".xlsx", ".xls", ".xml"];
        const fileExt = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
        return validExtensions.includes(fileExt);
    }

    function isValidFileSize(fileSize) {
        const maxSize = 10 * 1024 * 1024; // 10MB
        return fileSize <= maxSize;
    }

    function openUploadModal() {
        uploadModal.style.display = "flex";
        selectedFiles = [];
        filesContainer.innerHTML = "";
        filesList.style.display = "none";
        modalFileInput.value = "";
    }

    function closeUploadModalFunc() {
        uploadModal.style.display = "none";
        selectedFiles = [];
        filesContainer.innerHTML = "";
        filesList.style.display = "none";
        modalFileInput.value = "";
    }

    function renderFilesList() {
        filesContainer.innerHTML = "";
        
        selectedFiles.forEach((file, index) => {
            const fileItem = document.createElement("div");
            fileItem.style.cssText = "display: flex; align-items: flex-start; gap: 12px; padding: 12px; background-color: #f8f9fa; border-radius: 6px; border: 1px solid #e9ecef;";
            
            const iconSvg = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
            `;
            
            const fileInfo = document.createElement("div");
            fileInfo.style.cssText = "flex: 1; min-width: 0;";
            
            const fileName = document.createElement("p");
            fileName.style.cssText = "margin: 0 0 8px; font-size: 13px; font-weight: 600; color: #212529; word-break: break-word;";
            fileName.textContent = file.name;
            
            const fileSize = document.createElement("p");
            fileSize.style.cssText = "margin: 0 0 8px; font-size: 12px; color: #6c757d;";
            fileSize.textContent = formatFileSize(file.size);
            
            const progressContainer = document.createElement("div");
            progressContainer.style.cssText = "height: 6px; background-color: #e9ecef; border-radius: 3px; overflow: hidden;";
            
            const progressBar = document.createElement("div");
            progressBar.className = "progress-bar";
            progressBar.style.cssText = "height: 100%; background-color: #007bff; width: 0%; transition: width 0.3s ease;";
            progressBar.dataset.fileIndex = index;
            
            progressContainer.appendChild(progressBar);
            
            fileInfo.appendChild(fileName);
            fileInfo.appendChild(fileSize);
            fileInfo.appendChild(progressContainer);
            
            fileItem.innerHTML = iconSvg;
            fileItem.appendChild(fileInfo);
            
            const removeBtn = document.createElement("button");
            removeBtn.style.cssText = "background: none; border: none; color: #dc3545; cursor: pointer; padding: 4px; font-size: 18px; line-height: 1; flex-shrink: 0;";
            removeBtn.innerHTML = "×";
            removeBtn.addEventListener("click", () => {
                selectedFiles.splice(index, 1);
                renderFilesList();
            });
            
            fileItem.appendChild(removeBtn);
            filesContainer.appendChild(fileItem);
        });
        
        if (selectedFiles.length > 0) {
            filesList.style.display = "block";
        } else {
            filesList.style.display = "none";
        }
    }

    function handleFiles(files) {
        for (let file of files) {
            if (!isValidFileType(file.name)) {
                alert(`Invalid file type: ${file.name}. Supported types: PDF, TXT, Excel, XML`);
                continue;
            }
            if (!isValidFileSize(file.size)) {
                alert(`File too large: ${file.name}. Maximum size: 10MB`);
                continue;
            }
            selectedFiles.push(file);
        }
        renderFilesList();
    }

    uploadBtnMain.addEventListener("click", openUploadModal);

    closeUploadModal.addEventListener("click", closeUploadModalFunc);
    cancelUploadModal.addEventListener("click", closeUploadModalFunc);

    uploadModal.addEventListener("click", function (e) {
        if (e.target === uploadModal) {
            closeUploadModalFunc();
        }
    });

    dragDropArea.addEventListener("click", () => {
        modalFileInput.click();
    });

    modalFileInput.addEventListener("change", (e) => {
        handleFiles(e.target.files);
    });

    dragDropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.stopPropagation();
        dragDropArea.style.borderColor = "#007bff";
        dragDropArea.style.backgroundColor = "#e7f1ff";
    });

    dragDropArea.addEventListener("dragleave", (e) => {
        e.preventDefault();
        e.stopPropagation();
        dragDropArea.style.borderColor = "#dee2e6";
        dragDropArea.style.backgroundColor = "#f8f9fa";
    });

    dragDropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        dragDropArea.style.borderColor = "#dee2e6";
        dragDropArea.style.backgroundColor = "#f8f9fa";
        handleFiles(e.dataTransfer.files);
    });

    uploadFilesBtn.addEventListener("click", async function () {
        if (selectedFiles.length === 0) {
            alert("Please select files to upload.");
            return;
        }

        uploadFilesBtn.disabled = true;
        uploadFilesBtn.style.opacity = "0.6";
        uploadFilesBtn.textContent = "Uploading...";

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            const progressBar = document.querySelector(`.progress-bar[data-file-index="${i}"]`);
            
            // Simulate upload progress
            for (let progress = 0; progress <= 100; progress += 10) {
                await new Promise(resolve => setTimeout(resolve, 100));
                if (progressBar) {
                    progressBar.style.width = progress + "%";
                }
            }
            
            console.log("File uploaded:", file.name, formatFileSize(file.size));
        }

        alert(`Successfully uploaded ${selectedFiles.length} file(s)`);
        uploadFilesBtn.disabled = false;
        uploadFilesBtn.style.opacity = "1";
        uploadFilesBtn.textContent = "Upload";
        
        // Refresh grid data or add new rows
        closeUploadModalFunc();
    });

    uploadBtnMain.addEventListener("mouseover", function () {
        uploadBtnMain.style.backgroundColor = "#22a138";
    });

    uploadBtnMain.addEventListener("mouseout", function () {
        uploadBtnMain.style.backgroundColor = "#3dcd58";
    });

    syncResponsiveState();
    updateStats();
    emitFilteredRows(currentFilteredData);

    window.addEventListener("resize", () => {
        syncResponsiveState();
    });
});
