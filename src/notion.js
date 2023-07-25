export const createChildren = (ingredients, steps) => {
    const children = [];
    const ingredientsHeader = {
        object: 'block',
        type: 'heading_1',
        heading_1: {
            "rich_text": [{ "type": "text", "text": { "content": "Ingredients" } }]
        }
    }
    children.push(ingredientsHeader);
    for (let i = 0; i < ingredients.length; i++) {
        const currentIngredient = ingredients[i];
        const ingredient = {
            object: 'block',
            type: 'bulleted_list_item',
            "bulleted_list_item": {
                "rich_text": [{
                    "type": "text",
                    "text": {
                        "content": currentIngredient,
                        "link": null
                    }
                }],
            },
        }
        children.push(ingredient);
    }
    const stepsHeader = {
        object: 'block',
        type: 'heading_1',
        heading_1: {
            "rich_text": [{ "type": "text", "text": { "content": "Steps" } }]
        }
    }
    children.push(stepsHeader);
    for (let i = 0; i < steps.length; i++) {
        const currentStep = steps[i];
        const step = {
            object: 'block',
            type: 'numbered_list_item',
            "numbered_list_item": {
                "rich_text": [{
                    "type": "text",
                    "text": {
                        "content": currentStep,
                        "link": null
                    }
                }],
            },
        }
        children.push(step);
    }
    return children;
}