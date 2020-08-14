export default {
    // 必填
    required: function (value, errorMsg = '不能为空') {
        if (value === '' || value == null) {
            return errorMsg
        }
    },
    // 最小值
    min: function (value, length, errorMsg = `${value.length?'长度':''}不能小于${length}`) {
        let val = value.length || value
        if (val < length) {
            return errorMsg
        }
    },
    // 最大值
    max: function (value, length, errorMsg = `${value.length?'长度':''}不能大于${length}`) {
        let val = value.length || value
        if (val > length) {

            return errorMsg
        }
    },
    // 手机号校验
    mobile: function (value, errorMsg = `手机号码不正确`) {
        if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[0-9])\d{8}$/.test(value)) {
            return errorMsg
        }
    },
    // 字符串类型
    string: function (value, errorMsg = '必须为字符串类型') {
        if (typeof value !== "string") {
            return errorMsg
        }
    },
    // 字符串类型
    email: function (value, errorMsg = '邮箱格式错误') {
        if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value)) {
            return errorMsg
        }
    },
}