document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("link-service");
  const serviceContent = document.getElementById("service_content");
  const webDetail = document.getElementById("web_detail");
  const seoDetail = document.getElementById("seo_detail");
  const mobileDetail = document.getElementById("mobile_detail");
  const serviceBtns = document.querySelectorAll(".service_btn");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    serviceContent.classList.toggle("hidden");

    webDetail.classList.remove("hidden");
    seoDetail.classList.add("hidden");
    mobileDetail.classList.add("hidden");

    serviceBtns.forEach(btn => btn.classList.remove("active"));
    document.querySelector(".web.service_btn").classList.add("active");

    if (!serviceContent.classList.contains("hidden")) {
      serviceContent.scrollIntoView({ behavior: "smooth"});
    }
  });

  serviceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      webDetail.classList.add("hidden");
      seoDetail.classList.add("hidden");
      mobileDetail.classList.add("hidden");

      if (btn.classList.contains("web")) {
        webDetail.classList.remove("hidden");
      } else if (btn.classList.contains("seo")) {
        seoDetail.classList.remove("hidden");
      } else if (btn.classList.contains("mobile")) {
        mobileDetail.classList.remove("hidden");
      }

      serviceBtns.forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
