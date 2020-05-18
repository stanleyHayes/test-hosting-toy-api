const express = require("express");

const app = express();
app.use(express.json());

const friends = [];

app.post('/contact', (req, res) => {
    const friend = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        id: friends.length + 1
    }


    friends.push(friend);

    res.status(201).json({
        data: friend,
        success: true
    });
});

app.get('/contact', (req, res) => {
    res.status(200).json({
        success: true,
        count: friends.length,
        data: friends
    })
});

app.get('/contact/:id', (req, res) => {
    const id = req.params.id;
    console.log(foundFriends)
    const foundFriends = friends.filter((friend) => {
        return friend.id === id
    });
    console.log(foundFriends)
    if (foundFriends.length === 0) {
        return res.status(404).json({
            success: false,
            error: `Contact with id ${id} not found`
        });
    }
    res.status(200).json({
        data: foundFriends[0],
        success: true
    });
});

app.put('/contact/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;

    const foundFriends = friends.filter((friend) => {
        return friend.id === id
    });
    if (foundFriends.length === 0) {
        return res.status(404).json({
            success: false,
            error: `Contact with id ${id} not found`
        });
    }
    let foundFriend = {...foundFriends[0] };
    if (name) {
        foundFriend = {...foundFriend, 'name': name };
    }
    if (email) {
        foundFriend = {...foundFriend, 'email': email };
    }
    if (phone) {
        foundFriend = {...foundFriend, 'phone': phone };
    }

    friends = friends.map((friend) => {
        if (friend.id === id) {
            friend = {...foundFriend }
        }
        return friend;
    })

    res.status(200).json({
        data: foundFriend,
        success: true
    });
});

app.delete('/contact/:id', (req, res) => {
    const id = req.params.id;

    const foundFriends = friends.filter((friend) => {
        return friend.id === id
    });
    if (foundFriends.length === 0) {
        return res.status(404).json({
            success: false,
            error: `Contact with id ${id} not found`
        });
    }

    friends = friends.filter((friend) => {
        return friend.id !== id;
    })

    res.status(200).json({
        success: true,
        message: `Friend with id of ${id} deleted`
    })
});

app.listen(process.env.PORT || 5000, () => console.log('Server listening on port 5000'));