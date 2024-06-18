export {default as HomePage} from "./home-page";
export {default as LoadingPage} from "./loading-page"

// error handle
import ErrorPage from "./error-page";
export const NotFoundPage = ErrorPage[404];
export const NoAuthorizedPage = ErrorPage[403];
export const ServerErrorPage = ErrorPage[500];
