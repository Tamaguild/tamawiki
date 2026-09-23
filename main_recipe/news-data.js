import { recipeTree } from "./data.js";

function collectFinalNodeRecipes(nodes, parentPath = [], result = []) {
  nodes.forEach((node) => {
    const nodePath = [...parentPath, node.id];
    const isFinalNode = !node.children?.length;

    if (isFinalNode && node.recipes?.length) {
      node.recipes.forEach((recipe) => {
        if (recipe.outputName) {
          result.push({
            id: nodePath.join("/"),
            name: recipe.outputName,
            description: `A workshop recipe for ${recipe.outputName}.`
          });
        }
      });
    }

    if (!isFinalNode) collectFinalNodeRecipes(node.children, nodePath, result);
  });

  return result;
}

export const DATA = collectFinalNodeRecipes(recipeTree);