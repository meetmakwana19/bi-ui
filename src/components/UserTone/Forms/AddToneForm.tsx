import { Button, EditableTags, FieldLabel, Help, PageHeader, PageLayout, TextInput, Textarea } from '@contentstack/venus-components';
import { useHistory } from 'react-router-dom';
import '../UserTone.css';

function AddToneForm() {

  const history = useHistory();

  const content = {
    component: (
      <div className='user-tone-entry'>
        <form action="submit">
          <div className="tone-field-div">
            <FieldLabel className='tone-content-padding' htmlFor="name">Name</FieldLabel>
            <TextInput version="v2" width="full" required={true} placeholder="Enter name here..." />
          </div>
          <div className="tone-field-div">
            <FieldLabel className='tone-content-padding' htmlFor="description">User Tone
              {/* <Help text="Below are the key insights Intelligence Hub has extracted about your Tone from the provided content" /> */}
            </FieldLabel>
            <Textarea version="v2" width="full" name="description" id="tone-input" testId="tone-input-test" required={true} placeholder="Enter user tone here...." />
          </div>
          <div className="tone-field-div">
            <FieldLabel className='tone-content-padding' htmlFor="name">Tags <Help text="Tags will help you find pertinent brand Voice entries more easily." /></FieldLabel>
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
          <h2>Add User Tone&nbsp;
            <Help text="Give Intelligence Hub some of your writings to generate more accurate user specific tones." type="primary" alignment="right" />
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

export default AddToneForm