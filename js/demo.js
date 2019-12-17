// 読む demo
// made by Tyler Lafayette
// (with the help of some awesome open-source projects)

// Yomu will load the dictionary files as well as make requests for
// dictionary entries from this API URL.
const API_URL = "https://yomu-api.herokuapp.com"

// Action constants.
const TOKENIZE = "TOKENIZE"
const TOKENIZE_COMPLETED = "TOKENIZE_COMPLETED"
const DICTIONARY_LOOKUP = "DICTIONARY_LOOKUP"
const DICTIONARY_LOOKUP_COMPLETED = "DICTIONARY_LOOKUP_COMPLETED"
const DICTIONARY_LOOKUP_ERROR = "DICTIONARY_LOOKUP_ERROR"

const LOOK_UP_TABLE = {
    読む: {
        meta: { status: 200 },
        data: [
            {
                slug: "読む",
                is_common: true,
                tags: ["wanikani10"],
                jlpt: ["jlpt-n5"],
                japanese: [{ word: "読む", reading: "よむ" }],
                senses: [
                    {
                        english_definitions: ["to read"],
                        parts_of_speech: [
                            "Godan verb with mu ending",
                            "Transitive verb",
                        ],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to count"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["さばを読む"],
                        antonyms: [],
                        source: [],
                        info: ["now mostly used in idioms"],
                    },
                    {
                        english_definitions: [
                            "to guess",
                            "to predict",
                            "to read (someone's thoughts)",
                            "to see (e.g. into someone's heart)",
                            "to divine",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
        ],
    },
    は: {
        meta: { status: 200 },
        data: [
            {
                slug: "は",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "は" }],
                senses: [
                    {
                        english_definitions: ["topic marker particle"],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["pronounced わ in modern Japanese"],
                    },
                    {
                        english_definitions: [
                            "indicates contrast with another option (stated or unstated)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["adds emphasis"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Ha (kana)"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Ha (kana)” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Ha_(kana)?oldid=490899729",
                            },
                            {
                                text: "Read “は” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/は?oldid=41574446",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Ha_(kana)",
                },
            },
            {
                slug: "歯",
                is_common: true,
                tags: ["wanikani12"],
                jlpt: ["jlpt-n5"],
                japanese: [
                    { word: "歯", reading: "は" },
                    { word: "齒", reading: "は" },
                ],
                senses: [
                    {
                        english_definitions: ["tooth"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Human tooth"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Human tooth” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Human_tooth?oldid=492953747",
                            },
                            {
                                text: "Read “歯” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/歯?oldid=42400531",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Human_tooth",
                },
            },
            {
                slug: "葉",
                is_common: true,
                tags: ["wanikani10"],
                jlpt: ["jlpt-n4"],
                japanese: [{ word: "葉", reading: "は" }],
                senses: [
                    {
                        english_definitions: [
                            "leaf",
                            "blade (of grass)",
                            "(pine) needle",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Leaf"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Leaf” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Leaf?oldid=495167948",
                            },
                            {
                                text: "Read “葉” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/葉?oldid=42436512",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Leaf",
                },
            },
            {
                slug: "刃",
                is_common: true,
                tags: ["wanikani44"],
                jlpt: ["jlpt-n1"],
                japanese: [{ word: "刃", reading: "は" }],
                senses: [
                    {
                        english_definitions: ["edge (of a knife or sword)"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["prong (of an electrical plug)"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Blade"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Blade” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Blade?oldid=494564979",
                            },
                            {
                                text: "Read “刃” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/刃?oldid=42446170",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Blade",
                },
            },
            {
                slug: "派",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n1"],
                japanese: [{ word: "派", reading: "は" }],
                senses: [
                    {
                        english_definitions: ["clique", "group", "coterie"],
                        parts_of_speech: ["Noun", "Noun - used as a suffix"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "(political) faction",
                            "wing",
                            "party",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["党派 とうは"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["school"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["流派 りゅうは"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["sect", "denomination"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["宗派"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "覇",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "覇", reading: "は" }],
                senses: [
                    {
                        english_definitions: [
                            "supremacy (over a nation)",
                            "hegemony",
                            "domination",
                            "leadership",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["覇を唱える"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["championship", "victory"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "ハ",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "ハ" }],
                senses: [
                    {
                        english_definitions: [
                            "third in a sequence denoted by the iroha system",
                            "third note in the diatonic scale (used in key names, etc.)",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Wa"],
                        parts_of_speech: ["Place"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: true, dbpedia: false },
            },
            {
                slug: "破",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "破", reading: "は" }],
                senses: [
                    {
                        english_definitions: [
                            "(in gagaku or noh) middle section of a song",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["序破急"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "はあ",
                is_common: false,
                tags: [],
                jlpt: ["jlpt-n3"],
                japanese: [
                    { reading: "はあ" },
                    { reading: "はー" },
                    { reading: "は" },
                    { reading: "はぁ" },
                    { reading: "はあっ" },
                    { reading: "はーッ" },
                    { reading: "ハーッ" },
                ],
                senses: [
                    {
                        english_definitions: ["yes", "indeed", "well"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["ha!"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["what?", "huh?"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["sigh"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "走る",
                is_common: true,
                tags: ["wanikani5"],
                jlpt: ["jlpt-n5"],
                japanese: [
                    { word: "走る", reading: "はしる" },
                    { word: "奔る", reading: "はしる" },
                    { word: "趨る", reading: "はしる" },
                ],
                senses: [
                    {
                        english_definitions: ["to run"],
                        parts_of_speech: [
                            "Godan verb with ru ending",
                            "intransitive verb",
                        ],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to travel (movement of vehicles)",
                            "to drive",
                            "to flow (e.g. energy)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to hurry to"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to retreat (from battle)",
                            "to take flight",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to run away from home"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["esp. 奔る"],
                    },
                    {
                        english_definitions: ["to elope"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to tend heavily toward"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["esp. 趨る"],
                    },
                    {
                        english_definitions: [
                            "to flash",
                            "to streak",
                            "to shoot through (e.g. pain)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Running"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Running” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Running?oldid=493695790",
                            },
                            {
                                text: "Read “走る” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/走る?oldid=41844115",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Running",
                },
            },
        ],
    },
    ウェブサイト: {
        meta: { status: 200 },
        data: [
            {
                slug: "ウェブサイト",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [
                    { reading: "ウェブサイト" },
                    { reading: "ウエブサイト" },
                    { reading: "ウェブ・サイト" },
                    { reading: "ウエブ・サイト" },
                ],
                senses: [
                    {
                        english_definitions: ["web site", "website"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Computer terminology"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Website"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Website” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Website?oldid=495162029",
                            },
                            {
                                text:
                                    "Read “ウェブサイト” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/ウェブサイト?oldid=42779025",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Website",
                },
            },
        ],
    },
    で: {
        meta: { status: 200 },
        data: [
            {
                slug: "出",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ word: "出", reading: "で" }],
                senses: [
                    {
                        english_definitions: [
                            "coming out",
                            "going out",
                            "outflow",
                            "efflux",
                            "rising (of the Sun or the Moon)",
                        ],
                        parts_of_speech: ["Noun", "Noun - used as a suffix"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "attending (work)",
                            "appearing (on stage)",
                            "one's turn to go on",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["start", "beginning"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "origins",
                            "background",
                            "person (or item) originating from ...",
                            "graduate of ...",
                            "native of ...",
                            "member of ... (lineage)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "architectural member that projects outward",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "highest point of the stern of a ship",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "amount (comprising something)",
                            "amount of time or effort required to do something",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [
                            "usu. after the -masu stem of a verb as 〜出がある or 〜出がない, etc.",
                        ],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "で",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "で" }, { reading: "にて" }],
                senses: [
                    {
                        english_definitions: ["at", "in"],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [
                            "indicates location of action; にて is the formal literary form",
                        ],
                    },
                    {
                        english_definitions: ["at", "when"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["indicates time of action"],
                    },
                    {
                        english_definitions: ["by", "with"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["indicates means of action"],
                    },
                    {
                        english_definitions: ["and then", "so"],
                        parts_of_speech: ["Conjunction"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["and", "then"],
                        parts_of_speech: ["Auxiliary"],
                        links: [],
                        tags: [],
                        restrictions: ["で"],
                        see_also: ["て"],
                        antonyms: [],
                        source: [],
                        info: [
                            "indicates continuing action; alternative form of 〜て used for some verb types",
                        ],
                    },
                    {
                        english_definitions: [
                            "let me tell you",
                            "don't you know",
                        ],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: ["Kansai dialect"],
                        restrictions: ["で"],
                        see_also: ["よ"],
                        antonyms: [],
                        source: [],
                        info: [
                            "at sentence-end; indicates certainty, emphasis, etc.",
                        ],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "電話",
                is_common: true,
                tags: ["wanikani8"],
                jlpt: ["jlpt-n5"],
                japanese: [{ word: "電話", reading: "でんわ" }],
                senses: [
                    {
                        english_definitions: ["telephone call", "phone call"],
                        parts_of_speech: ["Noun", "Suru verb", "No-adjective"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["telephone (device)", "phone"],
                        parts_of_speech: ["Noun", "No-adjective"],
                        links: [],
                        tags: ["Abbreviation"],
                        restrictions: [],
                        see_also: ["電話機"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Telephony"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Telephony” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Telephony?oldid=490215218",
                            },
                            {
                                text: "Read “電話” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/電話?oldid=42315763",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Telephony",
                },
            },
            {
                slug: "電車",
                is_common: true,
                tags: ["wanikani8"],
                jlpt: ["jlpt-n5"],
                japanese: [{ word: "電車", reading: "でんしゃ" }],
                senses: [
                    {
                        english_definitions: ["train", "electric train"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Electric multiple unit"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text:
                                    "Read “Electric multiple unit” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Electric_multiple_unit?oldid=493391235",
                            },
                            {
                                text: "Read “電車” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/電車?oldid=42476776",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia:
                        "http://dbpedia.org/resource/Electric_multiple_unit",
                },
            },
            {
                slug: "電気",
                is_common: true,
                tags: ["wanikani8"],
                jlpt: ["jlpt-n5"],
                japanese: [{ word: "電気", reading: "でんき" }],
                senses: [
                    {
                        english_definitions: ["electricity"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["(electric) light"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Electricity"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Electricity” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Electricity?oldid=492227908",
                            },
                            {
                                text: "Read “電気” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/電気?oldid=42431515",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Electricity",
                },
            },
            {
                slug: "電報",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n4"],
                japanese: [{ word: "電報", reading: "でんぽう" }],
                senses: [
                    {
                        english_definitions: ["telegram"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Telegraphy"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Telegraphy” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Telegraphy?oldid=493938300",
                            },
                            {
                                text: "Read “電報” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/電報?oldid=41908398",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Telegraphy",
                },
            },
            {
                slug: "伝統",
                is_common: true,
                tags: ["wanikani22"],
                jlpt: ["jlpt-n3"],
                japanese: [{ word: "伝統", reading: "でんとう" }],
                senses: [
                    {
                        english_definitions: ["tradition", "convention"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Tradition"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Tradition” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Tradition?oldid=493479663",
                            },
                            {
                                text: "Read “伝統” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/伝統?oldid=42586559",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Tradition",
                },
            },
            {
                slug: "電子",
                is_common: true,
                tags: ["wanikani8"],
                jlpt: ["jlpt-n3"],
                japanese: [{ word: "電子", reading: "でんし" }],
                senses: [
                    {
                        english_definitions: ["electron"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Physics terminology"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["electronic"],
                        parts_of_speech: ["Noun or verb acting prenominally"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Electron"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Electron” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Electron?oldid=495297654",
                            },
                            {
                                text: "Read “電子” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/電子?oldid=42687647",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Electron",
                },
            },
            {
                slug: "出来る",
                is_common: true,
                tags: ["wanikani6"],
                jlpt: ["jlpt-n3", "jlpt-n5"],
                japanese: [
                    { word: "出来る", reading: "できる" },
                    { word: "出きる", reading: "できる" },
                    { word: "出來る", reading: "できる" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "to be able (in a position) to do",
                            "to be up to the task",
                        ],
                        parts_of_speech: ["Ichidan verb", "intransitive verb"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to be ready", "to be completed"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to be made", "to be built"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to be good at",
                            "to be permitted (to do)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to become intimate",
                            "to take up (with somebody)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to grow", "to be raised"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to become pregnant"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "出る",
                is_common: true,
                tags: ["wanikani2"],
                jlpt: ["jlpt-n5"],
                japanese: [{ word: "出る", reading: "でる" }],
                senses: [
                    {
                        english_definitions: [
                            "to leave",
                            "to exit",
                            "to go out",
                            "to come out",
                            "to get out",
                        ],
                        parts_of_speech: ["Ichidan verb", "intransitive verb"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: ["入る はいる"],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to leave (on a journey)",
                            "to depart",
                            "to start out",
                            "to set out",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to move forward"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to come to",
                            "to get to",
                            "to lead to",
                            "to reach",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to appear",
                            "to come out",
                            "to emerge",
                            "to surface",
                            "to come forth",
                            "to turn up",
                            "to be found",
                            "to be detected",
                            "to be discovered",
                            "to be exposed",
                            "to show",
                            "to be exhibited",
                            "to be on display",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to appear (in print)",
                            "to be published",
                            "to be announced",
                            "to be issued",
                            "to be listed",
                            "to come out",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to attend",
                            "to participate",
                            "to take part",
                            "to enter (an event)",
                            "to play in",
                            "to perform",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to be stated",
                            "to be expressed",
                            "to come up",
                            "to be brought up",
                            "to be raised",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to sell"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to exceed", "to go over"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to stick out", "to protrude"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to break out",
                            "to occur",
                            "to start",
                            "to originate",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to be produced"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to come from",
                            "to be derived from",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to be given",
                            "to get",
                            "to receive",
                            "to be offered",
                            "to be provided",
                            "to be presented",
                            "to be submitted",
                            "to be handed in",
                            "to be turned in",
                            "to be paid",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to answer (phone, door, etc.)",
                            "to get",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to assume (an attitude)",
                            "to act",
                            "to behave",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to pick up (speed, etc.)",
                            "to gain",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to flow (e.g. tears)",
                            "to run",
                            "to bleed",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to graduate"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
        ],
    },
    自動的: {
        meta: { status: 200 },
        data: [
            {
                slug: "自動的",
                is_common: true,
                tags: ["wanikani16"],
                jlpt: [],
                japanese: [{ word: "自動的", reading: "じどうてき" }],
                senses: [
                    {
                        english_definitions: ["automatic"],
                        parts_of_speech: ["Na-adjective"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
        ],
    },
    に: {
        meta: { status: 200 },
        data: [
            {
                slug: "二",
                is_common: true,
                tags: ["wanikani1"],
                jlpt: ["jlpt-n5"],
                japanese: [
                    { word: "二", reading: "に" },
                    { word: "二", reading: "ふた" },
                    { word: "二", reading: "ふ" },
                    { word: "二", reading: "ふう" },
                    { word: "２", reading: "に" },
                    { word: "２", reading: "ふた" },
                    { word: "２", reading: "ふ" },
                    { word: "２", reading: "ふう" },
                    { word: "弐", reading: "に" },
                    { word: "弐", reading: "ふた" },
                    { word: "弐", reading: "ふ" },
                    { word: "弐", reading: "ふう" },
                    { word: "弍", reading: "に" },
                    { word: "弍", reading: "ふた" },
                    { word: "弍", reading: "ふ" },
                    { word: "弍", reading: "ふう" },
                    { word: "貳", reading: "に" },
                    { word: "貳", reading: "ふた" },
                    { word: "貳", reading: "ふ" },
                    { word: "貳", reading: "ふう" },
                    { word: "貮", reading: "に" },
                    { word: "貮", reading: "ふた" },
                    { word: "貮", reading: "ふ" },
                    { word: "貮", reading: "ふう" },
                ],
                senses: [
                    {
                        english_definitions: ["two"],
                        parts_of_speech: ["Numeric"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [
                            "ふ and ふう used mainly when counting aloud. 弐, 貳 and 貮 are used in legal documents.",
                        ],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "荷",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n1"],
                japanese: [{ word: "荷", reading: "に" }],
                senses: [
                    {
                        english_definitions: [
                            "load",
                            "baggage",
                            "cargo",
                            "freight",
                            "goods",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["burden", "responsibility"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "に",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "に" }],
                senses: [
                    {
                        english_definitions: [
                            "at (place, time)",
                            "in",
                            "on",
                            "during",
                        ],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to (direction, state)",
                            "toward",
                            "into",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["for (purpose)"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "because of (reason)",
                            "for",
                            "with",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["by", "from"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["as (i.e. in the role of)"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["として"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "per",
                            "in",
                            "for",
                            'a (e.g. "once a month")',
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["and", "in addition to"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["if", "although"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Archaism"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Ni (kana)"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Ni (kana)” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Ni_(kana)?oldid=488110714",
                            },
                            {
                                text: "Read “に” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/に?oldid=41573559",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Ni_(kana)",
                },
            },
            {
                slug: "似",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "似", reading: "に" }],
                senses: [
                    {
                        english_definitions: [
                            "looking like (someone)",
                            "taking after (either of one's parents)",
                        ],
                        parts_of_speech: ["Suffix"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "丹",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ word: "丹", reading: "に" }],
                senses: [
                    {
                        english_definitions: [
                            "red earth (i.e. containing cinnabar or minium)",
                            "vermilion",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "煮",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "煮", reading: "に" }],
                senses: [
                    {
                        english_definitions: ["simmered with", "cooked with"],
                        parts_of_speech: ["Suffix"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["boiling", "boiled dish"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "ニ",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "ニ" }],
                senses: [
                    {
                        english_definitions: [
                            "4th in a sequence denoted by the iroha system",
                            "4th note in the diatonic scale (used in key names, etc.)",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Ni", "Ny"],
                        parts_of_speech: ["Place"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: true, dbpedia: false },
            },
            {
                slug: "土-2",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "土", reading: "に" }],
                senses: [
                    {
                        english_definitions: ["soil (esp. reddish soil)"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Archaism"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "尼-1",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "尼", reading: "に" }],
                senses: [
                    {
                        english_definitions: [
                            "bhikkhuni (fully ordained Buddhist nun)",
                        ],
                        parts_of_speech: ["Noun", "Noun - used as a suffix"],
                        links: [],
                        tags: ["Abbreviation"],
                        restrictions: [],
                        see_also: ["比丘尼"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Indonesia"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Abbreviation"],
                        restrictions: [],
                        see_also: ["印度尼西亜"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "肉",
                is_common: true,
                tags: ["wanikani5"],
                jlpt: ["jlpt-n5"],
                japanese: [
                    { word: "肉", reading: "にく" },
                    { word: "肉", reading: "しし" },
                    { word: "宍", reading: "しし" },
                ],
                senses: [
                    {
                        english_definitions: ["flesh"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["meat"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "the physical body (as opposed to the spirit)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: ["にく"],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["thickness"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: ["にく"],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["ink pad"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: ["にく"],
                        see_also: ["印肉"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Flesh"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Flesh” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Flesh?oldid=474924183",
                            },
                            {
                                text: "Read “肉” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/肉?oldid=42466138",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Flesh",
                },
            },
        ],
    },
    全て: {
        meta: { status: 200 },
        data: [
            {
                slug: "全て",
                is_common: true,
                tags: ["wanikani6"],
                jlpt: ["jlpt-n3"],
                japanese: [
                    { word: "全て", reading: "すべて" },
                    { word: "総て", reading: "すべて" },
                    { word: "凡て", reading: "すべて" },
                    { word: "惣て", reading: "すべて" },
                    { word: "渾て", reading: "すべて" },
                    { word: "総べて", reading: "すべて" },
                ],
                senses: [
                    {
                        english_definitions: ["everything", "all", "the whole"],
                        parts_of_speech: ["Noun", "No-adjective"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "entirely",
                            "completely",
                            "wholly",
                            "all",
                        ],
                        parts_of_speech: ["Adverb"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "総ての道はローマに通ず",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    {
                        word: "すべての道はローマに通ず",
                        reading: "すべてのみちはローマにつうず",
                    },
                    {
                        word: "全ての道はローマに通ず",
                        reading: "すべてのみちはローマにつうず",
                    },
                    {
                        word: "総ての道はローマに通ず",
                        reading: "すべてのみちはローマにつうず",
                    },
                    {
                        word: "凡ての道はローマに通ず",
                        reading: "すべてのみちはローマにつうず",
                    },
                ],
                senses: [
                    {
                        english_definitions: ["all roads lead to Rome"],
                        parts_of_speech: ["Expression"],
                        links: [],
                        tags: ["Proverb"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "すべて世はこともなし",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    {
                        word: "すべて世はこともなし",
                        reading: "すべてよはこともなし",
                    },
                    {
                        word: "すべて世は事もなし",
                        reading: "すべてよはこともなし",
                    },
                    {
                        word: "すべて世は事も無し",
                        reading: "すべてよはこともなし",
                    },
                    {
                        word: "全て世は事も無し",
                        reading: "すべてよはこともなし",
                    },
                    {
                        word: "全て世は事もなし",
                        reading: "すべてよはこともなし",
                    },
                ],
                senses: [
                    {
                        english_definitions: [
                            "all's right with the world",
                            "all is as it should be",
                        ],
                        parts_of_speech: ["Expression"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "518692c6d5dda7b2c60278d0",
                tags: [],
                jlpt: [],
                japanese: [{ word: "全ての教皇に関する大司教聖マラキの預言" }],
                senses: [
                    {
                        english_definitions: ["Prophecy of the Popes"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text:
                                    "Read “Prophecy of the Popes” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Prophecy_of_the_Popes?oldid=495489131",
                            },
                            {
                                text:
                                    "Read “全ての教皇に関する大司教聖マラキの預言” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/全ての教皇に関する大司教聖マラキの預言?oldid=42729744",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: false,
                    jmnedict: false,
                    dbpedia:
                        "http://dbpedia.org/resource/Prophecy_of_the_Popes",
                },
            },
            {
                slug: "51869eacd5dda7b2c608143a",
                tags: [],
                jlpt: [],
                japanese: [
                    {
                        word:
                            "全ての移住労働者及びその家族の権利の保護に関する国際条約",
                    },
                ],
                senses: [
                    {
                        english_definitions: [
                            "United Nations Convention on the Protection of the Rights of All Migrant Workers and Members of Their Families",
                        ],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text:
                                    "Read “United Nations Convention on the Protection of the Rights of All Migrant Workers and Members of Their Families” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/United_Nations_Convention_on_the_Protection_of_the_Rights_of_All_Migrant_Workers_and_Members_of_Their_Families?oldid=492223316",
                            },
                            {
                                text:
                                    "Read “全ての移住労働者及びその家族の権利の保護に関する国際条約” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/全ての移住労働者及びその家族の権利の保護に関する国際条約?oldid=41322953",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: false,
                    jmnedict: false,
                    dbpedia:
                        "http://dbpedia.org/resource/United_Nations_Convention_on_the_Protection_of_the_Rights_of_All_Migrant_Workers_and_Members_of_Their_Families",
                },
            },
            {
                slug: "51869a4ad5dda7b2c605fde9",
                tags: [],
                jlpt: [],
                japanese: [{ word: "全ての教皇に関する預言" }],
                senses: [
                    {
                        english_definitions: [
                            "Vaticinia de Summis Pontificibus",
                        ],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text:
                                    "Read “Vaticinia de Summis Pontificibus” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Vaticinia_de_Summis_Pontificibus?oldid=491283151",
                            },
                            {
                                text:
                                    "Read “全ての教皇に関する預言” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/全ての教皇に関する預言?oldid=42187512",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: false,
                    jmnedict: false,
                    dbpedia:
                        "http://dbpedia.org/resource/Vaticinia_de_Summis_Pontificibus",
                },
            },
        ],
    },
    の: {
        meta: { status: 200 },
        data: [
            {
                slug: "の",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "の" }],
                senses: [
                    {
                        english_definitions: ["indicates possessive"],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["乃"],
                        antonyms: [],
                        source: [],
                        info: ["occasionally ん, orig. written 乃 or 之"],
                    },
                    {
                        english_definitions: [
                            "nominalizes verbs and adjectives",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            'substitutes for "ga" in subordinate phrases',
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["が"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "(at sentence-end, falling tone) indicates a confident conclusion",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["often ん"],
                    },
                    {
                        english_definitions: [
                            "(at sentence-end) indicates emotional emphasis",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Female term or language"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "(at sentence-end, rising tone) indicates question",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["No (kana)"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “No (kana)” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/No_(kana)?oldid=488450327",
                            },
                            {
                                text: "Read “の” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/の?oldid=41574436",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/No_(kana)",
                },
            },
            {
                slug: "野",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n3"],
                japanese: [
                    { word: "野", reading: "の" },
                    { word: "野", reading: "や" },
                    { word: "野", reading: "ぬ" },
                    { word: "埜", reading: "の" },
                    { word: "埜", reading: "や" },
                    { word: "埜", reading: "ぬ" },
                ],
                senses: [
                    {
                        english_definitions: ["plain", "field"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["hidden (structural) member"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: ["の"],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["wild"],
                        parts_of_speech: ["Noun - used as a prefix"],
                        links: [],
                        tags: [],
                        restrictions: ["の"],
                        see_also: ["野ウサギ"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["lacking a political post"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: ["や"],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "乃",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "乃", reading: "の" },
                    { word: "之", reading: "の" },
                ],
                senses: [
                    {
                        english_definitions: ["'s", "of", "belonging to"],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: ["Archaism"],
                        restrictions: [],
                        see_also: ["の"],
                        antonyms: [],
                        source: [],
                        info: ["indicates possessive; 之 used esp. on tombs"],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "幅-1",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "幅", reading: "の" },
                    { word: "布", reading: "の" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "unit of measurement for cloth breadth (30-38 cm)",
                        ],
                        parts_of_speech: [
                            "Noun",
                            "Noun - used as a suffix",
                            "Counter",
                        ],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [
                            "after a number in the hito-, futa-, mi- counting system",
                        ],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "箆-1",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "箆", reading: "の" },
                    { word: "篦", reading: "の" },
                ],
                senses: [
                    {
                        english_definitions: ["shaft (of an arrow)"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Archaism"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "arrow bamboo (Pseudosasa japonica)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Archaism"],
                        restrictions: [],
                        see_also: ["矢竹"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "飲む",
                is_common: true,
                tags: ["wanikani10"],
                jlpt: ["jlpt-n5"],
                japanese: [
                    { word: "飲む", reading: "のむ" },
                    { word: "呑む", reading: "のむ" },
                    { word: "飮む", reading: "のむ" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "to drink",
                            "to gulp",
                            "to swallow",
                            "to take (medicine)",
                        ],
                        parts_of_speech: [
                            "Godan verb with mu ending",
                            "Transitive verb",
                        ],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [
                            "呑む often means swallowing whole, gulping, etc.",
                        ],
                    },
                    {
                        english_definitions: ["to smoke (tobacco)"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["喫む"],
                        antonyms: [],
                        source: [],
                        info: ["also written 喫む"],
                    },
                    {
                        english_definitions: ["to engulf", "to overwhelm"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to keep down", "to suppress"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to accept (e.g. demand, condition)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to make light of", "to conceal"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Drinking"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Drinking” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Drinking?oldid=492332399",
                            },
                            {
                                text: "Read “飲む” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/飲む?oldid=40486307",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Drinking",
                },
            },
            {
                slug: "乗り物",
                is_common: true,
                tags: ["wanikani11"],
                jlpt: ["jlpt-n4"],
                japanese: [
                    { word: "乗り物", reading: "のりもの" },
                    { word: "乗物", reading: "のりもの" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "vehicle",
                            "conveyance",
                            "transport",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "ride (playground, fair, carnival)",
                            "playground facility",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Vehicle"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Vehicle” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Vehicle?oldid=491581710",
                            },
                            {
                                text: "Read “乗り物” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/乗り物?oldid=42733206",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Vehicle",
                },
            },
            {
                slug: "農業",
                is_common: true,
                tags: ["wanikani10"],
                jlpt: ["jlpt-n3"],
                japanese: [{ word: "農業", reading: "のうぎょう" }],
                senses: [
                    {
                        english_definitions: ["agriculture"],
                        parts_of_speech: ["Noun", "No-adjective"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Agriculture"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Agriculture” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Agriculture?oldid=493785573",
                            },
                            {
                                text: "Read “農業” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/農業?oldid=42563495",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Agriculture",
                },
            },
            {
                slug: "農家",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n3"],
                japanese: [{ word: "農家", reading: "のうか" }],
                senses: [
                    {
                        english_definitions: ["farmer", "farming family"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["farmhouse"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Farmer"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Farmer” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Farmer?oldid=493057153",
                            },
                            {
                                text: "Read “農家” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/農家?oldid=42755244",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Farmer",
                },
            },
            {
                slug: "能",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n3"],
                japanese: [{ word: "能", reading: "のう" }],
                senses: [
                    {
                        english_definitions: ["talent", "gift", "function"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["noh (theatre)"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Noh"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Noh” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Noh?oldid=493106313",
                            },
                            {
                                text: "Read “能” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/能?oldid=42547730",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Noh",
                },
            },
        ],
    },
    単語: {
        meta: { status: 200 },
        data: [
            {
                slug: "単語",
                is_common: true,
                tags: ["wanikani15"],
                jlpt: ["jlpt-n3"],
                japanese: [{ word: "単語", reading: "たんご" }],
                senses: [
                    {
                        english_definitions: [
                            "word",
                            "vocabulary",
                            "(usually) single-character word",
                        ],
                        parts_of_speech: ["Noun", "No-adjective"],
                        links: [],
                        tags: ["linguistics terminology"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "単語集",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "単語集", reading: "たんごしゅう" }],
                senses: [
                    {
                        english_definitions: ["word book"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "単語検索",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "単語検索", reading: "たんごけんさく" }],
                senses: [
                    {
                        english_definitions: ["word search"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "単語文字",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "単語文字", reading: "たんごもじ" }],
                senses: [
                    {
                        english_definitions: ["logogram", "logograph"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "単語篇",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "単語篇", reading: "たんごへん" }],
                senses: [
                    {
                        english_definitions: ["glossary", "vocabulary"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "単語帳",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "単語帳", reading: "たんごちょう" }],
                senses: [
                    {
                        english_definitions: [
                            "vocabulary notebook",
                            "ring of vocabulary flash cards",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "単語表",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "単語表", reading: "たんごひょう" }],
                senses: [
                    {
                        english_definitions: ["vocabulary word list"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "単語カウント",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "単語カウント", reading: "たんごカウント" }],
                senses: [
                    {
                        english_definitions: ["word count"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Computer terminology"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
        ],
    },
    を: {
        meta: { status: 200 },
        data: [
            {
                slug: "を",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "を" }],
                senses: [
                    {
                        english_definitions: [
                            "indicates direct object of action",
                        ],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "indicates subject of causative expression",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["indicates an area traversed"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "indicates time (period) over which action takes place",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "indicates point of departure or separation of action",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "indicates object of desire, like, hate, etc.",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["が"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Wo (kana)"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Wo (kana)” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Wo_(kana)?oldid=488113083",
                            },
                            {
                                text: "Read “を” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/を?oldid=41606890",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Wo_(kana)",
                },
            },
            {
                slug: "ウォッカ",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [
                    { reading: "ウォッカ" },
                    { reading: "ウオッカ" },
                    { reading: "ウオツカ" },
                    { reading: "ウォトカ" },
                    { reading: "ヲッカ" },
                    { reading: "ウォツカ" },
                    { reading: "バトカ" },
                    { reading: "ヴォドカ" },
                    { reading: "ボトカ" },
                ],
                senses: [
                    {
                        english_definitions: ["vodka"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [{ language: "Russian", word: "" }],
                        info: [],
                    },
                    {
                        english_definitions: ["Vodka"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Vodka” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Vodka?oldid=495321515",
                            },
                            {
                                text: "Read “ウォッカ” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/ウォッカ?oldid=42500961",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Vodka",
                },
            },
            {
                slug: "を通して",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "を通して", reading: "をとおして" }],
                senses: [
                    {
                        english_definitions: [
                            "through",
                            "throughout",
                            "through (the good offices of)",
                            "by way of",
                        ],
                        parts_of_speech: ["Expression"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "を以て",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "を以て", reading: "をもって" },
                    { word: "を以って", reading: "をもって" },
                ],
                senses: [
                    {
                        english_definitions: ["by (means of)", "with"],
                        parts_of_speech: ["Adverb"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "を巡って",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "を巡って", reading: "をめぐって" },
                    { word: "を廻って", reading: "をめぐって" },
                    { word: "を回って", reading: "をめぐって" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "in regard to",
                            "concerning (usu. of disputes)",
                        ],
                        parts_of_speech: ["Expression"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "を限りに",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "を限りに", reading: "をかぎりに" }],
                senses: [
                    {
                        english_definitions: [
                            "as of the end of (today, this month, etc.)",
                            "to make (today, etc.) the last (day)",
                        ],
                        parts_of_speech: ["Expression"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["声を限りに"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "を元にして",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "を元にして", reading: "をもとにして" },
                    { word: "を基にして", reading: "をもとにして" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "based on",
                            "built on",
                            "made from",
                        ],
                        parts_of_speech: ["Expression"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: ["を元として"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "ヲタ",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "ヲタ" }, { reading: "オタ" }],
                senses: [
                    {
                        english_definitions: ["nerd", "geek", "enthusiast"],
                        parts_of_speech: ["Noun", "Suffix"],
                        links: [],
                        tags: ["Colloquialism", "Abbreviation"],
                        restrictions: [],
                        see_also: ["オタク"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "オタク",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [
                    { reading: "オタク" },
                    { reading: "おたく" },
                    { reading: "ヲタク" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "otaku",
                            "geek",
                            "nerd",
                            "enthusiast",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Colloquialism"],
                        restrictions: [],
                        see_also: ["御宅"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "をば",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "をば" }],
                senses: [
                    {
                        english_definitions: [
                            "marks object of action, etc. (also adds emphasis)",
                        ],
                        parts_of_speech: ["Particle"],
                        links: [],
                        tags: ["Archaism"],
                        restrictions: [],
                        see_also: ["を"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
        ],
    },
    ハイライト: {
        meta: { status: 200 },
        data: [
            {
                slug: "ハイライト",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "ハイライト" }],
                senses: [
                    {
                        english_definitions: ["highlight"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Highlight"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text: "Read “Highlight” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Highlight?oldid=489223412",
                            },
                            {
                                text: "Read “ハイライト” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/ハイライト?oldid=36457735",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Highlight",
                },
            },
            {
                slug: "ハイライト版",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [{ word: "ハイライト版", reading: "ハイライトばん" }],
                senses: [
                    {
                        english_definitions: ["highlight halftone"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "ハイライトシーン",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { reading: "ハイライトシーン" },
                    { reading: "ハイライト・シーン" },
                ],
                senses: [
                    {
                        english_definitions: ["highlight (e.g. of match)"],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Wasei, word made in Japan"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [
                            { language: "English", word: "“highlight scene”" },
                        ],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
        ],
    },
    する: {
        meta: { status: 200 },
        data: [
            {
                slug: "為る",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n3", "jlpt-n5"],
                japanese: [{ word: "為る", reading: "する" }],
                senses: [
                    {
                        english_definitions: [
                            "to do",
                            "to carry out",
                            "to perform",
                        ],
                        parts_of_speech: ["Suru verb - irregular"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to cause to become",
                            "to make (into)",
                            "to turn (into)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to serve as",
                            "to act as",
                            "to work as",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to wear (clothes, a facial expression, etc.)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to judge as being",
                            "to view as being",
                            "to think of as",
                            "to treat as",
                            "to use as",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["as 〜にする,〜とする"],
                    },
                    {
                        english_definitions: ["to decide on", "to choose"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["as 〜にする"],
                    },
                    {
                        english_definitions: [
                            "to be sensed (of a smell, noise, etc.)",
                        ],
                        parts_of_speech: [
                            "Suru verb - irregular",
                            "intransitive verb",
                        ],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["as 〜がする"],
                    },
                    {
                        english_definitions: [
                            "to be (in a state, condition, etc.)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to be worth", "to cost"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["to pass (of time)", "to elapse"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to place, or raise, person A to a post or status B",
                        ],
                        parts_of_speech: [
                            "Suru verb - irregular",
                            "Transitive verb",
                        ],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["as AをBにする"],
                    },
                    {
                        english_definitions: [
                            "to transform A to B",
                            "to make A into B",
                            "to exchange A for B",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["as AをBにする"],
                    },
                    {
                        english_definitions: [
                            "to make use of A for B",
                            "to view A as B",
                            "to handle A as if it were B",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["as AをBにする"],
                    },
                    {
                        english_definitions: ["to feel A about B"],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: ["as AをBにする"],
                    },
                    {
                        english_definitions: [
                            'verbalizing suffix (applies to nouns noted in this dictionary with the part of speech "vs")',
                        ],
                        parts_of_speech: ["Suffix", "Suru verb - irregular"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            'creates a humble verb (after a noun prefixed with "o" or "go")',
                        ],
                        parts_of_speech: [
                            "Auxiliary verb",
                            "Suru verb - irregular",
                        ],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: ["お願いします", "御"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to be just about to",
                            "to be just starting to",
                            "to try to",
                            "to attempt to",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: ["とする"],
                        antonyms: [],
                        source: [],
                        info: ["as 〜うとする,〜ようとする"],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "刷る",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n2"],
                japanese: [
                    { word: "刷る", reading: "する" },
                    { word: "摺る", reading: "する" },
                ],
                senses: [
                    {
                        english_definitions: ["to print"],
                        parts_of_speech: [
                            "Godan verb with ru ending",
                            "Transitive verb",
                        ],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to color or pattern fabric using a wooden mold",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "擦る-1",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "擦る", reading: "する" },
                    { word: "摩る", reading: "する" },
                    { word: "磨る", reading: "する" },
                    { word: "擂る", reading: "する" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "to rub",
                            "to chafe",
                            "to strike (match)",
                            "to file",
                            "to frost (glass)",
                        ],
                        parts_of_speech: [
                            "Godan verb with ru ending",
                            "Transitive verb",
                        ],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "to lose (e.g. a match)",
                            "to forfeit",
                            "to squander one's money (e.g. through gambling, Pachinko, etc.)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "掏る",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "掏る", reading: "する" },
                    { reading: "スる" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "to pick someone's pocket",
                            "to pickpocket",
                        ],
                        parts_of_speech: [
                            "Godan verb with ru ending",
                            "Transitive verb",
                        ],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: ["掏摸"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "剃る",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n2", "jlpt-n1"],
                japanese: [
                    { word: "剃る", reading: "そる" },
                    { word: "剃る", reading: "する" },
                ],
                senses: [
                    {
                        english_definitions: ["to shave"],
                        parts_of_speech: [
                            "Godan verb with ru ending",
                            "Transitive verb",
                        ],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "鋭い",
                is_common: true,
                tags: ["wanikani40"],
                jlpt: ["jlpt-n3"],
                japanese: [{ word: "鋭い", reading: "するどい" }],
                senses: [
                    {
                        english_definitions: ["sharp (blade)", "pointed"],
                        parts_of_speech: ["I-adjective"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "sharp (pain)",
                            "stabbing",
                            "cutting (remark)",
                            "stinging",
                            "pointed (question or look)",
                            "screeching (noise)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "perceptive",
                            "keen",
                            "quick (mind)",
                            "astute",
                            "shrewd",
                            "discerning",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["nimble", "agile", "quick"],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "すると",
                is_common: true,
                tags: [],
                jlpt: ["jlpt-n4", "jlpt-n3"],
                japanese: [{ reading: "すると" }],
                senses: [
                    {
                        english_definitions: ["thereupon", "hereupon"],
                        parts_of_speech: ["Conjunction"],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "スルー",
                is_common: true,
                tags: [],
                jlpt: [],
                japanese: [{ reading: "スルー" }],
                senses: [
                    {
                        english_definitions: [
                            "ignoring",
                            "looking the other way",
                            "letting pass",
                        ],
                        parts_of_speech: ["Noun", "Suru verb"],
                        links: [],
                        tags: ["Colloquialism"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [{ language: "English", word: "“through”" }],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "passing through",
                            "going through",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "ball hit through net (in tennis)",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Sports term"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                ],
                attribution: { jmdict: true, jmnedict: false, dbpedia: false },
            },
            {
                slug: "鯣烏賊",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "鯣烏賊", reading: "するめいか" },
                    { reading: "スルメイカ" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "Japanese common squid",
                            "Pacific flying squid (Todarodes pacificus)",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Japanese Flying Squid"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text:
                                    "Read “Japanese Flying Squid” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Japanese_Flying_Squid?oldid=493110067",
                            },
                            {
                                text: "Read “スルメイカ” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/スルメイカ?oldid=41138065",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia:
                        "http://dbpedia.org/resource/Japanese_Flying_Squid",
                },
            },
            {
                slug: "鯣",
                is_common: false,
                tags: [],
                jlpt: [],
                japanese: [
                    { word: "鯣", reading: "するめ" },
                    { reading: "スルメ" },
                ],
                senses: [
                    {
                        english_definitions: [
                            "dried squid",
                            "dried cuttlefish",
                        ],
                        parts_of_speech: ["Noun"],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "Japanese common squid (Todarodes pacificus)",
                        ],
                        parts_of_speech: [],
                        links: [],
                        tags: ["Usually written using kana alone"],
                        restrictions: [],
                        see_also: ["鯣烏賊"],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: [
                            "(thing that) grows on one over time",
                        ],
                        parts_of_speech: ["Noun - used as a prefix"],
                        links: [],
                        tags: ["Slang", "Usually written using kana alone"],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                    },
                    {
                        english_definitions: ["Dried shredded squid"],
                        parts_of_speech: ["Wikipedia definition"],
                        links: [
                            {
                                text:
                                    "Read “Dried shredded squid” on English Wikipedia",
                                url:
                                    "http://en.wikipedia.org/wiki/Dried_shredded_squid?oldid=490861803",
                            },
                            {
                                text: "Read “スルメ” on Japanese Wikipedia",
                                url:
                                    "http://ja.wikipedia.org/wiki/スルメ?oldid=40535508",
                            },
                        ],
                        tags: [],
                        restrictions: [],
                        see_also: [],
                        antonyms: [],
                        source: [],
                        info: [],
                        sentences: [],
                    },
                ],
                attribution: {
                    jmdict: true,
                    jmnedict: false,
                    dbpedia: "http://dbpedia.org/resource/Dried_shredded_squid",
                },
            },
        ],
    },
}

const _XHROpen = window.XMLHttpRequest.prototype.open

// Quick and dirty fix for a weird issue with kuromoji.js where it treats
// the URL like a path.
window.XMLHttpRequest.prototype.open = function(a, b, c) {
    if (b.includes(API_URL.replace("//", "/"))) {
        // If it detects that 'https:/' is used, it will replace it
        // with 'https://'
        arguments[1] = arguments[1].replace(API_URL.replace("//", "/"), API_URL)
    }
    return _XHROpen.apply(this, arguments)
}

const getInnerDepth = node => {
    return node.childNodes.length - node.children.length
}

window.getInnerDepth = getInnerDepth

class Yomu {
    openWords = []
    searchTags = [
        ...new Array(6).fill().map((_, i) => `h${i + 1}`),
        "span",
        "p",
        "div*",
    ]
    blockedTags = ["html", "body", "script", "object"]
    tokenizeQueue = {}
    dictionaryQueue = {}
    constructor() {
        // The yomu-mount is where all dictionary-boxes are appended to
        // when displayed.
        this.mount = document.createElement("yomu-mount")
    }
    // init loads the dictionary and builds the tokenizer.
    init = async _ => {
        // this.process()

        // Add the yomu-mount to the end of the body.
        document.body.prepend(this.mount)
        this.attachListeners()
    }
    // messagePipe receives and interprets messages from the yomu worker.
    messagePipe = (request, sender, sendResponse) => {
        // Get the action from the request.
        // In this model, the request functions similarly to a Redux
        // action and the action attribute signals what type of action to
        // dispatch.
        const { action } = request

        switch (action) {
            case TOKENIZE_COMPLETED:
                this.applyElement(request.elementId, request.tokenized)
                break
            case DICTIONARY_LOOKUP_COMPLETED:
                this.createDictionaryPopup(request.requestId, request.json)
                break
            case DICTIONARY_LOOKUP_ERROR:
                this.dictionaryError(request.requestId)
                break
            default:
                break
        }
    }
    // sendMessage sends a message to the yomu worker.
    sendMessage = message => {
        chrome.runtime.sendMessage(message)
    }
    // attachListeners attaches listeners to the highlighted words in the DOM.
    attachListeners = _ => {
        // Find all yomu-highlighted-words and attach them to the
        // highlightClick function.
        document
            .querySelectorAll("yomu-highlighted-word")
            .forEach(item =>
                item.addEventListener("click", this.highlightClick)
            )
    }
    // clearMount clears all the elements inside the mount.
    clearMount = _ => {
        // For every child of the mount, trigger the disappearing
        // transition and remove it.
        Array.from(this.mount.children).forEach(this.disappear)
        // Reset the open words.
        this.openWords = []
    }
    // disappear makes a dictionary box transition out.
    disappear = target => {
        // Add the transition class to the element.
        target.classList.add("transition-out")
        // After 300ms (transition duration) remove the target.
        setTimeout(() => this.mount.removeChild(target), 300)
    }
    // failed highlights a word that failed.
    failed = target => {
        target.classList.remove("thinking")
        target.classList.add("error")
    }
    // highlightClick opens a prompt when a highlighted word is clicked.
    highlightClick = async e => {
        // Get the word from the innerHTML of the element.
        const word = e.target.innerText
        // If the word is the currently open word, just clear the mount
        // (close the dictionary box) and return.
        if (this.openWords.includes(word)) return this.clearMount()

        // Clear it anyway.
        this.clearMount()

        e.target.classList.add("thinking")
        e.target.classList.remove("error")

        const json = LOOK_UP_TABLE[word]

        if (!json.data) return this.failed(e.target)

        if (!json.data[0]) return this.failed(e.target)

        const vocab = json.data[0]
        const japanese = vocab.japanese[0]
        const senses = vocab.senses[0]

        const element = document.createElement("yomu-dictionary-box")

        element.innerHTML += `<span class="yomu-dictionary-reading">${
            japanese.reading
        }</span><span class="yomu-dictionary-title">${japanese.word ||
            japanese.reading}</span><p class="definitions">${senses.english_definitions.join(
            ", "
        )}</p>`

        const bound = e.target.getBoundingClientRect()

        element.style.bottom =
            window.innerHeight -
            (bound.y - this.mount.getBoundingClientRect().y) +
            "px"
        element.style.left = bound.x + "px"

        this.mount.append(element)
        this.openWords.push(word)
        e.target.classList.remove("thinking")
    }
    // createDictionaryPopup appends a dictionary-box to the mount based on
    // a response received from the worker.
    createDictionaryPopup = (requestId, json) => {
        // Get the item and word requested from the dictionary queue.
        const { item, word } = this.dictionaryQueue[requestId]

        // Throw an error to the client if anything went wrong.
        if (!json.data) return this.failed(item)
        if (!json.data[0]) return this.failed(item)

        const vocab = json.data[0]
        const japanese = vocab.japanese[0]
        const senses = vocab.senses[0]

        // Create a new yomu-dictionary-box element to display the
        // definition to the user.
        const element = document.createElement("yomu-dictionary-box")

        // Add the information to the innerHTML of the dictionary-box.
        element.innerHTML += `<span class="yomu-dictionary-reading">${japanese.reading ||
            japanese.word}</span><span class="yomu-dictionary-title">${japanese.word ||
            japanese.reading}</span><p class="definitions">${senses.english_definitions.join(
            ", "
        )}</p>`

        // Get the position of the clicked text in order to make
        // calculations on where to show the dictionary-box.
        const bound = item.getBoundingClientRect()

        element.style.bottom =
            window.innerHeight -
            (bound.y - this.mount.getBoundingClientRect().y) +
            "px"
        element.style.left = bound.x + "px"

        // Append the element and add it to the openWords array.
        this.mount.append(element)
        this.openWords.push(word)

        // Reset the loading state.
        item.classList.remove("thinking")

        // Clear the queue item.
        delete this.dictionaryQueue[requestId]
    }
    // dictionaryError shows an error on a failed dictionary lookup.
    dictionaryError = ({ requestId }) => {
        // Get the item from the dictionary queue.
        const { item } = this.dictionaryQueue[requestId]
        // Show the failed indicator.
        this.failed(item)

        // Clear the queue item.
        delete this.dictionaryQueue[requestId]
    }
    // process looks through the current tab and attempts to process text.
    process = async _ => {
        this.searchTags
            .map(x => [x.replace("*", ""), x.includes("*")])
            .forEach(this.processTag)
    }
    // processTag processes a single tag.
    processTag = async ([tag, dangerous]) => {
        document
            .querySelectorAll(tag)
            .forEach(item => this.processElement(item, dangerous))
    }
    // processElement processes a single element for tokenization.
    processElement = async (item, dangerous) => {
        if (Array.from(item.children).filter(x => x.tagName != "BR").length > 0)
            if (dangerous) return null

        if (this.blockedTags.includes(item.tagName.toLowerCase())) return

        let content = item.innerHTML

        // If the element is dangerous (eg: div) then make sure it has
        // no children. (can lead to weird lag/errors)
        if (dangerous && getInnerDepth(item) > 1) return

        // Generate a pseudo-random ID for the element using the element's
        // height plus a random number.
        const elementId =
            item.clientHeight + Math.floor(Math.random() * 1000000000000)

        // Add an object to the token queue for this item.
        this.tokenizeQueue[elementId] = {
            item,
            content,
        }

        // Send the TOKENIZE request to the worker.
        this.sendMessage({
            action: TOKENIZE,
            elementId,
            content: content.replace(
                /<(.*?)>(.*?)<\/(.*?)>|<br>|<\/br>/g,
                match => {
                    console.log("h", match)
                    return "*".repeat(match.length)
                }
            ),
        })
    }
    // applyElement applies highlights to an element after its content has
    // been tokenized.
    applyElement = async (elementId, tokenized) => {
        // Get the item from the tokenize queue.
        if (!this.tokenizeQueue[elementId]) return
        let { item, content } = this.tokenizeQueue[elementId]

        if (!item || !content) return

        // Filter out the bad stuff. (Non-Japanese characters, etc.)
        tokenized = tokenized.filter(
            token =>
                !token.surface_form.match(
                    /[0-9]|[a-z]|[A-Z]|[@#-•!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]|[ ]|[「」『』、。：？；]|[\n]/
                )
        )

        // Split the content into an array of every character to allow for injection later.
        let split = content.split("")

        // For each token, add the yomu-highlighted-word element around the word.
        tokenized.forEach(token => {
            if (split[token.word_position - 6] == "/") console.log(token)
            split[
                token.word_position - 1
            ] = `<yomu-highlighted-word class="yomu-highlighted-word">${
                split[token.word_position - 1]
            }`

            if (
                split[token.word_position - 2 + token.surface_form.length] ==
                "b"
            )
                console.log(
                    "THIS ONE",
                    token,
                    split[token.word_position - 3 + token.surface_form.length],
                    split
                )

            split[
                token.word_position - 2 + token.surface_form.length
            ] += `</yomu-highlighted-word>`
        })

        // Join the array again and replace the inner content of the tag with it.
        if (split.join("") != item.innerHTML) item.innerHTML = split.join("")

        // Re-attach new listeners.
        this.attachListeners()

        // Delete the item from the queue.
        delete this.tokenizeQueue[elementId]
    }
}

// Initialize the Yomu class.
const yomu = new Yomu()
// Initialize Yomu.
yomu.init()
