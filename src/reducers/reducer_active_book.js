// all reducers get 2 arguments: a state and an action::
//  state argument is not an application state, only the state this reducer is responsible for:
export default function(state=null, action){
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            // always return a fresh object. Don't do: 
            // action.title = book.title
    }
    return state;
}