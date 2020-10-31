import ItemListView from "../item-list-view";
import withData from "../hoc/with-data";
import withChildFunction from "../hoc/with-child-function";

const renderGistTitle = (item) => `${item.title}`;
const renderPostExcerpt = (item) =>
    `<img src="${item.img}" style="max-height: 100px;" alt=""/><div>${item.title}</div><div class="date">(${item.date})</div>`;
const renderCatExcerpt = (item) =>
    `<img src="${item.img}" style="max-height: 100px;" alt=""/><div>${item.title}</div>`;
const renderWorkExcerpt = (item) =>
    `<img src="${item.img}" style="max-height: 100px;" alt=""/><div><a href="${item.url}" target="_blank">${item.title}</a></div>`;

const GistList = withData(withChildFunction(ItemListView, renderGistTitle));
const PostList = withData(withChildFunction(ItemListView, renderPostExcerpt));
const CatList = withData(withChildFunction(ItemListView, renderCatExcerpt));
const WorkList = withData(withChildFunction(ItemListView, renderWorkExcerpt));

export { GistList, PostList, CatList, WorkList };
