(function ($){

  // On Document Ready
  $(function (){

    initSelectpicker()

    // date pickers
    $('#from-date').datepicker({
      container:	'.from-date'
    });

    $('#to-date').datepicker({
      container:	'.to-date'
    });

  })

  function initSelectpicker() {
    if ( ! $.fn.selectpicker) return

    //Select Styler
    $('.select-filter').selectpicker({
      style: 'form-control',
      size: 4,
      title: 'seleccione'
    })
  }

})(jQuery)
