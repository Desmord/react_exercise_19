import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;

export const getPostById = ({ posts }, id) => posts.find(post => post.id === id)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName(`REMOVE_POST`);
const ADD_POST = createActionName(`ADD_POST`);
const EDIT_POST = createActionName(`EDIT_POST`);

export const removePost = payload => ({ type: REMOVE_POST, payload })

export const addPost = payload => ({ type: ADD_POST, payload });

export const editPost = payload => ({ type: EDIT_POST, payload });

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload ? true : false);
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_POST:
      return statePart.map(post => post.id === action.payload.id ? ({
        id: action.payload.id,
        title: action.payload.title,
        shortDescription: action.payload.shortDescription,
        content: action.payload.content,
        publishedDate: action.payload.publishedDate,
        author: action.payload.author
      }) : post)
    default:
      return statePart;
  };
};

export default postsReducer;