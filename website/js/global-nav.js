$(document).ready(function () {
  /* --- HEADER INJECTION --- */
  var navHtml = `
    <nav class="background-transparent background-transparent-hightlight full-width sticky">
      <div class="s-12 l-2">
        <a href="index.html" class="logo">
          <img class="logo-white" src="img/logos/CarletonLogoFull.png" alt="">
          <img class="logo-dark" src="img/logos/CarletonLogoFullDark.png" alt="">
        </a>
      </div>
      <div class="top-nav s-12 l-10">
        <ul class="right chevron">
          <li><a href="index.html">Home</a></li>
          <li><a href="paper.html">Paper</a></li>
          <li><a href="posters.html">Posters</a>
            <ul>
              <li><a href="img/posters/Saxer_Poster.pdf" target="_blank">Gavin: Biocompress 1</a></li>
              <li><a href="img/posters/ArroyoRuiz_Poster.pdf" target="_blank">Jared: DNAZip</a></li>
              <li><a href="img/posters/Son_Poster.pdf" target="_blank">Ryan: DNAZip</a></li>
            </ul>
          </li>
          <li><a href="about.html">About</a></li>
        </ul>
      </div>
    </nav>
    
    <style>
    /* --- GLOBAL FONT SIZING --- */
    body {
      font-size: 18px;
    }

    p {
      font-size: 18px;
      line-height: 1.6;
    }

    h2 {
      font-size: 2rem;
    }

    /* --- NAV SPECIFIC SIZING --- */
    .top-nav li a {
      font-size: 1.15rem !important;
      font-weight: 600;
    }

    .top-nav ul ul li a {
      font-size: 1rem !important;
      padding: 10px 15px;
    }
    </style>
    `;
  $('header[role="banner"]').html(navHtml);

  var footerHtml = `
    <section class="section background-dark footer-fancy">
      
      <div class="footer-content-wrapper">
        
        <div class="footer-col">
          <h3 class="text-white text-size-24 margin-bottom-20">GeneZippers</h3>
          <p class="text-size-16 text-silver-hover margin-bottom-20">
            Analyzing DNA compression efficiency on massive genomic datasets. A Senior Comprehensive Study at Carleton College.
          </p>
          <div class="footer-social-icons">
            <a href="https://github.com/Rawleo/genezippers_comps" target="_blank" title="GitHub Repo">
              <i class="icon-sli-social-github"></i>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3 class="text-white text-size-20 margin-bottom-20">Explore</h3>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="paper.html">Read the Paper</a></li>
            <li><a href="about.html">Meet the Team</a></li>
            <li><a href="posters.html">View Posters</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="text-white text-size-20 margin-bottom-20">Carleton College</h3>
          <p class="text-size-16">
            Department of Computer Science<br>
            1 North College St<br>
            Northfield, MN 55057
          </p>
        </div>
        
      </div>
    </section>

    <a href="#" id="back-to-top" title="Back to top">&uarr;</a>

    <style>
      /* --- FOOTER BACKGROUND --- */
      .footer-fancy {
        background: #1a1a1a;
        border-top: 5px solid #002f5f;
        padding: 60px 0; /* Vertical padding only */
        width: 100%;
      }

      /* --- MAIN CONTAINER (The Fix) --- */
      .footer-content-wrapper {
        /* 1. Limit the maximum width on large screens */
        max-width: 1200px; 
        
        /* 2. Center the container */
        margin: 0 auto;    
        
        /* 3. Add Safety Gutters (Padding) so it never hits the edge */
        padding-left: 30px;
        padding-right: 30px;
        
        /* Flexbox Layout settings */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; 
        gap: 40px;
        box-sizing: border-box; /* Ensures padding doesn't break width calculations */
      }

      .footer-col {
        flex: 1 1 280px;  /* Flexible width, wraps if smaller than 280px */
        margin-bottom: 20px;
      }

      /* --- RESPONSIVE TWEAKS --- */
      @media (max-width: 768px) {
        .footer-col {
          text-align: center;
          flex: 1 1 100%; /* Stack vertically on mobile */
        }
        .footer-links a:hover {
          transform: none; /* No sliding on mobile */
        }
      }

      /* --- GENERAL TEXT LINKS --- */
      .footer-links {
        padding-left: 0;
        margin-left: 0;
      }
      .footer-links li {
        margin-bottom: 12px;
        list-style: none;
      }
      .footer-links a {
        color: #bdc3c7;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        display: inline-block;
        text-decoration: none;
      }
      .footer-links a:hover {
        color: #fff;
        transform: translateX(10px); 
      }

      /* --- SOCIAL ICONS --- */
      .footer-social-icons a {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 1.2rem;
        transition: background 0.3s;
      }
      .footer-social-icons a:hover {
        background: #002f5f;
      }

      /* --- BACK TO TOP BUTTON --- */
      #back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #002f5f;
        color: white;
        text-align: center;
        line-height: 46px;
        border-radius: 50%;
        font-size: 24px;
        font-weight: bold;
        z-index: 9999;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        text-decoration: none;
      }
      #back-to-top:hover {
        background: #444;
        transform: translateY(-3px);
        box-shadow: 0 6px 14px rgba(0,0,0,0.4);
      }
      #back-to-top.show {
        opacity: 1;
        visibility: visible;
      }
    </style>
`;

  $('footer').html(footerHtml);

  var btn = $('#back-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});