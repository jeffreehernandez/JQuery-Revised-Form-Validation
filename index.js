$(".gender-btn").on("click", function () {
  $(".gender-btn").removeClass("active");
  $(this).addClass("active");
});

function liveValidate(id, message) {
  $("#" + id).on("keyup blur", function () {
    const val = $(this).val().trim();

    if (val === "") {
      $(this).addClass("invalid").removeClass("valid");
      $("#" + id + "-error").text(message);
    } else {
      $(this).addClass("valid").removeClass("invalid");
      $("#" + id + "-error").text("");
    }
  });
}

liveValidate("fullname", "Full name is required");
liveValidate("dob", "Date of birth is required");
liveValidate("age", "Age is required");
liveValidate("email", "Email is required");
liveValidate("phone", "Phone number is required");
liveValidate("street", "Street is required");
liveValidate("city", "City is required");
liveValidate("province", "Province is required");
liveValidate("zip", "Zip code is required");

$("#enrollForm").on("submit", function (e) {
  e.preventDefault();

  let valid = true;

  $("input").each(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("invalid");
      valid = false;
    }
  });

  if ($(".gender-btn.active").length === 0) {
    $("#gender-error").text("Please select a gender");
    valid = false;
  } else {
    $("#gender-error").text("");
  }

  if (valid) {
    alert("Form Submitted Successfully!");
  }
});
