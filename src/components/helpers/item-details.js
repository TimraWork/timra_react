import ItemDetailsView from "../item-details-view";
import LoginDetailsView from "../login-view";
import withData from "../hoc/with-data";
import withSwapiService from "../hoc/with-swapi-context";

const mapAboutMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPage,
    };
};

const mapPostMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPost,
    };
};

const mapGistMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getGist,
    };
};

const mapLoginToProps = (swapiService) => {
    return {
        getData: swapiService.getToken,
    };
};

const AboutDetails = withSwapiService(
    withData(ItemDetailsView),
    mapAboutMethodsToProps
);

const PostDetails = withSwapiService(
    withData(ItemDetailsView),
    mapPostMethodsToProps
);

const GistDetails = withSwapiService(
    withData(ItemDetailsView),
    mapGistMethodsToProps
);

const LoginDetails = withSwapiService(
    withData(LoginDetailsView),
    mapLoginToProps
);

export { GistDetails, PostDetails, AboutDetails, LoginDetails };
