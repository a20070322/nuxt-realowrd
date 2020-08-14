import rules from './rules'
export default class Validator {
    rules={}
    constructor(){
        this.rules=rules
    }
    make(data,cheacks){ 
        return Object.keys(cheacks).map(key=>{
            let val = data[key]
            let rules=cheacks[key].split('|')
            return{
                key:key,
                fail:rules.map(rule=>{
                    let arg = rule.split(":")
                    let fnKey = arg.shift()
                    arg.unshift(val)
                    return this.rules[fnKey].apply(val,arg)
                }).filter(val=>val?true:false)
            }     
        }).filter(val=>val.fail.length>0?true:false)
    }
}