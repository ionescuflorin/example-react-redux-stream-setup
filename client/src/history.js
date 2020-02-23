// self made history object istead of ReactRouter one
// we try to use history in a non react component and thi is hard to do using the react-dom history so we need to make our own
// So when I say browser history we are creating a history object that is going to look at everything after the port or the domain of your address to decide what content to show on the screen because we are nowcreating our own history object.
import { createBrowserHistory } from 'history'; 



export default createBrowserHistory();