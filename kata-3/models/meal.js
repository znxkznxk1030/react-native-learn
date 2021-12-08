class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    inGlutenFree,
    isVegan,
    isVegetarian,
    isLoctoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.affordability = affordability;
    this.complexity = complexity;
    this.duration = duration;
    this.steps = steps;
    this.inGlutenFree = inGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLoctoseFree = isLoctoseFree;
  }
}

export default Meal;
