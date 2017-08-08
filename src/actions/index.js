// create action creators
//      What are action creators? 
    //      action creators are functions that returns an action:
        // use export to open up the availability to use this elsewhere:
        // these must be connected to redux to work properly
        export function selectBook(book){
            // selectbook is an action creator and needs to return an action with an 
            // object , type should be property
            return {
                // always use all caps for the type 
                type: 'BOOK_SELECTED',
                // what is the payload? 
                // a: A piece of data that describes the action that's being taken: 
                payload: book
            }
        }