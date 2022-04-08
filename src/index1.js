module.exports = function (schema, option) {
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
        return (parseInt(value) / SCALE_UNIT).toFixed(2);
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
        alpha = translateAlpha2HexString(alpha);
        red = translateRGB2HexString(red);
        green = translateRGB2HexString(green);
        blue = translateRGB2HexString(blue);
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
     * 获取公共属性
     */
    const parseCommonAttrsFromStyle = (type, style) => {
        let targetAttrs = {};
        let targetType = type.toLowerCase();
        if (style == null || typeof style != 'object') {
            return;
        }
        if (type == 'image') {
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
            targetAttrs['paddingTop'] = getNumberUnitValue(style.paddingTop);
        }
        if (style.paddingRight) {
            targetAttrs['paddingRight'] = getNumberUnitValue(style.paddingRight);
        }
        if (style.paddingBottom) {
            targetAttrs['paddingBottom'] = getNumberUnitValue(style.paddingBottom);
        }
        if (style.paddingLeft) {
            targetAttrs['paddingLeft'] = getNumberUnitValue(style.paddingLeft);
        }
        if (style.paddingTop && style.paddingRight && style.paddingBottom && style.paddingLeft) {
            if (style.paddingTop == style.paddingRight && style.paddingRight == style.paddingBottom && style.paddingBottom == style.paddingLeft
                && style.paddingLeft == style.paddingTop) {
                targetAttrs['padding'] = getNumberUnitValue(style.paddingTop);
                targetAttrs['paddingBottom'] = undefined;
                targetAttrs['paddingLeft'] = undefined;
                targetAttrs['paddingRight'] = undefined;
                targetAttrs['paddingTop'] = undefined;
            }
        }
        if (style.marginTop) {
            targetAttrs['marginTop'] = getNumberUnitValue(style.marginTop);
        }
        if (style.marginRight) {
            targetAttrs['marginRight'] = getNumberUnitValue(style.marginRight);
        }
        if (style.marginBottom) {
            targetAttrs['marginBottom'] = getNumberUnitValue(style.marginBottom);
        }
        if (style.marginLeft) {
            targetAttrs['marginLeft'] = getNumberUnitValue(style.marginLeft);
        }
        if (style.marginTop && style.marginRight && style.marginBottom && style.marginLeft) {
            if (style.marginTop == style.marginRight && style.marginRight == style.marginBottom && style.marginBottom == style.marginLeft
                && style.marginLeft == style.marginTop) {
                targetAttrs['margin'] = getNumberUnitValue(style.marginTop);
                targetAttrs['marginBottom'] = undefined;
                targetAttrs['marginLeft'] = undefined;
                targetAttrs['marginRight'] = undefined;
                targetAttrs['marginTop'] = undefined;
            }
        }
        if (style.display && style.display === 'none') {
            targetAttrs['visibility'] = 'gone'
        }
        if (style.position && (style.position === 'relative' || style.position === 'absolute')) {
            targetAttrs['position'] = style.position;
        }
        if (style.top) {
            targetAttrs['top'] = getNumberUnitValue(style.top);
        }
        if (style.left) {
            targetAttrs['left'] = getNumberUnitValue(style.left);
        }
        if (style.right) {
            targetAttrs['right'] = getNumberUnitValue(style.right);
        }
        if (style.bottom) {
            targetAttrs['bottom'] = getNumberUnitValue();
        }
        if (style.backgroundColor) {
            targetAttrs["background"] = translateRGBAColor2HexWithOpacity(style.backgroundColor, style.opacity);
        }
        if (style.backgroundImage) {
            //todo
        }
        if (style.borderRadius) {
            targetAttrs["borderRadius"] = getNumberUnitValue(style.borderRadius);
        }
        if (style.borderTopLeftRadius) {
            targetAttrs["borderLeftTopRadius"] = getNumberUnitValue(style.borderTopLeftRadius);
        }
        if (style.borderTopRightRadius) {
            targetAttrs["borderRightTopRadius"] = getNumberUnitValue(style.borderTopRightRadius);
        }
        if (style.borderBottomLeftRadius) {
            targetAttrs["borderLeftBottomRadius"] = getNumberUnitValue(style.borderBottomLeftRadius);
        }
        if (style.borderBottomRightRadius) {
            targetAttrs["borderRightBottomRadius"] = getNumberUnitValue(style.borderBottomRightRadius);
        }
        if (style.borderTopLeftRadius && style.borderTopRightRadius && style.borderBottomLeftRadius && style.borderBottomRightRadius) {
            if (style.borderTopLeftRadius == style.borderTopRightRadius && style.borderTopRightRadius == style.borderBottomLeftRadius &&
                style.borderBottomLeftRadius == style.borderBottomRightRadius && style.borderBottomRightRadius == style.borderTopLeftRadius) {
                targetAttrs["borderRadius"] = getNumberUnitValue(style.borderTopLeftRadius);
                targetAttrs["borderLeftTopRadius"] = undefined;
                targetAttrs["borderRightTopRadius"] = undefined;
                targetAttrs["borderLeftBottomRadius"] = undefined;
                targetAttrs["borderRightBottomRadius"] = undefined;
            }
        }
        if (style.border) {
            //todo
            targetAttrs["borderWidth"] = style.border / SCALE_UNIT;
        }
        return targetAttrs;
    }

    /**
     * 解析容器相关的属性
     * @param props 属性
     */
    const parseContainerAttrsFromProps = (props) => {
        console.log("parseContainerAttrsFromProps>>>"+JSON.stringify(props));
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
        return attrs;
    }

    /**
     * 解析图片相关的属性
     * @param props 属性
     */
    const parseImageAttrsFromProps = (props) => {
        console.log("parseImageAttrsFromProps>>>"+JSON.stringify(props));
        if (!props) {
          return {};
        }  
        let attrs = {};
        Object.keys(props).forEach((key) => {
          if (key == "style" ||key == "src") {
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
        console.log("parseTextAttrsFromProps>>>"+JSON.stringify(props));
        if (!props) {
          return {};
        }  
        let attrs =  {};
        Object.keys(props).forEach((key) => {
          if (key == "style" || key == "text") {
            let style = props.style;
            attrs = parseCommonAttrsFromStyle("text", style);
            if (style.fontWeight && (style.fontWeight in ["normal", "bold"])) {
                attrs["textStyle"] = style.fontWeight;
            }
            if (style.color) {
                attrs["textColor"] = translateRGBAColor2HexWithOpacity(style.color, style.opacity);
            }
            if (style.textAlign && (style.textAlign in ["left", "center", "right"])) {
                attrs["horizontalGravity"] = getAttrsValue(style.textAlign);
            }
            if (style.verticalAlign || (style.verticalAlign in ["top", "bottom", "middle"])) {
                attrs["verticalGravity"] = style.verticalAlign != "middle" ? style.verticalAlign : "center";
            }
            if (style.fontSize) {
                attrs["textSize"] = getNumberUnitValue(style.fontSize);
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
              result += `\t${attr} = "${attrs[attr]}" \n`;
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
     * @param {*} loop
     * @param {*} loopArg 循环变量
     * @param {*} render
     * @returns
     */
    const parseLoop = (loop, loopArg, render) => {
        let data;
        let loopArgItem = (loopArg && loopArg[0]) || 'item';
        let loopArgIndex = (loopArg && loopArg[1]) || 'index';
        if (Array.isArray(loop)) {
            data = toString(loop)
        } else if (isExpression(loop)) {
            data = loop.slice(2, -2)
        }
        const tagEnd = render.match(/^<.+?\s/)[0].length
        render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(
            tagEnd
        )}`
        // remove `this`
        const re = new RegExp(`this.${loopArgItem}`, 'g')
        render = render.replace(re, loopArgItem)
        return `${data}.map((${loopArgItem}, ${loopArgIndex}) => {
      return (${render});
    })`
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
                dynamicXML = `<Text\n${textAttrString}/>\n`;
                break;

            /**
             * 图片
             */
            case 'image':
                let imageAttrs = parseImageAttrsFromProps(schema.props);
                let imageAttrString = buildAllAttrsWithinTag(imageAttrs);
                dynamicXML = `<Image\n${imageAttrString} />\n\n`;
                break;

            /**
             * 容器
             */
            case 'div':
            case 'page':
            case 'block':
                let flexAttrs = parseContainerAttrsFromProps(schema.props);
                let otherAttrString = buildAllAttrsWithinTag(flexAttrs);
                if (schema.children && schema.children.length) {
                    dynamicXML = `<Flex ${otherAttrString}>${transformFromSchema(schema.children)}\n</Flex>`;
                } else {
                    dynamicXML = `<Flex ${otherAttrString}/>`;
                }
                break;
        }
        // /**
        //  * 处理循环
        //  */
        // if (schema.loop) {
        //     dynamicXML = parseLoop(schema.loop, schema.loopArgs, dynamicXML);
        // }
        // /**
        //  * 处理条件
        //  */
        // if (schema.condition) {
        //     dynamicXML = parseCondition(schema.condition, dynamicXML);
        // }
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
          console.log(">>isArray>>"+JSON.stringify(schema));
            schema.forEach((layer) => {
                result += transformFromSchema(layer);
            });
        } else {
            // const type = schema.componentName.toLowerCase();
            // console.log(">>type>>"+type);
            // if (['page', 'block'].indexOf(type) === -1) {
            //     /**
            //      * 忽略 state/method/dataSource/lifeCycle/render
            //      */
            //      console.log(">>hit>>"+type);
            //     result += generatetTargetDSLWithSchema(schema)
            // } else {
            //   console.log(">>nohit>>"+type);
            // }
            console.log(">>isNotArray>>"+JSON.stringify(schema));
            result += generatetTargetDSLWithSchema(schema);
        }
        return result;
    }

    /**
     * 开始解析
     */
    let targetDSL = transformFromSchema(schema);

    console.log("targetDSL>>>"+JSON.stringify(targetDSL));

    return {
        panelDisplay: [
            {
                panelName: `component.xml`,
                panelValue: targetDSL,
                panelType: 'xml',
            }
        ],
        prettierOpt: {
            printWidth: 120,
            singleQuote: false,
        },
        noTemplate: true,
    }
}
