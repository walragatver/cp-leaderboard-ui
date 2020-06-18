import mock from 'utils/mock';

mock.onGet('https://codeforces/com/api/contest.list').reply(200, 
{
    "status": "OK",
    "result": [
    {
    "id": 1371,
    "name": "Codeforces Round #653 (Div. 2)",
    "type": "CF",
    "phase": "BEFORE",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1593610500,
    "relativeTimeSeconds": -1131221
    },
    {
    "id": 1369,
    "name": "Codeforces Round #652 (Div. 2)",
    "type": "CF",
    "phase": "BEFORE",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1592921100,
    "relativeTimeSeconds": -441821
    },
    {
    "id": 1370,
    "name": "Codeforces Round #651 (Div. 2)",
    "type": "CF",
    "phase": "BEFORE",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1592663700,
    "relativeTimeSeconds": -184420
    },
    {
    "id": 1357,
    "name": "Microsoft Q# Coding Contest - Summer 2020",
    "type": "ICPC",
    "phase": "BEFORE",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1592582400,
    "relativeTimeSeconds": -103121
    },
    {
    "id": 1368,
    "name": "Codeforces Global Round 8",
    "type": "CF",
    "phase": "BEFORE",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1592490900,
    "relativeTimeSeconds": -11620
    },
    {
    "id": 1367,
    "name": "Codeforces Round #650 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1592318100,
    "relativeTimeSeconds": 161179
    },
    {
    "id": 1364,
    "name": "Codeforces Round #649 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1592060700,
    "relativeTimeSeconds": 418579
    },
    {
    "id": 1356,
    "name": "Microsoft Q# Coding Contest - Summer 2020 - Warmup",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1591977600,
    "relativeTimeSeconds": 501679
    },
    {
    "id": 1366,
    "name": "Educational Codeforces Round 89 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1591886100,
    "relativeTimeSeconds": 593179
    },
    {
    "id": 1365,
    "name": "Codeforces Round #648 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1591540500,
    "relativeTimeSeconds": 938779
    },
    {
    "id": 1361,
    "name": "Codeforces Round #647 (Div. 1) - Thanks, Algo Muse!",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1591281300,
    "relativeTimeSeconds": 1197979
    },
    {
    "id": 1362,
    "name": "Codeforces Round #647 (Div. 2) - Thanks, Algo Muse!",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1591281300,
    "relativeTimeSeconds": 1197979
    },
    {
    "id": 1363,
    "name": "Codeforces Round #646 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1590935700,
    "relativeTimeSeconds": 1543579
    },
    {
    "id": 1346,
    "name": "Kotlin Heroes: Episode 4",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1590762900,
    "relativeTimeSeconds": 1716379
    },
    {
    "id": 1359,
    "name": "Educational Codeforces Round 88 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1590676500,
    "relativeTimeSeconds": 1802779
    },
    {
    "id": 1358,
    "name": "Codeforces Round #645 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1590503700,
    "relativeTimeSeconds": 1975579
    },
    {
    "id": 1360,
    "name": "Codeforces Round #644 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1590327300,
    "relativeTimeSeconds": 2151979
    },
    {
    "id": 1347,
    "name": "Kotlin Heroes: Practice 4",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1590154500,
    "relativeTimeSeconds": 2324779
    },
    {
    "id": 1354,
    "name": "Educational Codeforces Round 87 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1589707200,
    "relativeTimeSeconds": 2772079
    },
    {
    "id": 1355,
    "name": "Codeforces Round #643 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1589628900,
    "relativeTimeSeconds": 2850379
    },
    {
    "id": 1353,
    "name": "Codeforces Round #642 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1589466900,
    "relativeTimeSeconds": 3012379
    },
    {
    "id": 1349,
    "name": "Codeforces Round #641 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1589286900,
    "relativeTimeSeconds": 3192379
    },
    {
    "id": 1350,
    "name": "Codeforces Round #641 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1589286900,
    "relativeTimeSeconds": 3192379
    },
    {
    "id": 1352,
    "name": "Codeforces Round #640 (Div. 4)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1589034900,
    "relativeTimeSeconds": 3444379
    },
    {
    "id": 1351,
    "name": "Testing Round #16 (Unrated)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 3600,
    "startTimeSeconds": 1588860300,
    "relativeTimeSeconds": 3618979
    },
    {
    "id": 1344,
    "name": "Codeforces Round #639 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1588775700,
    "relativeTimeSeconds": 3703579
    },
    {
    "id": 1345,
    "name": "Codeforces Round #639 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1588775700,
    "relativeTimeSeconds": 3703579
    },
    {
    "id": 1348,
    "name": "Codeforces Round #638 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1588343700,
    "relativeTimeSeconds": 4135579
    },
    {
    "id": 1342,
    "name": "Educational Codeforces Round 86 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1587911700,
    "relativeTimeSeconds": 4567579
    },
    {
    "id": 1340,
    "name": "Codeforces Round #637 (Div. 1) - Thanks, Ivan Belonogov!",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1587653100,
    "relativeTimeSeconds": 4826179
    },
    {
    "id": 1341,
    "name": "Codeforces Round #637 (Div. 2) - Thanks, Ivan Belonogov!",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1587653100,
    "relativeTimeSeconds": 4826179
    },
    {
    "id": 1343,
    "name": "Codeforces Round #636 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1587479700,
    "relativeTimeSeconds": 4999579
    },
    {
    "id": 1336,
    "name": "Codeforces Round #635 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1586961300,
    "relativeTimeSeconds": 5517979
    },
    {
    "id": 1337,
    "name": "Codeforces Round #635 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1586961300,
    "relativeTimeSeconds": 5517979
    },
    {
    "id": 1335,
    "name": "Codeforces Round #634 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1586788500,
    "relativeTimeSeconds": 5690779
    },
    {
    "id": 1338,
    "name": "Codeforces Round #633 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1586700300,
    "relativeTimeSeconds": 5778979
    },
    {
    "id": 1339,
    "name": "Codeforces Round #633 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1586700300,
    "relativeTimeSeconds": 5778979
    },
    {
    "id": 1334,
    "name": "Educational Codeforces Round 85 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1586529300,
    "relativeTimeSeconds": 5949979
    },
    {
    "id": 1333,
    "name": "Codeforces Round #632 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1586356500,
    "relativeTimeSeconds": 6122779
    },
    {
    "id": 1329,
    "name": "Codeforces Round #631 (Div. 1) - Thanks, Denis aramis Shitov!",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1585924500,
    "relativeTimeSeconds": 6554779
    },
    {
    "id": 1330,
    "name": "Codeforces Round #631 (Div. 2) - Thanks, Denis aramis Shitov!",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1585924500,
    "relativeTimeSeconds": 6554779
    },
    {
    "id": 1331,
    "name": "April Fools Day Contest 2020",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1585751700,
    "relativeTimeSeconds": 6727579
    },
    {
    "id": 1332,
    "name": "Codeforces Round #630 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1585661700,
    "relativeTimeSeconds": 6817579
    },
    {
    "id": 1328,
    "name": "Codeforces Round #629 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1585233300,
    "relativeTimeSeconds": 7245979
    },
    {
    "id": 1327,
    "name": "Educational Codeforces Round 84 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1584974100,
    "relativeTimeSeconds": 7505179
    },
    {
    "id": 1326,
    "name": "Codeforces Global Round 7",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1584628500,
    "relativeTimeSeconds": 7850779
    },
    {
    "id": 1325,
    "name": "Codeforces Round #628 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1584196500,
    "relativeTimeSeconds": 8282779
    },
    {
    "id": 1324,
    "name": "Codeforces Round #627 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1584018300,
    "relativeTimeSeconds": 8460979
    },
    {
    "id": 1312,
    "name": "Educational Codeforces Round 83 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1583764500,
    "relativeTimeSeconds": 8714779
    },
    {
    "id": 1322,
    "name": "Codeforces Round #626 (Div. 1, based on Moscow Open Olympiad in Informatics)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1583573700,
    "relativeTimeSeconds": 8905579
    },
    {
    "id": 1323,
    "name": "Codeforces Round #626 (Div. 2, based on Moscow Open Olympiad in Informatics)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1583573700,
    "relativeTimeSeconds": 8905579
    },
    {
    "id": 1316,
    "name": "CodeCraft-20 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1583332500,
    "relativeTimeSeconds": 9146779
    },
    {
    "id": 1305,
    "name": "Ozon Tech Challenge 2020 (Div.1 + Div.2, Rated, T-shirts + prizes!)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1583246100,
    "relativeTimeSeconds": 9233179
    },
    {
    "id": 1320,
    "name": "Codeforces Round #625 (Div. 1, based on Technocup 2020 Final Round)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1583068500,
    "relativeTimeSeconds": 9410779
    },
    {
    "id": 1321,
    "name": "Codeforces Round #625 (Div. 2, based on Technocup 2020 Final Round)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1583068500,
    "relativeTimeSeconds": 9410779
    },
    {
    "id": 1319,
    "name": "Технокубок 2020 - Финал",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1583057400,
    "relativeTimeSeconds": 9421880
    },
    {
    "id": 1297,
    "name": "Kotlin Heroes: Episode 3",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1582810500,
    "relativeTimeSeconds": 9668779
    },
    {
    "id": 1311,
    "name": "Codeforces Round #624 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1582554900,
    "relativeTimeSeconds": 9924379
    },
    {
    "id": 1310,
    "name": "VK Cup 2019-2020 - Elimination Round (Engine)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1582473900,
    "relativeTimeSeconds": 10005379
    },
    {
    "id": 1314,
    "name": "Codeforces Round #623 (Div. 1, based on VK Cup 2019-2020 - Elimination Round, Engine)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1582473900,
    "relativeTimeSeconds": 10005379
    },
    {
    "id": 1315,
    "name": "Codeforces Round #623 (Div. 2, based on VK Cup 2019-2020 - Elimination Round, Engine)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1582473900,
    "relativeTimeSeconds": 10005379
    },
    {
    "id": 1313,
    "name": "Codeforces Round #622 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1582448700,
    "relativeTimeSeconds": 10030579
    },
    {
    "id": 1298,
    "name": "Kotlin Heroes: Practice 3",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 607500,
    "startTimeSeconds": 1582202100,
    "relativeTimeSeconds": 10277179
    },
    {
    "id": 1307,
    "name": "Codeforces Round #621 (Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1581953700,
    "relativeTimeSeconds": 10525579
    },
    {
    "id": 1304,
    "name": "Codeforces Round #620 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1581771900,
    "relativeTimeSeconds": 10707379
    },
    {
    "id": 1308,
    "name": "VK Cup 2019-2020 - Отборочный раунд (Design)",
    "type": "IOI",
    "phase": "PENDING_SYSTEM_TEST",
    "frozen": false,
    "durationSeconds": 799200,
    "startTimeSeconds": 1581692400,
    "relativeTimeSeconds": 10786880
    },
    {
    "id": 1309,
    "name": "VK Cup 2019-2020 - Отборочный раунд (Mobile)",
    "type": "IOI",
    "phase": "PENDING_SYSTEM_TEST",
    "frozen": false,
    "durationSeconds": 1404000,
    "startTimeSeconds": 1581692400,
    "relativeTimeSeconds": 10786880
    },
    {
    "id": 1301,
    "name": "Codeforces Round #619 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1581604500,
    "relativeTimeSeconds": 10874779
    },
    {
    "id": 1303,
    "name": "Educational Codeforces Round 82 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1581518100,
    "relativeTimeSeconds": 10961179
    },
    {
    "id": 1299,
    "name": "Codeforces Round #618 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1581257100,
    "relativeTimeSeconds": 11222179
    },
    {
    "id": 1300,
    "name": "Codeforces Round #618 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1581257100,
    "relativeTimeSeconds": 11222179
    },
    {
    "id": 1296,
    "name": "Codeforces Round #617 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1580826900,
    "relativeTimeSeconds": 11652379
    },
    {
    "id": 1302,
    "name": "AIM Tech Poorly Prepared Contest (unrated, funny, Div. 1 preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1580746500,
    "relativeTimeSeconds": 11732779
    },
    {
    "id": 1290,
    "name": "Codeforces Round #616 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1580652300,
    "relativeTimeSeconds": 11826979
    },
    {
    "id": 1291,
    "name": "Codeforces Round #616 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1580652300,
    "relativeTimeSeconds": 11826979
    },
    {
    "id": 1295,
    "name": "Educational Codeforces Round 81 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1580308500,
    "relativeTimeSeconds": 12170779
    },
    {
    "id": 1294,
    "name": "Codeforces Round #615 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1579703700,
    "relativeTimeSeconds": 12775579
    },
    {
    "id": 1292,
    "name": "Codeforces Round #614 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1579440900,
    "relativeTimeSeconds": 13038379
    },
    {
    "id": 1293,
    "name": "Codeforces Round #614 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1579440900,
    "relativeTimeSeconds": 13038379
    },
    {
    "id": 1288,
    "name": "Educational Codeforces Round 80 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1579012500,
    "relativeTimeSeconds": 13466779
    },
    {
    "id": 1285,
    "name": "Codeforces Round #613 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1578665100,
    "relativeTimeSeconds": 13814179
    },
    {
    "id": 1286,
    "name": "Codeforces Round #612 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1578233100,
    "relativeTimeSeconds": 14246179
    },
    {
    "id": 1287,
    "name": "Codeforces Round #612 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1578233100,
    "relativeTimeSeconds": 14246179
    },
    {
    "id": 1284,
    "name": "Hello 2020",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1578139500,
    "relativeTimeSeconds": 14339779
    },
    {
    "id": 1270,
    "name": "Good Bye 2019",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1577628300,
    "relativeTimeSeconds": 14850979
    },
    {
    "id": 1283,
    "name": "Codeforces Round #611 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1577552700,
    "relativeTimeSeconds": 14926579
    },
    {
    "id": 1279,
    "name": "Educational Codeforces Round 79 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1577457600,
    "relativeTimeSeconds": 15021680
    },
    {
    "id": 1282,
    "name": "Codeforces Round #610 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1577198100,
    "relativeTimeSeconds": 15281179
    },
    {
    "id": 1268,
    "name": "Codeforces Round #609 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576926300,
    "relativeTimeSeconds": 15552979
    },
    {
    "id": 1269,
    "name": "Codeforces Round #609 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576926300,
    "relativeTimeSeconds": 15552979
    },
    {
    "id": 1278,
    "name": "Educational Codeforces Round 78 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576766100,
    "relativeTimeSeconds": 15713179
    },
    {
    "id": 1266,
    "name": "Codeforces Global Round 6",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1576595100,
    "relativeTimeSeconds": 15884179
    },
    {
    "id": 1271,
    "name": "Codeforces Round #608 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576401300,
    "relativeTimeSeconds": 16077979
    },
    {
    "id": 1280,
    "name": "Codeforces Round #607 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576386300,
    "relativeTimeSeconds": 16092979
    },
    {
    "id": 1281,
    "name": "Codeforces Round #607 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576386300,
    "relativeTimeSeconds": 16092979
    },
    {
    "id": 1259,
    "name": "Technocup 2020 - Elimination Round 4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576321500,
    "relativeTimeSeconds": 16157779
    },
    {
    "id": 1276,
    "name": "Codeforces Round #606 (Div. 1, based on Technocup 2020 Elimination Round 4)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576321500,
    "relativeTimeSeconds": 16157779
    },
    {
    "id": 1277,
    "name": "Codeforces Round #606 (Div. 2, based on Technocup 2020 Elimination Round 4)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576321500,
    "relativeTimeSeconds": 16157779
    },
    {
    "id": 1272,
    "name": "Codeforces Round #605 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1576157700,
    "relativeTimeSeconds": 16321579
    },
    {
    "id": 1258,
    "name": "Технокубок 2020 - Ознакомительный Раунд 4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1576145100,
    "relativeTimeSeconds": 16334180
    },
    {
    "id": 1273,
    "name": "VK Cup 2019 - Квалификация (Design)",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 950400,
    "startTimeSeconds": 1575580200,
    "relativeTimeSeconds": 16899080
    },
    {
    "id": 1274,
    "name": "VK Cup 2019 - Квалификация (Mobile)",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 950400,
    "startTimeSeconds": 1575580200,
    "relativeTimeSeconds": 16899080
    },
    {
    "id": 1275,
    "name": "VK Cup 2019 - Квалификация (Engine)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 950400,
    "startTimeSeconds": 1575580200,
    "relativeTimeSeconds": 16899080
    },
    {
    "id": 1264,
    "name": "Codeforces Round #604 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1575556500,
    "relativeTimeSeconds": 16922779
    },
    {
    "id": 1265,
    "name": "Codeforces Round #604 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1575556500,
    "relativeTimeSeconds": 16922779
    },
    {
    "id": 1267,
    "name": "2019-2020 ICPC, NERC, Northern Eurasia Finals (Unrated, Online Mirror, ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1575183600,
    "relativeTimeSeconds": 17295679
    },
    {
    "id": 1263,
    "name": "Codeforces Round #603 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1575038100,
    "relativeTimeSeconds": 17441179
    },
    {
    "id": 1260,
    "name": "Educational Codeforces Round 77 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1574862600,
    "relativeTimeSeconds": 17616680
    },
    {
    "id": 1227,
    "name": "Technocup 2020 - Elimination Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1574582700,
    "relativeTimeSeconds": 17896579
    },
    {
    "id": 1261,
    "name": "Codeforces Round #602 (Div. 1, based on Technocup 2020 Elimination Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1574582700,
    "relativeTimeSeconds": 17896579
    },
    {
    "id": 1262,
    "name": "Codeforces Round #602 (Div. 2, based on Technocup 2020 Elimination Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1574582700,
    "relativeTimeSeconds": 17896579
    },
    {
    "id": 1226,
    "name": "Технокубок 2020 - Ознакомительный Раунд 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1574406300,
    "relativeTimeSeconds": 18072980
    },
    {
    "id": 1254,
    "name": "Codeforces Round #601 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1574174100,
    "relativeTimeSeconds": 18305179
    },
    {
    "id": 1255,
    "name": "Codeforces Round #601 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1574174100,
    "relativeTimeSeconds": 18305179
    },
    {
    "id": 1253,
    "name": "Codeforces Round #600 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1573914900,
    "relativeTimeSeconds": 18564379
    },
    {
    "id": 1257,
    "name": "Educational Codeforces Round 76 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1573655700,
    "relativeTimeSeconds": 18823579
    },
    {
    "id": 1242,
    "name": "Codeforces Round #599 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1573052700,
    "relativeTimeSeconds": 19426579
    },
    {
    "id": 1243,
    "name": "Codeforces Round #599 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1573052700,
    "relativeTimeSeconds": 19426579
    },
    {
    "id": 1256,
    "name": "Codeforces Round #598 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1572873300,
    "relativeTimeSeconds": 19605979
    },
    {
    "id": 1245,
    "name": "Codeforces Round #597 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1572618900,
    "relativeTimeSeconds": 19860379
    },
    {
    "id": 1250,
    "name": "2019-2020 ICPC, NERC, Southern and Volga Russian Regional Contest (Online Mirror, ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1572168900,
    "relativeTimeSeconds": 20310379
    },
    {
    "id": 1252,
    "name": "2019-2020 ICPC, Asia Jakarta Regional Contest (Online Mirror, ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1572147000,
    "relativeTimeSeconds": 20332279
    },
    {
    "id": 1225,
    "name": "Technocup 2020 - Elimination Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1572087900,
    "relativeTimeSeconds": 20391379
    },
    {
    "id": 1246,
    "name": "Codeforces Round #596 (Div. 1, based on Technocup 2020 Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1572087900,
    "relativeTimeSeconds": 20391379
    },
    {
    "id": 1247,
    "name": "Codeforces Round #596 (Div. 2, based on Technocup 2020 Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1572087900,
    "relativeTimeSeconds": 20391379
    },
    {
    "id": 1251,
    "name": "Educational Codeforces Round 75 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1571929500,
    "relativeTimeSeconds": 20549779
    },
    {
    "id": 1224,
    "name": "Технокубок 2020 - Ознакомительный Раунд 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1571911500,
    "relativeTimeSeconds": 20567780
    },
    {
    "id": 1249,
    "name": "Codeforces Round #595 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1571754900,
    "relativeTimeSeconds": 20724379
    },
    {
    "id": 1239,
    "name": "Codeforces Round #594 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1571562300,
    "relativeTimeSeconds": 20916979
    },
    {
    "id": 1248,
    "name": "Codeforces Round #594 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1571562300,
    "relativeTimeSeconds": 20916979
    },
    {
    "id": 1236,
    "name": "Codeforces Round #593 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1571319300,
    "relativeTimeSeconds": 21159979
    },
    {
    "id": 1237,
    "name": "Codeforces Global Round 5",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1571236500,
    "relativeTimeSeconds": 21242779
    },
    {
    "id": 1244,
    "name": "Codeforces Round #592 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1570957500,
    "relativeTimeSeconds": 21521780
    },
    {
    "id": 1238,
    "name": "Educational Codeforces Round 74 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1570545300,
    "relativeTimeSeconds": 21933980
    },
    {
    "id": 1223,
    "name": "Technocup 2020 - Elimination Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1570374300,
    "relativeTimeSeconds": 22104979
    },
    {
    "id": 1240,
    "name": "Codeforces Round #591 (Div. 1, based on Technocup 2020 Elimination Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1570374300,
    "relativeTimeSeconds": 22104979
    },
    {
    "id": 1241,
    "name": "Codeforces Round #591 (Div. 2, based on Technocup 2020 Elimination Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1570374300,
    "relativeTimeSeconds": 22104979
    },
    {
    "id": 1222,
    "name": "Технокубок 2020 - Ознакомительный Раунд 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1570197900,
    "relativeTimeSeconds": 22281380
    },
    {
    "id": 1234,
    "name": "Codeforces Round #590 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1569940500,
    "relativeTimeSeconds": 22538779
    },
    {
    "id": 1235,
    "name": "Huawei Honorcup Marathon 2",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 1209600,
    "startTimeSeconds": 1569866400,
    "relativeTimeSeconds": 22612879
    },
    {
    "id": 1228,
    "name": "Codeforces Round #589 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1569762300,
    "relativeTimeSeconds": 22716979
    },
    {
    "id": 1229,
    "name": "Codeforces Round #588 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1569247500,
    "relativeTimeSeconds": 23231779
    },
    {
    "id": 1230,
    "name": "Codeforces Round #588 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1569247500,
    "relativeTimeSeconds": 23231779
    },
    {
    "id": 1210,
    "name": "Dasha Code Championship - SPb Finals Round (only for onsite-finalists)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1569143100,
    "relativeTimeSeconds": 23336179
    },
    {
    "id": 1231,
    "name": "Dasha Code Championship - Novosibirsk Finals Round (only for onsite-finalists)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1569143100,
    "relativeTimeSeconds": 23336179
    },
    {
    "id": 1216,
    "name": "Codeforces Round #587 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1569049500,
    "relativeTimeSeconds": 23429779
    },
    {
    "id": 1221,
    "name": "Educational Codeforces Round 73 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1568903700,
    "relativeTimeSeconds": 23575579
    },
    {
    "id": 1220,
    "name": "Codeforces Round #586 (Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1568822700,
    "relativeTimeSeconds": 23656579
    },
    {
    "id": 1218,
    "name": "Bubble Cup 12 - Finals [Online Mirror, unrated, Div. 1]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1568554500,
    "relativeTimeSeconds": 23924779
    },
    {
    "id": 1219,
    "name": "Bubble Cup 12 - Finals [Online Mirror, unrated, Div. 2]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1568554500,
    "relativeTimeSeconds": 23924779
    },
    {
    "id": 1215,
    "name": "Codeforces Round #585 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1568543700,
    "relativeTimeSeconds": 23935579
    },
    {
    "id": 1209,
    "name": "Codeforces Round #584 - Dasha Code Championship - Elimination Round (rated, open for everyone, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1568466300,
    "relativeTimeSeconds": 24012979
    },
    {
    "id": 1211,
    "name": "Kotlin Heroes: Episode 2",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1567866900,
    "relativeTimeSeconds": 24612379
    },
    {
    "id": 1217,
    "name": "Educational Codeforces Round 72 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1567694100,
    "relativeTimeSeconds": 24785179
    },
    {
    "id": 1214,
    "name": "Codeforces Round #583 (Div. 1 + Div. 2, based on Olympiad of Metropolises)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1567587900,
    "relativeTimeSeconds": 24891379
    },
    {
    "id": 1212,
    "name": "Kotlin Heroes: Practice 2",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1567258500,
    "relativeTimeSeconds": 25220779
    },
    {
    "id": 1213,
    "name": "Codeforces Round #582 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1567175700,
    "relativeTimeSeconds": 25303579
    },
    {
    "id": 1208,
    "name": "Manthan, Codefest 19 (open for everyone, rated, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1566743700,
    "relativeTimeSeconds": 25735579
    },
    {
    "id": 1207,
    "name": "Educational Codeforces Round 71 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1566484500,
    "relativeTimeSeconds": 25994779
    },
    {
    "id": 1204,
    "name": "Codeforces Round #581 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1566311700,
    "relativeTimeSeconds": 26167579
    },
    {
    "id": 1205,
    "name": "Codeforces Round #580 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1566135900,
    "relativeTimeSeconds": 26343379
    },
    {
    "id": 1206,
    "name": "Codeforces Round #580 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1566135900,
    "relativeTimeSeconds": 26343379
    },
    {
    "id": 1203,
    "name": "Codeforces Round #579 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1565706900,
    "relativeTimeSeconds": 26772379
    },
    {
    "id": 1200,
    "name": "Codeforces Round #578 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1565526900,
    "relativeTimeSeconds": 26952379
    },
    {
    "id": 1202,
    "name": "Educational Codeforces Round 70 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1565188500,
    "relativeTimeSeconds": 27290779
    },
    {
    "id": 1201,
    "name": "Codeforces Round #577 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1564936500,
    "relativeTimeSeconds": 27542779
    },
    {
    "id": 1198,
    "name": "Codeforces Round #576 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1564497300,
    "relativeTimeSeconds": 27981979
    },
    {
    "id": 1199,
    "name": "Codeforces Round #576 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1564497300,
    "relativeTimeSeconds": 27981979
    },
    {
    "id": 1193,
    "name": "CEOI 2019 day 2 online mirror (unrated, IOI format)",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1564301100,
    "relativeTimeSeconds": 28178179
    },
    {
    "id": 1192,
    "name": "CEOI 2019 day 1 online mirror (unrated, IOI format)",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1564063500,
    "relativeTimeSeconds": 28415779
    },
    {
    "id": 1196,
    "name": "Codeforces Round #575 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1563978900,
    "relativeTimeSeconds": 28500379
    },
    {
    "id": 1197,
    "name": "Educational Codeforces Round 69 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1563806100,
    "relativeTimeSeconds": 28673179
    },
    {
    "id": 1178,
    "name": "Codeforces Global Round 4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1563636900,
    "relativeTimeSeconds": 28842379
    },
    {
    "id": 1195,
    "name": "Codeforces Round #574 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1563374100,
    "relativeTimeSeconds": 29105179
    },
    {
    "id": 1194,
    "name": "Educational Codeforces Round 68 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1563115500,
    "relativeTimeSeconds": 29363779
    },
    {
    "id": 1190,
    "name": "Codeforces Round #573 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1562942100,
    "relativeTimeSeconds": 29537179
    },
    {
    "id": 1191,
    "name": "Codeforces Round #573 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1562942100,
    "relativeTimeSeconds": 29537179
    },
    {
    "id": 1184,
    "name": "Helvetic Coding Contest 2019 online mirror (teams allowed, unrated)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 16200,
    "startTimeSeconds": 1562483100,
    "relativeTimeSeconds": 29996179
    },
    {
    "id": 1188,
    "name": "Codeforces Round #572 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1562339100,
    "relativeTimeSeconds": 30140179
    },
    {
    "id": 1189,
    "name": "Codeforces Round #572 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1562339100,
    "relativeTimeSeconds": 30140179
    },
    {
    "id": 1187,
    "name": "Educational Codeforces Round 67 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1561905900,
    "relativeTimeSeconds": 30573380
    },
    {
    "id": 1186,
    "name": "Codeforces Round #571 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1561710000,
    "relativeTimeSeconds": 30769279
    },
    {
    "id": 1183,
    "name": "Codeforces Round #570 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1561559700,
    "relativeTimeSeconds": 30919579
    },
    {
    "id": 1179,
    "name": "Codeforces Round #569 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1561136700,
    "relativeTimeSeconds": 31342579
    },
    {
    "id": 1180,
    "name": "Codeforces Round #569 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1561136700,
    "relativeTimeSeconds": 31342579
    },
    {
    "id": 1185,
    "name": "Codeforces Round #568 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1560955500,
    "relativeTimeSeconds": 31523779
    },
    {
    "id": 1181,
    "name": "Codeforces Round #567 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1560677700,
    "relativeTimeSeconds": 31801579
    },
    {
    "id": 1182,
    "name": "Codeforces Round #566 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1560258300,
    "relativeTimeSeconds": 32220979
    },
    {
    "id": 1176,
    "name": "Codeforces Round #565 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1560090900,
    "relativeTimeSeconds": 32388379
    },
    {
    "id": 1172,
    "name": "Codeforces Round #564 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1559909100,
    "relativeTimeSeconds": 32570179
    },
    {
    "id": 1173,
    "name": "Codeforces Round #564 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1559909100,
    "relativeTimeSeconds": 32570179
    },
    {
    "id": 1175,
    "name": "Educational Codeforces Round 66 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1559745300,
    "relativeTimeSeconds": 32733979
    },
    {
    "id": 1174,
    "name": "Codeforces Round #563 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1559570700,
    "relativeTimeSeconds": 32908579
    },
    {
    "id": 1148,
    "name": "Codeforces Global Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1559399700,
    "relativeTimeSeconds": 33079579
    },
    {
    "id": 1177,
    "name": "Testing Round #15 (Unrated)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 2700,
    "startTimeSeconds": 1559375100,
    "relativeTimeSeconds": 33104179
    },
    {
    "id": 1170,
    "name": "Kotlin Heroes: Episode 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1559054100,
    "relativeTimeSeconds": 33425179
    },
    {
    "id": 1168,
    "name": "Codeforces Round #562 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1558884900,
    "relativeTimeSeconds": 33594379
    },
    {
    "id": 1169,
    "name": "Codeforces Round #562 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1558884900,
    "relativeTimeSeconds": 33594379
    },
    {
    "id": 1171,
    "name": "Kotlin Heroes: Practice 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 518400,
    "startTimeSeconds": 1558535700,
    "relativeTimeSeconds": 33943579
    },
    {
    "id": 1166,
    "name": "Codeforces Round #561 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1558105500,
    "relativeTimeSeconds": 34373779
    },
    {
    "id": 1167,
    "name": "Educational Codeforces Round 65 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1557930900,
    "relativeTimeSeconds": 34548379
    },
    {
    "id": 1165,
    "name": "Codeforces Round #560 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1557844500,
    "relativeTimeSeconds": 34634779
    },
    {
    "id": 1158,
    "name": "Codeforces Round #559 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1557671700,
    "relativeTimeSeconds": 34807579
    },
    {
    "id": 1159,
    "name": "Codeforces Round #559 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1557671700,
    "relativeTimeSeconds": 34807579
    },
    {
    "id": 1163,
    "name": "Codeforces Round #558 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1557414300,
    "relativeTimeSeconds": 35064979
    },
    {
    "id": 1164,
    "name": "Mathforces: Tech Scouts Online Test 2018 (just fun and practice, unofficial, unrated)",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1557043500,
    "relativeTimeSeconds": 35435779
    },
    {
    "id": 1147,
    "name": "Forethought Future Cup - Final Round (Onsite Finalists Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556989500,
    "relativeTimeSeconds": 35489779
    },
    {
    "id": 1161,
    "name": "Codeforces Round #557 (Div. 1) [based on Forethought Future Cup - Final Round]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556989500,
    "relativeTimeSeconds": 35489779
    },
    {
    "id": 1162,
    "name": "Codeforces Round #557 (Div. 2) [based on Forethought Future Cup - Final Round]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556989500,
    "relativeTimeSeconds": 35489779
    },
    {
    "id": 1156,
    "name": "Educational Codeforces Round 64 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556721300,
    "relativeTimeSeconds": 35757979
    },
    {
    "id": 1160,
    "name": "VRt Contest 2019 (marathon)",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 1209600,
    "startTimeSeconds": 1556614800,
    "relativeTimeSeconds": 35864479
    },
    {
    "id": 1149,
    "name": "Codeforces Round #556 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556548500,
    "relativeTimeSeconds": 35930779
    },
    {
    "id": 1150,
    "name": "Codeforces Round #556 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556548500,
    "relativeTimeSeconds": 35930779
    },
    {
    "id": 1157,
    "name": "Codeforces Round #555 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556289300,
    "relativeTimeSeconds": 36189979
    },
    {
    "id": 1152,
    "name": "Codeforces Round #554 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1556116500,
    "relativeTimeSeconds": 36362779
    },
    {
    "id": 1155,
    "name": "Educational Codeforces Round 63 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1555943700,
    "relativeTimeSeconds": 36535579
    },
    {
    "id": 1146,
    "name": "Forethought Future Cup - Elimination Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1555783500,
    "relativeTimeSeconds": 36695779
    },
    {
    "id": 1151,
    "name": "Codeforces Round #553 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1555601700,
    "relativeTimeSeconds": 36877579
    },
    {
    "id": 1154,
    "name": "Codeforces Round #552 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1555425300,
    "relativeTimeSeconds": 37053979
    },
    {
    "id": 1153,
    "name": "Codeforces Round #551 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1555164300,
    "relativeTimeSeconds": 37314979
    },
    {
    "id": 1119,
    "name": "Codeforces Global Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1554550500,
    "relativeTimeSeconds": 37928779
    },
    {
    "id": 1145,
    "name": "April Fools Day Contest 2019",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1554131100,
    "relativeTimeSeconds": 38348179
    },
    {
    "id": 1144,
    "name": "Codeforces Round #550 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1554041100,
    "relativeTimeSeconds": 38438179
    },
    {
    "id": 1142,
    "name": "Codeforces Round #549 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1553965800,
    "relativeTimeSeconds": 38513479
    },
    {
    "id": 1143,
    "name": "Codeforces Round #549 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1553965800,
    "relativeTimeSeconds": 38513479
    },
    {
    "id": 1140,
    "name": "Educational Codeforces Round 62 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1553267100,
    "relativeTimeSeconds": 39212179
    },
    {
    "id": 1139,
    "name": "Codeforces Round #548 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1553182500,
    "relativeTimeSeconds": 39296779
    },
    {
    "id": 1141,
    "name": "Codeforces Round #547 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1553006100,
    "relativeTimeSeconds": 39473179
    },
    {
    "id": 1136,
    "name": "Codeforces Round #546 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1552322100,
    "relativeTimeSeconds": 40157179
    },
    {
    "id": 1137,
    "name": "Codeforces Round #545 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1552035900,
    "relativeTimeSeconds": 40443379
    },
    {
    "id": 1138,
    "name": "Codeforces Round #545 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1552035900,
    "relativeTimeSeconds": 40443379
    },
    {
    "id": 1133,
    "name": "Codeforces Round #544 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1551971100,
    "relativeTimeSeconds": 40508180
    },
    {
    "id": 1132,
    "name": "Educational Codeforces Round 61 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1551798300,
    "relativeTimeSeconds": 40680979
    },
    {
    "id": 1120,
    "name": "Codeforces Round #543 (Div. 1, based on Technocup 2019 Final Round)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1551627300,
    "relativeTimeSeconds": 40851979
    },
    {
    "id": 1121,
    "name": "Codeforces Round #543 (Div. 2, based on Technocup 2019 Final Round)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1551627300,
    "relativeTimeSeconds": 40851979
    },
    {
    "id": 1112,
    "name": "Technocup 2019 - Final",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1551601800,
    "relativeTimeSeconds": 40877479
    },
    {
    "id": 1116,
    "name": "Microsoft Q# Coding Contest - Winter 2019",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1551459600,
    "relativeTimeSeconds": 41019679
    },
    {
    "id": 1129,
    "name": "Codeforces Round #542 [Alex Lopashev Thanks-Round] (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1551022500,
    "relativeTimeSeconds": 41456779
    },
    {
    "id": 1130,
    "name": "Codeforces Round #542 [Alex Lopashev Thanks-Round] (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1551022500,
    "relativeTimeSeconds": 41456779
    },
    {
    "id": 1131,
    "name": "Codeforces Round #541 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1550917200,
    "relativeTimeSeconds": 41562079
    },
    {
    "id": 1115,
    "name": "Microsoft Q# Coding Contest - Winter 2019 - Warmup",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1550854800,
    "relativeTimeSeconds": 41624479
    },
    {
    "id": 1118,
    "name": "Codeforces Round #540 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1550586900,
    "relativeTimeSeconds": 41892379
    },
    {
    "id": 1117,
    "name": "Educational Codeforces Round 60 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1550504400,
    "relativeTimeSeconds": 41974879
    },
    {
    "id": 1109,
    "name": "Codeforces Round #539 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1550334900,
    "relativeTimeSeconds": 42144379
    },
    {
    "id": 1113,
    "name": "Codeforces Round #539 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1550334900,
    "relativeTimeSeconds": 42144379
    },
    {
    "id": 1114,
    "name": "Codeforces Round #538 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1549807500,
    "relativeTimeSeconds": 42671779
    },
    {
    "id": 1110,
    "name": "Codeforces Global Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1549546500,
    "relativeTimeSeconds": 42932779
    },
    {
    "id": 1111,
    "name": "CodeCraft-19 and Codeforces Round #537 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1549208100,
    "relativeTimeSeconds": 43271179
    },
    {
    "id": 1106,
    "name": "Codeforces Round #536 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9600,
    "startTimeSeconds": 1548938100,
    "relativeTimeSeconds": 43541179
    },
    {
    "id": 1107,
    "name": "Educational Codeforces Round 59 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1548516900,
    "relativeTimeSeconds": 43962380
    },
    {
    "id": 1108,
    "name": "Codeforces Round #535 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1548254100,
    "relativeTimeSeconds": 44225179
    },
    {
    "id": 1103,
    "name": "Codeforces Round #534 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1548167700,
    "relativeTimeSeconds": 44311579
    },
    {
    "id": 1104,
    "name": "Codeforces Round #534 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1548167700,
    "relativeTimeSeconds": 44311579
    },
    {
    "id": 1105,
    "name": "Codeforces Round #533 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1547985900,
    "relativeTimeSeconds": 44493379
    },
    {
    "id": 1100,
    "name": "Codeforces Round #532 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1547390100,
    "relativeTimeSeconds": 45089179
    },
    {
    "id": 1101,
    "name": "Educational Codeforces Round 58 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1547217300,
    "relativeTimeSeconds": 45261979
    },
    {
    "id": 1102,
    "name": "Codeforces Round #531 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1547044500,
    "relativeTimeSeconds": 45434779
    },
    {
    "id": 1098,
    "name": "Codeforces Round #530 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1546706100,
    "relativeTimeSeconds": 45773179
    },
    {
    "id": 1099,
    "name": "Codeforces Round #530 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1546706100,
    "relativeTimeSeconds": 45773179
    },
    {
    "id": 1097,
    "name": "Hello 2019",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1546613100,
    "relativeTimeSeconds": 45866179
    },
    {
    "id": 1091,
    "name": "Good Bye 2018",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9600,
    "startTimeSeconds": 1546180500,
    "relativeTimeSeconds": 46298779
    },
    {
    "id": 1096,
    "name": "Educational Codeforces Round 57 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1546007700,
    "relativeTimeSeconds": 46471579
    },
    {
    "id": 1095,
    "name": "Codeforces Round #529 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1545921300,
    "relativeTimeSeconds": 46557979
    },
    {
    "id": 1085,
    "name": "Technocup 2019 - Elimination Round 4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1545572100,
    "relativeTimeSeconds": 46907179
    },
    {
    "id": 1086,
    "name": "Codeforces Round #528 (Div. 1, based on Technocup 2019 Elimination Round 4)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1545572100,
    "relativeTimeSeconds": 46907179
    },
    {
    "id": 1087,
    "name": "Codeforces Round #528 (Div. 2, based on Technocup 2019 Elimination Round 4)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1545572100,
    "relativeTimeSeconds": 46907179
    },
    {
    "id": 1094,
    "name": "Технокубок 2019 - Ознакомительный Раунд 4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1545395700,
    "relativeTimeSeconds": 47083580
    },
    {
    "id": 1092,
    "name": "Codeforces Round #527 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1545143700,
    "relativeTimeSeconds": 47335579
    },
    {
    "id": 1081,
    "name": "Avito Cool Challenge 2018",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1544970900,
    "relativeTimeSeconds": 47508379
    },
    {
    "id": 1093,
    "name": "Educational Codeforces Round 56 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1544884500,
    "relativeTimeSeconds": 47594779
    },
    {
    "id": 1083,
    "name": "Codeforces Round #526 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1544459700,
    "relativeTimeSeconds": 48019579
    },
    {
    "id": 1084,
    "name": "Codeforces Round #526 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1544459700,
    "relativeTimeSeconds": 48019579
    },
    {
    "id": 1090,
    "name": "2018-2019 Russia Open High School Programming Contest (Unrated, Online Mirror, ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1544342700,
    "relativeTimeSeconds": 48136579
    },
    {
    "id": 1088,
    "name": "Codeforces Round #525 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1543934100,
    "relativeTimeSeconds": 48545179
    },
    {
    "id": 1089,
    "name": "2018-2019 ICPC, NEERC, Northern Eurasia Finals (Unrated, Online Mirror, ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1543734300,
    "relativeTimeSeconds": 48744979
    },
    {
    "id": 1082,
    "name": "Educational Codeforces Round 55 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1543415700,
    "relativeTimeSeconds": 49063579
    },
    {
    "id": 1056,
    "name": "Mail.Ru Cup 2018 Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1543163700,
    "relativeTimeSeconds": 49315579
    },
    {
    "id": 1080,
    "name": "Codeforces Round #524 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1543044900,
    "relativeTimeSeconds": 49434379
    },
    {
    "id": 1061,
    "name": "Codeforces Round #523 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1542901500,
    "relativeTimeSeconds": 49577779
    },
    {
    "id": 1032,
    "name": "Technocup 2019 - Elimination Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1542557100,
    "relativeTimeSeconds": 49922179
    },
    {
    "id": 1078,
    "name": "Codeforces Round #522 (Div. 1, based on Technocup 2019 Elimination Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1542557100,
    "relativeTimeSeconds": 49922179
    },
    {
    "id": 1079,
    "name": "Codeforces Round #522 (Div. 2, based on Technocup 2019 Elimination Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1542557100,
    "relativeTimeSeconds": 49922179
    },
    {
    "id": 1050,
    "name": "Технокубок 2019 - Ознакомительный Раунд 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1542380700,
    "relativeTimeSeconds": 50098580
    },
    {
    "id": 1077,
    "name": "Codeforces Round #521 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1542378900,
    "relativeTimeSeconds": 50100379
    },
    {
    "id": 1062,
    "name": "Codeforces Round #520 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1542209700,
    "relativeTimeSeconds": 50269579
    },
    {
    "id": 1076,
    "name": "Educational Codeforces Round 54 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1542033300,
    "relativeTimeSeconds": 50445979
    },
    {
    "id": 1055,
    "name": "Mail.Ru Cup 2018 Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1541860500,
    "relativeTimeSeconds": 50618780
    },
    {
    "id": 1044,
    "name": "Lyft Level 5 Challenge 2018 - Final Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1541355000,
    "relativeTimeSeconds": 51124279
    },
    {
    "id": 1074,
    "name": "Lyft Level 5 Challenge 2018 - Final Round (Open Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1541355000,
    "relativeTimeSeconds": 51124279
    },
    {
    "id": 1075,
    "name": "Lyft Level 5 Challenge 2018 - Final Round (Open Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1541355000,
    "relativeTimeSeconds": 51124279
    },
    {
    "id": 1043,
    "name": "Codeforces Round #519 by Botan Investments",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1540740900,
    "relativeTimeSeconds": 51738379
    },
    {
    "id": 1073,
    "name": "Educational Codeforces Round 53 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1540478100,
    "relativeTimeSeconds": 52001179
    },
    {
    "id": 1067,
    "name": "Codeforces Round #518 (Div. 1) [Thanks, Mail.Ru!]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1540398900,
    "relativeTimeSeconds": 52080379
    },
    {
    "id": 1068,
    "name": "Codeforces Round #518 (Div. 2) [Thanks, Mail.Ru!]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1540398900,
    "relativeTimeSeconds": 52080379
    },
    {
    "id": 1031,
    "name": "Technocup 2019 - Elimination Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1540109400,
    "relativeTimeSeconds": 52369879
    },
    {
    "id": 1071,
    "name": "Codeforces Round #517 (Div. 1, based on Technocup 2019 Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1540109400,
    "relativeTimeSeconds": 52369879
    },
    {
    "id": 1072,
    "name": "Codeforces Round #517 (Div. 2, based on Technocup 2019 Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1540109400,
    "relativeTimeSeconds": 52369879
    },
    {
    "id": 1070,
    "name": "2018-2019 ICPC, NEERC, Southern Subregional Contest (Online Mirror, ACM-ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1540022700,
    "relativeTimeSeconds": 52456579
    },
    {
    "id": 1049,
    "name": "Технокубок 2019 - Ознакомительный Раунд 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1539932700,
    "relativeTimeSeconds": 52546580
    },
    {
    "id": 1054,
    "name": "Mail.Ru Cup 2018 Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1539880500,
    "relativeTimeSeconds": 52598779
    },
    {
    "id": 1063,
    "name": "Codeforces Round #516 (Div. 1, by Moscow Team Olympiad)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1539511500,
    "relativeTimeSeconds": 52967779
    },
    {
    "id": 1064,
    "name": "Codeforces Round #516 (Div. 2, by Moscow Team Olympiad)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1539511500,
    "relativeTimeSeconds": 52967779
    },
    {
    "id": 1066,
    "name": "Codeforces Round #515 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1539354900,
    "relativeTimeSeconds": 53124379
    },
    {
    "id": 1057,
    "name": "Mail.Ru Cup 2018 - Practice Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1539335100,
    "relativeTimeSeconds": 53144179
    },
    {
    "id": 1065,
    "name": "Educational Codeforces Round 52 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1539269400,
    "relativeTimeSeconds": 53209879
    },
    {
    "id": 1033,
    "name": "Lyft Level 5 Challenge 2018 - Elimination Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1538931900,
    "relativeTimeSeconds": 53547379
    },
    {
    "id": 1059,
    "name": "Codeforces Round #514 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1538750100,
    "relativeTimeSeconds": 53729180
    },
    {
    "id": 1060,
    "name": "Codeforces Round #513 by Barcelona Bootcamp (rated, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1538636700,
    "relativeTimeSeconds": 53842579
    },
    {
    "id": 1030,
    "name": "Technocup 2019 - Elimination Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537707900,
    "relativeTimeSeconds": 54771379
    },
    {
    "id": 1053,
    "name": "Codeforces Round #512 (Div. 1, based on Technocup 2019 Elimination Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537707900,
    "relativeTimeSeconds": 54771379
    },
    {
    "id": 1058,
    "name": "Codeforces Round #512 (Div. 2, based on Technocup 2019 Elimination Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537707900,
    "relativeTimeSeconds": 54771379
    },
    {
    "id": 1045,
    "name": "Bubble Cup 11 - Finals [Online Mirror, Div. 1]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1537612500,
    "relativeTimeSeconds": 54866779
    },
    {
    "id": 1046,
    "name": "Bubble Cup 11 - Finals [Online Mirror, Div. 2]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1537612500,
    "relativeTimeSeconds": 54866779
    },
    {
    "id": 1034,
    "name": "Codeforces Round #511 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537540500,
    "relativeTimeSeconds": 54938779
    },
    {
    "id": 1047,
    "name": "Codeforces Round #511 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537540500,
    "relativeTimeSeconds": 54938779
    },
    {
    "id": 1048,
    "name": "Технокубок 2019 - Ознакомительный Раунд 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1537531500,
    "relativeTimeSeconds": 54947780
    },
    {
    "id": 1052,
    "name": "Huawei Honorcup Marathon 1",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 1209600,
    "startTimeSeconds": 1537462800,
    "relativeTimeSeconds": 55016479
    },
    {
    "id": 1051,
    "name": "Educational Codeforces Round 51 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537454700,
    "relativeTimeSeconds": 55024579
    },
    {
    "id": 1042,
    "name": "Codeforces Round #510 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537171500,
    "relativeTimeSeconds": 55307779
    },
    {
    "id": 1041,
    "name": "Codeforces Round #509 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1537094100,
    "relativeTimeSeconds": 55385179
    },
    {
    "id": 1036,
    "name": "Educational Codeforces Round 50 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1536330900,
    "relativeTimeSeconds": 56148379
    },
    {
    "id": 1038,
    "name": "Codeforces Round #508 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1536248100,
    "relativeTimeSeconds": 56231179
    },
    {
    "id": 1039,
    "name": "Codeforces Round #507 (Div. 1, based on Olympiad of Metropolises)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1536165300,
    "relativeTimeSeconds": 56313980
    },
    {
    "id": 1040,
    "name": "Codeforces Round #507 (Div. 2, based on Olympiad of Metropolises)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1536165300,
    "relativeTimeSeconds": 56313979
    },
    {
    "id": 1037,
    "name": "Manthan, Codefest 18 (rated, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1535898900,
    "relativeTimeSeconds": 56580379
    },
    {
    "id": 1028,
    "name": "AIM Tech Round 5 (rated, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1535387700,
    "relativeTimeSeconds": 57091579
    },
    {
    "id": 1029,
    "name": "Codeforces Round #506 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1535122200,
    "relativeTimeSeconds": 57357079
    },
    {
    "id": 1025,
    "name": "Codeforces Round #505 (rated, Div. 1 + Div. 2, based on VK Cup 2018 Final)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1534685700,
    "relativeTimeSeconds": 57793579
    },
    {
    "id": 1027,
    "name": "Educational Codeforces Round 49 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1534602900,
    "relativeTimeSeconds": 57876379
    },
    {
    "id": 1023,
    "name": "Codeforces Round #504 (rated, Div. 1 + Div. 2, based on VK Cup 2018 Final)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1534516500,
    "relativeTimeSeconds": 57962779
    },
    {
    "id": 951,
    "name": "VK Cup 2018 - Final",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1534059600,
    "relativeTimeSeconds": 58419679
    },
    {
    "id": 1019,
    "name": "Codeforces Round #503 (by SIS, Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1533994500,
    "relativeTimeSeconds": 58484779
    },
    {
    "id": 1020,
    "name": "Codeforces Round #503 (by SIS, Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1533994500,
    "relativeTimeSeconds": 58484779
    },
    {
    "id": 1017,
    "name": "Codeforces Round #502 (in memory of Leopoldo Taravilse, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9600,
    "startTimeSeconds": 1533737100,
    "relativeTimeSeconds": 58742179
    },
    {
    "id": 1016,
    "name": "Educational Codeforces Round 48 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1533307500,
    "relativeTimeSeconds": 59171779
    },
    {
    "id": 1015,
    "name": "Codeforces Round #501 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1533047700,
    "relativeTimeSeconds": 59431579
    },
    {
    "id": 1012,
    "name": "Codeforces Round #500 (Div. 1) [based on EJOI]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1532938500,
    "relativeTimeSeconds": 59540779
    },
    {
    "id": 1013,
    "name": "Codeforces Round #500 (Div. 2) [based on EJOI]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1532938500,
    "relativeTimeSeconds": 59540779
    },
    {
    "id": 1010,
    "name": "Codeforces Round #499 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1532617500,
    "relativeTimeSeconds": 59861779
    },
    {
    "id": 1011,
    "name": "Codeforces Round #499 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1532617500,
    "relativeTimeSeconds": 59861779
    },
    {
    "id": 1014,
    "name": "Codeforces Marathon Round 2",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1532434500,
    "relativeTimeSeconds": 60044779
    },
    {
    "id": 1006,
    "name": "Codeforces Round #498 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1531751700,
    "relativeTimeSeconds": 60727579
    },
    {
    "id": 1009,
    "name": "Educational Codeforces Round 47 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1531578900,
    "relativeTimeSeconds": 60900379
    },
    {
    "id": 1007,
    "name": "Codeforces Round #497 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1531492500,
    "relativeTimeSeconds": 60986779
    },
    {
    "id": 1008,
    "name": "Codeforces Round #497 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1531492500,
    "relativeTimeSeconds": 60986779
    },
    {
    "id": 1005,
    "name": "Codeforces Round #496 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1531150500,
    "relativeTimeSeconds": 61328779
    },
    {
    "id": 1002,
    "name": "Microsoft Q# Coding Contest - Summer 2018",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1530892800,
    "relativeTimeSeconds": 61586479
    },
    {
    "id": 1004,
    "name": "Codeforces Round #495 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1530808500,
    "relativeTimeSeconds": 61670779
    },
    {
    "id": 1003,
    "name": "Codeforces Round #494 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1530628500,
    "relativeTimeSeconds": 61850779
    },
    {
    "id": 997,
    "name": "Codeforces Round #493 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1530453900,
    "relativeTimeSeconds": 62025379
    },
    {
    "id": 998,
    "name": "Codeforces Round #493 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1530453900,
    "relativeTimeSeconds": 62025379
    },
    {
    "id": 1001,
    "name": "Microsoft Q# Coding Contest - Summer 2018 - Warmup",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1530288000,
    "relativeTimeSeconds": 62191280
    },
    {
    "id": 1000,
    "name": "Educational Codeforces Round 46 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1530110100,
    "relativeTimeSeconds": 62369179
    },
    {
    "id": 995,
    "name": "Codeforces Round #492 (Div. 1) [Thanks, uDebug!]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1529858100,
    "relativeTimeSeconds": 62621179
    },
    {
    "id": 996,
    "name": "Codeforces Round #492 (Div. 2) [Thanks, uDebug!]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1529858100,
    "relativeTimeSeconds": 62621179
    },
    {
    "id": 991,
    "name": "Codeforces Round #491 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1529768100,
    "relativeTimeSeconds": 62711179
    },
    {
    "id": 999,
    "name": "Codeforces Round #490 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1529591700,
    "relativeTimeSeconds": 62887579
    },
    {
    "id": 992,
    "name": "Codeforces Round #489 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1529339700,
    "relativeTimeSeconds": 63139579
    },
    {
    "id": 993,
    "name": "Codeforces Round #488 by NEAR (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1529166900,
    "relativeTimeSeconds": 63312379
    },
    {
    "id": 994,
    "name": "Codeforces Round #488 by NEAR (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1529166900,
    "relativeTimeSeconds": 63312379
    },
    {
    "id": 989,
    "name": "Codeforces Round #487 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1528724100,
    "relativeTimeSeconds": 63755179
    },
    {
    "id": 990,
    "name": "Educational Codeforces Round 45 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1528625100,
    "relativeTimeSeconds": 63854179
    },
    {
    "id": 988,
    "name": "Codeforces Round #486 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1527863700,
    "relativeTimeSeconds": 64615579
    },
    {
    "id": 986,
    "name": "Codeforces Round #485 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1527608100,
    "relativeTimeSeconds": 64871179
    },
    {
    "id": 987,
    "name": "Codeforces Round #485 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1527608100,
    "relativeTimeSeconds": 64871179
    },
    {
    "id": 981,
    "name": "Avito Code Challenge 2018",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1527432600,
    "relativeTimeSeconds": 65046679
    },
    {
    "id": 985,
    "name": "Educational Codeforces Round 44 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1526913900,
    "relativeTimeSeconds": 65565379
    },
    {
    "id": 982,
    "name": "Codeforces Round #484 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1526574900,
    "relativeTimeSeconds": 65904380
    },
    {
    "id": 983,
    "name": "Codeforces Round #483 (Div. 1) [Thanks, Botan Investments and Victor Shaburov!]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1526395500,
    "relativeTimeSeconds": 66083779
    },
    {
    "id": 984,
    "name": "Codeforces Round #483 (Div. 2) [Thanks, Botan Investments and Victor Shaburov!]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1526395500,
    "relativeTimeSeconds": 66083779
    },
    {
    "id": 979,
    "name": "Codeforces Round #482 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1526308500,
    "relativeTimeSeconds": 66170780
    },
    {
    "id": 978,
    "name": "Codeforces Round #481 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1526202300,
    "relativeTimeSeconds": 66276979
    },
    {
    "id": 980,
    "name": "Codeforces Round #480 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1525791900,
    "relativeTimeSeconds": 66687379
    },
    {
    "id": 977,
    "name": "Codeforces Round #479 (Div. 3)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1525615500,
    "relativeTimeSeconds": 66863779
    },
    {
    "id": 975,
    "name": "Codeforces Round #478 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1525183500,
    "relativeTimeSeconds": 67295779
    },
    {
    "id": 976,
    "name": "Educational Codeforces Round 43 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1525099200,
    "relativeTimeSeconds": 67380079
    },
    {
    "id": 925,
    "name": "VK Cup 2018 - Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1525007700,
    "relativeTimeSeconds": 67471579
    },
    {
    "id": 966,
    "name": "Codeforces Round #477 (rated, Div. 1, based on VK Cup 2018 Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1525007700,
    "relativeTimeSeconds": 67471579
    },
    {
    "id": 967,
    "name": "Codeforces Round #477 (rated, Div. 2, based on VK Cup 2018 Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1525007700,
    "relativeTimeSeconds": 67471579
    },
    {
    "id": 965,
    "name": "Codeforces Round #476 (Div. 2) [Thanks, Telegram!]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1524677700,
    "relativeTimeSeconds": 67801579
    },
    {
    "id": 927,
    "name": "VK Cup 2018 - Wild-card Round 2",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1524152100,
    "relativeTimeSeconds": 68327179
    },
    {
    "id": 963,
    "name": "Tinkoff Internship Warmup Round 2018 and Codeforces Round #475 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1523973900,
    "relativeTimeSeconds": 68505379
    },
    {
    "id": 964,
    "name": "Tinkoff Internship Warmup Round 2018 and Codeforces Round #475 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1523973900,
    "relativeTimeSeconds": 68505379
    },
    {
    "id": 958,
    "name": "Helvetic Coding Contest 2018 online mirror (teams allowed, unrated)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1523689500,
    "relativeTimeSeconds": 68789779
    },
    {
    "id": 962,
    "name": "Educational Codeforces Round 42 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1523370900,
    "relativeTimeSeconds": 69108379
    },
    {
    "id": 960,
    "name": "Divide by Zero 2018 and Codeforces Round #474 (Div. 1 + Div. 2, combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1523117100,
    "relativeTimeSeconds": 69362179
    },
    {
    "id": 961,
    "name": "Educational Codeforces Round 41 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1522850700,
    "relativeTimeSeconds": 69628579
    },
    {
    "id": 959,
    "name": "Codeforces Round #473 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1522771500,
    "relativeTimeSeconds": 69707779
    },
    {
    "id": 952,
    "name": "April Fools Contest 2018",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1522596900,
    "relativeTimeSeconds": 69882379
    },
    {
    "id": 924,
    "name": "VK Cup 2018 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1521905700,
    "relativeTimeSeconds": 70573579
    },
    {
    "id": 956,
    "name": "Codeforces Round #472 (rated, Div. 1, based on VK Cup 2018 Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1521905700,
    "relativeTimeSeconds": 70573579
    },
    {
    "id": 957,
    "name": "Codeforces Round #472 (rated, Div. 2, based on VK Cup 2018 Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1521905700,
    "relativeTimeSeconds": 70573579
    },
    {
    "id": 955,
    "name": "Codeforces Round #471 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1521822900,
    "relativeTimeSeconds": 70656379
    },
    {
    "id": 954,
    "name": "Educational Codeforces Round 40 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1521698700,
    "relativeTimeSeconds": 70780579
    },
    {
    "id": 926,
    "name": "VK Cup 2018 - Wild-card Round 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1521300900,
    "relativeTimeSeconds": 71178379
    },
    {
    "id": 953,
    "name": "VK Cup 2018 - Wild-card Round 1 (unofficial unrated mirror)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1521300900,
    "relativeTimeSeconds": 71178379
    },
    {
    "id": 923,
    "name": "VK Cup 2018 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1520696100,
    "relativeTimeSeconds": 71783179
    },
    {
    "id": 947,
    "name": "Codeforces Round #470 (rated, Div. 1, based on VK Cup 2018 Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1520696100,
    "relativeTimeSeconds": 71783179
    },
    {
    "id": 948,
    "name": "Codeforces Round #470 (rated, Div. 2, based on VK Cup 2018 Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1520696100,
    "relativeTimeSeconds": 71783179
    },
    {
    "id": 949,
    "name": "Codeforces Round #469 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1520583000,
    "relativeTimeSeconds": 71896279
    },
    {
    "id": 950,
    "name": "Codeforces Round #469 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1520583000,
    "relativeTimeSeconds": 71896279
    },
    {
    "id": 946,
    "name": "Educational Codeforces Round 39 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1520348700,
    "relativeTimeSeconds": 72130579
    },
    {
    "id": 930,
    "name": "Codeforces Round #468 (Div. 1, based on Technocup 2018 Final Round)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1520177700,
    "relativeTimeSeconds": 72301579
    },
    {
    "id": 931,
    "name": "Codeforces Round #468 (Div. 2, based on Technocup 2018 Final Round)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1520177700,
    "relativeTimeSeconds": 72301579
    },
    {
    "id": 944,
    "name": "Технокубок 2018 - Финал (только для онсайт-финалистов)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1520152800,
    "relativeTimeSeconds": 72326479
    },
    {
    "id": 929,
    "name": "VK Cup 2018 - Квалификация 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1520004900,
    "relativeTimeSeconds": 72474380
    },
    {
    "id": 936,
    "name": "Codeforces Round #467 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1519574700,
    "relativeTimeSeconds": 72904579
    },
    {
    "id": 937,
    "name": "Codeforces Round #467 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1519574700,
    "relativeTimeSeconds": 72904580
    },
    {
    "id": 928,
    "name": "VK Cup 2018 - Квалификация 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1519486500,
    "relativeTimeSeconds": 72992780
    },
    {
    "id": 940,
    "name": "Codeforces Round #466 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1519464900,
    "relativeTimeSeconds": 73014379
    },
    {
    "id": 935,
    "name": "Codeforces Round #465 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1519058100,
    "relativeTimeSeconds": 73421179
    },
    {
    "id": 939,
    "name": "Codeforces Round #464 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1518861900,
    "relativeTimeSeconds": 73617379
    },
    {
    "id": 938,
    "name": "Educational Codeforces Round 38 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1518793500,
    "relativeTimeSeconds": 73685779
    },
    {
    "id": 932,
    "name": "ICM Technex 2018 and Codeforces Round #463 (Div. 1 + Div. 2, combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1518705300,
    "relativeTimeSeconds": 73773980
    },
    {
    "id": 933,
    "name": "Codeforces Round #462 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1518609900,
    "relativeTimeSeconds": 73869379
    },
    {
    "id": 934,
    "name": "Codeforces Round #462 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1518609900,
    "relativeTimeSeconds": 73869379
    },
    {
    "id": 922,
    "name": "Codeforces Round #461 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1518023700,
    "relativeTimeSeconds": 74455579
    },
    {
    "id": 920,
    "name": "Educational Codeforces Round 37 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1517582100,
    "relativeTimeSeconds": 74897179
    },
    {
    "id": 921,
    "name": "AIM Tech Mini Marathon 1",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1517500800,
    "relativeTimeSeconds": 74978479
    },
    {
    "id": 919,
    "name": "Codeforces Round #460 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1517403900,
    "relativeTimeSeconds": 75075379
    },
    {
    "id": 917,
    "name": "Codeforces Round #459 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1517236500,
    "relativeTimeSeconds": 75242780
    },
    {
    "id": 918,
    "name": "Codeforces Round #459 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1517236500,
    "relativeTimeSeconds": 75242779
    },
    {
    "id": 914,
    "name": "Codecraft-18 and Codeforces Round #458 (Div. 1 + Div. 2, combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1516462500,
    "relativeTimeSeconds": 76016779
    },
    {
    "id": 916,
    "name": "Codeforces Round #457 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1516372500,
    "relativeTimeSeconds": 76106779
    },
    {
    "id": 915,
    "name": "Educational Codeforces Round 36 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1515848700,
    "relativeTimeSeconds": 76630579
    },
    {
    "id": 913,
    "name": "Hello 2018",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1515422700,
    "relativeTimeSeconds": 77056580
    },
    {
    "id": 912,
    "name": "Codeforces Round #456 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1515162900,
    "relativeTimeSeconds": 77316379
    },
    {
    "id": 908,
    "name": "Good Bye 2017",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1514562000,
    "relativeTimeSeconds": 77917279
    },
    {
    "id": 911,
    "name": "Educational Codeforces Round 35 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1514469900,
    "relativeTimeSeconds": 78009379
    },
    {
    "id": 909,
    "name": "Codeforces Round #455 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1514392500,
    "relativeTimeSeconds": 78086779
    },
    {
    "id": 904,
    "name": "Технокубок 2018 - Отборочный Раунд 4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1514037900,
    "relativeTimeSeconds": 78441380
    },
    {
    "id": 906,
    "name": "Codeforces Round #454 (Div. 1, based on Technocup 2018 Elimination Round 4)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1514037900,
    "relativeTimeSeconds": 78441379
    },
    {
    "id": 907,
    "name": "Codeforces Round #454 (Div. 2, based on Technocup 2018 Elimination Round 4)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1514037900,
    "relativeTimeSeconds": 78441379
    },
    {
    "id": 910,
    "name": "Testing Round #14 (Unrated)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 5400,
    "startTimeSeconds": 1513940700,
    "relativeTimeSeconds": 78538579
    },
    {
    "id": 905,
    "name": "Технокубок 2018 - Ознакомительный Раунд 4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1513861200,
    "relativeTimeSeconds": 78618080
    },
    {
    "id": 901,
    "name": "Codeforces Round #453 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1513697700,
    "relativeTimeSeconds": 78781579
    },
    {
    "id": 902,
    "name": "Codeforces Round #453 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1513697700,
    "relativeTimeSeconds": 78781579
    },
    {
    "id": 899,
    "name": "Codeforces Round #452 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1513492500,
    "relativeTimeSeconds": 78986779
    },
    {
    "id": 898,
    "name": "Codeforces Round #451 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1513424100,
    "relativeTimeSeconds": 79055179
    },
    {
    "id": 903,
    "name": "Educational Codeforces Round 34 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1513091100,
    "relativeTimeSeconds": 79388179
    },
    {
    "id": 900,
    "name": "Codeforces Round #450 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1513008300,
    "relativeTimeSeconds": 79470979
    },
    {
    "id": 896,
    "name": "Codeforces Round #449 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1512223500,
    "relativeTimeSeconds": 80255780
    },
    {
    "id": 897,
    "name": "Codeforces Round #449 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1512223500,
    "relativeTimeSeconds": 80255779
    },
    {
    "id": 895,
    "name": "Codeforces Round #448 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1511712300,
    "relativeTimeSeconds": 80766979
    },
    {
    "id": 893,
    "name": "Educational Codeforces Round 33 (Rated for Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1511449500,
    "relativeTimeSeconds": 81029780
    },
    {
    "id": 894,
    "name": "Codeforces Round #447 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1511099700,
    "relativeTimeSeconds": 81379579
    },
    {
    "id": 891,
    "name": "Codeforces Round #446 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1510929300,
    "relativeTimeSeconds": 81549979
    },
    {
    "id": 892,
    "name": "Codeforces Round #446 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1510929300,
    "relativeTimeSeconds": 81549979
    },
    {
    "id": 886,
    "name": "Технокубок 2018 - Отборочный Раунд 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1510502700,
    "relativeTimeSeconds": 81976580
    },
    {
    "id": 889,
    "name": "Codeforces Round #445 (Div. 1, based on Technocup 2018 Elimination Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1510502700,
    "relativeTimeSeconds": 81976579
    },
    {
    "id": 890,
    "name": "Codeforces Round #445 (Div. 2, based on Technocup 2018 Elimination Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1510502700,
    "relativeTimeSeconds": 81976579
    },
    {
    "id": 888,
    "name": "Educational Codeforces Round 32",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1510239900,
    "relativeTimeSeconds": 82239379
    },
    {
    "id": 885,
    "name": "Технокубок 2018 - Ознакомительный Раунд 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1510239600,
    "relativeTimeSeconds": 82239680
    },
    {
    "id": 887,
    "name": "Codeforces Round #444 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1509725100,
    "relativeTimeSeconds": 82754179
    },
    {
    "id": 884,
    "name": "Educational Codeforces Round 31",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1509113100,
    "relativeTimeSeconds": 83366179
    },
    {
    "id": 878,
    "name": "Codeforces Round #443 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1509029100,
    "relativeTimeSeconds": 83450179
    },
    {
    "id": 879,
    "name": "Codeforces Round #443 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1509029100,
    "relativeTimeSeconds": 83450179
    },
    {
    "id": 877,
    "name": "Codeforces Round #442 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1508773500,
    "relativeTimeSeconds": 83705779
    },
    {
    "id": 883,
    "name": "2017-2018 ACM-ICPC, NEERC, Southern Subregional Contest (Online Mirror, ACM-ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1508573100,
    "relativeTimeSeconds": 83906179
    },
    {
    "id": 875,
    "name": "Codeforces Round #441 (Div. 1, by Moscow Team Olympiad)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1508151900,
    "relativeTimeSeconds": 84327379
    },
    {
    "id": 876,
    "name": "Codeforces Round #441 (Div. 2, by Moscow Team Olympiad)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1508151900,
    "relativeTimeSeconds": 84327379
    },
    {
    "id": 870,
    "name": "Technocup 2018 - Elimination Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1508054700,
    "relativeTimeSeconds": 84424579
    },
    {
    "id": 871,
    "name": "Codeforces Round #440 (Div. 1, based on Technocup 2018 Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1508054700,
    "relativeTimeSeconds": 84424579
    },
    {
    "id": 872,
    "name": "Codeforces Round #440 (Div. 2, based on Technocup 2018 Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1508054700,
    "relativeTimeSeconds": 84424579
    },
    {
    "id": 873,
    "name": "Educational Codeforces Round 30",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1507817100,
    "relativeTimeSeconds": 84662179
    },
    {
    "id": 874,
    "name": "Technocup 2018 - Practice Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1507791600,
    "relativeTimeSeconds": 84687679
    },
    {
    "id": 869,
    "name": "Codeforces Round #439 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1507296900,
    "relativeTimeSeconds": 85182379
    },
    {
    "id": 868,
    "name": "Codeforces Round #438 by Sberbank and Barcelona Bootcamp (Div. 1 + Div. 2 combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1507187100,
    "relativeTimeSeconds": 85292179
    },
    {
    "id": 865,
    "name": "MemSQL Start[c]UP 3.0 - Round 2 (onsite finalists)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1506791100,
    "relativeTimeSeconds": 85688179
    },
    {
    "id": 866,
    "name": "MemSQL Start[c]UP 3.0 - Round 2 and Codeforces Round #437 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1506791100,
    "relativeTimeSeconds": 85688179
    },
    {
    "id": 867,
    "name": "Codeforces Round #437 (Div. 2, based on MemSQL Start[c]UP 3.0 - Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1506791100,
    "relativeTimeSeconds": 85688179
    },
    {
    "id": 864,
    "name": "Codeforces Round #436 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1506335700,
    "relativeTimeSeconds": 86143579
    },
    {
    "id": 855,
    "name": "Manthan, Codefest 17",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1506263700,
    "relativeTimeSeconds": 86215579
    },
    {
    "id": 863,
    "name": "Educational Codeforces Round 29",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1506006300,
    "relativeTimeSeconds": 86472980
    },
    {
    "id": 862,
    "name": "Codeforces Round #435 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1505833500,
    "relativeTimeSeconds": 86645779
    },
    {
    "id": 847,
    "name": "2017-2018 ACM-ICPC, NEERC, Southern Subregional Contest, qualification stage (Online Mirror, ACM-ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 14400,
    "startTimeSeconds": 1505739900,
    "relativeTimeSeconds": 86739379
    },
    {
    "id": 858,
    "name": "Технокубок 2018 - Отборочный Раунд 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1505653500,
    "relativeTimeSeconds": 86825780
    },
    {
    "id": 860,
    "name": "Codeforces Round #434 (Div. 1, based on Technocup 2018 Elimination Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1505653500,
    "relativeTimeSeconds": 86825779
    },
    {
    "id": 861,
    "name": "Codeforces Round #434 (Div. 2, based on Technocup 2018 Elimination Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8400,
    "startTimeSeconds": 1505653500,
    "relativeTimeSeconds": 86825780
    },
    {
    "id": 859,
    "name": "MemSQL Start[c]UP 3.0 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1505583300,
    "relativeTimeSeconds": 86895979
    },
    {
    "id": 857,
    "name": "Технокубок 2018 - Ознакомительный Раунд 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1505390400,
    "relativeTimeSeconds": 87088880
    },
    {
    "id": 856,
    "name": "Russian Code Cup 2017 - Finals [Unofficial Mirror, Div. 1 Only Recommended, Teams Allowed]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1505050500,
    "relativeTimeSeconds": 87428779
    },
    {
    "id": 853,
    "name": "Codeforces Round #433 (Div. 1, based on Olympiad of Metropolises)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1504702500,
    "relativeTimeSeconds": 87776780
    },
    {
    "id": 854,
    "name": "Codeforces Round #433 (Div. 2, based on Olympiad of Metropolises)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1504702500,
    "relativeTimeSeconds": 87776779
    },
    {
    "id": 846,
    "name": "Educational Codeforces Round 28",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1504623900,
    "relativeTimeSeconds": 87855379
    },
    {
    "id": 850,
    "name": "Codeforces Round #432 (Div. 1, based on IndiaHacks Final Round 2017)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1504535700,
    "relativeTimeSeconds": 87943579
    },
    {
    "id": 851,
    "name": "Codeforces Round #432 (Div. 2, based on IndiaHacks Final Round 2017)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1504535700,
    "relativeTimeSeconds": 87943579
    },
    {
    "id": 852,
    "name": "Bubble Cup X - Finals [Online Mirror]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1504432800,
    "relativeTimeSeconds": 88046479
    },
    {
    "id": 848,
    "name": "Codeforces Round #431 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1504272900,
    "relativeTimeSeconds": 88206379
    },
    {
    "id": 849,
    "name": "Codeforces Round #431 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1504272900,
    "relativeTimeSeconds": 88206379
    },
    {
    "id": 842,
    "name": "Codeforces Round #430 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1504019100,
    "relativeTimeSeconds": 88460179
    },
    {
    "id": 843,
    "name": "AIM Tech Round 4 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1503592500,
    "relativeTimeSeconds": 88886779
    },
    {
    "id": 844,
    "name": "AIM Tech Round 4 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1503592500,
    "relativeTimeSeconds": 88886780
    },
    {
    "id": 845,
    "name": "Educational Codeforces Round 27",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1503327900,
    "relativeTimeSeconds": 89151379
    },
    {
    "id": 840,
    "name": "Codeforces Round #429 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1503068700,
    "relativeTimeSeconds": 89410579
    },
    {
    "id": 841,
    "name": "Codeforces Round #429 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1503068700,
    "relativeTimeSeconds": 89410579
    },
    {
    "id": 839,
    "name": "Codeforces Round #428 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1502548500,
    "relativeTimeSeconds": 89930779
    },
    {
    "id": 838,
    "name": "IndiaHacks 2nd Elimination 2017 (unofficial, unrated mirror, ICPC rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1502085900,
    "relativeTimeSeconds": 90393380
    },
    {
    "id": 837,
    "name": "Educational Codeforces Round 26",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1501773300,
    "relativeTimeSeconds": 90705980
    },
    {
    "id": 835,
    "name": "Codeforces Round #427 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1501511700,
    "relativeTimeSeconds": 90967579
    },
    {
    "id": 833,
    "name": "Codeforces Round #426 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1501425300,
    "relativeTimeSeconds": 91053979
    },
    {
    "id": 834,
    "name": "Codeforces Round #426 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1501425300,
    "relativeTimeSeconds": 91053979
    },
    {
    "id": 832,
    "name": "Codeforces Round #425 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1500906900,
    "relativeTimeSeconds": 91572379
    },
    {
    "id": 825,
    "name": "Educational Codeforces Round 25",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1500217500,
    "relativeTimeSeconds": 92261779
    },
    {
    "id": 830,
    "name": "Codeforces Round #424 (Div. 1, rated, based on VK Cup Finals)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1499958300,
    "relativeTimeSeconds": 92520979
    },
    {
    "id": 831,
    "name": "Codeforces Round #424 (Div. 2, rated, based on VK Cup Finals)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1499958300,
    "relativeTimeSeconds": 92520979
    },
    {
    "id": 827,
    "name": "Codeforces Round #423 (Div. 1, rated, based on VK Cup Finals)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1499791500,
    "relativeTimeSeconds": 92687779
    },
    {
    "id": 828,
    "name": "Codeforces Round #423 (Div. 2, rated, based on VK Cup Finals)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1499791500,
    "relativeTimeSeconds": 92687779
    },
    {
    "id": 823,
    "name": "VK Cup 2017 - Finals",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1499587500,
    "relativeTimeSeconds": 92891779
    },
    {
    "id": 826,
    "name": "VK Cup 2017 - Finals (practice session)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 4800,
    "startTimeSeconds": 1499502000,
    "relativeTimeSeconds": 92977279
    },
    {
    "id": 822,
    "name": "Codeforces Round #422 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1499011500,
    "relativeTimeSeconds": 93467779
    },
    {
    "id": 818,
    "name": "Educational Codeforces Round 24",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1498748700,
    "relativeTimeSeconds": 93730579
    },
    {
    "id": 819,
    "name": "Codeforces Round #421 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1498574100,
    "relativeTimeSeconds": 93905179
    },
    {
    "id": 820,
    "name": "Codeforces Round #421 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1498574100,
    "relativeTimeSeconds": 93905179
    },
    {
    "id": 821,
    "name": "Codeforces Round #420 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1498401300,
    "relativeTimeSeconds": 94077979
    },
    {
    "id": 815,
    "name": "Codeforces Round #419 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1497710100,
    "relativeTimeSeconds": 94769179
    },
    {
    "id": 816,
    "name": "Codeforces Round #419 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1497710100,
    "relativeTimeSeconds": 94769179
    },
    {
    "id": 817,
    "name": "Educational Codeforces Round 23",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1497539100,
    "relativeTimeSeconds": 94940179
    },
    {
    "id": 814,
    "name": "Codeforces Round #418 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1496837700,
    "relativeTimeSeconds": 95641579
    },
    {
    "id": 813,
    "name": "Educational Codeforces Round 22",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1496675100,
    "relativeTimeSeconds": 95804179
    },
    {
    "id": 812,
    "name": "Codeforces Round #417 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1496326500,
    "relativeTimeSeconds": 96152779
    },
    {
    "id": 802,
    "name": "Helvetic Coding Contest 2017 online mirror (teams allowed, unrated)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 16200,
    "startTimeSeconds": 1495958700,
    "relativeTimeSeconds": 96520579
    },
    {
    "id": 811,
    "name": "Codeforces Round #416 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1495877700,
    "relativeTimeSeconds": 96601579
    },
    {
    "id": 809,
    "name": "Codeforces Round #415 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1495303500,
    "relativeTimeSeconds": 97175779
    },
    {
    "id": 810,
    "name": "Codeforces Round #415 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1495303500,
    "relativeTimeSeconds": 97175779
    },
    {
    "id": 808,
    "name": "Educational Codeforces Round 21",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1494860700,
    "relativeTimeSeconds": 97618579
    },
    {
    "id": 794,
    "name": "Tinkoff Challenge - Final Round (Codeforces Round #414, rated, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1494668100,
    "relativeTimeSeconds": 97811180
    },
    {
    "id": 799,
    "name": "Playrix Codescapes Cup (Codeforces Round #413, rated, Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1494516900,
    "relativeTimeSeconds": 97962379
    },
    {
    "id": 773,
    "name": "VK Cup 2017 - Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1494171900,
    "relativeTimeSeconds": 98307379
    },
    {
    "id": 806,
    "name": "Codeforces Round #412 (rated, Div. 1, based on VK Cup 2017 Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1494171900,
    "relativeTimeSeconds": 98307380
    },
    {
    "id": 807,
    "name": "Codeforces Round #412 (rated, Div. 2, base on VK Cup 2017 Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1494171900,
    "relativeTimeSeconds": 98307379
    },
    {
    "id": 804,
    "name": "Codeforces Round #411 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1493909400,
    "relativeTimeSeconds": 98569879
    },
    {
    "id": 805,
    "name": "Codeforces Round #411 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1493909400,
    "relativeTimeSeconds": 98569879
    },
    {
    "id": 803,
    "name": "Educational Codeforces Round 20",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1493391900,
    "relativeTimeSeconds": 99087379
    },
    {
    "id": 775,
    "name": "VK Cup 2017 - Wild Card Round 2",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1493220900,
    "relativeTimeSeconds": 99258379
    },
    {
    "id": 793,
    "name": "Tinkoff Challenge - Elimination Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1492965900,
    "relativeTimeSeconds": 99513379
    },
    {
    "id": 798,
    "name": "Codeforces Round #410 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1492785300,
    "relativeTimeSeconds": 99693979
    },
    {
    "id": 772,
    "name": "VK Cup 2017 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1492356900,
    "relativeTimeSeconds": 100122379
    },
    {
    "id": 800,
    "name": "Codeforces Round #409 (rated, Div. 1, based on VK Cup 2017 Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1492356900,
    "relativeTimeSeconds": 100122379
    },
    {
    "id": 801,
    "name": "Codeforces Round #409 (rated, Div. 2, based on VK Cup 2017 Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1492356900,
    "relativeTimeSeconds": 100122379
    },
    {
    "id": 797,
    "name": "Educational Codeforces Round 19",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1492266900,
    "relativeTimeSeconds": 100212379
    },
    {
    "id": 796,
    "name": "Codeforces Round #408 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1491842100,
    "relativeTimeSeconds": 100637179
    },
    {
    "id": 774,
    "name": "VK Cup 2017 - Wild Card Round 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1491406500,
    "relativeTimeSeconds": 101072779
    },
    {
    "id": 795,
    "name": "VK Cup 2017 - Wild Card Round 1 (Unofficial Public Mirror)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1491406500,
    "relativeTimeSeconds": 101072779
    },
    {
    "id": 784,
    "name": "April Fools Contest 2017",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1490972400,
    "relativeTimeSeconds": 101506879
    },
    {
    "id": 788,
    "name": "Codeforces Round #407 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1490803500,
    "relativeTimeSeconds": 101675779
    },
    {
    "id": 789,
    "name": "Codeforces Round #407 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1490803500,
    "relativeTimeSeconds": 101675780
    },
    {
    "id": 792,
    "name": "Educational Codeforces Round 18",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1490625300,
    "relativeTimeSeconds": 101853979
    },
    {
    "id": 786,
    "name": "Codeforces Round #406 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1490281500,
    "relativeTimeSeconds": 102197779
    },
    {
    "id": 787,
    "name": "Codeforces Round #406 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1490281500,
    "relativeTimeSeconds": 102197779
    },
    {
    "id": 771,
    "name": "VK Cup 2017 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1489851300,
    "relativeTimeSeconds": 102627979
    },
    {
    "id": 790,
    "name": "Codeforces Round #405 (rated, Div. 1, based on VK Cup 2017 Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1489851300,
    "relativeTimeSeconds": 102627979
    },
    {
    "id": 791,
    "name": "Codeforces Round #405 (rated, Div. 2, based on VK Cup 2017 Round 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1489851300,
    "relativeTimeSeconds": 102627979
    },
    {
    "id": 785,
    "name": "Codeforces Round #404 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1489590300,
    "relativeTimeSeconds": 102888979
    },
    {
    "id": 770,
    "name": "VK Cup 2017 - Qualification 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1489233600,
    "relativeTimeSeconds": 103245679
    },
    {
    "id": 781,
    "name": "Codeforces Round #403 (Div. 1, based on Technocup 2017 Finals)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1488719100,
    "relativeTimeSeconds": 103760179
    },
    {
    "id": 782,
    "name": "Codeforces Round #403 (Div. 2, based on Technocup 2017 Finals)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1488719100,
    "relativeTimeSeconds": 103760179
    },
    {
    "id": 780,
    "name": "Технокубок 2017 - Финал (только для онсайт-финалистов)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1488705300,
    "relativeTimeSeconds": 103773980
    },
    {
    "id": 769,
    "name": "VK Cup 2017 - Qualification 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1488628800,
    "relativeTimeSeconds": 103850479
    },
    {
    "id": 778,
    "name": "Codeforces Round #402 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1488096300,
    "relativeTimeSeconds": 104382979
    },
    {
    "id": 779,
    "name": "Codeforces Round #402 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1488096300,
    "relativeTimeSeconds": 104382979
    },
    {
    "id": 777,
    "name": "Codeforces Round #401 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1487930700,
    "relativeTimeSeconds": 104548579
    },
    {
    "id": 776,
    "name": "ICM Technex 2017 and Codeforces Round #400 (Div. 1 + Div. 2, combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1487861100,
    "relativeTimeSeconds": 104618179
    },
    {
    "id": 768,
    "name": "Divide by Zero 2017 and Codeforces Round #399 (Div. 1 + Div. 2, combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9600,
    "startTimeSeconds": 1487606700,
    "relativeTimeSeconds": 104872579
    },
    {
    "id": 767,
    "name": "Codeforces Round #398 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1487408700,
    "relativeTimeSeconds": 105070580
    },
    {
    "id": 765,
    "name": "Codeforces Round #397 by Kaspersky Lab and Barcelona Bootcamp (Div. 1 + Div. 2 combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1487059500,
    "relativeTimeSeconds": 105419779
    },
    {
    "id": 766,
    "name": "Codeforces Round #396 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1486487100,
    "relativeTimeSeconds": 105992179
    },
    {
    "id": 763,
    "name": "Codeforces Round #395 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1486042500,
    "relativeTimeSeconds": 106436779
    },
    {
    "id": 764,
    "name": "Codeforces Round #395 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1486042500,
    "relativeTimeSeconds": 106436779
    },
    {
    "id": 761,
    "name": "Codeforces Round #394 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1485873300,
    "relativeTimeSeconds": 106605979
    },
    {
    "id": 762,
    "name": "Educational Codeforces Round 17",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1485354900,
    "relativeTimeSeconds": 107124379
    },
    {
    "id": 756,
    "name": "8VC Venture Cup 2017 - Final Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1485108900,
    "relativeTimeSeconds": 107370379
    },
    {
    "id": 759,
    "name": "Codeforces Round #393 (Div. 1) (8VC Venture Cup 2017 - Final Round Div. 1 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1485108900,
    "relativeTimeSeconds": 107370379
    },
    {
    "id": 760,
    "name": "Codeforces Round #393 (Div. 2) (8VC Venture Cup 2017 - Final Round Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1485108900,
    "relativeTimeSeconds": 107370379
    },
    {
    "id": 758,
    "name": "Codeforces Round #392 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1484838300,
    "relativeTimeSeconds": 107640980
    },
    {
    "id": 755,
    "name": "8VC Venture Cup 2017 - Elimination Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1484499900,
    "relativeTimeSeconds": 107979379
    },
    {
    "id": 757,
    "name": "Codecraft-17 and Codeforces Round #391 (Div. 1 + Div. 2, combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1484235300,
    "relativeTimeSeconds": 108243979
    },
    {
    "id": 754,
    "name": "Codeforces Round #390 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1483713300,
    "relativeTimeSeconds": 108765979
    },
    {
    "id": 750,
    "name": "Good Bye 2016",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1483107300,
    "relativeTimeSeconds": 109371979
    },
    {
    "id": 753,
    "name": "Testing Round #13",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 4500,
    "startTimeSeconds": 1483002300,
    "relativeTimeSeconds": 109476979
    },
    {
    "id": 748,
    "name": "Technocup 2017 - Elimination Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1482656700,
    "relativeTimeSeconds": 109822579
    },
    {
    "id": 752,
    "name": "Codeforces Round #389 (Div. 2, Rated, Based on Technocup 2017 - Elimination Round 3)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1482656700,
    "relativeTimeSeconds": 109822579
    },
    {
    "id": 751,
    "name": "Технокубок 2017 - Ознакомительный Раунд 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 257400,
    "startTimeSeconds": 1482395400,
    "relativeTimeSeconds": 110083880
    },
    {
    "id": 749,
    "name": "Codeforces Round #388 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1482165300,
    "relativeTimeSeconds": 110313979
    },
    {
    "id": 747,
    "name": "Codeforces Round #387 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1482113100,
    "relativeTimeSeconds": 110366180
    },
    {
    "id": 746,
    "name": "Codeforces Round #386 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1482057300,
    "relativeTimeSeconds": 110421979
    },
    {
    "id": 744,
    "name": "Codeforces Round #385 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1481992500,
    "relativeTimeSeconds": 110486779
    },
    {
    "id": 745,
    "name": "Codeforces Round #385 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1481992500,
    "relativeTimeSeconds": 110486779
    },
    {
    "id": 743,
    "name": "Codeforces Round #384 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1481726100,
    "relativeTimeSeconds": 110753179
    },
    {
    "id": 741,
    "name": "Codeforces Round #383 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1481034900,
    "relativeTimeSeconds": 111444379
    },
    {
    "id": 742,
    "name": "Codeforces Round #383 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1481034900,
    "relativeTimeSeconds": 111444379
    },
    {
    "id": 735,
    "name": "Codeforces Round #382 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1480264500,
    "relativeTimeSeconds": 112214779
    },
    {
    "id": 736,
    "name": "Codeforces Round #382 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1480264500,
    "relativeTimeSeconds": 112214779
    },
    {
    "id": 739,
    "name": "Codeforces Round #381 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1479918900,
    "relativeTimeSeconds": 112560379
    },
    {
    "id": 740,
    "name": "Codeforces Round #381 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1479918900,
    "relativeTimeSeconds": 112560379
    },
    {
    "id": 729,
    "name": "Technocup 2017 - Elimination Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1479632700,
    "relativeTimeSeconds": 112846579
    },
    {
    "id": 737,
    "name": "Codeforces Round #380 (Div. 1, Rated, Based on Technocup 2017 - Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1479632700,
    "relativeTimeSeconds": 112846579
    },
    {
    "id": 738,
    "name": "Codeforces Round #380 (Div. 2, Rated, Based on Technocup 2017 - Elimination Round 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1479632700,
    "relativeTimeSeconds": 112846579
    },
    {
    "id": 728,
    "name": "Технокубок 2017 - Ознакомительный Раунд 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 259200,
    "startTimeSeconds": 1479369600,
    "relativeTimeSeconds": 113109680
    },
    {
    "id": 734,
    "name": "Codeforces Round #379 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1479227700,
    "relativeTimeSeconds": 113251580
    },
    {
    "id": 733,
    "name": "Codeforces Round #378 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1477922700,
    "relativeTimeSeconds": 114556579
    },
    {
    "id": 730,
    "name": "2016-2017 ACM-ICPC, NEERC, Southern Subregional Contest (Online Mirror, ACM-ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1477209600,
    "relativeTimeSeconds": 115269679
    },
    {
    "id": 725,
    "name": "Canada Cup 2016",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1477148700,
    "relativeTimeSeconds": 115330579
    },
    {
    "id": 732,
    "name": "Codeforces Round #377 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1476714900,
    "relativeTimeSeconds": 115764379
    },
    {
    "id": 731,
    "name": "Codeforces Round #376 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1476611100,
    "relativeTimeSeconds": 115868180
    },
    {
    "id": 727,
    "name": "Technocup 2017 - Elimination Round 1 (Unofficially Open for Everyone, Rated for Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1476522300,
    "relativeTimeSeconds": 115956979
    },
    {
    "id": 726,
    "name": "Технокубок 2017 - Ознакомительный Раунд 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 255600,
    "startTimeSeconds": 1476262800,
    "relativeTimeSeconds": 116216480
    },
    {
    "id": 724,
    "name": "Intel Code Challenge Final Round (Div. 1 + Div. 2, Combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1475928900,
    "relativeTimeSeconds": 116550379
    },
    {
    "id": 723,
    "name": "Codeforces Round #375 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1475494500,
    "relativeTimeSeconds": 116984780
    },
    {
    "id": 722,
    "name": "Intel Code Challenge Elimination Round (Div. 1 + Div. 2, combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1475330700,
    "relativeTimeSeconds": 117148579
    },
    {
    "id": 721,
    "name": "Codeforces Round #374 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1475244300,
    "relativeTimeSeconds": 117234979
    },
    {
    "id": 718,
    "name": "Codeforces Round #373 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1474635900,
    "relativeTimeSeconds": 117843379
    },
    {
    "id": 719,
    "name": "Codeforces Round #373 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1474635900,
    "relativeTimeSeconds": 117843380
    },
    {
    "id": 720,
    "name": "Russian Code Cup 2016 - Finals [Unofficial Mirror, Div. 1 Only Recommended]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1474196700,
    "relativeTimeSeconds": 118282580
    },
    {
    "id": 715,
    "name": "Codeforces Round #372 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1474119900,
    "relativeTimeSeconds": 118359379
    },
    {
    "id": 716,
    "name": "Codeforces Round #372 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1474119900,
    "relativeTimeSeconds": 118359380
    },
    {
    "id": 713,
    "name": "Codeforces Round #371 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1473784500,
    "relativeTimeSeconds": 118694779
    },
    {
    "id": 714,
    "name": "Codeforces Round #371 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1473784500,
    "relativeTimeSeconds": 118694779
    },
    {
    "id": 717,
    "name": "Bubble Cup 9 - Finals [Online Mirror]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1473584400,
    "relativeTimeSeconds": 118894880
    },
    {
    "id": 712,
    "name": "Codeforces Round #370 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1473525900,
    "relativeTimeSeconds": 118953379
    },
    {
    "id": 711,
    "name": "Codeforces Round #369 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1472472300,
    "relativeTimeSeconds": 120006979
    },
    {
    "id": 708,
    "name": "AIM Tech Round 3 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1472056500,
    "relativeTimeSeconds": 120422779
    },
    {
    "id": 709,
    "name": "AIM Tech Round 3 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1472056500,
    "relativeTimeSeconds": 120422780
    },
    {
    "id": 710,
    "name": "Educational Codeforces Round 16",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1471875000,
    "relativeTimeSeconds": 120604279
    },
    {
    "id": 707,
    "name": "Codeforces Round #368 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1471698300,
    "relativeTimeSeconds": 120780979
    },
    {
    "id": 706,
    "name": "Codeforces Round #367 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1470933300,
    "relativeTimeSeconds": 121545980
    },
    {
    "id": 704,
    "name": "Codeforces Round #366 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1470578700,
    "relativeTimeSeconds": 121900579
    },
    {
    "id": 705,
    "name": "Codeforces Round #366 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1470578700,
    "relativeTimeSeconds": 121900580
    },
    {
    "id": 703,
    "name": "Codeforces Round #365 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1470323700,
    "relativeTimeSeconds": 122155579
    },
    {
    "id": 702,
    "name": "Educational Codeforces Round 15",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1469804400,
    "relativeTimeSeconds": 122674879
    },
    {
    "id": 700,
    "name": "Codeforces Round #364 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1469205300,
    "relativeTimeSeconds": 123273979
    },
    {
    "id": 701,
    "name": "Codeforces Round #364 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1469205300,
    "relativeTimeSeconds": 123273979
    },
    {
    "id": 698,
    "name": "Codeforces Round #363 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1468933500,
    "relativeTimeSeconds": 123545779
    },
    {
    "id": 699,
    "name": "Codeforces Round #363 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1468933500,
    "relativeTimeSeconds": 123545779
    },
    {
    "id": 696,
    "name": "Codeforces Round #362 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1468514100,
    "relativeTimeSeconds": 123965179
    },
    {
    "id": 697,
    "name": "Codeforces Round #362 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1468514100,
    "relativeTimeSeconds": 123965179
    },
    {
    "id": 691,
    "name": "Educational Codeforces Round 14",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1468425600,
    "relativeTimeSeconds": 124053679
    },
    {
    "id": 690,
    "name": "Helvetic Coding Contest 2016 online mirror (teams, unrated)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 16200,
    "startTimeSeconds": 1468137600,
    "relativeTimeSeconds": 124341679
    },
    {
    "id": 689,
    "name": "Codeforces Round #361 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1467822900,
    "relativeTimeSeconds": 124656379
    },
    {
    "id": 695,
    "name": "VK Cup 2016 - Finals",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 12600,
    "startTimeSeconds": 1467534000,
    "relativeTimeSeconds": 124945279
    },
    {
    "id": 693,
    "name": "VK Cup 2016 - Finals (trial contest)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 3600,
    "startTimeSeconds": 1467447900,
    "relativeTimeSeconds": 125031379
    },
    {
    "id": 687,
    "name": "Codeforces Round #360 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1467219900,
    "relativeTimeSeconds": 125259379
    },
    {
    "id": 688,
    "name": "Codeforces Round #360 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1467219900,
    "relativeTimeSeconds": 125259379
    },
    {
    "id": 685,
    "name": "Codeforces Round #359 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1466699700,
    "relativeTimeSeconds": 125779580
    },
    {
    "id": 686,
    "name": "Codeforces Round #359 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1466699700,
    "relativeTimeSeconds": 125779579
    },
    {
    "id": 682,
    "name": "Codeforces Round #358 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1466181300,
    "relativeTimeSeconds": 126297979
    },
    {
    "id": 683,
    "name": "Surprise Language Round #8",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1466092800,
    "relativeTimeSeconds": 126386479
    },
    {
    "id": 681,
    "name": "Codeforces Round #357 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1465922100,
    "relativeTimeSeconds": 126557179
    },
    {
    "id": 678,
    "name": "Educational Codeforces Round 13",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1465834200,
    "relativeTimeSeconds": 126645079
    },
    {
    "id": 684,
    "name": "Codeforces Marathon Round 1",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 864000,
    "startTimeSeconds": 1465722000,
    "relativeTimeSeconds": 126757280
    },
    {
    "id": 679,
    "name": "Codeforces Round #356 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1465403700,
    "relativeTimeSeconds": 127075579
    },
    {
    "id": 680,
    "name": "Codeforces Round #356 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1465403700,
    "relativeTimeSeconds": 127075579
    },
    {
    "id": 677,
    "name": "Codeforces Round #355 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1464798900,
    "relativeTimeSeconds": 127680380
    },
    {
    "id": 676,
    "name": "Codeforces Round #354 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1464188700,
    "relativeTimeSeconds": 128290579
    },
    {
    "id": 675,
    "name": "Codeforces Round #353 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1463416500,
    "relativeTimeSeconds": 129062779
    },
    {
    "id": 671,
    "name": "Codeforces Round #352 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1462984500,
    "relativeTimeSeconds": 129494779
    },
    {
    "id": 672,
    "name": "Codeforces Round #352 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1462984500,
    "relativeTimeSeconds": 129494779
    },
    {
    "id": 643,
    "name": "VK Cup 2016 - Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1462633500,
    "relativeTimeSeconds": 129845779
    },
    {
    "id": 673,
    "name": "Codeforces Round #351 (VK Cup 2016 Round 3, Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1462633500,
    "relativeTimeSeconds": 129845779
    },
    {
    "id": 674,
    "name": "Codeforces Round #351 (VK Cup 2016 Round 3, Div. 1 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1462633500,
    "relativeTimeSeconds": 129845780
    },
    {
    "id": 670,
    "name": "Codeforces Round #350 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1462464300,
    "relativeTimeSeconds": 130014979
    },
    {
    "id": 666,
    "name": "Codeforces Round #349 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1461947700,
    "relativeTimeSeconds": 130531579
    },
    {
    "id": 667,
    "name": "Codeforces Round #349 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1461947700,
    "relativeTimeSeconds": 130531579
    },
    {
    "id": 642,
    "name": "VK Cup 2016 - Wild Card Round 2",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1461596400,
    "relativeTimeSeconds": 130882879
    },
    {
    "id": 641,
    "name": "VK Cup 2016 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1461515700,
    "relativeTimeSeconds": 130963579
    },
    {
    "id": 668,
    "name": "Codeforces Round #348 (VK Cup 2016 Round 2, Div. 1 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1461515700,
    "relativeTimeSeconds": 130963579
    },
    {
    "id": 669,
    "name": "Codeforces Round #348 (VK Cup 2016 Round 2, Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1461515700,
    "relativeTimeSeconds": 130963579
    },
    {
    "id": 665,
    "name": "Educational Codeforces Round 12",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1461164400,
    "relativeTimeSeconds": 131314879
    },
    {
    "id": 663,
    "name": "Codeforces Round #347 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1460824500,
    "relativeTimeSeconds": 131654779
    },
    {
    "id": 664,
    "name": "Codeforces Round #347 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1460824500,
    "relativeTimeSeconds": 131654779
    },
    {
    "id": 662,
    "name": "CROC 2016 - Final Round [Private, For Onsite Finalists Only]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1460729700,
    "relativeTimeSeconds": 131749579
    },
    {
    "id": 640,
    "name": "VK Cup 2016 - Wild Card Round 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1460306100,
    "relativeTimeSeconds": 132173180
    },
    {
    "id": 661,
    "name": "VK Cup 2016 - Wild Card Round 1 (Unofficial Open Online Mirror)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1460306100,
    "relativeTimeSeconds": 132173179
    },
    {
    "id": 660,
    "name": "Educational Codeforces Round 11",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1460127600,
    "relativeTimeSeconds": 132351679
    },
    {
    "id": 656,
    "name": "April Fools Day Contest 2016",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1459526400,
    "relativeTimeSeconds": 132952880
    },
    {
    "id": 659,
    "name": "Codeforces Round #346 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1459353900,
    "relativeTimeSeconds": 133125379
    },
    {
    "id": 639,
    "name": "VK Cup 2016 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1459182900,
    "relativeTimeSeconds": 133296379
    },
    {
    "id": 657,
    "name": "VK Cup 2016 - Round 1 (Div.1 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1459182900,
    "relativeTimeSeconds": 133296379
    },
    {
    "id": 658,
    "name": "VK Cup 2016 - Round 1 (Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1459182900,
    "relativeTimeSeconds": 133296379
    },
    {
    "id": 649,
    "name": "Технокубок 2016 - Отборочный Раунд 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1458975600,
    "relativeTimeSeconds": 133503680
    },
    {
    "id": 652,
    "name": "Educational Codeforces Round 10",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1458910800,
    "relativeTimeSeconds": 133568479
    },
    {
    "id": 647,
    "name": "Технокубок 2016 - Ознакомительный Раунд 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1458799200,
    "relativeTimeSeconds": 133680080
    },
    {
    "id": 648,
    "name": "Технокубок 2016 - Отборочный Раунд 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1458745200,
    "relativeTimeSeconds": 133734080
    },
    {
    "id": 646,
    "name": "Технокубок 2016 - Ознакомительный Раунд 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1458568800,
    "relativeTimeSeconds": 133910480
    },
    {
    "id": 638,
    "name": "VK Cup 2016 - Qualification Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1458475200,
    "relativeTimeSeconds": 134004079
    },
    {
    "id": 653,
    "name": "IndiaHacks 2016 - Online Edition (Div. 1 + Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1458376500,
    "relativeTimeSeconds": 134102779
    },
    {
    "id": 645,
    "name": "CROC 2016 - Elimination Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1458318900,
    "relativeTimeSeconds": 134160379
    },
    {
    "id": 655,
    "name": "CROC 2016 - Elimination Round  (Rated Unofficial Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1458318900,
    "relativeTimeSeconds": 134160380
    },
    {
    "id": 644,
    "name": "CROC 2016 - Qualification",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1458118800,
    "relativeTimeSeconds": 134360479
    },
    {
    "id": 637,
    "name": "VK Cup 2016 - Qualification Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1457870400,
    "relativeTimeSeconds": 134608879
    },
    {
    "id": 650,
    "name": "Codeforces Round #345 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1457342700,
    "relativeTimeSeconds": 135136580
    },
    {
    "id": 651,
    "name": "Codeforces Round #345 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1457342700,
    "relativeTimeSeconds": 135136579
    },
    {
    "id": 631,
    "name": "Codeforces Round #344 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1457022900,
    "relativeTimeSeconds": 135456379
    },
    {
    "id": 632,
    "name": "Educational Codeforces Round 9",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1456844400,
    "relativeTimeSeconds": 135634879
    },
    {
    "id": 636,
    "name": "VeeRoute Marathon",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 1209600,
    "startTimeSeconds": 1456765200,
    "relativeTimeSeconds": 135714079
    },
    {
    "id": 627,
    "name": "8VC Venture Cup 2016 - Final Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1456683000,
    "relativeTimeSeconds": 135796279
    },
    {
    "id": 634,
    "name": "8VC Venture Cup 2016 - Final Round (Div. 1 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1456683000,
    "relativeTimeSeconds": 135796279
    },
    {
    "id": 635,
    "name": "8VC Venture Cup 2016 - Final Round (Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1456683000,
    "relativeTimeSeconds": 135796279
    },
    {
    "id": 633,
    "name": "Manthan, Codefest 16",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1456506900,
    "relativeTimeSeconds": 135972379
    },
    {
    "id": 629,
    "name": "Codeforces Round #343 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1455986100,
    "relativeTimeSeconds": 136493179
    },
    {
    "id": 628,
    "name": "Educational Codeforces Round 8",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1455894000,
    "relativeTimeSeconds": 136585279
    },
    {
    "id": 630,
    "name": "Experimental Educational Round: VolBIT Formulas Blitz",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1455807600,
    "relativeTimeSeconds": 136671679
    },
    {
    "id": 626,
    "name": "8VC Venture Cup 2016 - Elimination Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1455384900,
    "relativeTimeSeconds": 137094379
    },
    {
    "id": 622,
    "name": "Educational Codeforces Round 7",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1455116400,
    "relativeTimeSeconds": 137362879
    },
    {
    "id": 625,
    "name": "Codeforces Round #342 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1454835900,
    "relativeTimeSeconds": 137643380
    },
    {
    "id": 623,
    "name": "AIM Tech Round (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1454605500,
    "relativeTimeSeconds": 137873779
    },
    {
    "id": 624,
    "name": "AIM Tech Round (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1454605500,
    "relativeTimeSeconds": 137873780
    },
    {
    "id": 621,
    "name": "Codeforces Round #341 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1454249100,
    "relativeTimeSeconds": 138230179
    },
    {
    "id": 618,
    "name": "Wunder Fund Round 2016 (Div. 1 + Div. 2 combined)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1454087400,
    "relativeTimeSeconds": 138391879
    },
    {
    "id": 617,
    "name": "Codeforces Round #340 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1453563300,
    "relativeTimeSeconds": 138915979
    },
    {
    "id": 620,
    "name": "Educational Codeforces Round 6",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1453388400,
    "relativeTimeSeconds": 139090879
    },
    {
    "id": 613,
    "name": "Codeforces Round #339 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1452789300,
    "relativeTimeSeconds": 139689979
    },
    {
    "id": 614,
    "name": "Codeforces Round #339 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1452789300,
    "relativeTimeSeconds": 139689979
    },
    {
    "id": 616,
    "name": "Educational Codeforces Round 5",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1452524400,
    "relativeTimeSeconds": 139954879
    },
    {
    "id": 615,
    "name": "Codeforces Round #338 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1452261900,
    "relativeTimeSeconds": 140217379
    },
    {
    "id": 611,
    "name": "Good Bye 2015",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1451487900,
    "relativeTimeSeconds": 140991379
    },
    {
    "id": 610,
    "name": "Codeforces Round #337 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1451215200,
    "relativeTimeSeconds": 141264079
    },
    {
    "id": 612,
    "name": "Educational Codeforces Round 4",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1451055600,
    "relativeTimeSeconds": 141423680
    },
    {
    "id": 607,
    "name": "Codeforces Round #336 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1450888500,
    "relativeTimeSeconds": 141590779
    },
    {
    "id": 608,
    "name": "Codeforces Round #336 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1450888500,
    "relativeTimeSeconds": 141590780
    },
    {
    "id": 609,
    "name": "Educational Codeforces Round 3",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1450537200,
    "relativeTimeSeconds": 141942079
    },
    {
    "id": 605,
    "name": "Codeforces Round #335 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1449677100,
    "relativeTimeSeconds": 142802179
    },
    {
    "id": 606,
    "name": "Codeforces Round #335 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1449677100,
    "relativeTimeSeconds": 142802180
    },
    {
    "id": 603,
    "name": "Codeforces Round #334 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1448984100,
    "relativeTimeSeconds": 143495180
    },
    {
    "id": 604,
    "name": "Codeforces Round #334 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1448984100,
    "relativeTimeSeconds": 143495180
    },
    {
    "id": 600,
    "name": "Educational Codeforces Round 2",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1448636400,
    "relativeTimeSeconds": 143842879
    },
    {
    "id": 601,
    "name": "Codeforces Round #333 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1448382900,
    "relativeTimeSeconds": 144096380
    },
    {
    "id": 602,
    "name": "Codeforces Round #333 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1448382900,
    "relativeTimeSeconds": 144096379
    },
    {
    "id": 599,
    "name": "Codeforces Round #332 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1448037300,
    "relativeTimeSeconds": 144441980
    },
    {
    "id": 596,
    "name": "Codeforces Round #331 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1447605300,
    "relativeTimeSeconds": 144873979
    },
    {
    "id": 598,
    "name": "Educational Codeforces Round 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1447426800,
    "relativeTimeSeconds": 145052479
    },
    {
    "id": 597,
    "name": "Testing Round #12",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 5400,
    "startTimeSeconds": 1447264800,
    "relativeTimeSeconds": 145214479
    },
    {
    "id": 594,
    "name": "Codeforces Round #330 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1447000200,
    "relativeTimeSeconds": 145479079
    },
    {
    "id": 595,
    "name": "Codeforces Round #330 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1447000200,
    "relativeTimeSeconds": 145479079
    },
    {
    "id": 593,
    "name": "Codeforces Round #329 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1446655500,
    "relativeTimeSeconds": 145823779
    },
    {
    "id": 592,
    "name": "Codeforces Round #328 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1446309000,
    "relativeTimeSeconds": 146170279
    },
    {
    "id": 590,
    "name": "Codeforces Round #327 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1445763600,
    "relativeTimeSeconds": 146715680
    },
    {
    "id": 591,
    "name": "Codeforces Round #327 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1445763600,
    "relativeTimeSeconds": 146715679
    },
    {
    "id": 589,
    "name": "2015-2016 ACM-ICPC, NEERC, Southern Subregional Contest (Online Mirror, ACM-ICPC Rules, Teams Preferred)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1445068800,
    "relativeTimeSeconds": 147410479
    },
    {
    "id": 587,
    "name": "Codeforces Round #326 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1444926600,
    "relativeTimeSeconds": 147552680
    },
    {
    "id": 588,
    "name": "Codeforces Round #326 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1444926600,
    "relativeTimeSeconds": 147552679
    },
    {
    "id": 585,
    "name": "Codeforces Round #325 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1444641000,
    "relativeTimeSeconds": 147838279
    },
    {
    "id": 586,
    "name": "Codeforces Round #325 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1444641000,
    "relativeTimeSeconds": 147838280
    },
    {
    "id": 584,
    "name": "Codeforces Round #324 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1444149000,
    "relativeTimeSeconds": 148330279
    },
    {
    "id": 582,
    "name": "Codeforces Round #323 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1443890700,
    "relativeTimeSeconds": 148588580
    },
    {
    "id": 583,
    "name": "Codeforces Round #323 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1443890700,
    "relativeTimeSeconds": 148588579
    },
    {
    "id": 581,
    "name": "Codeforces Round #322 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1443430800,
    "relativeTimeSeconds": 149048479
    },
    {
    "id": 580,
    "name": "Codeforces Round #321 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1442939400,
    "relativeTimeSeconds": 149539879
    },
    {
    "id": 578,
    "name": "Codeforces Round #320 (Div. 1) [Bayan Thanks-Round]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1442416500,
    "relativeTimeSeconds": 150062779
    },
    {
    "id": 579,
    "name": "Codeforces Round #320 (Div. 2) [Bayan Thanks-Round]",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1442416500,
    "relativeTimeSeconds": 150062779
    },
    {
    "id": 576,
    "name": "Codeforces Round #319 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1441902600,
    "relativeTimeSeconds": 150576679
    },
    {
    "id": 577,
    "name": "Codeforces Round #319 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1441902600,
    "relativeTimeSeconds": 150576679
    },
    {
    "id": 575,
    "name": "Bubble Cup 8 - Finals [Online Mirror]",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1441526400,
    "relativeTimeSeconds": 150952879
    },
    {
    "id": 573,
    "name": "Codeforces Round #318 [RussianCodeCup Thanks-Round] (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1440865800,
    "relativeTimeSeconds": 151613479
    },
    {
    "id": 574,
    "name": "Codeforces Round #318 [RussianCodeCup Thanks-Round] (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1440865800,
    "relativeTimeSeconds": 151613479
    },
    {
    "id": 571,
    "name": "Codeforces Round #317 [AimFund Thanks-Round] (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1440261000,
    "relativeTimeSeconds": 152218280
    },
    {
    "id": 572,
    "name": "Codeforces Round #317 [AimFund Thanks-Round] (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1440261000,
    "relativeTimeSeconds": 152218279
    },
    {
    "id": 570,
    "name": "Codeforces Round #316 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1439483400,
    "relativeTimeSeconds": 152995879
    },
    {
    "id": 568,
    "name": "Codeforces Round #315 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1439224200,
    "relativeTimeSeconds": 153255080
    },
    {
    "id": 569,
    "name": "Codeforces Round #315 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1439224200,
    "relativeTimeSeconds": 153255079
    },
    {
    "id": 567,
    "name": "Codeforces Round #Pi (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1438790400,
    "relativeTimeSeconds": 153688879
    },
    {
    "id": 566,
    "name": "VK Cup 2015 - Finals, online mirror",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1438273200,
    "relativeTimeSeconds": 154206079
    },
    {
    "id": 562,
    "name": "VK Cup 2015 - Finals",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1437898500,
    "relativeTimeSeconds": 154580779
    },
    {
    "id": 559,
    "name": "Codeforces Round #313 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1437573600,
    "relativeTimeSeconds": 154905679
    },
    {
    "id": 560,
    "name": "Codeforces Round #313 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1437573600,
    "relativeTimeSeconds": 154905679
    },
    {
    "id": 558,
    "name": "Codeforces Round #312 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1436886600,
    "relativeTimeSeconds": 155592679
    },
    {
    "id": 557,
    "name": "Codeforces Round #311 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1435676400,
    "relativeTimeSeconds": 156802879
    },
    {
    "id": 555,
    "name": "Codeforces Round #310 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1435414200,
    "relativeTimeSeconds": 157065079
    },
    {
    "id": 556,
    "name": "Codeforces Round #310 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1435414200,
    "relativeTimeSeconds": 157065079
    },
    {
    "id": 553,
    "name": "Codeforces Round #309 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1435163400,
    "relativeTimeSeconds": 157315879
    },
    {
    "id": 554,
    "name": "Codeforces Round #309 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1435163400,
    "relativeTimeSeconds": 157315879
    },
    {
    "id": 552,
    "name": "Codeforces Round #308 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1434645000,
    "relativeTimeSeconds": 157834279
    },
    {
    "id": 551,
    "name": "Codeforces Round #307 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1434127500,
    "relativeTimeSeconds": 158351779
    },
    {
    "id": 549,
    "name": "Looksery Cup 2015",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1433595600,
    "relativeTimeSeconds": 158883679
    },
    {
    "id": 550,
    "name": "Codeforces Round #306 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1433435400,
    "relativeTimeSeconds": 159043880
    },
    {
    "id": 547,
    "name": "Codeforces Round #305 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1432658100,
    "relativeTimeSeconds": 159821179
    },
    {
    "id": 548,
    "name": "Codeforces Round #305 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1432658100,
    "relativeTimeSeconds": 159821179
    },
    {
    "id": 546,
    "name": "Codeforces Round #304 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1432312200,
    "relativeTimeSeconds": 160167079
    },
    {
    "id": 545,
    "name": "Codeforces Round #303 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1432053000,
    "relativeTimeSeconds": 160426279
    },
    {
    "id": 543,
    "name": "Codeforces Round #302 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1431016200,
    "relativeTimeSeconds": 161463079
    },
    {
    "id": 544,
    "name": "Codeforces Round #302 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1431016200,
    "relativeTimeSeconds": 161463079
    },
    {
    "id": 541,
    "name": "VK Cup 2015 - Раунд 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1430668800,
    "relativeTimeSeconds": 161810480
    },
    {
    "id": 542,
    "name": "VK Cup 2015 - Round 3 (unofficial online mirror, Div. 1 only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1430668800,
    "relativeTimeSeconds": 161810479
    },
    {
    "id": 540,
    "name": "Codeforces Round #301 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1430411400,
    "relativeTimeSeconds": 162067879
    },
    {
    "id": 538,
    "name": "Codeforces Round #300",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1430064000,
    "relativeTimeSeconds": 162415279
    },
    {
    "id": 537,
    "name": "VK Cup 2015 - Wild Card Round 2",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1429381800,
    "relativeTimeSeconds": 163097479
    },
    {
    "id": 532,
    "name": "VK Cup 2015 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1429286400,
    "relativeTimeSeconds": 163192879
    },
    {
    "id": 533,
    "name": "VK Cup 2015 - Round 2 (unofficial online mirror, Div. 1 only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1429286400,
    "relativeTimeSeconds": 163192879
    },
    {
    "id": 535,
    "name": "Codeforces Round #299 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1429029300,
    "relativeTimeSeconds": 163449979
    },
    {
    "id": 536,
    "name": "Codeforces Round #299 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1429029300,
    "relativeTimeSeconds": 163449979
    },
    {
    "id": 534,
    "name": "Codeforces Round #298 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1428854400,
    "relativeTimeSeconds": 163624879
    },
    {
    "id": 526,
    "name": "ZeptoLab Code Rush 2015",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1428165300,
    "relativeTimeSeconds": 164313979
    },
    {
    "id": 530,
    "name": "VK Cup 2015 - Wild Card Round 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1427562000,
    "relativeTimeSeconds": 164917279
    },
    {
    "id": 531,
    "name": "VK Cup 2015 - Wild Card Round 1 (Online Mirror)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1427562000,
    "relativeTimeSeconds": 164917279
    },
    {
    "id": 525,
    "name": "Codeforces Round #297 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1427387400,
    "relativeTimeSeconds": 165091879
    },
    {
    "id": 529,
    "name": "VK Cup 2015 - Round 1 (unofficial online mirror, Div. 1 only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1426956300,
    "relativeTimeSeconds": 165522979
    },
    {
    "id": 524,
    "name": "VK Cup 2015 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1426946400,
    "relativeTimeSeconds": 165532879
    },
    {
    "id": 527,
    "name": "Codeforces Round #296 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1426610700,
    "relativeTimeSeconds": 165868579
    },
    {
    "id": 528,
    "name": "Codeforces Round #296 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1426610700,
    "relativeTimeSeconds": 165868580
    },
    {
    "id": 523,
    "name": "VK Cup 2015 - Qualification Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1426345200,
    "relativeTimeSeconds": 166134079
    },
    {
    "id": 522,
    "name": "VK Cup 2015 - Qualification Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1425740400,
    "relativeTimeSeconds": 166738879
    },
    {
    "id": 520,
    "name": "Codeforces Round #295 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1425279600,
    "relativeTimeSeconds": 167199679
    },
    {
    "id": 521,
    "name": "Codeforces Round #295 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1425279600,
    "relativeTimeSeconds": 167199679
    },
    {
    "id": 519,
    "name": "Codeforces Round #294 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1425128400,
    "relativeTimeSeconds": 167350879
    },
    {
    "id": 518,
    "name": "Codeforces Round #293 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1424795400,
    "relativeTimeSeconds": 167683879
    },
    {
    "id": 515,
    "name": "Codeforces Round #292 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1424190900,
    "relativeTimeSeconds": 168288379
    },
    {
    "id": 516,
    "name": "Codeforces Round #292 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1424190900,
    "relativeTimeSeconds": 168288379
    },
    {
    "id": 514,
    "name": "Codeforces Round #291 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1423931400,
    "relativeTimeSeconds": 168547879
    },
    {
    "id": 513,
    "name": "Rockethon 2015",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 11700,
    "startTimeSeconds": 1423328400,
    "relativeTimeSeconds": 169150879
    },
    {
    "id": 512,
    "name": "Codeforces Round #290 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1422894600,
    "relativeTimeSeconds": 169584679
    },
    {
    "id": 510,
    "name": "Codeforces Round #290 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1422894600,
    "relativeTimeSeconds": 169584679
    },
    {
    "id": 509,
    "name": "Codeforces Round #289 (Div. 2, ACM ICPC Rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1422705600,
    "relativeTimeSeconds": 169773679
    },
    {
    "id": 508,
    "name": "Codeforces Round #288 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1422376200,
    "relativeTimeSeconds": 170103079
    },
    {
    "id": 507,
    "name": "Codeforces Round #287 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1422028800,
    "relativeTimeSeconds": 170450479
    },
    {
    "id": 505,
    "name": "Codeforces Round #286 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1421586000,
    "relativeTimeSeconds": 170893280
    },
    {
    "id": 506,
    "name": "Codeforces Round #286 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1421586000,
    "relativeTimeSeconds": 170893279
    },
    {
    "id": 501,
    "name": "Codeforces Round #285 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1421053200,
    "relativeTimeSeconds": 171426080
    },
    {
    "id": 504,
    "name": "Codeforces Round #285 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1421053200,
    "relativeTimeSeconds": 171426079
    },
    {
    "id": 500,
    "name": "Good Bye 2014",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1419951600,
    "relativeTimeSeconds": 172527679
    },
    {
    "id": 498,
    "name": "Codeforces Round #284 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1419438600,
    "relativeTimeSeconds": 173040679
    },
    {
    "id": 499,
    "name": "Codeforces Round #284 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1419438600,
    "relativeTimeSeconds": 173040679
    },
    {
    "id": 496,
    "name": "Codeforces Round #283 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1418833800,
    "relativeTimeSeconds": 173645479
    },
    {
    "id": 497,
    "name": "Codeforces Round #283 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1418833800,
    "relativeTimeSeconds": 173645479
    },
    {
    "id": 494,
    "name": "Codeforces Round #282 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1418488200,
    "relativeTimeSeconds": 173991080
    },
    {
    "id": 495,
    "name": "Codeforces Round #282 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1418488200,
    "relativeTimeSeconds": 173991079
    },
    {
    "id": 493,
    "name": "Codeforces Round #281 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1417618800,
    "relativeTimeSeconds": 174860479
    },
    {
    "id": 492,
    "name": "Codeforces Round #280 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1417451400,
    "relativeTimeSeconds": 175027880
    },
    {
    "id": 490,
    "name": "Codeforces Round #279 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1416733800,
    "relativeTimeSeconds": 175745479
    },
    {
    "id": 487,
    "name": "Codeforces Round #278 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1416590400,
    "relativeTimeSeconds": 175888879
    },
    {
    "id": 488,
    "name": "Codeforces Round #278 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1416590400,
    "relativeTimeSeconds": 175888879
    },
    {
    "id": 491,
    "name": "Testing Round #11",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 5400,
    "startTimeSeconds": 1416519000,
    "relativeTimeSeconds": 175960279
    },
    {
    "id": 489,
    "name": "Codeforces Round #277.5 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1416238500,
    "relativeTimeSeconds": 176240779
    },
    {
    "id": 486,
    "name": "Codeforces Round #277 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1415718000,
    "relativeTimeSeconds": 176761279
    },
    {
    "id": 484,
    "name": "Codeforces Round #276 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1415205000,
    "relativeTimeSeconds": 177274279
    },
    {
    "id": 485,
    "name": "Codeforces Round #276 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1415205000,
    "relativeTimeSeconds": 177274279
    },
    {
    "id": 482,
    "name": "Codeforces Round #275 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1414170000,
    "relativeTimeSeconds": 178309279
    },
    {
    "id": 483,
    "name": "Codeforces Round #275 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1414170000,
    "relativeTimeSeconds": 178309280
    },
    {
    "id": 479,
    "name": "Codeforces Round #274 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1413709200,
    "relativeTimeSeconds": 178770079
    },
    {
    "id": 480,
    "name": "Codeforces Round #274 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1413709200,
    "relativeTimeSeconds": 178770079
    },
    {
    "id": 478,
    "name": "Codeforces Round #273 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1413474000,
    "relativeTimeSeconds": 179005279
    },
    {
    "id": 476,
    "name": "Codeforces Round #272 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1413122400,
    "relativeTimeSeconds": 179356879
    },
    {
    "id": 477,
    "name": "Codeforces Round #272 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1413122400,
    "relativeTimeSeconds": 179356880
    },
    {
    "id": 474,
    "name": "Codeforces Round #271 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1412609400,
    "relativeTimeSeconds": 179869879
    },
    {
    "id": 475,
    "name": "Bayan 2015 Contest Warm Up",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1412514000,
    "relativeTimeSeconds": 179965279
    },
    {
    "id": 472,
    "name": "Codeforces Round #270",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1411918500,
    "relativeTimeSeconds": 180560779
    },
    {
    "id": 471,
    "name": "Codeforces Round #269 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1411745400,
    "relativeTimeSeconds": 180733879
    },
    {
    "id": 468,
    "name": "Codeforces Round #268 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1411218000,
    "relativeTimeSeconds": 181261280
    },
    {
    "id": 469,
    "name": "Codeforces Round #268 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1411218000,
    "relativeTimeSeconds": 181261279
    },
    {
    "id": 467,
    "name": "Codeforces Round #267 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1411054200,
    "relativeTimeSeconds": 181425079
    },
    {
    "id": 470,
    "name": "Surprise Language Round #7",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1410622200,
    "relativeTimeSeconds": 181857080
    },
    {
    "id": 466,
    "name": "Codeforces Round #266 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1410535800,
    "relativeTimeSeconds": 181943479
    },
    {
    "id": 464,
    "name": "Codeforces Round #265 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1410103800,
    "relativeTimeSeconds": 182375479
    },
    {
    "id": 465,
    "name": "Codeforces Round #265 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1410103800,
    "relativeTimeSeconds": 182375479
    },
    {
    "id": 463,
    "name": "Codeforces Round #264 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1409383800,
    "relativeTimeSeconds": 183095480
    },
    {
    "id": 461,
    "name": "Codeforces Round #263 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1409061600,
    "relativeTimeSeconds": 183417679
    },
    {
    "id": 462,
    "name": "Codeforces Round #263 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1409061600,
    "relativeTimeSeconds": 183417679
    },
    {
    "id": 460,
    "name": "Codeforces Round #262 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1408548600,
    "relativeTimeSeconds": 183930680
    },
    {
    "id": 459,
    "name": "Codeforces Round #261 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1408116600,
    "relativeTimeSeconds": 184362679
    },
    {
    "id": 457,
    "name": "MemSQL Start[c]UP 2.0 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1407690000,
    "relativeTimeSeconds": 184789280
    },
    {
    "id": 458,
    "name": "MemSQL Start[c]UP 2.0 - Round 2 - Online Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1407690000,
    "relativeTimeSeconds": 184789279
    },
    {
    "id": 455,
    "name": "Codeforces Round #260 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1407511800,
    "relativeTimeSeconds": 184967479
    },
    {
    "id": 456,
    "name": "Codeforces Round #260 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1407511800,
    "relativeTimeSeconds": 184967479
    },
    {
    "id": 453,
    "name": "Codeforces Round #259 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1406907000,
    "relativeTimeSeconds": 185572280
    },
    {
    "id": 454,
    "name": "Codeforces Round #259 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1406907000,
    "relativeTimeSeconds": 185572279
    },
    {
    "id": 452,
    "name": "MemSQL Start[c]UP 2.0 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1406480400,
    "relativeTimeSeconds": 185998880
    },
    {
    "id": 451,
    "name": "Codeforces Round #258 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1406215800,
    "relativeTimeSeconds": 186263480
    },
    {
    "id": 449,
    "name": "Codeforces Round #257 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1405774800,
    "relativeTimeSeconds": 186704479
    },
    {
    "id": 450,
    "name": "Codeforces Round #257 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1405774800,
    "relativeTimeSeconds": 186704479
    },
    {
    "id": 448,
    "name": "Codeforces Round #256 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1405605600,
    "relativeTimeSeconds": 186873680
    },
    {
    "id": 446,
    "name": "Codeforces Round #FF (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1405256400,
    "relativeTimeSeconds": 187222879
    },
    {
    "id": 447,
    "name": "Codeforces Round #FF (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1405256400,
    "relativeTimeSeconds": 187222879
    },
    {
    "id": 444,
    "name": "Codeforces Round #254 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1404651900,
    "relativeTimeSeconds": 187827379
    },
    {
    "id": 445,
    "name": "Codeforces Round #254 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1404651900,
    "relativeTimeSeconds": 187827379
    },
    {
    "id": 442,
    "name": "Codeforces Round #253 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1403191800,
    "relativeTimeSeconds": 189287479
    },
    {
    "id": 443,
    "name": "Codeforces Round #253 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1403191800,
    "relativeTimeSeconds": 189287479
    },
    {
    "id": 436,
    "name": "Zepto Code Rush 2014",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1402673400,
    "relativeTimeSeconds": 189805879
    },
    {
    "id": 441,
    "name": "Codeforces Round #252 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1402241400,
    "relativeTimeSeconds": 190237879
    },
    {
    "id": 439,
    "name": "Codeforces Round #251 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1401895800,
    "relativeTimeSeconds": 190583479
    },
    {
    "id": 440,
    "name": "Testing Round #10",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 5400,
    "startTimeSeconds": 1401809400,
    "relativeTimeSeconds": 190669879
    },
    {
    "id": 437,
    "name": "Codeforces Round #250 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1401627600,
    "relativeTimeSeconds": 190851680
    },
    {
    "id": 438,
    "name": "Codeforces Round #250 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1401627600,
    "relativeTimeSeconds": 190851679
    },
    {
    "id": 435,
    "name": "Codeforces Round #249 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1401463800,
    "relativeTimeSeconds": 191015480
    },
    {
    "id": 433,
    "name": "Codeforces Round #248 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1400914800,
    "relativeTimeSeconds": 191564479
    },
    {
    "id": 434,
    "name": "Codeforces Round #248 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1400914800,
    "relativeTimeSeconds": 191564479
    },
    {
    "id": 431,
    "name": "Codeforces Round #247 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1400686200,
    "relativeTimeSeconds": 191793079
    },
    {
    "id": 432,
    "name": "Codeforces Round #246 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1400167800,
    "relativeTimeSeconds": 192311479
    },
    {
    "id": 429,
    "name": "Codeforces Round #245 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1399822800,
    "relativeTimeSeconds": 192656479
    },
    {
    "id": 430,
    "name": "Codeforces Round #245 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1399822800,
    "relativeTimeSeconds": 192656479
    },
    {
    "id": 427,
    "name": "Codeforces Round #244 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1399044600,
    "relativeTimeSeconds": 193434679
    },
    {
    "id": 425,
    "name": "Codeforces Round #243 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1398612600,
    "relativeTimeSeconds": 193866679
    },
    {
    "id": 426,
    "name": "Codeforces Round #243 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1398612600,
    "relativeTimeSeconds": 193866679
    },
    {
    "id": 424,
    "name": "Codeforces Round #242 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1398409200,
    "relativeTimeSeconds": 194070080
    },
    {
    "id": 419,
    "name": "Coder-Strike 2014 - Finals",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1398169200,
    "relativeTimeSeconds": 194310079
    },
    {
    "id": 420,
    "name": "Coder-Strike 2014 - Finals (online edition, Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1398169140,
    "relativeTimeSeconds": 194310139
    },
    {
    "id": 421,
    "name": "Coder-Strike 2014 - Finals (online edition, Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1398168900,
    "relativeTimeSeconds": 194310379
    },
    {
    "id": 413,
    "name": "Coder-Strike 2014 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1397977200,
    "relativeTimeSeconds": 194502079
    },
    {
    "id": 412,
    "name": "Coder-Strike 2014 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1397837400,
    "relativeTimeSeconds": 194641879
    },
    {
    "id": 417,
    "name": "RCC 2014 Warmup (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1397749200,
    "relativeTimeSeconds": 194730079
    },
    {
    "id": 418,
    "name": "RCC 2014 Warmup (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1397749200,
    "relativeTimeSeconds": 194730080
    },
    {
    "id": 411,
    "name": "Coder-Strike 2014 - Qualification Round",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1397505600,
    "relativeTimeSeconds": 194973679
    },
    {
    "id": 416,
    "name": "Codeforces Round #241 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1397376000,
    "relativeTimeSeconds": 195103279
    },
    {
    "id": 414,
    "name": "Codeforces Round #240 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1396798800,
    "relativeTimeSeconds": 195680479
    },
    {
    "id": 415,
    "name": "Codeforces Round #240 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1396798800,
    "relativeTimeSeconds": 195680480
    },
    {
    "id": 409,
    "name": "April Fools Day Contest 2014",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1396366200,
    "relativeTimeSeconds": 196113079
    },
    {
    "id": 407,
    "name": "Codeforces Round #239 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1396162800,
    "relativeTimeSeconds": 196316479
    },
    {
    "id": 408,
    "name": "Codeforces Round #239 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1396162800,
    "relativeTimeSeconds": 196316479
    },
    {
    "id": 405,
    "name": "Codeforces Round #238 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1395502200,
    "relativeTimeSeconds": 196977079
    },
    {
    "id": 406,
    "name": "Codeforces Round #238 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1395502200,
    "relativeTimeSeconds": 196977080
    },
    {
    "id": 404,
    "name": "Codeforces Round #237 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1395243000,
    "relativeTimeSeconds": 197236279
    },
    {
    "id": 402,
    "name": "Codeforces Round #236 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1394983800,
    "relativeTimeSeconds": 197495479
    },
    {
    "id": 403,
    "name": "Codeforces Round #236 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1394983800,
    "relativeTimeSeconds": 197495479
    },
    {
    "id": 401,
    "name": "Codeforces Round #235 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1394465400,
    "relativeTimeSeconds": 198013879
    },
    {
    "id": 400,
    "name": "Codeforces Round #234 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1394033400,
    "relativeTimeSeconds": 198445880
    },
    {
    "id": 398,
    "name": "Codeforces Round #233 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1393687800,
    "relativeTimeSeconds": 198791479
    },
    {
    "id": 399,
    "name": "Codeforces Round #233 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1393687800,
    "relativeTimeSeconds": 198791479
    },
    {
    "id": 396,
    "name": "Codeforces Round #232 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1393428600,
    "relativeTimeSeconds": 199050679
    },
    {
    "id": 397,
    "name": "Codeforces Round #232 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1393428600,
    "relativeTimeSeconds": 199050679
    },
    {
    "id": 394,
    "name": "Codeforces Round #231 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1392910200,
    "relativeTimeSeconds": 199569079
    },
    {
    "id": 392,
    "name": "Codeforces Round #230 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1392728400,
    "relativeTimeSeconds": 199750879
    },
    {
    "id": 393,
    "name": "Codeforces Round #230 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1392728400,
    "relativeTimeSeconds": 199750879
    },
    {
    "id": 391,
    "name": "Rockethon 2014",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1392573600,
    "relativeTimeSeconds": 199905679
    },
    {
    "id": 390,
    "name": "Codeforces Round #229 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1392132600,
    "relativeTimeSeconds": 200346680
    },
    {
    "id": 388,
    "name": "Codeforces Round #228 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1391442000,
    "relativeTimeSeconds": 201037280
    },
    {
    "id": 389,
    "name": "Codeforces Round #228 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1391442000,
    "relativeTimeSeconds": 201037279
    },
    {
    "id": 387,
    "name": "Codeforces Round #227 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1391095800,
    "relativeTimeSeconds": 201383479
    },
    {
    "id": 385,
    "name": "Codeforces Round #226 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1390577700,
    "relativeTimeSeconds": 201901580
    },
    {
    "id": 383,
    "name": "Codeforces Round #225 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1390231800,
    "relativeTimeSeconds": 202247479
    },
    {
    "id": 384,
    "name": "Codeforces Round #225 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1390231800,
    "relativeTimeSeconds": 202247479
    },
    {
    "id": 382,
    "name": "Codeforces Round #224 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1389972600,
    "relativeTimeSeconds": 202506679
    },
    {
    "id": 386,
    "name": "Testing Round #9",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 5400,
    "startTimeSeconds": 1389906900,
    "relativeTimeSeconds": 202572379
    },
    {
    "id": 380,
    "name": "Codeforces Round #223 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1389540600,
    "relativeTimeSeconds": 202938679
    },
    {
    "id": 381,
    "name": "Codeforces Round #223 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1389540600,
    "relativeTimeSeconds": 202938679
    },
    {
    "id": 379,
    "name": "Good Bye 2013",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1388417400,
    "relativeTimeSeconds": 204061879
    },
    {
    "id": 377,
    "name": "Codeforces Round #222 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1388331000,
    "relativeTimeSeconds": 204148279
    },
    {
    "id": 378,
    "name": "Codeforces Round #222 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1388331000,
    "relativeTimeSeconds": 204148280
    },
    {
    "id": 375,
    "name": "Codeforces Round #221 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1387893600,
    "relativeTimeSeconds": 204585679
    },
    {
    "id": 376,
    "name": "Codeforces Round #221 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1387893600,
    "relativeTimeSeconds": 204585679
    },
    {
    "id": 374,
    "name": "Codeforces Round #220 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1387380600,
    "relativeTimeSeconds": 205098679
    },
    {
    "id": 372,
    "name": "Codeforces Round #219 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1386943200,
    "relativeTimeSeconds": 205536079
    },
    {
    "id": 373,
    "name": "Codeforces Round #219 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1386943200,
    "relativeTimeSeconds": 205536079
    },
    {
    "id": 371,
    "name": "Codeforces Round #218 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1386493200,
    "relativeTimeSeconds": 205986079
    },
    {
    "id": 370,
    "name": "Codeforces Round #217 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1386399600,
    "relativeTimeSeconds": 206079679
    },
    {
    "id": 369,
    "name": "Codeforces Round #216 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1385739000,
    "relativeTimeSeconds": 206740279
    },
    {
    "id": 367,
    "name": "Codeforces Round #215 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1385479800,
    "relativeTimeSeconds": 206999479
    },
    {
    "id": 368,
    "name": "Codeforces Round #215 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1385479800,
    "relativeTimeSeconds": 206999479
    },
    {
    "id": 366,
    "name": "Codeforces Round #214 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1385307000,
    "relativeTimeSeconds": 207172279
    },
    {
    "id": 364,
    "name": "Codeforces Round #213 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1384875000,
    "relativeTimeSeconds": 207604279
    },
    {
    "id": 365,
    "name": "Codeforces Round #213 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1384875000,
    "relativeTimeSeconds": 207604279
    },
    {
    "id": 362,
    "name": "Codeforces Round #212 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1384443000,
    "relativeTimeSeconds": 208036279
    },
    {
    "id": 363,
    "name": "Codeforces Round #211 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1384156800,
    "relativeTimeSeconds": 208322479
    },
    {
    "id": 360,
    "name": "Codeforces Round #210 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1384102800,
    "relativeTimeSeconds": 208376479
    },
    {
    "id": 361,
    "name": "Codeforces Round #210 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1384102800,
    "relativeTimeSeconds": 208376480
    },
    {
    "id": 359,
    "name": "Codeforces Round #209 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1383379200,
    "relativeTimeSeconds": 209100079
    },
    {
    "id": 358,
    "name": "Codeforces Round #208 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1382715000,
    "relativeTimeSeconds": 209764279
    },
    {
    "id": 356,
    "name": "Codeforces Round #207 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1381838400,
    "relativeTimeSeconds": 210640879
    },
    {
    "id": 357,
    "name": "Codeforces Round #207 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1381838400,
    "relativeTimeSeconds": 210640879
    },
    {
    "id": 354,
    "name": "Codeforces Round #206 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1381678200,
    "relativeTimeSeconds": 210801079
    },
    {
    "id": 355,
    "name": "Codeforces Round #206 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1381678200,
    "relativeTimeSeconds": 210801079
    },
    {
    "id": 353,
    "name": "Codeforces Round #205 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1381419000,
    "relativeTimeSeconds": 211060280
    },
    {
    "id": 351,
    "name": "Codeforces Round #204 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1380900600,
    "relativeTimeSeconds": 211578680
    },
    {
    "id": 352,
    "name": "Codeforces Round #204 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1380900600,
    "relativeTimeSeconds": 211578680
    },
    {
    "id": 350,
    "name": "Codeforces Round #203 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1380641400,
    "relativeTimeSeconds": 211837880
    },
    {
    "id": 348,
    "name": "Codeforces Round #202 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1380295800,
    "relativeTimeSeconds": 212183479
    },
    {
    "id": 349,
    "name": "Codeforces Round #202 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1380295800,
    "relativeTimeSeconds": 212183479
    },
    {
    "id": 346,
    "name": "Codeforces Round #201 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1379691000,
    "relativeTimeSeconds": 212788280
    },
    {
    "id": 347,
    "name": "Codeforces Round #201 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1379691000,
    "relativeTimeSeconds": 212788280
    },
    {
    "id": 343,
    "name": "Codeforces Round #200 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1379172600,
    "relativeTimeSeconds": 213306679
    },
    {
    "id": 344,
    "name": "Codeforces Round #200 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1379172600,
    "relativeTimeSeconds": 213306679
    },
    {
    "id": 345,
    "name": "Friday the 13th, Programmers Day",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1379086800,
    "relativeTimeSeconds": 213392480
    },
    {
    "id": 342,
    "name": "Codeforces Round #199 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1378540800,
    "relativeTimeSeconds": 213938479
    },
    {
    "id": 340,
    "name": "Codeforces Round #198 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1377876600,
    "relativeTimeSeconds": 214602679
    },
    {
    "id": 341,
    "name": "Codeforces Round #198 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1377876600,
    "relativeTimeSeconds": 214602679
    },
    {
    "id": 339,
    "name": "Codeforces Round #197 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1377531000,
    "relativeTimeSeconds": 214948280
    },
    {
    "id": 337,
    "name": "Codeforces Round #196 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1376668800,
    "relativeTimeSeconds": 215810479
    },
    {
    "id": 338,
    "name": "Codeforces Round #196 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1376668800,
    "relativeTimeSeconds": 215810479
    },
    {
    "id": 336,
    "name": "Codeforces Round #195 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1376062200,
    "relativeTimeSeconds": 216417080
    },
    {
    "id": 326,
    "name": "MemSQL start[c]up Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1375549200,
    "relativeTimeSeconds": 216930079
    },
    {
    "id": 335,
    "name": "MemSQL start[c]up Round 2 - online version",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1375549200,
    "relativeTimeSeconds": 216930079
    },
    {
    "id": 333,
    "name": "Codeforces Round #194 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1374913800,
    "relativeTimeSeconds": 217565479
    },
    {
    "id": 334,
    "name": "Codeforces Round #194 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1374913800,
    "relativeTimeSeconds": 217565479
    },
    {
    "id": 332,
    "name": "Codeforces Round #193 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1374679800,
    "relativeTimeSeconds": 217799479
    },
    {
    "id": 329,
    "name": "Codeforces Round #192 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1374327000,
    "relativeTimeSeconds": 218152279
    },
    {
    "id": 330,
    "name": "Codeforces Round #192 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1374327000,
    "relativeTimeSeconds": 218152280
    },
    {
    "id": 331,
    "name": "ABBYY Cup 3.0 - Finals (online version)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1374075000,
    "relativeTimeSeconds": 218404279
    },
    {
    "id": 324,
    "name": "ABBYY Cup 3.0 - Finals",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1374043200,
    "relativeTimeSeconds": 218436080
    },
    {
    "id": 325,
    "name": "MemSQL start[c]up Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1373734800,
    "relativeTimeSeconds": 218744479
    },
    {
    "id": 328,
    "name": "Testing Round #8",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 3600,
    "startTimeSeconds": 1373662800,
    "relativeTimeSeconds": 218816479
    },
    {
    "id": 327,
    "name": "Codeforces Round #191 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1372941000,
    "relativeTimeSeconds": 219538279
    },
    {
    "id": 321,
    "name": "Codeforces Round #190 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1372433400,
    "relativeTimeSeconds": 220045879
    },
    {
    "id": 322,
    "name": "Codeforces Round #190 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1372433400,
    "relativeTimeSeconds": 220045879
    },
    {
    "id": 323,
    "name": "Testing Round #7",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 3600,
    "startTimeSeconds": 1372363200,
    "relativeTimeSeconds": 220116080
    },
    {
    "id": 319,
    "name": "Codeforces Round #189 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1371992400,
    "relativeTimeSeconds": 220486880
    },
    {
    "id": 320,
    "name": "Codeforces Round #189 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1371992400,
    "relativeTimeSeconds": 220486879
    },
    {
    "id": 317,
    "name": "Codeforces Round #188 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1371223800,
    "relativeTimeSeconds": 221255480
    },
    {
    "id": 318,
    "name": "Codeforces Round #188 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1371223800,
    "relativeTimeSeconds": 221255479
    },
    {
    "id": 316,
    "name": "ABBYY Cup 3.0",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 14400,
    "startTimeSeconds": 1371042000,
    "relativeTimeSeconds": 221437279
    },
    {
    "id": 314,
    "name": "Codeforces Round #187 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1370619000,
    "relativeTimeSeconds": 221860279
    },
    {
    "id": 315,
    "name": "Codeforces Round #187 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1370619000,
    "relativeTimeSeconds": 221860280
    },
    {
    "id": 313,
    "name": "Codeforces Round #186 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1369927800,
    "relativeTimeSeconds": 222551480
    },
    {
    "id": 311,
    "name": "Codeforces Round #185 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1369582200,
    "relativeTimeSeconds": 222897079
    },
    {
    "id": 312,
    "name": "Codeforces Round #185 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1369582200,
    "relativeTimeSeconds": 222897079
    },
    {
    "id": 305,
    "name": "Codeforces Round #184 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1368968400,
    "relativeTimeSeconds": 223510880
    },
    {
    "id": 309,
    "name": "Croc Champ 2013 - Finals (online version, Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1368803400,
    "relativeTimeSeconds": 223675879
    },
    {
    "id": 308,
    "name": "Croc Champ 2013 - Finals",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1368784800,
    "relativeTimeSeconds": 223694479
    },
    {
    "id": 303,
    "name": "Codeforces Round #183 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1368363600,
    "relativeTimeSeconds": 224115680
    },
    {
    "id": 304,
    "name": "Codeforces Round #183 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1368363600,
    "relativeTimeSeconds": 224115679
    },
    {
    "id": 306,
    "name": "Testing Round #6",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 6000,
    "startTimeSeconds": 1368302400,
    "relativeTimeSeconds": 224176880
    },
    {
    "id": 301,
    "name": "Codeforces Round #182 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1367769900,
    "relativeTimeSeconds": 224709380
    },
    {
    "id": 302,
    "name": "Codeforces Round #182 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1367769900,
    "relativeTimeSeconds": 224709379
    },
    {
    "id": 300,
    "name": "Codeforces Round #181 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1366903800,
    "relativeTimeSeconds": 225575479
    },
    {
    "id": 293,
    "name": "Croc Champ 2013 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1366644900,
    "relativeTimeSeconds": 225834379
    },
    {
    "id": 299,
    "name": "Croc Champ 2013 - Round 2 (Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1366644600,
    "relativeTimeSeconds": 225834679
    },
    {
    "id": 297,
    "name": "Codeforces Round #180 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1366385400,
    "relativeTimeSeconds": 226093879
    },
    {
    "id": 298,
    "name": "Codeforces Round #180 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1366385400,
    "relativeTimeSeconds": 226093879
    },
    {
    "id": 292,
    "name": "Croc Champ 2013 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1366040100,
    "relativeTimeSeconds": 226439179
    },
    {
    "id": 291,
    "name": "Croc Champ 2013 - Qualification Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 172800,
    "startTimeSeconds": 1365796800,
    "relativeTimeSeconds": 226682479
    },
    {
    "id": 295,
    "name": "Codeforces Round #179 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1365694200,
    "relativeTimeSeconds": 226785079
    },
    {
    "id": 296,
    "name": "Codeforces Round #179 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1365694200,
    "relativeTimeSeconds": 226785079
    },
    {
    "id": 294,
    "name": "Codeforces Round #178 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1365348600,
    "relativeTimeSeconds": 227130679
    },
    {
    "id": 288,
    "name": "Codeforces Round #177 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1364916600,
    "relativeTimeSeconds": 227562679
    },
    {
    "id": 289,
    "name": "Codeforces Round #177 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1364916600,
    "relativeTimeSeconds": 227562680
    },
    {
    "id": 290,
    "name": "April Fools Day Contest 2013",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1364830200,
    "relativeTimeSeconds": 227649079
    },
    {
    "id": 286,
    "name": "Codeforces Round #176 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1364025600,
    "relativeTimeSeconds": 228453679
    },
    {
    "id": 287,
    "name": "Codeforces Round #176 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1364025600,
    "relativeTimeSeconds": 228453680
    },
    {
    "id": 285,
    "name": "Codeforces Round #175 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1363879800,
    "relativeTimeSeconds": 228599480
    },
    {
    "id": 283,
    "name": "Codeforces Round #174 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1363534200,
    "relativeTimeSeconds": 228945080
    },
    {
    "id": 284,
    "name": "Codeforces Round #174 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1363534200,
    "relativeTimeSeconds": 228945079
    },
    {
    "id": 282,
    "name": "Codeforces Round #173 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1363188600,
    "relativeTimeSeconds": 229290679
    },
    {
    "id": 280,
    "name": "Codeforces Round #172 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1362929400,
    "relativeTimeSeconds": 229549880
    },
    {
    "id": 281,
    "name": "Codeforces Round #172 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1362929400,
    "relativeTimeSeconds": 229549879
    },
    {
    "id": 279,
    "name": "Codeforces Round #171 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1362411000,
    "relativeTimeSeconds": 230068280
    },
    {
    "id": 277,
    "name": "Codeforces Round #170 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1362065400,
    "relativeTimeSeconds": 230413880
    },
    {
    "id": 278,
    "name": "Codeforces Round #170 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1362065400,
    "relativeTimeSeconds": 230413880
    },
    {
    "id": 276,
    "name": "Codeforces Round #169 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1361719800,
    "relativeTimeSeconds": 230759479
    },
    {
    "id": 274,
    "name": "Codeforces Round #168 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1361374200,
    "relativeTimeSeconds": 231105079
    },
    {
    "id": 275,
    "name": "Codeforces Round #168 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1361374200,
    "relativeTimeSeconds": 231105079
    },
    {
    "id": 272,
    "name": "Codeforces Round #167 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1360769400,
    "relativeTimeSeconds": 231709879
    },
    {
    "id": 273,
    "name": "Codeforces Round #167 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1360769400,
    "relativeTimeSeconds": 231709879
    },
    {
    "id": 271,
    "name": "Codeforces Round #166 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1360596600,
    "relativeTimeSeconds": 231882679
    },
    {
    "id": 269,
    "name": "Codeforces Round #165 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1359732600,
    "relativeTimeSeconds": 232746680
    },
    {
    "id": 270,
    "name": "Codeforces Round #165 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1359732600,
    "relativeTimeSeconds": 232746679
    },
    {
    "id": 268,
    "name": "Codeforces Round #164 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1359387000,
    "relativeTimeSeconds": 233092280
    },
    {
    "id": 266,
    "name": "Codeforces Round #163 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1358868600,
    "relativeTimeSeconds": 233610679
    },
    {
    "id": 264,
    "name": "Codeforces Round #162 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1358686800,
    "relativeTimeSeconds": 233792479
    },
    {
    "id": 265,
    "name": "Codeforces Round #162 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1358686800,
    "relativeTimeSeconds": 233792480
    },
    {
    "id": 263,
    "name": "Codeforces Round #161 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1358350200,
    "relativeTimeSeconds": 234129079
    },
    {
    "id": 261,
    "name": "Codeforces Round #160 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1358091000,
    "relativeTimeSeconds": 234388279
    },
    {
    "id": 262,
    "name": "Codeforces Round #160 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1358091000,
    "relativeTimeSeconds": 234388279
    },
    {
    "id": 267,
    "name": "Codeforces Testing Round #5",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 6300,
    "startTimeSeconds": 1358002800,
    "relativeTimeSeconds": 234476479
    },
    {
    "id": 257,
    "name": "Codeforces Round #159 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1357659000,
    "relativeTimeSeconds": 234820280
    },
    {
    "id": 260,
    "name": "Codeforces Round #158 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1356622500,
    "relativeTimeSeconds": 235856779
    },
    {
    "id": 258,
    "name": "Codeforces Round #157 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1356190200,
    "relativeTimeSeconds": 236289079
    },
    {
    "id": 259,
    "name": "Codeforces Round #157 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1356190200,
    "relativeTimeSeconds": 236289079
    },
    {
    "id": 256,
    "name": "Codeforces Round #156 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1355671800,
    "relativeTimeSeconds": 236807480
    },
    {
    "id": 255,
    "name": "Codeforces Round #156 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1355671800,
    "relativeTimeSeconds": 236807479
    },
    {
    "id": 254,
    "name": "Codeforces Round #155 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1355047200,
    "relativeTimeSeconds": 237432079
    },
    {
    "id": 253,
    "name": "Codeforces Round #154 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1354960800,
    "relativeTimeSeconds": 237518479
    },
    {
    "id": 251,
    "name": "Codeforces Round #153 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1354807800,
    "relativeTimeSeconds": 237671479
    },
    {
    "id": 252,
    "name": "Codeforces Round #153 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1354807800,
    "relativeTimeSeconds": 237671479
    },
    {
    "id": 250,
    "name": "CROC-MBTU 2012, Final Round (Online version, Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1353938400,
    "relativeTimeSeconds": 238540879
    },
    {
    "id": 247,
    "name": "CROC-MBTU 2012, Final Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1353927300,
    "relativeTimeSeconds": 238551979
    },
    {
    "id": 248,
    "name": "Codeforces Round #152 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1353857400,
    "relativeTimeSeconds": 238621879
    },
    {
    "id": 249,
    "name": "Codeforces Round #152 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1353857400,
    "relativeTimeSeconds": 238621879
    },
    {
    "id": 246,
    "name": "Codeforces Round #151 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1353511800,
    "relativeTimeSeconds": 238967479
    },
    {
    "id": 245,
    "name": "CROC-MBTU 2012, Elimination Round (ACM-ICPC)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1353339000,
    "relativeTimeSeconds": 239140279
    },
    {
    "id": 243,
    "name": "Codeforces Round #150 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1353079800,
    "relativeTimeSeconds": 239399479
    },
    {
    "id": 244,
    "name": "Codeforces Round #150 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1353079800,
    "relativeTimeSeconds": 239399479
    },
    {
    "id": 242,
    "name": "Codeforces Round #149 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1352647800,
    "relativeTimeSeconds": 239831480
    },
    {
    "id": 238,
    "name": "Codeforces Round #148 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1352044800,
    "relativeTimeSeconds": 240434480
    },
    {
    "id": 239,
    "name": "Codeforces Round #148 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1352044800,
    "relativeTimeSeconds": 240434480
    },
    {
    "id": 241,
    "name": "Bayan 2012-2013 Elimination Round (ACM ICPC Rules, English statements)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1351783800,
    "relativeTimeSeconds": 240695479
    },
    {
    "id": 237,
    "name": "Codeforces Round #147 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1351179000,
    "relativeTimeSeconds": 241300279
    },
    {
    "id": 235,
    "name": "Codeforces Round #146 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1350803400,
    "relativeTimeSeconds": 241675879
    },
    {
    "id": 236,
    "name": "Codeforces Round #146 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1350803400,
    "relativeTimeSeconds": 241675879
    },
    {
    "id": 234,
    "name": "Codeforces Round #145 (Div. 2, ACM-ICPC Rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 12600,
    "startTimeSeconds": 1350370800,
    "relativeTimeSeconds": 242108479
    },
    {
    "id": 240,
    "name": "Codeforces Round #145 (Div. 1, ACM-ICPC Rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1350370800,
    "relativeTimeSeconds": 242108479
    },
    {
    "id": 232,
    "name": "Codeforces Round #144 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1349969400,
    "relativeTimeSeconds": 242509879
    },
    {
    "id": 233,
    "name": "Codeforces Round #144 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1349969400,
    "relativeTimeSeconds": 242509879
    },
    {
    "id": 231,
    "name": "Codeforces Round #143 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1349623800,
    "relativeTimeSeconds": 242855479
    },
    {
    "id": 229,
    "name": "Codeforces Round #142 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1349105400,
    "relativeTimeSeconds": 243373879
    },
    {
    "id": 230,
    "name": "Codeforces Round #142 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7500,
    "startTimeSeconds": 1349105400,
    "relativeTimeSeconds": 243373880
    },
    {
    "id": 228,
    "name": "Codeforces Round #141 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1348759800,
    "relativeTimeSeconds": 243719479
    },
    {
    "id": 226,
    "name": "Codeforces Round #140 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1348500600,
    "relativeTimeSeconds": 243978679
    },
    {
    "id": 227,
    "name": "Codeforces Round #140 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1348500600,
    "relativeTimeSeconds": 243978679
    },
    {
    "id": 225,
    "name": "Codeforces Round #139 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1348069500,
    "relativeTimeSeconds": 244409780
    },
    {
    "id": 223,
    "name": "Codeforces Round #138 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1347809400,
    "relativeTimeSeconds": 244669879
    },
    {
    "id": 224,
    "name": "Codeforces Round #138 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1347809400,
    "relativeTimeSeconds": 244669879
    },
    {
    "id": 222,
    "name": "Codeforces Round #137 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1347291900,
    "relativeTimeSeconds": 245187379
    },
    {
    "id": 220,
    "name": "Codeforces Round #136 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1346427000,
    "relativeTimeSeconds": 246052279
    },
    {
    "id": 221,
    "name": "Codeforces Round #136 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1346427000,
    "relativeTimeSeconds": 246052279
    },
    {
    "id": 219,
    "name": "Codeforces Round #135 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1346081400,
    "relativeTimeSeconds": 246397879
    },
    {
    "id": 217,
    "name": "Codeforces Round #134 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1345273500,
    "relativeTimeSeconds": 247205779
    },
    {
    "id": 218,
    "name": "Codeforces Round #134 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1345273500,
    "relativeTimeSeconds": 247205780
    },
    {
    "id": 216,
    "name": "Codeforces Round #133 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1344958200,
    "relativeTimeSeconds": 247521079
    },
    {
    "id": 215,
    "name": "Codeforces Round #132 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1344267000,
    "relativeTimeSeconds": 248212279
    },
    {
    "id": 213,
    "name": "Codeforces Round #131 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1343662200,
    "relativeTimeSeconds": 248817079
    },
    {
    "id": 214,
    "name": "Codeforces Round #131 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1343662200,
    "relativeTimeSeconds": 248817079
    },
    {
    "id": 208,
    "name": "Codeforces Round #130 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7800,
    "startTimeSeconds": 1343057400,
    "relativeTimeSeconds": 249421879
    },
    {
    "id": 212,
    "name": "VK Cup 2012 Finals (unofficial online-version)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1342450800,
    "relativeTimeSeconds": 250028479
    },
    {
    "id": 211,
    "name": "VK Cup 2012 Finals",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1342335600,
    "relativeTimeSeconds": 250143679
    },
    {
    "id": 209,
    "name": "VK Cup 2012 Finals, Practice Session",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 5400,
    "startTimeSeconds": 1342252500,
    "relativeTimeSeconds": 250226779
    },
    {
    "id": 204,
    "name": "Codeforces Round #129 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1342020600,
    "relativeTimeSeconds": 250458679
    },
    {
    "id": 205,
    "name": "Codeforces Round #129 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1342020600,
    "relativeTimeSeconds": 250458680
    },
    {
    "id": 207,
    "name": "Abbyy Cup 2.0 - Final (unofficial)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1341730800,
    "relativeTimeSeconds": 250748480
    },
    {
    "id": 206,
    "name": "Abbyy Cup 2.0 - Final",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1341576900,
    "relativeTimeSeconds": 250902379
    },
    {
    "id": 203,
    "name": "Codeforces Round #128 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1341329400,
    "relativeTimeSeconds": 251149879
    },
    {
    "id": 201,
    "name": "Codeforces Round #127 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1340983800,
    "relativeTimeSeconds": 251495479
    },
    {
    "id": 202,
    "name": "Codeforces Round #127 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1340983800,
    "relativeTimeSeconds": 251495479
    },
    {
    "id": 200,
    "name": "Codeforces Round #126 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1340551800,
    "relativeTimeSeconds": 251927480
    },
    {
    "id": 198,
    "name": "Codeforces Round #125 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1340379000,
    "relativeTimeSeconds": 252100280
    },
    {
    "id": 199,
    "name": "Codeforces Round #125 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1340379000,
    "relativeTimeSeconds": 252100280
    },
    {
    "id": 196,
    "name": "Codeforces Round #124 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1339506000,
    "relativeTimeSeconds": 252973279
    },
    {
    "id": 197,
    "name": "Codeforces Round #124 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1339506000,
    "relativeTimeSeconds": 252973279
    },
    {
    "id": 195,
    "name": "Codeforces Round #123 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1339342200,
    "relativeTimeSeconds": 253137080
    },
    {
    "id": 193,
    "name": "Codeforces Round #122 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1338737400,
    "relativeTimeSeconds": 253741879
    },
    {
    "id": 194,
    "name": "Codeforces Round #122 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1338737400,
    "relativeTimeSeconds": 253741879
    },
    {
    "id": 191,
    "name": "Codeforces Round #121 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1338132600,
    "relativeTimeSeconds": 254346680
    },
    {
    "id": 192,
    "name": "Codeforces Round #121 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1338132600,
    "relativeTimeSeconds": 254346680
    },
    {
    "id": 188,
    "name": "Surprise Language Round #6",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1337959800,
    "relativeTimeSeconds": 254519479
    },
    {
    "id": 190,
    "name": "Codeforces Round #120 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1337182200,
    "relativeTimeSeconds": 255297079
    },
    {
    "id": 187,
    "name": "Codeforces Round #119 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1336663800,
    "relativeTimeSeconds": 255815480
    },
    {
    "id": 189,
    "name": "Codeforces Round #119 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1336663800,
    "relativeTimeSeconds": 255815480
    },
    {
    "id": 185,
    "name": "Codeforces Round #118 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1336145400,
    "relativeTimeSeconds": 256333879
    },
    {
    "id": 186,
    "name": "Codeforces Round #118 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1336145400,
    "relativeTimeSeconds": 256333879
    },
    {
    "id": 178,
    "name": "ABBYY Cup 2.0 - Hard",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1335614400,
    "relativeTimeSeconds": 256864879
    },
    {
    "id": 183,
    "name": "Croc Champ 2012 - Final",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1335532800,
    "relativeTimeSeconds": 256946479
    },
    {
    "id": 182,
    "name": "Codeforces Round #117 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1335280200,
    "relativeTimeSeconds": 257199080
    },
    {
    "id": 180,
    "name": "Codeforces Round #116 (Div. 2, ACM-ICPC Rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1335078000,
    "relativeTimeSeconds": 257401279
    },
    {
    "id": 177,
    "name": "ABBYY Cup 2.0 - Easy",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 14400,
    "startTimeSeconds": 1335016800,
    "relativeTimeSeconds": 257462479
    },
    {
    "id": 176,
    "name": "Croc Champ 2012 - Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1334934300,
    "relativeTimeSeconds": 257544979
    },
    {
    "id": 181,
    "name": "Croc Champ 2012 - Round 2 (Unofficial Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1334934300,
    "relativeTimeSeconds": 257544979
    },
    {
    "id": 175,
    "name": "Codeforces Round #115",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1334390400,
    "relativeTimeSeconds": 258088879
    },
    {
    "id": 164,
    "name": "VK Cup 2012 Round 3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1333897500,
    "relativeTimeSeconds": 258581779
    },
    {
    "id": 174,
    "name": "VK Cup 2012 Round 3 (Unofficial Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1333897500,
    "relativeTimeSeconds": 258581779
    },
    {
    "id": 173,
    "name": "Croc Champ 2012 - Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1333724400,
    "relativeTimeSeconds": 258754880
    },
    {
    "id": 172,
    "name": "Croc Champ 2012 - Qualification Round",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1333440000,
    "relativeTimeSeconds": 259039279
    },
    {
    "id": 171,
    "name": "April Fools Day Contest",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1333292400,
    "relativeTimeSeconds": 259186880
    },
    {
    "id": 170,
    "name": "VK Cup 2012 Wild-card Round 2",
    "type": "IOI",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 604800,
    "startTimeSeconds": 1332954000,
    "relativeTimeSeconds": 259525279
    },
    {
    "id": 167,
    "name": "Codeforces Round #114 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1332860400,
    "relativeTimeSeconds": 259618879
    },
    {
    "id": 168,
    "name": "Codeforces Round #114 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1332860400,
    "relativeTimeSeconds": 259618879
    },
    {
    "id": 163,
    "name": "VK Cup 2012 Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1332687900,
    "relativeTimeSeconds": 259791379
    },
    {
    "id": 169,
    "name": "VK Cup 2012 Round 2 (Unofficial Div. 2 Edition)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1332687900,
    "relativeTimeSeconds": 259791379
    },
    {
    "id": 166,
    "name": "Codeforces Round #113 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1332516600,
    "relativeTimeSeconds": 259962679
    },
    {
    "id": 162,
    "name": "VK Cup 2012 Wild-card Round 1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1332083400,
    "relativeTimeSeconds": 260395879
    },
    {
    "id": 165,
    "name": "Codeforces Round #112 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1331911800,
    "relativeTimeSeconds": 260567480
    },
    {
    "id": 161,
    "name": "VK Cup 2012 Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1331478300,
    "relativeTimeSeconds": 261000979
    },
    {
    "id": 159,
    "name": "VK Cup 2012 Qualification Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1331280000,
    "relativeTimeSeconds": 261199280
    },
    {
    "id": 160,
    "name": "Codeforces Round #111 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1331046000,
    "relativeTimeSeconds": 261433279
    },
    {
    "id": 158,
    "name": "VK Cup 2012 Qualification Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 86400,
    "startTimeSeconds": 1330804800,
    "relativeTimeSeconds": 261674479
    },
    {
    "id": 156,
    "name": "Codeforces Round #110 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1330536600,
    "relativeTimeSeconds": 261942679
    },
    {
    "id": 157,
    "name": "Codeforces Round #110 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1330536600,
    "relativeTimeSeconds": 261942679
    },
    {
    "id": 154,
    "name": "Codeforces Round #109 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1330095600,
    "relativeTimeSeconds": 262383679
    },
    {
    "id": 155,
    "name": "Codeforces Round #109 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1330095600,
    "relativeTimeSeconds": 262383679
    },
    {
    "id": 153,
    "name": "Surprise Language Round #5",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1329922800,
    "relativeTimeSeconds": 262556479
    },
    {
    "id": 152,
    "name": "Codeforces Round #108 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1329750000,
    "relativeTimeSeconds": 262729279
    },
    {
    "id": 150,
    "name": "Codeforces Round #107 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1329490800,
    "relativeTimeSeconds": 262988479
    },
    {
    "id": 151,
    "name": "Codeforces Round #107 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1329490800,
    "relativeTimeSeconds": 262988479
    },
    {
    "id": 149,
    "name": "Codeforces Round #106 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1328886000,
    "relativeTimeSeconds": 263593280
    },
    {
    "id": 148,
    "name": "Codeforces Round #105 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1328198400,
    "relativeTimeSeconds": 264280879
    },
    {
    "id": 145,
    "name": "Codeforces Round #104 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1327215600,
    "relativeTimeSeconds": 265263679
    },
    {
    "id": 146,
    "name": "Codeforces Round #104 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1327215600,
    "relativeTimeSeconds": 265263679
    },
    {
    "id": 144,
    "name": "Codeforces Round #103 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1326899100,
    "relativeTimeSeconds": 265580179
    },
    {
    "id": 142,
    "name": "Codeforces Round #102 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1326380700,
    "relativeTimeSeconds": 266098579
    },
    {
    "id": 143,
    "name": "Codeforces Round #102 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1326380700,
    "relativeTimeSeconds": 266098579
    },
    {
    "id": 141,
    "name": "Codeforces Round #101 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1326034800,
    "relativeTimeSeconds": 266444479
    },
    {
    "id": 140,
    "name": "Codeforces Round #100",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1325689200,
    "relativeTimeSeconds": 266790079
    },
    {
    "id": 147,
    "name": "Codeforces Testing Round #4",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 3600,
    "startTimeSeconds": 1325602800,
    "relativeTimeSeconds": 266876480
    },
    {
    "id": 138,
    "name": "Codeforces Beta Round #99 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1324728000,
    "relativeTimeSeconds": 267751280
    },
    {
    "id": 139,
    "name": "Codeforces Beta Round #99 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1324728000,
    "relativeTimeSeconds": 267751280
    },
    {
    "id": 137,
    "name": "Codeforces Beta Round #98 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1324015200,
    "relativeTimeSeconds": 268464079
    },
    {
    "id": 135,
    "name": "Codeforces Beta Round #97 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1323443100,
    "relativeTimeSeconds": 269036179
    },
    {
    "id": 136,
    "name": "Codeforces Beta Round #97 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1323443100,
    "relativeTimeSeconds": 269036179
    },
    {
    "id": 132,
    "name": "Codeforces Beta Round #96 (Div. 1)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1322924400,
    "relativeTimeSeconds": 269554879
    },
    {
    "id": 133,
    "name": "Codeforces Beta Round #96 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1322924400,
    "relativeTimeSeconds": 269554880
    },
    {
    "id": 134,
    "name": "Codeforces Testing Round #3",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 3600,
    "startTimeSeconds": 1322838000,
    "relativeTimeSeconds": 269641280
    },
    {
    "id": 131,
    "name": "Codeforces Beta Round #95 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1322233200,
    "relativeTimeSeconds": 270246079
    },
    {
    "id": 130,
    "name": "Unknown Language Round #4",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1321801200,
    "relativeTimeSeconds": 270678080
    },
    {
    "id": 128,
    "name": "Codeforces Beta Round #94 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1321337400,
    "relativeTimeSeconds": 271141879
    },
    {
    "id": 129,
    "name": "Codeforces Beta Round #94 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1321337400,
    "relativeTimeSeconds": 271141880
    },
    {
    "id": 126,
    "name": "Codeforces Beta Round #93 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1320858000,
    "relativeTimeSeconds": 271621280
    },
    {
    "id": 127,
    "name": "Codeforces Beta Round #93 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1320858000,
    "relativeTimeSeconds": 271621280
    },
    {
    "id": 123,
    "name": "Codeforces Beta Round #92 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1320333000,
    "relativeTimeSeconds": 272146279
    },
    {
    "id": 124,
    "name": "Codeforces Beta Round #92 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1320333000,
    "relativeTimeSeconds": 272146279
    },
    {
    "id": 125,
    "name": "Codeforces Testing Round #2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1319893200,
    "relativeTimeSeconds": 272586079
    },
    {
    "id": 121,
    "name": "Codeforces Beta Round #91 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1319727600,
    "relativeTimeSeconds": 272751680
    },
    {
    "id": 122,
    "name": "Codeforces Beta Round #91 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1319727600,
    "relativeTimeSeconds": 272751679
    },
    {
    "id": 120,
    "name": "School Regional Team Contest, Saratov, 2011",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1318919400,
    "relativeTimeSeconds": 273559880
    },
    {
    "id": 119,
    "name": "Codeforces Beta Round #90",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1318604400,
    "relativeTimeSeconds": 273874880
    },
    {
    "id": 118,
    "name": "Codeforces Beta Round #89 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1317999600,
    "relativeTimeSeconds": 274479680
    },
    {
    "id": 117,
    "name": "Codeforces Beta Round #88",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1316790000,
    "relativeTimeSeconds": 275689280
    },
    {
    "id": 115,
    "name": "Codeforces Beta Round #87 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1316098800,
    "relativeTimeSeconds": 276380480
    },
    {
    "id": 116,
    "name": "Codeforces Beta Round #87 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1316098800,
    "relativeTimeSeconds": 276380480
    },
    {
    "id": 113,
    "name": "Codeforces Beta Round #86 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1315494000,
    "relativeTimeSeconds": 276985280
    },
    {
    "id": 114,
    "name": "Codeforces Beta Round #86 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1315494000,
    "relativeTimeSeconds": 276985280
    },
    {
    "id": 111,
    "name": "Codeforces Beta Round #85 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1315051200,
    "relativeTimeSeconds": 277428080
    },
    {
    "id": 112,
    "name": "Codeforces Beta Round #85 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1315051200,
    "relativeTimeSeconds": 277428079
    },
    {
    "id": 109,
    "name": "Codeforces Beta Round #84 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1314633600,
    "relativeTimeSeconds": 277845679
    },
    {
    "id": 110,
    "name": "Codeforces Beta Round #84 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1314633600,
    "relativeTimeSeconds": 277845679
    },
    {
    "id": 107,
    "name": "Codeforces Beta Round #83 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1314111600,
    "relativeTimeSeconds": 278367679
    },
    {
    "id": 108,
    "name": "Codeforces Beta Round #83 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1314111600,
    "relativeTimeSeconds": 278367679
    },
    {
    "id": 106,
    "name": "Codeforces Beta Round #82 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1313766000,
    "relativeTimeSeconds": 278713279
    },
    {
    "id": 105,
    "name": "Codeforces Beta Round #81",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1313247600,
    "relativeTimeSeconds": 279231679
    },
    {
    "id": 103,
    "name": "Codeforces Beta Round #80 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1312714800,
    "relativeTimeSeconds": 279764480
    },
    {
    "id": 104,
    "name": "Codeforces Beta Round #80 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1312714800,
    "relativeTimeSeconds": 279764479
    },
    {
    "id": 101,
    "name": "Codeforces Beta Round #79 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1312390800,
    "relativeTimeSeconds": 280088479
    },
    {
    "id": 102,
    "name": "Codeforces Beta Round #79 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1312390800,
    "relativeTimeSeconds": 280088480
    },
    {
    "id": 100,
    "name": "Unknown Language Round #3",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1312005600,
    "relativeTimeSeconds": 280473679
    },
    {
    "id": 98,
    "name": "Codeforces Beta Round #78 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1311346800,
    "relativeTimeSeconds": 281132479
    },
    {
    "id": 99,
    "name": "Codeforces Beta Round #78 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1311346800,
    "relativeTimeSeconds": 281132479
    },
    {
    "id": 97,
    "name": "Yandex.Algorithm 2011: Finals",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1310731200,
    "relativeTimeSeconds": 281748079
    },
    {
    "id": 95,
    "name": "Codeforces Beta Round #77 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1310137200,
    "relativeTimeSeconds": 282342080
    },
    {
    "id": 96,
    "name": "Codeforces Beta Round #77 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1310137200,
    "relativeTimeSeconds": 282342080
    },
    {
    "id": 93,
    "name": "Codeforces Beta Round #76 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1309446000,
    "relativeTimeSeconds": 283033279
    },
    {
    "id": 94,
    "name": "Codeforces Beta Round #76 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1309446000,
    "relativeTimeSeconds": 283033279
    },
    {
    "id": 91,
    "name": "Codeforces Beta Round #75 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1308582000,
    "relativeTimeSeconds": 283897279
    },
    {
    "id": 92,
    "name": "Codeforces Beta Round #75 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1308582000,
    "relativeTimeSeconds": 283897279
    },
    {
    "id": 89,
    "name": "Codeforces Beta Round #74 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1308236400,
    "relativeTimeSeconds": 284242880
    },
    {
    "id": 90,
    "name": "Codeforces Beta Round #74 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1308236400,
    "relativeTimeSeconds": 284242879
    },
    {
    "id": 87,
    "name": "Codeforces Beta Round #73 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1307458800,
    "relativeTimeSeconds": 285020479
    },
    {
    "id": 88,
    "name": "Codeforces Beta Round #73 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1307458800,
    "relativeTimeSeconds": 285020480
    },
    {
    "id": 86,
    "name": "Yandex.Algorithm 2011: Round 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1306077000,
    "relativeTimeSeconds": 286402279
    },
    {
    "id": 85,
    "name": "Yandex.Algorithm 2011: Round 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1305903600,
    "relativeTimeSeconds": 286575680
    },
    {
    "id": 83,
    "name": "Codeforces Beta Round #72 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1305299400,
    "relativeTimeSeconds": 287179879
    },
    {
    "id": 84,
    "name": "Codeforces Beta Round #72 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1305299400,
    "relativeTimeSeconds": 287179880
    },
    {
    "id": 82,
    "name": "Yandex.Algorithm 2011: Qualification 2",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1304694000,
    "relativeTimeSeconds": 287785280
    },
    {
    "id": 81,
    "name": "Yandex.Algorithm Open 2011: Qualification 1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1304485200,
    "relativeTimeSeconds": 287994079
    },
    {
    "id": 79,
    "name": "Codeforces Beta Round #71",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1304175600,
    "relativeTimeSeconds": 288303679
    },
    {
    "id": 78,
    "name": "Codeforces Beta Round #70 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1303916400,
    "relativeTimeSeconds": 288562880
    },
    {
    "id": 77,
    "name": "Codeforces Beta Round #69 (Div. 1 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1303226100,
    "relativeTimeSeconds": 289253180
    },
    {
    "id": 80,
    "name": "Codeforces Beta Round #69 (Div. 2 Only)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1303226100,
    "relativeTimeSeconds": 289253179
    },
    {
    "id": 74,
    "name": "Codeforces Beta Round #68",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1302879600,
    "relativeTimeSeconds": 289599680
    },
    {
    "id": 75,
    "name": "Codeforces Beta Round #67 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1302706800,
    "relativeTimeSeconds": 289772479
    },
    {
    "id": 76,
    "name": "All-Ukrainian School Olympiad in Informatics",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1302609600,
    "relativeTimeSeconds": 289869679
    },
    {
    "id": 73,
    "name": "Codeforces Beta Round #66",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1302422400,
    "relativeTimeSeconds": 290056880
    },
    {
    "id": 71,
    "name": "Codeforces Beta Round #65 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1301410800,
    "relativeTimeSeconds": 291068479
    },
    {
    "id": 70,
    "name": "Codeforces Beta Round #64",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1301155200,
    "relativeTimeSeconds": 291324080
    },
    {
    "id": 69,
    "name": "Codeforces Beta Round #63 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1300809600,
    "relativeTimeSeconds": 291669680
    },
    {
    "id": 72,
    "name": "Unknown Language Round #2",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1300637400,
    "relativeTimeSeconds": 291841879
    },
    {
    "id": 68,
    "name": "Codeforces Beta Round #62",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1300464000,
    "relativeTimeSeconds": 292015279
    },
    {
    "id": 67,
    "name": "Manthan 2011",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1300033800,
    "relativeTimeSeconds": 292445479
    },
    {
    "id": 66,
    "name": "Codeforces Beta Round #61 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1299513600,
    "relativeTimeSeconds": 292965680
    },
    {
    "id": 65,
    "name": "Codeforces Beta Round #60",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1299340800,
    "relativeTimeSeconds": 293138479
    },
    {
    "id": 63,
    "name": "Codeforces Beta Round #59 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1298908800,
    "relativeTimeSeconds": 293570479
    },
    {
    "id": 62,
    "name": "Codeforces Beta Round #58",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1298649600,
    "relativeTimeSeconds": 293829680
    },
    {
    "id": 61,
    "name": "Codeforces Beta Round #57 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1298390400,
    "relativeTimeSeconds": 294088880
    },
    {
    "id": 64,
    "name": "Unknown Language Round #1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1298304000,
    "relativeTimeSeconds": 294175279
    },
    {
    "id": 60,
    "name": "Codeforces Beta Round #56",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1298131200,
    "relativeTimeSeconds": 294348079
    },
    {
    "id": 59,
    "name": "Codeforces Beta Round #55 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1297440000,
    "relativeTimeSeconds": 295039279
    },
    {
    "id": 58,
    "name": "Codeforces Beta Round #54 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1296489600,
    "relativeTimeSeconds": 295989679
    },
    {
    "id": 57,
    "name": "Codeforces Beta Round #53",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1295971200,
    "relativeTimeSeconds": 296508080
    },
    {
    "id": 56,
    "name": "Codeforces Beta Round #52 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1295626200,
    "relativeTimeSeconds": 296853079
    },
    {
    "id": 55,
    "name": "Codeforces Beta Round #51",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1294992000,
    "relativeTimeSeconds": 297487279
    },
    {
    "id": 54,
    "name": "Codeforces Beta Round #50",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1294733700,
    "relativeTimeSeconds": 297745580
    },
    {
    "id": 53,
    "name": "Codeforces Beta Round #49 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1294329600,
    "relativeTimeSeconds": 298149680
    },
    {
    "id": 52,
    "name": "Codeforces Testing Round #1",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 3600,
    "startTimeSeconds": 1294160400,
    "relativeTimeSeconds": 298318880
    },
    {
    "id": 51,
    "name": "Codeforces Beta Round #48",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 9000,
    "startTimeSeconds": 1293552000,
    "relativeTimeSeconds": 298927279
    },
    {
    "id": 50,
    "name": "Codeforces Beta Round #47",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1292862000,
    "relativeTimeSeconds": 299617279
    },
    {
    "id": 49,
    "name": "Codeforces Beta Round #46 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1292601600,
    "relativeTimeSeconds": 299877680
    },
    {
    "id": 48,
    "name": "School Personal Contest #3 (Winter Computer School 2010/11) - Codeforces Beta Round #45 (ACM-ICPC Rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1292140800,
    "relativeTimeSeconds": 300338479
    },
    {
    "id": 47,
    "name": "Codeforces Beta Round #44 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1291737600,
    "relativeTimeSeconds": 300741679
    },
    {
    "id": 46,
    "name": "School Personal Contest #2 (Winter Computer School 2010/11) - Codeforces Beta Round #43 (ACM-ICPC Rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 10800,
    "startTimeSeconds": 1291536000,
    "relativeTimeSeconds": 300943279
    },
    {
    "id": 43,
    "name": "Codeforces Beta Round #42 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1291046400,
    "relativeTimeSeconds": 301432879
    },
    {
    "id": 42,
    "name": "Codeforces Beta Round #41",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1290096000,
    "relativeTimeSeconds": 302383279
    },
    {
    "id": 45,
    "name": "School Team Contest #3 (Winter Computer School 2010/11)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1289646000,
    "relativeTimeSeconds": 302833280
    },
    {
    "id": 41,
    "name": "Codeforces Beta Round #40 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1289232000,
    "relativeTimeSeconds": 303247279
    },
    {
    "id": 44,
    "name": "School Team Contest #2 (Winter Computer School 2010/11)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1289041200,
    "relativeTimeSeconds": 303438079
    },
    {
    "id": 40,
    "name": "Codeforces Beta Round #39",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1288972800,
    "relativeTimeSeconds": 303506479
    },
    {
    "id": 38,
    "name": "School Personal Contest #1 (Winter Computer School 2010/11) - Codeforces Beta Round #38 (ACM-ICPC Rules)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 14400,
    "startTimeSeconds": 1288440000,
    "relativeTimeSeconds": 304039280
    },
    {
    "id": 37,
    "name": "Codeforces Beta Round #37",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1288018800,
    "relativeTimeSeconds": 304460479
    },
    {
    "id": 39,
    "name": "School Team Contest #1 (Winter Computer School 2010/11)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 18000,
    "startTimeSeconds": 1287904200,
    "relativeTimeSeconds": 304575079
    },
    {
    "id": 36,
    "name": "Codeforces Beta Round #36",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1287482400,
    "relativeTimeSeconds": 304996879
    },
    {
    "id": 35,
    "name": "Codeforces Beta Round #35 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1287471600,
    "relativeTimeSeconds": 305007679
    },
    {
    "id": 34,
    "name": "Codeforces Beta Round #34 (Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1286802000,
    "relativeTimeSeconds": 305677279
    },
    {
    "id": 33,
    "name": "Codeforces Beta Round #33 (Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1286463600,
    "relativeTimeSeconds": 306015680
    },
    {
    "id": 32,
    "name": "Codeforces Beta Round #32 (Div. 2, Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1286002800,
    "relativeTimeSeconds": 306476480
    },
    {
    "id": 31,
    "name": "Codeforces Beta Round #31 (Div. 2, Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1285599600,
    "relativeTimeSeconds": 306879680
    },
    {
    "id": 30,
    "name": "Codeforces Beta Round #30 (Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1285340400,
    "relativeTimeSeconds": 307138880
    },
    {
    "id": 29,
    "name": "Codeforces Beta Round #29 (Div. 2, Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1284994800,
    "relativeTimeSeconds": 307484479
    },
    {
    "id": 28,
    "name": "Codeforces Beta Round #28 (Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1284735600,
    "relativeTimeSeconds": 307743680
    },
    {
    "id": 27,
    "name": "Codeforces Beta Round #27 (Codeforces format, Div. 2)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1284130800,
    "relativeTimeSeconds": 308348479
    },
    {
    "id": 26,
    "name": "Codeforces Beta Round #26 (Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1281970800,
    "relativeTimeSeconds": 310508479
    },
    {
    "id": 25,
    "name": "Codeforces Beta Round #25 (Div. 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1280761200,
    "relativeTimeSeconds": 311718079
    },
    {
    "id": 24,
    "name": "Codeforces Beta Round #24",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1280149200,
    "relativeTimeSeconds": 312330080
    },
    {
    "id": 23,
    "name": "Codeforces Beta Round #23",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1278687600,
    "relativeTimeSeconds": 313791679
    },
    {
    "id": 22,
    "name": "Codeforces Beta Round #22 (Div. 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1277823600,
    "relativeTimeSeconds": 314655680
    },
    {
    "id": 21,
    "name": "Codeforces Alpha Round #21 (Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1277730300,
    "relativeTimeSeconds": 314748979
    },
    {
    "id": 19,
    "name": "Codeforces Beta Round #19",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1277391600,
    "relativeTimeSeconds": 315087680
    },
    {
    "id": 20,
    "name": "Codeforces Alpha Round #20 (Codeforces format)",
    "type": "CF",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 5400,
    "startTimeSeconds": 1276875000,
    "relativeTimeSeconds": 315604280
    },
    {
    "id": 18,
    "name": "Codeforces Beta Round #18 (Div. 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1276700400,
    "relativeTimeSeconds": 315778879
    },
    {
    "id": 17,
    "name": "Codeforces Beta Round #17",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1276182000,
    "relativeTimeSeconds": 316297279
    },
    {
    "id": 16,
    "name": "Codeforces Beta Round #16 (Div. 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1275570000,
    "relativeTimeSeconds": 316909280
    },
    {
    "id": 15,
    "name": "Codeforces Beta Round #15",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 8100,
    "startTimeSeconds": 1275145200,
    "relativeTimeSeconds": 317334080
    },
    {
    "id": 14,
    "name": "Codeforces Beta Round #14 (Div. 2)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1274283000,
    "relativeTimeSeconds": 318196280
    },
    {
    "id": 13,
    "name": "Codeforces Beta Round #13",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1273154400,
    "relativeTimeSeconds": 319324879
    },
    {
    "id": 12,
    "name": "Codeforces Beta Round #12 (Div 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1272538800,
    "relativeTimeSeconds": 319940480
    },
    {
    "id": 11,
    "name": "Codeforces Beta Round #11",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1272294000,
    "relativeTimeSeconds": 320185279
    },
    {
    "id": 10,
    "name": "Codeforces Beta Round #10",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1271346300,
    "relativeTimeSeconds": 321132980
    },
    {
    "id": 9,
    "name": "Codeforces Beta Round #9 (Div. 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1270983600,
    "relativeTimeSeconds": 321495679
    },
    {
    "id": 8,
    "name": "Codeforces Beta Round #8",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1270741500,
    "relativeTimeSeconds": 321737780
    },
    {
    "id": 7,
    "name": "Codeforces Beta Round #7",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1270136700,
    "relativeTimeSeconds": 322342580
    },
    {
    "id": 6,
    "name": "Codeforces Beta Round #6 (Div. 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1269673200,
    "relativeTimeSeconds": 322806079
    },
    {
    "id": 5,
    "name": "Codeforces Beta Round #5",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1269100800,
    "relativeTimeSeconds": 323378480
    },
    {
    "id": 4,
    "name": "Codeforces Beta Round #4 (Div. 2 Only)",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1268395200,
    "relativeTimeSeconds": 324084080
    },
    {
    "id": 3,
    "name": "Codeforces Beta Round #3",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1267963200,
    "relativeTimeSeconds": 324516079
    },
    {
    "id": 2,
    "name": "Codeforces Beta Round #2",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1267117200,
    "relativeTimeSeconds": 325362079
    },
    {
    "id": 1,
    "name": "Codeforces Beta Round #1",
    "type": "ICPC",
    "phase": "FINISHED",
    "frozen": false,
    "durationSeconds": 7200,
    "startTimeSeconds": 1266580800,
    "relativeTimeSeconds": 325898479
    }
    ]
    }
);

