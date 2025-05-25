
$(function () {

  
  AOS.init();

  //gnb 메뉴

  //top버튼
  let menu = 0;

  $(".rt-btn").on("click", function (event) {
    event.preventDefault();
    $("html,body").stop().animate({ "scrollTop": menu }, 1000);

  });

  // guide on/off

  let guideToggleBtn = $('.guide-toggle');
  let guideLine = $('.guide-line');

  guideToggleBtn.on('click', function () {
    guideLine.toggle();
  });

  // 타이핑 =====================================

  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;
  var tyInt;
  var clearTyping;

  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
  //liIndex 인덱스로 구분해 한줄씩 가져옴

  typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

  if (typingBool == false) { // 타이핑이 진행되지 않았다면 
    typingBool = true;
    tyInt = setInterval(typing, 70); // 반복동작 
  }

  function typing() {
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
    console.log(typingTxt.length);
    if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복
      // if(typingTxt[typingIdx]=='병'&& typingTxt.length==17){
      //   var inText = "<span class='red'>#</span>";
      //   $(".typing ul li:nth-child(1)").append(inText); // 한글자씩 이어준다. 
      // }
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
      typingIdx++;
    }
    else { //한문장이끝나면
      if (liIndex < liLength - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
        typingBool = false;

        //다음문장 타이핑전 1초 쉰다
        clearInterval(30);
        //타이핑종료
      }
    }
  }

  // setInterval(typingReady, 1000);
  function clearTyping() {
    clearInterval(tyInt, 300);
  }
  setInterval(clearTyping, 4500);

  // swiper - design
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },

  });

  // swiper - 문의하기s 섹션
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
  });

  // swiper - 문의하기 섹션
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
  });

  // 상단 배너
  var swiper7 = new Swiper(".mySwiper7", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  // 2번섹션 슬라이드-브라우저
  // var swiper5 = new Swiper(".mySwiper5", {
  //   slidesPerView: 5,
  //   loop: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: true,
  //   },
  // });

  // 2번섹션 슬라이드
  var swiper8 = new Swiper(".mySwiper8", {
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 800,
      disableOnInteraction: false,
    },
  });

  // 핸드폰 슬라이드 영역
  var swiper12 = new Swiper(".mySwiper12", {
    slidesPerView: "4",
    spaceBetween: 26,
    //centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  swiper12.slideTo(1);

  // 마케팅플랜 - 1번 핸드폰 슬라이드
  var swiper10 = new Swiper(".mySwiper10", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  


  // var dd = 0;
  // $(window).scroll(function () {
  //   var ct_position = $('.count').offset().top - window.innerHeight;
  //   if (dd == 0 && $(window).scrollTop() > ct_position) {
  //     $('.ct').each(function () {
  //       var $this = $(this)
  //       var countTo = $this.attr('data-count');
  //       $(this).text('');

  //       $({
  //         countNum: $this.text()
  //       }).animate({
  //         countNum: countTo
  //       },
  //         {
  //           delay: 100,
  //           duration: 3000,
  //           easing: 'swing',
  //           step: function () {
  //             $this.text(Math.floor(this.countNum));
  //           },
  //           complete: function () {
  //             $this.text(this.countNum);
  //           }

  //         });
  //     });
  //     dd = 1;
  //   }
  // });

  // setTimeout(counting, 2000);


  //  header
  var win = $(window);
  var header = $('#header');
  var sidebar = $('#side-plan');
  var headOffset = $(header).offset().top;

  // win.on('scroll', function (e) {

  //   setPage();

  //   var winSt = win.scrollTop();

  //   if (winSt >= 1) {
  //     header.addClass('header-bg-on');
  //     // sidebar02.addClass('on');
  //   } else {
  //     header.removeClass('header-bg-on');
  //     // sidebar02.removeClass('on');
  //   }
  //   // (winSt >= 200) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); // (해당 조건) ?참/거짓 질문 참일시 시행 : 거짓일시 실행
  // });

  win.on('scroll', function (e) {

    setPage();

    var winSt = win.scrollTop();

    if (winSt >= 500) {
      sidebar.addClass('sidebar-on');
    } else {
      sidebar.removeClass('sidebar-on');
    }
    // (winSt >= 200) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); // (해당 조건) ?참/거짓 질문 참일시 시행 : 거짓일시 실행
  });

// 스크롤 기능 ON 영역 Start

  let c2ScrollImg = $(".c2-scroll-img");
  let c2Intro = $(".c2-img-intro");
  let c2ScrollBtn = $(".c2-scroll-btn-wrapper");
  let c2ScrollPlay = $(".c2-scroll-play");
  let c2ScrollPause = $(".c2-scroll-pause");

  c2ScrollPlay.on('click', function () {
    c2ScrollImg.css({ "animation-play-state": "running" });
  });
  c2ScrollPause.on('click', function () {
    c2ScrollImg.css({ "animation-play-state": "paused" });
  });

  var c2PlayClick = $(".c2-img-click");
  var c2PlayBtn = $(".c2-play-btn");

  c2PlayBtn.on('click', function () {

    c2PlayClick.css({ "display": "none" },);

    c2Intro.addClass('on1');
    setTimeout(function () {
      c2ScrollImg.addClass('on2');
    }, 1700);
    setTimeout(function () {
      c2Intro.addClass('on2');
      c2ScrollBtn.addClass('on1');
    }, 2700);
  });

// 스크롤 기능 ON 영역 End

  // var stPhone = $('.st-phone-float');
  // var stPhoneText = '<div class="st-phone-search flex-row"><span class="st-phone-s-logo"><img src="./img/logo_round_original_full.svg" alt=""></span>\
  // <span class="st-phone-text"><span class="s-t-01">병</span><span class="s-t-02">원</span>\
  // <span class="s-t-03">마</span><span class="s-t-04">케</span><span class="s-t-05" style="padding-right: 60px;">팅</span>\
  // <span class="st-phone-btn"><img src="./img/search-icon.png" alt=""></span></div>';

  // stPhone.prepend(stPhoneText);

  // var now = new Date();

  // let c2clockYear = now.getFullYear();
  // let c2clockMonth = now.getMonth() + 1;
  // let c2clockDate = now.getDate();
  // let c2clockDay = now.getDay();

  // let c2ClockUnder = $('.c2-clock-under');

  // c2ClockUnder.text(c2clockYear + '년 ' + c2clockMonth + '월 ' + c2clockDate + '일');

  // var chartPlay = setTimeout(function () {
  // });
  var chart01 = $(".chart-01");
  var chart02 = $(".chart-02");
  var chart03 = $(".chart-03");

  // var stPc = $(".st-pc");
  // var stPcSearch = $(".st-pc-search");
  // var stPcClock = $(".st-pc-clock-wrapper");
  // var stPcUnder = $(".st-pc-text-under");
  // var stPcRight = $(".st-pc-btn > img");
  // var stPcText01 = $(".pc-text-01");
  // var stPcText02 = $(".pc-text-02");
  // var stPhoneWrap = $(".st-phone-wrapper");
  // var stPoint01 = $(".st-p-01 > .st-point");
  // var stPoint02 = $(".st-p-02 > .st-point");
  // var stPoint03 = $(".st-p-03 > .st-point");

  // ==============================================================
  // var scTopsGraph = $(".graph-animation-anchor").offset().top;
  var setPage = function () {

    let scTops = $(this).scrollTop();
    let sec4 = $("#ment").offset().top;
    // let secSt = $(".st-animation-anchor").offset().top;
    let scTopsPoint = $(".point-animation-anchor").offset().top;
    let lineGraph01 = $(".linegraph-animation-anchor-01").offset().top;
    let lineGraph02 = $(".linegraph-animation-anchor-02").offset().top;
    let lineGraph03 = $(".linegraph-animation-anchor-03").offset().top;
    let pointSecUl = $(".point-section-ul");
    var scTopsQna = $("#qnaSlide").offset().top;

    // scTopsGraph = $(".graph-animation-anchor").offset().top;
    // scTopsC2 = $(".c2-animation-anchor").offset().top;

    // let scTopsGraph02 = $(".graph-animation-anchor-02").offset().top;

    // let graphBar01 = $(".graph-bar-01 > .graph-bar-ani");
    // let graphBar02 = $(".graph-bar-02 > .graph-bar-ani");
    // let graphBar03 = $(".graph-bar-03 > .graph-bar-ani");

    // let chart01 = $(".chart-01");
    // let chart02 = $(".chart-02");
    // let chart03 = $(".chart-03");

    // let pieText01 = $(".pie-text-01");
    // let pieText02 = $(".pie-text-02");
    // let pieText03 = $(".pie-text-03");

    // if (scTops > secSt) {

    //   // c2PlayClick.css({ "display": "none" },);
    //   // c2Intro.addClass('on1');
    //   // setTimeout(function () {
    //   //   c2ScrollImg.addClass('on2');
    //   // }, 1700);
    //   // setTimeout(function () {
    //   //   c2Intro.addClass('on2');
    //   //   c2ScrollBtn.addClass('on1');
    //   // }, 2700);

    // }

      // linegraph
  
      if (scTops > lineGraph01 && scTops < scTopsQna) {
        $(".graph-01 .linegraph-ul").addClass('on');
      }
      if (scTops > lineGraph02 && scTops < scTopsQna) {
        $(".graph-02 .linegraph-ul").addClass('on');
      }
      if (scTops > lineGraph03 && scTops < scTopsQna) {
        $(".graph-03 .linegraph-ul").addClass('on');
      }
      if (scTops > scTopsPoint && scTops < scTopsQna) {
        pointSecUl.addClass('onpoint');
      }

    // if (scTops > scTopsC2 && scTops < sec4) {
    //   c2ScrollImg.css({ "animation-play-state": "paused" });

    //   // stPcSearch.addClass('on-scale');
    //   // setTimeout(function () {
    //   //   stPcText01.addClass('on3');
    //   // }, 800);
    //   // setTimeout(function () {
    //   //   stPcText01.empty();
    //   // }, 2000);
    //   // setTimeout(function () {
    //   //   stPcText02.css({ "display": "block" });
    //   //   stPcText01.css({ "display": "none" });
    //   // }, 2100);
    //   // setTimeout(function () {
    //   //   stPcText02.addClass('on3');
    //   // }, 2200);
    //   setTimeout(function () {
    //     // stPc.addClass('on4');
    //     // stPcSearch.addClass('on4');
    //     // stPcClock.addClass('on4');
    //     // stPcUnder.addClass('on4');
    //     // stPcRight.addClass('on4');
    //     // stPcSearch.css({ "opacity": "0" });
    //     stPhoneWrap.css({ "opacity": "1" });
    //   }, 0000);

    //   setTimeout(function () {
    //     // stPc.addClass('on5');
    //     stPhoneWrap.addClass('on6');
    //   }, 0010);
    //   // setTimeout(function () {
    //   //   stPc.fadeOut();
    //   // }, 2300);
    //   setTimeout(function () {
    //     stPoint01.addClass('on7');
    //   }, 0200);
    //   setTimeout(function () {
    //     stPoint01.addClass('on8');
    //   }, 0210);

    //   setTimeout(function () {
    //     stPoint02.addClass('on7');
    //   }, 0560);
    //   setTimeout(function () {
    //     stPoint02.addClass('on8');
    //   }, 0570);

    //   setTimeout(function () {
    //     stPoint03.addClass('on7');
    //   }, 0800);
    //   setTimeout(function () {
    //     stPoint03.addClass('on8');
    //   }, 0810);

    //   // clearTimeout();

    // }

  // graph
  
  if (scTops > scTopsPoint && scTops < scTopsQna) {
    pointSecUl.addClass('onpoint');
  }

    // if (scTops > scTopsGraph && scTops < sec4) {
    //   let chartPlay01 = setTimeout(function () {
    //     chart01.addClass('on');
    //     pieText01.addClass('on')
    //   });
    //   let chartPlay02 = setTimeout(function () {
    //     chart02.addClass('on');
    //     pieText02.addClass('on')

    //   }, 500);
    //   let chartPlay03 = setTimeout(function () {
    //     chart03.addClass('on');
    //     pieText03.addClass('on')
    //   }, 800);

    //   graphBar01.addClass('on');
    //   graphBar02.addClass('on');
    //   graphBar03.addClass('on');

    //   clearTimeout();
    // }
  }

  // swiper3.slideTo(0, true, false);

  // let swiper3silde = $('.mySwiper3 .swiper-slide');

  // swiper3silde.on('mouseon', function () {
  //   swiper3.autoplay.start();
  // });
  // swiper3silde.on('mouseout', function () {
  //   swiper3.autoplay.start();
  // });

  // let detailBtn01 = $('.img-show.show-01');
  // let detailBtn02 = $('.img-show.show-02');
  // var sectionMainImg = $('.section-main-test-img');

  // detailBtn01.on('click', function (e) {
  //   e.preventDefault();

  //   var it = $(this);
  //   var itI = it.index();

  //   sectionMainImg.eq(itI).toggleClass('img-on');
  //   sectionMainImg.eq(itI).siblings().toggleClass('img-on');
  // });

  // detailBtn02.on('click', function (e) {
  //   e.preventDefault();

  //   sectionMainImg.toggle();
  // });



  //   // 60s
  //   stepTime: 60,

  //   // custom date format 일수 추가하려면
  //   // format: "dd:hh:mm:ss",
  //   format: "hh:mm:ss",

  //   // start/end time
  //   // startTime: "00:00:00:10",
  //   startTime: "24:00:00",
  //   endTime: new Date('07/05/21 23:59:59'),
  //   //new date 기능은 자바스크립트 시간 알려주는 기능

  //   // digit options
  //   image: "img/digits.png",
  //   digitImages: 6,
  //   digitWidth: 67,
  //   digitHeight: 90,

  //   // callback 시간 다 되고 나서 실행할 구문 및 코드 삽입구간
  //   timerEnd: function () {

  //     alert("할인이 끝났어요");
  //     //경고창 뿐만 아니라 다른 기능들도 추가 가능
  //   },

  //   // continuous countdown? 
  //   continuous: true,

  //   // start the countdown on page load?
  //   start: true

  // });

  // //게시판

  // let autoCarousel;
  // autoNextCarousel();

  // $(".n-bot").on("mouseenter", function () {

  //   clearInterval(autoCarousel);

  // });

  // $(".n-bot").on("mouseleave", autoNextCarousel);

  // function autoNextCarousel() {

  //   autoCarousel = setInterval(function () {

  //     $(".nb-move").stop().animate({ "margin-top": "-80px" }, 800, function () {
  //       $(".nb-move ul:first-child").appendTo(".nb-move");
  //       $(".nb-move").css({ "margin-top": "-40px" });
  //     })

  //   }, 2000);
  // }
  // $('img[usemap]').rwdImageMaps();

  // // 카운트
  // $('.ct').each(function () {
  //   var num = $(this).attr('data-count');
  //   $(this).text(num);
  // });
  // var dd = 0;
  // $(window).scroll(function () {
  //   var ct_position = $('.count').offset().top - window.innerHeight;
  //   if (dd == 0 && $(window).scrollTop() > ct_position) {
  //     $('.ct').each(function () {
  //       var $this = $(this)
  //       var countTo = $this.attr('data-count');
  //       $(this).text('');

  //       $({
  //         countNum: $this.text()
  //       }).animate({
  //         countNum: countTo
  //       },
  //         {
  //           duration: 2000,
  //           easing: 'swing',
  //           step: function () {
  //             $this.text(Math.floor(this.countNum));
  //           },
  //           complete: function () {
  //             $this.text(this.countNum);
  //           }

  //         });
  //     });
  //     dd = 1;
  //   }

  // });

});

//250415

    // 페이지 로드 시 각 카드에 순차적으로 unfold 애니메이션 적용
    window.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.intro-card');
      cards.forEach((card, index) => {
      // 각 카드마다 지연 시간을 주어 순차적으로 나타나게 함
        card.style.animationDelay = (index * 0.2) + 's';
        card.classList.add('animate');
      });
    });




