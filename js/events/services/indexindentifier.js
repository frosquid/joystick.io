import { touchCaches } from "./touchCaches.js"
export default function indexIndentifier (id){
    for(let i = 0; i < touchCaches.length;i++){
        if(id === touchCaches[i].indentifier){
            return i
        }
    }
    return -1
}