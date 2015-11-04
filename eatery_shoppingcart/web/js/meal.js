/**
 * Created by Karuna on 10/27/2015.
 */
//----------------------------------------------------------------
// meal class
function meal(sku, name, description, cuisineType,ingredients,allergenInfo, price, location,owner) {
    this.sku = sku; // meal code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.cusineType=cuisineType;
    this.ingredients=ingredients;
    this.allergenInfo=allergenInfo;
    this.price = price;
    this.location = location;
    this.owner=owner;
}