document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.variable2-left.slider');
  const dots   = document.querySelectorAll('.pagination-dots .dot');

  // 1) 도트 클릭하면 해당 페이지로 스크롤
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx   = Number(dot.dataset.index);
      const width = slider.clientWidth;
      slider.scrollTo({ left: idx * width, behavior: 'smooth' });

      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // 2) 드래그/터치해서 스크롤 한 뒤, 활성 도트 갱신
  let isDown = false, startX, scrollLeft;
  const updateActive = () => {
    const idx = Math.round(slider.scrollLeft / slider.clientWidth);
    dots.forEach(d => d.classList.toggle('active', Number(d.dataset.index) === idx));
  };

  slider.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  document.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    updateActive();
  });
  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX);
  });

  // 터치 이벤트
  slider.addEventListener('touchstart', e => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }, { passive: true });
  slider.addEventListener('touchmove', e => {
    if (!isDown) return;
    slider.scrollLeft = scrollLeft - (e.touches[0].pageX - startX);
  }, { passive: false });
  slider.addEventListener('touchend', () => {
    if (!isDown) return;
    isDown = false;
    updateActive();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.variable3-left.slider');
  const dots   = document.querySelectorAll('.pagination-dots5 .dot');

  // 1) 도트 클릭하면 해당 페이지로 스크롤
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx   = Number(dot.dataset.index);
      const width = slider.clientWidth;
      slider.scrollTo({ left: idx * width, behavior: 'smooth' });

      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // 2) 드래그/터치해서 스크롤 한 뒤, 활성 도트 갱신
  let isDown = false, startX, scrollLeft;
  const updateActive = () => {
    const idx = Math.round(slider.scrollLeft / slider.clientWidth);
    dots.forEach(d => d.classList.toggle('active', Number(d.dataset.index) === idx));
  };

  slider.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  document.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    updateActive();
  });
  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX);
  });

  // 터치 이벤트
  slider.addEventListener('touchstart', e => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }, { passive: true });
  slider.addEventListener('touchmove', e => {
    if (!isDown) return;
    slider.scrollLeft = scrollLeft - (e.touches[0].pageX - startX);
  }, { passive: false });
  slider.addEventListener('touchend', () => {
    if (!isDown) return;
    isDown = false;
    updateActive();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('#section06 .law-banner');
  if (!banner) return;

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        banner.classList.add('stamped');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  io.observe(banner);
});

