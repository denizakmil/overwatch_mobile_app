import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,ScrollView,
} from 'react-native';


// import ImageView from '../src/ImageView';
import ImageView from 'react-native-image-view';

const {width,height} = Dimensions.get('window');

const cities = [


{source: {uri:'https://66.media.tumblr.com/31a5d67465e928a9e5b0c9c9bee3b677/8be073dcb8fd5ab0-33/s500x750/4eb40b7093f799d51611040eca8989a1dd974761.jpg',cache: 'force-cache'
,},title: 'Download image no : 2',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/975b721e976869a3042631c1012d1ee1/tumblr_ott840vYRU1vkdbg9o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 2',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/301ddf4275437f9257e9ce6643963dea/tumblr_ott7xezja21vkdbg9o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 3',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/15e0cdeb33e8eebe518ff1929c2dfd35/tumblr_ott7u7Kj4R1vkdbg9o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 4',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/96b872280698110ed295f1aca0e479c7/tumblr_ott7e6gDVy1vkdbg9o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 5',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/04f4c4ff374eff7936e2c6b48a27ea1c/tumblr_ott791WBlb1vkdbg9o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 6',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/11082facedda709fe64ba83e2c2997f6/tumblr_on5hn88hXl1vkdbg9o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 7',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/8035664a6a218a40d9236c8ac37cf763/afd94f4c52efb253-aa/s1280x1920/9d890b4e59d4602b82cabe569d516a145b0aa492.png',cache: 'force-cache'
,},title: 'Download image no : 8',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/b973a28fa5a2b9e534867f9ad1059a1f/0aa32de5c45ca7e3-3d/s1280x1920/f8774dee451ab0cdbb199ece3a63c64bfafc2cdc.jpg',cache: 'force-cache'
,},title: 'Download image no : 9',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/b69c41dc0357da3352e073cce8fe5118/39c6ac3af2cb78ca-0b/s1280x1920/9b8954f0ca542250991a62c23400c1fa9fe7431f.jpg',cache: 'force-cache'
,},title: 'Download image no : 10',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/09da54fe50f3dace57528bed583d7bc0/d11d46489c563b89-25/s1280x1920/10b79e90ac0e26388134cbc7aba2f232a488f49c.png',cache: 'force-cache'
,},title: 'Download image no : 11',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/74068326f8d12bd99d7cf4f6ff795949/ef473e2ae54f0f55-48/s1280x1920/927276b7c2dffbda90bb13c3a88ddf0524e10084.jpg',cache: 'force-cache'
,},title: 'Download image no : 12',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/bc401ac973b4274bf7d20a9f7c2bcd5b/b01aecfc955308ec-29/s1280x1920/6fe273208adde7c12d581a7a9e52edd1bf21b95d.png',cache: 'force-cache'
,},title: 'Download image no : 13',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/1fcacb05db0bb376edb3eb0bcdf822bc/79dc3116bf290fe0-e7/s1280x1920/4d8567e87a779398cad4e976e0a2bbb5843a2e3f.png',cache: 'force-cache'
,},title: 'Download image14',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/e1766d95372e8af92b1edd3ba5b30154/2a9ea6b214f99713-cf/s1280x1920/0c540bc15f9195c4623beebc533360a2a74f501b.png',cache: 'force-cache'
,},title: 'Download image no : 15',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/4632513a402b3cfef4077f2468595694/157c77b322b01223-d8/s1280x1920/1eefe2ba1d1058882f1df4fa9eb585dd7e85fbf1.jpg',cache: 'force-cache'
,},title: 'Download image no : 16',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/de3c4c5c0f7c217cef370642954a2251/9a9fb6834ee71caa-77/s1280x1920/44fabbaaa4eb6853e4caa628e212c64632c0e8ff.png',cache: 'force-cache'
,},title: 'Download image no : 17',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/9772a6902b8a2bb85d601457a4c87ce7/3fb913b6f744199e-44/s1280x1920/b51db3ab6d8b49a7b7ceaa35494b5246090edd21.jpg',cache: 'force-cache'
,},title: 'Download image no : 18',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/3e7267b412d59a42076773c4c032ba55/c0dc8aa200536eae-e5/s1280x1920/0a0a28bc3d219408677a3198cbd1399181a2e1c8.jpg',cache: 'force-cache'
,},title: 'Download image no : 19',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/ef2d643d30fb3a901cb16d65d925367c/58a5b9cae92daa49-00/s1280x1920/865faf1d2d6d81049fa28f89965ef38774feee76.jpg',cache: 'force-cache'
,},title: 'Download image no : 20',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/a10c206f359bf2fa75cc1f74001fb6c0/6ee8be1a507789e6-1f/s1280x1920/125b6623696eb9c8b27aa3cf5668526631931620.jpg',cache: 'force-cache'
,},title: 'Download image no : 21',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/67bfba3133e7c3bbe436c752dd3f5c67/56255bd606cb101b-58/s1280x1920/10fdac240c4ea6d923dfc9802d19002c7336d89a.jpg',cache: 'force-cache'
,},title: 'Download image no : 22',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/6299b5ae8bce2bce5b7c9c607b324a38/6b5e9f6dd4f08668-cf/s1280x1920/f60264e104d611688d629c646e037e2d53905b52.jpg',cache: 'force-cache'
,},title: 'Download image no : 23',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/adf1505c7c386bf4ea5210035068e861/e581b5d9f92992ed-32/s1280x1920/fe6cdf6746fec0d6a166673050d18c42034a9bd5.png',cache: 'force-cache'
,},title: 'Download image no : 24',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/2e21cb9d53ac0a5ea0e0e47965f07947/tumblr_pwo5b19aIt1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 25',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/784970d8f981feecdfe35b4c9c02feb4/e6df2ef2eed5bdc3-e8/s1280x1920/bcaae9989de357536874867bab1002ad5c0d7dbf.png',cache: 'force-cache'
,},title: 'Download image no : 26',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/1bfad433760450fc769ad09066ff26f7/tumblr_pvy25fflTl1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 27',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/058d4683ab2d54f79892c7338b57bb4e/tumblr_pvp3f3pld51um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 28',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/e24db5295917cf30929a2b7de7d4dbb4/tumblr_pvp38gOtRy1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 29',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/2dcb92d6b55eb8035c5def01516dee6b/tumblr_puvelwU3m31um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 30',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/361a478741944385781c13279c622e9c/tumblr_plauzyKlWW1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 31',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/99aa9ee982a49c515b565b79e2a46166/tumblr_pem7faaSsx1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 32',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/20f894bb66712e9fe9e415476e0df585/tumblr_pscgio6QiO1tgt0o7_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 33',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/16ff393f3cc0549ad95a6b671301605e/tumblr_pojez23iOB1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download imag 34',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/fb0a5b163bc979398e92e02ef76b5bc7/tumblr_pryev6iaMe1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 35',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/b2ae889ab75549623de8105bcf1c7ff7/tumblr_prx4cdwvk91tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 36',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/91443622adcaa1af289b09e9c0b240ef/tumblr_prsa22GnC21um1ig3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 37',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/050d41e82ae64fb98870a984894972ee/tumblr_prjn2c5tNz1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 38',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/9f62e9fff39b01ed4b87c3e06726ded0/tumblr_prd9g2BKJ81um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 39',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/81bec0299dfd8875fec6f9cae4dcf70a/tumblr_prd7klLIf01um1ig3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 40',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/c0020c18dda03f882f6bf12052948a56/tumblr_pqboayimzy1um1ig3o1_r2_1280.png',cache: 'force-cache'
,},title: 'Download image no : 41',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/bf3162b173c08ad2de38d338a5b4d441/tumblr_ppx8bf93Zh1um1ig3o2_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 42',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/772abc9f11644e819a751d4ec9c9c039/tumblr_ppf15rLtCD1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 43',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/051e758aeed3c8ea838fd571a874ac10/tumblr_p5jyx0Bklj1um1ig3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 44',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/f52554fe405379fa3b016143c99e6cab/tumblr_pon9ofGPu21um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 45',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/15ce840ea5d3a01b8fc07854b439417b/tumblr_pno45qZell1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 46',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/e6fa6bdab96f021f98f01a79c1ca21e4/tumblr_pmwetqMiBP1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 47',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/5303f8cc10c4bba6973579dd4a62537c/tumblr_pmqpavKGlI1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 48',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/690b68cf20aefcbddb133db8448adc49/tumblr_plrodi9zfC1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 49',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/a023bc24ac5ab251503370e12beeeba7/tumblr_pktdxdU4ul1wyj6i3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 50',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/65a68114ce339c27d5a0dfe940b75ef6/tumblr_pkl01exWmq1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 51',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/9022385656a08194c2b7ebb0faec79fd/tumblr_pjyto2Sefg1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 52',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/e77385350033b26fd0efcc894eba02c1/tumblr_pixtnpKBGI1um1ig3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 53',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/b544842468759105b1b32ea459043435/tumblr_pgq231Jj0C1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 54',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/6977bf318b59935c3753d39a23aeab1e/tumblr_pdskwxdsPH1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 55',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/5412099222ebb38f4369ffe6c17fe16c/tumblr_pdfi7zmBDy1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 56',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/5e4687633b74a1868769bac9cc075286/tumblr_pbmq4iuKo21um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 57',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/8c1224215b93235153bfa49b53affe2e/tumblr_pb9vpfMxpv1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 58',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/a1d79eae8a540c5bca76d7388ecfdea1/tumblr_palmcgodOs1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 59',resizeMode:'cover',cache: 'force-cache'
,},

