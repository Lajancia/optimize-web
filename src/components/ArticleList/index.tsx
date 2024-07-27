import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Article from "../Article";
import "./index.css";

function ArticleList() {
  const [articles, setArticles] = useState<any>([]);

  // 게시글 리스트 가져오기
  const getArticles = useCallback(() => {
    axios.get("http://localhost:3001/articles").then((success) => {
      setArticles([...success.data]);
    });
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <ul className={"ArticleList"} style={{ listStyle: "none", padding: 0 }}>
      {articles.map((item: any) => (
        <li key={item.id}>
          <Link
            to={`/view/${item.id}`}
            style={{ textDecoration: "none", color: "initial" }}
          >
            <Article {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
