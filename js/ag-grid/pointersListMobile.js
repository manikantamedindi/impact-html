// Point Status List - Mobile Cards Renderer

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const mobileCardsContainer = document.querySelector("#pointsMobileCards");
    const mobileCardTemplate = document.querySelector("#pointsMobileCardTemplate");
    const MOBILE_BREAKPOINT = 767;
    const MOBILE_PAGE_SIZE = 6;

    if (!mobileCardsContainer) {
      return;
    }

    const safeRows =
      typeof pointsRowData !== "undefined" && Array.isArray(pointsRowData)
        ? pointsRowData
        : [];

    let currentRows = [...safeRows];
    let currentPage = 1;

    const getStatusState = (statusFilled) => {
      const totalChecks = 5;
      const filled = Math.max(0, Math.min(totalChecks, Number(statusFilled || 0)));
      const percent = Math.round((filled / totalChecks) * 100);
      return {
        filled,
        totalChecks,
        percent,
        stateClass: filled === totalChecks ? "is-complete" : filled === 0 ? "is-empty" : "is-progress",
      };
    };

    const setText = (root, selector, value) => {
      const element = root.querySelector(selector);
      if (element) {
        element.textContent = String(value == null || value === "" ? "-" : value);
      }
    };

    const updateStatusBlock = (statusElement, statusFilled) => {
      if (!statusElement) {
        return;
      }

      const { filled, totalChecks, percent, stateClass } = getStatusState(statusFilled);
      const segments = statusElement.querySelectorAll(".points-mobile-status-segment");

      statusElement.classList.remove("is-complete", "is-empty", "is-progress");
      statusElement.classList.add(stateClass);
      statusElement.setAttribute("title", `${filled}/${totalChecks} checks completed`);

      segments.forEach((segment, index) => {
        segment.classList.toggle("is-filled", index < filled);
      });


    };

    const getTotalPages = (rows) => {
      const total = Array.isArray(rows) ? rows.length : 0;
      return Math.max(1, Math.ceil(total / MOBILE_PAGE_SIZE));
    };

    const getPageRows = (rows, page) => {
      const start = (page - 1) * MOBILE_PAGE_SIZE;
      return rows.slice(start, start + MOBILE_PAGE_SIZE);
    };

    const ensurePaginationBar = () => {
      let paginationBar = document.querySelector("#pointsMobilePagination");
      if (!paginationBar && mobileCardsContainer.parentElement) {
        paginationBar = document.createElement("div");
        paginationBar.id = "pointsMobilePagination";
        paginationBar.className = "points-mobile-pagination";
        paginationBar.setAttribute("aria-label", "Mobile pagination");
        mobileCardsContainer.insertAdjacentElement("afterend", paginationBar);
      }

      return paginationBar;
    };

    const createEmptyState = () => {
      const emptyState = document.createElement("div");
      emptyState.className = "points-mobile-empty";
      emptyState.textContent = "No points found.";
      return emptyState;
    };

    const createPaginationButton = (action, disabled) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "points-mobile-pagination-btn";
      button.setAttribute("data-page-action", action);
      button.setAttribute("aria-label", action === "prev" ? "Previous page" : "Next page");
      if (disabled) {
        button.disabled = true;
      }

      const icon = document.createElement("span");
      icon.className = `glyphicon ${action === "prev" ? "glyphicon-menu-left" : "glyphicon-menu-right"}`;
      icon.setAttribute("aria-hidden", "true");
      button.appendChild(icon);

      return button;
    };

    const renderPagination = (rows) => {
      const paginationBar = ensurePaginationBar();
      if (!paginationBar) {
        return;
      }

      if (window.innerWidth > MOBILE_BREAKPOINT) {
        paginationBar.innerHTML = "";
        return;
      }

      const totalItems = rows.length;
      if (totalItems === 0) {
        paginationBar.innerHTML = "";
        return;
      }

      const totalPages = getTotalPages(rows);
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      const startItem = (currentPage - 1) * MOBILE_PAGE_SIZE + 1;
      const endItem = Math.min(currentPage * MOBILE_PAGE_SIZE, totalItems);

      paginationBar.innerHTML = "";

      const range = document.createElement("div");
      range.className = "points-mobile-pagination-range";
      range.textContent = `${startItem}-${endItem} of ${totalItems}`;

      const nav = document.createElement("div");
      nav.className = "points-mobile-pagination-nav";
      nav.appendChild(createPaginationButton("prev", currentPage === 1));
      nav.appendChild(createPaginationButton("next", currentPage === totalPages));

      paginationBar.appendChild(range);
      paginationBar.appendChild(nav);
    };

    const createCardElement = (row) => {
      if (!mobileCardTemplate || !mobileCardTemplate.content) {
        return null;
      }

      const card = mobileCardTemplate.content.firstElementChild.cloneNode(true);
      const controller = row.controller == null ? "-" : row.controller;
      const ioModule = row.ioModule == null ? "-" : row.ioModule;
      const channel = row.channel == null ? "-" : row.channel;
      const point = row.point == null ? "-" : row.point;
      const description = row.descriptionFull || row.description || "-";
      const pointType = row.pointType || "-";
      const partNumber = row.partNumber || "-";
      const location = row.location || "-";

      const pointLink = card.querySelector("[data-role='point-link']");
      const commissionLink = card.querySelector("[data-role='commission-link']");
      const statusElement = card.querySelector("[data-role='status']");

      if (pointLink) {
        pointLink.textContent = point;
        pointLink.href = `ControllerPoints.aspx?PartSystemName=${encodeURIComponent(row.controller || "")}`;
      }

      if (commissionLink) {
        commissionLink.href = `CommissionPoint.aspx?PartSystemName=${encodeURIComponent(
          row.controller || ""
        )}&BomTag=${encodeURIComponent(row.ioModule || "")}&PointName=${encodeURIComponent(row.channel || "")}`;
      }

      setText(card, "[data-role='controller']", controller);
      setText(card, "[data-role='io-module']", ioModule);
      setText(card, "[data-role='channel']", channel);
      setText(card, "[data-role='description']", description);
      setText(card, "[data-role='point-type']", pointType);
      setText(card, "[data-role='part-number']", partNumber);
      setText(card, "[data-role='location']", location);
      updateStatusBlock(statusElement, row.statusFilled);

      return card;
    };

    const renderCards = (rows) => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        mobileCardsContainer.innerHTML = "";
        renderPagination(rows || []);
        return;
      }

      if (!rows || rows.length === 0) {
        mobileCardsContainer.replaceChildren(createEmptyState());
        renderPagination([]);
        return;
      }

      const totalPages = getTotalPages(rows);
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      const pageRows = getPageRows(rows, currentPage);

      const cardElements = pageRows
        .map((row) => createCardElement(row))
        .filter(Boolean);

      mobileCardsContainer.replaceChildren(...cardElements);

      renderPagination(rows);
    };

    document.addEventListener("click", function (event) {
      const button = event.target.closest(".points-mobile-pagination-btn");
      if (!button || window.innerWidth > MOBILE_BREAKPOINT) {
        return;
      }

      const action = button.getAttribute("data-page-action");
      const totalPages = getTotalPages(currentRows);
      if (action === "prev" && currentPage > 1) {
        currentPage -= 1;
      } else if (action === "next" && currentPage < totalPages) {
        currentPage += 1;
      }

      renderCards(currentRows);

      if (mobileCardsContainer && typeof mobileCardsContainer.scrollTo === "function") {
        mobileCardsContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    document.addEventListener("points:filtered", function (event) {
      const rows = event && event.detail && Array.isArray(event.detail.rows) ? event.detail.rows : [];
      currentRows = rows;
      currentPage = 1;
      renderCards(currentRows);
    });

    window.addEventListener("resize", function () {
      renderCards(currentRows);
    });

    renderCards(currentRows);
  });
})();
