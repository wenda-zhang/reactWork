import { Avatar, Divider } from 'antd';
import '../styles/components/author.css'

export default function Author() {
    return (
        <div className="author-div comm-box">

            <div>
                <Avatar size={130} src="http://i1.hoopchina.com.cn/hupuapp/kanqiu/202101/18000fd94c824a879fbd3167d23077cf.jpg" />
            </div>

            <div className="author-introduction">
                技术帅，励志做又帅又能打的前端工程师！
                <Divider>社交</Divider>

            </div>

        </div>
    )
}