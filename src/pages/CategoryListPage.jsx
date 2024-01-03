import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import * as CategoryActions from "../store/category/category.actions";
import * as CategorySelectors from "../store/category/category.selectors";

import Card from "../components/card";

const CategoryListPage = () => {
  const dispatch = useDispatch();

  const categories = useSelector(CategorySelectors.selectCategories);
  const isLoading = useSelector(CategorySelectors.selectCategoryIsLoading);
  const error = useSelector(CategorySelectors.selectCategoryError);
  const isFetched = useSelector(CategorySelectors.selectCategoryIsFetched);

  useEffect(() => {
    if (!isFetched) {
      dispatch(CategoryActions.fetchCategories());
    }
  }, [dispatch, isFetched]);

  if (isLoading) return <div>Fetching categories...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  const categoryListWithLinkUrl = categories.map((category) => ({
    ...category,
    linkUrl: `/${category.publicId}/meals`,
  }));

  return (
    <div className="row">
      {categoryListWithLinkUrl.map((c) => (
        <Card key={c.id} {...c} showDescription={true} />
      ))}
    </div>
  );
};

export default CategoryListPage;
