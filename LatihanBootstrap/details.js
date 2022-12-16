$(document).ready(function () {
  $("#btnAlert").click(function (e) {
    $("#divAlert").removeClass("d-none");
    e.preventDefault();
    window.scrollTo(0, 0);
    const nama = $("#inputNama").val();
    $("#alertText").html(nama);
  });

  $("#buttonClose").click(function () {
    $("#divAlert").addClass("d-none");
  });

  //  DRY MODE
  $("#imageContent").click(function (e) {
    e.preventDefault();
    const imageSrc = $(this).attr("src");
    $("#").attr("src", imageSrc);
  });

  $("#chair-id").click(function (e) {
    e.preventDefault();
    const chairid = $("#chair-id").attr("src");
    $("#chair").attr("src", chairid);
  });

  $("#chair4").click(function (e) {
    e.preventDefault();
    const chair4 = $("#chair4").attr("src");
    $("#imageContent").attr("src", chair4);
  });

  $("#chair3").click(function (e) {
    e.preventDefault();
    const chair3 = $("#chair3").attr("src");
    $("#imageContent").attr("src", chair3);
  });

  $("#chair2").click(function (e) {
    e.preventDefault();
    const chair2 = $("#chair2").attr("src");
    $("#imageContent").attr("src", chair2);
  });

  $("#chair1").click(function (e) {
    e.preventDefault();
    const chair1 = $("#chair1").attr("src");
    $("#imageContent").attr("src", chair1);
  });

  $("#form-checkout").submit(function (e) {
    e.preventDefault();

    const firstName = $("#firstName", this).val();
    const lastName = $("#lastName", this).val();
    const name = firstName + " " + lastName;
    const address = $("#address", this).val();

    $("#form-container").addClass("d-none");
    $("#checkout").removeClass("d-none");

    $("h5", "#checkout").text("Terimakasih, " + name);
    $("p", "#checkout").text("Paket akan dikirim ke " + address);
  });

  $("button", "#checkout").click(function (e) {
    e.preventDefault();
    window.location.href = "index.html";
  });
});
