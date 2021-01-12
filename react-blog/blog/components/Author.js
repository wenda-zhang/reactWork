import { Avatar, Divider } from 'antd';
import '../styles/components/author.css'

export default function Author() {
    return (
        <div className="author-div comm-box">

            <div>
                <Avatar size={130} src="http://att.gamefy.cn/files/201909/att156972170682511.jpg" />
            </div>

            <div className="author-introduction">
                技术帅，励志做又帅又能打的前端工程师！
                <Divider>社交</Divider>

            </div>

        </div>
    )
}