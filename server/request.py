import requests, json

def create_children(ingredients, steps):
    children = []
    ingredients_header = {
        "object": "block",
        "type": "heading_1",
        "heading_1": {
            "rich_text": [{"type": "text", "text": {"content": "Ingredients"}}]
        }
    }
    children.append(ingredients_header)

    for current_ingredient in ingredients:
        ingredient = {
            "object": "block",
            "type": "bulleted_list_item",
            "bulleted_list_item": {
                "rich_text": [
                    {"type": "text", "text": {"content": current_ingredient, "link": None}}
                ]
            },
        }
        children.append(ingredient)

    steps_header = {
        "object": "block",
        "type": "heading_1",
        "heading_1": {
            "rich_text": [{"type": "text", "text": {"content": "Steps"}}]
        }
    }
    children.append(steps_header)

    for current_step in steps:
        step = {
            "object": "block",
            "type": "numbered_list_item",
            "numbered_list_item": {
                "rich_text": [{"type": "text", "text": {"content": current_step, "link": None}}]
            },
        }
        children.append(step)

    return children


def createPage(databaseID, headers, ingredients, steps, title, image, url):
    createUrl = 'https://api.notion.com/v1/pages'
    children = create_children(ingredients, steps)
    newPageData = {
        "parent": {"database_id": databaseID},
        "properties": {
                "title": {
                    "title": [
                        {
                            "text": {
                                "content": title
                            }
                        }
                    ]
                },
                "Link": {
                    "type": 'url',
                    "url": url
                },
            },
            "cover": {
                "type": "external",
                "external": {
                    "url": image
                }
            },
            "children": children,
    }
    data = json.dumps(newPageData)
    res = requests.request("POST", createUrl, headers=headers, data=data)
    # print("Response data:", res.json())