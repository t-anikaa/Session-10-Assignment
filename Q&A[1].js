//Select an image collection of any Satellite, filter by boundary and date. Finally, select
//an image from the collection, and print the capture date of that image. Upload the code
//and code link, and screenshot in your github repo. Submit your repo link.


var roi = 
    /* color: #d62906 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.MultiPolygon(
        [[[[91.84975495499089, 22.373395483072855],
           [91.84975495499089, 22.327671089071572],
           [91.91498627823307, 22.327671089071572],
           [91.91498627823307, 22.373395483072855]]],
         [[[91.92597260635807, 22.36339455409324],
           [91.92597260635807, 22.36339455409324],
           [91.92597260635807, 22.36339455409324],
           [91.92597260635807, 22.36339455409324]]]], null, false);

//Selecting Sentinel 2 Image Collection:
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED");

//Filtering by date, boundary & cloud percentage (additional):
var filtered = s2.filter(ee.Filter.date('2019-01-01', '2020-01-01'))
                 .filter(ee.Filter.bounds(roi))
                 .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10));
print("Image Collections", filtered);

//Selecting an image from the image collection:
var image = ee.Image("COPERNICUS/S2_SR_HARMONIZED/20190104T042149_20190104T042450_T46QCK");
print(image);

//Printing the capturing date of that image:
var captureDate = ee.Date(image.get("system:time_start"));
print("Capturing Date", captureDate);
var formatedDate = captureDate.format("YYYY-MM-DD");
print("Formated Capturing Date", formatedDate);

//Showing the image on the map:
var visParams = {
  min: 0,
  max: 3000,
  bands: ["B4", "B3", "B2"]
};
Map.addLayer(image.clip(roi), visParams, 'Filtered Image');
Map.centerObject(roi);