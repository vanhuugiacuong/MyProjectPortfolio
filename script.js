// Chọn tất cả các hình ảnh có class 'fade-in'
function imgObserver() {  const images = document.querySelectorAll('.header-image img');

// Sử dụng Intersection Observer API
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Thêm class 'show' khi xuất hiện trên viewport
      observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã hiện
    }
  });
});

// Theo dõi từng ảnh
images.forEach(image => observer.observe(image));  
}
imgObserver();


//Hiệu ứng fade-in các section
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Thêm class "visible" khi ảnh xuất hiện
              observer.unobserve(entry.target); // Dừng quan sát khi đã xử lý
          }
      });
  }, {
      threshold: 0.2 // Kích hoạt khi 20% ảnh nằm trong viewport
  });

  images.forEach(image => {
      observer.observe(image);
  });
});


// Chọn tất cả các thẻ section
// cuộn mượt thẻ section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Ngăn cuộn mặc định
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth', // Cuộn mượt
          block: 'start' // Đưa section lên đầu
      });
  });
});

function showTab(tabId) {
    // Ẩn tất cả các nội dung tab
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((content) => {
        content.classList.remove("active");
    });

    // Hiển thị nội dung tab được chọn
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add("active");


}