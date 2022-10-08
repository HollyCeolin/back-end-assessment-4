

    const dog_info = [
        {"id": 1, "dog_name": "Bruce", "favorite_toy" : "woodstock"},
        {"id": 2, "dog_name":"Tacoma", "favorite_toy" : "basketball"},
        {"id": 3, "dog_name": "Fiona", "favorite_toy" : "sticks"},
    ]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way.", "A lifetime of happiness lies ahead of you.", "Adventure can be real happiness." ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },


    getDogs: (req, res)=> {
        res.status(200).send(dog_info)
    },

    postDogs: (req, res) => {
        console.log(req.body);

        const dog_add = {
            id: req.body.id,
            dog_name: req.body.dog_name
        }

        dog_info.push(dog_add);
        res.status(200).send({message: "successful", dog_info});
    },

    editDogs: (req, res) => {
        const {id}= req.params;
        const dog_update = dog_info.find((dog_obj)=> dog_obj.id === parseInt(id))
        dog_update.dog_name=req.body.dog_name;
        res.status(200).send({message: "successful", dog_info});

    },

    deleteDogs: (req, res) => {
        const dog_delete = dog_info.find((dog_obj) => dog_obj.id === parseInt(req.params.id));
        dog_info.splice(req.params.id -1, 1);
        res.status(200).send({message: "successful", dog_info});
    }
}