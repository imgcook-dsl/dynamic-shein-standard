module.exports = {
  "taskId": "E70EB36218795C33B9556B01ACA98262-1585469957747",
  "artboardImg": "https://img.alicdn.com/tfs/TB1m0T8z.z1gK0jSZLeXXb9kVXa-702-672.jpg",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 702,
    "height": 672
  },
  "pluginVersion": "1.0.8",
  "componentName": "Block",
  "layerProtocols": ["component"],
  "name": "视频内容卡片",
  "reference": "fileparse",
  "restore_id": "e63afa8c-ce64-47bb-bd87-fd8501173f0e",
  "props": {
    "style": {
      "width": "702px",
      "height": "672px"
    },
    "className": "mod"
  },
  "id": "7eeacb10-ba1c-11ec-9368-17fa234757c1",
  "children": [{
    "componentName": "Div",
    "id": "7eeb1932-ba1c-11ec-9368-17fa234757c1",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "borderRadius": "24px",
        "backgroundColor": "#ffffff",
        "width": "702px",
        "height": "672px"
      },
      "className": "container"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 702,
      "height": 672
    },
    "selfId": "F3D11EA3-B59C-46F5-8037-1C321975C7AA",
    "nodeLayerName": "Rectangle 6 Copy 10",
    "children": [{
      "componentName": "Div",
      "id": "7eeaf222-ba1c-11ec-9368-17fa234757c1",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "justifyContent": "center",
          "borderTopLeftRadius": "24px",
          "borderTopRightRadius": "24px",
          "backgroundColor": "#9b9b9b",
          "overflow": "hidden"
        },
        "className": "body"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 702,
        "height": 394
      },
      "selfId": "22D1A451-0E6D-485D-A241-4A0D2AAFAE52",
      "nodeLayerName": "Mask",
      "children": [{
        "componentName": "Image",
        "id": "7eeaf221-ba1c-11ec-9368-17fa234757c1",
        "props": {
          "style": {
            "position": "relative",
            "width": "702px",
            "height": "394px"
          },
          "src": "https://img.alicdn.com/tfs/TB1oiAbz1H2gK0jSZJnXXaT1FXa-1404-788.png",
          "className": "video"
        },
        "rect": {
          "x": 0,
          "y": 0,
          "width": 702,
          "height": 394
        },
        "selfId": "AC429F27-3CE4-47FE-9A9F-44686E0286A1",
        "nodeLayerName": "Bitmap",
        "smart": {
          "layerProtocol": {
            "field": {
              "type": "picture"
            },
            "component": {
              "type": "video"
            }
          },
          "nodeIdentification": {
            "fieldBind": ["picture"],
            "baseComponent": ["video"]
          },
          "nodeCustom": {
            "fieldBind": {
              "confidential": 0.9986966252326965,
              "isConfident": true,
              "label": "picture",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "video",
              "score": 1,
              "origin_score": 1,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.95
              },
              "rect": {
                "x": 0,
                "y": 0,
                "width": 702,
                "height": 394
              },
              "id": "7eeaf221-ba1c-11ec-9368-17fa234757c1",
              "selfId": "AC429F27-3CE4-47FE-9A9F-44686E0286A1"
            }
          }
        }
      }, {
        "componentName": "Image",
        "id": "7eeaf220-ba1c-11ec-9368-17fa234757c1",
        "props": {
          "style": {
            "position": "absolute",
            "top": "138px",
            "left": "291px",
            "width": "120px",
            "height": "120px"
          },
          "src": "https://img.alicdn.com/tfs/TB1IpkXz5_1gK0jSZFqXXcpaXXa-240-240.png",
          "className": "videobutton"
        },
        "rect": {
          "x": 291,
          "y": 138,
          "width": 120,
          "height": 120
        },
        "selfId": "F042EFEF-620F-4664-BF7E-C7DEAF14DD33",
        "nodeLayerName": "#merge#Group",
        "smart": {
          "layerProtocol": {
            "field": {
              "type": "icon"
            },
            "component": {
              "type": "videobutton"
            }
          },
          "nodeIdentification": {
            "fieldBind": ["icon"],
            "baseComponent": ["videobutton"]
          },
          "nodeCustom": {
            "fieldBind": {
              "confidential": 0.9972313046455383,
              "isConfident": true,
              "label": "icon",
              "type": "fieldBind"
            },
            "baseComponent": {
              "isConfident": true,
              "label": "videobutton",
              "score": 1,
              "origin_score": 1,
              "type": "baseComponent",
              "meta": {
                "threshold": 0.95
              },
              "rect": {
                "x": 291,
                "y": 138,
                "width": 120,
                "height": 120
              },
              "id": "7eeaf220-ba1c-11ec-9368-17fa234757c1",
              "selfId": "F042EFEF-620F-4664-BF7E-C7DEAF14DD33"
            }
          }
        }
      }]
    }, {
      "componentName": "Div",
      "id": "7eeacb13-ba1c-11ec-9368-17fa234757c1",
      "props": {
        "style": {
          "display": "flex",
          "position": "absolute",
          "top": "376px",
          "left": "24px",
          "alignItems": "center",
          "flexDirection": "row",
          "justifyContent": "space-between",
          "borderRadius": "6px",
          "backgroundColor": "#ffb901",
          "width": "189px",
          "lineHeight": "24px",
          "whiteSpace": "nowrap"
        },
        "className": "wrapper"
      },
      "rect": {
        "x": 24,
        "y": 376,
        "width": 189,
        "height": 36
      },
      "selfId": "134EC21A-4A07-4ABB-BD8A-D80466BE8CE3",
      "nodeLayerName": "Rectangle 5",
      "children": [{
        "componentName": "Div",
        "id": "cd322408-2850-41d1-a5f5-ed5e76a2e83b",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "height": "36px",
            "fontWeight": 600
          },
          "className": "organization-wrapper"
        },
        "rect": {
          "x": 24,
          "y": 376,
          "width": 58,
          "height": 36
        },
        "children": [{
          "componentName": "Text",
          "id": "7eeacb12-ba1c-11ec-9368-17fa234757c1",
          "props": {
            "style": {
              "marginLeft": "10px",
              "maxWidth": "58px",
              "overflow": "hidden",
              "textOverflow": "ellipsis",
              "color": "#ffffff",
              "fontFamily": "PingFang SC",
              "fontSize": "24px"
            },
            "text": "众筹",
            "lines": 1,
            "className": "organization"
          },
          "rect": {
            "x": 34,
            "y": 382,
            "width": 48,
            "height": 24
          },
          "selfId": "9E7147FD-EE09-4810-9D97-109DCE80826B0",
          "nodeLayerName": "众筹｜全网首发"
        }],
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "left"
            }
          }
        }
      }, {
        "componentName": "Div",
        "id": "94667554-ae80-4ea7-94d9-7d95484de643",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "flex-start",
            "flexDirection": "row",
            "width": "11px",
            "height": "36px",
            "fontWeight": 300
          },
          "className": "tag-wrapper"
        },
        "rect": {
          "x": 202,
          "y": 376,
          "width": 11,
          "height": 36
        },
        "children": [{
          "componentName": "Text",
          "id": "7eeacb11-ba1c-11ec-9368-17fa234757c1",
          "props": {
            "style": {
              "marginTop": "6px",
              "marginLeft": "-120px",
              "maxWidth": "251px",
              "height": "1px",
              "overflow": "hidden",
              "textOverflow": "ellipsis",
              "color": "#ffffff",
              "fontFamily": "PingFang SC",
              "fontSize": "24px"
            },
            "text": "｜全网首发",
            "lines": 1,
            "className": "tag"
          },
          "rect": {
            "x": 82,
            "y": 382,
            "width": 120,
            "height": 1
          },
          "selfId": "9E7147FD-EE09-4810-9D97-109DCE80826B1",
          "nodeLayerName": "众筹｜全网首发"
        }],
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "right"
            }
          }
        }
      }]
    }, {
      "componentName": "Text",
      "id": "7eeaf223-ba1c-11ec-9368-17fa234757c1",
      "props": {
        "style": {
          "position": "relative",
          "marginTop": "30px",
          "marginLeft": "24px",
          "maxWidth": "654px",
          "height": "36px",
          "overflow": "hidden",
          "textOverflow": "ellipsis",
          "lineHeight": "36px",
          "whiteSpace": "pre",
          "color": "#333333",
          "fontFamily": "PingFang SC",
          "fontSize": "32px",
          "fontWeight": 500
        },
        "text": "对饮茶酒 手工茶罐与小对杯",
        "lines": 1,
        "className": "title"
      },
      "rect": {
        "x": 24,
        "y": 424,
        "width": 395,
        "height": 36
      },
      "selfId": "63426673-B574-4DAF-8677-B93C683A59050",
      "nodeLayerName": "对饮茶酒 手工茶罐与小对杯"
    }, {
      "componentName": "Text",
      "id": "7eeaf224-ba1c-11ec-9368-17fa234757c1",
      "props": {
        "style": {
          "WebkitBoxOrient": "vertical",
          "display": "-webkit-inline-box",
          "WebkitLineClamp": 2,
          "position": "relative",
          "marginTop": "16px",
          "marginLeft": "24px",
          "width": "650px",
          "height": "80px",
          "overflow": "hidden",
          "textOverflow": "ellipsis",
          "lineHeight": "40px",
          "color": "#888888",
          "fontFamily": "PingFang SC",
          "fontSize": "26px",
          "fontWeight": 300
        },
        "text": "宽杯、小杯自在搭配，喝茶喝酒都很适合。手工制宽杯、小杯自在搭配，喝茶喝酒都很适合。手工制做…",
        "lines": 2,
        "className": "summary"
      },
      "rect": {
        "x": 24,
        "y": 476,
        "width": 650,
        "height": 80
      },
      "selfId": "8EDD8A68-71C6-4687-98FF-45182129F6EE0",
      "nodeLayerName": "宽杯、小杯自在搭配，喝茶喝酒都很适合。手"
    }, {
      "componentName": "example",
      "id": "3b0c0a55-45b8-4d0f-a55d-fb8552dc00de",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "alignSelf": "center",
          "flexDirection": "column",
          "marginTop": "22px"
        },
        "className": "footer",
        "attr1": "value1",
        "attr2": "value2"
      },
      "rect": {
        "x": 24,
        "y": 578,
        "width": 659,
        "height": 65
      },
      "smart": {
        "layerProtocol": {
          "component": {
            "type": "example",
            "params": {
              "attr1": "value1",
              "attr2": "value2"
            }
          }
        }
      },
      "selfId": "2282B0AC-A405-47FA-BA53-DF9C49D6D028",
      "nodeLayerName": "#component:example?attr1=value1&attr2=value2#",
      "children": [{
        "componentName": "Div",
        "id": "14167ceb-cfa7-480b-acc0-2607e1ebce0a",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "center",
            "flexDirection": "row",
            "marginLeft": "7px",
            "height": "30px"
          },
          "className": "group"
        },
        "rect": {
          "x": 31,
          "y": 578,
          "width": 652,
          "height": 30
        },
        "children": [{
          "componentName": "Div",
          "id": "7eeaf227-ba1c-11ec-9368-17fa234757c1",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginRight": "12px",
              "borderRadius": "3px",
              "backgroundColor": "#ebebeb",
              "width": "583px",
              "height": "6px"
            },
            "className": "bg-wrapper"
          },
          "rect": {
            "x": 31,
            "y": 590,
            "width": 583,
            "height": 6
          },
          "selfId": "21776D0C-EDDA-4631-BFCE-1235F8BACCF3",
          "nodeLayerName": "Rectangle 5",
          "children": [{
            "componentName": "Image",
            "id": "7eeaf226-ba1c-11ec-9368-17fa234757c1",
            "props": {
              "style": {
                "position": "absolute",
                "top": "0px",
                "left": "-7px",
                "width": "400px",
                "height": "6px"
              },
              "src": "https://img.alicdn.com/tfs/TB1iSj8z4D1gK0jSZFsXXbldVXa-800-12.png",
              "className": "bg"
            },
            "rect": {
              "x": 24,
              "y": 590,
              "width": 400,
              "height": 6
            },
            "selfId": "716CAEB3-DC9C-40A0-AA70-E9FBEA02AC3F",
            "nodeLayerName": "Rectangle 5"
          }],
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "left"
              }
            }
          }
        }, {
          "componentName": "Text",
          "id": "7eeb1931-ba1c-11ec-9368-17fa234757c1",
          "props": {
            "style": {
              "lineHeight": "26px",
              "whiteSpace": "nowrap",
              "color": "#ff9e00",
              "fontFamily": "PingFang SC",
              "fontSize": "26px",
              "fontWeight": 400
            },
            "text": "83%",
            "lines": 1,
            "className": "percent"
          },
          "rect": {
            "x": 626,
            "y": 578,
            "width": 57,
            "height": 30
          },
          "selfId": "E06FFE14-67E0-459C-BC5D-0BA92D5F23510",
          "nodeLayerName": "83%",
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "right"
              }
            }
          }
        }],
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "top"
            }
          }
        }
      }, {
        "componentName": "Div",
        "id": "b4a3aee6-b3b3-43cd-b676-c5d35d923b3b",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "center",
            "flexDirection": "row",
            "marginTop": "4px",
            "whiteSpace": "nowrap"
          },
          "className": "group-1"
        },
        "rect": {
          "x": 24,
          "y": 612,
          "width": 372,
          "height": 31
        },
        "children": [{
          "componentName": "Div",
          "id": "2f032cdb-6483-4cc9-890e-8ad22f84e6dc",
          "props": {
            "style": {
              "display": "flex",
              "alignItems": "center",
              "flexDirection": "row",
              "marginRight": "43px",
              "height": "31px"
            },
            "className": "view"
          },
          "rect": {
            "x": 24,
            "y": 612,
            "width": 124,
            "height": 31
          },
          "children": [{
            "componentName": "Text",
            "id": "7eeb1930-ba1c-11ec-9368-17fa234757c1",
            "props": {
              "style": {
                "marginTop": "1px",
                "lineHeight": "26px",
                "color": "#ff9d00",
                "fontFamily": "PingFang SC",
                "fontSize": "26px",
                "fontWeight": 400
              },
              "text": "5216",
              "lines": 1,
              "className": "num"
            },
            "rect": {
              "x": 24,
              "y": 613,
              "width": 58,
              "height": 30
            },
            "selfId": "7C499040-BB10-4C3A-9E4B-4A27C739BA7D0",
            "nodeLayerName": "5216",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "7eeaf22a-ba1c-11ec-9368-17fa234757c1",
            "props": {
              "style": {
                "marginTop": "-1px",
                "lineHeight": "22px",
                "color": "#999999",
                "fontFamily": "PingFang SC",
                "fontSize": "22px",
                "fontWeight": 300
              },
              "text": "人支持",
              "lines": 1,
              "className": "label"
            },
            "rect": {
              "x": 82,
              "y": 612,
              "width": 66,
              "height": 30
            },
            "selfId": "DBD86E2E-6E34-4A13-8E7D-C825A48B497A0",
            "nodeLayerName": "人支持",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "left"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "e970e0fe-781b-42d4-becf-db2bc0ea04cb",
          "props": {
            "style": {
              "display": "flex",
              "alignItems": "center",
              "flexDirection": "row",
              "height": "31px"
            },
            "className": "view-1"
          },
          "rect": {
            "x": 191,
            "y": 612,
            "width": 205,
            "height": 31
          },
          "children": [{
            "componentName": "Text",
            "id": "7eeaf229-ba1c-11ec-9368-17fa234757c1",
            "props": {
              "style": {
                "marginTop": "1px",
                "marginRight": "6px",
                "lineHeight": "26px",
                "color": "#ff9d00",
                "fontFamily": "PingFang SC",
                "fontSize": "26px",
                "fontWeight": 400
              },
              "text": "486.52万",
              "lines": 1,
              "className": "caption"
            },
            "rect": {
              "x": 191,
              "y": 613,
              "width": 111,
              "height": 30
            },
            "selfId": "5471827C-3BEE-4652-ABDD-521CF8CB250F0",
            "nodeLayerName": "486.52万",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "7eeaf228-ba1c-11ec-9368-17fa234757c1",
            "props": {
              "style": {
                "marginTop": "-1px",
                "lineHeight": "22px",
                "color": "#999999",
                "fontFamily": "PingFang SC",
                "fontSize": "22px",
                "fontWeight": 300
              },
              "text": "已筹金额",
              "lines": 1,
              "className": "word"
            },
            "rect": {
              "x": 308,
              "y": 612,
              "width": 88,
              "height": 30
            },
            "selfId": "6F0F897D-180B-4AA7-9CEB-52935C0D44940",
            "nodeLayerName": "已筹金额",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "layout": {
                "type": "layout",
                "position": "right"
              }
            }
          }
        }],
        "smart": {
          "layerProtocol": {
            "layout": {
              "type": "layout",
              "position": "bottom"
            }
          }
        }
      }]
    }]
  }],
  "imgcook": {
    "restore_id": "e63afa8c-ce64-47bb-bd87-fd8501173f0e"
  }
}