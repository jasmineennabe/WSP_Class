


import { ToastProgrammatic as toastr } from "buefy";

const Session = {
    user: null,
    message: []
}

export default Session;

export function Login() {
    Session.user = { name: 'Jasmine', handle: '@jasmineennabe' }
}
export function Logout() {
    Session.user = null
}

export function toastError(msg){
    toastr.open({
        message: msg,
        queue: false,
        type: 'is-danger'
    })
} 