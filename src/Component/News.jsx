import React, { useEffect, useState } from "react";
import Item from "./Item";
import './News.css' 

const News = ({ selectedCountry, category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const perPage = 6;

  const API = `https://api.thenewsapi.com/v1/news/top?api_token=6eHrs0cJCzqGQ8IRoX8rRFtqOli5TVcXM41SyxNQ&locale=${selectedCountry.code}&limit=${perPage}&language=en&categories=${category}`;

  const getNews = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log("API Response:", data);
      const articlesData = data.data || data.results || [];
      if (articlesData.length === 0) {
        setError("No articles found.");
      }
      setArticles(articlesData);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to fetch news.Toady Limit Over");
    }
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, [page, selectedCountry, category]);

  const handleNext = () => setPage(page + 1);
  const handlePrevious = () => page > 1 && setPage(page - 1);
console.log(selectedCountry.flag);
  return (
    <div className="container my-4">
      <h1 className="fw-bold text-center mb-4 bounce">Top Headlines!📰</h1>
<h2 
  className="fw-bold"
  style={{ fontFamily: "Segoe UI Emoji, Noto Color Emoji, Apple Color Emoji, sans-serif" }}
>
 <img src={selectedCountry.img} alt="" width="30"
    height="20"
    style={{ borderRadius: "4px" }} /> {selectedCountry.name}
</h2>


      <h3>Category-{category.toUpperCase()}</h3>
     

      {loading && (
        <p className="text-center fw-bold">
          Loading...{selectedCountry.name}--News--Please Wait
        </p>
      )}
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="row g-3">
        {articles.map((article, index) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
            <div className="w-100">
              <Item
                title={article.title || "No title"}
                description={article.description || "No description"}
                imageUrl={
                  article.image_url || "https://via.placeholder.com/300"
                }
                newsUrl={article.url || "#"}
               
                date={article.published_at || ""}
                source={article.source || "Unknown"}
              />
            </div>
          </div>
        ))}
      </div>

      {articles.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
          <button
            type="button"
            className="btn px-4 py-2 fw-semibold text-white"
            onClick={handlePrevious}
            disabled={page === 1}
          >
            ← Previous
          </button>

          <span className="text-muted fw-medium">Page {page}</span>

          <button
            type="button"
            className="btn px-4 py-2 fw-semibold text-white"
            onClick={handleNext}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
