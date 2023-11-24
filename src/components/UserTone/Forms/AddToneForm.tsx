import { Button, EditableTags, FieldLabel, Help, PageHeader, PageLayout, TextInput, Textarea } from '@contentstack/venus-components';
import { useNavigate } from 'react-router-dom';

function AddToneForm() {

    const navigate = useNavigate();

    const content = {
        component: (
            <div className='user-tone-entry'>
            <form action="submit">
              <div className="tone-field-div">
                <FieldLabel className='tone-content-padding' htmlFor="name">Title</FieldLabel>
                <TextInput version="v2" width="full" required={true} placeholder="Type something..." />
              </div>
              <div className="tone-field-div">
                <FieldLabel className='tone-content-padding' htmlFor="description">Edit User Tone <Help text="Below are the key insights Contentstack Intelligence has extracted about your Tone from the provided content" /></FieldLabel>
                <Textarea version="v2" width="full" name="description" id="vinayak" testId="omsai" required={true} placeholder="Edit user tone here...." />
              </div>
              <div className="tone-field-div">
                <FieldLabel className='tone-content-padding' htmlFor="name">Tags <Help text="Tags will help you find pertinent Knowledge Base entries more easily." /></FieldLabel>
                <EditableTags version="v2" width="full" required={true} placeholder="Add some tags" />
              </div>
              <Button buttonType="primary" version="v2" >
                Add User Tone
              </Button>
        
            </form>
          </div>
        )
    }

    const header = {
        component: (
            <PageHeader title={{
                label: (
                    <h2>Add User Tone &nbsp;
                        <Help text="Give Brand Intelligence facts to more accurately write about any topic." type="primary" alignment="right" />
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

export default AddToneForm