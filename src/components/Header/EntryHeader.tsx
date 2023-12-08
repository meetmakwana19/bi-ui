import { Help, Icon } from '@contentstack/venus-components'
import { useHistory } from 'react-router-dom'

const EntryHeader = () => {
    const histroy = useHistory();
    const navigate = (path: any) => {
      // react-router-dom v6 syntax :
      histroy.push(path);
    }
      return (
        <div className="header entry-header">
            <section className="header-left">
                <main>
                    <Icon icon="BackArrow" size="small" hover={true} hoverType="secondary" shadow="medium" onClick={() => {
                        navigate(-1)
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