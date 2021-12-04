const Query = {
    users(parent, { query }, { db }, info) {
        if (!query) {
            return db.users
        }
        return db.users.filter(user => {
            return user.name.toLowerCase().includes(query.toLowerCase())
        })
    },
    posts(parent, { query }, { db }, info) {
        if (!query) {
            return db.posts
        }
        return db.posts.filter(post => {
            const isTitleMatch = post.title.toLowerCase().includes(query.toLowerCase())
            const isBodyMatch = post.body.toLowerCase().includes(query.toLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },
    comments(parent, args, { db }, info) {
        return db.comments
    },
    me() {
        return {
            id: 'abc123',
            name: 'Hasan Babba',
            email: 'aaa@gg.com',
            age: 15
        }
    },
    post() {
        return {
            id: "id",
            title: "post title",
            body: "post body",
            published: false
        }
    }
}

export { Query as default }