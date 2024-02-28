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
    }
}

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

const sam_fnc = {
    send_msg: function(){
        if($('#msg').val().length > 0){
            $('.ai_chat_cont_inner').append(`<div class="chat_sec user">
                <div class="chat_inner">`+$('#msg').val()+`</div>
            </div>`);
            setTimeout(function(){
                sam_fnc.answer_msg($('#msg').val());
            },800);
        }
    }, answer_msg: function(msg){
        $('.ai_chat_cont_inner').append(`<div class="chat_sec ai">
            <div class="chat_inner">`+msg+`(이)가 궁금하신가요??</div>
        </div>`);
    }, keyword_select: function(){
        $('#msg').val("'"+event.target.textContent+"' 에 대해서 설명해줘");
        var _target = document.getElementById('msg');
        ai_babysuni.val_chk(_target);
    }, reset: function(){
        $('.ai_chat_cont_inner').empty();
    }
}