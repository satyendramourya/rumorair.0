export const getNews = async (category, pageNo) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d8e9da62bfmsh4cd278f2e3e8ae1p1d2f3bjsnfe85558e49a2",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  let url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${category}&pageNumber=${pageNo}&pageSize=12&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`;

  let data = await fetch(url, options);
  let parsedData = await data.json();
  return parsedData.value;
};

export const getSummary = async (summaryUrl) => {
  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${summaryUrl}&length=1`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "d8e9da62bfmsh4cd278f2e3e8ae1p1d2f3bjsnfe85558e49a2",
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  let data = await fetch(url, options);
  let parsedData = await data.text();
  console.log(parsedData);
  return JSON.parse(parsedData);
};
