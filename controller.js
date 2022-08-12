module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Seriously, your skin has the best glow!",
      "Your complexion is stunning!",
      "Your skin is glowing from within!",
      "Your skin routine is clearly working!",
    ];

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
     postContact: (req, res) => {
        let info = []
        const{message, emailAddress, name} = req.body
        info.push(req.body)
        res.status(200).send("Thank you for reaching out!")
     } 
};



