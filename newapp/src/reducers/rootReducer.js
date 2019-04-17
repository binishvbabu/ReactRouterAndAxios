const initState ={
    posts:[
        {
            id: 1,
            body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        },
        {
            id: 2,
            body: "est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla",
            title: "qui est esse"
        },
        {
            id: 3,
            body: "et iusto sed quo iure↵voluptatem occaecati omnis eligendi aut ad↵voluptatem doloribus vel accusantium quis pariatur↵molestiae porro eius odio et labore et velit aut",
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"

        }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type==='DELETE_POST'){
        let posts = state.posts.filter(post => post.id != action.id);
        return {
            posts:posts
        }
    }
    return state;
}

export default rootReducer;