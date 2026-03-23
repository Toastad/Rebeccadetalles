(function () {
  const PAGE_TRANSITION_MS = 220;
  let isNavigating = false;

  const CLICKABLE_SELECTOR = [
    "button",
    ".btn",
    ".w3-button",
    ".btn-primary",
    ".btn-secondary",
    ".add-cart-btn",
    ".btn-buy",
    ".btn-cancel",
    ".checkout-btn",
    ".clear-cart-btn",
    ".remove-btn",
    ".continue-btn",
    ".topnav a",
    ".bottom-nav a"
  ].join(",");

  function injectPageTransitionStyles() {
    if (document.getElementById("page-transition-styles")) return;
    const style = document.createElement("style");
    style.id = "page-transition-styles";
    style.textContent = [
      "html.page-transition-enabled body {",
      "  transition: opacity " + PAGE_TRANSITION_MS + "ms ease;",
      "}",
      "html.page-transition-enabled body.page-fade-in,",
      "html.page-transition-enabled body.page-fade-out {",
      "  opacity: 0;",
      "}",
      "@media (prefers-reduced-motion: reduce) {",
      "  html.page-transition-enabled body { transition: opacity 80ms linear; }",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function setupPageEntrance() {
    if (!document.body) return;
    injectPageTransitionStyles();
    document.documentElement.classList.add("page-transition-enabled");
    document.body.classList.add("page-fade-in");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove("page-fade-in");
      });
    });
  }

  function isInternalNavigableLink(el, event) {
    if (!el || el.tagName !== "A") return false;
    if (event.defaultPrevented) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (event.button !== 0) return false;
    if (el.target && el.target.toLowerCase() === "_blank") return false;
    if (el.hasAttribute("download")) return false;

    const href = (el.getAttribute("href") || "").trim();
    if (!href) return false;
    if (href.startsWith("javascript:")) return false;
    if (href.startsWith("#")) return false;

    return true;
  }

  function shouldAnimateNavigation(anchor) {
    if (!anchor || anchor.dataset.noTransition === "true") return false;
    const destination = new URL(anchor.href, window.location.href);
    const current = new URL(window.location.href);

    if (destination.origin !== current.origin) return false;

    const isSamePageAnchorOnly =
      destination.pathname === current.pathname &&
      destination.search === current.search &&
      destination.hash &&
      destination.hash !== "#";

    return !isSamePageAnchorOnly;
  }

  function animatePress(el) {
    el.classList.remove("after-press");
    // Force reflow so repeated clicks retrigger the animation.
    void el.offsetWidth;
    el.classList.add("after-press");
    window.setTimeout(() => el.classList.remove("after-press"), 420);
  }

  setupPageEntrance();

  document.addEventListener("click", function (event) {
    const clickable = event.target.closest(CLICKABLE_SELECTOR);
    if (clickable) {
      animatePress(clickable);
    }

    const anchor = event.target.closest("a");
    if (!anchor) return;
    if (!isInternalNavigableLink(anchor, event)) return;
    if (!shouldAnimateNavigation(anchor)) return;
    if (isNavigating) return;

    isNavigating = true;
    event.preventDefault();
    document.body.classList.add("page-fade-out");
    window.setTimeout(() => {
      window.location.href = anchor.href;
    }, PAGE_TRANSITION_MS);
  });
})();
