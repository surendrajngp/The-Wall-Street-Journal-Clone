import React from "react";
import "./Body.css";
import { FILTER_ALLOW, Markup } from "interweave";

const Body = ({ everthing, topheadlines }) => {
  console.log(topheadlines);
  return (
    <div className="Body mt-5 mb-3">
      <div className="container">
        <div className="lineTop"></div>
        <div className="news row">
          <div className="news-left col-md-9 col-sm-12">
            <main>
              {everthing.articles && (
                <div className="row">
                  <div className="col-md-4 col-sm-6 px-sm-2 py-sm-2 ">
                    {everthing.articles.map((item, idx) => {
                      if (idx <= 4) {
                        return (
                          <article className="article py-2" key={idx}>
                            <div className="head">
                              <h3 className={idx === 0 ? " headline " : "h4"}>
                                <a href={item.url}> {item.title}</a>
                              </h3>
                            </div>
                            <p className="content text-break py-2">{item.content}</p>
                            <div className="description">
                              <Markup content={item.description} />
                            </div>
                          </article>
                        );
                      }
                    })}
                  </div>

                  <div className="col-md-5 col-sm-6 px-sm-2 py-sm-2 ">
                    {everthing.articles.map((item, idx) => {
                      if (idx > 4 && idx <= 9) {
                        return (
                          <article className="article py-2" key={idx}>
                            {idx == 5 && (
                              <img
                                src={item.urlToImage}
                                className="img-fluid pb-2 mb-2"
                                alt=""
                              />
                            )}
                            <div className="head">
                              <h3 className={idx === 5 ? " headline " : "h4"}>
                                <a href={item.url}> {item.title}</a>
                              </h3>
                            </div>
                            <p className="content text-break">
                              {item.content.replace(/\n/g, "")}
                            </p>
                            <div className="description">
                              <Markup content={item.description} />
                            </div>
                          </article>
                        );
                      }
                    })}
                  </div>
                  <div className="col-12 col-md-3 py-2">
                    {everthing.articles.map((item, idx) => {
                      if (idx > 9) {
                        return (
                          <article className="article py-2" key={idx}>
                            <img
                              src={item.urlToImage}
                              className="img-fluid"
                              alt=""
                            />
                            <div className="head">
                              <h4 className="h6">
                                <a href={item.url}> {item.title}</a>
                              </h4>
                            </div>
                          </article>
                        );
                      }
                    })}
                  </div>
                </div>
              )}
            </main>
          </div>

          <div className="news-right col-md-3">
            {/* Top headlines */}
            {topheadlines.articles && (
              <main>
                {topheadlines.articles.map((item, idx) => {
                  if (idx) {
                    return (
                      <article className="article py-2" key={idx}>
                        <div className="head">
                          <h3 className={"h5"}>
                            <a href={item.url}> {item.title}</a>
                          </h3>
                        </div>
                      </article>
                    );
                  }
                })}
              </main>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
