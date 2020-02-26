//Script - Turfoo.fr
//Generated - Wed, 26 Feb 2020 14:54:41 +0000 by Skores



var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var skoresAd = skoresAd || {};
skoresAd.que = skoresAd.que || [];
skoresAd.responses = {};


var PREBID_TIMEOUT = 2000;
(function() {
    var src =  document.currentScript.src;
    src = src.replace("turfoo-hb.min.js", "prebid.js")
    src = src.replace("turfoo-hb.js", "prebid.js")
    var s = document.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = src;
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(s, node);
}
)();
skoresAd.setInventoryType = function() {
    if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi)) {
        if (((screen.width >= 480) && (screen.height >= 800)) || ((screen.width >= 800) && (screen.height >= 480)) || navigator.userAgent.match(/ipad/gi)) {
            return 'desktop'
        } else {
            return 'mobile'
        }
    } else {
        return 'desktop'
    }
}
skoresAd.setUpPbjs = function() {
    pbjs.que.push(function() {
        pbjs.aliasBidder('appnexus', 'msqappprv');
        pbjs.aliasBidder('appnexus', 'msqapptra');
        pbjs.aliasBidder('appnexus', 'msqappmax');
        pbjs.aliasBidder('appnexus', 'quaappnexus');
        pbjs.aliasBidder('appnexus', 'distrmapp');
        pbjs.aliasBidder('appnexus', 'adux');
        pbjs.aliasBidder('appnexus', 'oftmedia');
        pbjs.aliasBidder('appnexus', 'gravity');
        pbjs.aliasBidder('rubicon', 'msqrubprv');
        pbjs.aliasBidder('rubicon', 'msqrubtra');
        pbjs.aliasBidder('rubicon', 'msqrubopn');
        pbjs.aliasBidder('rubicon', 'miprubicon');
        pbjs.bidderSettings = {
            msqappprv: {
                bidCpmAdjustment: function(bidCpm, bid) {
                    return bidCpm * .83
                }
            },
            msqapptra: {
                bidCpmAdjustment: function(bidCpm, bid) {
                    return bidCpm * .83
                }
            },
            msqappmax: {
                bidCpmAdjustment: function(bidCpm, bid) {
                    return bidCpm * .83
                }
            },
            msqrubprv: {
                bidCpmAdjustment: function(bidCpm, bid) {
                    return bidCpm * .83
                }
            },
            msqrubtra: {
                bidCpmAdjustment: function(bidCpm, bid) {
                    return bidCpm * .83
                }
            },
            msqrubopn: {
                bidCpmAdjustment: function(bidCpm, bid) {
                    return bidCpm * .83
                }
            }
        }
        pbjs.setConfig({
            bidderTimeout: PREBID_TIMEOUT,
            priceGranularity: 'dense',
            consentManagement: {
                cmpApi: 'iab',
                timeout: 8000,
                allowAuctionWithoutConsent: !0
            }
        })
    });
    return !0
}
skoresAd.setUpCurrencyPbjs = function() {
    pbjs.que.push(function() {
        pbjs.setConfig({
            'currency': {
                'adServerCurrency': 'EUR',
                'granularityMultiplier': 1,
                'rates': {
                    'USD': {
                        'EUR': 0.89
                    }
                }
            }
        })
    });
    return !0
}
skoresAd.setAdUnits = function() {
    var adUnits = [];
    if (skoresAd.inventoryType == 'desktop') {
        adUnits.push({
            code: "5300595/300x250-milieu",
            mediaTypes: {
                "banner": {
                    sizes: [[300, 250]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "239780",
                    pageId: "943294",
                    formatId: "66774"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13480889"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1236672"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "18460",
                    siteId: "200718",
                    zoneId: "988002",
                    position: "atf"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167166"
                }
            }, {
                bidder: "ix",
                params: {
                    siteId: "280129",
                    size: [300, 250]
                }
            }]
        });
        adUnits.push({
            code: "5300595/300x250-bas",
            mediaTypes: {
                "banner": {
                    sizes: [[300, 250]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "239780",
                    pageId: "943294",
                    formatId: "66772"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13480884"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1236669"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "18460",
                    siteId: "200718",
                    zoneId: "987996",
                    position: "btf"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167164"
                }
            }, {
                bidder: "ix",
                params: {
                    siteId: "280127",
                    size: [300, 250]
                }
            }]
        });
        adUnits.push({
            code: "5300595/728x90-header",
            mediaTypes: {
                "banner": {
                    sizes: [[728, 90]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "239780",
                    pageId: "943294",
                    formatId: "66776"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13480892"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1236674"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "18460",
                    siteId: "200718",
                    zoneId: "988012",
                    position: "atf"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167169"
                }
            }, {
                bidder: "ix",
                params: {
                    siteId: "280131",
                    size: [728, 90]
                }
            }]
        });
        adUnits.push({
            code: "5300595/728x90-footer",
            mediaTypes: {
                "banner": {
                    sizes: [[728, 90]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "239780",
                    pageId: "943294",
                    formatId: "66775"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13480891"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1236673"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "18460",
                    siteId: "200718",
                    zoneId: "988006",
                    position: "btf"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167168"
                }
            }, {
                bidder: "ix",
                params: {
                    siteId: "280130",
                    size: [728, 90]
                }
            }]
        });
        adUnits.push({
            code: "5300595/160x600-colonne-gauche",
            mediaTypes: {
                "banner": {
                    sizes: [[160, 600]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "239780",
                    pageId: "943294",
                    formatId: "66771"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13480882"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1236669"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167161"
                }
            }]
        });
        adUnits.push({
            code: "5300595/300x250-haut",
            mediaTypes: {
                "banner": {
                    sizes: [[300, 250]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "239780",
                    pageId: "943294",
                    formatId: "66773"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13480886"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1236671"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "18460",
                    siteId: "200718",
                    zoneId: "987998",
                    position: "atf"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167165"
                }
            }, {
                bidder: "ix",
                params: {
                    siteId: "280128",
                    size: [300, 250]
                }
            }]
        })
    }
    if (skoresAd.inventoryType == 'mobile') {
        adUnits.push({
            code: "5300595/320x50_mobile",
            mediaTypes: {
                "banner": {
                    sizes: [[320, 50]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "242823",
                    pageId: "949640",
                    formatId: "67547"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13604710"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1263372"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "18460",
                    siteId: "202924",
                    zoneId: "1000326",
                    position: "atf"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167169"
                }
            }, {
                bidder: "ix",
                params: {
                    siteId: "283002",
                    size: [320, 50]
                }
            }]
        });
        adUnits.push({
            code: "5300595/320*50_In_Content",
            mediaTypes: {
                "banner": {
                    sizes: [[320, 50]]
                }
            },
            bids: [{
                bidder: "smartadserver",
                params: {
                    domain: "https://prg.smartadserver.com",
                    siteId: "242823",
                    pageId: "949640",
                    formatId: "67546"
                }
            }, {
                bidder: "appnexus",
                params: {
                    placementId: "13604652"
                }
            }, {
                bidder: "criteo",
                params: {
                    zoneId: "1263373"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "18460",
                    siteId: "202924",
                    zoneId: "1000320",
                    position: "btf"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: "1167169"
                }
            }, {
                bidder: "ix",
                params: {
                    siteId: "283001",
                    size: [320, 50]
                }
            }]
        })
    }
    return adUnits
}
;
skoresAd.setAdUnitsCodes = function() {
    var o = [];
    skoresAd.adUnits.forEach(function(a) {
        o.push(a.code)
    });
    return o
}
skoresAd.mapInventory = function(slot) {
    return slot.getAdUnitPath()
}
skoresAd.checkDfpAdUnitsExists = function(p) {
    var o = !1;
    p.forEach(function(foo) {
        if (skoresAd.adUnitsCodes.indexOf(foo) !== -1) {
            o = !0
        }
    });
    return o
}
skoresAd.refresh = function(bar) {
    googletag.cmd.push(function() {
        pbjs.que.push(function() {
            var p = [];
            var updatedSlots = [];
            if (bar == undefined) {
                var slots = googletag.pubads().getSlots()
            } else {
                var slots = bar
            }
            slots.forEach(function(slot) {
                var foo = skoresAd.mapInventory(slot);
                if (foo !== !1) {
                    p.push(foo)
                }
            });
            console.log('[p]', p, '[checkDfpAdUnitsExists]', skoresAd.checkDfpAdUnitsExists(p), '[slots]', slots);
            if (p.length !== 0 && skoresAd.checkDfpAdUnitsExists(p)) {
                console.log('[Header Bidding Launched]', p);
                pbjs.requestBids({
                    timeout: PREBID_TIMEOUT,
                    adUnitCodes: p,
                    bidsBackHandler: function(b) {
                        slots.forEach(function(slot) {
                            var foo = skoresAd.mapInventory(slot);
                            if (foo !== !1) {
                                skoresAd.responses[foo] = b[foo];
                                if (slot.getTargetingKeys().length !== 0) {
                                    slot.getTargetingKeys().forEach(function(key) {
                                        if (key.substring(0, 3) == 'hb_') {
                                            slot.clearTargeting(key)
                                        }
                                    })
                                }
                                var targeting = pbjs.getAdserverTargeting([foo])[foo];
                                if (Object.keys(targeting).length !== 0) {
                                    var bidder = targeting.hb_bidder;
                                    slot.setTargeting('hb_size', targeting.hb_size);
                                    slot.setTargeting('hb_pb', targeting.hb_pb);
                                    slot.setTargeting('hb_format', targeting.hb_format);
                                    slot.setTargeting(('hb_adid_' + bidder).substr(0, 20), targeting[('hb_adid_' + bidder).substr(0, 20)]);
                                    slot.setTargeting(('hb_size_' + bidder).substr(0, 20), targeting[('hb_size_' + bidder).substr(0, 20)]);
                                    slot.setTargeting(('hb_pb_' + bidder).substr(0, 20), targeting[('hb_pb_' + bidder).substr(0, 20)])
                                }
                            }
                            updatedSlots.push(slot);
                            if (updatedSlots.length == slots.length) {
                                updatedSlots.forEach(function(slot) {
                                    console.log(['AdUnit'], slot.getAdUnitPath(), ['ElementId'], slot.getSlotElementId(), slot.getSizes(), slot.getTargetingKeys(), slot.getTargeting('AdPosition'))
                                });
                                googletag.pubads().refresh(updatedSlots)
                            }
                        })
                    }
                })
            } else {
                slots.forEach(function(slot) {
                    updatedSlots.push(slot)
                });
                if (updatedSlots.length == slots.length) {
                    googletag.pubads().refresh(updatedSlots)
                }
            }
        })
    })
}
skoresAd.showAllBids = function(){
    function forEach(responses, cb) {
        Object.keys(responses).forEach(function(adUnitCode) {
            var response = responses[adUnitCode];
            response.bids.forEach(function(bid) {
                cb(adUnitCode, bid);
            });
        });
    }
    var winners = pbjs.getAllWinningBids();
    var output = [];
    forEach(pbjs.getBidResponses(), function(code, bid) {
        output.push({
            bid: bid,
            adunit: code,
            adId: bid.adId,
            bidder: bid.bidder,
            time: bid.timeToRespond,
            cpm: bid.cpm,
            msg: bid.statusMessage,
            rendered: !!winners.find(function(winner) {
                return winner.adId==bid.adId;
            })
        });
    });
    forEach(pbjs.getNoBids && pbjs.getNoBids() || {}, function(code, bid) {
        output.push({
            msg: "no bid",
            adunit: code,
            adId: bid.bidId,
            bidder: bid.bidder
        });
    });
    if (output.length) {
        if (console.table) {
            console.table(output);
        } else {
            for (var j = 0; j < output.length; j++) {
                console.log(output[j]);
            }
        }
    } else {
        console.warn('NO prebid responses');
    }
}

