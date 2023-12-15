import React from 'react';
import { Button, EditableTags, FieldLabel, Help, PageHeader, PageLayout, TextInput, Textarea } from '@contentstack/venus-components';
import { useNavigate } from 'react-router-dom';

const BrandVoiceForm:React.FC = () => {

    const navigate = useNavigate();

    const content = {
        component: (
            <div className='add-entry'>
                <form action="submit">
                    <div className="field-div">
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <TextInput version="v2" width="full" required={true} placeholder="Enter a name for knowledge base" />
                    </div>
                    <div className="field-div">
                        <FieldLabel htmlFor="description">Background description </FieldLabel> 
                        <Textarea version="v2" width="full" required={true} id="knowledge-input" testId="knowledge-input-test" placeholder="Add knowledge base here..." />
                    </div>
                    <div className="field-div">
                        <FieldLabel htmlFor="name">Tags <Help text="Tags will help you find pertinent Knowledge Base entries more easily." /></FieldLabel>
                        <EditableTags version="v2" width="full" required={true} placeholder="Select from existing tags or type to create new ones" />
                    </div>
                    <Button icon="" buttonType="primary" version="v2" >
                        Add to Brand Voice
                    </Button>

                </form>
            </div>
        )
    }

    const header = {
        component: (
            <PageHeader title={{
                label: (
                    <h2>Create Brand Voice&nbsp;
                        <Help text="Give Intelligence Hub some of your writings to generate more accurate brand specific content." type="primary" alignment="right" />
                    </h2>
                )
            }}
            />
        ),
        backNavigation: () => navigate(-1),
    }
    return (
        <div className="add-form-layout">
            <PageLayout type="edit" content={content} header={header} />
        </div>
    )
}

export default BrandVoiceForm