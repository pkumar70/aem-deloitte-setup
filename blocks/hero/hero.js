import {Block} from '@xwalk/core'

export default class Hero extends Block {
    render(){
        const {buttonLink, buttonText} = this.props
        return `
        <a href="${buttonLink}">${buttonText}</a>
        `
    }
}