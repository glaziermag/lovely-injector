window.BENCHMARK_DATA = {
  "lastUpdate": 1790798749192,
  "repoUrl": "https://github.com/glaziermag/lovely-injector",
  "entries": {
    "lovely-core patches": [
      {
        "commit": {
          "author": {
            "email": "130600081+glaziermag@users.noreply.github.com",
            "name": "glaziermag",
            "username": "glaziermag"
          },
          "committer": {
            "email": "130600081+glaziermag@users.noreply.github.com",
            "name": "glaziermag",
            "username": "glaziermag"
          },
          "distinct": false,
          "id": "3eac00236f39fc07b0f4684a5ba1622b90a0a74b",
          "message": "ci: fix benchmark publish step failing on every master push\n\ngithub-action-benchmark exits with \"auto-push must be false when\nexternal-data-json-path is set\", so publish-benchmark has failed on\nevery push since the workflow landed. Nothing reached gh-pages, and\nbecause the job failed the bench-cache was never saved, so PR runs\nhad no baseline to compare against.\n\nWrite the cache baseline and the Pages chart in two separate steps.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-09-30T12:23:54-07:00",
          "tree_id": "45dde96529367d225e8fa6224e4627403e2c14e2",
          "url": "https://github.com/glaziermag/lovely-injector/commit/3eac00236f39fc07b0f4684a5ba1622b90a0a74b"
        },
        "date": 1790796818205,
        "tool": "cargo",
        "benches": [
          {
            "name": "patch::pattern_no_match/patch_0",
            "value": 825183,
            "range": "± 348174",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match/patch_1",
            "value": 826225,
            "range": "± 350242",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match/patch_2",
            "value": 833160,
            "range": "± 420452",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match/patch_3",
            "value": 833527,
            "range": "± 368816",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_0",
            "value": 873084,
            "range": "± 23562",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_1",
            "value": 914430,
            "range": "± 387865",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_2",
            "value": 1268956,
            "range": "± 21656",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_3",
            "value": 1652439,
            "range": "± 32936",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_0",
            "value": 54767,
            "range": "± 152422",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_1",
            "value": 1270451,
            "range": "± 30483",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_2",
            "value": 1221382,
            "range": "± 728311",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_3",
            "value": 1464378,
            "range": "± 63629",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_0",
            "value": 7985140,
            "range": "± 47356",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_1",
            "value": 18572309,
            "range": "± 336326",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_2",
            "value": 1015113,
            "range": "± 214156",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_3",
            "value": 18455227,
            "range": "± 206455",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_0",
            "value": 70273,
            "range": "± 6942",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_1",
            "value": 70648,
            "range": "± 6867",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_2",
            "value": 73009,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_3",
            "value": 73243,
            "range": "± 2453",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_0",
            "value": 74144,
            "range": "± 2526",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_1",
            "value": 78348,
            "range": "± 5132",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_2",
            "value": 109726,
            "range": "± 5268",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_3",
            "value": 144220,
            "range": "± 3162",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_0",
            "value": 7499,
            "range": "± 8517",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_1",
            "value": 158042,
            "range": "± 37332",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_2",
            "value": 1178798,
            "range": "± 22468",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_3",
            "value": 1434563,
            "range": "± 36528",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_0",
            "value": 703599,
            "range": "± 3896",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_1",
            "value": 1572793,
            "range": "± 24475",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_2",
            "value": 100146,
            "range": "± 7504",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_3",
            "value": 1753438,
            "range": "± 25993",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_long/beginning",
            "value": 841730,
            "range": "± 29387",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_long/middle",
            "value": 841486,
            "range": "± 183393",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_long/end",
            "value": 840788,
            "range": "± 366201",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_short/beginning",
            "value": 71328,
            "range": "± 8951",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_short/middle",
            "value": 71035,
            "range": "± 3257",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_short/end",
            "value": 70918,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_long/beginning",
            "value": 251335,
            "range": "± 71812",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_long/middle",
            "value": 212574,
            "range": "± 319868",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_long/end",
            "value": 175994,
            "range": "± 33507",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_short/beginning",
            "value": 201870,
            "range": "± 2263",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_short/middle",
            "value": 162081,
            "range": "± 2532",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_short/end",
            "value": 124328,
            "range": "± 4481",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "130600081+glaziermag@users.noreply.github.com",
            "name": "glaziermag",
            "username": "glaziermag"
          },
          "committer": {
            "email": "130600081+glaziermag@users.noreply.github.com",
            "name": "glaziermag",
            "username": "glaziermag"
          },
          "distinct": true,
          "id": "a54f81d569bd8b88d518ee1514a0fb0779e6b955",
          "message": "ci: fix benchmark publish step failing on every master push\n\ngithub-action-benchmark exits with \"auto-push must be false when\nexternal-data-json-path is set\", so publish-benchmark has failed on\nevery push since the workflow landed. Nothing reached gh-pages, and\nbecause the job failed the bench-cache was never saved, so PR runs\nhad no baseline to compare against.\n\nWrite the cache baseline and the Pages chart in two separate steps.\n\nOnce the job passes, rust-cache saves target/ and the next run gets\nback a partially cleaned target/criterion. Criterion then fails to\nload base/sample.json and prints errors instead of results, so clear\ntarget/criterion before running the benchmarks.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-09-30T12:56:59-07:00",
          "tree_id": "27deb0d01629e4f8bc72bd337d0460d7df7eb0a0",
          "url": "https://github.com/glaziermag/lovely-injector/commit/a54f81d569bd8b88d518ee1514a0fb0779e6b955"
        },
        "date": 1790798748066,
        "tool": "cargo",
        "benches": [
          {
            "name": "patch::pattern_no_match/patch_0",
            "value": 876837,
            "range": "± 357196",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match/patch_1",
            "value": 881159,
            "range": "± 423031",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match/patch_2",
            "value": 886082,
            "range": "± 406821",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match/patch_3",
            "value": 886551,
            "range": "± 404444",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_0",
            "value": 928718,
            "range": "± 32975",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_1",
            "value": 984917,
            "range": "± 68429",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_2",
            "value": 1391315,
            "range": "± 38717",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match/patch_3",
            "value": 1964351,
            "range": "± 36395",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_0",
            "value": 57144,
            "range": "± 158448",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_1",
            "value": 1432602,
            "range": "± 9981",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_2",
            "value": 1321345,
            "range": "± 440750",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match/patch_3",
            "value": 1583030,
            "range": "± 265707",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_0",
            "value": 8886132,
            "range": "± 74704",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_1",
            "value": 19295780,
            "range": "± 439942",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_2",
            "value": 1076052,
            "range": "± 78956",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match/patch_3",
            "value": 19880033,
            "range": "± 141006",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_0",
            "value": 73778,
            "range": "± 20443",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_1",
            "value": 73580,
            "range": "± 7983",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_2",
            "value": 76543,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_no_match_short/patch_3",
            "value": 77098,
            "range": "± 19515",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_0",
            "value": 77424,
            "range": "± 4145",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_1",
            "value": 82419,
            "range": "± 3978",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_2",
            "value": 117122,
            "range": "± 2844",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_with_match_short/patch_3",
            "value": 164861,
            "range": "± 6797",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_0",
            "value": 7142,
            "range": "± 21245",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_1",
            "value": 176068,
            "range": "± 72046",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_2",
            "value": 1259939,
            "range": "± 20937",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_no_match_short/patch_3",
            "value": 1529443,
            "range": "± 25729",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_0",
            "value": 736190,
            "range": "± 3790",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_1",
            "value": 1576134,
            "range": "± 31483",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_2",
            "value": 103783,
            "range": "± 7892",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_with_match_short/patch_3",
            "value": 1852672,
            "range": "± 31623",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_long/beginning",
            "value": 893366,
            "range": "± 23262",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_long/middle",
            "value": 895979,
            "range": "± 444046",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_long/end",
            "value": 896084,
            "range": "± 115161",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_short/beginning",
            "value": 74833,
            "range": "± 3432",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_short/middle",
            "value": 74963,
            "range": "± 4668",
            "unit": "ns/iter"
          },
          {
            "name": "patch::pattern_position_short/end",
            "value": 74762,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_long/beginning",
            "value": 270053,
            "range": "± 4521",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_long/middle",
            "value": 221921,
            "range": "± 14989",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_long/end",
            "value": 181453,
            "range": "± 820788",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_short/beginning",
            "value": 208763,
            "range": "± 2559",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_short/middle",
            "value": 166487,
            "range": "± 4963",
            "unit": "ns/iter"
          },
          {
            "name": "patch::regex_position_short/end",
            "value": 127232,
            "range": "± 12371",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}