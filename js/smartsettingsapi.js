var checkmark = $("#admincheckbox");
var staff = $("#Staff");

function Admin(name){
  if(checkmark.is(":checked"))
  {
    staff.html("<span>Admin Enabled. Welcome, " + name + "</span>");
  }
}