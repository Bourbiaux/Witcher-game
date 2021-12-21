export const USER_ADD_CARD_TO_FIELD = "USER_ADD_CARD_TO_FIELD"
export const USER_UPDATE_BOARD = "USER_UPDATE_BOARD"
import { ADD_CARD_TO_FIELD, REMOVE_CARD_TO_FIELD, UPDATE_BOARD } from "./mutations";

export default {

    [USER_UPDATE_BOARD]({commit},board){
        commit(UPDATE_BOARD, {board} );
    },
    [USER_ADD_CARD_TO_FIELD]({commit, state},{row, position, uuid}){
        // if(state.player == 2){

        //     row = Math.abs(row-5)
        // }
        if (position > -1) {
            console.log(state);
            //Look for the uuid on other place of the field array and remove it
            state.fields.forEach((element,index) => {
                let found = element.cards.findIndex(o => o.uuid === uuid)
                if(found != -1 ){
                    commit(REMOVE_CARD_TO_FIELD,{ row:index, position:found });
                }
            });
            //add it
            commit(ADD_CARD_TO_FIELD,{ row:row, position:position, uuid:uuid });
            console.log(this)
            
        }
    },
   
}