import { getCollection } from "astro:content";

function sortByCategory(a: any, b: any): number | undefined {
  if(a.data.category !== undefined && b.data.category === undefined) return 1;
  if(a.data.category === undefined && b.data.category !== undefined) return -1;
  if(a.data.category !== undefined && b.data.category !== undefined && a.data.category !== b.data.category) {
    if(a.data.categoryOrder !== undefined && b.data.categoryOrder === undefined) return -1;
    if(a.data.categoryOrder === undefined && b.data.categoryOrder !== undefined) return 1;
    if(a.data.categoryOrder !== undefined && b.data.categoryOrder !== undefined) return a.data.categoryOrder - b.data.categoryOrder;
    
    return a.data.category.localeCompare(b.data.category);
  }
}

export const getSortedDocs = async () => {
  return (await getCollection("docs")).sort((a, b) => {
    let categorySort = sortByCategory(a, b);
    if(categorySort !== undefined) return categorySort;

    // if a has order but b doesnt, a comes first and vice versa
    if (a.data.order !== undefined && b.data.order === undefined) return -1;
    if (a.data.order === undefined && b.data.order !== undefined) return 1;
    if (a.data.order !== undefined && b.data.order !== undefined) return a.data.order - b.data.order;

    return a.data.title.localeCompare(b.data.title);
  });
};

export const getDocs = async () => {
  const docs = await getSortedDocs();

  const categories = docs.map((doc) => doc.data.category).filter((category) => category !== undefined);
  const uniqueCategories = [...new Set(categories)];

  uniqueCategories.unshift("");
  
  // turn into array of objects with category names and docs for each category
  const sortedDocs = uniqueCategories.map((category) => {
    return {
      category: category,
      docs: docs.filter((doc) => (doc.data.category ?? "") === category)
    };
  });
  return sortedDocs;
};


export const getNextAndPreviousDocs = async (doc: any) => {
  const docs = await getSortedDocs();

  const index = docs.findIndex((d) => d.id === doc.id);
  return {
    previous: index > 0 ? docs[index - 1] : null,
    next: index < docs.length - 1 ? docs[index + 1] : null,
  };
};
