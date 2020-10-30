import ItemDetailsView from "../item-details-view";
import withData from "../hoc/with-data"

const GistDetails = withData(ItemDetailsView);
const PostDetails = withData(ItemDetailsView);
const AboutDetails = withData(ItemDetailsView);

export {GistDetails,PostDetails,AboutDetails}
