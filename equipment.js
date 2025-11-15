// equipment.js
window.equipmentData = {
  "equipmentSlots": [
    // 第一排 - 5个 (2-1-2布局)
    {"id": "watch", "name": "手表", "icon": "⌚", "equipped": "citizen", "sortOrder": 1},
    {"id": "phone", "name": "手机", "icon": "📱", "equipped": null, "sortOrder": 2},
    {"id": "socks", "name": "袜子", "icon": "🧦", "equipped": null, "sortOrder": 3},
    {"id": "underwear", "name": "内裤", "icon": "🩲", "equipped": null, "sortOrder": 4},
    {"id": "bag", "name": "包包", "icon": "👜", "equipped": null, "sortOrder": 5},
    
    // 第二排 - 4个 (1-1-1-1布局)
    {"id": "shirt", "name": "衬衫", "icon": "👔", "equipped": null, "sortOrder": 6},
    {"id": "suit", "name": "套装", "icon": "👘", "equipped": null, "sortOrder": 7},
    {"id": "cup", "name": "水杯", "icon": "🥤", "equipped": null, "sortOrder": 8},
    {"id": "shoes", "name": "鞋子", "icon": "👟", "equipped": null, "sortOrder": 9}
  ],
  "storageItems": [
    // 手表类，排名依据https://top.xbiao.com/
    {"id": "ebo", "name": "依波", "type": "watch", "rarity": "white", "icon": "⌚", "description": "基础款手表，精准计时，适合日常佩戴"},
    {"id": "citizen", "name": "西铁城", "type": "watch", "rarity": "blue", "icon": "⌚", "description": "光动能石英手表，无需更换电池，环保节能"},
    
    // 手机类，排名依据https://news.mydrivers.com/1/1045/1045875.htm
    {"id": "iphone", "name": "苹果", "type": "phone", "rarity": "red", "icon": "📱", "description": "iphone11，23年底购置于南昌，大三从屌丝手机小米更换过来"},
    
    // 衬衫类
    {"id": "cotton_shirt", "name": "雅戈尔", "type": "shirt", "rarity": "purple", "icon": "👔", "description": "雅戈尔短袖衬衫，夏天买的，质量还不错，"},
    {"id": "business_shirt", "name": "罗蒙", "type": "shirt", "rarity": "green", "icon": "👔", "description": "罗蒙衬衫，便宜，保有量大，第一件自己挑选的衬衫品牌"},
    {"id": "custom_shirt", "name": "Muszoom", "type": "shirt", "rarity": "white", "icon": "👔", "description": "杂牌衬衫，不懂，单纯图便宜和刚需买的"},
    
    // 套装类
    {"id": "casual_suit", "name": "罗蒙", "type": "suit", "rarity": "blue", "icon": "👘", "description": "作为套装，这个品类还是能打的，但是在衬衫这个领域还是不如其他品牌"},
    
    // 水杯类
    {"id": "plastic_cup", "name": "希诺", "type": "cup", "rarity": "green", "icon": "🥤", "description": "老妈给的水杯，比较商务"},
    
    // 鞋子类
    {"id": "sneakers", "name": "奥康", "type": "shoes", "rarity": "green", "icon": "👟", "description": "皮鞋第一股，质量还行，主要是便宜"},
    
    // 袜子类
    {"id": "cotton_socks", "name": "棉袜", "type": "socks", "rarity": "white", "icon": "🧦", "description": "舒适棉袜，吸汗透气，日常穿着"},
    
    // 内裤类
    {"id": "cotton_underwear", "name": "紫色花语", "type": "underwear", "rarity": "white", "icon": "🩲", "description": "杂牌吧，街边店里面买的，家旁边买的"},
    
    // 包包类
    {"id": "canvas_bag", "name": "七匹狼", "type": "bag", "rarity": "white", "icon": "👜", "description": "没什么说的，不入流的东西，贴牌货，便宜"},
  ]
};
