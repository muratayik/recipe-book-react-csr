import { useQuery } from "@tanstack/react-query";

import { retrieveCategories } from "../utils/api.utils";
import Card from "../components/card";

const CategoryListPage = () => {
  const {
    isPending,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["categoryData"],
    queryFn: retrieveCategories,
  });

  if (isPending) return <div>Fetching categories...</div>;

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