{source: {uri:'https://66.media.tumblr.com/59514f85eb48e5385364f4878594b1fc/tumblr_paho8tmRl31um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 60',resizeMode:'cover',cache: 'force-cache'
,},
 
];

const nature = [
{source: {uri:'https://66.media.tumblr.com/dfeab7a83c571bba23922aa15d53ea72/tumblr_inline_pa4o1yw24x1tgt0o7_1280.png',cache: 'force-cache'
,},title: 'Download image no : 61',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/4f8d6d7dca7044251756e6194d426e12/tumblr_p76wxpCEX91um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 62',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/051e758aeed3c8ea838fd571a874ac10/tumblr_p5jyx0Bklj1um1ig3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 63',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/caa30113571a0bfad207389fe6113628/tumblr_p4wa21IrvF1um1ig3o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 64',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/06a3398f663e20241245b44f1ed2cd8f/tumblr_p358ouNUlL1um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 65',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/2c5fac300ca3d0671978433ae589bf71/tumblr_p2fbujE0d41um1ig3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 66',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/28b13a3050f54755a60257a80cf95245/tumblr_ow18fyvNcY1um1ig3o1_r1_640.png',cache: 'force-cache'
,},title: 'Download image no : 67',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/d8110777a1840b708216f1478ae67745/tumblr_okd82p9VqB1um1ig3o1_r1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 68',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/422832891dfaac0dd534b375def7f5d1/tumblr_pxz5z4Kvu81su2q6zo1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 69',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/e3b78da7d0565f78413ee002bff342a1/tumblr_pyzd1coj3I1vaa8sro1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 70',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/97a44297669ee0a519599ee0d51062bb/907357df59a4944d-76/s1280x1920/c4702eb0938532fbca5225023d6c98d92598c986.png',cache: 'force-cache'
,},title: 'Download image no : 71',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/cf5f8906468b96b976627b748e74bd07/bc325c3d78f95a4a-9b/s1280x1920/daa2252bdf4f95a17cebbc9186cae33b5f2b7261.png',cache: 'force-cache'
,},title: 'Download image no : 72',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/c922995c353ba83e47a0deb6e60a4e88/85b0d7b77f24f499-d5/s1280x1920/033fe87717659d567f14fbcf9a3e47a473f795e1.png',cache: 'force-cache'
,},title: 'Download image no : 73',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/74b46a5a26dbb2ee2e1a6f03d1f1f0f2/828a030e76ab1c68-06/s1280x1920/a4d4b49fe5d5d1cfbf1d69ea9c7cf4a0ea843c59.png',cache: 'force-cache'
,},title: 'Download image no : 74',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/d040cefdda911d412441c7ffec23d93d/a5b51d8bd5d027a5-6c/s1280x1920/0c893a2ca09b5e7b35b9edc6fd384342c095bae3.png',cache: 'force-cache'
,},title: 'Download image no : 75',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/dc0b7ad97d5e845a113bb67ebf84efd1/f28d1debd8bb05e5-96/s1280x1920/cef3157e0d44560b9d5733104546c60fa8093fe7.png',cache: 'force-cache'
,},title: 'Download image no : 76',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/d349a2846f86133350c5b296f70b281a/ee273e0a3524069f-02/s1280x1920/597d98da884767ce02b395e9d2d8e0bdd2cdeff8.png',cache: 'force-cache'
,},title: 'Download image no : 77',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/7668eaf13d9a2b21525d17a417aa728f/f4370dd450dccb6a-93/s1280x1920/49395db10a7dc2133c37c10b9960a2c247b63220.png',cache: 'force-cache'
,},title: 'Download image no : 78',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/d5a3e6238a8ad9c27ae4dfca8133606a/20018afda51d56f5-b0/s1280x1920/567142c502c8df97e43226abe4faa0aaac31fd42.png',cache: 'force-cache'
,},title: 'Download image no : 79',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/6533a69a88d71ed154deec49865bc1e7/6f1e7cb6c30e29b8-fe/s1280x1920/7b1242a86e6b07261c124403455675e23069154c.png',cache: 'force-cache'
,},title: 'Download image no : 80',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/2a478982c2642039c7e4081333e8d716/0fe96cbc8d63cf11-39/s1280x1920/4dcbe3a9a3ded7aeb27bdf3c232bdf8f3f5116ac.png',cache: 'force-cache'
,},title: 'Download image no : 81',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/10c403237a04f3c81302296adaa52c53/2d4152b783a844dd-d8/s1280x1920/8223c067188c4400cc83399d0dd3b0056f0d028c.png',cache: 'force-cache'
,},title: 'Download image no : 82',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/389f21e4b395975f2f04db26ed81a949/34066d257fbe8bd1-fe/s1280x1920/c5830412bcd051195297f31b9656ed2aa4efddf7.png',cache: 'force-cache'
,},title: 'Download image no : 83',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/944c7b78f0c049070a90dc1eacb8f505/ceca75b39826a2c7-e9/s500x750/5c617812b00cf4b917bef4d219e1ac982b315d42.jpg',cache: 'force-cache'
,},title: 'Download image no : 84',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/d5082d940448b0af8c9a77f095a74ac8/e9f705642cdfba35-ba/s1280x1920/0a6cc408eea24876e8a5bfba962c1f9ae4fd9cfb.png',cache: 'force-cache'
,},title: 'Download image no : 85',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/dbbfa43106375b22963fe998e9d63453/5ae0ae5c254695c3-a2/s1280x1920/6a2fe623114598c89410818a992dba93c4cb0b7e.png',cache: 'force-cache'
,},title: 'Download image no : 86',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/b66a7db92a38d6a914079c21dc1f4743/b53e63294c3db173-a4/s1280x1920/2206abe830ef99e0b81e236da352df9f0dbc7de0.png',cache: 'force-cache'
,},title: 'Download image no : 87',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/576d2a2a6f4a47f0feb48b8425b7ec01/08fc4de782e3dfb5-f4/s1280x1920/45a465865a3ae40cbe0d84491cfe28a723795598.png',cache: 'force-cache'
,},title: 'Download image no : 88',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/05911e9a2d2af9fc8bf0020f036b3f48/e22ac9ba62d3f146-55/s1280x1920/ffad13d137f270120156716092000e526698f599.png',cache: 'force-cache'
,},title: 'Download image no : 89',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/3f13e8be85f7c0870f048ba05b7069f7/a6c7b02a308f254a-81/s500x750/8bba37822cba05ed4a2991eb10cdfb7db52e1483.jpg',cache: 'force-cache'
,},title: 'Download image no : 90',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/1a4874c60a299374b5e91ddf4b4d497f/tumblr_pxqo6uYoe91r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 90',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/62872d67b77394a92abe265faedc6523/tumblr_pxqo6uYoe91r6iu34o2_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 91',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/586c754fd11154ce7d7f8a914fd42979/tumblr_px86gdD1WL1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 92',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/9163600d0651f3a914db79cdbdf76dde/tumblr_pv5efpZSPT1xvwcglo8_r2_1280.png',cache: 'force-cache'
,},title: 'Download image no : 93',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/2889fb6db063e2d766ba42ecbdc97698/tumblr_pv5efpZSPT1xvwcglo7_640.png',cache: 'force-cache'
,},title: 'Download image no : 94',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/fb663632fa3d26ba4661889f5b34e401/tumblr_pv5efpZSPT1xvwcglo9_1280.png',cache: 'force-cache'
,},title: 'Download image no : 95',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/3a380c1f2a3e5fb89ce5e996106f4f7d/tumblr_pvmlqkJjk71r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 96',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/8ff6078c87706c191e5fab2357412156/tumblr_pt5swpFVZs1r6iu34o1_r1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 97',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/ff53acb6ec28a4ae5aefdd2d9e44b7a7/tumblr_pss7bp8hC01r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 98',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/b735a1e15f7688a05b15a87398249faa/tumblr_pshoo9Tahq1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 99',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/b7583c746ba1ee80e45389927cb9f19b/tumblr_pqom6uDp3f1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 100',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/5b33343f3638ccabc3fc967035c9d69e/tumblr_inline_pqomfgP3Fa1r34i7c_500.jpg',cache: 'force-cache'
,},title: 'Download image no : 101',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/f2e2403a5bbd6c4d3fdcc24bcee143bf/tumblr_po9zrpwdCy1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 102',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/37cb864c5f1b657469dc838476b93995/tumblr_pneh5pIiBw1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 103',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/05bfed1d15d54bcee7ec2f97b63dc4a4/tumblr_plyajoit0g1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 104',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/a320fec76f532467444a807defcde95f/tumblr_pln1gmmivn1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 105',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/154ee5ede8a0d6dd5f15cd7c6a6be9c6/tumblr_pla6z4td4J1r6iu34o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 106',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/37f882f70f3e608464ad0682ab98f2cf/b571e941055862fe-57/s1280x1920/2591cdeffc153f10358b0ce4ca99a82f25dd2a7a.jpg',cache: 'force-cache'
,},title: 'Download image no : 107',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/1ce8988e46423fda804e32cd25e0222d/45b940a8a14f03b6-c7/s1280x1920/35e4d7919c75f306038972a4ef844b73b4c34293.jpg',cache: 'force-cache'
,},title: 'Download image no : 108',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/ed921655394b0b80b2fc956cb56ba2a2/7a0c4bc51a28b139-69/s1280x1920/da44c0335a414c64b5416267079aaf9f6745d6cf.jpg',cache: 'force-cache'
,},title: 'Download image no : 109',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/7f1df3001ae2f30849bae65f66acb3a6/05965923fd838d6d-13/s1280x1920/d210026914804a64a2fdb10153b4216bd1a78a23.jpg',cache: 'force-cache'
,},title: 'Download image no : 110',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/e5ec5e64291e92cc67121290b349e151/617ab50f16700a28-0a/s1280x1920/91cb05f2d8864c90c1a565ee2b3659ac36008221.jpg',cache: 'force-cache'
,},title: 'Download image no : 111',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/62d624721ad51c1eade4300d7b750469/189d44de93ed95c4-32/s1280x1920/c083a755573a15ed4ef2c5d5423a09ba1d6c922b.jpg',cache: 'force-cache'
,},title: 'Download image no : 112',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/4394cb2f72a43d6308fc97820f495a38/f0e1fc67ef388c73-06/s1280x1920/20db41742a0f64c10b75604616228d36b2c86669.jpg',cache: 'force-cache'
,},title: 'Download image no : 113',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/f59d55848c760d02b28965c9bec7d2ea/f4ceef2841dee560-1f/s1280x1920/e48c647b19998ab40b4022680aaf3385d685be4f.png',cache: 'force-cache'
,},title: 'Download image no : 114',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/0ad0af9b99242b80f0a2fb967acf705c/cb93c0451cd178a7-8b/s1280x1920/be51da34b60bcef2b8f7b41eba0ef90d77ffbb5f.png',cache: 'force-cache'
,},title: 'Download image no : 115',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/8213ff18415f0890859ebe395d4c7d5c/6e776ad99fc414ac-06/s1280x1920/b4afd29847a73e7646a573a81a85e11933392b06.png',cache: 'force-cache'
,},title: 'Download image no : 116',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/df2f21d60f111bdd975db4f3bc74f298/17eb4e254883a1a0-21/s1280x1920/d22e13a221ee5219b394d14e3d64cdde3481efbe.jpg',cache: 'force-cache'
,},title: 'Download image no : 117',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/1c4f5bc38e79f18d8c30474784dd2a6d/6cf51701f88c8e50-4f/s1280x1920/c67ee26c834e0ad64575e9277eb662b6f3d4fc62.jpg',cache: 'force-cache'
,},title: 'Download image no : 118',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/700892fd62777485f476d850b113b5c2/d0abcddfe2de1624-c2/s1280x1920/f397732cdb56a7b067e4a4237838bb0b52d14e8c.png',cache: 'force-cache'
,},title: 'Download image no : 119',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/7ddd4ccee13513b55af99ef8cc9823ef/d01b1af36f22da0f-6b/s1280x1920/8041df51ed074a28c1868d21c60753db594453b5.png',cache: 'force-cache'
,},title: 'Download image no : 120',resizeMode:'cover',cache: 'force-cache'
,},
];

