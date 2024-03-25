# Session-10-Assignment
**Question 1:** First, I selected the Sentinel-2 Surface Reflectance Harmonized
dataset, which provides satellite images. Then, I defined the area I wanted to study by creating a region of interest (ROI) using a MultiPolygon geometry. After that, I applied filters to the image collection to narrow down the selection based on the date of acquisition, the boundary of my ROI, and the percentage of cloud cover in the images. Once the filtering was done, I picked an image from the filtered collection & printed out the capture date of that selected image. Lastly, I displayed this chosen image on a map, specifically the defined ROI, to visually inspect and analyze it.


*   [GEE link](https://code.earthengine.google.com/5a5e54173921c0202571d64a724fe50e)
*   [GitHub file link](https://github.com/t-anikaa/Session-10-Assignment/blob/main/Q%26A%5B1%5D.js)
![Capture(1)](https://github.com/t-anikaa/Session-10-Assignment/assets/161161157/01618cb4-ae35-4648-a7ae-928352325b58)


**Question 2:** I've created an RGB composite image specifically for the Teknaf Upazila for this question. First, I defined the boundary of the Upazila by filtering an administrative boundaries feature collection. Then, I selected the Sentinel-2 Surface Reflectance Harmonized dataset and filtered it by date and the geographical boundary of Teknaf. Next, I constructed the RGB composite by selecting the Red(B4), Green(B3), and Blue(B2) bands. Finally, I clipped to the Teknaf Upazila boundary & displayed this composite image on the map. This is a good representation of the Earth as humans would see it naturally.


*   [GEE link](https://code.earthengine.google.com/7cb6e4eb266645a17cb13e8b1dbe9f14)
*   [GitHub file link](https://github.com/t-anikaa/Session-10-Assignment/blob/main/Q%26A%5B2%5D.js)
![Capture(2)](https://github.com/t-anikaa/Session-10-Assignment/assets/161161157/d3852d2f-5e37-4e91-bf91-5feacc8d9c0d)


**Question 3:** For this question, I followed the steps of previous question with one exception. I constructed the False color composite image by selecting the Near-infrared(B8), Red(B4), Green(B3) bands. False color composite is most commonly used to assess plant density and health, as plants reflect near infrared and green light, while absorbing red. Since they reflect more near infrared than green, plant-covered land appears deep red. Denser plant growth is darker red. Cities and exposed ground are gray or tan, and water appears blue or black. 


*   [GEE link](https://code.earthengine.google.com/6cc182ce16a75478b8116b8206d0e099)
*   [GitHub file link](https://github.com/t-anikaa/Session-10-Assignment/blob/main/Q%26A%5B3%5D.js)
![Capture(3)](https://github.com/t-anikaa/Session-10-Assignment/assets/161161157/2844c877-fba5-48a7-b751-79a74203e6c9)



