import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./index.css";
import BasicTemplates from "../../templates/BasicTemplates";

function ViewPage() {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(false);

  // 게시글 가져오기
  const getArticle = useCallback((id: string) => {
    axios.get("http://localhost:3001/articles/" + id).then((success) => {
      setArticle(success.data);
    });
  }, []);

  useEffect(() => {
    if (id) getArticle(id);
  }, [getArticle, id]);

  return article ? (
    <BasicTemplates>
      <div className={"ViewPage"}>
        <h1 className={"ViewPage__title"}>{article.title}</h1>
        <img className={"ViewPage__image"} src={article.image} alt="thumnail" />
        <div className={"ViewPage__content"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </BasicTemplates>
  ) : (
    <h1>loading...</h1>
  );
}

export default ViewPage;
