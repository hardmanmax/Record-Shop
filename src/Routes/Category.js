import { useContext } from "react"
import { CategoriesContext } from "../Context/categories.context"

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products}/>
          );
      })} 
    </>
  )
}

export default Category