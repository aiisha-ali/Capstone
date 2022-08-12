<script type="text/javascript">
function validateForm() {
if (isEmpty(document.getElementById('data_2').value.trim())) {
alert('Reviewer is required!');
return false;
}
if (isEmpty(document.getElementById('data_5').value.trim())) {
alert('Title is required!');
return false;
}
if (isEmpty(document.getElementById('data_8').value.trim())) {
alert('Review is required!');
return false;
}
return true;
}
function isEmpty(str) { return (str.length === 0 || !str.trim()); }
function validateEmail(email) {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
return isEmpty(email) || re.test(email);
}
</script>