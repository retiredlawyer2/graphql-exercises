import { GraphQLServer } from 'graphql-yoga'

// Scalar types: String, Boolean, Int, Float, ID

// Demo data lists
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

// Type definitions (schema)
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        users(parent, { query }, ctx, info) {
            if (!query) {
                return users
            }
            return users.filter(user => {
                return user.name.toLowerCase().includes(query.toLowerCase())
            })
        },
        posts(parent, { query }, ctx, info) {
            if (!query) {
                return posts
            }
            return posts.filter(post => {
                const isTitleMatch = post.title.toLowerCase().includes(query.toLowerCase())
                const isBodyMatch = post.body.toLowerCase().includes(query.toLowerCase())
                return isTitleMatch || isBodyMatch
            })
        },
        comments() {
            return comments
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
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find(user => {
                return user.id === parent.author
            })
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => {
                return comment.post === parent.id
            })
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter(post => {
                return post.author === parent.id
            })
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => {
                return comment.author === parent.id
            })
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find(user => {
                return user.id === parent.author
            })
        },
        post(parent, args, ctx, info) {
            return posts.find(post => {
                return post.id === parent.post
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!');
})