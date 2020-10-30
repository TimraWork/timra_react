import ItemListView from "../item-list-view";
import withData from "../hoc/with-data"

const GistList = withData(ItemListView);
const PostList = withData(ItemListView);
const CatList = withData(ItemListView);
const WorkList = withData(ItemListView);

export {GistList,PostList,CatList,WorkList}
