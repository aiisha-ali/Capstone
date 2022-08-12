const complimentBtn = document.getElementById("complimentButton");
const toastLiveExample = document.getElementById("liveToast");
const complimentText = document.getElementById("compliment-text");
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    const toast = new bootstrap.Toast(toastLiveExample);
complimentText.textContent=data
    toast.show();
  });
};

complimentBtn.addEventListener("click", getCompliment);
