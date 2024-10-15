'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f9e9776190c0d9b6c83f111924c523f5",
"version.json": "9415dcff0c355757c63b57391eec4820",
"favicon.ico": "507a32e481a77ee3bbe0f338b7ba4bd9",
"index.html": "7d8f757f794afa16f3054fa4d7d0d737",
"/": "7d8f757f794afa16f3054fa4d7d0d737",
"apple-touch-icon.png": "1f1181651d8113c3a03c718b50385ea5",
"main.dart.js": "3f3c0339fd4253084a3751c55be99843",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/icon-192.png": "8ede2417e9722ca6c616efdc3e1712ca",
"icons/icon-192-maskable.png": "127da620a7e7f5b8651659ca07a2c2a6",
"icons/icon-512-maskable.png": "acd9a4ec53aea6bcdb8dd53460e673ce",
"icons/icon-512.png": "dda87ca062e48baaab908243d00a5bd1",
"manifest.json": "829c5051f10fb3772664f203d15a8f9d",
".git/config": "e875bd0fdd805592d5212fbe532754dd",
".git/objects/61/0de0dead4a322b38dd87d9e4da34ac3f19e794": "f7fc948fd195abff33b54515156a2678",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/22640fa8702f76401721a6fd884227bad42805": "ac452de3269c09981615ff3341b1bc8c",
".git/objects/9e/a9b1c97fec16523d11d7bf67ddac022679f603": "d5fdf5aa6f26d057b16fda3ffef65351",
".git/objects/04/53a957cd9752892afa2777453ff19d27a734a0": "ff3e6766a7fddd176c969228605cdbfc",
".git/objects/6a/be3a9c614267560139834e1d49d129eacbaae8": "5efd0aa830b4fe48ff16a885805c8b06",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/f4dce69bf30f461571681df91f6f75e7bf1c5a": "09fe5c837143dd31f42fcc211d9e8006",
".git/objects/51/7f2ab624993f7cdf40c0d15860f703df00baad": "967c5b0afa99cac478b8a7ab64414882",
".git/objects/51/15126d7dd1fd47791a1e8253e89301511b866c": "b9a1aa820f7709488f86c5e90cbf9ea3",
".git/objects/3d/6a0570e3e6ea8ca4e26c5d5e075e482e8254ae": "0f5d045dd6999f9fea1f54b283b5e825",
".git/objects/0b/98c6badfd3f873ae291206f80bfa5f39407c7d": "6ab6dfff9eede2d18de126f8b3e84f07",
".git/objects/93/69d6fcef648c849200583acf3e390dc7cc1609": "24480589d02e43aa3476c9e83cee48d6",
".git/objects/5a/fe2f271524c8565e5446995b8c6e3c7b27176c": "3304a9ddaa7a2bc8dbc2676d2ad8c8c4",
".git/objects/5f/60ceef589f24f459922319afca078d16b3aa98": "2330d38f55d399e2a57f0b8103003a4c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/0de58370ce003c6164e114d261b798fa870e29": "b7b7a9270426ec73b3b987c70ba791ec",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/3e1daecc37b34679d3f51666f713645fda75e7": "a82d1c68b29a18a4a3661d87da98317c",
".git/objects/bd/8c2a2a2ddd0fe08b59e6933bb13d9e7201ab2b": "769e7b528c9fd1263a6b7e0445f22a62",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/4b1997c39af398c13005dc48c6adb8d2723a40": "c5849164d42bd6cf23ed2377d0bdafea",
".git/objects/fd/b9ec08ecc2ddc70f757b72b587c296e52e0a76": "5c9753bd9542f35a98ad57adce90317e",
".git/objects/fd/dac1b3fbdd32bf8817b58dadd4a172a25404a2": "280d85318a70118723bf3d2c205b9101",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/dc86b75354bd5d781521edc2d11a92e1429f1a": "f6c7b65d6db6ae11bb723c3e10d9e872",
".git/objects/f5/4e1c1c1d5a05857f455385c00f6b8e00838d9a": "017deb9691ae2bdf9c8aa19708819cb4",
".git/objects/ed/ad5af8a28c4364208a0a053781a1b03293847b": "8c5b0482181aeac4a8813758313f9bbe",
".git/objects/20/45f9afaa916a358cc4848f51a87aa4f6b8d35c": "1079874bb151e3be674cf471a430525d",
".git/objects/27/0c5492c235c6d85e476deb7c20a07fcd5b2ad4": "0f8329ed00cb162c203800714e39b458",
".git/objects/29/cf8b87572936da460a420c1869927f763c92c2": "0f35fe622ff138fa61247bc3f356d528",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/bffce688f9904bf713d871890e9b5e87e60d89": "f1c8e112b6a16691537b5e06164eb445",
".git/objects/87/0c689fd59cd9f58becbfc9413458ef3dccd6c7": "e5bb3000d89acd364e6d211ba32d1600",
".git/objects/74/2a131b014e6e4aee3200b2c254b9ad301f7efc": "811a4c25e4a91ff6ab7be0c0473989c8",
".git/objects/74/9b39e0fe5021bc6c4e7d44ea1810bc7aade549": "e95b2f924f737ac0c1c365badb0d166c",
".git/objects/74/bdcdcf0cbacdc17ee650d4fef6305130431052": "5100793502be8b6df8c126c7161f6dee",
".git/objects/7b/53ecadb3decb4e582dc9e3a9b07540a5d4c81a": "39ef6d194b047126e1bfcc50c70ebe32",
".git/objects/7b/fda1f5701b98802be8c26ed0bf4d2bc8ee72e3": "9ceb09720210129451cea97849d16c8d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/5db0d1aaa1fcdd94407c2d901b8944858242c4": "d3e89c66a45a4d4b76cd7cfd0dbff39d",
".git/objects/81/88e7d1b4d1323b05e0143ef702c20c57f65fa5": "4b704cb7939c56513082a39edaf4b7f6",
".git/objects/44/f40515fa9b4794d4bfda37dde83c4e8ccc2390": "342fa37a6e69121202e595c3e5e3c59f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/5a966b386c264c8106e5b555036f67f69a4ae1": "1eb3d672c09106324e26c6ea7204eb66",
".git/objects/36/625cd6def71a1eb2cbb0f21e4dec0458025d95": "f91f61cb32b90055ba9f1ad11a9468c6",
".git/objects/91/f871ca518f4661d586780582839ced3c2e789f": "c019de4a5e2f3f015a319bddcdf5cba8",
".git/objects/62/7dcc15a4d116b1054ba163a4a475f5ec223e40": "65a7d6cb551ffa574bf29cbabc8b9a31",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/37/5cea2b70af64e1c86f105e03beb8a372ecad81": "d16bd4d634c2d8efb61c832d688d9079",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/a9a997e8f06c6e0a81fed4823a78dc0e273f7b": "8ad2b3eb99ef2915e5b78d5bbf015cf5",
".git/objects/06/b5a2bbb9e75224aeb9ecc1b1a88fdf2ce80494": "d138e737d25b5730b4e3803e4a93ae41",
".git/objects/06/bdbddce435c5d3c674f8376aae1aeb077ca1ba": "98be4faf3fccaae6b47b96b48aab5618",
".git/objects/39/011b05adbf5b6604e56939eeb8614963a936dd": "80ba922b8ee8c4635f172f361d972f0c",
".git/objects/52/6932e148df0d0a4f03dba03efef1f7e3726c59": "eb8ae9be1a2c304a5429681ae7a79c89",
".git/objects/97/c5c4eec7addb94458f52ee98d69d329342389d": "9e7c2f8de20f09eedee50447df1f23a4",
".git/objects/97/c7a9b1dc34bf7bbaa416116a6a7aa9697511b3": "9885fa9bea56d7da8727709d197e577a",
".git/objects/0f/8a682c72c8db79d00d13e1ecd6cad43ed3a168": "183668cf77db5a955f73f9ca869c6ea6",
".git/objects/0a/8689ed6eca157e9ad1ef586b1ed69c89b4c3bd": "7a5225ba7dbd67e977a089a001a191ef",
".git/objects/64/1ee81f9b5df8ca585b5e2edc7a5b9d895e623c": "635003947bc67bda2efddf945feb5a74",
".git/objects/90/6e958fffdd2d79f0c8d8c7962c0672f66e3b5b": "36b0836c96f83c70df73b236ed5a0da5",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/2c4c25eaeca079ac24b7f81e3c52310a7116be": "46ba8a0b4fa3c9200cc4ec952a5c520b",
".git/objects/a0/7cd2f631da59bdc513abe180688dbc3bed9b18": "2e71af39e5578b00b0dcf437e571bd92",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/084a260fd08b2f952c3a3e0d36b15cee146b9a": "ae0292a1a006894575ecfab2f2461276",
".git/objects/a9/16283ed9e67411999748b787c7ed55f7f4a2c1": "d90d660459ddaf786ce282d3318c6eaa",
".git/objects/d5/b0dc17f31547522b8a24dad38e55b616213203": "2b38aa078e4308e0ef92ac8b4331a0c3",
".git/objects/d5/e566785ea9032970b2acf778221d170c490726": "5b4f0a2b5ead4bbb02cdeb54fabfd56a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a73506afea8a0d7411328099b40efec4389652": "290bee9dc2b06d9055c5b7790e34dbe4",
".git/objects/cd/2594d3c1c310d80c53b3849e2f57bb5662d799": "6dd599ba33f42c7218f4bbd08c74a064",
".git/objects/f9/8c6728fdd51551a0b86d5435d58d217c31cfbd": "82d2fd1e648fe6508462aa8393d8eb3a",
".git/objects/ff/12a17d81f68bfcefdf11e33ca60977c45262bf": "ff28ffd8dc4ac0833cc4a383ea6b2e6d",
".git/objects/c2/8264aa62deb9e3c920abbf80de41dc9ecd2dec": "85c3f6e5712e9b101072149c298b1cd5",
".git/objects/f6/6b2aadb64b0c990423a210946d5e3dec909629": "df14bb240db907af27412aaf2f17cb15",
".git/objects/e9/ca71caed550d24ee1a90c5c60f79b5fa1314b6": "f8e27ee354e8b8a5e68b60ce218dd50d",
".git/objects/e9/6e259d450bf33a20d8d22ab1e81b7e09fcb6e0": "f9dabc756066d92652023af76b445767",
".git/objects/e7/2dff92309d4a810f0ae7ccc6eb3c6081303259": "aa9edd2bda7b715da4e84fae4752e8e1",
".git/objects/e7/c25fa9a3420102b464a07aff2eccca70c06d94": "8ae8099b2dd3f15544c8ca5c57598d8d",
".git/objects/ce/5ddebc0c4619bdd84b62c56dd9361c570182f1": "9579b9a562587d9ca28757a7ab0cff9d",
".git/objects/77/29923fb4b4c4bfc0076afbe1637ff0577a3766": "4be4f129d4c6d380e29eaf28cd47fbfc",
".git/objects/77/f8440d2af0d40a69686bdbcebbab3703522247": "2a4fcd8e2c88feb3b33a6bcd4e8c9529",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/15/fcb46f1bfb9cc6d3654f0ce3952be5dd1da5ad": "db5caab1f9063d54cc0ac362feaab576",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/85/d8c1d4dc6049e66f7e0ffc5ef5b6624ee84af9": "6659f4789f34207c5e93a16d37fd9dcc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/c37be021e2101bf1a75072119f9b72f749d1d5": "cdb35c4e93ceb3f3a8ae73adc41aa0e8",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/1c/72cba12b44501c7bc22ac1a7453465112c4d4b": "fe72a8901b18b229a9e403ab530b85b6",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/9da967c5686d7173f8835d891a43cf5dbdc4ba": "c5a73e5227fe39b39b5c56350b99f04a",
".git/objects/8e/43bd182b38dc461f961a63364535ddb140df70": "43dbc137a547b5460f3c32b9094a0e07",
".git/objects/8e/56dde5e54f820ba85f441f188dd3f51ad3f25a": "857523a494403279f4312ba178ad84a1",
".git/objects/25/6abbd70ff67d7c700951c8b425c411717d8eb0": "d161a10e060f40140cf1fce9dde29293",
".git/objects/25/eda42e6f30711cd28fde65efc56b071cbade05": "e11ab56d8eba5b84039ddc9fcf6f34ac",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "907241c296515cf69440469bbcef5d1d",
".git/logs/refs/heads/main": "907241c296515cf69440469bbcef5d1d",
".git/logs/refs/remotes/origin/main": "123f818a94509d8e773ec06ef9736681",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "011adafb908603f283d5446a9453df8b",
".git/refs/remotes/origin/main": "011adafb908603f283d5446a9453df8b",
".git/index": "ac1c907264d3294bacefc887af837cec",
".git/COMMIT_EDITMSG": "cb1e95d2c8bdad3227b707322ba7b9aa",
"assets/AssetManifest.json": "43520b9dcae7634ca82ea8313d40c619",
"assets/NOTICES": "1b7c93f21284ec0ff1197bd3a11889ef",
"assets/FontManifest.json": "90082ab434109e4d3a9c8900a95e1538",
"assets/AssetManifest.bin.json": "7abbce2d30f8e4b82c82b34bbb02f6c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_cashfree_pg_sdk/assets/discover.png": "8fb5c3dd58ffb198644a9aac0d0a5da2",
"assets/packages/flutter_cashfree_pg_sdk/assets/rupay.png": "b6c88a3273204df54bc46e374b633570",
"assets/packages/flutter_cashfree_pg_sdk/assets/diners.png": "6bc0a26fbe98312d2cde3ca06a9b9518",
"assets/packages/flutter_cashfree_pg_sdk/assets/maestro.png": "49f3167896883d38eb9770f6527fa961",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "3442819455f79b208c50094bae6843e8",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/jcb.png": "903e2793c61fc15e48fed184d6eadbe7",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "99f1d408e289af3e6359feffc5abc003",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "64dd58b0f24ee7bf272d964f508660bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "885dc4f2df2145f7be7fcb23d916b1b7",
"assets/fonts/MaterialIcons-Regular.otf": "569e3683e4e5e17b7e1d9f0427b8c95b",
"assets/assets/images/earning.png": "a25f53df57a9a89bcd900b5d46058ab0",
"assets/assets/images/placeholder.png": "454d9885f6ba0f274dfd88c3c714cdbb",
"assets/assets/images/avatar.png": "7b2d74917e284a1a3ec649ddc9627c92",
"assets/assets/images/payments.png": "11b2099adcbaebf6c1ac5db04fe73097",
"assets/assets/icons/lock.png": "d7ca35345952a64a9d7596712752668c",
"assets/assets/icons/logo.png": "3d911131bebc5de97af159911876a144",
"assets/assets/icons/cloud.png": "551d8542f52c648e078fce6ce9d8726c",
"assets/assets/icons/phone.png": "0fddde191e765d495640d78e4a30ec80",
"assets/assets/icons/msg_icon.png": "786e80286f4eae24be909300e9b43cf4",
"assets/assets/icons/google.png": "b9af3a9d06f2fa65e7b3a9d7367cb7d6",
"assets/assets/icons/add_item.png": "c5756ef31fe7882e8958426a6e8e9dd7",
"assets/assets/lottie/car.json": "a61f9f345c0be9bbf7d3b837039eea86",
"assets/assets/lottie/earning.json": "bd2cda8aaf3ab4e4815c6e4c79d1ca1f",
"assets/assets/lottie/splash.json": "8da37be2d24466362978da739dea49b4",
"assets/assets/lottie/verification.json": "64cf56127aeb5285c1e13b7d352358b2",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
