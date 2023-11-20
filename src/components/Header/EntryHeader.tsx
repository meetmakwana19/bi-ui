import { Help, Icon } from '@contentstack/venus-components'
import { useNavigate } from 'react-router-dom'

const EntryHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="header entry-header">
            <section className="header-left">
                <main>
                    <Icon icon="BackArrow" size="small" hover={true} hoverType="secondary" shadow="medium" onClick={() => {
                        navigate("/")
                    }} />
                    <h2>Add to knowledge base &nbsp;
                        <Help text="Give Brand Intelligence facts to more accurately write about any topic." type="primary" alignment="right" />
                    </h2>
                </main>
                <footer>
                    <div>Entry for Text <Help text="Write or copy paste text." type="primary" alignment="right" /></div>
                </footer>
            </section>
        </div>)
}

export default EntryHeader