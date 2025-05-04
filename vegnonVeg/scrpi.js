// Selecting all required elements
const wrapper = document.querySelector(".wrapper");
const toast = wrapper.querySelector(".toast");
const title = toast.querySelector("span");
const subTitle = toast.querySelector("p");
const wifiIcon = toast.querySelector(".icon i");
const closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = () => {
            if (xhr.status === 200 && xhr.status < 300) {
                online();
            } else {
                offline();
            }
        };
        xhr.onerror = () => {
            offline();
        };
        xhr.send();
    }

    function online() {
        wifiIcon.className = "uil uil-wifi-slash";
        toast.classList.remove("offline");
        title.textContent = "You're online now!";
        subTitle.textContent = "Hurray!! Internet is connected.";
        wrapper.classList.remove("hide");
    }

    function offline() {
        wifiIcon.className = "uil uil-wifi-slash";
        toast.classList.add("offline");
        title.textContent = "You're offline now!";
        subTitle.textContent = "Oops! Internet is disconnected.";
        wrapper.classList.remove("hide");
    }

    closeIcon.addEventListener("click", () => {
        wrapper.classList.add("hide");
    });

    setInterval(() => {
        ajax();
    }, 10000);
};