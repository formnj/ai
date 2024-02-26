$(document).ready(function(){
    /* left sidebar 로드 : 퍼블 테스트 용 */
    $('.sidebar').load('./include/sidebar.html');

    /* lnb click */
    $('.sidebar').delegate('a', 'click', function(){
        if($(this).hasClass('active')){
            $(this).siblings('ul').stop().slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings('ul').stop().slideDown();
        }
        if($(this).closest('ul').hasClass('depth3')){
            $('.lnb-wrap .depth3 a').removeClass('active');
            $(this).addClass('active');
        }
    });

    /* input text 입력 시 x 버튼 노출 */
    $('.input-wrap input').keypress(function(){
        input_btn_chk(this);
    });

    /* input del button 클릭 시 입력값 삭제 */
    $('.input-wrap').delegate('button.del', 'click', function(){
        input_btn_fn(this);
    });

    $('.list_wrap').delegate('.reply_button button','click', function(){
        if($(this).parent().hasClass('active')){
            $(this).closest('.cont').find('.reply').stop().slideUp();
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
            $(this).closest('.cont').find('.reply').stop().slideDown();
        }
    });
});

/* 즐겨찾기 */
function onToggleFavorite(event) {
    event.stopPropagation();
    event.currentTarget.classList.toggle("active");
    if (event.currentTarget.classList.contains("active")) {
        event.currentTarget.innerHTML = "즐겨찾기 제거";
    } else {
        event.currentTarget.innerHTML = "즐겨찾기 추가";
    }
}

function onToggleSidebar(event) {
    event.currentTarget.classList.toggle("hide");
    if (event.currentTarget.classList.contains("hide")) {
        event.currentTarget.innerHTML = "sidebar 열기";
    } else {
        event.currentTarget.innerHTML = "sidebar 닫기";
    }
}

/* Input Form */
function input_btn_chk(e){
    var icon_button = e.closest('.input-wrap').querySelector('button.del')
    if(e.value.length>0){
        icon_button.style.cssText="display:block;"
    }else{
        icon_button.style.cssText="display:none;"
    }
}

function input_btn_fn(e){ // del 클릭시, input 내용 삭제
    var input = e.closest('.input-wrap').querySelector('input');
    input.value = null;
    e.style.display="none";
}