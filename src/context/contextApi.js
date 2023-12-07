import React,{createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/api";



export const Context = createContext();


export const AppContext = (props) =>{
    const [loading,setLoading] = useState(false);
    const [searchResults,setSearchResults] = useState(false);
    const [selectCategories,setSelectCategories] = useState("New");
    const [mobileMenu,setMobileMenu] = useState(false);


    useEffect(() => {
        fetchSelectedCaegoryData(selectCategories)
    }, [selectCategories]);

    //Getting the data from API based on selected categories
    const fetchSelectedCaegoryData = (query) => {
        setLoading(true);
        
        /*Actual api call******/
        fetchDataFromApi(`search/?q=${query}`).then((contents) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        })
        

        /*
        const contents = 
        {
            "contents": [
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/tYiFjX4l-162Vaqp54ifxR6lN0UCWoPrN6u8YsrEqmI0TKK3-KAfhnVMSn0M5QyE6DNgqkN0KQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CBSNewYork",
                            "channelId": "UCNZyLULUQBp5e9Q1cKtvk6Q",
                            "title": "CBS New York"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Supporters of Israel demonstrated outside the United Nations. CBS New York's Kristie Keleshian has the story.",
                        "isLiveNow": false,
                        "lengthSeconds": 118,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/WtniX6EDjWs/mqdefault_6s.webp?du=3000&sqp=CKLrlakG&rs=AOn4CLASTk7h-Qg8UzjHoM5pms9UfUcgjw",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 day ago",
                        "stats": {
                            "views": 13789
                        },
                        "thumbnails": [
                            {
                                "height": 270,
                                "url": "https://i.ytimg.com/vi/WtniX6EDjWs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr4iO8hv3FWcSjtxcPwOCpl95iqA",
                                "width": 480
                            }
                        ],
                        "title": "Pro-Israel, Pro-Palestine rallies held in New York City",
                        "videoId": "WtniX6EDjWs"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CNN",
                            "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
                            "title": "CNN"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "Russian President Vladimir Putin has announced that Russia has successfully carried out a test of a new generation of ...",
                        "isLiveNow": false,
                        "lengthSeconds": 325,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/yqaeGmzE3SQ/mqdefault_6s.webp?du=3000&sqp=CJyGlqkG&rs=AOn4CLB1u_biIYnnWovOdL_wVlJrG4x7-Q",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "3 days ago",
                        "stats": {
                            "views": 607351
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv5xOd23Y5NThzaH0tl8IG6f6WIQ",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjwPkzYAuKfWCNahoGFWvPO1XEUQ",
                                "width": 720
                            }
                        ],
                        "title": "Hear Putin's threat to the world after Russia tests new nuclear missile",
                        "videoId": "yqaeGmzE3SQ"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKbSMbYWQ5TLMPPDKBf_oJX6QHvatlPZkJt6YLpj9Oc=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CNBC",
                            "channelId": "UCvJJ_dzjViJCoLf5uKUTwoA",
                            "title": "CNBC"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Drivers headed to downtown Manhattan will face a new toll beginning in spring 2024. The final fee, which is still up for debate, ...",
                        "isLiveNow": false,
                        "lengthSeconds": 763,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/cjG_8zFVFAw/mqdefault_6s.webp?du=3000&sqp=CKTxlakG&rs=AOn4CLD_t8ZfLtXwS5Z4G3x1TBCTESRBRA",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "2 days ago",
                        "stats": {
                            "views": 390257
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3RuNfVrQ7tdCaMvUWchDuScpOUA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNBJsD7SDW-xamWweFf6C079PdA",
                                "width": 720
                            }
                        ],
                        "title": "Why New York Will Charge $23/Day To Drive Into Manhattan",
                        "videoId": "cjG_8zFVFAw"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKYYrXovd5Y4i_arKZLoZISQz1umMSBhp6xYxqVFug=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@ForbesBreakingNews",
                            "channelId": "UCg40OxZ1GYh3u3jBntB6DLg",
                            "title": "Forbes Breaking News"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Former President Trump holds a 2024 campaign rally in Wolfeboro, New Hampshire. Fuel your success with Forbes.",
                        "isLiveNow": false,
                        "lengthSeconds": 5067,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/Fk2jPBvRJrA/mqdefault_6s.webp?du=3000&sqp=CLCRlqkG&rs=AOn4CLCWcwLAUvHIGL0lsFEJKR2GCcgE9w",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "23 hours ago",
                        "stats": {
                            "views": 166034
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/Fk2jPBvRJrA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2UAurAUTZe-74lrN7xnkgboFFwg",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/Fk2jPBvRJrA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5m6LG2hwVgUb5WXBE1xxHlp7AJA",
                                "width": 720
                            }
                        ],
                        "title": "BREAKING NEWS: Trump Goes Scorched Earth On Biden At New Hampshire Rally As 2024 Primaries Near",
                        "videoId": "Fk2jPBvRJrA"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKY8F_PNW1bMFs7xKOk2Ias-j7N-9C2eoNj8HKjeuN4=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@msnbc",
                            "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
                            "title": "MSNBC"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "MSNBC legal analyst Lisa Rubin reports on the fifth day of former President Trump's civil fraud trial in New York and what new ...",
                        "isLiveNow": false,
                        "lengthSeconds": 173,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/2ZS7RwdtsL0/mqdefault_6s.webp?du=3000&sqp=CNDelakG&rs=AOn4CLBlDwJq0Hbk45ulMMM2LhaToLZx8Q",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "3 days ago",
                        "stats": {
                            "views": 183309
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/2ZS7RwdtsL0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoEBF87kmQySa0goPxoLNn3JW0kA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/2ZS7RwdtsL0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-la1oLB36mZE-7uxlr4x8ssSifA",
                                "width": 720
                            }
                        ],
                        "title": "Trump's New York civil fraud trial wraps up its first week",
                        "videoId": "2ZS7RwdtsL0"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@ABCNews",
                            "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                            "title": "ABC News"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "An 18-year-old suspect has been charged with murder in connection with the stabbing of Brooklyn, New York, activist Ryan ...",
                        "isLiveNow": false,
                        "lengthSeconds": 134,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/B2uA4evo6JU/mqdefault_6s.webp?du=3000&sqp=CJTllakG&rs=AOn4CLCo3OV_A09ZYCQ1S0IgjlnUWa-lxQ",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "4 days ago",
                        "stats": {
                            "views": 244999
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/B2uA4evo6JU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI_FHvdBmxeppOHZMh5YQv7Go92w",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/B2uA4evo6JU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVeEUw_KLZEK8fQM1K-hTykW7a2w",
                                "width": 720
                            }
                        ],
                        "title": "Suspect charged in fatal NYC stabbing",
                        "videoId": "B2uA4evo6JU"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKYoN2d5A2-KNr1BfTS2rVGpfRV1NXwghB9VQfco8g=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@wgntv",
                            "channelId": "UCDrLGkZTcNCshOLiKi5NtEw",
                            "title": "WGN News"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "New York City is challenging a unique legal agreement that requires it to provide emergency housing to anyone who asks for it, as ...",
                        "isLiveNow": false,
                        "lengthSeconds": 46,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/wmxWtlXrG_Q/mqdefault_6s.webp?du=3000&sqp=COjplakG&rs=AOn4CLBxj6gNihz2M2FNFfyi9Y5zezhNbQ",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "5 days ago",
                        "stats": {
                            "views": 29443
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/wmxWtlXrG_Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZNbse8y5WTm4vmeQLdiJo1yc6zg",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/wmxWtlXrG_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPlH1BU-8fWp8UIhOASR4lQJyKw",
                                "width": 720
                            }
                        ],
                        "title": "New York City moves to suspend 'right to shelter' as migrant influx continues",
                        "videoId": "wmxWtlXrG_Q"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKY8F_PNW1bMFs7xKOk2Ias-j7N-9C2eoNj8HKjeuN4=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@msnbc",
                            "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
                            "title": "MSNBC"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "New York Times Investigative Reporter Susanne Craig, ProPublica Reporter Andrea Bernstein, and Donny Deutsch, Host of the ...",
                        "isLiveNow": false,
                        "lengthSeconds": 694,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/NhSMDf__51E/mqdefault_6s.webp?du=3000&sqp=CMzylakG&rs=AOn4CLDGQHUTcmaldsNu_ECgMImrWqkitw",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "4 days ago",
                        "stats": {
                            "views": 2320995
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/NhSMDf__51E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEHCCVXlSqF90r9iNhAmm3vg1wig",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/NhSMDf__51E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKlB1pe5Qy9wDcqUBNPy0-RhgUBA",
                                "width": 720
                            }
                        ],
                        "title": "‘It’s over, lights out' : Nicolle says Trump 'cannot do business in New York'",
                        "videoId": "NhSMDf__51E"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@ABCNews",
                            "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                            "title": "ABC News"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Growing concerns about Ukraine's weapon supplies and how much longer they can last. SUBSCRIBE to ABC News on YouTube: ...",
                        "isLiveNow": false,
                        "lengthSeconds": 110,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/4x7UmgmrRdo/mqdefault_6s.webp?du=3000&sqp=CPLmlakG&rs=AOn4CLBVHlbKUFH6M-vcYFhZmHPMsAIa1w",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "2 days ago",
                        "stats": {
                            "views": 130833
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/4x7UmgmrRdo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9z3gZyjJ2ffPPgcpj1n9hOzqYng",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/4x7UmgmrRdo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAZ_kUbZvolaKC7KkGlF5brLgJZw",
                                "width": 720
                            }
                        ],
                        "title": "Latest in Ukraine war | GMA",
                        "videoId": "4x7UmgmrRdo"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@ABCNews",
                            "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                            "title": "ABC News"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Police are looking for a suspect in the death of Ryan Carson, 31, a well-known social justice advocate. WATCH THE FULL ...",
                        "isLiveNow": false,
                        "lengthSeconds": 189,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/pba_6PpFAHY/mqdefault_6s.webp?du=3000&sqp=CLiJlqkG&rs=AOn4CLBt-u-ZEAeaedXpXbAvjxY3XZ_oVQ",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "5 days ago",
                        "stats": {
                            "views": 136385
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/pba_6PpFAHY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMGDSmbW3fjuQ4hmqxalS0-Y2Z1g",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/pba_6PpFAHY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdZ-DuY_LFNpWFbujdFLa8-K3lww",
                                "width": 720
                            }
                        ],
                        "title": "Man stabbed to death in New York City",
                        "videoId": "pba_6PpFAHY"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/e5534L93nUsZQ5tvC4fg0agL6vkbrJNY08ng7O3smXtJzEjrUhUpB93nMIDCauqNBKEuqv1e=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@newheightshow",
                            "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
                            "title": "New Heights"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "92%ers we are back with another episode of New Heights presented by our friends at Experian and the all-new Experian Debit ...",
                        "isLiveNow": false,
                        "lengthSeconds": 5767,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/7Zga0N7-0j8/mqdefault_6s.webp?du=3000&sqp=CPP2lakG&rs=AOn4CLAwcEE4S-MVq33Pqa-jBbtlt134Ag",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "6 days ago",
                        "stats": {
                            "views": 1169894
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/7Zga0N7-0j8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBksKeWO90svmMlZ-ctCBzQ6EV7JQ",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/7Zga0N7-0j8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCft2B6-AkvnLGoBzL78iys34EBPw",
                                "width": 720
                            }
                        ],
                        "title": "Jason Survives Overtime, Travis Escapes from New York and The NFL Needs to Calm Down | Ep 57",
                        "videoId": "7Zga0N7-0j8"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/rxRXEXiUFdpJE2oPJkjFVuPhJVRMLGtJCZxGc7AxoCbpmL6sR6Bpm6X64kZ8GQmJvJfyH5Ei2ko=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Official Artist Channel",
                                    "type": "OFFICIAL_ARTIST_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": null,
                            "channelId": "UCVo9Vl4FlCQXUOdqVdAWqug",
                            "title": "Tye Tribbett"
                        },
                        "badges": [],
                        "descriptionSnippet": "Lyrics: Ah Ah Tripp Sheesh New new new Everything new new new new New new everything new Everything fresh, everything, ...",
                        "isLiveNow": false,
                        "lengthSeconds": 196,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/WDlTm3XiGn8/mqdefault_6s.webp?du=3000&sqp=COTqlakG&rs=AOn4CLD3-ueyN3JrCBjmeGSBZVLghoMnVg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 year ago",
                        "stats": {
                            "views": 1202537
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/WDlTm3XiGn8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYazrWdDY0IEgUbZBAzLnMsq7r4A",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/WDlTm3XiGn8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQoY2jocihKjZlKy6EL4WN3TDyqQ",
                                "width": 720
                            }
                        ],
                        "title": "Tye Tribbett - New (Lyric Video)",
                        "videoId": "WDlTm3XiGn8"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@NBCNews",
                            "channelId": "UCeY0bbntWzzVIaj2z3QigXg",
                            "title": "NBC News"
                        },
                        "badges": [],
                        "descriptionSnippet": "Officials say there were over 200000 illegal crossings at the southern border last month and a record three million migrants that ...",
                        "isLiveNow": false,
                        "lengthSeconds": 169,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/kd3PDZMz0_w/mqdefault_6s.webp?du=3000&sqp=CPiIlqkG&rs=AOn4CLCPF9VSSTPbWZO1ct9hLINs-kv_Rw",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "7 days ago",
                        "stats": {
                            "views": 790818
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/kd3PDZMz0_w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPcHayllw1hga591xxo0oGuBlEPA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/kd3PDZMz0_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGiaojxCzXCZngq-efMmgYfE7B0Q",
                                "width": 720
                            }
                        ],
                        "title": "New York City public hospitals overwhelmed by increase of migrants",
                        "videoId": "kd3PDZMz0_w"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@ABCNews",
                            "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                            "title": "ABC News"
                        },
                        "badges": [
                            "LIVE"
                        ],
                        "descriptionSnippet": "breakingnews #livenews #abcnews #news ABC News Live brings you 24/7 coverage of the latest news headlines and events ...",
                        "isLiveNow": true,
                        "lengthSeconds": null,
                        "movingThumbnails": null,
                        "publishedTimeText": null,
                        "stats": {
                            "viewers": 3803
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzTbCK4LgDX2goVywcKhsYGj0OIg",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi78QcHPft75MgJhotChhIxlVpfA",
                                "width": 720
                            }
                        ],
                        "title": "LIVE: Latest News Headlines and Events l ABC News Live",
                        "videoId": "OOtxXPaQvoM"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKaWqx5IfcKbi5z8FgPsM_kA6NQ2zTAx8gr27yQcdQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@HYBELABELS",
                            "channelId": "UC3IZKseVpdzPSBaWxBxundA",
                            "title": "HYBE LABELS"
                        },
                        "badges": [
                            "4K",
                            "CC"
                        ],
                        "descriptionSnippet": "NewJeans (뉴진스) 'New Jeans' Official MV Producer: MIN HEE JIN Music Video Director: Youngeum Lee THE POWERPUFF ...",
                        "isLiveNow": false,
                        "lengthSeconds": 211,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/kcelgrGY1h8/mqdefault_6s.webp?du=3000&sqp=COH9lakG&rs=AOn4CLBEbrrNVm7TSmgLyDnnabai4cpjRw",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "3 months ago",
                        "stats": {
                            "views": 20748738
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAscTTeoGjtCSJAzNC47sLBK10eyQ",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0fvkqG9puCo0K_u3fIXozoO8Btg",
                                "width": 720
                            }
                        ],
                        "title": "NewJeans (뉴진스) 'New Jeans' Official MV",
                        "videoId": "kcelgrGY1h8"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKav3XjyKe5puNoAAyLUXQTFi8PZccUnvjWiYouZ7g=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@DemocracyNow",
                            "channelId": "UCzuqE7-t13O4NIDYJfakrhw",
                            "title": "Democracy Now!"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Transcript: https://www.democracynow.org/2023/10/10/headlines Democracy Now! is an independent global news hour that airs ...",
                        "isLiveNow": false,
                        "lengthSeconds": 756,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/QNPOIQ7R8SY/mqdefault_6s.webp?du=3000&sqp=CNbRlakG&rs=AOn4CLDm7DPZALS0zH6mq1nIqUE82FTC5A",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "2 hours ago",
                        "stats": {
                            "views": 47978
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/QNPOIQ7R8SY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLjdyDpSJx_n1S8qo44iFTc34O-w",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/QNPOIQ7R8SY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt73_Z6nJgTC4gLvMYm84ohUXJ8Q",
                                "width": 720
                            }
                        ],
                        "title": "Top U.S. & World Headlines — October 10, 2023",
                        "videoId": "QNPOIQ7R8SY"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKZdXO4D0ioO3jNWqmsORIFs7DPVW_mfCeeqO1_9dQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CNBCtelevision",
                            "channelId": "UCrp_UI8XtuYfpiqluWLD7Lw",
                            "title": "CNBC Television"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "Mary Ann Bartels, Sanctuary Wealth chief investment strategist, and Stephen Parker, JPMorgan Private Bank head of specialized ...",
                        "isLiveNow": false,
                        "lengthSeconds": 444,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/fMt1CRH1EeE/mqdefault_6s.webp?du=3000&sqp=CKbylakG&rs=AOn4CLATUwIj300zQPETCtdViPfT7M23Mw",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "5 hours ago",
                        "stats": {
                            "views": 9607
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/fMt1CRH1EeE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPBzBJQefim_4tpZBlvxv677uPWA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/fMt1CRH1EeE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDP-5OFq4tDchzm0FxuIXiW2n-aYQ",
                                "width": 720
                            }
                        ],
                        "title": "We'll reach new highs in equity markets by middle of next year, says JPMorgan's Stephen Parker",
                        "videoId": "fMt1CRH1EeE"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKZRucSXlbwsWWP17nEPo0F39VgfHDQsxu-xM8ze4jo=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@TODAY",
                            "channelId": "UChDKyKQ59fYz3JO2fl0Z6sg",
                            "title": "TODAY"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "Paul Newman and Joanne Woodward are the subject of their daughter Melissa's new photo book that gives a never-before-seen ...",
                        "isLiveNow": false,
                        "lengthSeconds": 356,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/COiYisqLFaQ/mqdefault_6s.webp?du=3000&sqp=CPDrlakG&rs=AOn4CLAxYxn_RpRaL-VFC7S38Y9vtNDPrA",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 hour ago",
                        "stats": {
                            "views": 1344
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/COiYisqLFaQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJeo4xLkUA_fPLnOqku_U9_R8sbA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/COiYisqLFaQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNyeicUN-a3TqH0nnnfgazZHuTPQ",
                                "width": 720
                            }
                        ],
                        "title": "Paul Newman and Joanne Woodward’s daughter shares their story",
                        "videoId": "COiYisqLFaQ"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKZ8zKlRRbO3apIHey6skDihX2lQ50k2tBOGJe_KXQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@PeppaPigOfficial",
                            "channelId": "UCAOtE1V7Ots4DjM8JLlrYgg",
                            "title": "Peppa Pig - Official Channel"
                        },
                        "badges": [],
                        "descriptionSnippet": "Whilst Playing with a town made of building blocks, Peppa and George decide to pretend to be giants and help all the tiny-toy ...",
                        "isLiveNow": false,
                        "lengthSeconds": 7517,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/5Az7oiGJBsc/mqdefault_6s.webp?du=3000&sqp=CPf7lakG&rs=AOn4CLBU14VncJMdy-XnwT0H4iVEpizcVg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "11 days ago",
                        "stats": {
                            "views": 494484
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/5Az7oiGJBsc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ0U-OiOVNmDBWn9FOWwLBynJeuA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/5Az7oiGJBsc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtyahXg6Hzskr5fqkjaRKVEZuPJQ",
                                "width": 720
                            }
                        ],
                        "title": "Peppa Pig Tales 🥾 The Very Muddy Obstacle Course 💦 BRAND NEW Peppa Pig Episodes",
                        "videoId": "5Az7oiGJBsc"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/QZHOFapdjy6brgolCYaNxJ2TUC6PBrtLJOKm7HPdz0mhanPzw4W_OpTt-gCaka8J5XCivKui=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@fox5atlanta",
                            "channelId": "UCjHWv2DU5-HLpogAAr386DQ",
                            "title": "FOX 5 Atlanta"
                        },
                        "badges": [
                            "CC"
                        ],
                        "descriptionSnippet": "A car explodes as the driver gets inside, a ten-year-old boy steals some construction equipment, and a young boys Halloween ...",
                        "isLiveNow": false,
                        "lengthSeconds": 158,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/AIdEYMbm-Y4/mqdefault_6s.webp?du=3000&sqp=CLKSlqkG&rs=AOn4CLDbehEx5U1p247kDiQ8YwXy_KphTQ",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "10 days ago",
                        "stats": {
                            "views": 383054
                        },
                        "thumbnails": [
                            {
                                "height": 270,
                                "url": "https://i.ytimg.com/vi/AIdEYMbm-Y4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkQ8ovsa9ueo5Uy4N5VX6_p_i3EQ",
                                "width": 480
                            }
                        ],
                        "title": "Across America: Car explodes with driver inside | FOX 5 News",
                        "videoId": "AIdEYMbm-Y4"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKYYrXovd5Y4i_arKZLoZISQz1umMSBhp6xYxqVFug=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@ForbesBreakingNews",
                            "channelId": "UCg40OxZ1GYh3u3jBntB6DLg",
                            "title": "Forbes Breaking News"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Former President Trump holds a 2024 campaign rally in Wolfeboro, New Hampshire. Fuel your success with Forbes.",
                        "isLiveNow": false,
                        "lengthSeconds": 5067,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/Fk2jPBvRJrA/mqdefault_6s.webp?du=3000&sqp=CLCRlqkG&rs=AOn4CLCWcwLAUvHIGL0lsFEJKR2GCcgE9w",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "23 hours ago",
                        "stats": {
                            "views": 166034
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/Fk2jPBvRJrA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2UAurAUTZe-74lrN7xnkgboFFwg",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/Fk2jPBvRJrA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5m6LG2hwVgUb5WXBE1xxHlp7AJA",
                                "width": 720
                            }
                        ],
                        "title": "BREAKING NEWS: Trump Goes Scorched Earth On Biden At New Hampshire Rally As 2024 Primaries Near",
                        "videoId": "Fk2jPBvRJrA"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKYDR7ndFuV9Zn3_drUMZ0C_6lY0YyTldcjRfUB0bQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CBSNews",
                            "channelId": "UC8p1vwvWtl6T73JiExfWs1g",
                            "title": "CBS News"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "A New York appeals court denied former President Donald Trump's request to halt proceedings as the second week of his fraud ...",
                        "isLiveNow": false,
                        "lengthSeconds": 187,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/fkoCthtwJyY/mqdefault_6s.webp?du=3000&sqp=CNDIlakG&rs=AOn4CLCLx30fKNs3iEuBu4mdhBeQXBq9jA",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "23 hours ago",
                        "stats": {
                            "views": 67148
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/fkoCthtwJyY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZvuiEmqjXSJ14MNs_0XSi7CMdmQ",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/fkoCthtwJyY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy3hnEQUF5TEtpM4MZzNJSgs-Sxg",
                                "width": 720
                            }
                        ],
                        "title": "Trump will not attend second week of New York civil trial",
                        "videoId": "fkoCthtwJyY"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKYzURF735O2hdGo7oXRc3bSw5dRFz3wScJtZVl0=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [],
                            "canonicalBaseUrl": "/@standup",
                            "channelId": "UCtw7q4SyOeoCwM1i_3x8lDg",
                            "title": "Comedy Central Stand-Up"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "Whitney Cummings, Ali Siddiq, Jim Gaffigan and more comedians talk about their favorite (and least favorite) sports. Paramount+ ...",
                        "isLiveNow": false,
                        "lengthSeconds": 2528,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/oiBRK_IBGjM/mqdefault_6s.webp?du=3000&sqp=CJGLlqkG&rs=AOn4CLC41vHUKprWIUVtkiCyeNLR-ptsMg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 hour ago",
                        "stats": {
                            "views": 1126
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/oiBRK_IBGjM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrE8GPGIzzSRLCY_10gPjOzcLzBQ",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/oiBRK_IBGjM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB39obal3UvVL1C9P3wsjLppEcBTQ",
                                "width": 720
                            }
                        ],
                        "title": "“Tom Brady Doesn’t Suck” - Comedians on Sports",
                        "videoId": "oiBRK_IBGjM"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/urTSWji9zKgvYWomSdHLgCSFyUagKXlysKiO1ZiZKg2fW1K8oGIZ_nQ4WbfEREBJ_9yuwQyY=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@WNBA",
                            "channelId": "UCO9a_ryN_l7DIDS-VIt-zmw",
                            "title": "WNBA"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "The Las Vegas Aces secure the Game 1 dub versus the New York Liberty, 99-82 in the 2023 #WNBAFinals presented by ...",
                        "isLiveNow": false,
                        "lengthSeconds": 545,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/wFeo-I5Vy34/mqdefault_6s.webp?du=3000&sqp=CI6KlqkG&rs=AOn4CLCsDqdod-hsGFACBEENS5Cg2HWzEg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 day ago",
                        "stats": {
                            "views": 51931
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/wFeo-I5Vy34/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr9AecAPUUivPhL-7rTd-Ycg3rTg",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/wFeo-I5Vy34/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuNQKIQCQrxSw3FxYR77_wrhSoOg",
                                "width": 720
                            }
                        ],
                        "title": "New York Liberty vs. Las Vegas Aces | FULL GAME HIGHLIGHTS | October 8, 2023",
                        "videoId": "wFeo-I5Vy34"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKZRucSXlbwsWWP17nEPo0F39VgfHDQsxu-xM8ze4jo=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@TODAY",
                            "channelId": "UChDKyKQ59fYz3JO2fl0Z6sg",
                            "title": "TODAY"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "Robert F. Kennedy Jr. has dropped his bid for the Democratic presidential nomination, instead declaring himself an independent ...",
                        "isLiveNow": false,
                        "lengthSeconds": 217,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/PPqks7zALZA/mqdefault_6s.webp?du=3000&sqp=CMD4lakG&rs=AOn4CLAFTcdJSRpaxSTcc3urq7oM-ckbcw",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "3 hours ago",
                        "stats": {
                            "views": 20296
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/PPqks7zALZA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXfKbsECjFsGpDP-ptO6WZCZJzpA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/PPqks7zALZA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDagy2qnYg3LdnzNExXBEd2Blnd_g",
                                "width": 720
                            }
                        ],
                        "title": "Robert F. Kennedy announces independent run for president",
                        "videoId": "PPqks7zALZA"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CNN",
                            "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
                            "title": "CNN"
                        },
                        "badges": [
                            "CC"
                        ],
                        "descriptionSnippet": "Exclusive footage shows Ukraine using an experimental \"sea baby\" drone to attack a hated Russian bridge to Crimea. CNN's Nick ...",
                        "isLiveNow": false,
                        "lengthSeconds": 235,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/u7STLTtOEOM/mqdefault_6s.webp?du=3000&sqp=CIvelakG&rs=AOn4CLB2-TA7rAzEB5Jd1mGr1kfof4oAWQ",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 month ago",
                        "stats": {
                            "views": 2407399
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/u7STLTtOEOM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnF9XUFRUqLAh85h01jf3-idsS2w",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/u7STLTtOEOM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC8BJJQLREAaj_5xOHsEhoPvZLIA",
                                "width": 720
                            }
                        ],
                        "title": "New video shows attack on $4 billion Russian bridge",
                        "videoId": "u7STLTtOEOM"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@NBCNews",
                            "channelId": "UCeY0bbntWzzVIaj2z3QigXg",
                            "title": "NBC News"
                        },
                        "badges": [
                            "CC"
                        ],
                        "descriptionSnippet": "NBC News' George Solis reports from the Big Apple on flood alerts facing residents of New York, New Jersey and Connecticut.",
                        "isLiveNow": false,
                        "lengthSeconds": 287,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/sRxS_rVXi6w/mqdefault_6s.webp?du=3000&sqp=CMCIlqkG&rs=AOn4CLCkvFJHkxtLlHyxxRijPl_4pSjypg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "10 days ago",
                        "stats": {
                            "views": 288368
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/sRxS_rVXi6w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB659sN--JRKdO-7QAwhr7hbIfyBA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/sRxS_rVXi6w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLZeoHcbkYK_EklVvnmWLHcABj0Q",
                                "width": 720
                            }
                        ],
                        "title": "Extreme flooding hits New York City, Gov. Hochul declares state of emergency",
                        "videoId": "sRxS_rVXi6w"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKZVR-MwyseiJRfg6pwqFFJjkcSCK9M1EytabVPjBg=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@nytimes",
                            "channelId": "UCqnbDFdCpuN8CMEg0VuEBqA",
                            "title": "The New York Times"
                        },
                        "badges": [
                            "New",
                            "CC"
                        ],
                        "descriptionSnippet": "When you're pregnant, there's plenty to worry about. Your baby, for example. Your own health. And then there's everyone else ...",
                        "isLiveNow": false,
                        "lengthSeconds": 215,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/TZMwxlQvX-4/mqdefault_6s.webp?du=3000&sqp=COrjlakG&rs=AOn4CLAQ3_C2Jv8X-UQ8wh32X2zJEhyNsw",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "3 hours ago",
                        "stats": {
                            "views": 3204
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/TZMwxlQvX-4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAK2AW5-O_8f4pbyHWuuhy3r911WA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/TZMwxlQvX-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXmTfKpK4r8NErAkR4rr6qEApptA",
                                "width": 720
                            }
                        ],
                        "title": "I’m Not 'Disgusting' for Running While Pregnant | NYT Opinion",
                        "videoId": "TZMwxlQvX-4"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/2VqdOiAU7s06uS9IemnYDJJNvzmkHisWOBuD46MpdL0LDblku6vrvaTpYTcvvx_9y50f2fXA1w=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@fox13seattle",
                            "channelId": "UC5bKZHg4PzURMOWcvanl6nA",
                            "title": "FOX 13 Seattle"
                        },
                        "badges": [
                            "CC"
                        ],
                        "descriptionSnippet": "Scientists discover a new species lurking in the depths of the southern ocean. This is the Antarctic Strawberry Feather Star.",
                        "isLiveNow": false,
                        "lengthSeconds": 37,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/Xlt4xZ7kAM8/mqdefault_6s.webp?du=3000&sqp=CMaHlqkG&rs=AOn4CLBfsthV7aGLen8vTsCY4kbvpMd2Qg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "2 months ago",
                        "stats": {
                            "views": 1581131
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/Xlt4xZ7kAM8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3-dPLImU_-rPTe7-BrJpbAnag0w",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/Xlt4xZ7kAM8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWFyFwUm0q7Tk3TO8etFEh8M2QAA",
                                "width": 720
                            }
                        ],
                        "title": "New species discovered in southern ocean",
                        "videoId": "Xlt4xZ7kAM8"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKYDR7ndFuV9Zn3_drUMZ0C_6lY0YyTldcjRfUB0bQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CBSNews",
                            "channelId": "UC8p1vwvWtl6T73JiExfWs1g",
                            "title": "CBS News"
                        },
                        "badges": [],
                        "descriptionSnippet": "Parts of New York City were hammered by heavy rain and flash flooding on Friday, prompting New York Gov. Kathy Hochul to ...",
                        "isLiveNow": false,
                        "lengthSeconds": 316,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/6KQueoaGQLY/mqdefault_6s.webp?du=3000&sqp=CMDrlakG&rs=AOn4CLAeYIW0zu6l515wE1oZREjwQHAbUA",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "10 days ago",
                        "stats": {
                            "views": 302531
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/6KQueoaGQLY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAurU1cNp_6lPFgPtsJR_PsIRtBSA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/6KQueoaGQLY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-Qt_g3agqpsfLXLcnMz1fmJrJkQ",
                                "width": 720
                            }
                        ],
                        "title": "Videos show New York City flooding, residents wading through rainwater",
                        "videoId": "6KQueoaGQLY"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@ABCNews",
                            "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                            "title": "ABC News"
                        },
                        "badges": [],
                        "descriptionSnippet": "A deluge of two month's worth of rain falling on parts of the city in 24 hours has caused life-threatening flooding in some areas.",
                        "isLiveNow": false,
                        "lengthSeconds": 194,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/5LnDkdgzLk8/mqdefault_6s.webp?du=3000&sqp=CIH3lakG&rs=AOn4CLDT6QzpIOm6gtCzNF5AviGtEAfbxQ",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "10 days ago",
                        "stats": {
                            "views": 1003205
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/5LnDkdgzLk8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqUjYTNpTJt1cTnfqUj5EO2tutSA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/5LnDkdgzLk8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqRhYBzA4fZuX11Y-Cs7YCYMToTw",
                                "width": 720
                            }
                        ],
                        "title": "New York declared state of emergency from flooding | GMA",
                        "videoId": "5LnDkdgzLk8"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/e5534L93nUsZQ5tvC4fg0agL6vkbrJNY08ng7O3smXtJzEjrUhUpB93nMIDCauqNBKEuqv1e=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@newheightshow",
                            "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
                            "title": "New Heights"
                        },
                        "badges": [],
                        "descriptionSnippet": "92 %ers, and probably a lot of you entering your “football era”, we are back with another episode of New Heights presented by our ...",
                        "isLiveNow": false,
                        "lengthSeconds": 3735,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/89VJaoEwvkE/mqdefault_6s.webp?du=3000&sqp=CPP-lakG&rs=AOn4CLCHuh5-xYPQ3wQSnfnlErSF5IC5dA",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "13 days ago",
                        "stats": {
                            "views": 2272773
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/89VJaoEwvkE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJritdk0I2X5QtPdX1FnPgEEF6LA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/89VJaoEwvkE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4OnsafJ7sNIUBApjjaFbGrBA0qA",
                                "width": 720
                            }
                        ],
                        "title": "Eagles Stay Unbeaten, Travis’ \"Biggest Catch\" and New Football Eras | Ep 55",
                        "videoId": "89VJaoEwvkE"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKbP9sjfrzulo-zY4557QHbU0AyPNdZKrcAeTfpqjg=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@HammyandOlivia",
                            "channelId": "UCItXVkLkMv3RbJesDZW0uYA",
                            "title": "Hammy and Olivia"
                        },
                        "badges": [],
                        "descriptionSnippet": null,
                        "isLiveNow": false,
                        "lengthSeconds": 42,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/_UKiryAvgw4/mqdefault_6s.webp?du=3000&sqp=CJyHlqkG&rs=AOn4CLDoK36TB_N5PmTKc7JOtKrX9Yd_Kg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "4 months ago",
                        "stats": {
                            "views": 10320563
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/_UKiryAvgw4/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARg-IFMoZTAP&rs=AOn4CLDiFCRjIsRA_ppW0xXB_6GbA7KpxA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/_UKiryAvgw4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARg-IFMoZTAP&rs=AOn4CLB7qAxWHF3Kd12WH_dlu75IjdcY0g",
                                "width": 720
                            }
                        ],
                        "title": "We got a new pet!",
                        "videoId": "_UKiryAvgw4"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/HD3LX_EARG8JVNSi5evzMEw527FgDI2p15sa0ozRTKJBgPG6ZGEzkHfzBFyN_KNfklidQWBHEw=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@Houseofhighlights",
                            "channelId": "UCqQo7ewe87aYAe7ub5UqXMw",
                            "title": "House of Highlights"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Boston Celtics vs New York Knicks - Full Game Highlights | October 9, 2023 NBA Preseason 1 HOUR OF DUNKS ...",
                        "isLiveNow": false,
                        "lengthSeconds": 452,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/ItEPznuZolA/mqdefault_6s.webp?du=3000&sqp=CKDilakG&rs=AOn4CLCeng2v-3aKH7gxbZjortHX7HZG0A",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "15 hours ago",
                        "stats": {
                            "views": 11495
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/ItEPznuZolA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW7NHDEPZWHw19i2PuYMCCwNZR1w",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/ItEPznuZolA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsdjnRYgg6SIztHAi4vvQIae_VsA",
                                "width": 720
                            }
                        ],
                        "title": "Boston Celtics vs New York Knicks - Full Game Highlights | October 9, 2023 NBA Preseason",
                        "videoId": "ItEPznuZolA"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/58o6dSeIv5j0byajnK95NeR_FPMY7G1QXXD1FBeV8z_pl4xJqgVz_YvEO0ZSJc1jdza4WJvNow=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [],
                            "canonicalBaseUrl": "/@KUSITV9",
                            "channelId": "UC61Ms-qN_-mdtF_Dw5hsRYw",
                            "title": "KUSI News"
                        },
                        "badges": [],
                        "descriptionSnippet": "Visit KUSI.com for more information and San Diego News. Follow KUSI News on Social Media! Twitter: twitter.com/KUSINews ...",
                        "isLiveNow": false,
                        "lengthSeconds": 61,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/3IOk4VyWC5U/mqdefault_6s.webp?du=3000&sqp=CLWElqkG&rs=AOn4CLAz0V-jDFpCPieYUfPYetdc-OOZtA",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "4 months ago",
                        "stats": {
                            "views": 845907
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/3IOk4VyWC5U/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhAIF8oZTAP&rs=AOn4CLCRRHIsEEFMZp3F6SDVfqLXb7HcYQ",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/3IOk4VyWC5U/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhAIF8oZTAP&rs=AOn4CLCgUENQpP4t3iFpt3cxpvTzxjFLUw",
                                "width": 720
                            }
                        ],
                        "title": "TRUMP Campaign releases new ad, \"Wolves\"",
                        "videoId": "3IOk4VyWC5U"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/Z35hTe_YMshY9wZeuOspHyMvwvKUxiMKW-iF9eiEqYb5jNdFOifpwZfhBpqdO1NkiWCNWPzifA=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@NewRockstars",
                            "channelId": "UC7yRILFFJ2QZCykymr8LPwA",
                            "title": "New Rockstars"
                        },
                        "badges": [
                            "New"
                        ],
                        "descriptionSnippet": "Loki Season 2 is finally here, and Erik Voss is back with a scene by scene analysis of everything you missed from this Season 2 ...",
                        "isLiveNow": false,
                        "lengthSeconds": 2334,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/VfrCFeyydzg/mqdefault_6s.webp?du=3000&sqp=CID2lakG&rs=AOn4CLADA-7ZSHMYNsofdV79gMDCSIbZ4A",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "4 days ago",
                        "stats": {
                            "views": 902010
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/VfrCFeyydzg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrBXhy2BiaVk1KQxyTPjMfq_tnXw",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/VfrCFeyydzg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6EmZ5Rl28JScPJHPsLD9UQQbGqw",
                                "width": 720
                            }
                        ],
                        "title": "LOKI 2x01 BREAKDOWN! Easter Eggs & Details You Missed!",
                        "videoId": "VfrCFeyydzg"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/UDLxCALyHXJN1-ZTawdO39fhMZLrAiPH2EiwbPNffqmGHkU01HVT20oaPCJvt7iSoRchrTTwvA=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@CBCNews",
                            "channelId": "UCuFFtHWoLl5fauMMD5Ww2jA",
                            "title": "CBC News"
                        },
                        "badges": [],
                        "descriptionSnippet": "A torrential downpour swamped the New York metropolitan area on Friday, shutting down some subways and commuter railroads, ...",
                        "isLiveNow": false,
                        "lengthSeconds": 219,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/zZjkIfRoRXA/mqdefault_6s.webp?du=3000&sqp=CIDzlakG&rs=AOn4CLBAOE7PpPAQQcKw5ETKaOUWMFmdAg",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "10 days ago",
                        "stats": {
                            "views": 18887
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/zZjkIfRoRXA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlydBYhI3dvV67W1uEQo4KoBu9Q",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/zZjkIfRoRXA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK7h9yr95F8EtX7O4qbZ6AGiSVXA",
                                "width": 720
                            }
                        ],
                        "title": "Friday was one of New York's wettest days",
                        "videoId": "zZjkIfRoRXA"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/rxRXEXiUFdpJE2oPJkjFVuPhJVRMLGtJCZxGc7AxoCbpmL6sR6Bpm6X64kZ8GQmJvJfyH5Ei2ko=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Official Artist Channel",
                                    "type": "OFFICIAL_ARTIST_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": null,
                            "channelId": "UCVo9Vl4FlCQXUOdqVdAWqug",
                            "title": "Tye Tribbett"
                        },
                        "badges": [
                            "4K",
                            "CC"
                        ],
                        "descriptionSnippet": "Lyrics: Ah Ah Tripp Sheesh New new new Everything new new new new New new everything new Everything fresh, everything, ...",
                        "isLiveNow": false,
                        "lengthSeconds": 197,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/uxmguZS_KZo/mqdefault_6s.webp?du=3000&sqp=CISKlqkG&rs=AOn4CLC_pGPwHPnPuTZGYpPu5GXRTGUz3g",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 year ago",
                        "stats": {
                            "views": 1151152
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/uxmguZS_KZo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDY5C-32ETqQ4c1fBGijHjZF8q4MA",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/uxmguZS_KZo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKrYM0zg3D7jBwAcJ1g7yOrayYvg",
                                "width": 720
                            }
                        ],
                        "title": "Tye Tribbett - New",
                        "videoId": "uxmguZS_KZo"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/CtwyqaD6AVjzRMlHAsIAcldGblwZaol_TegnWymBfmSEk8_UcEmxsw0A_BqkzZv6BplCXDEx8Q=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@MovieGasm",
                            "channelId": "UCwBV-eg1dAkzrdjqJfyEj0w",
                            "title": "MovieGasm.com"
                        },
                        "badges": [
                            "4K"
                        ],
                        "descriptionSnippet": "Have a look through the timestamps to find something of interest: 0:05 - NO ONE WILL SAVE YOU (2023) Alien, Sci Fi Movie 1:54 ...",
                        "isLiveNow": false,
                        "lengthSeconds": 1304,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/ZtqH1nqXoG4/mqdefault_6s.webp?du=3000&sqp=CIqSlqkG&rs=AOn4CLAvw9zsX5L0JBkmMLgHFa4RuN8vvA",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "1 month ago",
                        "stats": {
                            "views": 2221900
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/ZtqH1nqXoG4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmQ4_dyJ_Ry0iQJdqiz65Tw1RR8g",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/ZtqH1nqXoG4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABCvlrY1Yf02mLmN0VSmFmMIlQ9g",
                                "width": 720
                            }
                        ],
                        "title": "NEW MOVIE TRAILERS (2023) September",
                        "videoId": "ZtqH1nqXoG4"
                    }
                },
                {
                    "type": "video",
                    "video": {
                        "author": {
                            "avatar": [
                                {
                                    "height": 68,
                                    "url": "https://yt3.ggpht.com/ytc/APkrFKbGGWb-EtkQnfYE0FYdiackEsbKAHh9_URpqU4kFQ=s68-c-k-c0x00ffffff-no-rj",
                                    "width": 68
                                }
                            ],
                            "badges": [
                                {
                                    "text": "Verified",
                                    "type": "VERIFIED_CHANNEL"
                                }
                            ],
                            "canonicalBaseUrl": "/@guardiannews",
                            "channelId": "UCIRYBXDze5krPDzAEOxFGVA",
                            "title": "Guardian News"
                        },
                        "badges": [],
                        "descriptionSnippet": "'Move to higher ground now. Act quickly to protect your life,' the National Weather Service said in an advisory posted on its ...",
                        "isLiveNow": false,
                        "lengthSeconds": 112,
                        "movingThumbnails": [
                            {
                                "height": 180,
                                "url": "https://i.ytimg.com/an_webp/SsqDqz_qlH4/mqdefault_6s.webp?du=3000&sqp=CKrnlakG&rs=AOn4CLAGWlwkDXpLerwn4b3pWikBOBsYZQ",
                                "width": 320
                            }
                        ],
                        "publishedTimeText": "10 days ago",
                        "stats": {
                            "views": 232737
                        },
                        "thumbnails": [
                            {
                                "height": 202,
                                "url": "https://i.ytimg.com/vi/SsqDqz_qlH4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYqA7itjAhJtnT22qRk2hJCz99Zg",
                                "width": 360
                            },
                            {
                                "height": 404,
                                "url": "https://i.ytimg.com/vi/SsqDqz_qlH4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfan5lCWXyafbjOHa1qLTl6VclVw",
                                "width": 720
                            }
                        ],
                        "title": "Flash flooding causes mayhem in New York City",
                        "videoId": "SsqDqz_qlH4"
                    }
                }
            ],
            "cursorNext": "EpYDEgNOZXcajgNTQlNDQVF0TlRGWnZiMTlZWW1kc1VZSUJDMHRsVkMxNlRqVmlOV1JyZ2dFTE1tMWZlVFZrTmpoNFRVMkNBUXMxVVU1SlowUkdjUzEyZDRJQkMxTlZTVzU1YUZCS2FrcEZnZ0VMVURkVVRUQkhNRW94VmpDQ0FRdGZWa0YwU2xOZlJtNW9VWUlCQ3pKd05qTm5ha0Y2VVd0RmdnRUxSa3BZTlZJd1VGbDBPRTJDQVFzMlMxRjFaVzloUjFGTVdZSUJDelZNYmtSclpHZDZUR3M0Z2dFTE9EbFdTbUZ2UlhkMmEwV0NBUXRmVlV0cGNubEJkbWQzTklJQkMwbDBSVkI2Ym5WYWIyeEJnZ0VMTTBsUGF6UldlVmRETlZXQ0FRdFdabkpEUm1WNWVXUjZaNElCQzNwYWFtdEpabEp2VWxoQmdnRUxkWGh0WjNWYVUxOUxXbS1DQVF0YWRIRklNVzV4V0c5SE5JSUJDMU56Y1VSeGVsOXhiRWcwc2dFR0NnUUlHQkFDNmdFQ0NBSSUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D",
            "didYouMean": null,
            "estimatedResults": 28503858435,
            "filterGroups": [
                {
                    "filters": [
                        {
                            "cursorSelect": "TmV3JiYmRWdJSUFRJTNEJTNE",
                            "label": "Last hour",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJSUFnJTNEJTNE",
                            "label": "Today",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJSUF3JTNEJTNE",
                            "label": "This week",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJSUJBJTNEJTNE",
                            "label": "This month",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJSUJRJTNEJTNE",
                            "label": "This year",
                            "selected": false
                        }
                    ],
                    "title": "Upload date"
                },
                {
                    "filters": [
                        {
                            "cursorSelect": "TmV3JiYmRWdJUUFRJTNEJTNE",
                            "label": "Video",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJUUFnJTNEJTNE",
                            "label": "Channel",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJUUF3JTNEJTNE",
                            "label": "Playlist",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJUUJBJTNEJTNE",
                            "label": "Movie",
                            "selected": false
                        }
                    ],
                    "title": "Type"
                },
                {
                    "filters": [
                        {
                            "cursorSelect": "TmV3JiYmRWdJWUFRJTNEJTNE",
                            "label": "Under 4 minutes",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJWUF3JTNEJTNE",
                            "label": "4 - 20 minutes",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJWUFnJTNEJTNE",
                            "label": "Over 20 minutes",
                            "selected": false
                        }
                    ],
                    "title": "Duration"
                },
                {
                    "filters": [
                        {
                            "cursorSelect": "TmV3JiYmRWdKQUFRJTNEJTNE",
                            "label": "Live",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdKd0FRJTNEJTNE",
                            "label": "4K",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJZ0FRJTNEJTNE",
                            "label": "HD",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJb0FRJTNEJTNE",
                            "label": "Subtitles/CC",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJd0FRJTNEJTNE",
                            "label": "Creative Commons",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdKNEFRJTNEJTNE",
                            "label": "360°",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdQUUFRRSUzRA==",
                            "label": "VR180",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdJNEFRJTNEJTNE",
                            "label": "3D",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdQSUFRRSUzRA==",
                            "label": "HDR",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdPNEFRRSUzRA==",
                            "label": "Location",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmRWdKSUFRJTNEJTNE",
                            "label": "Purchased",
                            "selected": false
                        }
                    ],
                    "title": "Features"
                },
                {
                    "filters": [
                        {
                            "cursorSelect": null,
                            "label": "Relevance",
                            "selected": true
                        },
                        {
                            "cursorSelect": "TmV3JiYmQ0FJJTNE",
                            "label": "Upload date",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmQ0FNJTNE",
                            "label": "View count",
                            "selected": false
                        },
                        {
                            "cursorSelect": "TmV3JiYmQ0FFJTNE",
                            "label": "Rating",
                            "selected": false
                        }
                    ],
                    "title": "Sort by"
                }
            ],
            "refinements": [
                "cnn news live today",
                "bbc news live",
                "bbc live",
                "sky news live",
                "fox news live",
                "live news",
                "new tye tribbett",
                "breaking news",
                "msnbc",
                "nbc news",
                "news live malayalam",
                "new opp",
                "new music",
                "new york"
            ]
        }

        //console.log(contents.contents);
        
        setSearchResults(contents);
     
        setLoading(false);
        */
        
          
    }
    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu,
        }}>
            {props.children}
        </Context.Provider>
    )
}