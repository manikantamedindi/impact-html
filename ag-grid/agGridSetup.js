// Shared AG Grid helpers used by the point status pages.

(function () {
  const MOBILE_BREAKPOINT = 767;

  const getImpactGridCommon = () => {
    if (window.ImpactGridCommon) {
      return window.ImpactGridCommon;
    }

    const common = {
      isMobileViewport: () => window.innerWidth <= MOBILE_BREAKPOINT,
      getResponsivePageSize: (mobilePageSize, desktopPageSize) =>
        window.innerWidth <= MOBILE_BREAKPOINT ? mobilePageSize : desktopPageSize,
      createGrid: (gridDiv, gridOptions) => {
        if (!gridDiv || !window.agGrid || typeof window.agGrid.createGrid !== "function") {
          return null;
        }

        return window.agGrid.createGrid(gridDiv, gridOptions);
      },
      setPaginationPageSize: (gridApi, mobilePageSize, desktopPageSize) => {
        if (!gridApi || typeof gridApi.paginationSetPageSize !== "function") {
          return;
        }

        gridApi.paginationSetPageSize(
          window.innerWidth <= MOBILE_BREAKPOINT ? mobilePageSize : desktopPageSize
        );
      },
      syncColumnPinnedState: (gridApi, colId, desktopPinned = "left") => {
        if (!gridApi || typeof gridApi.applyColumnState !== "function") {
          return;
        }

        gridApi.applyColumnState({
          state: [
            {
              colId,
              pinned: window.innerWidth <= MOBILE_BREAKPOINT ? null : desktopPinned,
            },
          ],
          applyOrder: false,
        });
      },
    };

    window.ImpactGridCommon = common;
    return common;
  };

  getImpactGridCommon();
})();
