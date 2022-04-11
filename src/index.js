module.exports = function (schema, option) {

   console.log("state>>>>"+ JSON.stringify(schema.state));
    /**
     * 获取prettier
     */
    const {prettier} = option;

    const FULL_WIDTH = 375;
    
    /**
     * 缩小比例
     */
    const SCALE_UNIT = option.responsive.width / FULL_WIDTH;

    /**
     *是否为空
     * @param para
     * @returns {boolean}
     */
    var isEmpty = function (param) {
        return param == ''
    }

    /**
     * 是否被定义
     * @param para
     * @returns {boolean}
     */
    const isDefined = (param) => {
        return typeof param !== 'undefined'
    }

    /**
     * 是否有效
     * @param para
     * @returns {boolean}
     */
    const isValidValue = (param) => {
        return isDefined(param) && !isNullValue(param) && !isEmpty(param)
    }
    /**
     * 是否为空
     * @param para
     * @returns {boolean}
     */
    var isNullValue = function (param) {
        return param == null
    }

    /**
     * 是否是表达式
     * @param {*} value
     * @returns
     */
    const isExpression = (value) => {
        return /^\{\{.*\}\}$/.test(value)
    }

    /**
     * 获取转化侯的单位数字
     * @param value
     */
    const getNumberUnitValue = (value) => {
        if (!value) {
            return 0;
        }
        return Math.round(parseInt(value) / SCALE_UNIT);
    }

    /**
     * 获取目标的值
     * @param value 输入值
     * @returns {*}
     */
    const getAttrsValue = (value) => {
        let targetValue = value
        switch (value) {
            case "row-reverse":
                targetValue = "rowReverse";
                break
            case "column-reverse":
                targetValue = "columnReverse";
                break;
            case "flex-start":
                targetValue = "flexStart";
                break;
            case "flex-end":
                targetValue = "flexEnd";
                break;
            case "space-between":
                targetValue = "spaceBetween";
                break;
            case "space-around":
                targetValue = "spaceAround";
                break;
            case "space-evanly":
                targetValue = "spaceEvanly";
                break;
            case "wrap-reverse":
                targetValue = "wrapReverse";
                break;
            case "left":
                targetValue = "start";
                break;
            case "right":
                targetValue = "end";
                break;

            default:
                break
        }
        return targetValue
    }

    /**
     * 将255色值转换为2位Hex字符，不足两位补0
     * @param {*} color 颜色值
     * @returns
     */
    const translateRGB2HexString = (color) => {
        if (typeof color !== 'string') {
            return '';
        }
        var targetColor = Math.abs(parseFloat(color));
        targetColor = Math.min(0xff, targetColor);
        let hex = targetColor.toString(16);
        return targetColor > 0xf ? hex : `0${hex}`;
    }

    /**
     * 将alpha值转换为2位Hex字符，不足两位补0
     * @param {*} alpha  透明度
     * @returns
     */
    const translateAlpha2HexString = (alpha) => {
        if (typeof alpha !== 'string') {
            return '';
        }
        var targetAlpha = Math.abs(parseFloat(alpha));
        targetAlpha = Math.min(0xff, Math.round(targetAlpha * 0xff));
        if (targetAlpha == 0xff) {
            return '';
        }
        let hex = targetAlpha.toString(16);
        return targetAlpha > 0xf ? hex : `0${hex}`;
    }

    /**
     * 将RGBA色值转换为以#开始的ARGB字符串(如127,127,127,1 => #ff8f8f8f)
     * @param {*} red 红色
     * @param {*} green 绿色
     * @param {*} blue 蓝色
     * @param {*} alpha 透明度
     * @returns
     */
    const translateRGBA2ARGB = (red, green, blue, alpha) => {
        red = translateRGB2HexString(red);
        blue = translateRGB2HexString(blue);
        green = translateRGB2HexString(green);
        alpha = translateAlpha2HexString(alpha);
        if (red.length > 0 && green.length > 0 && blue.length > 0) {
            return `#${alpha}${red}${green}${blue}`;
        }
        return '';
    }

    /** 将RGB(A)字符串转换为以#开始的ARGB字符串
     *  例如rgb(235,235,235,1) => #ebebeb
     */
    const translateRGBAColor2HexWithOpacity = (color, opacity) => {
        if (typeof color !== 'string') {
            return color;
        }
        if (color.length > 4 && color.substr(0, 4) == 'rgb(') {
            let rgb = color.slice(4, -1).split(',');
            if (rgb.length == 3) {
                return translateRGBA2ARGB(rgb[0], rgb[1], rgb[2], isValidValue(opacity) ? `${opacity}` : null);
            } else if (rgb.length == 4) {
                return translateRGBA2ARGB(rgb[0], rgb[1], rgb[2], isValidValue(opacity) ? `${opacity}` : rgb[3]);
            }
        } else if (color.length > 5 && color.substr(0, 5) == 'rgba(') {
            let rgb = color.slice(5, -1).split(',')
            if (rgb.length == 4) {
                return translateRGBA2ARGB(rgb[0], rgb[1], rgb[2], isValidValue(opacity) ? `${opacity}` : rgb[3]);
            }
        } else if (color.length == 7 && color.substr(0, 1) == '#' && isValidValue(opacity)) {
            let alpha = translateAlpha2HexStr(`${opacity}`);
            return `#${alpha}${color.substr(1, str.length)}`;
        } else if (color.length == 9 && color.substr(0, 1) == '#' && isValidValue(opacity)) {
            let alpha = translateAlpha2HexStr(`${opacity}`);
            return `#${alpha}${str.substr(3, str.length)}`;
        }
        return color;
    }

    /**
     * 获取
     */
    const getBackgroundImageValue = (value) => {
      if (!value) {
         return value;
      }
      if (value.substr(0,4) == "url(") {
        let targetValue = value.slice(4,-1);
        return targetValue;
      }
      return value;
    }

    /**
     * 获取公共属性
     */
    const parseCommonAttrsFromStyle = (type, style) => {
        let targetAttrs = {};
        let targetType = type.toLowerCase();
        if (style == null || typeof style != 'object') {
            return;
        }
        if (targetType == 'image') {
            if (style.width) {
                targetAttrs['width'] = getNumberUnitValue(style.width);
            }
            if (style.height) {
                targetAttrs['height'] = getNumberUnitValue(style.height);
            }
        }
        if (style.opacity) {
            targetAttrs['alpha'] = style.opacity;
        }
        if (style.paddingTop) {
          let paddingTop =  getNumberUnitValue(style.paddingTop);
          if (paddingTop > 0) {
            targetAttrs['paddingTop'] = paddingTop;
          }
        }
        if (style.paddingRight) {
            let paddingRight =  getNumberUnitValue(style.paddingRight);
            if (paddingRight > 0) {
              targetAttrs['paddingRight'] = paddingRight;
            }
        }
        if (style.paddingBottom) {
            let paddingBottom =  getNumberUnitValue(style.paddingBottom);
            if (paddingBottom > 0) {
              targetAttrs['paddingBottom'] = paddingBottom;
            }
        }
        if (style.paddingLeft) {
            let paddingLeft =  getNumberUnitValue(style.paddingLeft);
            if (paddingLeft > 0) {
              targetAttrs['paddingLeft'] = paddingLeft;
            }
        }
        if (style.paddingTop && style.paddingRight && style.paddingBottom && style.paddingLeft) {
            if (style.paddingTop == style.paddingRight && style.paddingRight == style.paddingBottom && style.paddingBottom == style.paddingLeft
                && style.paddingLeft == style.paddingTop) {
                let padding =  getNumberUnitValue(style.paddingTop);
                if (padding > 0) {
                  targetAttrs['padding'] = padding;
                  targetAttrs['paddingBottom'] = undefined;
                  targetAttrs['paddingLeft'] = undefined;
                  targetAttrs['paddingRight'] = undefined;
                  targetAttrs['paddingTop'] = undefined;
                }
            }
        }
        if (style.marginTop) {
          let marginTop =  getNumberUnitValue(style.marginTop);
          if (marginTop > 0) {
            targetAttrs['marginTop'] = marginTop;
          }
        }
        if (style.marginRight) {
          let marginRight =  getNumberUnitValue(style.marginRight);
          if (marginRight > 0) {
            targetAttrs['marginRight'] = marginRight;
          }
        }
        if (style.marginBottom) {
          let marginBottom =  getNumberUnitValue(style.marginBottom);
          if (marginBottom > 0) {
            targetAttrs['marginBottom'] = marginBottom;
          }  
        }
        if (style.marginLeft) {
          let marginLeft =  getNumberUnitValue(style.marginLeft);
          if (marginLeft > 0) {
            targetAttrs['marginLeft'] = marginLeft;
          }
        }
        if (style.marginTop && style.marginRight && style.marginBottom && style.marginLeft) {
            if (style.marginTop == style.marginRight && style.marginRight == style.marginBottom && style.marginBottom == style.marginLeft
                && style.marginLeft == style.marginTop) {
                let margin = getNumberUnitValue(style.marginTop);
                if (margin) {
                  targetAttrs['margin'] = margin;
                  targetAttrs['marginBottom'] = undefined;
                  targetAttrs['marginLeft'] = undefined;
                  targetAttrs['marginRight'] = undefined;
                  targetAttrs['marginTop'] = undefined;
                }
            }
        }
        if (style.display && style.display === 'none') {
            targetAttrs['visibility'] = 'gone'
        }
        if (style.position && (style.position === 'relative' || style.position === 'absolute')) {
            targetAttrs['position'] = style.position;
        }
        if (style.top) {
          let top =  getNumberUnitValue(style.top);
          if (top > 0) {
            targetAttrs['top'] = top;
          }
        }
        if (style.left) {
          let left =  getNumberUnitValue(style.left);
          if (left > 0) {
            targetAttrs['left'] = left;
          }
        }
        if (style.right) {
          let right =  getNumberUnitValue(style.right);
          if (right > 0) {
            targetAttrs['right'] = right;
          }
        }
        if (style.bottom) {
          let bottom =  getNumberUnitValue();
          if (bottom > 0) {
            targetAttrs['bottom'] = bottom;
          }
        }
        if (style.backgroundColor) {
          targetAttrs["background"] = translateRGBAColor2HexWithOpacity(style.backgroundColor, style.opacity);
        }
        if (style.backgroundImage) {
          let targetBackgroundImage =  getBackgroundImageValue(style.backgroundImage);
          if (isExpression(targetBackgroundImage)) {
            targetAttrs["background"] = "${" + targetBackgroundImage + "}";
          } else {
            targetAttrs["background"] = targetBackgroundImage;
          }
        }
        if (style.borderRadius) {
          let borderRadius =  getNumberUnitValue(style.borderRadius);
          if (borderRadius > 0) {
            targetAttrs["borderRadius"] = borderRadius;
          }
        }
        if (style.borderTopLeftRadius) {
          let borderLeftTopRadius =  getNumberUnitValue(style.borderTopLeftRadius);
          if (borderLeftTopRadius > 0) {
            targetAttrs["borderLeftTopRadius"] = borderLeftTopRadius;
          }
        }
        if (style.borderTopRightRadius) {
          let borderRightTopRadius =  getNumberUnitValue(style.borderTopRightRadius);
          if (borderRightTopRadius > 0) {
            targetAttrs["borderRightTopRadius"] = borderRightTopRadius;
          }   
        }
        if (style.borderBottomLeftRadius) {
          let borderLeftBottomRadius =  getNumberUnitValue(style.borderBottomLeftRadius);
          if (borderLeftBottomRadius > 0) {
            targetAttrs["borderLeftBottomRadius"] = borderLeftBottomRadius;
          }
        }
        if (style.borderBottomRightRadius) {
          let borderRightBottomRadius =  getNumberUnitValue(style.borderBottomRightRadius);
          if (borderRightBottomRadius > 0) {
            targetAttrs["borderRightBottomRadius"] =  borderRightBottomRadius;
          }
        }
        if (style.borderTopLeftRadius && style.borderTopRightRadius && style.borderBottomLeftRadius && style.borderBottomRightRadius) {
            if (style.borderTopLeftRadius == style.borderTopRightRadius && style.borderTopRightRadius == style.borderBottomLeftRadius &&
                style.borderBottomLeftRadius == style.borderBottomRightRadius && style.borderBottomRightRadius == style.borderTopLeftRadius) {
                let borderRadius =  getNumberUnitValue(style.borderTopLeftRadius);
                if (borderRadius > 0) {
                  targetAttrs["borderRadius"] = borderRadius;
                  targetAttrs["borderLeftTopRadius"] = undefined;
                  targetAttrs["borderRightTopRadius"] = undefined;
                  targetAttrs["borderLeftBottomRadius"] = undefined;
                  targetAttrs["borderRightBottomRadius"] = undefined;
                }
            }
        }
        if (style.border) {
          if (style.border.indexOf(" ") == -1) {
            let borderWidth =   getNumberUnitValue(style.border.trim());
            if (borderWidth > 0) {
              targetAttrs["borderWidth"] = borderWidth;
            }
          } else {
            let targetData =  style.border.split(" ");
            let borderWidth =  getNumberUnitValue(targetData[0].trim());
            if (borderWidth > 0) {
              targetAttrs["borderWidth"] = borderWidth;
            }
            let borderColor = translateRGBAColor2HexWithOpacity(targetData[1].trim(), style.opacity);
            if (borderColor) {
              targetAttrs["borderColor"] =  borderColor;
            }
          }
        }
        return targetAttrs;
    }

    /**
     * 解析容器相关的属性
     * @param props 属性
     */
    const parseContainerAttrsFromProps = (props) => {
        if (!props) {
          return {};
        }  
        let attrs = {};
        Object.keys(props).forEach((key) => {
          if (key == "style") {
            let style = props.style;
            attrs = parseCommonAttrsFromStyle("div", style);
            if (style.flexDirection) {
                attrs["flexDirection"] = getAttrsValue(style.flexDirection);
            }
            if (style.justifyContent) {
                attrs["justifyContent"] = getAttrsValue(style.justifyContent);
            }
            if (style.alignItems) {
                attrs["alignItems"] = getAttrsValue(style.alignItems);
            }
            if (style.flexWrap) {
                attrs["flexWrap"] = getAttrsValue(style.flexWrap);
            }
          }
        });
        if (Object.keys(attrs).length ==0) {
          attrs["flexDirection"] = "row";
        }
        return attrs;
    }

    /**
     * 解析图片相关的属性
     * @param props 属性
     */
    const parseImageAttrsFromProps = (props) => {
        if (!props) {
          return {};
        }  
        let attrs = {};
        Object.keys(props).forEach((key) => {
          if (key == "style" || key == "src") {
            let style = props.style;
            attrs = parseCommonAttrsFromStyle("image", style);
            if (props.src) {
                if (isExpression(props.src)) {
                    let srcValue = parsePropsValue(props.src);
                    attrs["src"] = "${" + srcValue + "}";
                } else {
                    attrs["src"] = props.src;
                }
            }
          }
        });
        return attrs;
    }

    /**
     * 解析文本属性
     * @param props
     */
    const parseTextAttrsFromProps = (props) => {
        if (!props) {
          return {};
        }  
        let attrs =  {};
        Object.keys(props).forEach((key) => {
          if (key == "style" || key == "text") {
            let style = props.style;
            attrs = parseCommonAttrsFromStyle("text", style);
            if (style.fontWeight && (style.fontWeight == "normal" ||  style.fontWeight == "bold")) {
                attrs["textStyle"] = style.fontWeight;
            }
            if (style.color) {
                attrs["textColor"] = translateRGBAColor2HexWithOpacity(style.color, style.opacity);
            }
            if (style.textAlign && (style.textAlign == "left" || style.textAlign ==  "center" ||  style.textAlign == "right")) {
                attrs["horizontalGravity"] = getAttrsValue(style.textAlign);
            }
            if (style.verticalAlign || (style.verticalAlign == "top" ||  style.verticalAlign == "bottom" ||  style.verticalAlign ==  "middle")) {
                attrs["verticalGravity"] = style.verticalAlign != "middle" ? style.verticalAlign : "center";
            }
            if (style.fontSize) {
                attrs["textSize"] = getNumberUnitValue(style.fontSize);
            }
            if (style.textOverflow && style.textOverflow == "ellipsis") {
              attrs["ellipsize"] = "end";
            }
            if (props.text) {
              if (isExpression(props.text)) {
                let textValue = parsePropsValue(props.text);
                attrs["text"] = "${"+ textValue + "}";
              } else {
                attrs["text"] = props.text;
              }
            }
          }
        });
        return attrs;
    }

    /**
     * 生成属性
     * @param attrs
     */
    const buildAllAttrsWithinTag = (attrs) => {
        if (attrs == null || typeof attrs != 'object') {
            return '';
        }
        let result = '';
        for (const attr in attrs) {
            if (attrs[attr]) {
              result += ` ${attr}="${attrs[attr]}"`;
            }
        }
        return result;
    }

    /**
     * 转化成string
     * @param {*} value
     * @returns
     */
    const toString = (value) => {
        if ({}.toString.call(value) === '[object Function]') {
            return value.toString()
        }
        if (typeof value === 'string') {
            return value
        }
        if (typeof value === 'object') {
            return JSON.stringify(value, (key, value) => {
                if (typeof value === 'function') {
                    return value.toString()
                }
                return value
            })
        }
        return String(value)
    }

    /**
     * 解析属性的值
     * @param {*} value
     * @returns
     */
    const parsePropsValue = (value) => {
        if (typeof value !== 'string') {
            return value;
        }
        if (isExpression(value)) {
            return value.slice(2, -2);
        }
        return value;
    }

    /**
     * 处理循环
     * @param {*} loop    会
     * @param {*} loopArg 循环变量
     * @param {*} render  已转化的结果
     * @returns
     */
    const parseLoopWithRender = (loop, loopArg, render) => {
        let data;
        let loopArgItem = (loopArg && loopArg[0]) || 'item';
        if (Array.isArray(loop)) {
            data = toString(loop);
        } else if (isExpression(loop)) {
            data = loop.slice(2, -2);
        }
        let loopData = "${"+ data +"}";
        render =  `\n<foreach var="${loopArgItem}"  items="${loopData}">\n${render}\n</foreach>`;
        const re = new RegExp(`this.${loopArgItem}`, 'g');
        render = render.replace(re, loopArgItem);
        return render;
    }

    /**
     * 处理WithRender
     */
     const parseConditionWithRender = (condition, render) => {
      if (typeof condition === 'boolean') {
        return `\n<if test="${condition}">\n${render}\n</if>`;
      } else if (typeof condition === 'string' && isExpression(condition)) {
        let conditionData = "${"+ condition.slice(2, -2) + "}";
        return `\n<if test="${conditionData}">\n${render}\n</if>`;
      }
      return render;
    }
 
    /**
     * 格式化xml
     */
    const formatXML = (xml,tab) => {
      let formatted = ''; 
      let indent = '';
      tab = tab || '\t';
      xml.split(/>\s*</).forEach(function (node) {
          if (node.match(/^\/\w/)) indent = indent.substring(tab.length);
          formatted += indent + '<' + node + '>\r\n';
          if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab;
      });
      return formatted.substring(1, formatted.length - 3);
    }

    /**
     * 获取mock数据(这里有约定，数据放在state中)，如:
     * 
     * "state": {
          "data": [{
           "title": "小户型卫浴怎样才能装得高大上？",
           "coverImage": "https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png",
           "readCount": 200,
           "user": {
              "userImage": "https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png",
              "userName": "时尚家居"
           },
           "url": "https://www.imgcook.com"
          }, {
          "title": "拥有超多功能的40平米简约小公寓了解一下",
          "coverImage": "https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png",
          "readCount": 500,
          "user": {
            "userImage": "https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png",
            "userName": "花花设计工作"
          },
          "url": "https://www.imgcook.com/docs"
        }]
      }
     */
    const parseMockFromSchema = (schema) => {
      if (!schema) {
        return {};
      }
      if (!schema.state) {
        return {};
      }
      return JSON.stringify(schema.state,null,3);
    }

    /**
     * 生成目标的dsl(动态布局的dsl)
     * @param {*} schema  schema描述
     * @returns
     */
    const generatetTargetDSLWithSchema = (schema) => {
        let dynamicXML;
        const type = schema.componentName.toLowerCase();
        switch (type) {
            /**
             * 文本
             */
            case 'text':
                let textAttrs = parseTextAttrsFromProps(schema.props);
                let textAttrString = buildAllAttrsWithinTag(textAttrs);
                dynamicXML = `<Text ${textAttrString}/>\n`;
                break;

            /**
             * 图片
             */
            case 'image':
                let imageAttrs = parseImageAttrsFromProps(schema.props);
                let imageAttrString = buildAllAttrsWithinTag(imageAttrs);
                dynamicXML = `<Image ${imageAttrString}/>\n`;
                break;

            /**
             * 容器
             */
            case 'div':
            case 'page':
            case 'block':
                let flexAttrs = parseContainerAttrsFromProps(schema.props);
                let otherAttrString = buildAllAttrsWithinTag(flexAttrs);
                if (schema.children && schema.children.length ) {
                    dynamicXML = `<Flex ${otherAttrString}>\n${transformFromSchema(schema.children)}\n</Flex>`;
                } else {
                    dynamicXML = `<Flex ${otherAttrString}/>\n`;
                }
                break;
        }
        /**
         * 处理循环
         */
        if (schema.loop) {
          dynamicXML = parseLoopWithRender(schema.loop, schema.loopArgs, dynamicXML);
        }
        /**
         * 处理条件
         */
        if (schema.condition) {
          dynamicXML = parseConditionWithRender(schema.condition, dynamicXML);
        }
        return dynamicXML;
    }

    /**
     * 根据schema开始DSL转化(动态布局的DSL)
     * @param schema schema描述
     * @returns {string}
     */
    const transformFromSchema = (schema) => {
        let result = '';
        if (Array.isArray(schema)) {
            schema.forEach((layer) => {
                result += transformFromSchema(layer);
            });
        } else {
            result += generatetTargetDSLWithSchema(schema);
        }
        return result;
    }

    /**
     * 开始解析
     */
    let targetDSL = transformFromSchema(schema);
    let re = new RegExp("this.state.", 'g');
    targetDSL = targetDSL.replace(re, "");
    re = new RegExp("this.", 'g');
    targetDSL = targetDSL.replace(re, "");

    /**
     * 业务数据类型
     */
    let bussinessData =   parseMockFromSchema(schema);

    return {
        panelDisplay: [
          {
            panelName: `dynamic_component_ui.xml`,
            panelType: 'BuilderRaxStyle',
            panelValue: formatXML(`<?xml version="1.0" encoding="utf-8"?>\n${targetDSL}`)
          },
          {
            panelName: `dynamic_data_mock.json`,
            panelType: 'BuilderRaxStyle',
            panelValue: bussinessData
          },
          {
            panelName: `dynamic_data_model.json`,
            panelType: 'BuilderRaxStyle',
            panelValue: bussinessData
          }
        ],
        prettierOpt: {
          printWidth: 120,
          singleQuote: false,
        },
        noTemplate: true,
    }
}
