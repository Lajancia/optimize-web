import React from "react";

import "./index.css";
import BasicTemplates from "../../templates/BasicTemplates";
import ArticleList from "../../components/ArticleList";

function ListPage() {
  return (
    <BasicTemplates>
      <div style={{ width: "700px", margin: "auto" }}>
        <ArticleList />
      </div>
    </BasicTemplates>
  );
}

export default ListPage;