// 버튼 클릭 시 콘텐츠 개별 강조 관리
// 버튼 클릭 처리 (카드 개별 처리 강화)
document.querySelectorAll('#section07 .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.dataset.card;
        const state = btn.dataset.state;

        // 클릭된 버튼 활성화 상태 관리
        document.querySelectorAll(`#section07 .toggle-btn[data-card="${card}"]`).forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        // 클릭된 카드의 콘텐츠만 처리 (핵심 수정!)
        document.querySelectorAll(`#section07 .toggle-contents .content[id^="${card}-"]`).forEach(el => {
            el.classList.remove('active');
            el.style.transform = 'scale(1)';
            el.style.opacity = '0.5';
            el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        });

        const activeContent = document.getElementById(`${card}-${state}`);

        if (activeContent) {
            activeContent.classList.add('active');
            activeContent.style.transform = 'scale(1.07)';
            activeContent.style.opacity = '1';

            setTimeout(() => {
                activeContent.style.transform = 'scale(1)';
            }, 300);
        }
    });
});

// 자동 전환 코드 정확한 적용 (개별 카드 관리 강화)
(() => {
    const cardIds = ['card1', 'card2'];
    let currentState = 'before';
    const intervalMs = 2000;

    setInterval(() => {
        cardIds.forEach(id => {
            const btn = document.querySelector(`#section07 .toggle-btn[data-card="${id}"][data-state="${currentState}"]`);
            if (btn) btn.click();
        });

        currentState = (currentState === 'before' ? 'after' : 'before');
    }, intervalMs);
})();


