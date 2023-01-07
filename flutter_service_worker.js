'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "afffc78b9994491ee0f8cae465465cda",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"main.dart.js": "5382c36c139f2d6f954a85be301e04d8",
"index.html": "4483d08a90968716a261415615a95daf",
"/": "4483d08a90968716a261415615a95daf",
"manifest.json": "d9295dedeae241705f6b34a2d4909120",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/5d/3f0a06eab8921b097e9ff3fd162a43257025cc": "76b3291839b34de335bd04d6ebb4b7c3",
".git/objects/ef/bd263bc3503e5ebc193a8051ee264b461f89bf": "37ee5cfe1b27b5ae32ba45a74648d083",
".git/objects/76/b1ac21d09876d0ce1539afa9fbb567a36d4878": "2f16e370ae2e324cb126aaf0d8581249",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/9d/0ab9ec73e9ff9b9e1b5f4b23e92f4d37788bac": "42df1a75418ff51c8b7bb0f4ab0e832e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/72/0fcf5415894538447fdc9b7c57c2bd81247746": "760ab80faff2793280a733784ee4195d",
".git/objects/d5/1a5bcd49cd32560bc868c1d5c92d548553a5ed": "0ef573370d01be3b28030cfe04ffad63",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/65/1d6e2ea5e6ac20d621cb17f35b5d8c631affa8": "df905b47a444de634682ed7af72aa806",
".git/objects/25/e20cc0fd54f8204ff637d0d8fc222d0ec39d9f": "54e960f489e7cd49b474f057e498c7c4",
".git/objects/e6/b1a5f9da91bd82c80309695b248d3a577eee2a": "619586e4c12ce1de75d5e83e2565e9ee",
".git/objects/e6/eccfb0f7298bfda1f3e445f46bf617a05e16bf": "01e4a6a2b5ed0b00f381ca13b48f281c",
".git/objects/13/92af54e6afbcb368b3cead92fb04d41b763658": "4ae348c667f3640015f9e0df903ecd46",
".git/objects/13/690fb0552d834fd351edb73b58ca24f5393b2f": "532e874c45546b5a797857c3310030e9",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/71/c8657214e1c087817795c601b18716b55d5176": "d1413ec46f6727b511931d50baea1a07",
".git/objects/2c/56890c04e2fedef51d2d52c594cd34f2c55e27": "d55a5bf9212cb7a373e54dece672aa14",
".git/objects/55/7db03de997c86a4a028e1ebd3a1ceb225be238": "8860a360209f66ea0340a3c3a9aed75b",
".git/objects/08/ee99248bcfecc32b25423fb81a6f504555d1e4": "092ff020ce72adfc0bae9ec59d2ac9e8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/60/4df3def5438cc50de4508872646593cb30b6cb": "a17fcef6262529ebac028401334e8a55",
".git/objects/fe/2d3b5094927e818052b7cfc09cdb8321f29beb": "0be56078ae890060c626e8a957562122",
".git/objects/91/bb46147c01b51ee41af957667923c2c55882d0": "6311daf8c533eb447bba017313e8f932",
".git/objects/38/c1d66548a6d9d296db3791deb8f14ab1caade1": "471c6f25bddada4d63cb36f75c21a677",
".git/objects/1c/e7f25385a6feab7dd77f2f04e608379b9bed71": "a6fef3d2d54c68d2f1c2f3dbc8a8b998",
".git/objects/6a/f0c0f8a677e0739a62de8a55d36f3dddca737c": "1ebf824db7564158fe50fec3a082784f",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/a6/9cd5660da59eb19eda2725f006da93d32e7766": "3e3f99c70d08ba4c0334832225114ded",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/7d/28997b811342db2bc7a0badf5c5971237b488c": "46b3e723d2bc7dbcb73e4dd807792062",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/67/8acb8308054c718ca3a639dbdf98bbba2cfa7f": "058a6df86c6a4c7d27edd0d2063a1709",
".git/objects/2f/b95fd10960c75dcde809cef3bd41ca27c5984a": "4509bf8df11b3fd634730963c12f2ab1",
".git/objects/4a/b3cb3adbc8cdd7223c869a5e730b855c1fd004": "ff7880e0e218d2c23096a69c3519d506",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/45/a95cd5b253fab5f273c4e5c5d24cb5e2105d38": "3e0dfbb0b89363a15c3f684c96237be3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/cd/9e23ee46065a075cd30d6aea87fb32d30813df": "0a193be3a59b1935c9eb2f7f3929b4fa",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/0f/856d9c3e17ff41e20694318bbbf126c25c2d5c": "b45500c9d237bb5677c3baf850b67576",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/flutter_dev": "5dff28ccdfe03028e0ec48e7254e3b9f",
".git/refs/remotes/origin/main": "0d644bbf4ade302385476f5c85938503",
".git/refs/heads/flutter_dev": "5dff28ccdfe03028e0ec48e7254e3b9f",
".git/refs/heads/main": "0d644bbf4ade302385476f5c85938503",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/ORIG_HEAD": "0d644bbf4ade302385476f5c85938503",
".git/logs/refs/remotes/origin/flutter_dev": "3cdbca8453e8abefd4f5e0df4683c51e",
".git/logs/refs/remotes/origin/main": "d0a6995145640f3a939a98aeabca7000",
".git/logs/refs/heads/flutter_dev": "e387926a4ce17af2e0bff0811783b755",
".git/logs/refs/heads/main": "ef8a7ca88ed8dc5c44dd5e86f5b0cf5d",
".git/logs/HEAD": "38de222782f9be6c4dd7257c92d76da9",
".git/config": "3f349ba639ccaffb6e915113fbd227c1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "0ed416c3e7d46d020b94e4a4586cf25c",
".git/index": "0b49f43ff2e5f03e75de973c049ada4f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "394546e8a6be954e25dfbdb29a697e60",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/shaders/ink_sparkle.frag": "a51d1cb92fe46d70291c41ddfda20702",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "7242b60fbd52c47679f24610a2631c65",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
