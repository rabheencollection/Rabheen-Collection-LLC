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
  { name: "Rosewood Toub With Beaded Crystal and Gold Patterns", price: 75, image: "images/Pinkone.PNG" },
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
    { name: "Purple Zebra & Animal Print Thobe", price: 75, image: "images/Purplestripes.PNG" },
    { name: "Coral Pink Zebra Print Thobe", price: 75, image: "images/Pinkstripes.PNG" },
    { name: "Dusty Coral & Charcoal Abstract Thobe", price: 75, image: "images/Pinkblackgray.PNG" },
    { name: "Lavender Rainbow Floral Thobe", price: 75, image: "images/Purplewflowers.PNG" },
    { name: "Royal Purple Rainbow Petal Thobe", price: 75, image: "images/Purplerainbowflower.PNG" },
    { name: "Sky Blue Rainbow Floral Thobe", price: 75, image: "images/Skybluerainbowflower.PNG" },
  ],


  jewelry: [
    { name: "Gold Filigree Necklace Set",     price: 30, image: "images/jewelry-1-nobg.png" },
    { name: "Gold Layered Necklace & Earrings", price: 30, image: "images/jewelry-2-nobg.png" },
    { name: "Gold Flower Pendant Necklace",   price: 30, image: "images/jewelry-3-nobg.png" },
    { name: "Gold Scalloped Necklace Set",    price: 30, image: "images/jewelry-4-nobg.png" },
  ],

  dresses: [
    { name: "Blush Beaded Embroidered Dress", price: 75, image: "images/dress-1-nobg.png" },
  ],

};