// 1) 토글 클릭 핸들러 아래 또는 main.js 맨 아래에 추가
(() => {
  const cardIds = ['card1','card2'];            // 토글할 카드들
  let hasToggled = false;                       // 한 번만 실행하려면 플래그

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasToggled) {
        // BEFORE → AFTER 토글
        cardIds.forEach(id => {
          const afterBtn = document.querySelector(
            `#section07 .toggle-btn[data-card="${id}"][data-state="after"]`
          );
          if (afterBtn) afterBtn.click();
        });
        hasToggled = true;
        obs.unobserve(entry.target);           // 더 이상 관찰 안 함
      }
    });
  }, {
    threshold: 0.2                             // 섹션 50% 보이면 실행
  });

  // 섹션7 전체를 관찰하도록 설정
  const target = document.getElementById('section07');
  if (target) observer.observe(target);
})();

(() => {
  const cardIds = ['card1','card2'];  // 대상 카드 ID
  let toggled = false;                // AFTER로 전환된 적 있는지 플래그

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target.id !== 'section07') return;

      if (entry.isIntersecting && !toggled) {
        // 섹션 진입 시 → AFTER로 전환
        cardIds.forEach(id => {
          const afterBtn = document.querySelector(
            `#section07 .toggle-btn[data-card="${id}"][data-state="after"]`
          );
          if (afterBtn) afterBtn.click();
        });
        toggled = true;
      }
      else if (!entry.isIntersecting && toggled) {
        // 섹션 이탈 시 → BEFORE로 전환
        cardIds.forEach(id => {
          const beforeBtn = document.querySelector(
            `#section07 .toggle-btn[data-card="${id}"][data-state="before"]`
          );
          if (beforeBtn) beforeBtn.click();
        });
        toggled = false;
      }
    });
  }, {
    threshold: 0.5  // 섹션 50% 보일 때/안 보일 때 트리거
  });

  // 관찰 시작
  const section = document.getElementById('section07');
  if (section) observer.observe(section);
})();
function drawChart({
  selector      = '#growth-chart',
  data          = [250, 350, 500, 650, 550, 700, 850],
  maxValue      = 900,
  svgWidth      = 600,
  svgHeight     = 240,
  margin        = { top: 30, left: 50, right: 20, bottom: 40 },
  lineColor     = '#BDBDBD',
  lineWidth     = 2,
  lineDash      = '6,4',
  circleRadius  = 6,
  circleColor   = '#1F1F29',
  animateTime   = 1.8,
  tooltipText   = '약 331% 증가'
} = {}) {
  const svg = document.querySelector(selector);
  if (!svg) return;

  // (1) viewBox & 기존 요소 클리어
  const totalW = svgWidth + margin.left + margin.right;
  const totalH = svgHeight + margin.top + margin.bottom;
  svg.setAttribute('viewBox', `0 0 ${totalW} ${totalH}`);
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  // (2) 그리드 그리기
  const grid = document.createElementNS(svg.namespaceURI, 'g');
  grid.setAttribute('class','grid');
  [0, svgHeight/3, svgHeight*2/3, svgHeight].forEach(y => {
    const line = document.createElementNS(svg.namespaceURI, 'line');
    line.setAttribute('x1', margin.left);
    line.setAttribute('y1', margin.top + y);
    line.setAttribute('x2', margin.left + svgWidth);
    line.setAttribute('y2', margin.top + y);
    line.setAttribute('stroke', '#E0E0E0');
    line.setAttribute('stroke-width','1');
    grid.appendChild(line);
  });
  svg.appendChild(grid);

  // (3) 데이터 → 픽셀 좌표 계산
  const stepX = svgWidth / (data.length - 1);
  const points = data.map((v,i) => {
    const x = margin.left + stepX * i;
    const y = margin.top + (1 - v / maxValue) * svgHeight;
    return [x, y];
  });

  // (4) polyline
  const poly = document.createElementNS(svg.namespaceURI,'polyline');
  poly.setAttribute('points', points.map(p=>p.join(',')).join(' '));
  poly.setAttribute('stroke', lineColor);
  poly.setAttribute('stroke-width', lineWidth);
  poly.setAttribute('fill', 'none');
  if (lineDash) poly.setAttribute('stroke-dasharray', lineDash);
  svg.appendChild(poly);

  // (5) circle markers
  points.forEach(([x,y]) => {
    const c = document.createElementNS(svg.namespaceURI,'circle');
    c.setAttribute('cx', x);
    c.setAttribute('cy', y);
    c.setAttribute('r', circleRadius);
    c.setAttribute('fill', circleColor);
    svg.appendChild(c);
  });

  // (6) 툴팁 텍스트 업데이트
  const tip1 = document.getElementById('chart-tooltip');
  if (tip1) tip1.textContent = tooltipText;
  // 두 번째 툴팁은 위치만 강조용, 텍스트 없음

  // (7) 애니메이션 & 강조 효과 트리거
  const len = poly.getTotalLength();
  poly.style.strokeDasharray  = len;
  poly.style.strokeDashoffset = len;

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      // 선 그리기 애니메이션 시작
      poly.style.transition       = `stroke-dashoffset ${animateTime}s ease-out`;
      poly.style.strokeDashoffset = '0';

      // 애니메이션 완료 시 툴팁 강조
      poly.addEventListener('transitionend', () => {
        const tt1 = document.getElementById('chart-tooltip');
        const tt2 = document.getElementById('chart-tooltip2');
        if (tt1) tt1.classList.add('highlight');
        if (tt2) tt2.classList.add('highlight');
      }, { once: true });

      obs.disconnect();
    }
  }, { threshold: 0.4 });

  observer.observe(svg);
}

