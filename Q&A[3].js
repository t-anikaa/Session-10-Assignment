//Make a False color composite from any image collection for your Upazila. Upload the code and
//code link, and screenshot in your github repo. Submit your repo link.


var adm3 = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");
// Filtering out desired upazila:
var myRegion = adm3.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);
Map.addLayer(myRegion,{}, "Tekaf");
Map.centerObject(myRegion);

//Selecting Sentinel 2 Image Collection & making False color composite of my upazila:
var s1 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
           .filterDate("2023-01-01","2023-02-01")
           .filterBounds(myRegion)
           .select(['B8','B4','B3'])
           .mean();
print(s1);

var visParams = {
  min: 322,
  max: 3460,
  Bands: ["B8", "B4", "B3"]
};
Map.addLayer(s1.clip(myRegion), visParams, "False color image of Teknaf");
