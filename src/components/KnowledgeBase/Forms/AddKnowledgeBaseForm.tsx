import React from 'react';
import { Button, EditableTags, FieldLabel, Help, PageHeader, PageLayout, TextInput, Textarea } from '@contentstack/venus-components';
import { useHistory } from 'react-router-dom';
// import '../UserTone.css';

const KnowledgeBaseForm: React.FC = () => {

    const history = useHistory();

    const content = {
        component: (
            <div className='user-tone-entry'>
                <form action="submit">
                    <div className="tone-field-div">
                        <FieldLabel className='tone-content-padding' htmlFor="name">Name</FieldLabel>
                        <TextInput version="v2" width="full" required={true} placeholder="Enter name here.." />
                    </div>
                    <div className="tone-field-div">
                        <FieldLabel className='tone-content-padding' htmlFor="description">Background Knowledge
                            {/* &nbsp;<Help text="Provide Intelligence Hub with an additional contextual information for your content" /> */}
                        </FieldLabel>
                        <Textarea version="v2" width="full" name="description" id="tone-input" testId="tone-input-test" required={true} placeholder="Add Background Knowledge here...." />
                    </div>
                    <div className="tone-field-div">
                        <FieldLabel className='tone-content-padding' htmlFor="name">Tags <Help text="Tags will help you find pertinent Knowledge Base entries more easily." /></FieldLabel>
                        <EditableTags version="v2" width="full" required={true} placeholder="Add some tags" />
                    </div>
                    <Button buttonType="primary" version="v2" >
                        Add Knowledge Base
                    </Button>

                </form>
            </div>
        )
    }

    const header = {
        component: (
            <PageHeader title={{
                label: (
                    <h2>Add Knowledge Base&nbsp;
                        <Help text="Give Intelligence Hub some of your writings to generate more accurate context specific content." type="primary" alignment="right" />
                    </h2>
                )
            }}
            />
        ),
        backNavigation: () => history.goBack(),
    }
    return (
        <div className="add-form-layout">
            <PageLayout type="edit" content={content} header={header} />
        </div>
    )
}

export default KnowledgeBaseForm