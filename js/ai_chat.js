const ai_babysuni = {
    active: function(){
        $('.ai_chat_wrap').addClass('active');
    }, close: function(){
        $('.ai_chat_wrap').removeClass('active');
    }, val_chk: function(){
        if(event.target.value.length > 0){
            $('.btn_send').addClass('active');
        } else {
            $('.btn_send').removeClass('active');
        }
    }, send_msg: function(){
        if($('#msg').val().length > 0){
            $('.ai_chat_cont_inner').append(`<div class="chat_sec user">
                <div class="chat_inner">`+$('#msg').val()+`</div> 
            </div>`);
            setTimeout(function(){
                ai_babysuni.answer_msg($('#msg').val());
            },800);
        }
    }, answer_msg:function(msg){
        $('.ai_chat_cont_inner').append(`<div class="chat_sec ai">
            <div class="chat_inner">`+msg+`(이)가 궁금하신가요??</div>
        </div>`);
    }
}

// function val_chk(el) {
//     console.log(el.value.length);
//     // if(el.val)
// }

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}