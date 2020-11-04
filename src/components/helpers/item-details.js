import ItemDetailsView from "../item-details-view";
import withData from "../hoc/with-data";
import withSwapiService from "../hoc/with-swapi-context";

// const AboutPage = ({ swapiService }) => {
//     const { getPage } = swapiService;

//     const aboutItem = <AboutDetails pageId="10618" getData={getPage} />;

const GistDetails = withData(ItemDetailsView);

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

const AboutDetails = withSwapiService(
    withData(ItemDetailsView),
    mapAboutMethodsToProps
);

const PostDetails = withSwapiService(
    withData(ItemDetailsView),
    mapPostMethodsToProps
);

export { GistDetails, PostDetails, AboutDetails };
