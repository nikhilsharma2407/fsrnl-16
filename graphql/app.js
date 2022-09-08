const { application } = require('express');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { GraphQLEnumType, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require('graphql');

const app = express();

const friends = [
        {
            "id": "60d0fe4f5311236168a109cc",
            "title": "ms",
            "firstName": "Adina",
            "lastName": "Barbosa",
            "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109cd",
            "title": "mr",
            "firstName": "Roberto",
            "lastName": "Vega",
            "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109cc",
            "title": "mr",
            "firstName": "Rudi",
            "lastName": "Droste 2",
            "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109cf",
            "title": "mrs",
            "firstName": "Carolina",
            "lastName": "Lima",
            "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d0",
            "title": "mr",
            "firstName": "Emre 1",
            "lastName": "Asikoglu",
            "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d3",
            "title": "mr",
            "firstName": "Friedrich-Karl",
            "lastName": "Brand",
            "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d4",
            "title": "mr",
            "firstName": "Valentin",
            "lastName": "Ortega",
            "picture": "https://randomuser.me/api/portraits/med/men/3.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d6",
            "title": "mrs",
            "firstName": "Elisa",
            "lastName": "Lorenzo",
            "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d8",
            "title": "mrs",
            "firstName": "Karoline",
            "lastName": "Sviggum",
            "picture": "https://randomuser.me/api/portraits/med/women/61.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d9",
            "title": "ms",
            "firstName": "Nuria",
            "lastName": "Leon",
            "picture": "https://randomuser.me/api/portraits/med/women/93.jpg"
        }
];

const users = [
    {name:"Nikhil",username:"nikhil101",friendList:["60d0fe4f5311236168a109cc","60d0fe4f5311236168a109cf"]},
    {name:"temp",username:"test",friendList:["60d0fe4f5311236168a109cc","60d0fe4f5311236168a109cf"]}
];

const FriendType = new GraphQLObjectType({
    name:"Friend",
    description:"this is the object for Friend",
    fields:()=>({
        id:{type:GraphQLString},
        title:{type:GraphQLString},
        firstName:{type:GraphQLString},
        lastName:{type:GraphQLString},
        picture:{type:GraphQLString},
        name:{
            type:GraphQLString,
            resolve:({title,firstName,lastName})=>`${title} ${firstName} ${lastName}`

        }
    })
})

const UserType = new GraphQLObjectType({
    name:"User",
    description:"this is the object for User",
    fields:()=>({
        username:{type:GraphQLString},
        name:{type:GraphQLString},
        friendList:{type:GraphQLList(GraphQLString)},
        friends:{
            type:GraphQLList(FriendType),
            resolve:(user)=>{
                return user.friendList.map(id=>friends.find(friend=>friend.id===id))
            }
        }
    })
})



const Query = new GraphQLObjectType({
    name:"Query",
    description:"this is the Query Object",
    fields:()=>({
        friends:{
            type:GraphQLList(FriendType),
            resolve:(friend)=>{
                return friends
            }
        },
        friend:{
            type:FriendType,
            args:{
                name:{type:GraphQLNonNull(GraphQLString)}
            },
            resolve:(parent,args)=>{
                return friends.find(friend=>friend.firstName==args.name)
            }
        },
        user:{
            type:UserType,
            args:{
                username:{type:GraphQLNonNull(GraphQLString)}
            },
            resolve:(parent,args)=>{
                return users.find(user=>user.username==args.username)
            }
        },
        users:{
            type:GraphQLList(UserType),
            resolve:()=>users
        },
    })
})

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    description:"this is the Mutatiion Object",
    fields:()=>({

        createUser:{
            type:UserType,
            description:"Add a user",
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                username:{type:GraphQLNonNull(GraphQLString)},
                friendList:{type:GraphQLList(GraphQLString)}
            },
            resolve:(parent,{username,name,friendList})=>{
                const user = {username,name,friendList};
                users.push(user);
                return user;
            }
        },
        addFriend:{
            type:FriendType,
            description:"Add a Friend",
            args:{
                username:{type:GraphQLNonNull(GraphQLString)},
                id:{type:GraphQLNonNull(GraphQLString)}
            },
            resolve:(parent,{username,id})=>{
                const user = users.find(user=>user.username===username);
                user.friendList.push(id);
                const friend = friends.find(friend=>friend.id===id);
                return friend;
            }
        },
    })
})


const schema = new GraphQLSchema({
    query:Query,
    mutation:Mutation
})

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true,
}));

app.listen(5000,()=>{console.clear();console.log("graphql server running on port 5000")})


// decalre types
// Decalare the Root query
// Declare the mutations
// Decalre the schema