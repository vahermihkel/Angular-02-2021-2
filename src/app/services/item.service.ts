import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // items = [
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/1AgAAOSw1AlenrBJ/s-l225.webp',
  //     title:
  //       'Multi Jointed Fishing Lures Sinking Wobblers Swimbait Hard Bait 1Pc Crankbait',
  //     price: 3.78,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/R4EAAOSwh-1W3uHO/s-l225.webp',
  //     title:
  //       '30 x Gold Headed Nymphs Trout Fly Fishing Flies - Set 33J Size 8 10 12 14 16 18',
  //     price: 15.09,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/sWsAAOSwdh5evk8w/s-l225.webp',
  //     title:
  //       '50 Pcs Lures Bait Shrimp Fishing Simulation Luminous Prawn Saltwater Hooks',
  //     price: 10.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/EJ0AAOSwA3dYS-CH/s-l225.webp',
  //     title:
  //       '17X Worm Soft Fishing Baits Lure Lead Jig Head Hooks Simulation Lures Tackle UK',
  //     price: 6.5,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/a~cAAOSwB69fWzjR/s-l225.webp',
  //     title:
  //       '7PCS/Set Lead Metal Lure 7g 10g 15g 20g Spoon Bait Saltwater Jig Fishing Tackle',
  //     price: 13.31,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/XnUAAOSwqu9VOlWp/s-l225.webp',
  //     title:
  //       "Bullet Head Bodies, Brass, 5 or 10 for  Flying C's Fishing Lures 7g, 11g & 16g.",
  //     price: 15.23,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/xjoAAOSwajtgLXTl/s-l225.webp',
  //     title:
  //       'New Listingbass trout salmon fly fishing flies Spoons lures assortment lot',
  //     price: 20,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/iD4AAOSwFnJZeFwY/s-l225.webp',
  //     title:
  //       'Popular Mini Insect Cicada Shape Fishing Lures Bait Tackle Crankbait 4cm 2 Hooks',
  //     price: 1.94,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/yQoAAOSwnQtgLaUY/s-l225.webp',
  //     title:
  //       "New ListingRAPALA SHAD RAP 05's--- 5 DIFFERENT COLORED FISHING LURES",
  //     price: 1.25,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/JeIAAOSwqx5gLX6G/s-l225.webp',
  //     title: 'New ListingVintage COTTON CORDELL FISHING LURE',
  //     price: 3.6,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/dXgAAOSwZylgLYFB/s-l225.webp',
  //     title:
  //       'New ListingVintage Rebel Spoonbill Minnow 4 1/2” Deep Run FISHING TACKLE Lure GREAT COLOR',
  //     price: 9.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/oBYAAOSwfZpeZRah/s-l225.webp',
  //     title: 'Heddon Super Spook 7/8 oz Saltwater Fishing Lure',
  //     price: 9.39,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/3joAAOSwof5gLaYf/s-l225.webp',
  //     title:
  //       "New ListingRAPALA SNAP RAP 08's--- 5 DIFFERENT COLORED FISHING LURES",
  //     price: 5.5,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/D18AAOSwkVBgAQW4/s-l225.webp',
  //     title:
  //       '50pcs 2# 4# 6# 8# 10# Carbon Steel Hook Sea Fishing Hooks Sharpened Treble Hook',
  //     price: 4.23,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/mXgAAOSwTbFfQdWz/s-l225.webp',
  //     title:
  //       'Mini Crankbait Hard Fishing Lures Trolling Rattling Baits 5pcs/Lot Small Lure 2g',
  //     price: 4.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/iRUAAOSwGuJfHju0/s-l225.webp',
  //     title:
  //       'NEW Fishing Quick Knot Tool Hooks Tying Multi Function Fishing Tackle Safety',
  //     price: 2.98,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/FkoAAOSw3ZFfoGiC/s-l225.webp',
  //     title:
  //       '100Pcs TPR Hair Rig Fishing Boilie Stops Dumbell Bait Rig Carp N5E9',
  //     price: 0.77,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/mnUAAOSwkq9dGzH9/s-l225.webp',
  //     title:
  //       '10PCS Fishing Lures Metal Spinner Baits Bass Tackle Crankbait Trout Spoon Trout',
  //     price: 8.97,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/klkAAOSwJTNgJEK4/s-l225.webp',
  //     title: 'New ListingSalmon Fly Fishing, Sunray Shadows 6.',
  //     price: 10.39,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/RmkAAOSwfcZgJENO/s-l225.webp',
  //     title: 'New ListingSalmon Fly Fishing, Sunray Shadows 7.',
  //     price: 10.39,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/nyEAAOSwP35fLL0n/s-l225.webp',
  //     title:
  //       '10 Bearings Spinning Reel Mini Ice Fishing Rock Lure Fishing Tackle Silver H1',
  //     price: 14.41,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/a3sAAOSwJ61gLYGM/s-l225.webp',
  //     title:
  //       'New ListingVintage Rebel Spoonbill Minnow 4 1/2” Deep Run FISHING TACKLE Lure GREAT COLOR',
  //     price: 9.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/xCMAAOSwqNxdu~zQ/s-l225.webp',
  //     title:
  //       '100pcs/set Strong Treble Fishing Hooks Fishing Anchor Hooks Big Game Tackle Hook',
  //     price: 2.08,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/GG8AAOSweR9fv7oF/s-l225.webp',
  //     title:
  //       'New Listing5PCS Fishing Lures Crankbait Wobblers With 10# Hooks Artificial Swimbait Peche',
  //     price: 6.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/oZQAAOSwGaRgJD~n/s-l225.webp',
  //     title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 4.',
  //     price: 10.39,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/4qUAAOSw0xpgJD9f/s-l225.webp',
  //     title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 3.',
  //     price: 10.39,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/mgAAAOSwFKVgLW2p/s-l225.webp',
  //     title: 'New ListingFishing lures lot of 12 used some salmon plugs ',
  //     price: 1.98,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/HoAAAOSwYvpgJ1de/s-l225.webp',
  //     title:
  //       'New ListingBINGO VINTAGE FISHING LURE  SUPER  S 12S (5”) DOUG ENGLISH   BINGO BAIT  IN BOX',
  //     price: 30,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/7v4AAOSw0PNgJD4N/s-l225.webp',
  //     title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 1.',
  //     price: 14.55,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/RDcAAOSweMdgJEBz/s-l225.webp',
  //     title: 'New ListingSalmon Fly Fishing,  Sunray Shadow Tube Flies 5.',
  //     price: 14.55,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/YAwAAOSwTWRf~6Vb/s-l225.webp',
  //     title: 'New ListingRapala & more fishing lures lot of 5, New in box!',
  //     price: 17.7,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/VB8AAOSwBDRgLaaW/s-l225.webp',
  //     title:
  //       "New ListingRAPALA X-RAP 12 & SXR12's---3 with 2 COLORED FISHING LURES",
  //     price: 3.25,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/aDMAAOSw7sRgLDL1/s-l225.webp',
  //     title: '5 Vintage Fishing Lures',
  //     price: 14.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/5H0AAOSwE5JgBveD/s-l225.webp',
  //     title:
  //       'New Listing50pcs Fishing Lure Soft Artificial Swimbait Tail Grub Worms Moggot Bait Fishing',
  //     price: 0.01,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/QeYAAOSwby1enQVH/s-l225.webp',
  //     title:
  //       'New Listing100  -  3"  Fisherrman\'s Choice  RED Scented  Grubs BASS-WALLEYE-CRAPPIE FISHING',
  //     price: 14.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/ihwAAOSwibZgBbDr/s-l225.webp',
  //     title:
  //       'New Listing3x Purple/Black Intruder Salmon Steelhead Fishing Flies',
  //     price: 18.01,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/SBMAAOSw-9hch0Ip/s-l225.webp',
  //     title:
  //       '20pcs Real Minnow Bait Drop Shot LRF Soft Fishing Lure - Perch/Pike/Chub UK',
  //     price: 3.87,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/bjcAAOSwB65fxFdo/s-l225.webp',
  //     title:
  //       'New Listing1PCS Minnow Fishing Lure Crankbaits Wobble Plastic Hard Bait Pesca 7"-18CM',
  //     price: 0.01,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/5fIAAOSw6dtdtpjv/s-l225.webp',
  //     title: 'Diem Mens Lite Tech Boots Fishing Lace Up Waterproof Pattern',
  //     price: 34.62,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/LS0AAOSwEwpejjPI/s-l225.webp',
  //     title:
  //       'Soft Worms Fishing Lures Artificial 5cm/1g Carp Fishing Baits Set New 50pcs/lot',
  //     price: 8.96,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/k3AAAOSwKSNdo3Ys/s-l225.webp',
  //     title:
  //       'New Listing3x Fishing Lure Vintage Tomic Salmon Plug Made in Canada. ',
  //     price: 28,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/BCEAAOSwREZfAJo9/s-l225.webp',
  //     title:
  //       'New Listing1PCS Minnow Fishing Lures Sea Fishing Tackle 14cm-5.51"/23g-0.81oz Saltwater',
  //     price: 0.75,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/y6IAAOSwGJddebBN/s-l225.webp',
  //     title:
  //       'New ListingIrideus Craw Diddy Soft Hackle Wooly Bugger Streamer Fly Fishing Flies ',
  //     price: 9.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/HkAAAOSwkIJfhb5M/s-l225.webp',
  //     title:
  //       'New ListingAcme Little Cleo 1/4 oz Fishing Lure Spoon Plain Treble Hook Gold',
  //     price: 7.9,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/rhsAAOSwpMpgCJnc/s-l225.webp',
  //     title: '3 x 40gm SEA FISHING SILVER MINNOW LURES mackerel SPINNERS ',
  //     price: 10.25,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/3A4AAOSwl3tdhEA0/s-l225.webp',
  //     title:
  //       'New Listing1PC Metal Jig 20g Vertical Jigging Butterfly Lead Fish Bait Hook Freshwater',
  //     price: 3.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/Yb0AAOSwaRFgLb2F/s-l225.webp',
  //     title: 'New Listing# F336 UNBRANDED CRANKBAIT FISHING LURE',
  //     price: 6.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/gLcAAOSwyWZf9Z5H/s-l225.webp',
  //     title:
  //       'New Listing[JB] 4pcs Solve Soft Bass Bait Frog Crankbait Top Water Baits Fishing Hook',
  //     price: 10.02,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/XKcAAOSwURJgLaVr/s-l225.webp',
  //     title:
  //       "New ListingRAPALA ORIGINAL FLOATING 07's--- 5 DIFFERENT COLORED FISHING LURES",
  //     price: 1.25,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/LwQAAOSw1y5gFaYZ/s-l225.webp',
  //     title: 'New Listing24 Hares Ear Nymphs  - Fly Fishing Flies',
  //     price: 13.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/DUwAAOSwvedgJBND/s-l225.webp',
  //     title: 'New ListingSalmon Fly Fishing, Fish Skull Sunray Shadow.',
  //     price: 14.55,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/AWIAAOSws5NgBa~h/s-l225.webp',
  //     title: 'New Listing3x Fuchsia Intruder Salmon Steelhead Fishing Flies',
  //     price: 18.01,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/lRkAAOSwy~JfxwFi/s-l225.webp',
  //     title:
  //       '5/10pcs Fly Fishing Flies Poppers Jigs Lures #6 #8 Hooks Trout Panfish Bass',
  //     price: 10.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/lyQAAOSwv4xf6Onb/s-l225.webp',
  //     title:
  //       'New Listing2x   Fishing lures , Rapala Team Esko TE-07 ,  Special. ',
  //     price: 36,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/zyIAAOSwcAlf5jzp/s-l225.webp',
  //     title:
  //       'New Listing3x  Vintage  Fishing Lure Nils Master Invincible  15 cm, Made in Finland,  ',
  //     price: 74,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/7~AAAOSwjW5bcPu8/s-l225.webp',
  //     title:
  //       '30pcs Mixed Metal Fishing Lures Spinner Baits Spoon Fishing Baits Hooks Kits',
  //     price: 13.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/ZQgAAOSwkl5XdeW-/s-l225.webp',
  //     title:
  //       '15.5cm 6-1/8inch Lot 10 Minnow Fishing Lures Floating Rattles Bass CrankBait 16g',
  //     price: 11.1,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/vdkAAOSw46ZgLiMD/s-l225.webp',
  //     title:
  //       'New Listing1Pc Crank 3D Eyes Fishing Lure Hard Bait Bass Crankbait Sharp Fish Hooks Tackle',
  //     price: 6.47,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/yC0AAOSw7kxdLKSy/s-l225.webp',
  //     title: 'Smith AR-S 6 g various colors Trout Spinner ',
  //     price: 9.9,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/FEwAAOSw5G9d4Qo2/s-l225.webp',
  //     title:
  //       'Lot 30pcs Trout Spoon Metal Fishing Lures Spinner Baits Bass Tackle Tool Kits US',
  //     price: 13.99,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/RecAAOSwkqZgCyQw/s-l225.webp',
  //     title:
  //       'New Listing2x Fishing Lure Rapala Barra Magnum 11cm ,  BMAG-11,   CG, SFC  , RARE',
  //     price: 52,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/VkkAAOSws9VgE6lm/s-l225.webp',
  //     title:
  //       '10x Luminous Squid Jig Fishing Shrimp Lure Cuttlefish Hook Rig Fishing Bait',
  //     price: 14.12,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/8r4AAOSw3bxbB~mK/s-l225.webp',
  //     title:
  //       '20 Pcs Black Zonker Streamers Trout Fly Fishing Flies Lures With Free Fly Box',
  //     price: 11.69,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'https://i.ebayimg.com/thumbs/images/g/aBcAAOSwBnZaxaG7/s-l225.webp',
  //     title:
  //       '5PCS Fishing Jigging Slow Jig Deep sea Lure Jigbait spoon baits 100/160g/250g',
  //     price: 47.29,
  //     category: 'fishing',
  //   },
  //   {
  //     imgSrc:
  //       'assets/webshio.svg',
  //     title:
  //       'Webshop',
  //     price: 147.29,
  //     category: 'fishing',
  //   },
  // ];

  items: Item[] = [];

  url: string = 'https://webshio-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  // PUT - asendatakse kõik asjad ära andmebaasis selle väärtusega, mis kaasa anname
  saveItemsToDatabase(): void {
    // this.items = this.items.map(item => { return { ...item, producer: "EU " + item.producer } });
    this.http.put(this.url + "items.json", this.items).subscribe();
  }

  // GET - võtab andmebaasist
  getItemsFromDatabase(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + "items.json");
  }

  // POST - lisatakse väärtus juurde, mis kaasa anname
  addItemToDatabase(item: Item) {
    console.log(item);
    this.http.post(this.url + "items.json", item).subscribe(
      // response => {
      //   console.log(response)
      // },
      // error => {
      //   console.log(error)
      // }
    )
  }

}

// item!: Item;    onAdd(item: Item){}          getItem():Item {}      void - ei tagasta funktsioonis midagi (return puudub)
// new Item(price, category, title, imgSrc)
// this.http.get<Item>()       itemChanged = new Subject<Item>();
