/* =====================================================================
   RABHEEN COLLECTION — PRODUCT LIST
   =====================================================================
   This is the ONLY file you need to touch to manage your shop.

   HOW TO ADD A NEW PRODUCT:
   1. Save the product photo into the "images" folder (any name, no spaces
      — e.g. thobe-4.jpg). For the clean cutout look the current photos
      have, remove the background first (remove.bg is a free, no-signup
      option — upload, download the PNG, drop it in this folder).
   2. Copy one of the { ... } blocks below, paste it, and edit:
        name  -> what shows under the photo
        price -> number only, no $ sign
        image -> "images/yourfilename.jpg"
   3. Save this file and re-upload/redeploy your site. Done.

   HOW TO TAKE DOWN A SOLD PRODUCT:
   1. Find its { ... } block below.
   2. Delete the whole block (from the { to the matching }, including the
      comma after it).
   3. Save and redeploy. The item disappears from the site immediately.

   Nothing else on the site needs to change — the Thobes, Jewelry, and
   Dresses pages read directly from this file.
   ===================================================================== */

window.PRODUCTS = {

  thobes: [
    { name: "Pink & Gold Botanical Embroidered Sudanese Toub", price: 75, image: "images/Pinktwo.PNG" },
    { name: "Magenta Floral Motif Sudanese Toub", price: 75, image: "images/Pinkthree.PNG" },
    { name: "Pink & Black Scalloped Gold Embellished Toub", price: 75, image: "images/Pinkblack.PNG" },
    { name: "Sage Green Rose Print Sudanese Toub", price: 75, image: "images/Greenbrown.PNG" },
    { name: "Orange & Cream Floral Sudanese Toub", price: 75, image: "images/Orangecream.PNG" },
    { name: "Dusty Pink Sunburst Motif Toub", price: 75, image: "images/Pinkdish.PNG" },
    { name: "Zaqhawa Cultural Emblem Toub", price: 75, image: "images/Zaghwa.PNG" },
    { name: "Crimson & Onyx Abstract Floral Toub", price: 75, image: "images/Blackredone.PNG" },

    { name: "Pink Watercolor Leaf Print Toub", price: 75, image: "images/Pinkleaves.PNG" },
    { name: "Royal Blue & Yellow Floral Toub", price: 75, image: "images/Blueyellow.PNG" },
    { name: "Espresso Rhinestone Embellished Toub", price: 75, image: "images/Brownone.PNG" },
    { name: "Blush Pink Bold Floral Motif Toub", price: 75, image: "images/Pinkblackflower.PNG" },
    { name: "Onyx Black Rainbow Feather Toub", price: 75, image: "images/Blackrainbow.PNG" },
    { name: "Deep Teal & Dust Rose Wave Toub", price: 75, image: "images/Navypink.jpg" },
    { name: "Onyx Black Gold Gamar Boba Toub", price: 75, image: "images/Blackgamarboba.PNG" },
    { name: "Crimson Red Gold Gamar Boba Toub", price: 75, image: "images/Redgamarboba.PNG" },
    { name: "Onyx Black Sunburst Motif Toub", price: 75, image: "images/Blackdish.PNG" },
    { name: "Mint Green Botanical Leaf Print Toub", price: 75, image: "images/Greenleaf.PNG" },
    { name: "Purple Zebra & Animal Print Toub", price: 75, image: "images/Purplestripes.PNG" },
    { name: "Coral Pink Zebra Print Toub", price: 75, image: "images/Pinkstripes.PNG" },
    { name: "Dusty Coral & Charcoal Abstract Toub", price: 75, image: "images/Pinkblackgray.PNG" },
    { name: "Lavender Rainbow Floral Toub", price: 75, image: "images/Purplewflowers.PNG" },
    { name: "Royal Purple Rainbow Petal Toub", price: 75, image: "images/Purplerainbowflower.PNG" },

   { name: "Magenta Rose Gold Geometric Toub", price: 75, image: "images/Pinkgoldleafs.PNG" },
   { name: "Mint & Coral Embellished Floral Toub", price: 75, image: "images/Mintgoldflowers.PNG" },
   { name: "Bright Sky Blue Rainbow Floral Toub", price: 75, image: "images/Bluerainbowflowers.PNG" },
   { name: "Deep Teal & Rose Gold Wave Toub", price: 75, image: "images/Greenpink.PNG" },
   { name: "Lime Green Crimson Rose Toub", price: 75, image: "images/Greenredflowers.PNG" },
   { name: "Onyx Black Bright Butterfly Toub", price: 75, image: "images/Blackcolorfulbutterflies.PNG" },
   { name: "Multicolor Swirl Abstract Toub", price: 75, image: "images/Multicolorflower.PNG" },
   { name: "Onyx Black & Magenta Leaf Toub", price: 75, image: "images/Blackpinkleafs.PNG" },
   { name: "Light Gray & Mustard Gold Floral Toub", price: 75, image: "images/Goldgray.PNG" },
  ],


  jewelry: [
{ name: "Plated Gold Leaf V-Neck Set", price: 35, image: "images/Jewelnine9.PNG" },
{ name: "Plated Gold Lace Filigree Statement Set", price: 35, image: "images/Jeweleight8.PNG" },
{ name: "Plated Gold Layered Blossom Collar Set", price: 35, image: "images/Jewelseven7.jpg" },
{ name: "Plated Gold Crescent Motif Set", price: 35, image: "images/Jewelsix6.PNG" },
{ name: "Plated Gold Lattice Teardrop Set", price: 35, image: "images/Jewelfive5.PNG" },
{ name: "Plated Gold Crescent Petal Set", price: 35, image: "images/Jewelfour4.PNG" },
{ name: "Plated Gold Spiral Bloom Set", price: 35, image: "images/Jewelthree3.PNG" },
{ name: "Plated Gold Crystal Rose Garland Set", price: 35, image: "images/Jeweltwo2.JPG" },
{ name: "Plated Gold Scalloped Fan Set", price: 35, image: "images/Jewelone1.JPG" },
  ],

  dresses: [
{ name: "Purple Gold Greek Key Fringed Dress", price: 35, image: "images/Dresspurpleboxes.PNG" },
{ name: "Emerald Green Gold Embroidery Dress", price: 45, image: "images/Dressgreenone.PNG" },
{ name: "Bright Orange Embroidered Bodice Dress", price: 45, image: "images/Dressorangetwo.PNG" },
{ name: "Sunset Orange Gold Butterfly Dress", price: 45, image: "images/Dressorangeone.PNG" },
  ],

};
