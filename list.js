

  $(document).ready(function () {

    // 編輯的 Modal 事件
    $('#editModal').on('show.bs.modal', function (event) {
      let button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
      let title = button.data('title') // 使用 data-* 來取得特定內容
      let state = button.data('state') // 使用 data-* 來取得特定內容

      let modal = $(this)
      modal.find('.modal-title').text(title) // 寫入資料

      // 套用 input 資料
      let name = button.data('username');
      modal.find('#userName').val(name);
      let email = button.data('email');
      modal.find('#userEmail').val(email);
      let itemCount = button.data('itemcount');
      modal.find('#itemCount').val(itemCount);
      if(title === '快速下單') {
        modal.find('#itemNM').val('');
        $('#itemNM').removeAttr('readonly');
        $('#userName').removeAttr('readonly');
        $('#userEmail').removeAttr('readonly');
        $('#itemCount').removeAttr('readonly');
      }
      else if(state === '查看') {
        modal.find('#itemNM').val(title);
        document.getElementById("itemNM").setAttribute('readonly' ,'');
        document.getElementById("userName").setAttribute('readonly' ,'');
        document.getElementById("userEmail").setAttribute('readonly' ,'');
        document.getElementById("itemCount").setAttribute('readonly' ,'');
      }
      else {
        modal.find('#itemNM').val(title);
        $('#userName').removeAttr('readonly');
        $('#userEmail').removeAttr('readonly');
        $('#itemCount').removeAttr('readonly');
        document.getElementById("itemNM").setAttribute('readonly' ,'');
      }
    });

    $('#removeModal').on('show.bs.modal', function (event) {
      let button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
      let title = button.data('title') // 使用 data-* 來取得特定內容

      let modal = $(this)
      modal.find('.modal-title').text('確認' + " " + title) // 寫入資料
    });

  });


  // tooltips
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  })