const nature2 = [
  {source: {uri:'https://66.media.tumblr.com/5d8d1cf6dbc997cee986daf6105df668/tumblr_pz0n5oUKGb1wyj6i3o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 121',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/80c18f963619bf00ba5e5c5a5c14b7ca/902b0c70f9646e05-37/s1280x1920/479d146ef95fd4eebe9c5c509a070293b2463302.jpg',cache: 'force-cache'
,},title: 'Download image no : 122',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/bb3705c04f76b4803635d4f03c284ca5/tumblr_pxirtwAlMT1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 123',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/814c96a2c403f4bbcedd3839ca53e384/e93f267caf5045fa-01/s1280x1920/c796b02c2548de8a5330dcca6439dfe947a36f35.jpg',cache: 'force-cache'
,},title: 'Download image no : 124',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/85e3c66866fdecde57516d51806868bb/tumblr_puw8kqc10D1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 125',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/27be4632a3b6a818aa0704ad8bceaee5/tumblr_pungb6lRh61wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 126',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/9e0ed402062366b0f006cdd0216c28db/tumblr_psgei2ajsi1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 127',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/ecd75adb52a91a6550827b0a670fd3b5/tumblr_ps0x0fKOLE1wyj6i3o2_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 128',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/68a9a872792830149826a479eabe213c/tumblr_pqn4s8DK621r0ao1r_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 129',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/642a57417d319a9165f49cb899fb2875/tumblr_pqflzyCt2j1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 130',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/b55262cac8a73750337b00d28b4f1026/tumblr_ppxx1bT28w1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 131',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/f90323bbc132cd7d820057e634ddfaf9/tumblr_pppc016wQR1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 132',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/289a229d19f16ee5ae4fdcf32793559d/tumblr_ppa7rgwAnj1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 133',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/0a1f30c20be08a5f96144bc95ccfbb41/tumblr_pon38kjoKA1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 134',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/b25662b88116db51394e8ae83f35f564/tumblr_pnp514c4K71wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 135',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/e4165d69021ad096bb70ac9d9f4403f8/tumblr_plwfxf1Pv91wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 136',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/433bcf7f0ee27b0d570a98a846951b88/tumblr_pllcf8JIAt1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 137',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/c44f41833b6c0cadd65860fd1c177d15/tumblr_pldxvvJJNb1wyj6i3o2_1280.png',cache: 'force-cache'
,},title: 'Download image no : 138',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/03f4142f554488702f57bedc0ff8e0d7/tumblr_plcdug2gz21wyj6i3o3_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 139',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/de8e97173af953c51f25620bd9350a74/tumblr_pkys8lg2bw1wyj6i3o2_r3_1280.png',cache: 'force-cache'
,},title: 'Download image no : 140',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/a023bc24ac5ab251503370e12beeeba7/tumblr_pktdxdU4ul1wyj6i3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 141',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/3de546355749587a2e1aa1bd8435de96/tumblr_pjypgmdu1i1wyj6i3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 142',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/f6f17ec57f1a2a93bb2327bc9ddc1200/tumblr_pjqg67JMPm1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 143',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/8e36454afb19dd06c390d5efacda4a07/tumblr_pjbtwxyAD41wyj6i3o2_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 144',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/e031411ead74a992e4de5893b4ac2fcd/tumblr_pia94sIPA81wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 145',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/5f162ad776f82a3994d0ec0489fdb550/tumblr_pi2o4ppgLM1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 146',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/38aff91a4f7c18fa03af21dd87ab3354/tumblr_inline_ph8wyi9izv1r0ao1r_1280.png',cache: 'force-cache'
,},title: 'Download image no : 147',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/32138970d69f9cb3308bbabe5a9dea43/tumblr_pgg8ydi6dR1wyj6i3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 148',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/9c05310b2ec4e6c8fbfc0e6892abbbe3/tumblr_pfgydnfxef1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 149',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/34e36cd294d7076eb771354455e35683/tumblr_peoptePJBV1wyj6i3o2_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 150',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/b2f4d78332b0c4c5ae51d17e0fa06111/tumblr_pe7y7arHgK1wyj6i3o2_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 151',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/0a2ff98c368c5c0ef4c6bce0af7b0629/tumblr_pe30hg9wEY1wyj6i3o1_1280.jpg ',cache: 'force-cache'
,},title: 'Download image no : 152',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/4346488643affb072907813dcced5aef/tumblr_pdz78k0VSc1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 153',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/97f7eb3080196033ee7daa265e1db038/tumblr_pdm5gv8oqb1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 154',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/5d267db89309ca0cd81ca28093b1ed1a/tumblr_pcz80ozhNF1wyj6i3o1_r3_1280.png',cache: 'force-cache'
,},title: 'Download image no : 155',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/e8c578b5a0a92f3b7bced7152b196f3f/tumblr_pcuhinSu5s1wyj6i3o2_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 156',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/31ef5cf6d406a52dad1a2ea17ac12757/tumblr_pcmg73xkaw1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 157',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/052e71474102a094981c15111aef20d0/tumblr_pcjdb6hIwA1wyj6i3o2_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 158',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/44d33d25cc66e84fea3631c5044d6cae/tumblr_pc4ia3HbgP1wyj6i3o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 159',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/6f3fd558a9c7125116cf766e717c2a4f/tumblr_pc2hi1g1Tk1wyj6i3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 160',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/fe06adf04deeae63a2ed9b4c94ee56ba/tumblr_pbjeb2Orij1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 161',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/5b16eea51ca8b3464645286d7df85ba4/tumblr_pbhhprZ79W1wyj6i3o1_1280.jpg',cache: 'force-cache'
,},title: 'Download image no : 162',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/d6eeda7f741d772571d97b7636ac6118/tumblr_pb8y3go0UB1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 163',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/1b68265758eee288ed50ea93452e78d7/tumblr_pb6cguXzIf1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 164',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/310e584f123c6b279a432b92478c9660/tumblr_pb579lnQqU1wyj6i3o1_r1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 165',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/5372bcc07d03c3b4064c0716931b5943/tumblr_pavqttjKsQ1wyj6i3o2_r2_1280.png',cache: 'force-cache'
,},title: 'Download image no : 166',resizeMode:'cover',cache: 'force-cache'
,},
{source: {uri:'https://66.media.tumblr.com/fd5531ca3bb339dbc27a34b296e2cd4d/tumblr_patgqrpYSC1wyj6i3o1_1280.png',cache: 'force-cache'
,},title: 'Download image no : 167',resizeMode:'cover',cache: 'force-cache'
,},
];


