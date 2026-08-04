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
    { name: "Purple Mosaic Print Thobe", price: 75, image: "images/thobe-1-nobg.png" },
    { name: "Coral Mosaic Print Thobe",  price: 75, image: "images/thobe-2-nobg.png" },
 { name: "Rosewood Thobe With Beaded Crystal and Gold Patterns", price: 75, image: "images/Pinkone.PNG" },
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
