$(function(){
  function buildHTML(message){
    if (message.image && message.content){
      var html =
        `<div class="chat-message__area">
          <div class="chat-message__area__date">
            <div class ="chat-message__area__date--name">
              ${message.user_name}
            </div>
            <div class="chat-message__area__date--time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-message__area--talk">
            ${message.content}
            <img class="lower-message__image" src=${message.image}>
          </div>`
          return html;
      } else if(message.content){
        var html =
        `<div class="chat-message__area"> 
          <div class="chat-message__area__date">
            <div class ="chat-message__area__date--name">
              ${message.user_name}
            </div>
            <div class="chat-message__area__date--time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-message__area--talk">
              ${message.content}
            </p>
          </div>
        </div>`
          return html;
      }else{
        var html =
        `<div class="chat-message__area">
          <div class="chat-message__area__date">
            <div class ="chat-message__area__date--name">
              ${message.user_name}
            </div>
            <div class="chat-message__area__date--time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-message__area--talk">
            <img class="lower-message__image" src=${message.image}>
          </div>`
          return html;
      }
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        console.log(html)
        $('.chat-message').append(html);
        $('form')[0].reset();
        $('.chat-message').animate({
          scrollTop: $('.chat-message')[0].scrollHeight});
        $('.chat-form__send').prop('disabled',false);
      })
      .fail(function(){
        alert("メッセージ送信に失敗しました");
        $('.chat-form__send').prop('disabled',false);
      });
    });
  })
