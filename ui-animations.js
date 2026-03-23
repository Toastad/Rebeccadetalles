(function () {
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

  function animatePress(el) {
    el.classList.remove("after-press");
    // Force reflow so repeated clicks retrigger the animation.
    void el.offsetWidth;
    el.classList.add("after-press");
    window.setTimeout(() => el.classList.remove("after-press"), 420);
  }

  document.addEventListener("click", function (event) {
    const clickable = event.target.closest(CLICKABLE_SELECTOR);
    if (!clickable) return;

    animatePress(clickable);

    if (isInternalNavigableLink(clickable, event)) {
      const destination = clickable.href;
      event.preventDefault();
      window.setTimeout(() => {
        window.location.href = destination;
      }, 120);
    }
  });
})();
