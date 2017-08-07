import React from 'react'
import './index.less'
import SearchBar from 'components/searchbar'
import EchartsViews from '../index/EchartsViews'

import {
    musicKindList,
    languageKindList,
    publishCountry,
    equipmentList
} from '../../utils/config'

export default class equipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col:'#666'
        }
    }

    // 组件渲染后，500毫秒改变一次组件颜色
    componentDidMount() {
        this.interval = setInterval(this.getRandomColor, 500);
    }

    // 组件将要死亡时清除计时器
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    searchFields = () => {
        return [{
            title: '类型(单独搜索)',
            key: 'type',
            type: 'select',
            defaultValue: 2,
            items: () => musicKindList.map(ele => ({
                value: ele.value,
                mean: ele.mean
            })),
        }, {
            title: '发行国家',
            key: 'country',
            type: 'select',
            defaultValue: '全部',
            items: () => [{
                value: 0,
                mean: '全部'
            }].concat(publishCountry.map(ele => ({
                value: ele.value,
                mean: ele.mean
            }))),
        }, {
            title: '歌曲语种',
            key: 'language',
            type: 'select',
            defaultValue: '全部',
            items: () => [{
                value: 0,
                mean: '全部'
            }].concat(languageKindList.map(ele => ({
                value: ele.value,
                mean: ele.mean
            }))),
        }, {
            title: '发行时间段',
            key: ['start', 'end'],
            type: 'rangePicker',
        },
            {
                title: '三级联动查询',
                key: 'equipment',
                type: 'cascader',
                items: () => equipmentList.map(ele => ({
                    value: ele.value,
                    label: ele.label,
                    children: ele.children
                }))
            }]
    }

    getRandomColor = () => {
        this.setState({
            col: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
        });
    }

    render() {
        // const { col } = this.state

        return (
            <div>
                <SearchBar fields={this.searchFields()} />
                <div>
                    <EchartsViews />
                    <img src={require('../../images/face.png')} width="100" alt="logo" className="lastPic" />
                    <div className="animated swing discribe">生命不息</div>
                    <div className="animated swing discribe">coding不止</div>
                </div>
            </div>
        )
    }
}