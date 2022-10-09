const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4050/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneB = document.getElementById("fortuneBtn")

const getFortune = () => {
    axios.get("http://localhost:4050/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneB.addEventListener('click', getFortune)

document.querySelector(".submit").addEventListener("submit", (e) => {
    e.preventDefault();
    let new_name = document.querySelector(".submit-input").value;
    let new_toy = document.querySelector(".Favorite").value;
    let dog_info = {
        dog_name : new_name,
        favorite_toy: new_toy
    }
    axios.post("http://www.localhost:4050/api/dogs", dog_info)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
})