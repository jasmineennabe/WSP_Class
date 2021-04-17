

//import Session from './Session';
import { api } from "../models/myFetch";

export function GetMyPosts() {
    return api("posts")
}
export function GetPostsForUser(handle) {
    return api(`posts/${handle}`)
}
export function GetMyFeed() {
    return api("posts/feed");
}