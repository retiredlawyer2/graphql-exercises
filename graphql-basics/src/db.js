
const users = [
    {
        id: '1',
        name: 'Andrew',
        email: 'andrew@gg.com',
        age: 27
    },
    {
        id: '2',
        name: 'Sarah',
        email: 'sarah@gg.com'
    },
    {
        id: '3',
        name: 'Hasan',
        email: 'hasan@gg.com',
        age: 31
    }
]

const posts = [
    {
        id: "a1.s1",
        title: "JavaScript",
        body: "my first develop language experience",
        published: true,
        author: "3"
    },
    {
        id: "b2.d2",
        title: "Joomla",
        body: "WOW! what is the Joomla?! JavaScript??",
        published: false,
        author: "2"
    },
    {
        id: "c3.f3",
        title: "vs Code",
        body: "my second coding experience with this editor :)",
        published: true,
        author: "3"
    },
    {
        id: "d4.g4",
        title: "vs Code",
        body: "my second coding experience with this editor :)",
        published: true,
        author: "3"
    },
]

const comments = [
    {
        id: "com1",
        text: "Good post!",
        author: "1",
        post: "a1.s1"
    },
    {
        id: "com5",
        text: "Very useful infos, thanks!",
        author: "2",
        post: "a1.s1"
    },
    {
        id: "com2",
        text: "Thanks!",
        author: "2",
        post: "b2.d2"
    },
    {
        id: "com3",
        text: "Thank you!",
        author: "3",
        post: "c3.f3"
    },
    {
        id: "com4",
        text: "Thanks a lot!",
        author: "1",
        post: "b2.d2"
    }
]

const db = {
    users,
    posts,
    comments
}

export { db as default }