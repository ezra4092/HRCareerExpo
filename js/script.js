$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });
});
$(document).ready(function () {
  // Menangani klik pada elemen dengan kelas "about_inner"
  $(".about_inner").click(function () {
    // Ambil nilai atribut href dari elemen yang diklik
    var targetPage = $(this).find(".icon a").attr("href");

    // Lakukan perpindahan halaman
    window.location.href = targetPage;
  });
});
$(window).on("load", function () {
  $("#loader-wrapper").fadeOut("");
});

//carousel
$(document).ready(function () {
  var carousel = $("#carouselExampleDark");

  carousel.carousel({
    interval: 5000, // Ganti dengan waktu slide yang diinginkan (dalam milidetik)
    pause: false, // Biarkan mouse masuk berhenti otomatis
  });

  carousel.mouseenter(function () {
    carousel.carousel("pause");
  });

  carousel.mouseleave(function () {
    carousel.carousel("cycle");
  });
});
$(document).ready(function () {
  var carousel = $("#carouselExampleDark");
  $(".carousel-control-next").click(function () {
    carousel.carousel("next");
  });
  $(".carousel-control-prev").click(function () {
    carousel.carousel("prev");
  });
});

function searchCompanies() {
  var searchTerm = $("#companySearchInput").val().toLowerCase();

  // Loop melalui setiap perusahaan
  $(".about_inner").each(function () {
    var companyText = $(this).text().toLowerCase();

    // Periksa apakah perusahaan cocok dengan kriteria pencarian
    if (companyText.includes(searchTerm)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

  var searchTerm = document
    .getElementById("companySearchInput")
    .value.toLowerCase();
  var companyElements = document.getElementsByClassName("about_inner");

  // Menyembunyikan bagian "Our Service"
  var serviceSection = document.getElementById("service");
  if (searchTerm !== "") {
    serviceSection.style.display = "none";
  } else {
    serviceSection.style.display = "block";
  }

  var carousel = $("#carouselExampleDark");

  for (var i = 0; i < companyElements.length; i++) {
    var companyName = companyElements[i].getAttribute("id").toLowerCase();
    var companyElement = companyElements[i];

    // Ganti logika berikut sesuai dengan kebutuhan Anda
    if (
      companyName.includes(searchTerm) ||
      companyElement.textContent.toLowerCase().includes(searchTerm)
    ) {
      companyElement.style.display = "block";

      // Scroll ke posisi ditengah about_inner
      var viewportHeight = window.innerHeight;
      var elementPosition = companyElement.offsetTop - viewportHeight / 2;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth", // Gunakan smooth scrolling
      });

      // Tambahkan gaya CSS untuk membuat kotak dengan ID "pt1" menjadi persegi panjang
      if (companyName === "pt1") {
        companyElement.style.width = "auto"; // Ganti dengan lebar yang diinginkan
        companyElement.style.height = "auto"; // Ganti dengan tinggi yang diinginkan
      } else {
        companyElement.style.width = "100%"; // Kembalikan lebar normal untuk kotak lainnya
        companyElement.style.height = "auto"; // Kembalikan tinggi normal untuk kotak lainnya
      }
    } else {
      companyElement.style.display = "none";
    }
  }

  // Jangan aktifkan carousel jika hanya mencari "pt1"
  if (searchTerm.toLowerCase() === "pt1") {
    carousel.carousel("pause");
  } else {
    carousel.carousel("cycle");
  }
}

function refreshPage() {
  location.reload(true); // Menggunakan fungsi reload untuk merefresh halaman
}

// Menambahkan event listener untuk tombol "Home"
document.addEventListener("DOMContentLoaded", function () {
  var homeLink = document.querySelector('.nav-link[href="#home"]');
  if (homeLink) {
    homeLink.addEventListener("click", refreshPage);
  }
});

//hr js
$(function () {
  $(document).ready(function () {
    $("#example").DataTable();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var webTextElement = document.querySelector(".web_text");
  if (webTextElement) {
    // Menggunakan setTimeout untuk memberikan jeda sebelum mengubah opacity
    setTimeout(function () {
      webTextElement.style.opacity = "1";
    }, 1000); // Sesuaikan durasi penundaan jika perlu
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var webTextElement = document.querySelector(".donec_text");
  if (webTextElement) {
    // Menggunakan setTimeout untuk memberikan jeda sebelum mengubah opacity
    setTimeout(function () {
      webTextElement.style.opacity = "1";
    }, 1000); // Sesuaikan durasi penundaan jika perlu
  }
}); 

document.addEventListener("DOMContentLoaded", function () {
  var webTextElement = document.querySelector(".img-box");
  if (webTextElement) {
    // Menggunakan setTimeout untuk memberikan jeda sebelum mengubah opacity
    setTimeout(function () {
      webTextElement.style.opacity = "1";
    }, 1000); // Sesuaikan durasi penundaan jika perlu
  }
}); 

document.addEventListener("DOMContentLoaded", function () {
  var h2Element = document.querySelector("h2");
  var pElement = document.querySelector("p");

  // Menggunakan setTimeout untuk memberikan jeda sebelum mengubah opacity
  setTimeout(function () {
    if (h2Element) {
      h2Element.style.opacity = "1";
    }
    if (pElement) {
      pElement.style.opacity = "1";
    }
  }, 1000); // Sesuaikan durasi penundaan jika perlu
});