let head = `  
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-center">
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="bg ptn"><a href="index.html" class="active">الرئيسية</a></li>
          <li class="bg ptn"><a href="about.html">من نحن</a></li>
          <li class="bg ptn"><a href="projects.html">المنتجات</a></li>
          <li class="bg ptn"><a href="advertise.html">الإعلانات</a></li>
          <a href="/" class="logo d-flex align-items-center">
            <img src="../img/logo.png" class="main_logo">
          </a>
          <li class="bg ptn"><a href="event.html">الفعاليات</a></li>
          <li class="bg ptn"><a href="blog.html">المدونة</a></li>
          <li class="bg ptn"><a href="contact.html">تواصل معنا</a></li>
          <li class="bg ptn">
            <a href="contact.html">
              <i class="bi bi-globe"></i> En
            </a>
          </li>
        </ul>

        <div class="d-flex">
          <a href="/" class="logo d-flex align-items-center">
            <img src="../img/logo.png" class="main_logo logo_phone">
          </a>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </div>
      </nav>
    </div>
  </header>
`;

let header_ = document.getElementById("header_");

header_.innerHTML = head;
