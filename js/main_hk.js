$(function(){
  $('.key_word_wrap li a').eq(0).click(function (e) { 
    e.preventDefault();
    $('.ai_chat_wrap').css({'background':'#EFEFEF'});
    $('.ai_chat_main .main_top').css({'display':'flex', 'background':'#fff', 'border-color:':'#EFEFEF'});
    $('.ai_chat_main .main_top').html(
      ` <span class="pre_talk">
          <a href="#none">이전대화</a>
        </span>
        <span class="new_talk">
            <a href="#none">새 대화</a>
            <dl>
                <dt>
                    <strong>새로운 대화를 시작하시겠습니까?</strong>
                    <span>기존 대화내용은 삭제됩니다.</span>
                </dt>
                <dd>
                    <button>취소</button>
                    <button>확인</button>
                </dd>
            </dl>

        </span>`)
    $('.intro_view').css({"display":"none"});
    $('.main_view').css({"display":"block"});  
  
  $('.main_view .key_word_wrap a').eq(0).click(function(e){
    e.preventDefault();
    $('.main_view').append(
      `<div class="right">
        <div>생성형 AI에 대해서 설명해줘</div>
      </div>`
    );
    setTimeout(function(){
      $('.main_view').append(
        `<div class="left">
          <img src="./images_hk/Baby_SUNI_sm.png" alt="" />
          <div>
            <span>네 알겠습니다.<br>
                생성형 인공지능(생성형 AI)은<br>
                대화, 이야기, 이미지, 동영상, 음악 등<br>
                새로운 콘텐츠와 아이디어를 만들 수 있는 AI의 일종입니다..</span>
            <ul class="good_bad">
                <li><a href="#none" class="up" onclick="active()"></a></li>
                <li><a href="#none" class="down" onclick="active()"></a></li>
                <li><a href="#none" class="copy" onclick="active()"></a></li>
                <li><a href="#none" class="refresh" onclick="active()"></a></li>
            </ul>
              </div>
        </div>`
      )
    },1000)

   })

   $('.main_view .key_word_wrap a').eq(1).click(function(e){
    e.preventDefault();
    $('.main_view').append(
      `<div class="right">
        <div>생성형 AI 관련 콘텐츠를 추천해드립니다.</div>
      </div>`
    );
    setTimeout(function(){
      $('.main_view').append(
        `<div class="left">
          <img src="./images_hk/Baby_SUNI_sm.png" alt="" />
          <div>
              <span>네 알겠습니다.</span>
              <span>mySUNI에서 생성형 AI 와 관련된 콘텐츠는 다음과 같습니다.</span>
              <div>
                  스와이퍼영역
              </div>
              <ul class="good_bad">
                  <li onclick ="active()"><a href="#none" class="up"></a></li>
                  <li onclick ="active()"><a href="#none" class="down"></a></li>
                  <li onclick ="active()"><a href="#none" class="copy"></a></li>
                  <li onclick ="active()"><a href="#none" class="refresh"></a></li>
              </ul>
          </div>
      </div>`
      )
    },1000)

   })
  });//

  $('.pre_talk').click(function(e){
    e.preventDefault()
    $('.ai_chat_wrap').css({'background':'#EFEFEF'});
    $('.ai_chat_main').html(
      `
      <section class="pre_talk_view">
        <ul>
            <li><a href="#none">2024년 01월 04일 대화 보기</a></li>
            <li><a href="#none">2024년 01월 03일 대화 보기</a></li>
            <li><a href="#none">2024년 01월 02일 대화 보기</a></li>
        </ul>
      </section>
      `
    );

    $('.ai_chat_footer').html(
      `<button onclick="main_turn()">대화하기</button>`
    )
  })




})//ready

function main_turn(){
  $('.ai_chat_footer').on('click','>button', function(){
    $('.ai_chat_wrap').css({'background':'#fff'});
    $('.ai_chat_main').html(
      `
      <div class="main_top">
        <span class="pre_talk">
            <a href="#none">이전대화</a>
        </span>
      </div>
      <section class="intro_view">
            <img src="./images_hk/Baby_SUNI_big.png" alt="">
            <dl>
                <dt>안녕하세요 홍길동 님<br> 저는 mySUNI를 200% 활용할 수 있도록 <br>도와드리는 'OOO' 입니다.</dt>
                <dd>
                    <span>
                        mySUNI이용 중 궁금하신 사항이나 강의 내용요약 등의 도움이<br> 필요하시면저에게 문의해 주세요. <br>홍길동 님께서 이용하신 mySUNI콘텐츠와mySUNI 사용이력을<br> 바탕으로 관심을 가지실 만한 콘텐츠키워드를 <br>
                        다음에 정리해 보았습니다.
                    </span>
                </dd>
            </dl>
            <ul class="key_word_wrap">
                <li><a href="#none">CES 2024</a></li>
                <li><a href="#none">생성형 AI</a></li>
                <li><a href="#none">챗GPT</a></li>
            </ul>
      </section>
      `
    )
    $('.ai_chat_footer').html(
      ` <form action="">
            <input type="text" placeholder="대화를 시작해 보세요.">
            <button></button>
        </form>`
    )
  })
}

function active(){
  var good_bad = $('.good_bad li');
  for (let i = 0; i < good_bad.length; i++) {
    $(good_bad).eq(i).on('click', 'a', function(e){
      console.log(i);
      e.preventDefault();
      $(good_bad).eq(i).children('a').toggleClass('active');
    })
  }
}

// 