// DOMContentLoaded 시 초기 실행
document.addEventListener('DOMContentLoaded', () => {
  drawChart({
    data: [200,350,500,650,550,700,850],
    maxValue: 900,
    tooltipText: '약 331% 증가'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('custom-cursor');

  // 1) 마우스 이동에 따라 커서 위치 업데이트
  document.addEventListener('mousemove', e => {
    cursor.style.top  = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });

  // 2) 클릭 애니메이션: 클릭할 때 클래스 추가 후 잠깐 뒤에 제거
  document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
  });
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
  });

});

// 예: 카드 클릭 시 강조 효과 토글
document.querySelectorAll('.qa-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('qa-card--active');
  });
});

  // swiper - portfolio01,03
  var swiper3 = new Swiper(".portfolio01", {
    slidesPerView: "8",
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination"
    },
  });

    // swiper - portfolio02
    var swiper3 = new Swiper(".portfolio02", {
      slidesPerView: "8",
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
        reverseDirection: true
      },
      pagination: {
        el: ".swiper-pagination"
      },
    });

    
  // swiper - qna, 인터뷰
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "5",
    spaceBetween: 40,
    // centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  // qna 모달
  let qnaModalBox = $('#qnaSlide .qna-modal-box');
  let qnaModalWrap = $('#qnaSlide .qna-modal-wrapper');

  let qnaOpen01 = $('.modal-01');
  let qnaOpen02 = $('.modal-02');
  let qnaOpen03 = $('.modal-03');
  let qnaOpen04 = $('.modal-04');
  let qnaOpen05 = $('.modal-05');

  let qnaModalWrap01 = $('.wrapper-01');
  let qnaModalWrap02 = $('.wrapper-02');
  let qnaModalWrap03 = $('.wrapper-03');
  let qnaModalWrap04 = $('.wrapper-04');
  let qnaModalWrap05 = $('.wrapper-05');

  let qnaClose = $('.qna-modal-close');
  let qnaDl = $('.qna-dl');

  qnaOpen01.on('click', function (e) {
    e.preventDefault();
    qnaModalBox.show();
    qnaModalWrap01.show();
  });
  qnaOpen02.on('click', function (e) {
    e.preventDefault();
    qnaModalBox.show();
    qnaModalWrap02.show();
  });
  qnaOpen03.on('click', function (e) {
    e.preventDefault();
    qnaModalBox.show();
    qnaModalWrap03.show();
  });
  qnaOpen04.on('click', function (e) {
    e.preventDefault();
    qnaModalBox.show();
    qnaModalWrap04.show();
  });
  qnaOpen05.on('click', function (e) {
    e.preventDefault();
    qnaModalBox.show();
    qnaModalWrap05.show();
  });

  qnaClose.on('click', function () {
    qnaModalBox.hide();
    qnaModalWrap.hide();
  });

  // 인터뷰 슬라이드 모달 오픈

  let interviewSlideModal = $('.interview-slide-detail-box');
  let interviewModalClose = $('.interview-modal-close');
  let interviewDetail = $('.interview-slide-detail-ul > li');

  interviewModalClose.on('click', function () {
    interviewSlideModal.hide();
    interviewDetail.hide();
  });

  let interviewOpen01 = $('.slide-01');
  let interviewOpen02 = $('.slide-02');
  let interviewOpen03 = $('.slide-03');
  let interviewOpen04 = $('.slide-04');
  let interviewOpen05 = $('.slide-05');
  let interviewOpen06 = $('.slide-06');
  let interviewOpen07 = $('.slide-07');
  let interviewOpen08 = $('.slide-08');
  let interviewOpen09 = $('.slide-09');
  let interviewOpen10 = $('.slide-10');
  let interviewOpen11 = $('.slide-11');
  let interviewOpen12 = $('.slide-12');
  let interviewOpen13 = $('.slide-13');

  let interviewDetail01 = $('.interview-li-01');
  let interviewDetail02 = $('.interview-li-02');
  let interviewDetail03 = $('.interview-li-03');
  let interviewDetail04 = $('.interview-li-04');
  let interviewDetail05 = $('.interview-li-05');
  let interviewDetail06 = $('.interview-li-06');
  let interviewDetail07 = $('.interview-li-07');
  let interviewDetail08 = $('.interview-li-08');
  let interviewDetail09 = $('.interview-li-09');
  let interviewDetail10 = $('.interview-li-10');
  let interviewDetail11 = $('.interview-li-11');
  let interviewDetail12 = $('.interview-li-12');
  let interviewDetail13 = $('.interview-li-13');

  interviewOpen01.on('click', function(){
    interviewSlideModal.show();
    interviewDetail01.show();
  });
  interviewOpen02.on('click', function(){
    interviewSlideModal.show();
    interviewDetail02.show();
  });
  interviewOpen03.on('click', function(){
    interviewSlideModal.show();
    interviewDetail03.show();
  });
  interviewOpen04.on('click', function(){
    interviewSlideModal.show();
    interviewDetail04.show();
  });
  interviewOpen05.on('click', function(){
    interviewSlideModal.show();
    interviewDetail05.show();
  });
  interviewOpen06.on('click', function(){
    interviewSlideModal.show();
    interviewDetail06.show();
  });
  interviewOpen07.on('click', function(){
    interviewSlideModal.show();
    interviewDetail07.show();
  });
  interviewOpen08.on('click', function(){
    interviewSlideModal.show();
    interviewDetail08.show();
  });
  interviewOpen09.on('click', function(){
    interviewSlideModal.show();
    interviewDetail09.show();
  });
  interviewOpen10.on('click', function(){
    interviewSlideModal.show();
    interviewDetail10.show();
  });
  interviewOpen11.on('click', function(){
    interviewSlideModal.show();
    interviewDetail11.show();
  });
  interviewOpen12.on('click', function(){
    interviewSlideModal.show();
    interviewDetail12.show();
  });
  interviewOpen13.on('click', function(){
    interviewSlideModal.show();
    interviewDetail13.show();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const slides2 = document.querySelectorAll('#section04 .variable2-left .objGroup');
    const dots2   = document.querySelectorAll('.pagination-dots .dot');
    let current2  = 0;
  
    function activateSlide2(idx) {
      slides2.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
      dots2.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
      current2 = idx;
    }
  
    // 초기 표시
    activateSlide2(0);
  
    // 자동 전환 (5초)
    setInterval(() => {
      activateSlide2((current2 + 1) % slides2.length);
    }, 3000);
  
    // 도트 클릭
    dots2.forEach(dot => {
      dot.addEventListener('click', () => {
        activateSlide2(Number(dot.dataset.index));
      });
    });
  
    // 슬라이더 클릭 시 다음 슬라이드로
    const slider2 = document.querySelector('#section04 .variable2-left.slider');
    slider2.addEventListener('click', () => {
      activateSlide2((current2 + 1) % slides2.length);
    });
  });
  