const tabs = [
    {title: 'Part one', images: cities},
    {title: 'Part two', images: nature},
    {title: 'Part three', images: nature2},
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        paddingTop: Platform.select({ios: 0, android: 10}),
    },
    tabs: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tabTitle: {
        color: '#EEE',
    },
    tabTitleActive: {
        fontWeight: '700',
        color: '#FFF',
    },
    footer: {
        width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    footerButton: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    footerText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
    },
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            imageIndex: 0,
            isImageViewVisible: false,
            likes: [...cities, ...nature].reduce((acc, image) => {
                acc[image.title] = 0;

                return acc;
            }, {}),
        };

        this.renderFooter = this.renderFooter.bind(this);
    }

    renderFooter({title}) {
        const {likes} = this.state;

        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>{title}</Text>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        const imageLikes = likes[title] + 1;
                        this.setState({likes: {...likes, [title]: imageLikes}});
                    }}
                >
                    <Text style={styles.footerText}>♥</Text>
                    <Text style={[styles.footerText, {marginLeft: 7}]}>
                        {likes[title]}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const {isImageViewVisible, activeTab, imageIndex} = this.state;
        const images = tabs[activeTab].images || [];

        return (
            <View style={styles.container}>
                <ScrollView>
                    {images.map((image, index) => (
                        <TouchableOpacity
                            //key={image.title}
                            onPress={() => {
                                this.setState({
                                    imageIndex: index,
                                    isImageViewVisible: true,
                                });
                            }}
                        >
                            <Image
                                style={{width, height: 200}}
                                source={image.source}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.tabs}>
                    {tabs.map(({title}, index) => (
                        <TouchableOpacity
                            style={styles.tab}
                           // key={title}
                            onPress={() => {
                                this.setState({
                                    activeTab: index,
                                });
                            }}
                        >
                            <Text
                                style={[
                                    styles.tabTitle,
                                    index === activeTab &&
                                        styles.tabTitleActive,
                                ]}
                            >
                                {title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <ImageView
                    glideAlways
                    images={images}
                    imageIndex={imageIndex}
                    isSwipeCloseEnabled={false}
                    animationType="slide"
                    isVisible={isImageViewVisible}
                    renderFooter={this.renderFooter}
                    onClose={() => this.setState({isImageViewVisible: false})}
                    onImageChange={index => {
                        console.log(index);
                    }}
                 />
            </View>
        );
    }
}