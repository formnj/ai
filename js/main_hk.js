$(function(){

  
})//ready


function chatting(){
  $('.ai_chat_wrap').addClass('chatting');
}




/* 함수 */
function main_btn_1(){
    e.preventDefault();
    $('.main_view').append(
      `<div class="right">
        <div>CES 2024에 대해서 설명해줘</div>
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
                새로운 콘텐츠와 아이디어를 만들 수 있는 AI의 일종입니다..</span>`
                + good_bad +
              `</div>
        </div>`
      )
    },800)

}



function main_btn_2(){
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
            <span>네 알겠습니다.</span>
            <span>mySUNI에서 생성형 AI 와 관련된 콘텐츠는 다음과 같습니다.</span>
            <div>
                스와이퍼영역
            </div>`
          + good_bad +   
        `</div>
    </div>`
      )
    },800)
}





/* inner html */
var good_bad = `<ul class="good_bad">
<li>
  <a href="#none" class="up"></a>
  <em>좋은 답변이네요</em>
</li>
<li>
  <a href="#none" class="down"></a>
  <em>아쉬운 답변이네요</em>
</li>
<li>
  <a href="#none" class="copy"></a>
  <em>다른답변 보기</em>
</li>
<li>
  <a href="#none" class="refresh"></a>
  <em>복사</em>
</li>
</ul>`