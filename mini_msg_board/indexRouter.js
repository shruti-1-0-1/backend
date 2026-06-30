const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Mini Message Board",
        messages: messages
    });
});

//form route 
indexRouter.get("/new", (req, res) => {
    res.render("form");
});

//post route
indexRouter.post("/new", (req, res) => {

    const messageUser = req.body.messageUser;

    const messageText = req.body.messageText;

    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date()
    });

    res.redirect("/");
});

//message details route
indexRouter.get("/message/:id", (req, res) => {

    const id = req.params.id;

    const message = messages[id];

    res.render("message", {
        message
    });
});

module.exports = indexRouter;