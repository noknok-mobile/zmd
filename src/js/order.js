const orderForm = document.forms.order;

function setOrderTime(e) {
  let datestring = e.target.dataset.ordertime;
  orderForm.ordertime.value = datestring;

  options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  let datetime = new Date(datestring);
  orderForm.ordertime_format.value = datetime.toLocaleString("ru", options);
}