// 섹션 5 슬라이더 & 도트 네비게이션 연결
document.addEventListener('DOMContentLoaded', () => {
  const slider   = document.querySelector('.variable3-left.slider');
  const slides   = slider.querySelectorAll('.objGroup');
  const dots     = document.querySelectorAll('.pagination-dots5 .dot');
  let current    = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  // 1) 초기 표시
  showSlide(0);

  // 2) 자동 전환 (5초 간격)
  setInterval(() => {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }, 3000);

  // 3) 도트 클릭 네비게이션
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = Number(dot.dataset.index);
      showSlide(idx);
    });
  });

  // 4) 슬라이더 클릭 시 다음 슬라이드로
  slider.addEventListener('click', () => {
    const next = (current + 1) % slides.length;
    showSlide(next);
  });
});

// ① 페이지 로드 시 강제로 CSS zoom 100% 설정
window.addEventListener('load', () => {
  // CSS zoom 속성은 크롬·엣지에 한해 동작합니다.
  document.documentElement.style.zoom = '100%';
});

// ② Ctrl+휠 또는 Ctrl + [+,-] 단축키로 발생하는 줌 방지
window.addEventListener('wheel', e => {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

window.addEventListener('keydown', e => {
  if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
    e.preventDefault();
  }
});

const scaleWrapper = document.getElementById('scale-wrapper');
const baseWidth = 1920;
const baseHeight = 1080;



// 페이지 로드 및 창 크기 조정 시 실행
window.addEventListener('load', setScale);
window.addEventListener('resize', setScale);

function resizeScale() {
  const wrapper = document.querySelector('.wrapper');
  const baseWidth = 1920;  // 기준 해상도 너비
  const baseHeight = 1080; // 기준 해상도 높이

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // 가로와 세로 스케일 비율 중 작은 값 사용
  const scale = Math.min(windowWidth / baseWidth, windowHeight / baseHeight);

  wrapper.style.transform = 'scale(' + scale + ')';
}

// 윈도우 크기 변경 시 리사이즈 실행
window.addEventListener('resize', resizeScale);
// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', resizeScale);


var screenWidth = window.screen.width;
if (screenWidth <= 3439) {
  location.href = "http://creanswers.cafe24.com/test-main/1920";
} else if (screenWidth >= 3440 && screenWidth <= 5119) {
  location.href = "http://creanswers.cafe24.com/test-main/3440";
} else if (screenWidth >= 5120) {
  location.href = "http://creanswers.cafe24.com/test-main/5120";
}
