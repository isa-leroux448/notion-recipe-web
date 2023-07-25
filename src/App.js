import React, { useEffect } from "react";
import "./App.css";
import { Client } from "@notionhq/client"
import { createChildren } from "./notion";
// import dotenv from 'dotenv';
// dotenv.config();

// const notion = new Client({ auth: process.env.NOTION_SECRET })
// const databaseId = process.env.NOTION_DATABASE

function App() {
  async function addPage(title, image, ingredients, steps) {
    const children = createChildren(ingredients, steps);
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                title: {
                    title: [
                        {
                            "text": {
                                "content": title
                            }
                        }
                    ]
                },
                Link: {
                    type: 'url',
                    url: 'google.com'
                },
            },
            cover: {
                "type": "external",
                "external": {
                    "url": image
                }
            },
            children: children,
        })
        console.log(response)
        console.log("Success! Entry added.")
    } catch (error) {
        console.error(error.body)
    }
}


  useEffect(() => {
      // Using fetch to fetch the api from flask server it will be redirected to proxy
      fetch("/data").then((res) =>
          res.json().then((data) => {
            console.log(data);
            addPage(data.Title, data.Image, data.Ingredients, data.Steps);
          })
      );
  }, []);

  return (
      <div className="App">
          <header className="App-header">
              <h1>Recipe Saver</h1>

          </header>
      </div>
  );
}

export default App;