skoresAd.refreshHandler = function(){
    
    var renderedSlots = {};

    //To check whether it's a Skin (adPosition is empty and sizes are 1x1 

    googletag.cmd.push(function(){
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            //We check whether there is no targeting and sizes is [1,1]
            //console.log('[Rendered Element]', event.slot.getSlotElementId(), '[event]', event)
            renderedSlots[event.slot.getSlotElementId()] = {
                campaignId : event.campaignId,
                visibility : 0
            }
            if(event.campaignId == null){
                setTimeout(function(){
                    meltyAd.refresh([event.slot]);
                }, 30000)
            }
        });
        googletag.pubads().addEventListener('impressionViewable', function(event){
            console.log('[Viewed Element]', event.slot.getSlotElementId())
            setTimeout(function(){
                var renderedSlot = renderedSlots[event.slot.getSlotElementId()];
                //event.slot.setTargeting('_r', renderedSlot._r);
                //console.log('[CampaignId]',renderedSlot.campaignId, '[_r]', renderedSlot._r, '[Visibility]', renderedSlot.visibility);
                if(renderedSlot.visibility > 50){
                    
                    skoresAd.refresh([event.slot]);
                    console.log('[Refreshed Slot]', event.slot.getSlotElementId())
                } else {
                    console.log('Premium Ad, no refresh for ' + event.slot.getSlotElementId())
                }
            }, 30000)
        })
        googletag.pubads().addEventListener('slotVisibilityChanged', function(event){
            //console.log('[event]', event, ['event.inViewPercentage'], event.inViewPercentage)
            renderedSlots[event.slot.getSlotElementId()].visibility = event.inViewPercentage
        });
    })
}

skoresAd.init = function() {
    skoresAd.setUpPbjs()
    skoresAd.setUpCurrencyPbjs()
    skoresAd.inventoryType = skoresAd.setInventoryType()
    skoresAd.adUnits = skoresAd.setAdUnits()
    skoresAd.adUnitsCodes = skoresAd.setAdUnitsCodes()
    skoresAd.refreshHandler()
    pbjs.que.push(function() {
        pbjs.addAdUnits(skoresAd.adUnits)
    });
    skoresAd.que.push = function(t) {
        t()
    }
    ;
    for (var at = 0; at < skoresAd.que.length; at++) {
        skoresAd.que[at]()
    }
}
skoresAd.init()
