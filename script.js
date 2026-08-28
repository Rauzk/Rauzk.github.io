(() => {
  document.documentElement.classList.add("js-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  document.querySelectorAll(".copy-query").forEach((button) => {
    button.addEventListener("click", async () => {
      const label = button.querySelector("span");
      try {
        await navigator.clipboard.writeText(button.dataset.query);
        label.textContent = "已复制";
        setTimeout(() => (label.textContent = "复制"), 1400);
      } catch {
        label.textContent = "请长按复制";
      }
    });
  });
})();
