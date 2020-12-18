import { Avatar, Divider } from 'antd';
import '../styles/components/author.css'

export default function Author() {
    return (
        <div className="author-div comm-box">

            <div>
                <Avatar size={130} src="http://i-4.yxdown.com/2019/8/20/318e46a6-dd90-40a9-9d24-bc32a6cb5185.jpg" />
            </div>

            <div className="author-introduction">
                技术帅，励志做又帅又能打的前端工程师！
                <Divider>社交</Divider>

            </div>

        </div>
    )
}