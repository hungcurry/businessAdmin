

  $(document).ready(function () {

    // 編輯的 Modal 事件
    $('#editModal').on('show.bs.modal', function (event) {
      let button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
      let title = button.data('title') // 使用 data-* 來取得特定內容

      let modal = $(this)
      modal.find('.modal-title').text(title) // 寫入資料
    });

    $('#removeModal').on('show.bs.modal', function (event) {
      let button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
      let title = button.data('title') // 使用 data-* 來取得特定內容

      let modal = $(this)
      modal.find('.modal-title').text('確認' + title) // 寫入資料
    });

  });


  // tooltips
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  })



