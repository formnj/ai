const ai_babysuni = {
    active: function(){
        $('.ai_chat_wrap').addClass('active');
    }, close: function(){
        $('.ai_chat_wrap').removeClass('active');
    }, val_chk: function(_target){
        if(_target.value.length > 0){
            $('.btn_send').addClass('active');
        } else {
            $('.btn_send').removeClass('active');
        }
    }, keyword_select: function(){
        event.target.classList.add('active');
    }, scroll: function(){ //채팅 입력 시 스크롤 하단으로 이동
        $('.ai_chat_cont').scrollTop($('.ai_chat_cont_inner')[0].scrollHeight);
    }
}

const modal = {
    open: function(){
        $('.ai_modal').addClass('active');
    }, close: function(){
        event.target.closest('.ai_modal').classList.remove('active');
    }
}

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function scroll_top(_target) {
    _target.animate({
        scrollTop:0
    });
}

const sam_fnc = {
    send_msg: function(){
        if($('#msg').val().length > 0){
            $('.ai_chat_cont_inner').append(`<div class="chat_sec user">
                <div class="chat_inner">`+$('#msg').val()+`</div>
            </div>`);
            setTimeout(function(){
                // msg
                sam_fnc.answer_msg($('#msg').val());

                $('.ai_chat_input textarea').removeAttr('style');
            },500);

            if(!$('.ai_chat_wrap').hasClass('chatting')){
                $('.ai_chat_wrap').addClass('chatting');
            }
        }
    }, answer_msg: function(msg){
        $('.ai_chat_cont_inner').append(`<div class="chat_sec ai">
            <div class="chat_inner">`+msg+`(이)가 궁금하신가요??
                `+comment_action+`
            </div>
        </div>`);

        $('#msg').val('');
        var _target = document.getElementById('msg');
        ai_babysuni.val_chk(_target);

        ai_babysuni.scroll();

    }, keyword_select: function(){
        $('#msg').val("'"+event.target.textContent+"' 에 대해서 설명해줘");
        var _target = document.getElementById('msg');
        ai_babysuni.val_chk(_target);
    }, reset: function(){
        $('.ai_chat_cont_inner').empty();

        setTimeout(function(){
            $('.ai_chat_cont_inner').append(`<div class="chat_sec ai">
            <div class="chat_inner">
                <p>mySUNI 이용 중 궁금하신 사항이나 강의 내용요약 등의 도움이 필요하시면 저에게 문의해 주세요.</p>
                <p>홍길동 님께서 이용하신 mySUNI 콘텐츠와 mySUNI 사용 이력을 바탕으로 관심을 가지실 만한 콘텐츠 키워드를 다음에 정리해 보았습니다.</p>
                <ul class="keyword">
                    <li><button onclick="ai_babysuni.keyword_select(); sam_fnc.keyword_select();">CES 2024</button></li>
                    <li><button onclick="ai_babysuni.keyword_select(); sam_fnc.keyword_select();">생성형 AI</button></li>
                    <li><button onclick="ai_babysuni.keyword_select(); sam_fnc.keyword_select();">챗 GPT</button></li>
                </ul>
            </div>
        </div>`);
        }, 400);
    }
}

/* comment action */
var comment_action = `<ul class="comment_action">
<li>
    <button class="good">좋아요</button>
    <!-- tooltip -->
    <span class="tooltip">좋은 답변이네요</span>
    <!-- //tooltip -->
</li>
<li>
    <button class="bad">싫어요</button>
    <!-- tooltip -->
    <span class="tooltip">아쉬운 답변이네요</span>
    <!-- //tooltip -->
</li>
<li>
    <button class="refresh">새로고침</button>
    <!-- tooltip -->
    <span class="tooltip">다른답변 보기</span>
    <!-- //tooltip -->
</li>
<li>
    <button class="copy">복사</button>
    <!-- tooltip -->
    <span class="tooltip">복사</span>
    <!-- //tooltip -->
</li>
</ul>`;


/* drag resize */
const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;

// 마우스의 위치값 저장을 위해 선언
let x = 0;
let y = 0;

// 크기 조절시 왼쪽 Element를 기준으로 삼기 위해 선언
let leftWidth = 0;

// resizer에 마우스 이벤트가 발생하면 실행하는 Handler
const mouseDownHandler = function (e) {
    // 마우스 위치값을 가져와 x, y에 할당
    x = e.clientX;
    y = e.clientY;
    // left Element에 Viewport 상 width 값을 가져와 넣음
    leftWidth = leftSide.getBoundingClientRect().width;

    // 마우스 이동과 해제 이벤트를 등록
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // 마우스가 움직이면 기존 초기 마우스 위치에서 현재 위치값과의 차이를 계산
    const dx = e.clientX - x;
    const dy = e.clientY - y;

  	// 크기 조절 중 마우스 커서를 변경함
    // class="resizer"에 적용하면 위치가 변경되면서 커서가 해제되기 때문에 body에 적용
    document.body.style.cursor = 'col-resize';
    
    // 이동 중 양쪽 영역(왼쪽, 오른쪽)에서 마우스 이벤트와 텍스트 선택을 방지하기 위해 추가
    leftSide.style.userSelect = 'none';
    leftSide.style.pointerEvents = 'none';
    
    rightSide.style.userSelect = 'none';
    rightSide.style.pointerEvents = 'none';
    
    // 초기 width 값과 마우스 드래그 거리를 더한 뒤 상위요소(container)의 너비를 이용해 퍼센티지를 구함
    // 계산된 퍼센티지는 새롭게 left의 width로 적용
    const newLeftWidth = ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
    leftSide.style.width = `${newLeftWidth}%`;
};

const mouseUpHandler = function () {
    // 모든 커서 관련 사항은 마우스 이동이 끝나면 제거됨
    resizer.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');

    leftSide.style.removeProperty('user-select');
    leftSide.style.removeProperty('pointer-events');

    rightSide.style.removeProperty('user-select');
    rightSide.style.removeProperty('pointer-events');

    // 등록한 마우스 이벤트를 제거
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

// 마우스 down 이벤트를 등록
resizer.addEventListener('mousedown', mouseDownHandler);