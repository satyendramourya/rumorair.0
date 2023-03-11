export const getNews = async (category) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d8e9da62bfmsh4cd278f2e3e8ae1p1d2f3bjsnfe85558e49a2",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  let url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${category}&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`;

  let data = await fetch(url, options);
  // .then(response => response.json())
  // .then(response => console.log(response.value))
  // .catch(err => console.error(err));
  let parsedData = await data.json();
  return parsedData.value;
};
